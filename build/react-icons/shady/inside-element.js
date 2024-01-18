"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconInsideElement = (0, _createIconComponent["default"])({
  width: 25,
  height: 25,
  innerContent: '<rect x="17" y="1" width="7" height="7" rx=".5" fill="#D2B6F1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.5 0h-6A1.5 1.5 0 0016 1.5V4H2.5A1.5 1.5 0 001 5.5v17A1.5 1.5 0 002.5 24h17a1.5 1.5 0 001.5-1.5V9h2.5A1.5 1.5 0 0025 7.5v-6A1.5 1.5 0 0023.5 0zM20 22.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-17a.5.5 0 01.5-.5H16v2.5c.001.223.052.443.15.644l-.004.002L10 14.293V11.5a.5.5 0 00-1 0v4a.5.5 0 00.5.5h4a.5.5 0 000-1h-2.793l6.146-6.146.003-.004c.2.098.42.149.644.15H20v13.5zM23.5 8a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-6a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h6z" fill="#5F259F"/>'
});
var _default = IconInsideElement;
exports["default"] = _default;