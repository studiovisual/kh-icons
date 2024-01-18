"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconHostingServer = (0, _createIconComponent["default"])({
  width: 25,
  height: 25,
  innerContent: '<path fill="#D2B6F1" d="M4 1h3v23H4z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 0h16c.828 0 1.5.672 1.5 1.5v22c0 .828-.672 1.5-1.5 1.5h-16c-.828 0-1.5-.672-1.5-1.5v-22C3 .672 3.672 0 4.5 0zm16 24a.5.5 0 00.5-.5v-22a.5.5 0 00-.5-.5h-16a.5.5 0 00-.5.5V8h13.5a.5.5 0 010 1H4v7h13.5a.5.5 0 010 1H4v6.5a.5.5 0 00.5.5h16z" fill="#5F259F"/><path d="M6.468 12h1.064c.259 0 .468.21.468.467v.065c0 .259-.21.468-.468.468H6.468A.467.467 0 016 12.533v-.065A.468.468 0 016.468 12zM7.5 20h-1a.5.5 0 000 1h1a.5.5 0 000-1zM7.5 4h-1a.5.5 0 000 1h1a.5.5 0 000-1z" fill="#5F259F"/>'
});
var _default = IconHostingServer;
exports["default"] = _default;