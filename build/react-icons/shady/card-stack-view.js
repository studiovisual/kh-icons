"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconCardStackView = (0, _createIconComponent["default"])({
  width: 40,
  height: 40,
  innerContent: '<path fill="#9EFFED" d="M9.6 9.6h19.2v3.2H9.6zm1.599 9.6h4.8v11.2h-4.8zm11.2 0h4.8v8h-4.8z"/><path fill="#3A7C70" fill-rule="evenodd" d="M4 3.2h30.4a2.4 2.4 0 012.4 2.4v28.8a2.4 2.4 0 01-2.4 2.4H4a2.4 2.4 0 01-2.4-2.4V5.6A2.4 2.4 0 014 3.2zm30.4 32a.8.8 0 00.8-.8V5.6a.8.8 0 00-.8-.8H4a.8.8 0 00-.8.8v28.8a.8.8 0 00.8.8h30.4z" clip-rule="evenodd"/><path fill="#3A7C70" fill-rule="evenodd" d="M30.4 14.4H8V8h22.4v6.4zm-1.6-4.8H9.6v3.2h19.2V9.6zM17.6 32h-8V17.6h8V32zM16 19.2h-4.8v11.2H16V19.2zm12.8 9.6h-8V17.6h8v11.2zm-1.6-9.6h-4.8v8h4.8v-8z" clip-rule="evenodd"/>'
});
var _default = IconCardStackView;
exports["default"] = _default;