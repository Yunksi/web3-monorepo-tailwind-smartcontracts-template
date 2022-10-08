'use strict';
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  useIsMounted: () => useIsMounted,
});
module.exports = __toCommonJS(src_exports);

// src/hooks/use-is-mounted.ts
var import_react = require('react');
function useIsMounted() {
  const [mounted, setMounted] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => setMounted(true), []);
  return mounted;
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    useIsMounted,
  });
