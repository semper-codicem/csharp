import {
  getConfig2
} from "./chunk-52U7HDID.js";
import {
  __name,
  select_default
} from "./chunk-NRIX67TY.js";

// node_modules/mermaid/dist/chunks/mermaid.core/chunk-EXTU4WIE.mjs
var selectSvgElement = __name((id) => {
  var _a;
  const { securityLevel } = getConfig2();
  let root = select_default("body");
  if (securityLevel === "sandbox") {
    const sandboxElement = select_default(`#i${id}`);
    const doc = ((_a = sandboxElement.node()) == null ? void 0 : _a.contentDocument) ?? document;
    root = select_default(doc.body);
  }
  const svg = root.select(`#${id}`);
  return svg;
}, "selectSvgElement");

export {
  selectSvgElement
};
//# sourceMappingURL=chunk-X3X4OLLV.js.map
