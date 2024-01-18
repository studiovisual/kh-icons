"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconFilter = (0, _createIconComponent["default"])({
  width: 25,
  height: 25,
  innerContent: '<path d="M22 5.5a.5.5 0 01-.5.5h-18a.5.5 0 010-1h18a.5.5 0 01.5.5zM19.5 9h-14a.5.5 0 000 1h14a.5.5 0 000-1zm-2 4h-10a.5.5 0 000 1h10a.5.5 0 000-1zm-2 4h-6a.5.5 0 000 1h6a.5.5 0 000-1zm-2 4h-2a.5.5 0 000 1h2a.5.5 0 000-1z" fill-rule="evenodd"/>'
});
var _default = IconFilter;
exports["default"] = _default;