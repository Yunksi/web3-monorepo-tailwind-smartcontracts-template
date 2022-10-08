'use strict';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, 'default', { value: mod, enumerable: true }) : target,
    mod
  )
);
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AccountCard: () => AccountCard,
  Checkbox: () => Checkbox,
  Input: () => Input,
  Layout: () => Layout,
  Loader: () => Loader,
  Navbar: () => Navbar,
  Switch: () => Switch,
  TOAST_OPTIONS: () => TOAST_OPTIONS,
  Textarea: () => Textarea,
  ToastContainer: () => ToastContainer,
  WagmiProvider: () => WagmiProvider,
  WalletConnectModal: () => WalletConnectModal,
  createToast: () => createToast,
  default: () => Button_default,
});
module.exports = __toCommonJS(src_exports);

// src/components/WalletConnectModal.tsx
var import_react2 = require('react');
var import_ethers = require('ethers');
var import_react3 = require('@headlessui/react');
var import_wagmi = require('wagmi');
var import_lib = require('lib');
var import_hi = require('react-icons/hi');

// ../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t,
    f,
    n = '';
  if ('string' == typeof e || 'number' == typeof e) n += e;
  else if ('object' == typeof e)
    if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += ' '), (n += f));
    else for (t in e) e[t] && (n && (n += ' '), (n += t));
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ''; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += ' '), (n += t));
  return n;
}
var clsx_m_default = clsx;

// src/components/button/Button.tsx
var import_react = require('react');

// src/components/loader/Loader.tsx
var import_jsx_runtime = require('react/jsx-runtime');
var variants = {
  blink: 'animate-blink',
  scaleUp: 'animate-scale-up',
  moveUp: 'animate-move-up',
};
var sizes = {
  small: 'w-1.5 h-1.5',
  medium: 'w-2.5 h-2.5',
  large: 'w-3 h-3',
};
function handleLoaderPosition(size) {
  return size === 'small' ? 'relative top-1.5' : 'relative top-3';
}
function handleVariantClasses(variant, size) {
  return variant === 'moveUp' && size === 'small' ? 'animate-move-up-small' : variants[variant];
}
var Loader = ({ tag = 'div', size = 'medium', variant = 'moveUp', showOnlyThreeDots, className }) => {
  let Component = tag;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Component, {
    className: clsx_m_default('flex items-center gap-2', variant === 'moveUp' && handleLoaderPosition(size), className),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)('span', {
        className: clsx_m_default('rounded-full bg-current', handleVariantClasses(variant, size), sizes[size]),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)('span', {
        className: clsx_m_default(
          'animation-delay-200 rounded-full bg-current',
          handleVariantClasses(variant, size),
          sizes[size]
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)('span', {
        className: clsx_m_default(
          'animation-delay-500 rounded-full bg-current',
          handleVariantClasses(variant, size),
          sizes[size]
        ),
      }),
      variant === 'moveUp' && !showOnlyThreeDots
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)('span', {
            className: clsx_m_default(
              'animation-delay-700 rounded-full bg-current',
              handleVariantClasses(variant, size),
              sizes[size]
            ),
          })
        : null,
    ],
  });
};

// src/components/button/ButtonLoader.tsx
var import_jsx_runtime = require('react/jsx-runtime');
var ButtonLoader = ({ size, variant }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)('span', {
    className: 'absolute inset-0 flex h-full w-full items-center justify-center',
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, {
      tag: 'span',
      size,
      variant,
      showOnlyThreeDots: true,
    }),
  });
};
ButtonLoader.displayName = 'ButtonLoader';
var ButtonLoader_default = ButtonLoader;

