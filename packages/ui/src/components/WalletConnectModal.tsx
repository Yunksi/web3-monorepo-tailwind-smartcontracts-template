import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Button } from './Button';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

export interface IWalletConnectModalProps {}

const useIsMounted = () => {
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return mounted;
};

export function WalletConnectModal({}: IWalletConnectModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isMounted = useIsMounted();
  const { connect, isLoading, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();

  const handleModal = () => {
    setIsOpen((state) => !state);
  };

  const handleConnect = () => {
    if (isConnected) {
      disconnect();
    } else {
      handleModal();
    }
  };

  return (
    <>
      <Transition show={isOpen} as={Fragment}>
        <Dialog as='div' className='fixed inset-0 z-10 overflow-y-auto' onClose={setIsOpen}>
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className='inline-block h-screen align-middle' aria-hidden='true'>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <div className='flex items-center justify-between'>
                  <Dialog.Title as='h3' className='text-2xl font-extrabold text-gray-900'>
                    Connect Wallet
                  </Dialog.Title>
                  <button type='button' onClick={() => setIsOpen(false)} className='text-gray-400 hover:text-gray-500'>
                    <span className='sr-only'>Close</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  </button>
                </div>
                <div className='mt-8 flex flex-col space-y-2'>
                  {connectors.map((connector) => (
                    <Button
                      type='button'
                      disabled={isMounted && !connector.ready}
                      key={connector.name}
                      onClick={() => {
                        setIsOpen(false);
                        connect({ connector });
                      }}
                    >
                      {connector.id === 'injected' ? (isMounted ? connector.name : connector.id) : connector.name}
                      {isMounted && !connector.ready && ' (unsupported)'}
                      {isLoading && connector.name === connector?.name && '…'}
                    </Button>
                  ))}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <Button
        onClick={handleConnect}
        className='!rounded-full text-xs font-medium tracking-wider outline-none transition-all hover:-translate-y-0.5'
      >
        {!isLoading && address ? 'Disconnect'.toUpperCase() : 'Connect'.toUpperCase()}
      </Button>
    </>
  );
}
