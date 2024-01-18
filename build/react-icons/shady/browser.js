"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconBrowser = (0, _createIconComponent["default"])({
  width: 25,
  height: 25,
  innerContent: '<path d="M24 6H9V3h14.5a.5.5 0 01.5.5V6z" fill="#D2B6F1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2h22c.828 0 1.5.672 1.5 1.5v18c0 .828-.672 1.5-1.5 1.5h-22C.672 23 0 22.328 0 21.5v-18C0 2.672.672 2 1.5 2zm0 1a.5.5 0 00-.5.5V6h7V3H1.5zM24 21.5a.5.5 0 01-.5.5h-22a.5.5 0 01-.5-.5V7h23v14.5zM9 6h15V3.5a.5.5 0 00-.5-.5H9v3z" fill="#5F259F"/><path fill="#5F259F" d="M2 4h1v1H2zM4 4h1v1H4zM6 4h1v1H6z"/>'
});
var _default = IconBrowser;
exports["default"] = _default;