// src/components/button/Button.tsx
var import_jsx_runtime = require('react/jsx-runtime');
var shapes = {
  rounded: ['rounded-md sm:rounded-lg'],
  pill: ['rounded-full'],
  circle: ['rounded-full'],
};
var variants2 = {
  ghost: ['bg-transparent'],
  solid: ['text-white'],
  transparent: ['bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800'],
};
var colors = {
  primary: ['text-brand', 'bg-brand', 'border-brand'],
  white: ['text-gray-900', 'bg-white', 'border-white'],
  gray: ['text-gray-900', 'bg-gray-100', 'border-gray-100'],
  success: ['text-green-500', 'bg-green-500', 'border-green-500'],
  info: ['text-blue-500', 'bg-blue-500', 'border-blue-500'],
  warning: ['text-yellow-500', 'bg-yellow-500', 'border-yellow-500'],
  danger: ['text-red-500', 'bg-red-500', 'border-red-500'],
};
var sizes2 = {
  large: ['px-7 sm:px-9 h-11 sm:h-13', 'w-11 h-11 sm:w-13 sm:h-13'],
  medium: ['px-5 sm:px-8 h-10 sm:h-12', 'h-10 w-10 sm:w-12 sm:h-12'],
  small: ['px-7 h-10', 'w-10 h-10'],
  mini: ['px-4 h-8', 'w-8 h-8'],
};
var Button = (0, import_react.forwardRef)(
  (
    {
      children,
      className,
      isLoading,
      disabled,
      fullWidth,
      shape = 'pill',
      variant = 'solid',
      color = 'primary',
      size = 'medium',
      loaderSize = 'small',
      loaderVariant = 'scaleUp',
      onClick,
      ...buttonProps
    },
    ref
  ) => {
    const colorClassNames = colors[color];
    const sizeClassNames = sizes2[size];
    const buttonRef = (0, import_react.useRef)(null);
    (0, import_react.useImperativeHandle)(ref, () => buttonRef.current);
    const clickHandler = (event) => {
      if (!isLoading && buttonRef.current) {
        const rect = buttonRef.current;
      }
      onClick && onClick(event);
    };
    let buttonColorClassNames = '';
    let buttonDripColor = '';
    switch (variant) {
      case 'ghost':
        buttonColorClassNames = clsx_m_default('border-2 border-solid', colorClassNames[0], colorClassNames[2]);
        buttonDripColor = 'rgba(0, 0, 0, 0.1)';
        break;
      case 'transparent':
        buttonColorClassNames = clsx_m_default(
          colorClassNames[0],
          disabled || isLoading
            ? ''
            : 'hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800'
        );
        buttonDripColor = 'rgba(0, 0, 0, 0.1)';
        break;
      default:
        buttonColorClassNames = clsx_m_default(colorClassNames[1], colorClassNames[2]);
        buttonDripColor = 'rgba(255, 255, 255, 0.3)';
        break;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('button', {
      ref: buttonRef,
      onClick: clickHandler,
      className: clsx_m_default(
        'relative inline-flex shrink-0 items-center justify-center overflow-hidden text-center text-xs font-medium tracking-wider outline-none transition-all sm:text-sm',
        !disabled ? buttonColorClassNames : 'cursor-not-allowed bg-gray-100 text-gray-400',
        disabled || isLoading || variant === 'transparent'
          ? ''
          : 'hover:shadow-large focus:shadow-large hover:-translate-y-0.5 focus:-translate-y-0.5 focus:outline-none',
        isLoading && 'pointer-events-auto cursor-default focus:outline-none',
        fullWidth && 'w-full',
        color === 'white' || color === 'gray' ? 'text-gray-900 dark:text-white' : variants2[variant],
        shapes[shape],
        shape === 'circle' ? `${sizeClassNames[1]}` : `${sizeClassNames[0]}`,
        className
      ),
      disabled,
      ...buttonProps,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)('span', {
          className: clsx_m_default(isLoading && 'invisible opacity-0'),
          children,
        }),
        isLoading &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLoader_default, {
            size: loaderSize,
            variant: loaderVariant,
          }),
      ],
    });
  }
);
Button.displayName = 'Button';
var Button_default = Button;

