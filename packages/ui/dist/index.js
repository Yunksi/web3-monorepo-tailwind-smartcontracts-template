"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  AccountCard: () => AccountCard,
  Button: () => Button,
  Layout: () => Layout,
  Navbar: () => Navbar,
  Toggle: () => Toggle,
  WagmiProvider: () => WagmiProvider,
  WalletConnectModal: () => WalletConnectModal
});
module.exports = __toCommonJS(src_exports);

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
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({
  children,
  className,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    className: clsx_m_default(
      "bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-md",
      className
    ),
    ...rest,
    children
  });
};

// src/components/WalletConnectModal.tsx
var import_react = require("react");
var import_react2 = require("@headlessui/react");
var import_wagmi = require("wagmi");
var import_jsx_runtime = require("react/jsx-runtime");
var useIsMounted = () => {
  const [mounted, setIsMounted] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setIsMounted(true);
  }, []);
  return mounted;
};
function WalletConnectModal({}) {
  const [isOpen, setIsOpen] = (0, import_react.useState)(false);
  const isMounted = useIsMounted();
  const { connect, error, isLoading, connectors } = (0, import_wagmi.useConnect)();
  const { disconnect } = (0, import_wagmi.useDisconnect)();
  const { address, isConnected } = (0, import_wagmi.useAccount)();
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Transition, {
        show: isOpen,
        as: import_react.Fragment,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Dialog, {
          as: "div",
          className: "fixed inset-0 z-10 overflow-y-auto",
          onClose: setIsOpen,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "min-h-screen px-4 text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Transition.Child, {
                as: import_react.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Dialog.Overlay, {
                  className: "fixed inset-0"
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "inline-block h-screen align-middle",
                "aria-hidden": "true",
                children: "\u200B"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Transition.Child, {
                as: import_react.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Dialog.Title, {
                          as: "h3",
                          className: "text-2xl font-extrabold text-gray-900",
                          children: "Connect Wallet"
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                          type: "button",
                          onClick: () => setIsOpen(false),
                          className: "text-gray-400 hover:text-gray-500",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                              className: "sr-only",
                              children: "Close"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-6 w-6",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                              "aria-hidden": true,
                              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
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
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "mt-8 flex flex-col space-y-2",
                      children: connectors.map((connector) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        onClick: handleConnect,
        children: !isLoading && address ? "Disconnect wallet" : "Connect wallet"
      })
    ]
  });
}

// src/components/WagmiProvider.tsx
var import_wagmi2 = require("wagmi");
var import_public = require("wagmi/providers/public");
var import_metaMask = require("wagmi/connectors/metaMask");
var import_walletConnect = require("wagmi/connectors/walletConnect");
var import_injected = require("wagmi/connectors/injected");
var import_jsx_runtime = require("react/jsx-runtime");
var { chains, provider, webSocketProvider } = (0, import_wagmi2.configureChains)(
  [import_wagmi2.chain.goerli, import_wagmi2.chain.polygonMumbai],
  [(0, import_public.publicProvider)()]
);
var client = (0, import_wagmi2.createClient)({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors: [
    new import_walletConnect.WalletConnectConnector({ chains, options: {} }),
    new import_metaMask.MetaMaskConnector({ chains }),
    new import_injected.InjectedConnector({ chains, options: { name: "Injected" } })
  ]
});
function WagmiProvider({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_wagmi2.WagmiConfig, {
    client,
    children
  });
}

// src/components/Layout.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "xl:pl-72 2xl:pl-80",
    children
  });
}

// src/components/Navbar.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Navbar = ({ test }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
    className: "fixed top-0 right-0 z-30 h-16 w-full transition-all duration-300 sm:h-24 xl:pl-72 2xl:pl-80",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "3xl:px-12 flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "flex items-center",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "h-6 w-6 cursor-pointer dark:text-white",
            onClick: test,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            })
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "relative order-last flex shrink-0 items-center gap-3 sm:gap-6 lg:gap-8",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalletConnectModal, {})
        })
      ]
    })
  });
};

// src/components/AccountCard.tsx
var import_react_blockies = __toESM(require("react-blockies"));
var import_jsx_runtime = require("react/jsx-runtime");
var AccountCard = ({ address }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "flex items-center rounded-lg bg-gray-100 p-5 dark:bg-slate-500",
    children: address && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_blockies.default, {
          seed: address,
          className: "relative h-10 w-10 shrink-0 overflow-hidden rounded-full",
          size: 10
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "pl-3",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
              className: "traking-wide text-sm font-medium uppercase text-gray-900 dark:text-white",
              children: "Address:"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
var import_react3 = require("@headlessui/react");
var import_react4 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var Toggle = ({ isEnabled, onClick, children }) => {
  const [enabled, setEnabled] = (0, import_react4.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "py-16",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react3.Switch, {
      checked: enabled,
      onChange: setEnabled,
      className: `${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "sr-only",
          children: "Use setting"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          "aria-hidden": "true",
          className: `${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`
        })
      ]
    })
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AccountCard,
  Button,
  Layout,
  Navbar,
  Toggle,
  WagmiProvider,
  WalletConnectModal
});
