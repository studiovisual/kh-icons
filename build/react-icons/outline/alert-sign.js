"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconAlertSign = (0, _createIconComponent["default"])({
  width: 25,
  height: 25,
  innerContent: '<path d="M12.5 0A12.5 12.5 0 1025 12.5 12.5 12.5 0 0012.5 0zm0 24A11.5 11.5 0 1124 12.5 11.513 11.513 0 0112.5 24zM12 8h1v6h-1zm0 8h1v1h-1z" fill-rule="evenodd"/>'
});
var _default = IconAlertSign;
exports["default"] = _default;