"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconWallClock = (0, _createIconComponent["default"])({
  width: 25,
  height: 26,
  innerContent: '<path d="M12.5 21.107a8.5 8.5 0 100-17 8.5 8.5 0 000 17z" fill="#D8D6E5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.607C0 5.704 5.596.107 12.5.107a12.5 12.5 0 0112.5 12.5c0 6.904-5.596 12.5-12.5 12.5S0 19.511 0 12.607zm1 0c0 6.352 5.149 11.5 11.5 11.5 6.348-.007 11.493-5.151 11.5-11.5 0-6.35-5.149-11.5-11.5-11.5S1 6.257 1 12.607z" fill="#6F647A"/><path d="M13 12.4V6.608a.5.5 0 00-1 0v6.002c0 .13.052.254.142.346l.004.006 4 4a.5.5 0 00.707-.707L13 12.4z" fill="#6F647A"/>'
});
var _default = IconWallClock;
exports["default"] = _default;