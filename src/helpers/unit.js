"use strict";
Object.defineProperty(exports, "__esModule", {value: true}), exports.pxToUnitString = exports.unitToPx = exports.pxToUnitRounded = exports.pxToUnit = void 0;
const pxToUnit = ({px: t, unit: n = "px", dpi: o}) => {
  switch (n) {
    case "pt":
    default:
      return t;
    case "mm":
      return t / (o / 25.4);
    case "cm":
      return t / (o / 2.54);
    case "in":
      return t / o;
  }
};
exports.pxToUnit = pxToUnit;
const pxToUnitRounded = ({px: t, precious: n = 2, dpi: o = 72, unit: e = "px"}) => parseFloat((0, exports.pxToUnit)({px: t, dpi: o, unit: e}).toFixed(n));
exports.pxToUnitRounded = pxToUnitRounded;
const unitToPx = ({unitVal: t, dpi: n, unit: o}) => t / (0, exports.pxToUnit)({px: 1, unit: o, dpi: n});
exports.unitToPx = unitToPx;
const pxToUnitString = t => {
  const n = parseFloat((0, exports.pxToUnit)(t).toFixed(1));
  switch (t.unit) {
    case "pt":
      return `${Math.round(n)}pt`;
    case "mm":
      return `${n}mm`;
    case "cm":
      return `${n}cm`;
    case "in":
      return `${n}in`;
    default:
      return `${Math.round(n)}px`;
  }
};
exports.pxToUnitString = pxToUnitString;
