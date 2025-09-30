import {
  parse
} from "./chunk-KOJKEXB2.js";
import "./chunk-LP7NASOL.js";
import "./chunk-DXFHSIAY.js";
import "./chunk-LOUS3ORY.js";
import "./chunk-JY63U7VU.js";
import "./chunk-NJEFZSS6.js";
import "./chunk-ZO4PATZI.js";
import "./chunk-VLUTPDKN.js";
import "./chunk-2BVTMYVL.js";
import {
  package_default
} from "./chunk-U27DZJXU.js";
import {
  selectSvgElement
} from "./chunk-X3X4OLLV.js";
import "./chunk-Y5CP76GX.js";
import "./chunk-LAOUMOYT.js";
import {
  configureSvgSize
} from "./chunk-52U7HDID.js";
import "./chunk-556QAFCJ.js";
import {
  __name,
  log
} from "./chunk-NRIX67TY.js";
import "./chunk-FDBJFBLO.js";

// node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-F6ZHWCRC.mjs
var parser = {
  parse: __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = {
  version: package_default.version + (true ? "" : "-tiny")
};
var getVersion = __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
//# sourceMappingURL=infoDiagram-F6ZHWCRC-XSGROQAV.js.map
