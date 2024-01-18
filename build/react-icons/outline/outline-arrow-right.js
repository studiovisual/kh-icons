"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconOutlineArrowRight = (0, _createIconComponent["default"])({
  width: 25,
  height: 25,
  innerContent: '<path d="M2 12.506c0-.133.053-.26.147-.353l7-7a.5.5 0 01.707.707l-6.147 6.146H23.5a.5.5 0 010 1H3.707l6.147 6.147a.5.5 0 01-.707.707l-7-7A.498.498 0 012 12.506z" fill="currentColor" stroke="currentColor" opacity=".5"/>'
});
var _default = IconOutlineArrowRight;
exports["default"] = _default;