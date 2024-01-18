"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconInterfaceExpandView = (0, _createIconComponent["default"])({
  width: 25,
  height: 25,
  innerContent: '<path fill="#D8D6E5" d="M21 1h2v15h-2zM1 20h15v3H1zm16 3v-6h6v5.5a.5.5 0 01-.5.5H17z"/><path fill="#6F647A" fill-rule="evenodd" d="M22.5 0h-21A1.5 1.5 0 000 1.5v21A1.5 1.5 0 001.5 24h21a1.5 1.5 0 001.5-1.5v-21A1.5 1.5 0 0022.5 0zM17 23v-6h6v5.5a.5.5 0 01-.5.5H17zm-1-6a1 1 0 011-1h6V1.5a.5.5 0 00-.5-.5h-21a.5.5 0 00-.5.5v21a.5.5 0 00.5.5H16v-6z" clip-rule="evenodd"/><path fill="#6F647A" d="M5.707 5H10.5a.5.5 0 000-1h-6a.5.5 0 00-.5.5v6a.5.5 0 001 0V5.707l9.146 9.146a.501.501 0 00.708-.707L5.707 5z"/>'
});
var _default = IconInterfaceExpandView;
exports["default"] = _default;