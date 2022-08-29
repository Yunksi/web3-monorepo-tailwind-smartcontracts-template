import * as React from 'react';
import React__default from 'react';

interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}
declare const Button: React.FC<IButtonProps>;

interface IWalletConnectModalProps {
}
declare function WalletConnectModal({}: IWalletConnectModalProps): JSX.Element;

interface IWagmiProviderProps {
    children: React__default.ReactNode;
}
declare function WagmiProvider({ children }: IWagmiProviderProps): JSX.Element;

interface ILayoutProps {
    children: React__default.ReactNode;
}
declare function Layout({ children }: ILayoutProps): JSX.Element;

interface INavbarProps {
    test: () => void;
}
declare const Navbar: React__default.FC<INavbarProps>;

interface IAccountCardProps {
    address?: string;
}
declare const AccountCard: React__default.FC<IAccountCardProps>;

interface IToggleProps {
    isEnabled: boolean;
    onClick: () => void;
    children: React__default.ReactNode;
}
declare const Toggle: React__default.FC<IToggleProps>;

export { AccountCard, Button, IAccountCardProps, IButtonProps, ILayoutProps, INavbarProps, IToggleProps, IWagmiProviderProps, IWalletConnectModalProps, Layout, Navbar, Toggle, WagmiProvider, WalletConnectModal };
