"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconTextBox = (0, _createIconComponent["default"])({
  width: 24,
  height: 24,
  innerContent: '<path fill="#FFE292" d="M18.24 2.88v14.88a.48.48 0 01-.48.48H2.88v2.88h18.24V2.88h-2.88z"/><path fill="#39264F" fill-rule="evenodd" d="M24 2.88c0 .53-.43.96-.96.96h-.96v16.32h.96c.53 0 .96.43.96.96v1.92c0 .53-.43.96-.96.96h-1.92a.96.96 0 01-.96-.96v-.96H3.84v.96c0 .53-.43.96-.96.96H.96a.96.96 0 01-.96-.96v-1.92c0-.53.43-.96.96-.96h.96V3.84H.96A.96.96 0 010 2.88V.96C0 .43.43 0 .96 0h1.92c.53 0 .96.43.96.96v.96h16.32V.96c0-.53.43-.96.96-.96h1.92c.53 0 .96.43.96.96v1.92zM23.04.96h-1.92v1.92h1.92V.96zM.96 2.88V.96h1.92v1.92H.96zm0 18.24v1.92h1.92v-1.92H.96zm22.08 0v1.92h-1.92v-1.92h1.92zm-2.88 0c0-.53.43-.96.96-.96V3.84a.96.96 0 01-.96-.96H3.84c0 .53-.43.96-.96.96v16.32c.53 0 .96.43.96.96h16.32z" clip-rule="evenodd"/><path fill="#39264F" d="M16.32 6.72H7.68a.96.96 0 00-.96.96v1.44a.48.48 0 00.96 0V7.68h3.84v9.6h-1.44a.48.48 0 000 .96h3.84a.48.48 0 100-.96h-1.44v-9.6h3.84v1.44a.48.48 0 00.96 0V7.68a.96.96 0 00-.96-.96z"/>'
});
var _default = IconTextBox;
exports["default"] = _default;