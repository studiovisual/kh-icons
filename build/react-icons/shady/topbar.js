"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconTopbar = (0, _createIconComponent["default"])({
  width: 24,
  height: 24,
  innerContent: '<path fill="#9EFFED" fill-rule="evenodd" d="M2.4 2.88h19.2a.48.48 0 01.48.48v2.4H1.92v-2.4a.48.48 0 01.48-.48z" clip-rule="evenodd"/><path fill="#5F259F" fill-rule="evenodd" d="M21.6 1.92H2.4A1.44 1.44 0 00.96 3.36v17.28c0 .795.645 1.44 1.44 1.44h19.2a1.44 1.44 0 001.44-1.44V3.36a1.44 1.44 0 00-1.44-1.44zm-19.2.96h19.2a.48.48 0 01.48.48v2.4H1.92v-2.4a.48.48 0 01.48-.48zm19.2 18.24H2.4a.48.48 0 01-.48-.48V6.72h20.16v13.92a.48.48 0 01-.48.48z" clip-rule="evenodd"/>'
});
var _default = IconTopbar;
exports["default"] = _default;