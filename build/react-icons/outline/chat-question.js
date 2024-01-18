"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIconComponent = _interopRequireDefault(require("../utils/createIconComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconChatQuestion = (0, _createIconComponent["default"])({
  width: 18,
  height: 16,
  innerContent: '<path fill-rule="evenodd" clip-rule="evenodd" d="M1.96.64h14.08c.53 0 .96.43.96.96v10.24c0 .53-.43.96-.96.96h-1.6v1.92a.64.64 0 01-1.027.509l-3.153-2.362a.325.325 0 00-.196-.067H1.96c-.53 0-.96-.43-.96-.96V1.6c0-.53.43-.96.96-.96zm14.08 11.52a.32.32 0 00.32-.32V1.6a.32.32 0 00-.32-.32H1.96a.32.32 0 00-.32.32v10.24c0 .176.143.32.32.32h8.104c.21 0 .414.069.582.196l3.152 2.362.002-2.11c0-.247.2-.448.448-.448h1.792zm-4.8-6.72v.357c0 .69-.44 1.3-1.094 1.519l-.607.202a.318.318 0 00-.219.303v.819a.32.32 0 01-.64 0V7.82c0-.413.264-.78.656-.91l.608-.203a.959.959 0 00.656-.91V5.44a1.6 1.6 0 00-3.2 0 .32.32 0 01-.64 0 2.24 2.24 0 114.48 0zm-1.92 4.8V9.6h-.64v.64h.64z" fill="currentColor"/><path d="M16.04.64V.29v.35zM1.96.64V.29v.35zM17 1.6h.35H17zm0 10.24h.35H17zm-.96.96v.35-.35zm-1.6 0v-.35h-.35v.35h.35zm0 1.92h.35-.35zm-.356.573l.156.313-.156-.313zm-.671-.064l.211-.279-.002-.002-.21.28zm-3.153-2.362l-.212.278.002.002.21-.28zm-.196-.067l.002-.35h-.002v.35zm-8.104 0v.35-.35zM1 11.84H.65 1zM1 1.6H.65 1zm15.36 10.24h.35-.35zm-.32.32v.35-.35zm.32-10.56h.35-.35zm-.32-.32V.93v.35zm-14.08 0V.93v.35zm-.32.32h-.35.35zm0 10.24h-.35.35zm.32.32v.35-.35zm8.104 0l.001-.35v.35zm.582.196l-.212.279h.002l.21-.28zm3.152 2.362l-.21.28.56.42v-.7h-.35zm.002-2.11h-.35.35zm.448-.448v-.35.35zM11.24 5.797h-.35.35zm-1.094 1.519l-.11-.333.11.333zm-.607.202l.109.333h.001l-.11-.333zm-.219.303h.35V7.82l-.35.001zm-.64 0h.35-.35zm.656-.91l.11.332-.11-.332zm.608-.203l-.11-.332.11.332zm.656-.91h-.35.35zM9.32 9.6h.35v-.35h-.35v.35zm0 .64v.35h.35v-.35h-.35zm-.64-.64v-.35h-.35v.35h.35zm0 .64h-.35v.35h.35v-.35zM16.04.29H1.96v.7h14.08v-.7zm1.31 1.31c0-.723-.587-1.31-1.31-1.31v.7c.337 0 .61.273.61.61h.7zm0 10.24V1.6h-.7v10.24h.7zm-1.31 1.31c.723 0 1.31-.587 1.31-1.31h-.7c0 .337-.273.61-.61.61v.7zm-1.6 0h1.6v-.7h-1.6v.7zm.35 1.57V12.8h-.7v1.92h.7zm-.55.886a.99.99 0 00.55-.887h-.7a.29.29 0 01-.161.26l.31.627zm-1.04-.099a.99.99 0 001.04.1l-.311-.628a.29.29 0 01-.305-.029l-.423.557zm-3.15-2.36l3.153 2.362.42-.56-3.153-2.363-.42.56zm.013.003a.025.025 0 01-.015-.005l.424-.557a.675.675 0 00-.406-.138l-.003.7zm-8.103 0h8.104v-.7H1.96v.7zM.65 11.84c0 .723.587 1.31 1.31 1.31v-.7a.611.611 0 01-.61-.61h-.7zm0-10.24v10.24h.7V1.6h-.7zM1.96.29C1.237.29.65.877.65 1.6h.7c0-.337.273-.61.61-.61v-.7zm14.05 11.55a.03.03 0 01.03-.03v.7c.37 0 .67-.3.67-.67h-.7zm0-10.24v10.24h.7V1.6h-.7zm.03.03a.03.03 0 01-.03-.03h.7a.67.67 0 00-.67-.67v.7zm-14.08 0h14.08v-.7H1.96v.7zm.03-.03a.03.03 0 01-.03.03v-.7a.67.67 0 00-.67.67h.7zm0 10.24V1.6h-.7v10.24h.7zm-.03-.03a.03.03 0 01.03.03h-.7c0 .37.3.67.67.67v-.7zm8.104 0H1.96v.7h8.104v-.7zm.793.267a1.316 1.316 0 00-.792-.267l-.001.7c.133 0 .264.044.37.125l.423-.558zm3.151 2.36l-3.152-2.361-.42.56 3.152 2.362.42-.56zm-.558-1.83l-.002 2.11.7.001.002-2.11h-.7zm.798-.797a.799.799 0 00-.798.797l.7.001c0-.054.044-.098.098-.098v-.7zm1.792 0h-1.792v.7h1.792v-.7zm-4.45-6.013V5.44h-.7v.357h.7zm-1.333 1.85a1.949 1.949 0 001.333-1.85h-.7c0 .539-.344 1.016-.854 1.186l.22.665zm-.608.203l.608-.202-.221-.664-.608.202.221.664zm.021-.03a.032.032 0 01-.022.03l-.218-.665a.668.668 0 00-.46.637l.7-.002zm0 .82V7.82h-.7v.819h.7zM9 9.31c.37 0 .67-.3.67-.67h-.7A.03.03 0 019 8.61v.7zm-.67-.67c0 .37.3.67.67.67v-.7a.03.03 0 01.03.03h-.7zm0-.819v.819h.7V7.82h-.7zm.896-1.243a1.309 1.309 0 00-.896 1.243h.7c0-.263.168-.496.417-.578l-.221-.665zm.607-.202l-.607.203.22.664.608-.203-.22-.664zm.417-.578a.609.609 0 01-.417.578l.221.664c.536-.178.897-.679.896-1.243h-.7zm0-.358v.357h.7V5.44h-.7zM9 4.19c.69 0 1.25.56 1.25 1.25h.7A1.95 1.95 0 009 3.49v.7zM7.75 5.44c0-.69.56-1.25 1.25-1.25v-.7a1.95 1.95 0 00-1.95 1.95h.7zm-.67.67c.37 0 .67-.3.67-.67h-.7a.03.03 0 01.03-.03v.7zm-.67-.67c0 .37.3.67.67.67v-.7a.03.03 0 01.03.03h-.7zM9 2.85a2.59 2.59 0 00-2.59 2.59h.7A1.89 1.89 0 019 3.55v-.7zm2.59 2.59A2.59 2.59 0 009 2.85v.7a1.89 1.89 0 011.89 1.89h.7zM8.97 9.6v.64h.7V9.6h-.7zm-.29.35h.64v-.7h-.64v.7zm.35.29V9.6h-.7v.64h.7zm.29-.35h-.64v.7h.64v-.7z" fill="currentColor"/>'
});
var _default = IconChatQuestion;
exports["default"] = _default;