// src/components/WalletConnectModal.tsx
var import_jsx_runtime = require('react/jsx-runtime');
function WalletConnectModal({}) {
  const [isOpen, setIsOpen] = (0, import_react2.useState)(false);
  const [roundedBalance, setRoundedBalance] = (0, import_react2.useState)('');
  const isMounted = (0, import_lib.useIsMounted)();
  const { connect, isLoading, connectors } = (0, import_wagmi.useConnect)();
  const { disconnect } = (0, import_wagmi.useDisconnect)();
  const { address, isConnected } = (0, import_wagmi.useAccount)();
  const { data: balance } = (0, import_wagmi.useBalance)({
    addressOrName: address,
    onSuccess: (data) => {
      let test = import_ethers.utils.formatEther(data.value);
      test = (+test).toFixed(4);
      setRoundedBalance(test);
    },
  });
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children: address
      ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('div', {
          className: 'flex items-center gap-3 sm:gap-6 lg:gap-8',
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)('div', {
              className: 'relative',
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react3.Menu, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Menu.Button, {
                    className:
                      'border-3 shadow-main hover:shadow-large block h-10 w-10 overflow-hidden rounded-full border-solid border-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all hover:-translate-y-0.5 dark:border-gray-700 sm:h-12 sm:w-12',
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Transition, {
                    enter: 'ease-out duration-300',
                    enterFrom: 'opacity-0 translate-y-4',
                    enterTo: 'opacity-100 translate-y-0',
                    leave: 'ease-in duration-300',
                    leaveFrom: 'opacity-100 translate-y-0',
                    leaveTo: 'opacity-0 translate-y-4',
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react3.Menu.Items, {
                      className:
                        'shadow-large absolute -right-20 mt-3 w-72 origin-top-right rounded-lg bg-white dark:bg-gray-900 sm:-right-14',
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Menu.Item, {
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)('div', {
                            className: 'border-b border-dashed border-gray-200 p-3 dark:border-gray-700',
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('a', {
                              href: '/profile',
                              className:
                                'flex items-center gap-3 rounded-lg py-2.5 px-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800',
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)('span', {
                                  className:
                                    'h-8 w-8 rounded-full border-2 border-solid border-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:border-gray-700',
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)('span', {
                                  className: 'grow uppercase',
                                  children: 'View Your Profile',
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_hi.HiOutlineArrowCircleRight, {
                                  className: 'h-6 w-6',
                                }),
                              ],
                            }),
                          }),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Menu.Item, {
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Menu.Item, {
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('div', {
                              className: 'border-b border-dashed border-gray-200 px-6 py-5 dark:border-gray-700',
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('div', {
                                  className: 'flex items-center justify-between gap-3',
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)('span', {
                                      className:
                                        'text-sm font-medium -tracking-tighter text-gray-600 dark:text-gray-400',
                                      children: 'Balance',
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('span', {
                                      className:
                                        'rounded-lg bg-gray-100 px-2 py-1 text-sm tracking-tighter dark:bg-gray-800',
                                      children: [address.slice(0, 6), '...', address.slice(address.length - 6)],
                                    }),
                                  ],
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('div', {
                                  className: 'mt-3 font-medium uppercase tracking-wider text-gray-900 dark:text-white',
                                  children: [roundedBalance, ' ', balance == null ? void 0 : balance.symbol],
                                }),
                              ],
                            }),
                          }),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Menu.Item, {
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)('div', {
                            className: 'p-3',
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)('div', {
                              className:
                                'flex cursor-pointer items-center gap-3 rounded-lg py-2.5 px-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800',
                              onClick: handleConnect,
                              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)('span', {
                                className: 'grow uppercase',
                                children: 'Disconnect',
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)('a', {
              href: '/create-nft',
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button_default, {
                className: 'shadow-main hover:shadow-large',
                children: 'CREATE',
              }),
            }),
          ],
        })
      : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Transition, {
              show: isOpen,
              as: import_react2.Fragment,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Dialog, {
                as: 'div',
                className: 'fixed inset-0 z-10 overflow-y-auto',
                onClose: setIsOpen,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('div', {
                  className: 'min-h-screen px-4 text-center',
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Transition.Child, {
                      as: import_react2.Fragment,
                      enter: 'ease-out duration-300',
                      enterFrom: 'opacity-0',
                      enterTo: 'opacity-100',
                      leave: 'ease-in duration-200',
                      leaveFrom: 'opacity-100',
                      leaveTo: 'opacity-0',
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Dialog.Overlay, {
                        className: 'fixed inset-0',
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)('span', {
                      className: 'inline-block h-screen align-middle',
                      'aria-hidden': 'true',
                      children: '\u200B',
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Transition.Child, {
                      as: import_react2.Fragment,
                      enter: 'ease-out duration-300',
                      enterFrom: 'opacity-0 scale-95',
                      enterTo: 'opacity-100 scale-100',
                      leave: 'ease-in duration-200',
                      leaveFrom: 'opacity-100 scale-100',
                      leaveTo: 'opacity-0 scale-95',
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('div', {
                        className:
                          'my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all',
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('div', {
                            className: 'flex items-center justify-between',
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Dialog.Title, {
                                as: 'h3',
                                className: 'text-2xl font-extrabold text-gray-900',
                                children: 'Connect Wallet',
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('button', {
                                type: 'button',
                                onClick: () => setIsOpen(false),
                                className: 'text-gray-400 hover:text-gray-500',
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)('span', {
                                    className: 'sr-only',
                                    children: 'Close',
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)('svg', {
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    className: 'h-6 w-6',
                                    fill: 'none',
                                    viewBox: '0 0 24 24',
                                    stroke: 'currentColor',
                                    'aria-hidden': true,
                                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)('path', {
                                      strokeLinecap: 'round',
                                      strokeLinejoin: 'round',
                                      strokeWidth: '2',
                                      d: 'M6 18L18 6M6 6l12 12',
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)('div', {
                            className: 'mt-8 flex flex-col space-y-2',
                            children: connectors.map((connector) =>
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                Button_default,
                                {
                                  type: 'button',
                                  disabled: isMounted && !connector.ready,
                                  onClick: () => {
                                    setIsOpen(false);
                                    connect({ connector });
                                  },
                                  children: [
                                    connector.id === 'injected'
                                      ? isMounted
                                        ? connector.name
                                        : connector.id
                                      : connector.name,
                                    isMounted && !connector.ready && ' (unsupported)',
                                    isLoading &&
                                      connector.name === (connector == null ? void 0 : connector.name) &&
                                      '\u2026',
                                  ],
                                },
                                connector.name
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button_default, {
              onClick: handleConnect,
              className: 'shadow-main hover:shadow-large',
              children: 'CONNECT',
            }),
          ],
        }),
  });
}

// src/components/WagmiProvider.tsx
var import_wagmi2 = require('wagmi');
var import_public = require('wagmi/providers/public');
var import_alchemy = require('wagmi/providers/alchemy');
var import_metaMask = require('wagmi/connectors/metaMask');
var import_walletConnect = require('wagmi/connectors/walletConnect');
var import_injected = require('wagmi/connectors/injected');
var import_jsx_runtime = require('react/jsx-runtime');
var alchemyKey = process.env.ALCHEMY_API_KEY;
var { chains, provider, webSocketProvider } = (0, import_wagmi2.configureChains)(
  [
    import_wagmi2.chain.goerli,
    import_wagmi2.chain.polygonMumbai,
    import_wagmi2.chain.hardhat,
    import_wagmi2.chain.localhost,
  ],
  [
    (0, import_alchemy.alchemyProvider)({
      apiKey: alchemyKey,
    }),
    (0, import_public.publicProvider)(),
  ]
);
var client = (0, import_wagmi2.createClient)({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors: [
    new import_walletConnect.WalletConnectConnector({ chains, options: {} }),
    new import_metaMask.MetaMaskConnector({ chains }),
    new import_injected.InjectedConnector({ chains, options: { name: 'Injected' } }),
  ],
});
function WagmiProvider({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_wagmi2.WagmiConfig, {
    client,
    children,
  });
}

// src/components/Layout.tsx
var import_jsx_runtime = require('react/jsx-runtime');
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)('div', {
    className: 'xl:pl-72 2xl:pl-80',
    children,
  });
}

// src/components/Navbar.tsx
var import_hi2 = require('react-icons/hi');

// src/components/switch/Switch.tsx
var import_react4 = require('@headlessui/react');
var import_jsx_runtime = require('react/jsx-runtime');
var COLOR = {
  default: (checked) => (checked ? 'bg-slate-100' : 'bg-slate-100'),
  gradient: (checked) => (checked ? 'bg-gradient-to-r from-blue to-pink' : 'bg-slate-700'),
};
var HEIGHT = {
  xs: 20,
  sm: 28,
  md: 36,
};
var WIDTH = {
  xs: 49,
  sm: 57,
  md: 65,
};
var Switch = ({ size = 'md', color = 'default', checked, onChange, checkedIcon, uncheckedIcon, id }) => {
  const height = HEIGHT[size];
  const width = WIDTH[size];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react4.Switch, {
    checked,
    onChange,
    className: clsx_m_default(
      checked ? 'bg-brand' : 'bg-brand',
      `relative inline-flex flex-shrink-0 cursor-pointer items-center rounded-full duration-200 ease-in-out ${id}`
    ),
    style: { height, width },
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)('span', {
      className: clsx_m_default(
        checked ? 'translate-x-[32px]' : 'translate-x-[2px]',
        COLOR[color](checked),
        `pointer-events-none inline-flex items-center justify-center rounded-full p-1 transition-colors duration-200 ease-in-out`
      ),
      style: { height: height - 6, width: height - 6, transform: `translate(${checked ? 30 : 2}, 0)` },
      children: checked ? checkedIcon : uncheckedIcon,
    }),
  });
};

// src/components/Navbar.tsx
var import_jsx_runtime = require('react/jsx-runtime');
var HeaderRightArea = ({ isDarkMode, themeSwitch }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('div', {
    className: 'relative order-last flex shrink-0 items-center gap-3 sm:gap-6 lg:gap-8',
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
        checked: isDarkMode,
        onChange: themeSwitch,
        size: 'sm',
        checkedIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_hi2.HiOutlineMoon, {
          className: 'text-indigo-900',
        }),
        uncheckedIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_hi2.HiOutlineSun, {
          className: 'text-teal-900',
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalletConnectModal, {}),
    ],
  });
};
var Navbar = ({ themeSwitch, isDarkMode }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)('nav', {
    className: 'fixed top-0 right-0 z-30 h-16 w-full transition-all duration-300 sm:h-24 xl:pl-72 2xl:pl-80',
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('div', {
      className: 'flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10',
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('div', {
          className: 'flex items-center',
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)('div', {
              className: 'mr-1 block sm:mr-3 xl:hidden',
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button_default, {
                className: 'h-8 w-8 !rounded-full',
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_hi2.HiOutlineMenu, {
                  className: 'h-auto w-6 text-indigo-600 md:w-auto',
                }),
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)('div', {
              className: 'flex items-center',
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                strokeWidth: 1.5,
                stroke: 'currentColor',
                className: 'h-6 w-6 cursor-pointer dark:text-white',
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)('path', {
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  d: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
                }),
              }),
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderRightArea, {
          isDarkMode,
          themeSwitch,
        }),
      ],
    }),
  });
};

// src/components/AccountCard.tsx
var import_react_blockies = __toESM(require('react-blockies'));
var import_jsx_runtime = require('react/jsx-runtime');
var AccountCard = ({ address }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)('div', {
    className: 'dark:bg-light-dark flex items-center rounded-lg bg-gray-100 p-5',
    children:
      address &&
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_blockies.default, {
            seed: address,
            className: 'relative h-10 w-10 shrink-0 overflow-hidden rounded-full',
            size: 10,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('div', {
            className: 'pl-3',
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)('h3', {
                className: 'traking-wide text-sm font-medium uppercase text-gray-900 dark:text-white',
                children: 'Address:',
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)('span', {
                className: 'mt-1 block text-xs text-gray-600 dark:text-gray-400',
                children:
                  address &&
                  `${address == null ? void 0 : address.slice(0, 6)}...${
                    address == null
                      ? void 0
                      : address.slice(
                          (address == null ? void 0 : address.length) - 4,
                          address == null ? void 0 : address.length
                        )
                  }`,
              }),
            ],
          }),
        ],
      }),
  });
};

// src/components/checkbox/Checkbox.tsx
var import_jsx_runtime = require('react/jsx-runtime');
var Checkbox = ({ set, className = '', checked, ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)('div', {
    className: 'relative flex items-center justify-center',
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)('input', {
      type: 'checkbox',
      onChange: (event) => (set ? set(event.target.checked) : null),
      className: clsx_m_default(
        'h-6 w-6 cursor-pointer appearance-none rounded-[4px] border border-slate-700 bg-slate-900 checked:border-[3px] checked:bg-gradient-to-r checked:from-blue-600 checked:to-pink-600 disabled:border-indigo-500 disabled:bg-slate-900',
        { className }
      ),
      checked,
      ...rest,
    }),
  });
};

// src/components/toast/ToastContainer.tsx
var import_ReactToastify = require('react-toastify/dist/ReactToastify.css');
var import_react_toastify = require('react-toastify');
var import_jsx_runtime = require('react/jsx-runtime');
var ToastContainer = ({ className }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_toastify.ToastContainer, {
    newestOnTop: true,
    bodyClassName: () =>
      'flex flex-col bg-dark-700 ring-1 ring-black/20 bg-slate-800 shadow-md mt-2 rounded-xl overflow-hidden',
    toastClassName: () => '',
    className,
  });
};

// src/components/toast/Toast.tsx
var import_react_toastify2 = require('react-toastify');

// src/components/toast/ToastCompleted.tsx
var import_outline = require('@heroicons/react/24/outline');
var import_jsx_runtime = require('react/jsx-runtime');
var ToastContent = ({ icon, title, summary }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('div', {
    className: 'flex items-start gap-4 p-4',
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)('div', {
        className: 'mt-0.5',
        children: icon,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('div', {
        className: 'flex flex-col gap-1',
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)('p', {
            className: 'text-slate-50',
            children: title,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)('p', {
            className: 'text-slate-400',
            children: summary,
          }),
        ],
      }),
    ],
  });
};
var ToastButtons = ({ href, onDismiss }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('div', {
    className: 'grid grid-cols-2 divide-x divide-slate-200/5',
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)('a', {
        href,
        target: '_blank',
        className: 'text-blue cursor-pointer border-t border-slate-200/5 py-3 text-center hover:bg-slate-700/20',
        children: 'View Detail',
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)('span', {
        onClick: onDismiss,
        className: 'text-blue cursor-pointer border-t border-slate-200/5 py-3 text-center hover:bg-slate-700/20',
        children: 'Dismiss',
      }),
    ],
  });
};
var ToastCompleted = ({ txHash, onDismiss }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastContent, {
        icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_outline.CheckCircleIcon, {
          width: 18,
          height: 18,
          className: 'text-green',
        }),
        title: 'Transaction Completed',
        summary: 'Test',
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastButtons, {
        href: '/',
        onDismiss,
      }),
    ],
  });
};
var ToastCompleted_default = ToastCompleted;

