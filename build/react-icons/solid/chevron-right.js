"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconChevronRight = (0, _createIconComponent["default"])({
  width: 25,
  height: 25,
  innerContent: '<path d="M17.847 12.847l-9 9a.5.5 0 01-.707-.707l8.647-8.646L8.14 3.847a.5.5 0 01.707-.707l9 9a.5.5 0 010 .707z" fill="currentColor" stroke="currentColor"/>'
});
var _default = IconChevronRight;
exports["default"] = _default;