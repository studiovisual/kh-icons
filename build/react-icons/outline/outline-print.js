"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconOutlinePrint = (0, _createIconComponent["default"])({
  width: 24,
  height: 26,
  innerContent: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.515 10.6h-3.274V2.44c0-.795-.629-1.44-1.404-1.44H7.482c-.775 0-1.404.645-1.404 1.44v8.16H2.804c-.775 0-1.404.645-1.404 1.44v8.64c0 .795.629 1.44 1.404 1.44h2.339v1.44c0 .795.628 1.44 1.403 1.44h11.227c.775 0 1.403-.645 1.403-1.44v-1.44h2.339c.775 0 1.403-.645 1.403-1.44v-8.64c0-.795-.628-1.44-1.403-1.44zM7.014 2.44c0-.265.21-.48.468-.48h9.355c.258 0 .468.215.468.48v8.16H7.014V2.44zm10.759 21.6a.474.474 0 00.468-.48v-4.32H6.078v4.32c0 .265.21.48.468.48h11.227zm4.21-3.36c0 .265-.21.48-.468.48h-2.339v-1.92h1.403a.474.474 0 00.468-.48c0-.265-.21-.48-.468-.48H3.74a.474.474 0 00-.467.48c0 .265.209.48.467.48h1.404v1.92h-2.34a.474.474 0 01-.467-.48v-8.64c0-.265.21-.48.468-.48h18.711c.258 0 .468.215.468.48v8.64zM6.546 14.44a.474.474 0 00.468-.48c0-.265-.21-.48-.468-.48H4.675a.474.474 0 00-.468.48c0 .265.21.48.468.48h1.871z" fill="currentColor"/><path d="M18.24 10.6h-.5v.5h.5v-.5zm-12.162 0v.5h.5v-.5h-.5zm-.935 11.52h.5v-.5h-.5v.5zm14.033 0v-.5h-.5v.5h.5zM7.482 1.96v-.5H7.48v.5zm-.468.48h-.5.5zm9.823-.48v-.5.5zm.468.48h.5-.5zm0 8.16v.5h.5v-.5h-.5zm-10.291 0h-.5v.5h.5v-.5zM18.24 23.56h.5-.5zm-.468.48v.5-.5zm.468-4.8h.5v-.5h-.5v.5zm-12.163 0v-.5h-.5v.5h.5zm0 4.32h-.5.5zm.468.48v.5-.5zm12.63-2.88h-.5v.5h.5v-.5zm0-1.92v-.5h-.5v.5h.5zm-14.033 0h.5v-.5h-.5v.5zm0 1.92v.5h.5v-.5h-.5zM18.24 11.1h3.274v-1H18.24v1zm-.5-8.66v8.16h1V2.44h-1zm-.904-.94c.487 0 .904.409.904.94h1c0-1.06-.84-1.94-1.904-1.94v1zm-9.355 0h9.355v-1H7.482v1zm-.904.94c0-.531.417-.94.904-.94v-1c-1.064 0-1.904.88-1.904 1.94h1zm0 8.16V2.44h-1v8.16h1zm-3.774.5h3.274v-1H2.804v1zm-.904.94c0-.531.417-.94.904-.94v-1C1.74 10.1.9 10.98.9 12.04h1zm0 8.64v-8.64h-1v8.64h1zm.904.94c-.487 0-.904-.409-.904-.94h-1c0 1.06.84 1.94 1.904 1.94v-1zm2.339 0h-2.34v1h2.34v-1zm.5 1.94v-1.44h-1v1.44h1zm.903.94c-.487 0-.903-.409-.903-.94h-1c0 1.06.84 1.94 1.903 1.94v-1zm11.227 0H6.546v1h11.227v-1zm.903-.94c0 .531-.416.94-.903.94v1c1.063 0 1.903-.88 1.903-1.94h-1zm0-1.44v1.44h1v-1.44h-1zm2.839-.5h-2.339v1h2.339v-1zm.903-.94c0 .531-.416.94-.903.94v1c1.063 0 1.903-.88 1.903-1.94h-1zm0-8.64v8.64h1v-8.64h-1zm-.903-.94c.487 0 .903.409.903.94h1c0-1.06-.84-1.94-1.903-1.94v1zM7.481 1.46a.975.975 0 00-.967.98h1l-.001.004a.018.018 0 01-.004.006.031.031 0 01-.01.006.043.043 0 01-.017.004l-.001-1zm9.356 0H7.482v1h9.355v-1zm.968.98a.975.975 0 00-.967-.98l-.001 1a.044.044 0 01-.017-.004.031.031 0 01-.01-.006.017.017 0 01-.004-.006l-.001-.003 1-.002zm0 8.16V2.44h-1v8.16h1zm-10.791.5h10.291v-1H7.014v1zm-.5-8.66v8.16h1V2.44h-1zM17.74 23.56l.002-.004.003-.006a.031.031 0 01.01-.006.042.042 0 01.017-.004l.001 1a.975.975 0 00.968-.98h-1zm0-4.32v4.32h1v-4.32h-1zm-11.662.5h12.163v-1H6.078v1zm.5 3.82v-4.32h-1v4.32h1zm-.031-.02c.005 0 .011.001.016.004a.031.031 0 01.01.006.017.017 0 01.004.006l.001.003-1 .002c0 .528.421.978.967.979l.002-1zm11.226 0H6.546v1h11.227v-1zm3.742-1.88a.974.974 0 00.968-.98h-1v-.004l.005-.006a.032.032 0 01.01-.006.044.044 0 01.017-.004v1zm-2.339 0h2.339v-1h-2.339v1zm-.5-2.42v1.92h1v-1.92h-1zm1.903-.5h-1.403v1h1.403v-1zm-.032.02v-.001l.001-.003a.02.02 0 01.004-.006.033.033 0 01.01-.006.043.043 0 01.017-.004v1a.974.974 0 00.968-.98h-1zm.032.02a.043.043 0 01-.017-.004.033.033 0 01-.01-.006.02.02 0 01-.004-.006v-.004h1a.974.974 0 00-.969-.98v1zm-16.84 0h16.84v-1H3.74v1zm.033-.02v.001l-.001.003a.018.018 0 01-.004.006.032.032 0 01-.01.006.043.043 0 01-.018.004v-1a.974.974 0 00-.967.98h1zm-.033-.02c.006 0 .012.001.017.004a.032.032 0 01.01.006.018.018 0 01.005.009v.001h-1c0 .529.422.98.968.98v-1zm1.404 0H3.739v1h1.404v-1zm.5 2.42v-1.92h-1v1.92h1zm-2.84.5h2.34v-1h-2.34v1zm-.967-.98c0 .529.421.98.968.98v-1c.005 0 .011.001.017.004a.032.032 0 01.01.006.018.018 0 01.005.009v.001h-1zm0-8.64v8.64h1v-8.64h-1zm.968-.98a.974.974 0 00-.968.98h1v.001l-.001.003a.018.018 0 01-.004.006.032.032 0 01-.01.006.043.043 0 01-.017.004v-1zm18.711 0H2.804v1h18.711v-1zm.968.98a.974.974 0 00-.968-.98v1a.044.044 0 01-.017-.004.032.032 0 01-.01-.006.018.018 0 01-.005-.009v-.001h1zm0 8.64v-8.64h-1v8.64h1zm-15.97-6.72v-.001l.002-.003c0-.002.002-.004.004-.006a.032.032 0 01.01-.006.043.043 0 01.017-.004v1a.974.974 0 00.968-.98h-1zm.033.02a.043.043 0 01-.017-.004.032.032 0 01-.01-.006.018.018 0 01-.005-.009v-.001h1a.974.974 0 00-.968-.98v1zm-1.871 0h1.871v-1H4.675v1zm.032-.02v.004a.018.018 0 01-.005.006.032.032 0 01-.01.006.043.043 0 01-.017.004v-1a.974.974 0 00-.968.98h1zm-.032-.02c.005 0 .011.001.017.004a.032.032 0 01.01.006.018.018 0 01.005.009v.001h-1c0 .529.421.98.968.98v-1zm1.871 0H4.675v1h1.871v-1z" fill="currentColor"/>'
});
var _default = IconOutlinePrint;
exports["default"] = _default;