// src/components/toast/Toast.tsx
var import_jsx_runtime = require('react/jsx-runtime');
var TOAST_OPTIONS = {
  position: 'top-right',
  autoClose: false,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: false,
  progress: void 0,
  closeButton: false,
  icon: false,
};
var createToast = (props) => {
  const onDismiss = () => import_react_toastify2.toast.dismiss(props.txHash);
  props.promise.then(() => {
    setTimeout(onDismiss, 3e3);
    const toastId = `completed:${props.txHash}`;
    (0, import_react_toastify2.toast)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastCompleted_default, {
        ...props,
        onDismiss: () => import_react_toastify2.toast.dismiss(toastId),
      }),
      {
        ...TOAST_OPTIONS,
        toastId,
        autoClose: 5e3,
      }
    );
  });
};

// src/components/forms/input/Input.tsx
var import_react5 = require('react');
var import_jsx_runtime = require('react/jsx-runtime');
var Input = (0, import_react5.forwardRef)(
  ({ label, error, type = 'text', className, inputClassName, useUppercaseLabel = true, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('div', {
      className: clsx_m_default('text-xs sm:text-sm', className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('label', {
          children: [
            label &&
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('span', {
                className: clsx_m_default(
                  'block font-medium tracking-widest dark:text-gray-100',
                  useUppercaseLabel ? 'mb-2 uppercase sm:mb-3' : 'mb-2'
                ),
                children: [
                  label,
                  props.required &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)('sup', {
                      className: 'inline-block text-[13px] text-red-500 ltr:ml-1',
                      children: '*',
                    }),
                ],
              }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)('input', {
              type,
              ref,
              ...props,
              className: clsx_m_default(
                'dark:bg-light-dark mt-1 block h-10 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-sm  placeholder-gray-400 transition-shadow duration-200 invalid:border-red-500 invalid:text-red-600 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:invalid:border-red-500 focus:invalid:ring-red-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 dark:border-gray-700 dark:text-gray-100 dark:focus:border-gray-600 dark:focus:ring-gray-600 sm:h-12 sm:rounded-lg',
                inputClassName
              ),
            }),
          ],
        }),
        error &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)('span', {
            role: 'alert',
            className: 'mt-2 block text-red-500 sm:mt-2.5',
            children: error,
          }),
      ],
    })
);

