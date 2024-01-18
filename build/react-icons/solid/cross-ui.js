"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconCrossUi = (0, _createIconComponent["default"])({
  width: 25,
  height: 25,
  innerContent: '<path d="M18.86 18.153a.5.5 0 01-.707.707l-5.647-5.647L6.86 18.86a.5.5 0 01-.707-.707l5.646-5.647L6.153 6.86a.5.5 0 11.707-.707l5.646 5.646 5.647-5.646a.5.5 0 11.707.707l-5.647 5.646 5.647 5.647z" fill="currentColor"/>'
});
var _default = IconCrossUi;
exports["default"] = _default;