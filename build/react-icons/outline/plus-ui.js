"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconPlusUi = (0, _createIconComponent["default"])({
  width: 25,
  height: 25,
  innerContent: '<path d="M21 12.5a.5.5 0 01-.5.5H13v7.5a.5.5 0 01-1 0V13H4.5a.5.5 0 010-1H12V4.5a.5.5 0 011 0V12h7.5a.5.5 0 01.5.5z"/>'
});
var _default = IconPlusUi;
exports["default"] = _default;