// src/components/forms/textarea/Textarea.tsx
var import_react6 = require('react');
var import_jsx_runtime = require('react/jsx-runtime');
var Textarea = (0, import_react6.forwardRef)(({ label, error, className, inputClassName, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('div', {
    className: clsx_m_default('text-xs sm:text-sm', className),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('label', {
        children: [
          label &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)('span', {
              className: 'mb-2 block font-medium uppercase tracking-widest dark:text-gray-100 sm:mb-3',
              children: [
                label,
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)('sup', {
                  className: 'inline-block text-[13px] text-red-500 ltr:ml-1 rtl:mr-1',
                  children: '*',
                }),
              ],
            }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)('textarea', {
            ref,
            ...props,
            className: clsx_m_default(
              'dark:bg-light-dark mt-1 block h-24 w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm placeholder-gray-400 transition-shadow  duration-200 invalid:border-red-500 invalid:text-red-600 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:invalid:border-red-500 focus:invalid:ring-red-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 dark:border-gray-700 dark:text-gray-100 dark:focus:border-gray-600 dark:focus:ring-gray-600 sm:h-28 sm:rounded-lg',
              inputClassName
            ),
          }),
        ],
      }),
      error &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)('span', {
          role: 'alert',
          className: 'mt-2 block text-red-500 sm:mt-2.5',
          children: error,
        }),
    ],
  })
);
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    AccountCard,
    Checkbox,
    Input,
    Layout,
    Loader,
    Navbar,
    Switch,
    TOAST_OPTIONS,
    Textarea,
    ToastContainer,
    WagmiProvider,
    WalletConnectModal,
    createToast,
  });
