"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconSecurityGuard = (0, _createIconComponent["default"])({
  width: 24,
  height: 24,
  innerContent: '<path fill="#FFE292" d="M18.24 1.92v6.72c0 4.074-4.98 10.56-9.12 10.56a6.462 6.462 0 01-3.657-1.422C7.273 20.171 9.757 22.08 12 22.08c4.14 0 9.12-6.486 9.12-10.56v-9.6h-2.88z"/><path fill="#39264F" fill-rule="evenodd" d="M1.92 11.52V.96h20.16v10.56c0 4.44-5.22 11.52-10.08 11.52S1.92 15.96 1.92 11.52zM12 22.08c4.14 0 9.12-6.486 9.12-10.56v-9.6H2.88v9.6c0 4.074 4.98 10.56 9.12 10.56z" clip-rule="evenodd"/><path fill="#39264F" d="M12 20.16a.48.48 0 100-.96c-2.832 0-6.24-4.422-6.24-7.2V4.8h4.32a.48.48 0 100-.96h-4.8a.48.48 0 00-.48.48V12c0 3.296 3.793 8.16 7.2 8.16z"/>'
});
var _default = IconSecurityGuard;
exports["default"] = _default;