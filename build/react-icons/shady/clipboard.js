"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconClipboard = (0, _createIconComponent["default"])({
  width: 24,
  height: 24,
  innerContent: '<path fill="#FFE292" d="M14.402 2.88V14.4H1.922v2.88h15.36V2.88h-2.88z"/><path fill="#FFE292" d="M19.202 6.72V19.2H5.762v2.88h16.32V6.72h-2.88z"/><path fill="#5F259F" fill-rule="evenodd" d="M22.08 5.76h-3.84V2.88a.96.96 0 00-.96-.96H1.92a.96.96 0 00-.96.96v14.4c0 .53.43.96.96.96H4.8v3.84c0 .53.43.96.96.96h16.32a.96.96 0 00.96-.96V6.72a.96.96 0 00-.96-.96zM1.92 2.88h15.36v14.4H1.92V2.88zm3.84 19.2h16.32V6.72h-3.84v10.56a.96.96 0 01-.96.96H5.76v3.84z" clip-rule="evenodd"/>'
});
var _default = IconClipboard;
exports["default"] = _default;