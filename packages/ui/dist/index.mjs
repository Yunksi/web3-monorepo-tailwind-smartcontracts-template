// ../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default = clsx;

// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({
  children,
  className,
  ...rest
}) => {
  return /* @__PURE__ */ jsx("button", {
    className: clsx_m_default(
      "bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-md",
      className
    ),
    ...rest,
    children
  });
};

// src/components/WalletConnectModal.tsx
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Fragment as Fragment2, jsx as jsx2, jsxs } from "react/jsx-runtime";
var useIsMounted = () => {
  const [mounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return mounted;
};
function WalletConnectModal({}) {
  const [isOpen, setIsOpen] = useState(false);
  const isMounted = useIsMounted();
  const { connect, error, isLoading, connectors } = useConnect();
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
  return /* @__PURE__ */ jsxs(Fragment2, {
    children: [
      /* @__PURE__ */ jsx2(Transition, {
        show: isOpen,
        as: Fragment,
        children: /* @__PURE__ */ jsx2(Dialog, {
          as: "div",
          className: "fixed inset-0 z-10 overflow-y-auto",
          onClose: setIsOpen,
          children: /* @__PURE__ */ jsxs("div", {
            className: "min-h-screen px-4 text-center",
            children: [
              /* @__PURE__ */ jsx2(Transition.Child, {
                as: Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: /* @__PURE__ */ jsx2(Dialog.Overlay, {
                  className: "fixed inset-0"
                })
              }),
              /* @__PURE__ */ jsx2("span", {
                className: "inline-block h-screen align-middle",
                "aria-hidden": "true",
                children: "\u200B"
              }),
              /* @__PURE__ */ jsx2(Transition.Child, {
                as: Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                  children: [
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        /* @__PURE__ */ jsx2(Dialog.Title, {
                          as: "h3",
                          className: "text-2xl font-extrabold text-gray-900",
                          children: "Connect Wallet"
                        }),
                        /* @__PURE__ */ jsxs("button", {
                          type: "button",
                          onClick: () => setIsOpen(false),
                          className: "text-gray-400 hover:text-gray-500",
                          children: [
                            /* @__PURE__ */ jsx2("span", {
                              className: "sr-only",
                              children: "Close"
                            }),
                            /* @__PURE__ */ jsx2("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-6 w-6",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                              "aria-hidden": true,
                              children: /* @__PURE__ */ jsx2("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M6 18L18 6M6 6l12 12"
                              })
                            })
                          ]
                        })
                      ]
                    }),
                    /* @__PURE__ */ jsx2("div", {
                      className: "mt-8 flex flex-col space-y-2",
                      children: connectors.map((connector) => /* @__PURE__ */ jsxs(Button, {
                        type: "button",
                        disabled: isMounted && !connector.ready,
                        onClick: () => {
                          setIsOpen(false);
                          connect({ connector });
                        },
                        children: [
                          connector.id === "injected" ? isMounted ? connector.name : connector.id : connector.name,
                          isMounted && !connector.ready && " (unsupported)",
                          isLoading && connector.name === (connector == null ? void 0 : connector.name) && "\u2026"
                        ]
                      }, connector.name))
                    })
                  ]
                })
              })
            ]
          })
        })
      }),
      /* @__PURE__ */ jsx2(Button, {
        onClick: handleConnect,
        children: !isLoading && address ? "Disconnect wallet" : "Connect wallet"
      })
    ]
  });
}

// src/components/WagmiProvider.tsx
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { InjectedConnector } from "wagmi/connectors/injected";
import { jsx as jsx3 } from "react/jsx-runtime";
var { chains, provider, webSocketProvider } = configureChains(
  [chain.goerli, chain.polygonMumbai],
  [publicProvider()]
);
var client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors: [
    new WalletConnectConnector({ chains, options: {} }),
    new MetaMaskConnector({ chains }),
    new InjectedConnector({ chains, options: { name: "Injected" } })
  ]
});
function WagmiProvider({ children }) {
  return /* @__PURE__ */ jsx3(WagmiConfig, {
    client,
    children
  });
}

// src/components/Layout.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function Layout({ children }) {
  return /* @__PURE__ */ jsx4("div", {
    className: "xl:pl-72 2xl:pl-80",
    children
  });
}

// src/components/Navbar.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var Navbar = ({ test }) => {
  return /* @__PURE__ */ jsx5("nav", {
    className: "fixed top-0 right-0 z-30 h-16 w-full transition-all duration-300 sm:h-24 xl:pl-72 2xl:pl-80",
    children: /* @__PURE__ */ jsxs2("div", {
      className: "3xl:px-12 flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10",
      children: [
        /* @__PURE__ */ jsx5("div", {
          className: "flex items-center",
          children: /* @__PURE__ */ jsx5("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "h-6 w-6 cursor-pointer dark:text-white",
            onClick: test,
            children: /* @__PURE__ */ jsx5("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            })
          })
        }),
        /* @__PURE__ */ jsx5("div", {
          className: "relative order-last flex shrink-0 items-center gap-3 sm:gap-6 lg:gap-8",
          children: /* @__PURE__ */ jsx5(WalletConnectModal, {})
        })
      ]
    })
  });
};

// src/components/AccountCard.tsx
import Blockies from "react-blockies";
import { Fragment as Fragment3, jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var AccountCard = ({ address }) => {
  return /* @__PURE__ */ jsx6("div", {
    className: "flex items-center rounded-lg bg-gray-100 p-5 dark:bg-slate-500",
    children: address && /* @__PURE__ */ jsxs3(Fragment3, {
      children: [
        /* @__PURE__ */ jsx6(Blockies, {
          seed: address,
          className: "relative h-10 w-10 shrink-0 overflow-hidden rounded-full",
          size: 10
        }),
        /* @__PURE__ */ jsxs3("div", {
          className: "pl-3",
          children: [
            /* @__PURE__ */ jsx6("h3", {
              className: "traking-wide text-sm font-medium uppercase text-gray-900 dark:text-white",
              children: "Address:"
            }),
            /* @__PURE__ */ jsx6("span", {
              className: "mt-1 block text-xs text-gray-600 dark:text-gray-400",
              children: address && `${address == null ? void 0 : address.slice(0, 6)}...${address == null ? void 0 : address.slice((address == null ? void 0 : address.length) - 4, address == null ? void 0 : address.length)}`
            })
          ]
        })
      ]
    })
  });
};

// src/components/Toggle.tsx
import { Switch } from "@headlessui/react";
import { useState as useState2 } from "react";
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var Toggle = ({ isEnabled, onClick, children }) => {
  const [enabled, setEnabled] = useState2(false);
  return /* @__PURE__ */ jsx7("div", {
    className: "py-16",
    children: /* @__PURE__ */ jsxs4(Switch, {
      checked: enabled,
      onChange: setEnabled,
      className: `${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`,
      children: [
        /* @__PURE__ */ jsx7("span", {
          className: "sr-only",
          children: "Use setting"
        }),
        /* @__PURE__ */ jsx7("span", {
          "aria-hidden": "true",
          className: `${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`
        })
      ]
    })
  });
};
export {
  AccountCard,
  Button,
  Layout,
  Navbar,
  Toggle,
  WagmiProvider,
  WalletConnectModal
};
