"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.iconsByType = void 0;

var _react = _interopRequireDefault(require("react"));

var _alertSign = _interopRequireDefault(require("./outline/alert-sign"));

var _cart = _interopRequireDefault(require("./outline/cart"));

var _chatQuestion = _interopRequireDefault(require("./outline/chat-question"));

var _emailLove = _interopRequireDefault(require("./outline/email-love"));

var _fileFileTick = _interopRequireDefault(require("./outline/file-file-tick"));

var _normalSpeed = _interopRequireDefault(require("./outline/normal-speed"));

var _notification = _interopRequireDefault(require("./outline/notification"));

var _outlineShare = _interopRequireDefault(require("./outline/outline-share"));

var _outlinePrint = _interopRequireDefault(require("./outline/outline-print"));

var _outlineArrowRight = _interopRequireDefault(require("./outline/outline-arrow-right"));

var _play = _interopRequireDefault(require("./outline/play"));

var _plusUi = _interopRequireDefault(require("./outline/plus-ui"));

var _scroll = _interopRequireDefault(require("./outline/scroll"));

var _searchBrowser = _interopRequireDefault(require("./outline/search-browser"));

var _telephone = _interopRequireDefault(require("./outline/telephone"));

var _android = _interopRequireDefault(require("./shady/android"));

var _appearPassword = _interopRequireDefault(require("./shady/appear-password"));

var _arrowBottomCircle = _interopRequireDefault(require("./shady/arrow-bottom-circle"));

var _arrowLeftRightCircle = _interopRequireDefault(require("./shady/arrow-left-right-circle"));

var _arrowsArrowLeftRightA = _interopRequireDefault(require("./shady/arrows-arrow-left-right-a"));

var _barcode = _interopRequireDefault(require("./shady/barcode"));

var _broadcast = _interopRequireDefault(require("./shady/broadcast"));

var _browserPlus = _interopRequireDefault(require("./shady/browser-plus"));

var _browserTick = _interopRequireDefault(require("./shady/browser-tick"));

var _browser = _interopRequireDefault(require("./shady/browser"));

var _busFront = _interopRequireDefault(require("./shady/bus-front"));

var _businessPerformance = _interopRequireDefault(require("./shady/business-performance-1"));

var _businessPerformance2 = _interopRequireDefault(require("./shady/business-performance-2"));

var _businessPerformance3 = _interopRequireDefault(require("./shady/business-performance-3"));

var _businessPerformance4 = _interopRequireDefault(require("./shady/business-performance-4"));

var _businessPerformance5 = _interopRequireDefault(require("./shady/business-performance-5"));

var _businessPerformanceYellow = _interopRequireDefault(require("./shady/business-performance-yellow"));

var _businessPhotocopyMachine = _interopRequireDefault(require("./shady/business-photocopy-machine"));

var _businessStrategy = _interopRequireDefault(require("./shady/business-strategy"));

var _call = _interopRequireDefault(require("./shady/call"));

var _cardStackViewWhite = _interopRequireDefault(require("./shady/card-stack-view-white"));

var _cardStackViewYellowNumeric = _interopRequireDefault(require("./shady/card-stack-view-yellow-numeric"));

var _cardStackViewYellow = _interopRequireDefault(require("./shady/card-stack-view-yellow"));

var _cardStackView = _interopRequireDefault(require("./shady/card-stack-view"));

var _certifiedMicrosoft = _interopRequireDefault(require("./shady/certified-microsoft"));

var _chatLove = _interopRequireDefault(require("./shady/chat-love-2"));

var _chatLoveYellow = _interopRequireDefault(require("./shady/chat-love-yellow"));

var _chatLove2 = _interopRequireDefault(require("./shady/chat-love"));

var _clipboard = _interopRequireDefault(require("./shady/clipboard-2"));

var _clipboard2 = _interopRequireDefault(require("./shady/clipboard"));

var _cloudUpload = _interopRequireDefault(require("./shady/cloud-upload"));

var _cog = _interopRequireDefault(require("./shady/cog"));

var _communicationEmail = _interopRequireDefault(require("./shady/communication-email"));

var _communicationChatFavorite = _interopRequireDefault(require("./shady/communication-chat-favorite"));

var _communicationEmailBlock = _interopRequireDefault(require("./shady/communication-email-block-2"));

var _communicationEmailBlock2 = _interopRequireDefault(require("./shady/communication-email-block"));

var _communicationEmailDownload = _interopRequireDefault(require("./shady/communication-email-download"));

var _communicationMobileEmail = _interopRequireDefault(require("./shady/communication-mobile-email"));

var _communicationSendingMessage = _interopRequireDefault(require("./shady/communication-sending-message"));

var _designClipboard = _interopRequireDefault(require("./shady/design-clipboard"));

var _designPrototype = _interopRequireDefault(require("./shady/design-prototype"));

var _discountCoupon = _interopRequireDefault(require("./shady/discount-coupon"));

var _documentPage = _interopRequireDefault(require("./shady/document-page"));

var _dollarPaperA = _interopRequireDefault(require("./shady/dollar-paper-a"));

var _downloadQueue = _interopRequireDefault(require("./shady/download-queue"));

var _emailFavoriteYellow = _interopRequireDefault(require("./shady/email-favorite-yellow"));

var _emailFavorite = _interopRequireDefault(require("./shady/email-favorite"));

var _emailForward = _interopRequireDefault(require("./shady/email-forward"));

var _email = _interopRequireDefault(require("./shady/email"));

var _featureBlock = _interopRequireDefault(require("./shady/feature-block"));

var _foldeBranchFolders = _interopRequireDefault(require("./shady/folde-branch-folders"));

var _forwardPage = _interopRequireDefault(require("./shady/forward-page"));

var _git = _interopRequireDefault(require("./shady/git"));

var _group = _interopRequireDefault(require("./shady/group-1018"));

var _group2 = _interopRequireDefault(require("./shady/group-1027-1"));

var _group3 = _interopRequireDefault(require("./shady/group-1027"));

var _group4 = _interopRequireDefault(require("./shady/group"));

var _happyChat = _interopRequireDefault(require("./shady/happy-chat"));

var _heart = _interopRequireDefault(require("./shady/heart"));

var _hostingServer = _interopRequireDefault(require("./shady/hosting-server"));

var _imageCaption = _interopRequireDefault(require("./shady/image-caption-1"));

var _imageCaption2 = _interopRequireDefault(require("./shady/image-caption-2"));

var _imageCaption3 = _interopRequireDefault(require("./shady/image-caption"));

var _insideElementRotated = _interopRequireDefault(require("./shady/inside-element-rotated"));

var _insideElement = _interopRequireDefault(require("./shady/inside-element"));

var _interfaceCloudUpload = _interopRequireDefault(require("./shady/interface-cloud-upload"));

var _interfaceExpandView = _interopRequireDefault(require("./shady/interface-expand-view"));

var _interfaceLock = _interopRequireDefault(require("./shady/interface-lock"));

var _interfaceUiCompose2Numeric = _interopRequireDefault(require("./shady/interface-ui-compose-2-numeric"));

var _interfaceUiCompose = _interopRequireDefault(require("./shady/interface-ui-compose-2"));

var _interfaceUiCompose2 = _interopRequireDefault(require("./shady/interface-ui-compose"));

var _invalidCoupon = _interopRequireDefault(require("./shady/invalid-coupon"));

var _kinghost = _interopRequireDefault(require("./shady/kinghost"));

var _landscape = _interopRequireDefault(require("./shady/landscape"));

var _laptopSmartphone = _interopRequireDefault(require("./shady/laptop-smartphone-2"));

var _laptopSmartphone2 = _interopRequireDefault(require("./shady/laptop-smartphone"));

var _layoutInsideElement = _interopRequireDefault(require("./shady/layout-inside-element"));

var _lifeBuoy = _interopRequireDefault(require("./shady/life-buoy"));

var _marketSign = _interopRequireDefault(require("./shady/market-sign"));

var _medicalAssistance = _interopRequireDefault(require("./shady/medical-assistance"));

var _membershipCard = _interopRequireDefault(require("./shady/membership-card"));

var _microsoftExchange = _interopRequireDefault(require("./shady/microsoft-exchange"));

var _mobileEmail = _interopRequireDefault(require("./shady/mobile-email"));

var _money = _interopRequireDefault(require("./shady/money"));

var _musicRock = _interopRequireDefault(require("./shady/music-rock"));

var _notesNotesList = _interopRequireDefault(require("./shady/notes-notes-list"));

var _onlineStock = _interopRequireDefault(require("./shady/online-stock"));

var _pageMark = _interopRequireDefault(require("./shady/page-mark"));

var _performanceBoard = _interopRequireDefault(require("./shady/performance-board"));

var _play2 = _interopRequireDefault(require("./shady/play-2"));

var _projectFilePlus = _interopRequireDefault(require("./shady/project-file-plus-2"));

var _projectFilePlus2 = _interopRequireDefault(require("./shady/project-file-plus-3"));

var _projectFilePlus3 = _interopRequireDefault(require("./shady/project-file-plus"));

var _radar = _interopRequireDefault(require("./shady/radar"));

var _savings = _interopRequireDefault(require("./shady/savings"));

var _searchA = _interopRequireDefault(require("./shady/search-a-1"));

var _searchA2 = _interopRequireDefault(require("./shady/search-a-2"));

var _searchA3 = _interopRequireDefault(require("./shady/search-a"));

var _searchB = _interopRequireDefault(require("./shady/search-b"));

var _searchList = _interopRequireDefault(require("./shady/search-list"));

var _searchView = _interopRequireDefault(require("./shady/search-view"));

var _securityGuard = _interopRequireDefault(require("./shady/security-guard"));

var _shoppingBags = _interopRequireDefault(require("./shady/shopping-bags"));

var _soupBowl = _interopRequireDefault(require("./shady/soup-bowl"));

var _signalTower = _interopRequireDefault(require("./shady/signal-tower"));

var _spaceRocket = _interopRequireDefault(require("./shady/space-rocket"));

var _spaceSpaceshipPurple = _interopRequireDefault(require("./shady/space-spaceship-purple"));

var _spaceSpaceship = _interopRequireDefault(require("./shady/space-spaceship"));

var _sportKing = _interopRequireDefault(require("./shady/sport-king-2"));

var _sportKing2 = _interopRequireDefault(require("./shady/sport-king"));

var _star = _interopRequireDefault(require("./shady/star"));

var _stars = _interopRequireDefault(require("./shady/stars"));

var _supportPortuguese = _interopRequireDefault(require("./shady/support-portuguese"));

var _techBrowserTickPurple = _interopRequireDefault(require("./shady/tech-browser-tick-purple"));

var _techDevelopmentBug = _interopRequireDefault(require("./shady/tech-development-bug"));

var _techSecurityGuard = _interopRequireDefault(require("./shady/tech-security-guard"));

var _techBrowserTickPurpleNumeric = _interopRequireDefault(require("./shady/tech-browser-tick-purple-numeric"));

var _techBrowserTick = _interopRequireDefault(require("./shady/tech-browser-tick"));

var _techDesktopSmartphone = _interopRequireDefault(require("./shady/tech-desktop-smartphone"));

var _techInternetNetwork = _interopRequireDefault(require("./shady/tech-internet-network"));

var _techProcessorChipPurple = _interopRequireDefault(require("./shady/tech-processor-chip-purple"));

var _techProcessorChip = _interopRequireDefault(require("./shady/tech-processor-chip"));

var _textBox = _interopRequireDefault(require("./shady/text-box"));

var _twoGrids = _interopRequireDefault(require("./shady/two-grids"));

var _uiCompose = _interopRequireDefault(require("./shady/ui-compose-2"));

var _topbar = _interopRequireDefault(require("./shady/topbar"));

var _uiCompose2 = _interopRequireDefault(require("./shady/ui-compose-3"));

var _uiCompose3 = _interopRequireDefault(require("./shady/ui-compose"));

var _uiSpeed = _interopRequireDefault(require("./shady/ui-speed"));

var _userProfilePicture = _interopRequireDefault(require("./shady/user-profile-picture"));

var _valorComprometimento = _interopRequireDefault(require("./shady/valor-comprometimento"));

var _valorExcelencia = _interopRequireDefault(require("./shady/valor-excelencia"));

var _valorGratidao = _interopRequireDefault(require("./shady/valor-gratidao"));

var _valorIntegridade = _interopRequireDefault(require("./shady/valor-integridade"));

var _valorSimplicidade = _interopRequireDefault(require("./shady/valor-simplicidade"));

var _valorEvolucao = _interopRequireDefault(require("./shady/valor-evolucao"));

var _wallClock = _interopRequireDefault(require("./shady/wall-clock"));

var _webBanking = _interopRequireDefault(require("./shady/web-banking"));

var _wordPress = _interopRequireDefault(require("./shady/word-press-2"));

var _wordpress = _interopRequireDefault(require("./shady/wordpress"));

var _arrowRight = _interopRequireDefault(require("./solid/arrow-right"));

var _checkUi = _interopRequireDefault(require("./solid/check-ui"));

var _chevronBottom = _interopRequireDefault(require("./solid/chevron-bottom"));

var _chat = _interopRequireDefault(require("./solid/chat"));

var _chevronRight = _interopRequireDefault(require("./solid/chevron-right"));

var _dashedArrowBottom = _interopRequireDefault(require("./solid/dashed-arrow-bottom"));

var _facebook = _interopRequireDefault(require("./solid/facebook"));

var _crossUi = _interopRequireDefault(require("./solid/cross-ui"));

var _filter = _interopRequireDefault(require("./solid/filter"));

var _linkedin = _interopRequireDefault(require("./solid/linkedin"));

var _instagram = _interopRequireDefault(require("./solid/instagram"));

var _musicPlaySign = _interopRequireDefault(require("./solid/music-play-sign"));

var _search = _interopRequireDefault(require("./solid/search"));

var _twitter = _interopRequireDefault(require("./solid/twitter"));

var _whatsapp = _interopRequireDefault(require("./solid/whatsapp"));

var _youtube = _interopRequireDefault(require("./solid/youtube"));

var _refundDollar = _interopRequireDefault(require("./shady/refund-dollar"));

var _receipt = _interopRequireDefault(require("./shady/receipt"));

var _reloadUi = _interopRequireDefault(require("./shady/reload-ui"));

var _signal = _interopRequireDefault(require("./solid/signal"));

var _barCode = _interopRequireDefault(require("./solid/bar-code"));

var _interrogation = _interopRequireDefault(require("./solid/interrogation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var icons = {
  'outline/alert-sign': _alertSign["default"],
  'outline/cart': _cart["default"],
  'outline/chat-question': _chatQuestion["default"],
  'outline/email-love': _emailLove["default"],
  'outline/file-file-tick': _fileFileTick["default"],
  'outline/normal-speed': _normalSpeed["default"],
  'outline/notification': _notification["default"],
  'outline/outline-share': _outlineShare["default"],
  'outline/outline-print': _outlinePrint["default"],
  'outline/outline-arrow-right': _outlineArrowRight["default"],
  'outline/play': _play["default"],
  'outline/plus-ui': _plusUi["default"],
  'outline/scroll': _scroll["default"],
  'outline/search-browser': _searchBrowser["default"],
  'outline/telephone': _telephone["default"],
  'shady/android': _android["default"],
  'shady/appear-password': _appearPassword["default"],
  'shady/arrow-bottom-circle': _arrowBottomCircle["default"],
  'shady/arrow-left-right-circle': _arrowLeftRightCircle["default"],
  'shady/arrows-arrow-left-right-a': _arrowsArrowLeftRightA["default"],
  'shady/barcode': _barcode["default"],
  'shady/broadcast': _broadcast["default"],
  'shady/browser-plus': _browserPlus["default"],
  'shady/browser-tick': _browserTick["default"],
  'shady/browser': _browser["default"],
  'shady/bus-front': _busFront["default"],
  'shady/business-performance-1': _businessPerformance["default"],
  'shady/business-performance-2': _businessPerformance2["default"],
  'shady/business-performance-3': _businessPerformance3["default"],
  'shady/business-performance-4': _businessPerformance4["default"],
  'shady/business-performance-5': _businessPerformance5["default"],
  'shady/business-performance-yellow': _businessPerformanceYellow["default"],
  'shady/business-photocopy-machine': _businessPhotocopyMachine["default"],
  'shady/business-strategy': _businessStrategy["default"],
  'shady/call': _call["default"],
  'shady/card-stack-view-white': _cardStackViewWhite["default"],
  'shady/card-stack-view-yellow-numeric': _cardStackViewYellowNumeric["default"],
  'shady/card-stack-view-yellow': _cardStackViewYellow["default"],
  'shady/card-stack-view': _cardStackView["default"],
  'shady/certified-microsoft': _certifiedMicrosoft["default"],
  'shady/chat-love-2': _chatLove["default"],
  'shady/chat-love-yellow': _chatLoveYellow["default"],
  'shady/chat-love': _chatLove2["default"],
  'shady/clipboard-2': _clipboard["default"],
  'shady/clipboard': _clipboard2["default"],
  'shady/cloud-upload': _cloudUpload["default"],
  'shady/cog': _cog["default"],
  'shady/communication-email': _communicationEmail["default"],
  'shady/communication-chat-favorite': _communicationChatFavorite["default"],
  'shady/communication-email-block-2': _communicationEmailBlock["default"],
  'shady/communication-email-block': _communicationEmailBlock2["default"],
  'shady/communication-email-download': _communicationEmailDownload["default"],
  'shady/communication-mobile-email': _communicationMobileEmail["default"],
  'shady/communication-sending-message': _communicationSendingMessage["default"],
  'shady/design-clipboard': _designClipboard["default"],
  'shady/design-prototype': _designPrototype["default"],
  'shady/discount-coupon': _discountCoupon["default"],
  'shady/document-page': _documentPage["default"],
  'shady/dollar-paper-a': _dollarPaperA["default"],
  'shady/download-queue': _downloadQueue["default"],
  'shady/email-favorite-yellow': _emailFavoriteYellow["default"],
  'shady/email-favorite': _emailFavorite["default"],
  'shady/email-forward': _emailForward["default"],
  'shady/email': _email["default"],
  'shady/feature-block': _featureBlock["default"],
  'shady/folde-branch-folders': _foldeBranchFolders["default"],
  'shady/forward-page': _forwardPage["default"],
  'shady/git': _git["default"],
  'shady/group-1018': _group["default"],
  'shady/group-1027-1': _group2["default"],
  'shady/group-1027': _group3["default"],
  'shady/group': _group4["default"],
  'shady/happy-chat': _happyChat["default"],
  'shady/heart': _heart["default"],
  'shady/hosting-server': _hostingServer["default"],
  'shady/image-caption-1': _imageCaption["default"],
  'shady/image-caption-2': _imageCaption2["default"],
  'shady/image-caption': _imageCaption3["default"],
  'shady/inside-element-rotated': _insideElementRotated["default"],
  'shady/inside-element': _insideElement["default"],
  'shady/interface-cloud-upload': _interfaceCloudUpload["default"],
  'shady/interface-expand-view': _interfaceExpandView["default"],
  'shady/interface-lock': _interfaceLock["default"],
  'shady/interface-ui-compose-2-numeric': _interfaceUiCompose2Numeric["default"],
  'shady/interface-ui-compose-2': _interfaceUiCompose["default"],
  'shady/interface-ui-compose': _interfaceUiCompose2["default"],
  'shady/invalid-coupon': _invalidCoupon["default"],
  'shady/kinghost': _kinghost["default"],
  'shady/landscape': _landscape["default"],
  'shady/laptop-smartphone-2': _laptopSmartphone["default"],
  'shady/laptop-smartphone': _laptopSmartphone2["default"],
  'shady/layout-inside-element': _layoutInsideElement["default"],
  'shady/life-buoy': _lifeBuoy["default"],
  'shady/market-sign': _marketSign["default"],
  'shady/medical-assistance': _medicalAssistance["default"],
  'shady/membership-card': _membershipCard["default"],
  'shady/microsoft-exchange': _microsoftExchange["default"],
  'shady/mobile-email': _mobileEmail["default"],
  'shady/money': _money["default"],
  'shady/music-rock': _musicRock["default"],
  'shady/notes-notes-list': _notesNotesList["default"],
  'shady/online-stock': _onlineStock["default"],
  'shady/page-mark': _pageMark["default"],
  'shady/performance-board': _performanceBoard["default"],
  'shady/play-2': _play2["default"],
  'shady/project-file-plus-2': _projectFilePlus["default"],
  'shady/project-file-plus-3': _projectFilePlus2["default"],
  'shady/project-file-plus': _projectFilePlus3["default"],
  'shady/radar': _radar["default"],
  'shady/savings': _savings["default"],
  'shady/search-a-1': _searchA["default"],
  'shady/search-a-2': _searchA2["default"],
  'shady/search-a': _searchA3["default"],
  'shady/search-b': _searchB["default"],
  'shady/search-list': _searchList["default"],
  'shady/search-view': _searchView["default"],
  'shady/security-guard': _securityGuard["default"],
  'shady/shopping-bags': _shoppingBags["default"],
  'shady/soup-bowl': _soupBowl["default"],
  'shady/signal-tower': _signalTower["default"],
  'shady/space-rocket': _spaceRocket["default"],
  'shady/space-spaceship-purple': _spaceSpaceshipPurple["default"],
  'shady/space-spaceship': _spaceSpaceship["default"],
  'shady/sport-king-2': _sportKing["default"],
  'shady/sport-king': _sportKing2["default"],
  'shady/star': _star["default"],
  'shady/stars': _stars["default"],
  'shady/support-portuguese': _supportPortuguese["default"],
  'shady/tech-browser-tick-purple': _techBrowserTickPurple["default"],
  'shady/tech-development-bug': _techDevelopmentBug["default"],
  'shady/tech-security-guard': _techSecurityGuard["default"],
  'shady/tech-browser-tick-purple-numeric': _techBrowserTickPurpleNumeric["default"],
  'shady/tech-browser-tick': _techBrowserTick["default"],
  'shady/tech-desktop-smartphone': _techDesktopSmartphone["default"],
  'shady/tech-internet-network': _techInternetNetwork["default"],
  'shady/tech-processor-chip-purple': _techProcessorChipPurple["default"],
  'shady/tech-processor-chip': _techProcessorChip["default"],
  'shady/text-box': _textBox["default"],
  'shady/two-grids': _twoGrids["default"],
  'shady/ui-compose-2': _uiCompose["default"],
  'shady/topbar': _topbar["default"],
  'shady/ui-compose-3': _uiCompose2["default"],
  'shady/ui-compose': _uiCompose3["default"],
  'shady/ui-speed': _uiSpeed["default"],
  'shady/user-profile-picture': _userProfilePicture["default"],
  'shady/valor-comprometimento': _valorComprometimento["default"],
  'shady/valor-excelencia': _valorExcelencia["default"],
  'shady/valor-gratidao': _valorGratidao["default"],
  'shady/valor-integridade': _valorIntegridade["default"],
  'shady/valor-simplicidade': _valorSimplicidade["default"],
  'shady/valor-evolucao': _valorEvolucao["default"],
  'shady/wall-clock': _wallClock["default"],
  'shady/web-banking': _webBanking["default"],
  'shady/word-press-2': _wordPress["default"],
  'shady/wordpress': _wordpress["default"],
  'solid/arrow-right': _arrowRight["default"],
  'solid/check-ui': _checkUi["default"],
  'solid/chevron-bottom': _chevronBottom["default"],
  'solid/chat': _chat["default"],
  'solid/chevron-right': _chevronRight["default"],
  'solid/dashed-arrow-bottom': _dashedArrowBottom["default"],
  'solid/facebook': _facebook["default"],
  'solid/cross-ui': _crossUi["default"],
  'solid/filter': _filter["default"],
  'solid/linkedin': _linkedin["default"],
  'solid/instagram': _instagram["default"],
  'solid/music-play-sign': _musicPlaySign["default"],
  'solid/search': _search["default"],
  'solid/twitter': _twitter["default"],
  'solid/whatsapp': _whatsapp["default"],
  'solid/youtube': _youtube["default"],
  'shady/refund-dollar': _refundDollar["default"],
  'shady/receipt': _receipt["default"],
  'shady/reload-ui': _reloadUi["default"],
  'solid/signal': _signal["default"],
  'solid/bar-code': _barCode["default"],
  'solid/interrogation': _interrogation["default"]
};
var iconsByType = {
  "outline": [{
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\"><path d=\"M12.5 0A12.5 12.5 0 1025 12.5 12.5 12.5 0 0012.5 0zm0 24A11.5 11.5 0 1124 12.5 11.513 11.513 0 0112.5 24zM12 8h1v6h-1zm0 8h1v1h-1z\" fill-rule=\"evenodd\"/></svg>",
    "type": "outline",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "alert-sign",
      "type": "outline"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\"><path d=\"M24.898 6.196A.5.5 0 0024.5 6H6a.523.523 0 00-.097.01l-.721-2.897A1.504 1.504 0 003.732 2H.5a.5.5 0 000 1h3.231a.5.5 0 01.482.363l3.802 15.258A.5.5 0 008.5 19l.038-.002.16-.012-.645 1.29A.5.5 0 008.5 21h12a.5.5 0 000-1H9.309l.552-1.103 11.677-.898a.5.5 0 00.444-.368l3-11a.5.5 0 00-.084-.435zM21.11 17.028l-12.227.941L6.149 7h17.697zM11 23a1 1 0 11-1-1 1 1 0 011 1zm9 0a1 1 0 11-1-1 1 1 0 011 1z\"/></svg>",
    "type": "outline",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "cart",
      "type": "outline"
    }
  }, {
    "source": "<svg width=\"18\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.96.64h14.08c.53 0 .96.43.96.96v10.24c0 .53-.43.96-.96.96h-1.6v1.92a.64.64 0 01-1.027.509l-3.153-2.362a.325.325 0 00-.196-.067H1.96c-.53 0-.96-.43-.96-.96V1.6c0-.53.43-.96.96-.96zm14.08 11.52a.32.32 0 00.32-.32V1.6a.32.32 0 00-.32-.32H1.96a.32.32 0 00-.32.32v10.24c0 .176.143.32.32.32h8.104c.21 0 .414.069.582.196l3.152 2.362.002-2.11c0-.247.2-.448.448-.448h1.792zm-4.8-6.72v.357c0 .69-.44 1.3-1.094 1.519l-.607.202a.318.318 0 00-.219.303v.819a.32.32 0 01-.64 0V7.82c0-.413.264-.78.656-.91l.608-.203a.959.959 0 00.656-.91V5.44a1.6 1.6 0 00-3.2 0 .32.32 0 01-.64 0 2.24 2.24 0 114.48 0zm-1.92 4.8V9.6h-.64v.64h.64z\" fill=\"currentColor\"/><path d=\"M16.04.64V.29v.35zM1.96.64V.29v.35zM17 1.6h.35H17zm0 10.24h.35H17zm-.96.96v.35-.35zm-1.6 0v-.35h-.35v.35h.35zm0 1.92h.35-.35zm-.356.573l.156.313-.156-.313zm-.671-.064l.211-.279-.002-.002-.21.28zm-3.153-2.362l-.212.278.002.002.21-.28zm-.196-.067l.002-.35h-.002v.35zm-8.104 0v.35-.35zM1 11.84H.65 1zM1 1.6H.65 1zm15.36 10.24h.35-.35zm-.32.32v.35-.35zm.32-10.56h.35-.35zm-.32-.32V.93v.35zm-14.08 0V.93v.35zm-.32.32h-.35.35zm0 10.24h-.35.35zm.32.32v.35-.35zm8.104 0l.001-.35v.35zm.582.196l-.212.279h.002l.21-.28zm3.152 2.362l-.21.28.56.42v-.7h-.35zm.002-2.11h-.35.35zm.448-.448v-.35.35zM11.24 5.797h-.35.35zm-1.094 1.519l-.11-.333.11.333zm-.607.202l.109.333h.001l-.11-.333zm-.219.303h.35V7.82l-.35.001zm-.64 0h.35-.35zm.656-.91l.11.332-.11-.332zm.608-.203l-.11-.332.11.332zm.656-.91h-.35.35zM9.32 9.6h.35v-.35h-.35v.35zm0 .64v.35h.35v-.35h-.35zm-.64-.64v-.35h-.35v.35h.35zm0 .64h-.35v.35h.35v-.35zM16.04.29H1.96v.7h14.08v-.7zm1.31 1.31c0-.723-.587-1.31-1.31-1.31v.7c.337 0 .61.273.61.61h.7zm0 10.24V1.6h-.7v10.24h.7zm-1.31 1.31c.723 0 1.31-.587 1.31-1.31h-.7c0 .337-.273.61-.61.61v.7zm-1.6 0h1.6v-.7h-1.6v.7zm.35 1.57V12.8h-.7v1.92h.7zm-.55.886a.99.99 0 00.55-.887h-.7a.29.29 0 01-.161.26l.31.627zm-1.04-.099a.99.99 0 001.04.1l-.311-.628a.29.29 0 01-.305-.029l-.423.557zm-3.15-2.36l3.153 2.362.42-.56-3.153-2.363-.42.56zm.013.003a.025.025 0 01-.015-.005l.424-.557a.675.675 0 00-.406-.138l-.003.7zm-8.103 0h8.104v-.7H1.96v.7zM.65 11.84c0 .723.587 1.31 1.31 1.31v-.7a.611.611 0 01-.61-.61h-.7zm0-10.24v10.24h.7V1.6h-.7zM1.96.29C1.237.29.65.877.65 1.6h.7c0-.337.273-.61.61-.61v-.7zm14.05 11.55a.03.03 0 01.03-.03v.7c.37 0 .67-.3.67-.67h-.7zm0-10.24v10.24h.7V1.6h-.7zm.03.03a.03.03 0 01-.03-.03h.7a.67.67 0 00-.67-.67v.7zm-14.08 0h14.08v-.7H1.96v.7zm.03-.03a.03.03 0 01-.03.03v-.7a.67.67 0 00-.67.67h.7zm0 10.24V1.6h-.7v10.24h.7zm-.03-.03a.03.03 0 01.03.03h-.7c0 .37.3.67.67.67v-.7zm8.104 0H1.96v.7h8.104v-.7zm.793.267a1.316 1.316 0 00-.792-.267l-.001.7c.133 0 .264.044.37.125l.423-.558zm3.151 2.36l-3.152-2.361-.42.56 3.152 2.362.42-.56zm-.558-1.83l-.002 2.11.7.001.002-2.11h-.7zm.798-.797a.799.799 0 00-.798.797l.7.001c0-.054.044-.098.098-.098v-.7zm1.792 0h-1.792v.7h1.792v-.7zm-4.45-6.013V5.44h-.7v.357h.7zm-1.333 1.85a1.949 1.949 0 001.333-1.85h-.7c0 .539-.344 1.016-.854 1.186l.22.665zm-.608.203l.608-.202-.221-.664-.608.202.221.664zm.021-.03a.032.032 0 01-.022.03l-.218-.665a.668.668 0 00-.46.637l.7-.002zm0 .82V7.82h-.7v.819h.7zM9 9.31c.37 0 .67-.3.67-.67h-.7A.03.03 0 019 8.61v.7zm-.67-.67c0 .37.3.67.67.67v-.7a.03.03 0 01.03.03h-.7zm0-.819v.819h.7V7.82h-.7zm.896-1.243a1.309 1.309 0 00-.896 1.243h.7c0-.263.168-.496.417-.578l-.221-.665zm.607-.202l-.607.203.22.664.608-.203-.22-.664zm.417-.578a.609.609 0 01-.417.578l.221.664c.536-.178.897-.679.896-1.243h-.7zm0-.358v.357h.7V5.44h-.7zM9 4.19c.69 0 1.25.56 1.25 1.25h.7A1.95 1.95 0 009 3.49v.7zM7.75 5.44c0-.69.56-1.25 1.25-1.25v-.7a1.95 1.95 0 00-1.95 1.95h.7zm-.67.67c.37 0 .67-.3.67-.67h-.7a.03.03 0 01.03-.03v.7zm-.67-.67c0 .37.3.67.67.67v-.7a.03.03 0 01.03.03h-.7zM9 2.85a2.59 2.59 0 00-2.59 2.59h.7A1.89 1.89 0 019 3.55v-.7zm2.59 2.59A2.59 2.59 0 009 2.85v.7a1.89 1.89 0 011.89 1.89h.7zM8.97 9.6v.64h.7V9.6h-.7zm-.29.35h.64v-.7h-.64v.7zm.35.29V9.6h-.7v.64h.7zm.29-.35h-.64v.7h.64v-.7z\" fill=\"currentColor\"/></svg>",
    "type": "outline",
    "metadata": {
      "width": "18",
      "height": "16",
      "name": "chat-question",
      "type": "outline"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\"><path d=\"M19 9.455l-8.46 5.421a1 1 0 01-1.08 0L1 9.456v-.954a.5.5 0 01.5-.5h16.215a24.387 24.387 0 01-.388-.412 18.41 18.41 0 01-.519-.588H1.5a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5V9.846a4.795 4.795 0 01-1-.648zm0 11.047a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-9.86l7.92 5.076a2 2 0 002.16 0L19 10.643zm3.5-19.5a2.488 2.488 0 00-2 1.014A2.493 2.493 0 0016 3.502c0 1.762 4.004 5.5 4.493 5.5h.014c.489 0 4.493-3.738 4.493-5.5a2.5 2.5 0 00-2.5-2.5zm-2 6.862c-1.103-.83-3.5-3.465-3.5-4.362a1.502 1.502 0 011.5-1.5 1.485 1.485 0 011.198.61L20.5 3.69l.802-1.078a1.485 1.485 0 011.198-.61 1.502 1.502 0 011.5 1.5c0 .897-2.397 3.532-3.5 4.362z\"/></svg>",
    "type": "outline",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "email-love",
      "type": "outline"
    }
  }, {
    "source": "<svg width=\"20\" height=\"22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.896 1.352l5.153 5.155a1.2 1.2 0 01.352.848V19.8a1.2 1.2 0 01-1.2 1.2H2.8a1.2 1.2 0 01-1.2-1.2V2.2A1.2 1.2 0 012.8 1h9.246a1.2 1.2 0 01.849.352zm.301 5.248h3.814l-4.228-4.23.014 3.832a.4.4 0 00.4.398zM17.6 19.8a.4.4 0 01-.4.4H2.8a.4.4 0 01-.4-.4V2.2a.4.4 0 01.4-.4h9.18l.017 4.405c.004.66.54 1.194 1.2 1.195H17.6v12.4zm-3.883-9.083L9.175 15.26l-2.119-1.766a.4.4 0 00-.512.615l2.4 2a.4.4 0 00.539-.025l4.8-4.8a.4.4 0 00-.566-.566z\" fill=\"currentColor\"/><path d=\"M18.05 6.507l.247-.247-.248.247zm-5.154-5.155l.247-.248-.247.248zM18.4 7.355h.35-.35zM12.047 1V.65 1zm4.964 5.6v.35h.845l-.598-.597-.247.247zm-3.814 0v.35-.35zm-.414-4.23l.247-.248-.6-.6.002.85.35-.002zm.014 3.832l-.35.001.35-.001zM11.98 1.8l.35-.002-.002-.348h-.348v.35zm.017 4.405h-.35v.002l.35-.002zm1.2 1.195v.35-.35zm4.403 0h.35v-.35h-.35v.35zm-8.425 7.86l-.224.268.246.205.226-.226-.248-.248zm4.542-4.543l-.243-.251-.004.004.247.247zm-6.66 2.776l.223-.269-.224.269zm-.395-.068l.12.328-.12-.328zm-.256.307l.345.06-.345-.06zm.138.376l-.224.269.224-.27zm2.4 2l-.224.269.224-.27zm.539-.025l-.248-.247.248.247zm4.8-4.8l.247.248.005-.005-.252-.243zm-.005-.56l.247-.248-.247.247zm4.019-4.463l-5.154-5.156-.495.495 5.154 5.156.495-.495zm.454 1.095c0-.41-.164-.804-.454-1.095l-.495.495a.85.85 0 01.249.6h.7zm0 12.445V7.355h-.7V19.8h.7zm-1.55 1.55a1.55 1.55 0 001.55-1.55h-.7a.85.85 0 01-.85.85v.7zm-14.4 0h14.4v-.7H2.8v.7zM1.25 19.8c0 .856.694 1.55 1.55 1.55v-.7a.85.85 0 01-.85-.85h-.7zm0-17.6v17.6h.7V2.2h-.7zM2.8.65A1.55 1.55 0 001.25 2.2h.7c0-.47.38-.85.85-.85v-.7zm9.246 0H2.801v.7h9.246v-.7zm1.096.454A1.55 1.55 0 0012.047.65v.7a.85.85 0 01.601.25l.495-.496zM17.01 6.25h-3.814v.7h3.814v-.7zm-4.476-3.633l4.228 4.23.495-.494-4.228-4.23-.495.494zm.612 3.584l-.014-3.832-.7.002.014 3.832.7-.002zm.05.05a.05.05 0 01-.05-.05l-.7.003a.75.75 0 00.75.746v-.7zM17.2 20.55a.75.75 0 00.75-.75h-.7a.05.05 0 01-.05.05v.7zm-14.4 0h14.4v-.7H2.8v.7zm-.75-.75c0 .414.336.75.75.75v-.7a.05.05 0 01-.05-.05h-.7zm0-17.6v17.6h.7V2.2h-.7zm.75-.75a.75.75 0 00-.75.75h.7a.05.05 0 01.05-.05v-.7zm9.18 0H2.8v.7h9.18v-.7zm.367 4.753l-.017-4.405-.7.003.017 4.405.7-.003zm.85.847a.852.852 0 01-.85-.847l-.7.003a1.552 1.552 0 001.55 1.544v-.7zm4.403 0h-4.403v.7H17.6v-.7zm.35 12.75V7.4h-.7v12.4h.7zm-8.527-4.293l4.542-4.542-.495-.495-4.542 4.542.495.495zm-2.59-1.745l2.118 1.766.449-.538-2.12-1.766-.448.538zm-.05-.009a.05.05 0 01.05.009l.447-.538a.75.75 0 00-.739-.128l.242.657zm-.032.039a.05.05 0 01.032-.039l-.242-.657a.75.75 0 00-.48.576l.69.12zm.017.047a.05.05 0 01-.017-.047l-.69-.12a.75.75 0 00.259.705l.448-.538zm2.4 2l-2.4-2-.448.538 2.4 2 .448-.538zm.067-.003a.05.05 0 01-.067.003l-.448.538a.75.75 0 001.01-.047l-.495-.494zm4.8-4.8l-4.8 4.8.495.495 4.8-4.8-.495-.495zm-.005-.066c.02.02.02.05.001.07l.504.486a.75.75 0 00-.01-1.051l-.495.495zm-.07 0a.05.05 0 01.07 0l.495-.495a.75.75 0 00-1.05-.01l.485.504z\" fill=\"currentColor\"/></svg>",
    "type": "outline",
    "metadata": {
      "width": "20",
      "height": "22",
      "name": "file-file-tick",
      "type": "outline"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\"><path d=\"M12.5 4A12.48 12.48 0 001.838 23h21.324A12.48 12.48 0 0012.5 4zm10.086 18H2.414a11.5 11.5 0 1120.172 0zM12 7.5a.5.5 0 11.5.5.5.5 0 01-.5-.5zM6.136 9.929a.5.5 0 11-.707 0 .5.5 0 01.707 0zM3.5 17a.5.5 0 11-.5-.5.5.5 0 01.5.5zm19 0a.5.5 0 11-.5-.5.5.5 0 01.5.5zm-2.929-7.071a.5.5 0 11-.707 0 .5.5 0 01.707 0zM13 18.092V12.5a.5.5 0 00-1 0v5.592a1.5 1.5 0 101 0zM12.5 20a.5.5 0 11.5-.5.5.5 0 01-.5.5z\" fill-rule=\"evenodd\"/></svg>",
    "type": "outline",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "normal-speed",
      "type": "outline"
    }
  }, {
    "source": "<svg width=\"14\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.439 11.879l-.624-.624a1.28 1.28 0 01-.375-.905V5.76a5.12 5.12 0 10-10.24 0v4.59c0 .34-.135.665-.375.905l-.624.624a.96.96 0 00-.281.678v.883h3.93a2.548 2.548 0 004.94 0h3.93v-.883a.96.96 0 00-.281-.678zm-6.119 2.84a1.917 1.917 0 01-1.802-1.28h3.604a1.917 1.917 0 01-1.802 1.28zM1.56 12.8h11.52v-.242a.318.318 0 00-.094-.226l-.624-.624a1.909 1.909 0 01-.562-1.357V5.76a4.48 4.48 0 10-8.96 0v4.59c.001.51-.201.998-.562 1.357l-.624.624a.318.318 0 00-.094.226v.243z\" fill=\"currentColor\"/><path d=\"M12.815 11.255l-.177.177.177-.177zm.624.624l.177-.177-.177.177zm-.999-1.53h.25-.25zm-10.24 0h-.25.25zm-.375.906l.177.177-.177-.177zm-.624.624l-.177-.177.177.177zm-.281.678H.67h.25zm0 .883H.67v.25h.25v-.25zm3.93 0l.243-.062-.048-.188H4.85v.25zm4.94 0v-.25h-.195l-.048.188.243.062zm3.93 0v.25h.25v-.25h-.25zm0-.883h.25-.25zm-8.202.883v-.25h-.353l.117.333.236-.083zm1.802 1.28v.25-.25zm1.802-1.28l.236.083.117-.333h-.353v.25zm3.958-.64v.25h.25v-.25h-.25zm-11.52 0h-.25v.25h.25v-.25zm11.52-.243h-.25.25zm-.094-.226l-.176.177.176-.177zm-.624-.624l.177-.176-.177.176zM11.8 10.35h.25-.25zm-8.96 0h-.25.25zm-.562 1.357L2.1 11.53l.177.177zm-.624.624l.176.177-.176-.177zm-.094.226h.25-.25zm11.078-1.125l.624.623.354-.353-.624-.624-.354.354zm-.448-1.082c0 .405.161.795.448 1.082l.354-.354a1.03 1.03 0 01-.302-.728h-.5zm0-4.59v4.59h.5V5.76h-.5zM7.32.89a4.87 4.87 0 014.87 4.87h.5A5.37 5.37 0 007.32.39v.5zM2.45 5.76A4.87 4.87 0 017.32.89v-.5a5.37 5.37 0 00-5.37 5.37h.5zm0 4.59V5.76h-.5v4.59h.5zm-.448 1.082a1.53 1.53 0 00.448-1.082h-.5c0 .273-.108.535-.302.728l.354.354zm-.624.623l.624-.623-.354-.354-.624.624.354.354zm-.208.502a.71.71 0 01.208-.502l-.354-.353a1.21 1.21 0 00-.354.855h.5zm0 .883v-.883h-.5v.883h.5zm3.68-.25H.92v.5h3.93v-.5zm2.47 1.92a2.298 2.298 0 01-2.227-1.732l-.485.123A2.798 2.798 0 007.32 15.61v-.5zm2.227-1.732A2.298 2.298 0 017.32 15.11v.5c1.28 0 2.396-.868 2.712-2.108l-.485-.124zm4.173-.188H9.79v.5h3.93v-.5zm-.25-.633v.883h.5v-.883h-.5zm-.208-.502a.71.71 0 01.208.502h.5c0-.32-.127-.628-.354-.855l-.354.353zm-7.98 1.468A2.167 2.167 0 007.32 14.97l.002-.5a1.667 1.667 0 01-1.567-1.113l-.472.166zm3.84-.333H5.518v.5h3.604v-.5zm-1.801 1.78a2.167 2.167 0 002.037-1.447l-.472-.166A1.667 1.667 0 017.32 14.47l.002.5zm5.759-2.42H1.56v.5h11.52v-.5zm-.25.007v.243h.5v-.243h-.5zm-.02-.049c.013.013.02.03.02.049h.5a.568.568 0 00-.167-.403l-.353.354zm-.624-.624l.624.624.353-.354-.624-.623-.353.353zm-.636-1.535c-.002.576.227 1.13.636 1.536l.353-.355a1.659 1.659 0 01-.489-1.18l-.5-.001zm0-4.59v4.59h.5V5.76h-.5zM7.32 1.53a4.23 4.23 0 014.23 4.23h.5a4.73 4.73 0 00-4.73-4.73v.5zM3.09 5.76a4.23 4.23 0 014.23-4.23v-.5a4.73 4.73 0 00-4.73 4.73h.5zm0 4.59V5.76h-.5v4.59h.5zm-.636 1.536c.409-.407.638-.96.636-1.536l-.5.001c.001.443-.175.868-.489 1.18l.353.355zm-.623.623l.623-.624-.353-.353-.624.623.354.354zm-.021.049c0-.018.007-.036.02-.049l-.353-.354a.568.568 0 00-.167.404l.5-.001zm0 .243v-.243h-.5v.243h.5z\" fill=\"currentColor\"/></svg>",
    "type": "outline",
    "metadata": {
      "width": "14",
      "height": "16",
      "name": "notification",
      "type": "outline"
    }
  }, {
    "source": "<svg width=\"24\" height=\"26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.686 5.94a.489.489 0 000 .68.46.46 0 00.661 0l3.88-3.981v18.04c0 .266.21.48.467.48a.474.474 0 00.468-.48V2.64l3.88 3.98a.46.46 0 00.454.131.474.474 0 00.335-.343.488.488 0 00-.128-.466l-4.678-4.8a.46.46 0 00-.661 0l-4.678 4.8zm10.622 2.74h2.807c.775 0 1.403.645 1.403 1.44v13.44c0 .795-.628 1.44-1.403 1.44H3.275c-.776 0-1.404-.645-1.404-1.44V10.12c0-.795.628-1.44 1.403-1.44h2.807c.258 0 .468.215.468.48s-.21.48-.468.48H3.274a.474.474 0 00-.467.48v13.44c0 .265.21.48.467.48h16.84a.474.474 0 00.468-.48V10.12c0-.265-.21-.48-.467-.48h-2.807a.474.474 0 01-.468-.48c0-.265.21-.48.468-.48z\" fill=\"currentColor\"/><path d=\"M6.686 6.62l-.358.348.358-.349zm0-.68l-.358-.348.358.349zm.661.68l.358.348-.358-.349zm3.88-3.981h.5v-1.23l-.858.88.358.35zm.935 0l.358-.35-.858-.88v1.23h.5zm3.88 3.98l.364-.342-.006-.007-.358.35zm.454.131l.13.483-.13-.483zm.335-.343l-.485-.123.485.123zm-.128-.466l-.358.349.006.006.352-.355zm-4.678-4.8l.358-.35-.358.35zm-.661 0l-.358-.35.358.35zm-4.32 5.13a.02.02 0 01.004.006l.001.003v.003a.02.02 0 01-.005.006l-.716-.697a.989.989 0 000 1.376l.716-.698zm-.055 0a.04.04 0 01.028-.011.04.04 0 01.027.01l-.716.698a.96.96 0 001.377 0L6.99 6.27zm3.88-3.981l-3.88 3.98.716.698 3.88-3.98-.716-.698zm.858 18.39V2.639h-1v18.04h1zm-.033-.02c.006 0 .012.001.017.003a.031.031 0 01.01.007.018.018 0 01.005.006v.003s0 .001 0 0h-1c0 .53.422.98.968.98v-1zm-.032.02v-.001l.001-.003.004-.006a.032.032 0 01.01-.007.044.044 0 01.018-.003v1a.974.974 0 00.967-.98h-1zm0-18.041v18.04h1V2.64h-1zM16.4 6.27l-3.88-3.98-.716.698 3.88 3.98.716-.698zm-.033-.003a.04.04 0 01.039.01l-.728.685a.96.96 0 00.948.271l-.26-.966zm-.02.017c0-.003.004-.012.02-.017l.26.966a.974.974 0 00.688-.702l-.969-.247zm.004.012a.018.018 0 01-.005-.008v-.004l.97.247a.988.988 0 00-.261-.946l-.704.71zM11.667 1.49l4.678 4.8.716-.698-4.678-4.8-.716.698zm.055 0a.04.04 0 01-.027.01.04.04 0 01-.028-.01l.716-.698a.96.96 0 00-1.377 0l.716.698zm-4.678 4.8l4.678-4.8-.716-.698-4.678 4.8.716.698zm13.07 1.89h-2.806v1h2.807v-1zm1.904 1.94c0-1.06-.84-1.94-1.903-1.94v1c.486 0 .903.409.903.94h1zm0 13.44V10.12h-1v13.44h1zm-1.903 1.94c1.063 0 1.903-.88 1.903-1.94h-1c0 .531-.417.94-.903.94v1zm-16.84 0h16.84v-1H3.275v1zM1.37 23.56c0 1.06.84 1.94 1.903 1.94v-1c-.486 0-.903-.409-.903-.94h-1zm0-13.44v13.44h1V10.12h-1zm1.903-1.94c-1.063 0-1.903.88-1.903 1.94h1c0-.531.417-.94.903-.94v-1zm2.807 0H3.274v1h2.807v-1zm.968.98a.974.974 0 00-.968-.98v1a.044.044 0 01-.017-.004.032.032 0 01-.01-.007.018.018 0 01-.005-.008V9.16h1zm-.968.98a.974.974 0 00.968-.98h-1v-.004l.005-.006a.032.032 0 01.01-.006.044.044 0 01.017-.004v1zm-2.807 0H6.08v-1H3.274v1zm.033-.02l-.001.004a.018.018 0 01-.004.005.032.032 0 01-.01.007.043.043 0 01-.018.004v-1a.974.974 0 00-.967.98h1zm0 13.44V10.12h-1v13.44h1zm-.033-.02c.006 0 .012.001.017.004a.032.032 0 01.01.006.018.018 0 01.006.009s0 .001 0 0h-1c0 .53.42.98.967.98v-1zm16.84 0H3.275v1h16.84v-1zm-.032.02v-.001l.001-.003.004-.006a.031.031 0 01.01-.006.044.044 0 01.018-.004v1a.974.974 0 00.967-.98h-1zm0-13.44v13.44h1V10.12h-1zm.033.02a.044.044 0 01-.017-.004.031.031 0 01-.01-.006.018.018 0 01-.005-.006v-.004h1a.974.974 0 00-.968-.98v1zm-2.807 0h2.807v-1h-2.807v1zm-.968-.98c0 .529.421.98.968.98v-1c.005 0 .011.001.017.004a.031.031 0 01.01.006.016.016 0 01.004.006.02.02 0 01.001.003s0 .001 0 0h-1zm.968-.98a.974.974 0 00-.968.98h1v.004a.016.016 0 01-.005.005.032.032 0 01-.01.007.044.044 0 01-.017.004v-1z\" fill=\"currentColor\"/></svg>",
    "type": "outline",
    "metadata": {
      "width": "24",
      "height": "26",
      "name": "outline-share",
      "type": "outline"
    }
  }, {
    "source": "<svg width=\"24\" height=\"26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.515 10.6h-3.274V2.44c0-.795-.629-1.44-1.404-1.44H7.482c-.775 0-1.404.645-1.404 1.44v8.16H2.804c-.775 0-1.404.645-1.404 1.44v8.64c0 .795.629 1.44 1.404 1.44h2.339v1.44c0 .795.628 1.44 1.403 1.44h11.227c.775 0 1.403-.645 1.403-1.44v-1.44h2.339c.775 0 1.403-.645 1.403-1.44v-8.64c0-.795-.628-1.44-1.403-1.44zM7.014 2.44c0-.265.21-.48.468-.48h9.355c.258 0 .468.215.468.48v8.16H7.014V2.44zm10.759 21.6a.474.474 0 00.468-.48v-4.32H6.078v4.32c0 .265.21.48.468.48h11.227zm4.21-3.36c0 .265-.21.48-.468.48h-2.339v-1.92h1.403a.474.474 0 00.468-.48c0-.265-.21-.48-.468-.48H3.74a.474.474 0 00-.467.48c0 .265.209.48.467.48h1.404v1.92h-2.34a.474.474 0 01-.467-.48v-8.64c0-.265.21-.48.468-.48h18.711c.258 0 .468.215.468.48v8.64zM6.546 14.44a.474.474 0 00.468-.48c0-.265-.21-.48-.468-.48H4.675a.474.474 0 00-.468.48c0 .265.21.48.468.48h1.871z\" fill=\"currentColor\"/><path d=\"M18.24 10.6h-.5v.5h.5v-.5zm-12.162 0v.5h.5v-.5h-.5zm-.935 11.52h.5v-.5h-.5v.5zm14.033 0v-.5h-.5v.5h.5zM7.482 1.96v-.5H7.48v.5zm-.468.48h-.5.5zm9.823-.48v-.5.5zm.468.48h.5-.5zm0 8.16v.5h.5v-.5h-.5zm-10.291 0h-.5v.5h.5v-.5zM18.24 23.56h.5-.5zm-.468.48v.5-.5zm.468-4.8h.5v-.5h-.5v.5zm-12.163 0v-.5h-.5v.5h.5zm0 4.32h-.5.5zm.468.48v.5-.5zm12.63-2.88h-.5v.5h.5v-.5zm0-1.92v-.5h-.5v.5h.5zm-14.033 0h.5v-.5h-.5v.5zm0 1.92v.5h.5v-.5h-.5zM18.24 11.1h3.274v-1H18.24v1zm-.5-8.66v8.16h1V2.44h-1zm-.904-.94c.487 0 .904.409.904.94h1c0-1.06-.84-1.94-1.904-1.94v1zm-9.355 0h9.355v-1H7.482v1zm-.904.94c0-.531.417-.94.904-.94v-1c-1.064 0-1.904.88-1.904 1.94h1zm0 8.16V2.44h-1v8.16h1zm-3.774.5h3.274v-1H2.804v1zm-.904.94c0-.531.417-.94.904-.94v-1C1.74 10.1.9 10.98.9 12.04h1zm0 8.64v-8.64h-1v8.64h1zm.904.94c-.487 0-.904-.409-.904-.94h-1c0 1.06.84 1.94 1.904 1.94v-1zm2.339 0h-2.34v1h2.34v-1zm.5 1.94v-1.44h-1v1.44h1zm.903.94c-.487 0-.903-.409-.903-.94h-1c0 1.06.84 1.94 1.903 1.94v-1zm11.227 0H6.546v1h11.227v-1zm.903-.94c0 .531-.416.94-.903.94v1c1.063 0 1.903-.88 1.903-1.94h-1zm0-1.44v1.44h1v-1.44h-1zm2.839-.5h-2.339v1h2.339v-1zm.903-.94c0 .531-.416.94-.903.94v1c1.063 0 1.903-.88 1.903-1.94h-1zm0-8.64v8.64h1v-8.64h-1zm-.903-.94c.487 0 .903.409.903.94h1c0-1.06-.84-1.94-1.903-1.94v1zM7.481 1.46a.975.975 0 00-.967.98h1l-.001.004a.018.018 0 01-.004.006.031.031 0 01-.01.006.043.043 0 01-.017.004l-.001-1zm9.356 0H7.482v1h9.355v-1zm.968.98a.975.975 0 00-.967-.98l-.001 1a.044.044 0 01-.017-.004.031.031 0 01-.01-.006.017.017 0 01-.004-.006l-.001-.003 1-.002zm0 8.16V2.44h-1v8.16h1zm-10.791.5h10.291v-1H7.014v1zm-.5-8.66v8.16h1V2.44h-1zM17.74 23.56l.002-.004.003-.006a.031.031 0 01.01-.006.042.042 0 01.017-.004l.001 1a.975.975 0 00.968-.98h-1zm0-4.32v4.32h1v-4.32h-1zm-11.662.5h12.163v-1H6.078v1zm.5 3.82v-4.32h-1v4.32h1zm-.031-.02c.005 0 .011.001.016.004a.031.031 0 01.01.006.017.017 0 01.004.006l.001.003-1 .002c0 .528.421.978.967.979l.002-1zm11.226 0H6.546v1h11.227v-1zm3.742-1.88a.974.974 0 00.968-.98h-1v-.004l.005-.006a.032.032 0 01.01-.006.044.044 0 01.017-.004v1zm-2.339 0h2.339v-1h-2.339v1zm-.5-2.42v1.92h1v-1.92h-1zm1.903-.5h-1.403v1h1.403v-1zm-.032.02v-.001l.001-.003a.02.02 0 01.004-.006.033.033 0 01.01-.006.043.043 0 01.017-.004v1a.974.974 0 00.968-.98h-1zm.032.02a.043.043 0 01-.017-.004.033.033 0 01-.01-.006.02.02 0 01-.004-.006v-.004h1a.974.974 0 00-.969-.98v1zm-16.84 0h16.84v-1H3.74v1zm.033-.02v.001l-.001.003a.018.018 0 01-.004.006.032.032 0 01-.01.006.043.043 0 01-.018.004v-1a.974.974 0 00-.967.98h1zm-.033-.02c.006 0 .012.001.017.004a.032.032 0 01.01.006.018.018 0 01.005.009v.001h-1c0 .529.422.98.968.98v-1zm1.404 0H3.739v1h1.404v-1zm.5 2.42v-1.92h-1v1.92h1zm-2.84.5h2.34v-1h-2.34v1zm-.967-.98c0 .529.421.98.968.98v-1c.005 0 .011.001.017.004a.032.032 0 01.01.006.018.018 0 01.005.009v.001h-1zm0-8.64v8.64h1v-8.64h-1zm.968-.98a.974.974 0 00-.968.98h1v.001l-.001.003a.018.018 0 01-.004.006.032.032 0 01-.01.006.043.043 0 01-.017.004v-1zm18.711 0H2.804v1h18.711v-1zm.968.98a.974.974 0 00-.968-.98v1a.044.044 0 01-.017-.004.032.032 0 01-.01-.006.018.018 0 01-.005-.009v-.001h1zm0 8.64v-8.64h-1v8.64h1zm-15.97-6.72v-.001l.002-.003c0-.002.002-.004.004-.006a.032.032 0 01.01-.006.043.043 0 01.017-.004v1a.974.974 0 00.968-.98h-1zm.033.02a.043.043 0 01-.017-.004.032.032 0 01-.01-.006.018.018 0 01-.005-.009v-.001h1a.974.974 0 00-.968-.98v1zm-1.871 0h1.871v-1H4.675v1zm.032-.02v.004a.018.018 0 01-.005.006.032.032 0 01-.01.006.043.043 0 01-.017.004v-1a.974.974 0 00-.968.98h1zm-.032-.02c.005 0 .011.001.017.004a.032.032 0 01.01.006.018.018 0 01.005.009v.001h-1c0 .529.421.98.968.98v-1zm1.871 0H4.675v1h1.871v-1z\" fill=\"currentColor\"/></svg>",
    "type": "outline",
    "metadata": {
      "width": "24",
      "height": "26",
      "name": "outline-print",
      "type": "outline"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 12.506c0-.133.053-.26.147-.353l7-7a.5.5 0 01.707.707l-6.147 6.146H23.5a.5.5 0 010 1H3.707l6.147 6.147a.5.5 0 01-.707.707l-7-7A.498.498 0 012 12.506z\" fill=\"currentColor\" stroke=\"currentColor\" opacity=\".5\"/></svg>",
    "type": "outline",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "outline-arrow-right",
      "type": "outline"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.526 2.156l15.016 9.515a.979.979 0 010 1.658L5.526 22.843A.991.991 0 014 22.014V2.986a.991.991 0 011.526-.829zm-.53.849L5 22.015l15.007-9.531-15.011-9.48z\" fill=\"currentColor\"/><path d=\"M20.542 11.671l-.134.212h.001l.133-.212zM5.526 2.156l-.135.21v.001l.135-.21zm15.016 11.172l-.133-.211.133.211zM5.526 22.845l-.134-.212-.001.001.135.21zm-1.008.036l.12-.22-.12.22zM4 22.015h-.25v.001l.25-.001zm0-19.03l-.25-.001v.001H4zm.518-.865l.12.22-.12-.22zM5 22.015h-.25v.454l.384-.243L5 22.015zm-.004-19.01l.133-.212-.383-.242v.454h.25zm15.011 9.479l.134.211.333-.212-.334-.21-.133.211zm.669-1.024L5.659 1.945l-.267.422 15.016 9.516.268-.423zm.574 1.04c0-.423-.217-.815-.575-1.04l-.266.423c.212.133.341.366.341.617h.5zm-.575 1.04c.358-.225.575-.618.575-1.04h-.5c0 .25-.129.483-.34.617l.265.423zM5.66 23.055l15.017-9.515-.267-.423-15.017 9.515.267.423zm-1.26.044c.397.216.88.199 1.261-.045l-.27-.421a.741.741 0 01-.753.027l-.238.44zm-.649-1.083c.003.452.251.867.649 1.083l.238-.44a.741.741 0 01-.387-.646l-.5.003zm0-19.03v19.029h.5V2.985h-.5zM4.399 1.9c-.398.216-.646.63-.649 1.083l.5.003a.741.741 0 01.387-.647L4.4 1.9zm1.261.045A1.241 1.241 0 004.4 1.9l.238.439a.741.741 0 01.754.027l.27-.421zm-.41 20.069l-.004-19.01h-.5l.004 19.01h.5zm14.623-9.742l-15.007 9.53.268.423 15.007-9.53-.268-.423zM4.863 3.216l15.01 9.48.267-.423-15.01-9.48-.267.423z\" fill=\"currentColor\"/></svg>",
    "type": "outline",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "play",
      "type": "outline"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\"><path d=\"M21 12.5a.5.5 0 01-.5.5H13v7.5a.5.5 0 01-1 0V13H4.5a.5.5 0 010-1H12V4.5a.5.5 0 011 0V12h7.5a.5.5 0 01.5.5z\"/></svg>",
    "type": "outline",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "plus-ui",
      "type": "outline"
    }
  }, {
    "source": "<svg width=\"18\" height=\"41\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\".987\" y=\".876\" width=\"15.732\" height=\"26.19\" rx=\"7.5\" stroke=\"currentColor\"/><path d=\"M8.853 4.56v4.705\" stroke=\"currentColor\" stroke-linecap=\"round\"/><path d=\"M8.853 38.626l2.912-3.397c.089-.109.178-.109.267 0l.519.61c.09.109.09.217 0 .326l-3.564 4.15a.164.164 0 01-.134.061c-.056 0-.1-.02-.134-.06l-3.564-4.151c-.089-.109-.089-.217 0-.326l.52-.61c.088-.109.178-.109.267 0l2.911 3.397z\" fill=\"currentColor\"/></svg>",
    "type": "outline",
    "metadata": {
      "width": "18",
      "height": "41",
      "name": "scroll",
      "type": "outline"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\"><path d=\"M3 7H2V6h1zm2-1H4v1h1zm2 0H6v1h1zm18-.5v18a1.502 1.502 0 01-1.5 1.5H7v-1h16.5a.5.5 0 00.5-.5V9H1v13.5a.5.5 0 01-1 0v-17A1.502 1.502 0 011.5 4h22A1.502 1.502 0 0125 5.5zM8 5H1.5a.5.5 0 00-.5.5V8h7zm16 .5a.5.5 0 00-.5-.5H9v3h15zM10.5 22a5.474 5.474 0 01-3.519-1.274l-4.128 4.128a.5.5 0 01-.707-.707l4.128-4.128A5.499 5.499 0 1110.5 22zm0-1A4.5 4.5 0 106 16.5a4.505 4.505 0 004.5 4.5z\"/></svg>",
    "type": "outline",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "search-browser",
      "type": "outline"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.993 15.997l2.752 2.752a1.46 1.46 0 010 2.064l-1.652 1.651a4.86 4.86 0 01-6.193.572 60.161 60.161 0 01-7.29-5.663 60.17 60.17 0 01-5.663-7.29A4.86 4.86 0 012.52 3.89L4.17 2.238a1.46 1.46 0 012.064 0L8.986 4.99a1.46 1.46 0 010 2.064L7.801 8.239a.972.972 0 00-.141 1.198 26.25 26.25 0 003.39 4.496 26.258 26.258 0 004.496 3.39.972.972 0 001.198-.14l1.185-1.186a1.46 1.46 0 012.064 0zm.42 5.789l1.653-1.652a.5.5 0 000-.706l-2.752-2.752a.5.5 0 00-.706 0l-1.185 1.185a1.932 1.932 0 01-2.378.28 27.136 27.136 0 01-4.674-3.529 27.117 27.117 0 01-3.53-4.674 1.928 1.928 0 01.281-2.378l1.185-1.185a.5.5 0 000-.706L5.556 2.917a.5.5 0 00-.707 0L3.197 4.57a3.902 3.902 0 00-.459 4.97 59.653 59.653 0 005.551 7.155 59.63 59.63 0 007.155 5.55 3.9 3.9 0 004.97-.458z\" fill=\"currentColor\"/><path d=\"M22.745 18.749l-.177.177.177-.177zm-2.752-2.752l.177-.177-.177.177zm2.752 4.816l-.177-.177.177.177zm-1.652 1.651l-.177-.176.177.176zm-6.193.572l.142-.206-.004-.003-.138.209zm-7.29-5.663l-.185.168.009.01.008.007.168-.185zm-5.663-7.29l.21-.138-.004-.004-.206.142zM2.52 3.89l.176.177-.176-.177zM4.17 2.238l.177.177-.177-.177zm2.064 0l-.176.177.176-.177zM8.986 4.99l-.177.177.177-.177zm0 2.064l-.177-.177.177.177zM7.801 8.239l.177.177-.177-.177zM7.66 9.437l.214-.129-.001-.002-.213.13zm3.39 4.496l-.183.171.006.006.006.006.17-.183zm4.496 3.39l.131-.213-.002-.001-.129.214zm1.198-.14l-.177-.178.177.177zm1.185-1.186l-.177-.177.177.177zm4.137 4.137l.177.177.073-.073v-.104h-.25zm-1.652 1.652l-.177-.177.177.177zm1.652-1.652l-.177-.177-.073.074v.103h.25zm0-.706l.177-.177-.177.177zm-2.752-2.752l.177-.177-.177.177zm-.706 0l-.177-.177.177.177zm-1.185 1.185l-.177-.177.177.177zm-2.378.28l.131-.212-.002-.002-.129.215zm-4.674-3.529l-.182.171.005.006.006.005.171-.182zm-3.53-4.674l.215-.128-.002-.003-.213.13zm.281-2.378l.176.177-.176-.177zm1.185-1.185l.177.177-.177-.177zm0-.706l.177-.177-.177.177zM5.556 2.917l-.177.177.177-.177zm-.707 0l.177.177-.177-.177zM3.197 4.57l.177.177-.177-.177zm-.459 4.97l.209-.138-.003-.004-.206.142zm5.551 7.155l-.185.168.008.01.01.008.167-.186zm7.155 5.55l.142-.205-.004-.003-.138.209zm7.478-3.672L20.17 15.82l-.354.354 2.752 2.752.354-.354zm.5 1.209c0-.454-.18-.889-.5-1.21l-.354.354c.227.227.354.535.354.856h.5zm-.5 1.208c.32-.32.5-.755.5-1.208h-.5c0 .32-.127.628-.354.855l.354.353zm-1.652 1.652l1.652-1.652-.354-.353-1.652 1.652.354.353zm-6.512.6a5.11 5.11 0 006.512-.6l-.354-.353a4.61 4.61 0 01-5.874.542l-.284.412zm-7.316-5.683a60.403 60.403 0 007.32 5.686l.276-.417a59.915 59.915 0 01-7.26-5.639l-.336.37zM1.74 10.221a60.41 60.41 0 005.686 7.32l.37-.336a59.914 59.914 0 01-5.639-7.26l-.417.276zm.603-6.508a5.11 5.11 0 00-.6 6.512l.411-.284a4.61 4.61 0 01.542-5.874l-.353-.354zm1.652-1.651L2.342 3.713l.353.354 1.652-1.652-.353-.353zm1.208-.501c-.453 0-.888.18-1.208.5l.353.354a1.21 1.21 0 01.855-.354v-.5zm1.21.5a1.71 1.71 0 00-1.21-.5v.5c.321 0 .629.127.856.354l.353-.353zm2.75 2.752l-2.75-2.751-.354.353 2.751 2.752.354-.354zm.502 1.209c0-.454-.18-.888-.501-1.209l-.354.354c.227.226.355.534.355.855h.5zM9.163 7.23c.32-.32.5-.756.5-1.21h-.5c0 .322-.127.63-.354.856l.354.354zM7.978 8.416L9.163 7.23l-.354-.354-1.185 1.185.354.354zm-.105.89a.722.722 0 01.105-.89l-.354-.354c-.4.4-.474 1.023-.177 1.506l.426-.262zm3.359 4.456a26 26 0 01-3.358-4.454l-.429.257a26.5 26.5 0 003.422 4.54l.365-.343zm4.443 3.347a26.005 26.005 0 01-4.454-3.358l-.342.365a26.513 26.513 0 004.54 3.422l.256-.43zm.892-.104a.722.722 0 01-.89.105l-.262.426a1.223 1.223 0 001.506-.177l-.354-.354zm1.185-1.185l-1.185 1.185.354.354 1.185-1.185-.354-.354zm2.418 0a1.71 1.71 0 00-2.418 0l.354.354a1.21 1.21 0 011.71 0l.354-.354zm1.72 4.137l-1.653 1.652.354.354 1.652-1.652-.354-.354zm-.074.177h.5-.5zm.073-.53a.25.25 0 010 .353l.354.353a.75.75 0 000-1.059l-.354.353zm-2.752-2.751l2.752 2.752.354-.354-2.752-2.752-.354.354zm-.352 0a.25.25 0 01.353 0l.353-.354a.75.75 0 00-1.06 0l.354.354zm-1.186 1.185l1.186-1.185-.354-.354-1.185 1.185.354.354zm-2.685.317c.861.528 1.972.397 2.686-.317l-.354-.354c-.55.55-1.406.652-2.07.245l-.262.426zm-4.714-3.56a27.38 27.38 0 004.717 3.562l.257-.43a26.884 26.884 0 01-4.632-3.497l-.342.364zm-3.573-4.729a27.373 27.373 0 003.562 4.717l.364-.342A26.875 26.875 0 017.056 9.81l-.43.256zm.319-2.683a2.178 2.178 0 00-.318 2.686l.426-.262a1.678 1.678 0 01.244-2.07l-.352-.354zM8.13 6.198L6.945 7.384l.354.353 1.185-1.185-.354-.354zm0-.353a.25.25 0 010 .354l.354.353a.75.75 0 000-1.06l-.354.353zM5.38 3.094L8.13 5.846l.354-.354L5.732 2.74l-.353.354zm-.177-.073a.25.25 0 01.177.073l.353-.354a.75.75 0 00-.53-.22v.5zm-.176.073a.25.25 0 01.176-.073v-.5a.75.75 0 00-.53.22l.354.353zM3.374 4.746l1.652-1.652-.353-.354L3.02 4.392l.353.354zm-.43 4.651a3.652 3.652 0 01.43-4.651l-.353-.354a4.152 4.152 0 00-.489 5.288l.412-.283zm5.53 7.13A59.396 59.396 0 012.948 9.4l-.417.276a59.91 59.91 0 005.574 7.185l.37-.335zm7.108 5.51a59.373 59.373 0 01-7.125-5.528l-.335.37a59.891 59.891 0 007.184 5.574l.276-.417zm4.655-.428a3.65 3.65 0 01-4.651.43l-.284.412a4.15 4.15 0 005.289-.489l-.354-.353z\" fill=\"currentColor\"/></svg>",
    "type": "outline",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "telephone",
      "type": "outline"
    }
  }],
  "shady": [{
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\"><path fill=\"#FFE292\" d=\"M15.36.96V21.6a1.44 1.44 0 01-1.44 1.44h3.84a1.44 1.44 0 001.44-1.44V.96h-3.84z\"/><path fill=\"#39264F\" d=\"M14.882 2.88h-4.8a.48.48 0 100 .96h4.8a.48.48 0 000-.96z\"/><path fill=\"#39264F\" fill-rule=\"evenodd\" d=\"M17.76 0H7.2a2.405 2.405 0 00-2.4 2.4v19.2A2.404 2.404 0 007.2 24h10.56a2.401 2.401 0 002.4-2.4V2.4a2.401 2.401 0 00-2.4-2.4zm1.44 21.6a1.44 1.44 0 01-1.44 1.44H7.2a1.442 1.442 0 01-1.44-1.44v-1.44H19.2v1.44zM5.76 2.4v16.8H19.2V2.4A1.44 1.44 0 0017.76.96H7.2c-.794 0-1.438.645-1.44 1.44z\" clip-rule=\"evenodd\"/><path fill=\"#39264F\" d=\"M11.04 22.08h2.88a.48.48 0 100-.96h-2.88a.48.48 0 000 .96z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "24",
      "height": "24",
      "name": "android",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"56\" height=\"56\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M32.64 16.166A37.456 37.456 0 0147.04 28c-1.705 3.135-12.82 14.56-25.635 14.56a23.59 23.59 0 01-4.695-.487A26.309 26.309 0 0028 44.8c12.812 0 23.93-11.425 25.634-14.56A37.262 37.262 0 0032.64 16.166z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M0 30.24c0-1.968 12.536-16.8 28-16.8s28 14.7 28 16.8c0 2.1-12.536 16.8-28 16.8S0 32.21 0 30.24zm2.399 0C4.134 33.1 14.752 44.8 28 44.8c12.813 0 23.93-11.425 25.634-14.56C51.93 27.107 40.813 15.68 28 15.68c-13.248 0-23.866 11.701-25.601 14.56z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M20.16 30.24a7.84 7.84 0 1115.68 0 7.84 7.84 0 01-15.68 0zm2.24 0a5.6 5.6 0 1011.2 0 5.6 5.6 0 00-11.2 0z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" d=\"M15.83 12.28c.201.346.571.56.972.56.197 0 .39-.052.56-.152a1.118 1.118 0 00.41-1.529l-2.24-3.878a1.12 1.12 0 10-1.94 1.12l2.239 3.878zm22.81.408a1.12 1.12 0 001.53-.409l2.24-3.878a1.12 1.12 0 10-1.94-1.12l-2.24 3.878a1.122 1.122 0 00.41 1.53zM28 8.96a1.12 1.12 0 001.12-1.12V1.12a1.12 1.12 0 00-2.24 0v6.72c0 .619.501 1.12 1.12 1.12z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "appear-password",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M43.812 7.707c8.014 10.238 7.128 24.846-2.065 34.04-9.194 9.193-23.802 10.08-34.04 2.065A25.731 25.731 0 1043.812 7.707z\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 28C0 12.536 12.536 0 28 0a28 28 0 0128 28c0 15.464-12.536 28-28 28S0 43.464 0 28zm2.24 0c0 14.227 11.533 25.76 25.76 25.76C42.22 53.744 53.744 42.22 53.76 28 53.76 13.773 42.227 2.24 28 2.24 13.773 2.24 2.24 13.773 2.24 28z\" fill=\"#5F259F\"/><path d=\"M38.408 31.687l-9.288 9.288V12.32a1.12 1.12 0 00-2.24 0v28.656l-9.289-9.288a1.12 1.12 0 00-1.583 1.584l11.2 11.2a1.12 1.12 0 001.583 0l11.2-11.2a1.12 1.12 0 00-1.583-1.584z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "arrow-bottom-circle",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M37.554 6.607c6.87 8.774 6.11 21.296-1.77 29.176-7.88 7.88-20.402 8.64-29.177 1.77A22.056 22.056 0 1037.554 6.607z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M0 24C0 10.745 10.745 0 24 0c6.365 0 12.47 2.529 16.97 7.03A23.992 23.992 0 0148 24c0 13.255-10.745 24-24 24S0 37.255 0 24zm1.92 0c0 12.194 9.886 22.08 22.08 22.08 12.189-.014 22.066-9.891 22.08-22.08 0-12.194-9.886-22.08-22.08-22.08C11.806 1.92 1.92 11.806 1.92 24z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" d=\"M29.76 28.8H10.956l4.121-4.121a.96.96 0 00-1.357-1.358l-5.76 5.76a.96.96 0 000 1.358l5.76 5.76a.957.957 0 001.619-.424.96.96 0 00-.262-.934l-4.121-4.121h18.802a.96.96 0 000-1.92zm10.278-11.239l-5.76-5.76a.96.96 0 00-1.357 1.358l4.12 4.12H18.24a.96.96 0 000 1.92h18.803l-4.121 4.122a.96.96 0 001.357 1.358l5.76-5.76a.96.96 0 000-1.358z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "48",
      "height": "48",
      "name": "arrow-left-right-circle",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"40\" height=\"40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.6 8.8a.8.8 0 01.8-.8h24.8V2.437l11.238 8.733L27.2 19.958V14.4H2.4a.8.8 0 01-.8-.8V8.8z\" fill=\"#B482E1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.4 24h23.2a2.4 2.4 0 012.4 2.4v4.8a2.4 2.4 0 01-2.4 2.4H14.4v5.6a.8.8 0 01-1.313.613L.575 30.029a1.6 1.6 0 010-2.457l12.512-9.786a.8.8 0 011.312.615V24zm23.2 8a.8.8 0 00.8-.8v-4.8a.8.8 0 00-.8-.8H12.8v-5.557L1.56 28.832l11.24 8.73V32h24.8z\" fill=\"#782DC8\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25.6 16H2.4A2.4 2.4 0 010 13.6V8.8a2.4 2.4 0 012.4-2.4h23.2V.802a.8.8 0 011.312-.614l12.512 9.784a1.6 1.6 0 010 2.458l-12.512 9.783A.8.8 0 0125.6 21.6V16zM2.4 8a.8.8 0 00-.8.8v4.8a.8.8 0 00.8.8h24.8v5.558l11.239-8.788L27.2 2.437V8H2.4z\" fill=\"#782DC8\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "arrows-arrow-left-right-a",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"72\" height=\"72\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M66.24 11.521l-43.2 48.96h46.08v-48.96h-2.88z\" fill=\"#D8D6E5\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.32 8.64h63.36A4.32 4.32 0 0172 12.96v46.08a4.32 4.32 0 01-4.32 4.32H4.32A4.32 4.32 0 010 59.04V12.96a4.32 4.32 0 014.32-4.32zm63.36 51.84a1.44 1.44 0 001.44-1.44V12.96a1.442 1.442 0 00-1.44-1.44H4.32a1.442 1.442 0 00-1.44 1.44v46.08a1.442 1.442 0 001.44 1.44h63.36z\" fill=\"#6F647A\"/><path fill=\"#6F647A\" d=\"M8.641 17.281h2.88v37.44h-2.88zm8.638 0h2.88v31.68h-2.88zm8.641 0h2.88v31.68h-2.88zm8.64 0h2.88v31.68h-2.88zm8.639 0h2.88v31.68h-2.88zm8.641 0h2.88v31.68h-2.88zm8.64 0h2.88v37.44h-2.88zM17.279 51.84h2.88v2.88h-2.88zm8.641 0h2.88v2.88h-2.88zm8.64 0h2.88v2.88h-2.88zm8.639 0h2.88v2.88h-2.88zm8.641 0h2.88v2.88h-2.88z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "72",
      "height": "72",
      "name": "barcode",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\"><defs><image width=\"106\" height=\"101\" id=\"img1\" href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABlCAMAAACSqYZwAAAAAXNSR0IB2cksfwAAAR1QTFRFAAAAXCOfXyWfXyWfXyWfYCCfXiaeYCifXyWfXyWfXiefXyWfYCWfXyWfXiWfYCSfYCCfYCOfXySfYCSfXyafYCOfXiafYCWfXiOeYCWfXiWfXySfXSWfXSOdYCSfXiWeYSaeXCOckWi3yrHV6Nfi59ffcDun6Njiekes59ffeEar6Nfi6NbhaDCj6dfi6trfXySf18Da6Nfiu5zMm3O86dfj38/fxqrR6dfkXiSdgVGw6Nfi59Pf6dbi5tbh59Xh59TfaTKk4MzegVGvmnO8p4TDtZTJo37BtJTJkme4vZ/N18DZZzCj6Njh6tjizrXVeUar5dbfimC1w6jQrInF59bi17/Zm3O9XyWfXyWfXiWeXiOeXyWfYCOfYCWfOfYiugAAAF90Uk5TAFDf/48QXyDPn2/vML+gQCCQv3CvUH9gkKBvz2BggKBfUIDf/0D/r+8g/79w/+8wr//f7/9/EP9fgP+fQO+QgGDP////7//////////Pj///UGDv//////7en4/uj29PFANxAAAD2klEQVR4nL3aaUPTMBgH8NIQyujmoMN1ggzUWJwo4hSQ4S0eKN7X8Pr+H8Pm6pr1zNOlzwsnI91vSf9JLyyrjpqz0XwtEJ5HYS3UIDmLVEIN89KSi+qhcAOheqimjWqilhCqh3JaHHEvmKbaYvAWl9uGqXkxcCshapQSkwnZbcswtSAmk4ctsxQWg+d2+M/mKDmZ7KZlmJIr0QqW7xii8KoYvIuT98xQcjJ5y/E3TVBdMZk6qj97Sq5EbDIZpeYSeTBETU8mc5RciZQ8GKGiyZT2yxlSy35GHgoo7PdWbRdB6tJ0HvIovNYCIRl5yKZwF9YbVml5yKSqQCizSymUTCsbC9v2imqdNmTN2DfMkaYpedxEbs/PHopYXaaNN+j/WnqUXCe99LjOkBJSxryYJTXHpcQ6OXvK4fuprwFBKX7k9LUkGNUF9AlGOXw/aUogapNlTycRUIp3aktXglBsE1tbglDrsE4BKAfYKQB1RV11TVI9+nK1Foq1u1YLxRYlcr0Oiv4bkG19im3f1qVuEDLQt/quOEfSoW4SsqNPRVWWctkAEnLLPEVjcTukdu8Yp/boy93QGgJ2lx7FpvA9UsUqS7HpcZ8wCzC7dCiMxM6itX9gkuIND4U1fGCSOqKvIyJrePzQGIXdeLdoPdp5/OSpRj0rS/FuBc8JuF7QD8iLb0Txbp1UpPL28uSUk3ULvaxGEXKc2bHYiTS/iHtVkcqel8nLg9cVqXBeFlKWzyh0AsvGhMpY3JRLuT63gjcVKbKbdjBSL1CFhUYALE6lpmPqsrsjL7uD07fvqlBkmDjyJW4mTB7KoLNgpFFnKpVMR/IWSR9VKCW+7wcFlOVsVrBG8WFX147U21mOvw621Ph+OCigmNbz7KKPTa9TpWODQiqn42x8m8l2TV98t+BjajoAFFuXN1KbdkTHlHRsD8AUO+U5Sm8r58onZRA/Q6lm7ia9tHTsAyl2drWY2VzuMWXVpukAUOwE381uL+9eBvFBDBdgCMUmXd7NFLngKOk4/gKgstIe20QMorJ2fAVQOWmX5awm03EIoPLSHpUcxJNKVH7aZckpFqUDQhWkPWomjxDf4FRR2qOSx3S+AIOowrTLigbxEEoVpz2qaIp9h1El0h5VdGT5AaJKpV2WfKAa/IRQ5dIeVX+MotKlSqZ98tXOwRRLu849UefXuC4qnGJjGMUeNHhalOWcl6DYLeSW+AG31xp8DdjSoyz8e1y8FfvoLqbK5NQQcPvaP//zt6BJD6VUucVCt5zkM1VX48GdVvlTkN3XfkxTuiZ/Cmc3/rXNOaz8Pc+bifIfbWHffNEIg+YAAAAASUVORK5CYII=\"/></defs><style></style><use id=\"Background\" href=\"#img1\" x=\"0\" y=\"0\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "120",
      "height": "120",
      "name": "broadcast",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"#E8D7E2\" d=\"M38.4 9.6h-24V4.8h23.2a.8.8 0 01.8.8v4z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M2.4 3.2h35.2A2.402 2.402 0 0140 5.6v28.8a2.403 2.403 0 01-2.4 2.4H2.4A2.403 2.403 0 010 34.4V5.6a2.401 2.401 0 012.4-2.4zm0 1.6a.8.8 0 00-.8.8v4h11.2V4.8H2.4zm36 29.6a.8.8 0 01-.8.8H2.4a.8.8 0 01-.8-.8V11.2h36.8v23.2zm-24-24.8h24v-4a.8.8 0 00-.8-.8H14.4v4.8z\" clip-rule=\"evenodd\"/><path fill=\"#E8D7E2\" d=\"M3.2 6.4h1.6V8H3.2zm3.2 0H8V8H6.4zm3.2 0h1.6V8H9.6z\"/><path fill=\"#5F259F\" d=\"M15.2 24h4v4a.8.8 0 001.6 0v-4h4a.8.8 0 100-1.6h-4v-4a.8.8 0 10-1.6 0v4h-4a.8.8 0 000 1.6z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "browser-plus",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M38.4 9.6h-24V4.8h23.2a.8.8 0 01.8.8v4z\"/><path fill=\"#3A7C70\" d=\"M12.985 23.488a.802.802 0 00.103 1.128l4.8 4a.8.8 0 001.078-.05l8-8a.8.8 0 00-1.132-1.131l-7.483 7.484-4.24-3.534a.8.8 0 00-1.126.103z\"/><path fill=\"#3A7C70\" fill-rule=\"evenodd\" d=\"M2.4 3.2h35.2A2.403 2.403 0 0140 5.6v28.8a2.402 2.402 0 01-2.4 2.4H2.4A2.401 2.401 0 010 34.4V5.6a2.403 2.403 0 012.4-2.4zm0 1.6a.8.8 0 00-.8.8v4h11.2V4.8H2.4zm36 29.6a.8.8 0 01-.8.8H2.4a.8.8 0 01-.8-.8V11.2h36.8v23.2zm-24-24.8h24v-4a.8.8 0 00-.8-.8H14.4v4.8z\" clip-rule=\"evenodd\"/><path fill=\"#3A7C70\" d=\"M3.2 6.4h1.6V8H3.2zm3.2 0H8V8H6.4zm3.2 0h1.6V8H9.6z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "browser-tick",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 6H9V3h14.5a.5.5 0 01.5.5V6z\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.5 2h22c.828 0 1.5.672 1.5 1.5v18c0 .828-.672 1.5-1.5 1.5h-22C.672 23 0 22.328 0 21.5v-18C0 2.672.672 2 1.5 2zm0 1a.5.5 0 00-.5.5V6h7V3H1.5zM24 21.5a.5.5 0 01-.5.5h-22a.5.5 0 01-.5-.5V7h23v14.5zM9 6h15V3.5a.5.5 0 00-.5-.5H9v3z\" fill=\"#5F259F\"/><path fill=\"#5F259F\" d=\"M2 4h1v1H2zM4 4h1v1H4zM6 4h1v1H6z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "browser",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.5 13.02a89.19 89.19 0 012.5.385V6h-2.5v7.02zM11.5 1c-.42.013-.837.058-1.25.135 2.5.418 4.937 1.154 7.25 2.191V5H20V3.326A28.772 28.772 0 0011.5 1zm-1.25 12.537c2.43.17 4.85.465 7.25.884v1.732A.971.971 0 0017 16a1 1 0 100 2 .971.971 0 00.5-.153V19.5a.5.5 0 01-.5.5h2.5a.5.5 0 00.5-.5v-5.08a61.156 61.156 0 00-8.5-.92c-.393 0-.815.014-1.25.037z\" fill=\"#D8D6E5\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4 17a2 2 0 114 0 2 2 0 01-4 0zm1 0a1 1 0 102 0 1 1 0 00-2 0zm10 0a2 2 0 114 0 2 2 0 01-4 0zm1 0a1 1 0 102 0 1 1 0 00-2 0z\" fill=\"#6F647A\"/><path d=\"M10.5 4h2a.5.5 0 000-1h-2a.5.5 0 000 1zm2 12h-2a.5.5 0 000 1h2a.5.5 0 000-1zm0 2h-2a.5.5 0 000 1h2a.5.5 0 000-1z\" fill=\"#6F647A\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21 9.5h1.5a.5.5 0 01.5.5v3a.5.5 0 01-.276.447L21 14.31v5.19a1.496 1.496 0 01-1 1.408V22a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1H8v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1.092A1.496 1.496 0 012 19.5v-5.19l-1.724-.863A.501.501 0 010 13v-3a.5.5 0 01.5-.5H2V3c0-1 7.5-3 9.5-3S21 2 21 3v6.5zm-1 3.905V6H3v7.405a60.294 60.294 0 018.5-.905c2.851.1 5.692.403 8.5.905zM11.5 1A28.772 28.772 0 0120 3.326V5H3V3.326A28.771 28.771 0 0111.5 1zM1 10.5v2.191l1 .5V10.5H1zM7 22H4v-1h3v1zm9 0h3v-1h-3v1zm3.5-2h-16a.5.5 0 01-.5-.5v-5.08a61.155 61.155 0 018.5-.92c2.851.108 5.692.416 8.5.92v5.08a.5.5 0 01-.5.5zm1.5-6.809l1-.5V10.5h-1v2.691z\" fill=\"#6F647A\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "bus-front",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"40\" height=\"40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"1.6\" y=\"28\" width=\"3.2\" height=\"10.4\" rx=\".5\" fill=\"#FFE292\"/><path d=\"M28.8 11.2v26.4a.8.8 0 01-.8.8h-1.6a.801.801 0 01-.8-.8V11.2h-5.683l7.28-9.6h.001l7.284 9.6H28.8z\" fill=\"#FFE292\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.4 26.4H4a2.4 2.4 0 012.4 2.4v8.8A2.4 2.4 0 014 40H2.4A2.4 2.4 0 010 37.6v-8.8a2.4 2.4 0 012.4-2.4zm1.6 12a.8.8 0 00.8-.8v-8.8A.8.8 0 004 28H2.4c-.442 0-.8.358-.8.8v8.8c0 .442.358.8.8.8H4zM13.6 17.6h1.6a2.4 2.4 0 012.4 2.4v17.6a2.4 2.4 0 01-2.4 2.4h-1.6a2.4 2.4 0 01-2.4-2.4V20a2.4 2.4 0 012.4-2.4zm1.6 20.8a.8.8 0 00.8-.8V20a.8.8 0 00-.8-.8h-1.6c-.442 0-.8.358-.8.8v17.6c0 .442.358.8.8.8h1.6zM28.48.64l8.179 10.909a.8.8 0 01-.66 1.251H30.4v24.8A2.4 2.4 0 0128 40h-1.6a2.4 2.4 0 01-2.4-2.4V12.8h-5.598a.8.8 0 01-.66-1.251L25.92.64a1.6 1.6 0 012.56 0zm.32 36.96V11.2h5.682l-7.284-9.6h-.002l-7.278 9.6H25.6v26.4c0 .442.358.8.8.8H28a.8.8 0 00.8-.8z\" fill=\"#FAC600\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "business-performance-1",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"none\"><rect width=\"2\" height=\"6.5\" x=\"1\" y=\"17.5\" fill=\"#FFE292\" rx=\".5\"/><path fill=\"#FFE292\" d=\"M18 7v16.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V7h-3.552l4.55-6 4.553 6H18z\"/><path fill=\"#6F647A\" fill-rule=\"evenodd\" d=\"M1.5 16.5h1A1.5 1.5 0 014 18v5.5A1.5 1.5 0 012.5 25h-1A1.5 1.5 0 010 23.5V18a1.5 1.5 0 011.5-1.5zm1 7.5a.5.5 0 00.5-.5V18a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v5.5a.5.5 0 00.5.5h1zm6-13h1a1.5 1.5 0 011.5 1.5v11A1.5 1.5 0 019.5 25h-1A1.5 1.5 0 017 23.5v-11A1.5 1.5 0 018.5 11zm1 13a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h1zM17.8.4l5.111 6.818a.5.5 0 01-.412.782h-3.5v15.5a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5V8h-3.498a.499.499 0 01-.412-.782L16.198.4a1.002 1.002 0 011.6 0zm.2 23.1V7h3.55L17 1h-.002l-4.549 6H16v16.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "business-performance-2",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"26\" fill=\"none\"><rect width=\"2\" height=\"6.5\" x=\"1\" y=\"18.227\" fill=\"#D8D6E5\" rx=\".5\"/><path fill=\"#D8D6E5\" d=\"M18 7.728v16.5a.5.5 0 01-.5.5h-1a.502.502 0 01-.5-.5v-16.5h-3.55l4.549-6 4.553 6H18z\"/><path fill=\"#6F647A\" fill-rule=\"evenodd\" d=\"M1.5 17.227h1a1.5 1.5 0 011.5 1.5v5.5a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-5.5a1.5 1.5 0 011.5-1.5zm1 7.5a.5.5 0 00.5-.5v-5.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v5.5a.5.5 0 00.5.5h1zm6-13h1a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-11a1.5 1.5 0 011.5-1.5zm1 13a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h1zm8.3-23.599l5.113 6.818a.502.502 0 01-.413.782H19v15.5a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-15.5h-3.498a.499.499 0 01-.412-.782l5.11-6.818a1.002 1.002 0 011.6 0zm.2 23.1v-16.5h3.552l-4.552-6h-.002l-4.549 6h3.552v16.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "26",
      "name": "business-performance-3",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"26\" fill=\"none\"><rect width=\"2\" height=\"6.5\" x=\"1\" y=\"18.227\" fill=\"#D8D6E5\" rx=\".5\"/><path fill=\"#D8D6E5\" d=\"M18 7.728v16.5a.5.5 0 01-.5.5h-1a.502.502 0 01-.5-.5v-16.5h-3.55l4.549-6 4.553 6H18z\"/><path fill=\"#6F647A\" fill-rule=\"evenodd\" d=\"M1.5 17.227h1a1.5 1.5 0 011.5 1.5v5.5a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-5.5a1.5 1.5 0 011.5-1.5zm1 7.5a.5.5 0 00.5-.5v-5.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v5.5a.5.5 0 00.5.5h1zm6-13h1a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-11a1.5 1.5 0 011.5-1.5zm1 13a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h1zm8.3-23.599l5.113 6.818a.502.502 0 01-.413.782H19v15.5a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-15.5h-3.498a.499.499 0 01-.412-.782l5.11-6.818a1.002 1.002 0 011.6 0zm.2 23.1v-16.5h3.552l-4.552-6h-.002l-4.549 6h3.552v16.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "26",
      "name": "business-performance-4",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"none\"><rect width=\"2\" height=\"6.5\" x=\"1\" y=\"17.5\" fill=\"#9EFFED\" rx=\".5\"/><path fill=\"#9EFFED\" d=\"M18 7v16.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V7h-3.552l4.55-6 4.553 6H18z\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M1.5 16.5h1A1.5 1.5 0 014 18v5.5A1.5 1.5 0 012.5 25h-1A1.5 1.5 0 010 23.5V18a1.5 1.5 0 011.5-1.5zm1 7.5a.5.5 0 00.5-.5V18a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v5.5a.5.5 0 00.5.5h1zm6-13h1a1.5 1.5 0 011.5 1.5v11A1.5 1.5 0 019.5 25h-1A1.5 1.5 0 017 23.5v-11A1.5 1.5 0 018.5 11zm1 13a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h1zM17.8.4l5.111 6.818a.5.5 0 01-.412.782h-3.5v15.5a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5V8h-3.498a.499.499 0 01-.412-.782L16.198.4a1.002 1.002 0 011.6 0zm.2 23.1V7h3.55L17 1h-.002l-4.549 6H16v16.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "business-performance-5",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"40\" height=\"40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g opacity=\".75\"><rect x=\"1.6\" y=\"28\" width=\"3.2\" height=\"10.4\" rx=\".5\" fill=\"#FAC600\"/><path d=\"M28.8 11.2v26.4a.8.8 0 01-.8.8h-1.6a.801.801 0 01-.8-.8V11.2h-5.683l7.28-9.6h.001l7.284 9.6H28.8z\" fill=\"#FAC600\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.4 26.4H4a2.4 2.4 0 012.4 2.4v8.8A2.4 2.4 0 014 40H2.4A2.4 2.4 0 010 37.6v-8.8a2.4 2.4 0 012.4-2.4zm1.6 12a.8.8 0 00.8-.8v-8.8A.8.8 0 004 28H2.4c-.442 0-.8.358-.8.8v8.8c0 .442.358.8.8.8H4zM13.6 17.6h1.6a2.4 2.4 0 012.4 2.4v17.6a2.4 2.4 0 01-2.4 2.4h-1.6a2.4 2.4 0 01-2.4-2.4V20a2.4 2.4 0 012.4-2.4zm1.6 20.8a.8.8 0 00.8-.8V20a.8.8 0 00-.8-.8h-1.6c-.442 0-.8.358-.8.8v17.6c0 .441.358.8.8.8h1.6zM28.48.64l8.179 10.909a.8.8 0 01-.66 1.251H30.4v24.8A2.4 2.4 0 0128 40h-1.6a2.4 2.4 0 01-2.4-2.4V12.8h-5.598a.8.8 0 01-.66-1.251L25.92.64a1.6 1.6 0 012.56 0zm.32 36.96V11.2h5.682l-7.284-9.6h-.002l-7.278 9.6H25.6v26.4c0 .442.358.8.8.8H28a.8.8 0 00.8-.8z\" fill=\"#5F259F\"/></g></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "business-performance-yellow",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"56\" height=\"56\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M35.84 10.08v35.84a1.12 1.12 0 01-1.12 1.12H4.48v3.36c.001.618.502 1.12 1.12 1.12h33.6a1.12 1.12 0 001.12-1.12V10.08h-4.48z\"/><path fill=\"#5F259F\" d=\"M8.961 13.44h4.48v2.24h-4.48z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M10.08 24.64h24.64c.62 0 1.12.502 1.12 1.12v6.72c0 .62-.5 1.12-1.12 1.12H10.08c-.618 0-1.12-.5-1.12-1.12v-6.72c0-.618.502-1.12 1.12-1.12zm1.12 6.72h22.4v-4.48H11.2v4.48zm-1.12 6.72h24.64c.62 0 1.12.502 1.12 1.12v6.72c0 .619-.5 1.12-1.12 1.12H10.08a1.12 1.12 0 01-1.12-1.12V39.2c0-.619.502-1.12 1.12-1.12zm1.12 6.72h22.4v-4.48H11.2v4.48z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M51.94 36.085l-9.38 7.505V33.02l10.78-8.625a1.12 1.12 0 10-1.4-1.75l-9.38 7.505V12.32a3.36 3.36 0 00-3.36-3.36H11.683l17.835-6.794a1.118 1.118 0 10-.796-2.091L5.324 8.988A3.35 3.35 0 002.24 12.32V50.4a3.36 3.36 0 003.36 3.36h33.6a3.36 3.36 0 003.36-3.36v-3.94l10.78-8.625a1.12 1.12 0 10-1.4-1.749zM5.6 11.2h33.6c.618.001 1.12.502 1.12 1.12v5.6H4.48v-5.6A1.122 1.122 0 015.6 11.2zm0 40.32h33.6a1.12 1.12 0 001.12-1.12V20.16H4.48V50.4a1.12 1.12 0 001.12 1.12z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "business-photocopy-machine",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30.72 28.16a1.28 1.28 0 01-1.28 1.28h-2.56V7.68h1.92a3.173 3.173 0 001.92-.654v21.135z\" fill=\"#9EFFED\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M28.8 1.28H1.92C.86 1.28 0 2.14 0 3.2v23.04c0 1.06.86 1.92 1.92 1.92H25.6v1.92c0 .354.287.64.64.64h3.2A2.56 2.56 0 0032 28.16V4.48a3.2 3.2 0 00-3.2-3.2zm1.92 26.88a1.28 1.28 0 01-1.28 1.28h-2.56V7.68h1.92a3.172 3.172 0 001.92-.654V28.16zM26.24 6.4h2.56a1.92 1.92 0 100-3.84H1.92a.64.64 0 00-.64.64v23.04c0 .354.287.64.64.64H25.6V7.04a.64.64 0 01.64-.64z\" fill=\"#00D1AB\"/><path d=\"M20.292 6.588a.64.64 0 00-.905 0l-2.56 2.56a.64.64 0 00.905.905L19.2 8.585v6.135a5.766 5.766 0 01-5.76 5.76h-1.28a.64.64 0 000 1.28h1.28a7.048 7.048 0 007.04-7.04V8.585l1.467 1.468a.64.64 0 00.905-.905l-2.56-2.56z\" fill=\"#00D1AB\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.84 21.12a3.2 3.2 0 116.4 0 3.2 3.2 0 01-6.4 0zm1.28 0a1.92 1.92 0 103.84 0 1.92 1.92 0 00-3.84 0z\" fill=\"#00D1AB\"/><path d=\"M7.867 12.613c.25.25.655.25.905 0l1.468-1.467 1.467 1.467a.64.64 0 10.905-.905l-1.467-1.467 1.467-1.468a.64.64 0 00-.905-.905L10.24 9.336 8.772 7.868a.64.64 0 00-.905.905l1.468 1.468-1.468 1.467a.64.64 0 000 .905z\" fill=\"#00D1AB\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "32",
      "height": "32",
      "name": "business-strategy",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.848 18.35l-1.132-1.132-1.59 1.59a4.062 4.062 0 01-5.176.477 62.102 62.102 0 01-7.453-5.781 58.215 58.215 0 01-5.395-6.896 4.03 4.03 0 00.613 1.442 62.141 62.141 0 005.782 7.454 62.112 62.112 0 007.453 5.781 4.062 4.062 0 005.177-.478l1.72-1.72a.521.521 0 000-.736z\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.538 14.777a1.52 1.52 0 012.15 0l2.867 2.866a1.52 1.52 0 010 2.15l-1.721 1.721a5.062 5.062 0 01-6.451.595 62.667 62.667 0 01-7.593-5.898 62.667 62.667 0 01-5.9-7.594 5.063 5.063 0 01.596-6.451l1.72-1.72a1.52 1.52 0 012.15 0L8.223 3.31a1.52 1.52 0 010 2.15L6.988 6.696a1.013 1.013 0 00-.147 1.247 27.344 27.344 0 003.531 4.684c1.43 1.342 3 2.526 4.684 3.532.4.245.916.185 1.248-.147l1.234-1.235zm2.589 6.03l1.72-1.72a.521.521 0 000-.736l-2.866-2.867a.52.52 0 00-.736 0l-1.234 1.235a2.013 2.013 0 01-2.477.293 28.26 28.26 0 01-4.869-3.678 28.25 28.25 0 01-3.677-4.868 2.008 2.008 0 01.293-2.477l1.235-1.235a.52.52 0 000-.735L4.649 1.152a.52.52 0 00-.735 0L2.193 2.873a4.065 4.065 0 00-.478 5.177 62.14 62.14 0 005.782 7.454 62.102 62.102 0 007.453 5.781 4.062 4.062 0 005.177-.478z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "call",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M9.6 9.6h19.2v3.2H9.6zm1.599 9.6h4.8v11.2h-4.8zm11.201 0h4.8v8h-4.8z\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M4 3.2h30.4a2.4 2.4 0 012.4 2.4v28.8a2.4 2.4 0 01-2.4 2.4H4a2.4 2.4 0 01-2.4-2.4V5.6A2.4 2.4 0 014 3.2zm30.4 32a.8.8 0 00.8-.8V5.6a.8.8 0 00-.8-.8H4a.8.8 0 00-.8.8v28.8a.8.8 0 00.8.8h30.4z\" clip-rule=\"evenodd\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M30.4 14.4H8V8h22.4v6.4zm-1.6-4.8H9.6v3.2h19.2V9.6zM17.6 32h-8V17.6h8V32zM16 19.2h-4.8v11.2H16V19.2zm12.799 9.6h-8V17.6h8v11.2zm-1.6-9.6h-4.8v8h4.8v-8z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "card-stack-view-white",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"52\" height=\"45\" fill=\"none\"><path fill=\"#FFE292\" d=\"M21.6 14.601h19.2v3.2H21.6zm1.599 9.599h4.8v11.2h-4.8zm11.201 0h4.8v8h-4.8z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M16 8.2h30.4a2.4 2.4 0 012.4 2.4v28.8a2.4 2.4 0 01-2.4 2.4H16a2.4 2.4 0 01-2.4-2.4V10.6A2.4 2.4 0 0116 8.2zm30.4 32a.8.8 0 00.8-.8V10.6a.8.8 0 00-.8-.8H16a.8.8 0 00-.8.8v28.8a.8.8 0 00.8.8h30.4z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M42.4 19.4H20V13h22.4v6.4zm-1.6-4.8H21.6v3.2h19.2v-3.2zM29.6 37h-8V22.6h8V37zM28 24.2h-4.8v11.2H28V24.2zm12.799 9.6h-8V22.6h8v11.2zm-1.6-9.6h-4.8v8h4.8v-8z\" clip-rule=\"evenodd\"/><circle cx=\"13\" cy=\"13\" r=\"13\" fill=\"#FFE292\"/><path fill=\"#5F259F\" d=\"M9.66 9.695c.66-.261 1.32-.597 1.98-1.007a8.141 8.141 0 001.774-1.45h1.45v11.825H12.8v-9.06a6.728 6.728 0 01-1.16.699c-.466.227-.916.415-1.348.563l-.631-1.57z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "52",
      "height": "45",
      "name": "card-stack-view-yellow-numeric",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"#FFE292\" d=\"M9.6 9.601h19.2v3.2H9.6zm1.599 9.599h4.8v11.2h-4.8zm11.201 0h4.8v8h-4.8z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M4 3.2h30.4a2.4 2.4 0 012.4 2.4v28.8a2.4 2.4 0 01-2.4 2.4H4a2.4 2.4 0 01-2.4-2.4V5.6A2.4 2.4 0 014 3.2zm30.4 32a.8.8 0 00.8-.8V5.6a.8.8 0 00-.8-.8H4a.8.8 0 00-.8.8v28.8a.8.8 0 00.8.8h30.4z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M30.4 14.4H8V8h22.4v6.4zm-1.6-4.8H9.6v3.2h19.2V9.6zM17.6 32h-8V17.6h8V32zM16 19.2h-4.8v11.2H16V19.2zm12.799 9.6h-8V17.6h8v11.2zm-1.6-9.6h-4.8v8h4.8v-8z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "card-stack-view-yellow",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M9.6 9.6h19.2v3.2H9.6zm1.599 9.6h4.8v11.2h-4.8zm11.2 0h4.8v8h-4.8z\"/><path fill=\"#3A7C70\" fill-rule=\"evenodd\" d=\"M4 3.2h30.4a2.4 2.4 0 012.4 2.4v28.8a2.4 2.4 0 01-2.4 2.4H4a2.4 2.4 0 01-2.4-2.4V5.6A2.4 2.4 0 014 3.2zm30.4 32a.8.8 0 00.8-.8V5.6a.8.8 0 00-.8-.8H4a.8.8 0 00-.8.8v28.8a.8.8 0 00.8.8h30.4z\" clip-rule=\"evenodd\"/><path fill=\"#3A7C70\" fill-rule=\"evenodd\" d=\"M30.4 14.4H8V8h22.4v6.4zm-1.6-4.8H9.6v3.2h19.2V9.6zM17.6 32h-8V17.6h8V32zM16 19.2h-4.8v11.2H16V19.2zm12.8 9.6h-8V17.6h8v11.2zm-1.6-9.6h-4.8v8h4.8v-8z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "card-stack-view",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"41\" height=\"40\" fill=\"none\"><path stroke=\"#D2B6F1\" stroke-width=\"2\" d=\"M38.5 22v16H22M17 1v16H0\"/><path stroke=\"#5F259F\" stroke-width=\"1.6\" d=\"M.8.8h17.741v17.521H.8zm21.1 0h17.741v17.521H21.9zM.8 21.679h17.741V39.2H.8zm21.1 0h17.741V39.2H21.9z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "41",
      "height": "40",
      "name": "certified-microsoft",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"41\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M37.6 32.731a.8.8 0 00.8-.8v-25.6a.8.8 0 00-.8-.8H32v20.797a6.4 6.4 0 01-6.4 6.4h-4.8v.003h1.862a2.414 2.414 0 011.453.49l7.881 5.906.005-5.277c0-.618.501-1.12 1.12-1.12l4.48.001z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M2.4 3.932h35.2a2.402 2.402 0 012.4 2.4v25.6a2.403 2.403 0 01-2.4 2.4h-4v4.798a1.6 1.6 0 01-2.569 1.273l-7.88-5.905a.814.814 0 00-.49-.166H2.4a2.403 2.403 0 01-2.4-2.4v-25.6a2.402 2.402 0 012.4-2.4zm35.2 28.8a.801.801 0 00.8-.8v-25.6a.8.8 0 00-.8-.8H2.4a.8.8 0 00-.8.8v25.6c0 .44.358.799.8.8h20.261c.525 0 1.035.172 1.453.49l7.881 5.905.005-5.275a1.121 1.121 0 011.12-1.12h4.48z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M20 15.153a3.982 3.982 0 013.2-1.621c2.21 0 4 1.79 4 4 0 2.818-6.406 8.8-7.188 8.8h-.023c-.782 0-7.188-5.982-7.188-8.8a3.99 3.99 0 017.2-2.379zm-5.6 2.379c0 1.435 3.836 5.652 5.6 6.978 1.765-1.326 5.6-5.543 5.6-6.978a2.4 2.4 0 00-2.4-2.4c-1.304 0-1.987.978-2.74 2.058-.149.213-.3.43-.46.643-.158-.214-.31-.43-.458-.643-.754-1.08-1.437-2.058-2.741-2.058a2.402 2.402 0 00-2.4 2.4z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "41",
      "name": "chat-love-2",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"40\" height=\"41\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g opacity=\".75\"><path d=\"M37.6 32.003a.8.8 0 00.8-.8v-25.6a.8.8 0 00-.8-.8H32V25.6a6.4 6.4 0 01-6.4 6.4h-4.8v.003h1.861a2.417 2.417 0 011.453.49l7.881 5.906.005-5.277c0-.618.502-1.12 1.12-1.12l4.48.001z\" fill=\"#FAC600\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.4 3.203h35.2a2.403 2.403 0 012.4 2.4v25.6a2.403 2.403 0 01-2.4 2.4h-4v4.799a1.6 1.6 0 01-2.569 1.273l-7.88-5.905a.813.813 0 00-.49-.167H2.4a2.403 2.403 0 01-2.4-2.4v-25.6a2.403 2.403 0 012.4-2.4zm35.2 28.8c.442 0 .8-.358.8-.8v-25.6c0-.442-.358-.8-.8-.8H2.4c-.442 0-.8.358-.8.8v25.6c0 .442.358.8.8.8h20.261a2.417 2.417 0 011.453.49l7.881 5.905.005-5.275a1.122 1.122 0 011.12-1.12h4.48z\" fill=\"#5F259F\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20 14.425a3.981 3.981 0 013.2-1.622 4 4 0 014 4c0 2.818-6.406 8.8-7.188 8.8h-.024c-.782 0-7.188-5.982-7.188-8.8a3.989 3.989 0 017.2-2.378zm-5.6 2.378c0 1.435 3.836 5.652 5.6 6.978 1.764-1.326 5.6-5.543 5.6-6.978a2.403 2.403 0 00-2.4-2.4c-1.305 0-1.987.978-2.741 2.059-.149.212-.3.429-.459.642-.159-.213-.31-.43-.458-.642-.755-1.08-1.437-2.06-2.742-2.06a2.403 2.403 0 00-2.4 2.4z\" fill=\"#5F259F\"/></g></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "41",
      "name": "chat-love-yellow",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M23.5 20.002a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5H20V16a4 4 0 01-4 4h-3v.002h1.163c.328 0 .647.108.908.306L19.997 24 20 20.702a.7.7 0 01.7-.7h2.8z\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.5 2.002h22c.828 0 1.5.672 1.5 1.5v16c0 .828-.672 1.5-1.5 1.5H21v2.999a1 1 0 01-1.605.796l-4.926-3.691a.508.508 0 00-.306-.104H1.5c-.828 0-1.5-.672-1.5-1.5v-16c0-.828.672-1.5 1.5-1.5zm22 18a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5h-22a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h12.663c.328 0 .647.108.908.306l4.926 3.69.003-3.296c0-.386.314-.7.7-.7h2.8z\" fill=\"#5F259F\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.5 9.015a2.488 2.488 0 012-1.013 2.5 2.5 0 012.5 2.5c0 1.761-4.004 5.5-4.493 5.5h-.014c-.49 0-4.493-3.739-4.493-5.5a2.493 2.493 0 014.5-1.487zM9 10.502c0 .897 2.397 3.532 3.5 4.361 1.103-.829 3.5-3.464 3.5-4.361 0-.828-.672-1.5-1.5-1.5-.815 0-1.242.611-1.713 1.287-.093.132-.188.268-.287.401-.1-.133-.194-.269-.287-.401-.47-.676-.898-1.287-1.713-1.287-.828 0-1.5.672-1.5 1.5z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "chat-love",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M14.4 2.88V14.4H1.92v2.88h15.36V2.88H14.4z\"/><path fill=\"#D2B6F1\" d=\"M19.2 6.72V19.2H5.76v2.88h16.32V6.72H19.2z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M22.08 5.76h-3.84V2.88a.96.96 0 00-.96-.96H1.92a.96.96 0 00-.96.96v14.4c0 .53.43.96.96.96H4.8v3.84c0 .53.43.96.96.96h16.32c.53 0 .96-.43.96-.96V6.72a.96.96 0 00-.96-.96zM1.92 2.88h15.36v14.4H1.92V2.88zm3.84 19.2h16.32V6.72h-3.84v10.56c0 .53-.43.96-.96.96H5.76v3.84z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "24",
      "height": "24",
      "name": "clipboard-2",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\"><path fill=\"#FFE292\" d=\"M14.402 2.88V14.4H1.922v2.88h15.36V2.88h-2.88z\"/><path fill=\"#FFE292\" d=\"M19.202 6.72V19.2H5.762v2.88h16.32V6.72h-2.88z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M22.08 5.76h-3.84V2.88a.96.96 0 00-.96-.96H1.92a.96.96 0 00-.96.96v14.4c0 .53.43.96.96.96H4.8v3.84c0 .53.43.96.96.96h16.32a.96.96 0 00.96-.96V6.72a.96.96 0 00-.96-.96zM1.92 2.88h15.36v14.4H1.92V2.88zm3.84 19.2h16.32V6.72h-3.84v10.56a.96.96 0 01-.96.96H5.76v3.84z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "24",
      "height": "24",
      "name": "clipboard",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 8l-.024.002a4.985 4.985 0 01-2.951 8.995l.003.003H8.996L9 16.998a4.985 4.985 0 01-2.951-8.996L6.024 8A5 5 0 005 17.893V19h13v-1.115c.328.073.663.111 1 .115a5 5 0 000-10z\" fill=\"#D2B6F1\"/><path d=\"M16.854 15.146l-4-4a.5.5 0 00-.707 0l-4 4a.5.5 0 00.706.707L12 12.707V24.5a.5.5 0 101 0V12.707l3.146 3.146a.5.5 0 00.707-.707z\" fill=\"#5F259F\"/><path d=\"M19.928 7.08A7.34 7.34 0 0012.5 1a7.34 7.34 0 00-7.428 6.08A5.996 5.996 0 006 19h1.5a.5.5 0 100-1H6a4.996 4.996 0 01-.774-9.933l.733-.114.103-.734A6.357 6.357 0 0112.5 2a6.357 6.357 0 016.438 5.219l.103.734.733.114A4.996 4.996 0 0119 18h-1.5a.5.5 0 100 1H19a5.996 5.996 0 00.928-11.92z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "cloud-upload",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.945 10.925a1.485 1.485 0 01-1.013-1.003 8.791 8.791 0 00-.646-1.567 1.484 1.484 0 01.01-1.421l1.03-1.86-1.4-1.401-.94.522c.001.102.014.202.014.305.136 7.87-6.131 14.36-14 14.5-.267 0-.528-.026-.791-.041l-.536.966 1.402 1.402 1.859-1.031a1.478 1.478 0 011.422-.01c.5.266 1.025.482 1.566.646.485.145.863.527 1.002 1.013l.59 2.055h1.972l.59-2.055c.139-.486.516-.868 1-1.013a8.72 8.72 0 001.568-.646 1.484 1.484 0 011.422.01l1.86 1.031 1.401-1.402-1.031-1.86a1.484 1.484 0 01-.01-1.422c.266-.5.482-1.025.646-1.567a1.485 1.485 0 011.013-1.001L24 13.486v-1.972l-2.055-.59z\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22.22 9.963l2.056.59a1 1 0 01.724.96v1.973a1 1 0 01-.724.962l-2.055.588a.49.49 0 00-.332.332 9.754 9.754 0 01-.72 1.745.487.487 0 00.001.467l1.031 1.86a1 1 0 01-.167 1.192l-1.402 1.402a1 1 0 01-1.192.168l-1.86-1.032a.477.477 0 00-.232-.06.502.502 0 00-.235.06 9.754 9.754 0 01-1.745.72.488.488 0 00-.332.33l-.588 2.055a1 1 0 01-.962.725h-1.972a1 1 0 01-.962-.724l-.589-2.055a.49.49 0 00-.331-.332 9.731 9.731 0 01-1.745-.72.482.482 0 00-.467 0l-1.86 1.032a1 1 0 01-1.193-.167l-1.401-1.402a1 1 0 01-.168-1.192l1.032-1.859a.486.486 0 00.001-.467 9.774 9.774 0 01-.72-1.746.488.488 0 00-.332-.331l-2.054-.59a1 1 0 01-.725-.96v-1.973a1 1 0 01.724-.962l2.055-.589a.489.489 0 00.332-.331 9.725 9.725 0 01.72-1.745.487.487 0 00-.001-.468L2.798 5.56a1 1 0 01.168-1.193l1.402-1.402a.999.999 0 011.192-.167L7.42 3.83a.482.482 0 00.467.001 9.734 9.734 0 011.745-.72.49.49 0 00.331-.332l.59-2.054a1 1 0 01.96-.725h1.973a1 1 0 01.962.725l.589 2.054a.49.49 0 00.33.332 9.72 9.72 0 011.746.72.482.482 0 00.467 0l1.86-1.033a.999.999 0 011.193.167l1.402 1.403a1 1 0 01.167 1.192L21.17 7.419a.487.487 0 00-.002.467 9.76 9.76 0 01.72 1.746c.047.16.172.285.332.331zm-.275 4.112L24 13.486v-1.972l-2.055-.59a1.485 1.485 0 01-1.013-1.002 8.79 8.79 0 00-.646-1.568 1.484 1.484 0 01.01-1.42l1.032-1.86-1.402-1.401-1.86 1.032a1.482 1.482 0 01-1.423.008 8.763 8.763 0 00-1.567-.646 1.485 1.485 0 01-1-1.012L13.485 1h-1.973l-.588 2.055c-.14.486-.518.868-1.003 1.013a8.761 8.761 0 00-1.566.646 1.484 1.484 0 01-1.422-.01l-1.86-1.031-1.401 1.401 1.032 1.86c.245.442.248.979.008 1.423a8.756 8.756 0 00-.645 1.566 1.485 1.485 0 01-1.014 1.002L1 11.514v1.972l2.055.59c.487.14.869.517 1.013 1.002.165.543.38 1.067.646 1.568.238.444.234.979-.01 1.42l-1.031 1.86 1.402 1.401 1.86-1.031a1.477 1.477 0 011.421-.01c.5.266 1.025.482 1.566.646.485.145.863.526 1.003 1.013L11.514 24h1.972l.59-2.054c.139-.487.516-.869 1-1.014a8.72 8.72 0 001.567-.646 1.484 1.484 0 011.422.01l1.86 1.031 1.402-1.402-1.031-1.859a1.484 1.484 0 01-.01-1.422c.266-.5.482-1.025.646-1.567a1.485 1.485 0 011.013-1.002z\" fill=\"#5F259F\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 12.5A5.5 5.5 0 0112.5 7a5.506 5.506 0 015.5 5.5 5.5 5.5 0 11-11 0zm1 0a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "cog",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M49.28 7.84v33.6a1.12 1.12 0 01-1.12 1.12H2.24v3.364c0 .619.502 1.12 1.12 1.12h49.28a1.12 1.12 0 001.12-1.12V8.96l-4.48-1.12z\" fill=\"#B482E1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M52.64 6.725H3.36A3.36 3.36 0 000 10.085v35.84a3.36 3.36 0 003.36 3.36h49.28a3.36 3.36 0 003.36-3.36v-35.84a3.36 3.36 0 00-3.36-3.36zm-50.4 3.36c0-.619.502-1.12 1.12-1.12h49.28c.618 0 1.12.501 1.12 1.12v4.323l-24.618 14.59a2.241 2.241 0 01-2.283 0L2.24 14.407v-4.323zm50.4 36.96a1.12 1.12 0 001.12-1.12V17.012L30.283 30.924a4.48 4.48 0 01-4.568 0L2.24 17.012v28.913c0 .618.501 1.12 1.12 1.12h49.28z\" fill=\"#782DC8\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "communication-email",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"57\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M52.64 45.27a1.12 1.12 0 001.12-1.12V8.31a1.12 1.12 0 00-1.12-1.12H44.8v29.115a8.96 8.96 0 01-8.96 8.96h-6.72v.005h2.604a3.383 3.383 0 012.035.685l11.034 8.268.006-7.387c0-.866.702-1.568 1.568-1.568l6.272.002z\" fill=\"#B482E1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.36 4.95h49.28A3.364 3.364 0 0156 8.31v35.84a3.364 3.364 0 01-3.36 3.36h-5.6v6.717a2.24 2.24 0 01-3.596 1.783L32.41 47.742a1.137 1.137 0 00-.685-.233H3.36A3.364 3.364 0 010 44.15V8.31a3.364 3.364 0 013.36-3.36zm49.28 40.32a1.123 1.123 0 001.12-1.12V8.308a1.12 1.12 0 00-1.12-1.12H3.36a1.12 1.12 0 00-1.12 1.12v35.84c0 .618.502 1.119 1.12 1.12h28.365a3.382 3.382 0 012.035.686l11.034 8.267.006-7.385a1.57 1.57 0 011.568-1.568h6.272z\" fill=\"#782DC8\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M31.504 22.191l5.687.857a1.145 1.145 0 01.56 1.925L33.67 29.1l.974 5.892a1.096 1.096 0 01-1.014 1.318.96.96 0 01-.463-.122L28 33.372l-5.165 2.817a.967.967 0 01-.463.121 1.096 1.096 0 01-1.014-1.318l.975-5.891-4.083-4.126a1.145 1.145 0 01.56-1.927l5.687-.857 2.587-5.436a.995.995 0 011.831 0l2.588 5.436zm-.232 6.148l.804-.813 2.568-2.596-3.474-.524-1.177-.177-.512-1.076-1.48-3.11-1.48 3.11-.512 1.076-1.177.177-3.475.524 2.569 2.596.804.813-.187 1.127-.589 3.562 2.975-1.622L28 30.822l1.072.584 2.975 1.622-.59-3.562-.186-1.127z\" fill=\"#782DC8\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "57",
      "name": "communication-chat-favorite",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40.32 21.276v20.16a1.12 1.12 0 01-1.12 1.12H2.24v1.125c0 .618.502 1.12 1.12 1.12h38.08a1.12 1.12 0 001.12-1.12V21.93l-2.24-.655z\" fill=\"#B482E1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M45.92.005c-5.567 0-10.08 4.513-10.08 10.08s4.513 10.08 10.08 10.08S56 15.652 56 10.085 51.487.005 45.92.005zm0 17.92a7.85 7.85 0 01-7.84-7.84 7.77 7.77 0 011.582-4.674l10.932 10.932a7.765 7.765 0 01-4.674 1.582zM41.246 3.827l10.931 10.931a7.769 7.769 0 001.583-4.673 7.85 7.85 0 00-7.84-7.84 7.765 7.765 0 00-4.674 1.582z\" fill=\"#782DC8\"/><path d=\"M42.56 43.685a1.12 1.12 0 01-1.12 1.12H3.36a1.12 1.12 0 01-1.12-1.12V21.6l17.743 11.37a4.482 4.482 0 004.834 0L42.2 21.83a12.254 12.254 0 01-2.448-1.092L23.61 31.083a2.24 2.24 0 01-2.418 0L2.24 18.94v-2.135c0-.618.501-1.12 1.12-1.12h31.596a12.13 12.13 0 01-.88-2.24H3.36A3.36 3.36 0 000 16.805v26.88a3.36 3.36 0 003.36 3.36h38.08a3.36 3.36 0 003.36-3.36V22.35c-.758-.07-1.508-.21-2.24-.419v21.755z\" fill=\"#782DC8\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "communication-email-block-2",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"43\" height=\"41\" fill=\"none\"><path stroke=\"#D2B6F1\" stroke-linecap=\"round\" stroke-width=\"2\" d=\"M1 32.5h29.5v-14\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M25.6 8.2A7.2 7.2 0 0132.8 1 7.209 7.209 0 0140 8.2v1.728a2.302 2.302 0 01-4.601.079 3.172 3.172 0 11.569-1.806v1.727a1.728 1.728 0 103.456 0V8.2a6.624 6.624 0 10-6.624 6.624.288.288 0 010 .576 7.2 7.2 0 01-7.2-7.2zm4.608 0a2.591 2.591 0 105.183.001 2.591 2.591 0 00-5.183-.001z\" clip-rule=\"evenodd\"/><path fill=\"#fff\" d=\"M32.8 1V.75 1zM40 8.2h.25H40zm0 1.728h-.25.25zm-2.261 2.305l-.005-.25.005.25zm-2.34-2.226l.25-.008-.024-.754-.43.62.205.142zm-4 1.037l.11-.225-.11.225zm-1.63-3.799l.24.075-.24-.075zm3.51-2.184l-.038.247.038-.247zm2.689 3.14l-.25-.001h.25zm-3.168 2.59v.25-.25zM35.392 8.2h.25-.25zM32.8.75a7.45 7.45 0 00-7.45 7.45h.5a6.95 6.95 0 016.95-6.95v-.5zm7.45 7.45A7.459 7.459 0 0032.8.75v.5a6.959 6.959 0 016.95 6.95h.5zm0 1.728V8.2h-.5v1.728h.5zm-2.507 2.555a2.551 2.551 0 002.507-2.555h-.5a2.05 2.05 0 01-2.016 2.055l.009.5zm-2.593-2.468a2.55 2.55 0 002.593 2.468l-.009-.5a2.05 2.05 0 01-2.084-1.984l-.5.016zm-3.862 1.253a3.421 3.421 0 004.317-1.118l-.41-.285a2.923 2.923 0 01-3.686.954l-.22.45zM29.531 7.17a3.422 3.422 0 001.757 4.098l.22-.449a2.923 2.923 0 01-1.5-3.499l-.477-.15zm3.786-2.356a3.424 3.424 0 00-3.786 2.356l.477.15a2.922 2.922 0 013.233-2.012l.076-.494zm2.9 3.386a3.421 3.421 0 00-2.9-3.386l-.076.494A2.923 2.923 0 0135.718 8.2h.5zm0 1.728V8.2h-.5v1.728h.5zm1.479 1.478a1.478 1.478 0 01-1.478-1.478h-.5c0 1.092.885 1.978 1.978 1.978v-.5zm1.478-1.478c0 .816-.662 1.478-1.478 1.478v.5a1.979 1.979 0 001.978-1.978h-.5zm0-1.728v1.728h.5V8.2h-.5zM32.8 1.826A6.374 6.374 0 0139.174 8.2h.5A6.875 6.875 0 0032.8 1.326v.5zM26.426 8.2A6.374 6.374 0 0132.8 1.826v-.5A6.874 6.874 0 0025.926 8.2h.5zm6.374 6.374A6.374 6.374 0 0126.426 8.2h-.5a6.874 6.874 0 006.874 6.874v-.5zm.538.538a.538.538 0 00-.538-.538v.5c.02 0 .038.017.038.038h.5zm-.538.538c.297 0 .538-.24.538-.538h-.5a.038.038 0 01-.038.038v.5zM25.35 8.2a7.45 7.45 0 007.45 7.45v-.5a6.95 6.95 0 01-6.95-6.95h-.5zm7.45 2.342A2.342 2.342 0 0130.458 8.2h-.5a2.841 2.841 0 002.842 2.842v-.5zM35.142 8.2a2.346 2.346 0 01-2.343 2.342v.5A2.846 2.846 0 0035.642 8.2h-.5zM32.8 5.858A2.343 2.343 0 0135.142 8.2h.5A2.842 2.842 0 0032.8 5.358v.5zM30.458 8.2A2.342 2.342 0 0132.8 5.858v-.5A2.841 2.841 0 0029.958 8.2h.5z\"/><path fill=\"#fff\" d=\"M30.4 32.203a.8.8 0 01-.8.8H2.4a.8.8 0 01-.8-.8V16.428l12.673 8.12a3.199 3.199 0 003.454 0l12.416-7.955a8.75 8.75 0 01-1.749-.78L16.864 23.2c-.526.338-1.2.338-1.727 0L1.6 14.528v-1.525a.8.8 0 01.8-.8h22.569a8.737 8.737 0 01-.63-1.6H2.4a2.4 2.4 0 00-2.4 2.4v19.2a2.4 2.4 0 002.4 2.4h27.2a2.4 2.4 0 002.4-2.4v-15.24a8.713 8.713 0 01-1.6-.3v15.54z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "43",
      "height": "41",
      "name": "communication-email-block",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M18 8.5v12a.5.5 0 01-.5.5H1v.502a.5.5 0 00.5.5h17a.5.5 0 00.5-.5V9l-1-.5z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M18.5 8.002h-17a1.497 1.497 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5v-12a1.497 1.497 0 00-1.5-1.5zm0 1a.5.5 0 01.5.5v.953l-8.46 5.421c-.33.21-.75.21-1.08 0L1 10.456v-.954a.5.5 0 01.5-.5h17zm0 13a.5.5 0 00.5-.5v-9.86l-7.921 5.076c-.658.421-1.5.421-2.158 0L1 11.643v9.859a.5.5 0 00.5.5h17z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" d=\"M24.853 4.148a.5.5 0 00-.707 0L22 6.295V1.502a.5.5 0 00-1 0v4.793l-2.147-2.147a.5.5 0 00-.707.707l3 3a.499.499 0 00.707 0l3-3a.5.5 0 000-.707z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "communication-email-download",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"41\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M35.2 12.59V20a.8.8 0 01-.8.8H20.8v.803c.001.442.36.8.8.8h16a.8.8 0 00.8-.8v-11.05l-3.2 2.036z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M28.8 8.004h8.8a2.4 2.4 0 012.4 2.4v11.2a2.4 2.4 0 01-2.4 2.4h-8.8v13.6a2.4 2.4 0 01-2.4 2.4H7.2a2.4 2.4 0 01-2.4-2.4v-35.2a2.4 2.4 0 012.4-2.4h19.2a2.4 2.4 0 012.4 2.4v5.6zm.8 6.251l7.31-4.651H22.291l7.31 4.651zm-2.4 23.349a.8.8 0 01-.8.8H7.2a.802.802 0 01-.8-.8v-35.2c.001-.442.36-.8.8-.8h19.2a.8.8 0 01.8.8v5.6h-5.6a2.4 2.4 0 00-2.4 2.4v11.2a2.4 2.4 0 002.4 2.4h5.6v13.6zm-5.6-15.2h16a.8.8 0 00.8-.8V10.552l-8.37 5.327a.799.799 0 01-.859 0l-8.37-5.327v11.052a.8.8 0 00.8.8z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" d=\"M18.4 33.603h-3.2a.801.801 0 000 1.6h3.2a.8.8 0 100-1.6z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "41",
      "name": "communication-mobile-email",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M5.744 15.662l-1.033-3.934 19.452 4.26-19.485 4.295 1.065-3.963.088-.33-.087-.328z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M29.547 14.219L3.13 2.667a1.274 1.274 0 00-1.35.216c-.37.328-.518.84-.38 1.314l3.106 11.79-3.184 11.85a1.276 1.276 0 001.737 1.501l26.487-11.582a1.921 1.921 0 000-3.537zM5.744 15.661l-1.033-3.933 19.453 4.26-19.486 4.294 1.065-3.962.088-.33-.087-.329zM2.56 28.168l26.475-11.585a.625.625 0 00.405-.596.618.618 0 00-.39-.589L2.641 3.848l1.705 6.49 22.938 5.024a.64.64 0 010 1.25l-22.98 5.063-1.746 6.493z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "32",
      "height": "32",
      "name": "communication-sending-message",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"19\" height=\"19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.504 4.98h-.5v.5h.5v-.5zm-10.08 9.36h.5v-.5h-.5v.5zm9.36-11.52h.5v-.5h-.5v.5zm-11.52 0v-.5h-.5v.5h.5zm11.52 10.8v.5h.5v-.5h-.5zm-11.52 0h-.5v.5h.5v-.5zm15.12 3.6v.5h.5v-.5h-.5zm-12.24 0h-.5v.5h.5v-.5zM17.384 5.7h.5v-.5h-.5v.5zm-2.88 0v-.5h-.5v.5h.5zm-9.36 8.64v-.5h-.5v.5h.5zm9.36-8.86h2.88v-1h-2.88v1zm-.5-2.66v2.16h1V2.82h-1zm-.22-.22a.22.22 0 01.22.22h1a1.22 1.22 0 00-1.22-1.22v1zm-11.52 0h11.52v-1H2.264v1zm-.22.22a.22.22 0 01.22-.22v-1a1.22 1.22 0 00-1.22 1.22h1zm0 10.8V2.82h-1v10.8h1zm.22.22a.22.22 0 01-.22-.22h-1c0 .673.546 1.22 1.22 1.22v-1zm2.16 0h-2.16v1h2.16v-1zm.5 3.38v-2.88h-1v2.88h1zm.22.22a.22.22 0 01-.22-.22h-1c0 .673.546 1.22 1.22 1.22v-1zm12.24 0H5.144v1h12.24v-1zm.22-.22a.22.22 0 01-.22.22v1a1.22 1.22 0 001.22-1.22h-1zm0-11.52v11.52h1V5.7h-1zm-.22-.22a.22.22 0 01.22.22h1a1.22 1.22 0 00-1.22-1.22v1zm-3.6-3.16H2.264v1h11.52v-1zm.5 11.3V2.82h-1v10.8h1zm-12.02.5h11.52v-1H2.264v1zm-.5-11.3v10.8h1V2.82h-1zm15.62 13.9H5.144v1h12.24v-1zm-.5-11.02v11.52h1V5.7h-1zm-2.38.5h2.88v-1h-2.88v1zm.5 7.42V5.7h-1v7.92h1zm-1.22 1.22a1.22 1.22 0 001.22-1.22h-1a.22.22 0 01-.22.22v1zm-8.64 0h8.64v-1h-8.64v1zm.5 2.38v-2.88h-1v2.88h1z\" fill=\"#fff\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "19",
      "height": "19",
      "name": "design-clipboard",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"none\"><path fill=\"#D8D6E5\" d=\"M5.75 14.417c.002-.772.51-1.45 1.25-1.67V7.5a.5.5 0 00-.5-.5H5v12.5a.5.5 0 01-.5.5H1v1.5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-5.415a1.743 1.743 0 01-1.25-1.668zM23.5 2H22v12.5a.5.5 0 01-.5.5H18v1.5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-14a.5.5 0 00-.5-.5z\"/><path fill=\"#6F647A\" fill-rule=\"evenodd\" d=\"M23.5 1h-5A1.5 1.5 0 0017 2.5v4.55A2.5 2.5 0 0015.05 9H13a1 1 0 00-1 1v4H9.95A2.5 2.5 0 008 12.05V7.5A1.5 1.5 0 006.5 6h-5A1.5 1.5 0 000 7.5v14A1.5 1.5 0 001.5 23h5A1.5 1.5 0 008 21.5v-4.55A2.5 2.5 0 009.95 15H12a1 1 0 001-1v-4h2.05A2.5 2.5 0 0017 11.95v4.55a1.5 1.5 0 001.5 1.5h5a1.5 1.5 0 001.5-1.5v-14A1.5 1.5 0 0023.5 1zm-17 21h-5a.5.5 0 01-.5-.5v-14a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v4.55a2.5 2.5 0 000 4.9v4.55a.5.5 0 01-.5.5zM6 14.5a1.5 1.5 0 103.001-.001A1.5 1.5 0 006 14.5zm10-5a1.5 1.5 0 113.001.001A1.5 1.5 0 0116 9.5zm7.5 7.5a.5.5 0 00.5-.5v-14a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v4.55a2.5 2.5 0 010 4.9v4.55a.5.5 0 00.5.5h5z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "design-prototype",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\"><path d=\"M9 19c6 0 15-12 15-14v14z\" fill=\"#e8e5fe\"/><path d=\"M24 4H1a1 1 0 00-1 1v3a4 4 0 014 4 4 4 0 01-4 4v3a1 1 0 001 1h23a1 1 0 001-1V5a1 1 0 00-1-1zm0 15H8v-1H7v1H1v-2.1A5.009 5.009 0 005 12a5.009 5.009 0 00-4-4.9V5h6v1h1V5h16z\" fill=\"#8075f2\"/><path d=\"M13 11a2 2 0 000-4 2 2 0 000 4zm0-3a1 1 0 11-1 1 1.001 1.001 0 011-1zM19 13a2 2 0 102 2 2 2 0 00-2-2zm0 3a1 1 0 111-1 1.001 1.001 0 01-1 1zM12 16.35l8-9.352.76.65-8 9.351zM7 8h1v3H7zM7 13h1v3H7z\" fill=\"#8075f2\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "discount-coupon",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M24.96 1.28h-1.92v22.4a.64.64 0 01-.64.64H3.84v1.92c0 .353.286.64.64.64h20.48a.64.64 0 00.64-.64V1.92a.64.64 0 00-.64-.64z\"/><path fill=\"#9EFFED\" d=\"M28.16 5.12V28.8a.64.64 0 01-.64.64H7.68v1.28h21.76V5.12h-1.28z\"/><path fill=\"#00D1AB\" fill-rule=\"evenodd\" d=\"M28.8 3.84h-1.92V1.92C26.88.86 26.02 0 24.96 0H4.48C3.42 0 2.56.86 2.56 1.92v24.32c0 1.06.86 1.92 1.92 1.92H6.4v1.92c0 1.06.86 1.92 1.92 1.92H28.8c1.06 0 1.92-.86 1.92-1.92V5.76c0-1.06-.86-1.92-1.92-1.92zM3.84 26.24V1.92a.64.64 0 01.64-.64h20.48a.64.64 0 01.64.64v24.32a.64.64 0 01-.64.64H4.48a.64.64 0 01-.64-.64zm24.96 4.48a.64.64 0 00.64-.64V5.76a.64.64 0 00-.64-.64h-1.92v21.12c0 1.06-.86 1.92-1.92 1.92H7.68v1.92c0 .354.287.64.64.64H28.8z\" clip-rule=\"evenodd\"/><path fill=\"#00D1AB\" d=\"M7.04 10.24h4.48a.64.64 0 100-1.28H7.04a.64.64 0 000 1.28zm0-3.84h4.48a.64.64 0 100-1.28H7.04a.64.64 0 100 1.28zm0 7.68h4.48a.64.64 0 100-1.28H7.04a.64.64 0 000 1.28zm15.36 2.56H7.04a.64.64 0 000 1.28H22.4a.64.64 0 100-1.28zm0 3.84H7.04a.64.64 0 000 1.28H22.4a.64.64 0 100-1.28z\"/><path fill=\"#00D1AB\" fill-rule=\"evenodd\" d=\"M16.641 5.12h5.12c.707 0 1.28.572 1.28 1.28v6.4a1.28 1.28 0 01-1.28 1.28h-5.12a1.28 1.28 0 01-1.28-1.28V6.4c0-.708.573-1.28 1.28-1.28zm0 7.68h5.12V6.4h-5.12v6.4z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "32",
      "height": "32",
      "name": "document-page",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"54\" height=\"42\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M45.92 9.92v23.52H6.72v3.36H44.8a4.48 4.48 0 004.48-4.48V9.92h-3.36z\"/><path fill=\"#D2B6F1\" d=\"M43.68 2.08h-1.12v26.88a1.12 1.12 0 01-1.12 1.12H1.12v1.12c0 .619.5 1.12 1.12 1.12h41.44a1.12 1.12 0 001.12-1.12v-28a1.12 1.12 0 00-1.12-1.12z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M50.4 7.68h-3.36V3.2A2.24 2.24 0 0044.8.96H2.24A2.24 2.24 0 000 3.2v29.12a2.24 2.24 0 002.24 2.24h2.24v3.36a3.363 3.363 0 003.36 3.36H50.4a3.363 3.363 0 003.36-3.36V11.04a3.363 3.363 0 00-3.36-3.36zM2.24 32.32V3.2H44.8v29.12H2.24zm48.16 6.72a1.12 1.12 0 001.12-1.12V11.04a1.12 1.12 0 00-1.12-1.12h-3.36v22.4a2.24 2.24 0 01-2.24 2.24H6.72v3.36c0 .618.501 1.12 1.12 1.12H50.4z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" d=\"M23.52 12.16H28a1.12 1.12 0 000-2.24h-3.36V8.8a1.12 1.12 0 00-2.24 0v1.12h-2.24a2.24 2.24 0 00-2.24 2.24v4.48a2.24 2.24 0 002.24 2.24h6.72v4.48h-7.84a1.12 1.12 0 100 2.24h3.36v1.12a1.12 1.12 0 002.24 0V25.6h2.24a2.24 2.24 0 002.24-2.24v-4.48a2.24 2.24 0 00-2.24-2.24h-6.72v-4.48h3.36z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "54",
      "height": "42",
      "name": "dollar-paper-a",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"20\" height=\"20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.4 4a6 6 0 110 12 6 6 0 010-12z\" fill=\"#D2B6F1\"/><path d=\"M8.4 0a.4.4 0 110 .8.4.4 0 010-.8zM.4 4.8a.4.4 0 110 .8.4.4 0 010-.8zM16.4 4.8a.4.4 0 110 .8.4.4 0 010-.8zM8.4 19.2a.4.4 0 110 .8.4.4 0 010-.8zM16.4 14.4a.4.4 0 110 .8.4.4 0 010-.8zM.4 14.4a.4.4 0 110 .8.4.4 0 010-.8zM11.317 9.717L8.8 12.234V3.6a.4.4 0 00-.8 0v8.634L5.483 9.717a.4.4 0 00-.566.566l3.2 3.2a.4.4 0 00.566 0l3.2-3.2a.4.4 0 00-.566-.566zM10 15.2H6.8a.4.4 0 000 .8H10a.4.4 0 000-.8z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "20",
      "height": "20",
      "name": "download-queue",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"44\" height=\"34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g opacity=\".75\"><path d=\"M31.17 17.943v11.83a.845.845 0 01-.844.844H2.444v.848c0 .467.378.845.845.845h28.727a.845.845 0 00.845-.845V17.098l-1.69.845z\" fill=\"#FAC600\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.038 4.761l4.29.647a.864.864 0 01.423 1.452l-3.08 3.113.735 4.444a.827.827 0 01-.765.995.724.724 0 01-.35-.092l-3.895-2.124L31.5 15.32a.729.729 0 01-.35.091.827.827 0 01-.765-.994l.735-4.444-3.08-3.113a.864.864 0 01.423-1.453l4.29-.647L34.705.66a.75.75 0 011.381 0l1.952 4.101zM37.863 9.4l.607-.614 1.937-1.958-2.62-.395-.889-.134-.386-.811-1.117-2.347-1.116 2.347-.386.811-.888.134-2.621.395 1.937 1.958.607.613-.141.85-.444 2.688 2.244-1.224.808-.44.81.44 2.243 1.224-.444-2.687-.14-.85z\" fill=\"#5F259F\"/><path d=\"M32.86 31.465a.845.845 0 01-.844.845H3.289a.845.845 0 01-.845-.845v-16.66l13.385 8.576a3.381 3.381 0 003.647 0l10.397-6.662a2.485 2.485 0 01-.587-.492 2.52 2.52 0 01-.46-.843l-10.261 6.574a1.69 1.69 0 01-1.824 0l-14.297-9.16v-1.61c0-.467.378-.846.845-.846h25.817l-1.671-1.69H3.289a2.535 2.535 0 00-2.535 2.535v20.278c0 1.4 1.135 2.535 2.535 2.535h28.727c1.4 0 2.535-1.135 2.535-2.535V15.581l-1.69.921v14.963z\" fill=\"#5F259F\"/></g></svg>",
    "type": "shady",
    "metadata": {
      "width": "44",
      "height": "34",
      "name": "email-favorite-yellow",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"41\" height=\"40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M28.8 20v11.2a.8.8 0 01-.8.8H1.6v.803a.8.8 0 00.8.8h27.2a.8.8 0 00.8-.8V19.2l-1.6.8z\" fill=\"#FFE292\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M35.302 7.519l4.062.612a.818.818 0 01.4 1.375l-2.916 2.948.696 4.208a.783.783 0 01-.724.941.686.686 0 01-.33-.087l-3.69-2.01-3.689 2.011a.69.69 0 01-.33.087.782.782 0 01-.725-.942l.696-4.208-2.916-2.947a.818.818 0 01.4-1.376l4.062-.612 1.848-3.883a.71.71 0 011.308 0l1.848 3.883zm-.165 4.39l.574-.58 1.834-1.854-2.481-.374-.841-.127-.366-.768L32.8 5.984l-1.057 2.222-.366.768-.84.127-2.482.374 1.834 1.854.575.58-.134.806-.42 2.544 2.124-1.159.766-.417.766.418 2.125 1.158-.421-2.544-.133-.805z\" fill=\"#FAC600\"/><path d=\"M30.4 32.803a.8.8 0 01-.8.8H2.4a.8.8 0 01-.8-.8V17.028l12.673 8.12c1.053.675 2.401.675 3.454 0l9.844-6.307a2.352 2.352 0 01-.556-.466 2.387 2.387 0 01-.436-.798l-9.715 6.225a1.6 1.6 0 01-1.727 0L1.6 15.128v-1.525a.8.8 0 01.8-.8h24.445l-1.583-1.6H2.4a2.4 2.4 0 00-2.4 2.4v19.2a2.4 2.4 0 002.4 2.4h27.2a2.4 2.4 0 002.4-2.4v-15.04l-1.6.873v14.167z\" fill=\"#FAC600\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "41",
      "height": "40",
      "name": "email-favorite",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 5.5v12a.5.5 0 01-.5.5H1v.502a.5.5 0 00.5.5h17a.5.5 0 00.5-.5V6l-1-.5z\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.5 5.002h-17a1.499 1.499 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5v-12a1.498 1.498 0 00-1.5-1.5zm.5 13.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-9.86l7.921 5.076a2 2 0 002.158 0L19 8.643v9.859zm-8.46-5.626L19 7.456v-.954a.5.5 0 00-.5-.5h-17a.5.5 0 00-.5.5v.953l8.46 5.421a1 1 0 001.08 0z\" fill=\"#5F259F\"/><path d=\"M24.854 3.148l-3-3a.5.5 0 00-.707.707l2.146 2.147H17.5a.5.5 0 000 1h5.793l-2.146 2.146a.5.5 0 00.707.707l3-3a.5.5 0 000-.707z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "email-forward",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22 3.5v15a.5.5 0 01-.5.5H1v1.502a.5.5 0 00.5.5h22a.5.5 0 00.5-.5V4l-2-.5z\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M23.5 3.002h-22a1.5 1.5 0 00-1.5 1.5v16a1.5 1.5 0 001.5 1.5h22a1.5 1.5 0 001.5-1.5v-16a1.5 1.5 0 00-1.5-1.5zM1 4.502a.5.5 0 01.5-.5h22a.5.5 0 01.5.5v1.93l-10.99 6.513a1 1 0 01-1.02 0L1 6.432v-1.93zm22.5 16.5a.5.5 0 00.5-.5V7.594l-10.48 6.211a2 2 0 01-2.04 0L1 7.595v12.907a.5.5 0 00.5.5h22z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "email",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"56\" height=\"56\" fill=\"none\"><rect width=\"42.56\" height=\"15.68\" x=\"6.721\" y=\"2.24\" fill=\"#D2B6F1\" rx=\".5\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M48.16 0H7.84a3.36 3.36 0 00-3.36 3.36V16.8a3.36 3.36 0 003.36 3.36h40.32a3.36 3.36 0 003.36-3.36V3.36A3.36 3.36 0 0048.16 0zm1.12 16.8a1.12 1.12 0 01-1.12 1.12H7.84a1.12 1.12 0 01-1.12-1.12V3.36c0-.619.502-1.12 1.12-1.12h40.32c.619 0 1.12.501 1.12 1.12V16.8zm-1.12 7.84H7.84A3.36 3.36 0 004.48 28v6.72a3.36 3.36 0 003.36 3.36h40.32a3.36 3.36 0 003.36-3.36V28a3.36 3.36 0 00-3.36-3.36zM6.72 34.72V28c0-.619.502-1.12 1.12-1.12h19.04v8.96H7.84a1.12 1.12 0 01-1.12-1.12zm42.56 0a1.12 1.12 0 01-1.12 1.12H29.12v-8.96h19.04c.619 0 1.12.501 1.12 1.12v6.72zm-1.12 7.84H7.84a3.36 3.36 0 00-3.36 3.36v6.72A3.36 3.36 0 007.84 56h40.32a3.36 3.36 0 003.36-3.36v-6.72a3.36 3.36 0 00-3.36-3.36zM6.72 52.64v-6.72c0-.619.502-1.12 1.12-1.12h19.04v8.96H7.84a1.12 1.12 0 01-1.12-1.12zm42.56 0a1.12 1.12 0 01-1.12 1.12H29.12V44.8h19.04c.619 0 1.12.502 1.12 1.12v6.72z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "feature-block",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"57\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M47.04 11.665h2.24v15.68H24.64l22.4-15.68z\" fill=\"#B482E1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M24.64 29.585h24.64a2.24 2.24 0 002.24-2.24v-15.68a2.24 2.24 0 00-2.24-2.24h-11.2l-1.62-3.242a2.24 2.24 0 00-2.004-1.238H24.64a2.24 2.24 0 00-2.24 2.24v8.96H6.72V1.585a1.12 1.12 0 00-2.24 0v41.44a2.24 2.24 0 002.24 2.24H22.4v8.96a2.24 2.24 0 002.24 2.24h24.64a2.24 2.24 0 002.24-2.24v-15.68a2.24 2.24 0 00-2.24-2.24h-11.2l-1.62-3.242a2.24 2.24 0 00-2.004-1.238H24.64a2.24 2.24 0 00-2.24 2.24v8.96H6.72v-24.64H22.4v8.96a2.24 2.24 0 002.24 2.24zm0 4.48h9.816l2.24 4.48h12.585v15.68H24.64v-20.16zm9.816-26.88H24.64v20.16h24.64v-15.68H36.697l-2.24-4.48z\" fill=\"#782DC8\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "57",
      "name": "folde-branch-folders",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 22.5V21h-4.511v1.5c.001.543.18 1.07.511 1.5h4.511c-.33-.43-.51-.957-.511-1.5zM12 5.001V5H6.495A.5.5 0 016 4.501v-2a1.5 1.5 0 10-3 0V6h7.489v10.5a.5.5 0 01-.5.5H14.5a.5.5 0 00.5-.5V5.001h-3z\" fill=\"#D2B6F1\"/><path d=\"M10 8.293A.5.5 0 009.293 9l1 1H5.5a.5.5 0 100 1h4.793l-1 1a.5.5 0 00.707.707l1.854-1.854a.5.5 0 000-.707L10 8.293z\" fill=\"#5F259F\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 7H16V5h1.5a.5.5 0 00.5-.5V2a2 2 0 00-2-2H4.5A2.5 2.5 0 002 2.501V16.5A1.5 1.5 0 003.5 18H9v2H7.5a.5.5 0 00-.5.5V23a2 2 0 002 2h11.5a2.5 2.5 0 002.5-2.5v-14A1.5 1.5 0 0021.5 7zM16 1a1 1 0 011 1v2H7V2.5A2.477 2.477 0 006.489 1H16zM3 16.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V5H6.5a.5.5 0 01-.5-.5v-2a1.5 1.5 0 10-3 0v14zM9 24a1 1 0 01-1-1v-2h10v1.5c.002.543.181 1.07.511 1.5H9zm11.5 0a1.5 1.5 0 001.5-1.5v-14a.5.5 0 00-.5-.5H16v8.5a1.5 1.5 0 01-1.5 1.5H10v2h8.5a.5.5 0 01.5.5v2a1.5 1.5 0 001.5 1.5z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "forward-page",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M54.943 25.505l-24.45-24.45a3.606 3.606 0 00-5.1 0l-5.077 5.079 6.44 6.44a4.282 4.282 0 015.424 5.46l6.206 6.207a4.288 4.288 0 111.824 8.323 4.291 4.291 0 01-4.392-5.905l-5.79-5.787v15.233a4.289 4.289 0 011.136 6.88A4.291 4.291 0 1126.5 35.98V20.606a4.241 4.241 0 01-1.404-.937 4.29 4.29 0 01-.925-4.691l-6.348-6.351L1.057 25.392a3.606 3.606 0 000 5.101l24.45 24.45a3.606 3.606 0 005.1 0l24.336-24.335a3.605 3.605 0 000-5.103\" fill=\"#782DC8\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "git",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"58\" height=\"56\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M29 50L2 45.5V48l28 6 2.5-3-1-49H29v48z\"/><path stroke=\"#5F259F\" stroke-linecap=\"round\" stroke-width=\"2.5\" d=\"M2 46.86V8.167c0-.966.69-1.793 1.64-1.968l26-4.766A2 2 0 0132 3.4v48.66a2 2 0 01-2.392 1.962l-26-5.2A2 2 0 012 46.86z\"/><path fill=\"#D2B6F1\" stroke=\"#5F259F\" stroke-width=\"1.874\" d=\"M9.503 37.898v.788l.776.135 12.06 2.102 1.097.19v-7.981l-.865-.067-5.933-.453v-2.68l4.866-.027.932-.005v-6.842l-.942.005-4.856.026v-2.653h7.298v-6.884l-.972.037-12.56.474-.901.034V37.9z\"/><mask id=\"a\" fill=\"#fff\"><path fill-rule=\"evenodd\" d=\"M35 11h20a3 3 0 013 3v28a3 3 0 01-3 3H35v-5.034l1.485.892a1 1 0 001.34-.293l6.5-9.5a1 1 0 00-1.65-1.13l-5.968 8.723-1.693-1.015-.014-.009V27.568l2.753 3.096a.999.999 0 101.494-1.328l-4-4.5a.983.983 0 00-.247-.202v-6.768l.014-.008 1.83-1.099 2.449 2.448a1 1 0 001.414-1.414l-3-3a.999.999 0 00-1.222-.15l-1.485.89V11zm9.695 4.407A.998.998 0 0145.5 15H53a1 1 0 011 1v8c0 .234-.082.46-.232.64l-2.5 3a1 1 0 11-1.536-1.28L52 23.638V17h-5.995l-6.7 9.093a1 1 0 11-1.61-1.186l7-9.5zm-.63 9.268a1 1 0 00-1.13 1.65L52 32.528v6.533l-6.565.41-2.676-3.122a1 1 0 10-1.518 1.302l3 3.5a.998.998 0 00.821.347l8-.5A1 1 0 0054 40v-8a1 1 0 00-.435-.825l-9.5-6.5z\" clip-rule=\"evenodd\"/></mask><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M35 11h20a3 3 0 013 3v28a3 3 0 01-3 3H35v-5.034l1.485.892a1 1 0 001.34-.293l6.5-9.5a1 1 0 00-1.65-1.13l-5.968 8.723-1.693-1.015-.014-.009V27.568l2.753 3.096a.999.999 0 101.494-1.328l-4-4.5a.983.983 0 00-.247-.202v-6.768l.014-.008 1.83-1.099 2.449 2.448a1 1 0 001.414-1.414l-3-3a.999.999 0 00-1.222-.15l-1.485.89V11zm9.695 4.407A.998.998 0 0145.5 15H53a1 1 0 011 1v8c0 .234-.082.46-.232.64l-2.5 3a1 1 0 11-1.536-1.28L52 23.638V17h-5.995l-6.7 9.093a1 1 0 11-1.61-1.186l7-9.5zm-.63 9.268a1 1 0 00-1.13 1.65L52 32.528v6.533l-6.565.41-2.676-3.122a1 1 0 10-1.518 1.302l3 3.5a.998.998 0 00.821.347l8-.5A1 1 0 0054 40v-8a1 1 0 00-.435-.825l-9.5-6.5z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" d=\"M35 11v-1h-1v1h1zm0 34h-1v1h1v-1zm0-5.034l.514-.857L34 38.2v1.766h1zm1.485.892l-.514.857.514-.857zm1.34-.293l.825.565-.825-.565zm6.5-9.5L43.5 30.5l.825.565zm-.26-1.39l.564-.826-.564.826zm-1.39.26l.825.565-.825-.565zm-5.968 8.723l-.515.857L37 40l.532-.777-.825-.565zm-1.693-1.015l-.514.857.514-.857zM35 37.634h-1v.577l.5.289.5-.866zm0-10.066l.747-.665L34 24.938v2.63h1zm2.753 3.096l-.748.665.748-.665zm1.494-1.328L38.5 30l.747-.664zm-4-4.5l.748-.665-.748.665zM35 24.634h-1v.577l.5.289.5-.866zm0-6.768l-.508-.862-.492.29v.572h1zm.014-.008l.508.861.007-.004-.515-.857zm1.83-1.099l.708-.707L37 15.5l-.67.402.515.857zm2.449 2.448L40 18.5l-.707.707zm1.414-1.414L40 18.5l.707-.707zm-3-3l.707-.707-.707.707zm-1.222-.15l-.514-.858.514.857zm-1.485.89h-1V17.3l1.514-.909-.514-.857zm9.695-.126l-.805-.593.805.593zm9.073 9.233L53 24l.768.64zm-2.5 3l.768.64-.768-.64zm-1.536-1.28l-.769-.64.769.64zM52 23.638l.768.64L53 24v-.362h-1zM52 17h1v-1h-1v1zm-5.995 0v-1H45.5l-.3.407.805.593zm-6.7 9.093L38.5 25.5l.805.593zm-1.61-1.186l-.805-.593.805.593zm4.98.028l.825.565-.825-.565zm1.39-.26l-.565.825.565-.825zm-1.13 1.65l.565-.825-.565.825zM52 32.528h1V32l-.435-.298-.565.826zm0 6.533l.062.998L53 40v-.94h-1zm-6.565.41l-.76.65.325.38.497-.032-.062-.998zm-2.676-3.122L42 37l.76-.65zm-1.518 1.302l-.76.65.76-.65zm3 3.5l-.76.65.76-.65zm.821.347L45 40.5l.062.998zm8-.5l.063.998-.063-.998zm.503-9.823L53 32l.565-.825zM55 10H35v2h20v-2zm4 4c0-2.21-1.79-4-4-4v2a2 2 0 012 2h2zm0 28V14h-2v28h2zm-4 4c2.21 0 4-1.79 4-4h-2a2 2 0 01-2 2v2zm-20 0h20v-2H35v2zm-1-6.034V45h2v-5.034h-2zM37 40l-1.486-.891-1.029 1.715 1.486.891L37 40zm0 0l-1.03 1.715a2 2 0 002.68-.586L37 40zm6.5-9.5L37 40l1.65 1.13 6.5-9.5-1.65-1.13zm0 0l1.65 1.13a2 2 0 00-.52-2.78L43.5 30.5zm0 0l1.13-1.65a2 2 0 00-2.78.52l1.65 1.13zm-5.968 8.723L43.5 30.5l-1.65-1.13-5.969 8.723 1.65 1.13zM34.5 38.5l1.692 1.015 1.03-1.715-1.693-1.015-1.03 1.715zm0 0l1.029-1.715-.029-.017-1 1.732zM34 27.568v10.066h2V27.568h-2zM38.5 30l-2.753-3.097-1.494 1.33 2.752 3.096L38.5 30zm0 0l-1.495 1.329a2 2 0 002.824.166L38.5 30zm0 0l1.329 1.495a2 2 0 00.166-2.824L38.5 30zm-4-4.5l4 4.5 1.495-1.329-4-4.5L34.5 25.5zm0 0l1.495-1.329a2 2 0 00-.495-.403l-1 1.732zm-.5-7.634v6.768h2v-6.768h-2zm.507-.87l-.014.008 1.014 1.724.015-.009-1.015-1.723zm1.823-1.094L34.5 17l1.029 1.715 1.83-1.098-1.029-1.715zM40 18.5l-2.448-2.448-1.414 1.414 2.448 2.448L40 18.5zm0 0l-1.414 1.414a2 2 0 002.828 0L40 18.5zm0 0l1.414 1.414a2 2 0 000-2.828L40 18.5zm-3-3l3 3 1.414-1.414-3-3L37 15.5zm0 0l1.414-1.414a1.999 1.999 0 00-2.443-.301L37 15.5zm-1.486.891L37 15.5l-1.03-1.715-1.484.891 1.029 1.715zM34 11v4.534h2V11h-2zm11.5 3c-.636 0-1.233.302-1.61.814L45.5 16v-2zm7.5 0h-7.5v2H53v-2zm2 2a2 2 0 00-2-2v2h2zm0 8v-8h-2v8h2zm-.464 1.28c.3-.36.464-.812.464-1.28h-2l1.536 1.28zm-2.5 3l2.5-3L53 24l-2.5 3 1.536 1.28zm-2.817.256c.849.708 2.11.593 2.817-.256L50.5 27l-1.28 1.536zm-.256-2.816a2 2 0 00.256 2.816L50.5 27l-1.536-1.28zm2.269-2.722l-2.269 2.722L50.5 27l2.268-2.722-1.536-1.28zM51 17v6.638h2V17h-2zm-4.995 1H52v-2h-5.995v2zm-5.895 8.686l6.7-9.093-1.61-1.186-6.7 9.093 1.61 1.186zm-2.797.424a2 2 0 002.797-.424L38.5 25.5l-1.187 1.61zm-.423-2.796a1.999 1.999 0 00.423 2.796L38.5 25.5l-1.61-1.186zm7-9.5l-7 9.5L38.5 25.5l7-9.5-1.61-1.186zM43.5 25.5l1.13-1.65a2 2 0 00-2.78.52l1.65 1.13zm0 0l-1.65-1.13a2 2 0 00.52 2.78l1.13-1.65zm9.065 6.202L43.5 25.5l-1.13 1.65 9.065 6.203 1.13-1.65zM53 39.061v-6.533h-2v6.533h2zm-7.503 1.408l6.565-.41-.124-1.996-6.566.41.125 1.996zM42 37l2.676 3.122 1.518-1.302-2.676-3.121L42 37zm0 0l1.518-1.301a1.998 1.998 0 00-2.82-.217L42 37zm0 0l-1.302-1.518a2.001 2.001 0 00-.217 2.82L42 37zm3 3.5L42 37l-1.519 1.302 3 3.5L45 40.5zm0 0l-1.519 1.302a2.003 2.003 0 001.644.694L45 40.5zm8-.5l-8 .5.125 1.996 8-.5L53 40zm0 0l.125 1.996A2 2 0 0055 40h-2zm0-8v8h2v-8h-2zm0 0h2a2 2 0 00-.87-1.65L53 32zm-9.5-6.5L53 32l1.13-1.65-9.5-6.5-1.13 1.65z\" mask=\"url(#a)\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "58",
      "height": "56",
      "name": "group-1018",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"41\" height=\"40\" fill=\"none\"><path stroke=\"#9EFFED\" stroke-width=\"2\" d=\"M38.5 22v16H22M17 1v16H0\"/><path stroke=\"#fff\" stroke-width=\"1.6\" d=\"M.8.8h17.741v17.521H.8zm21.1 0h17.741v17.521H21.9zM.8 21.679h17.741V39.2H.8zm21.1 0h17.741V39.2H21.9z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "41",
      "height": "40",
      "name": "group-1027-1",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"41\" height=\"40\" fill=\"none\"><path stroke=\"#D2B6F1\" stroke-width=\"2\" d=\"M38.5 22v16H22M17 1v16H0\"/><path stroke=\"#5F259F\" stroke-width=\"1.6\" d=\"M.8.8h17.741v17.521H.8zm21.1 0h17.741v17.521H21.9zM.8 21.679h17.741V39.2H.8zm21.1 0h17.741V39.2H21.9z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "41",
      "height": "40",
      "name": "group-1027",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M6.72 19.68a.48.48 0 01-.48.48H3.36a.481.481 0 01-.48-.48v-4.32a.96.96 0 00-.96-.96h-.48a.481.481 0 01-.48-.48v-2.4a3.833 3.833 0 016.976-2.203 4.76 4.76 0 00-1.215 3.163v7.2z\"/><path fill=\"#39264F\" d=\"M22.08 13.92a.48.48 0 01-.48.48h-.48a.96.96 0 00-.96.96v4.32a.48.48 0 01-.48.48H16.8a.481.481 0 01-.48-.48v-7.2a4.753 4.753 0 00-1.215-3.163 3.835 3.835 0 016.976 2.203v2.4z\"/><path fill=\"#39264F\" fill-rule=\"evenodd\" d=\"M14.4 3.84a2.88 2.88 0 11-5.76 0 2.88 2.88 0 015.76 0zm-.96 0a1.92 1.92 0 10-3.84 0 1.92 1.92 0 003.84 0z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M21.12 2.88a2.88 2.88 0 11-5.761-.001 2.88 2.88 0 015.761.001zm-.96 0a1.92 1.92 0 10-3.841.001 1.92 1.92 0 003.841-.001zm-12.48 0a2.88 2.88 0 11-5.761-.001 2.88 2.88 0 015.761.001zm-.96 0a1.92 1.92 0 10-3.841.001A1.92 1.92 0 006.72 2.88zm7.682 5.784A4.783 4.783 0 0118.24 6.72a4.8 4.8 0 014.8 4.801v2.4a1.44 1.44 0 01-1.44 1.44h-.48v4.32a1.44 1.44 0 01-1.44 1.44H16.8a1.44 1.44 0 01-1.44-1.44v-2.489a1.406 1.406 0 01-.48.088h-.48v5.28A1.44 1.44 0 0112.96 24h-2.88a1.44 1.44 0 01-1.44-1.44v-5.28h-.48a1.383 1.383 0 01-.48-.088v2.488a1.44 1.44 0 01-1.44 1.44H3.36a1.44 1.44 0 01-1.44-1.44v-4.32h-.48A1.44 1.44 0 010 13.92v-2.4a4.787 4.787 0 018.638-2.857l-.002.002a4.714 4.714 0 015.767 0v-.001zM6.24 20.16a.48.48 0 00.48-.48v-7.2a4.767 4.767 0 011.215-3.163A3.835 3.835 0 00.96 11.521v2.4c0 .264.215.48.48.48h.48c.53 0 .96.43.96.96v4.32c0 .264.215.48.48.48h2.88zm8.64-3.84h-.48a.96.96 0 00-.96.96v5.28a.48.48 0 01-.48.48h-2.88a.48.48 0 01-.48-.48v-5.28a.96.96 0 00-.96-.96h-.48a.48.48 0 01-.48-.48v-3.36a3.841 3.841 0 017.68 0v3.36a.48.48 0 01-.48.48zm6.72-1.92a.48.48 0 00.48-.48v-2.4a3.833 3.833 0 00-6.975-2.202 4.757 4.757 0 011.215 3.162v7.2c0 .265.215.48.48.48h2.88a.48.48 0 00.48-.48v-4.32c0-.53.43-.96.96-.96h.48z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "24",
      "height": "24",
      "name": "group",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"40\" height=\"37\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M37.6 26.576c.443 0 .8-.323.8-.722V2.766c0-.398-.357-.721-.8-.721H32V20.8c0 3.188-2.865 5.772-6.4 5.772h-4.8v.003h1.862a2.593 2.593 0 011.453.441l7.881 5.326.005-4.758c0-.558.501-1.01 1.12-1.01h4.48z\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.4.602h35.2c1.325 0 2.399.97 2.4 2.164v23.088c-.001 1.195-1.075 2.163-2.4 2.164h-4v4.328c0 .548-.345 1.049-.89 1.292a1.745 1.745 0 01-1.679-.144l-7.88-5.326a.871.871 0 00-.49-.15H2.4c-1.325-.001-2.399-.97-2.4-2.164V2.766C.001 1.571 1.075.603 2.4.602zm35.2 25.973c.442 0 .8-.323.8-.721V2.766c0-.398-.358-.721-.8-.722H2.4c-.442 0-.8.324-.8.722v23.087c0 .399.358.721.8.722h20.261a2.591 2.591 0 011.453.442l7.881 5.326.005-4.758c.001-.557.502-1.009 1.12-1.01h4.48z\" fill=\"#5F259F\"/><path d=\"M25.74 18.23c-1.36 1.621-3.484 2.573-5.738 2.573-2.253 0-4.377-.95-5.74-2.57a.833.833 0 00-.72-.314.805.805 0 00-.662.406.662.662 0 00.06.72c1.66 2.014 4.278 3.201 7.061 3.201 2.783 0 5.402-1.187 7.062-3.201.249-.33.155-.779-.21-1.003-.365-.225-.863-.14-1.112.189z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "37",
      "name": "happy-chat",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"40\" height=\"40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M34.778 3.118c.286 1.07.428 2.174.423 3.282 0 11.334-18.4 23.654-18.4 23.654A69.39 69.39 0 013.51 17.937C8.212 26.87 20 34.855 20 34.855S38.4 22.534 38.4 11.2a9.504 9.504 0 00-3.622-8.082z\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.007 5.358C21.813 3.243 25.286 0 29.6 0 35.82 0 40 4.501 40 11.2c0 11.948-18.046 24.36-19.073 25.067l-.02.014-.912.519-.909-.633-.04-.027C17.829 35.296 0 22.943 0 11.2 0 4.501 4.18 0 10.4 0c4.36 0 7.815 3.24 9.607 5.358zM38.4 11.2c0-5.6-3.2-9.6-8.8-9.6C24.133 1.6 20 8 20 8s-4.067-6.4-9.6-6.4c-5.6 0-8.8 4-8.8 9.6C1.6 22.4 20 34.854 20 34.854S38.4 22.534 38.4 11.2z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "heart",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#D2B6F1\" d=\"M4 1h3v23H4z\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.5 0h16c.828 0 1.5.672 1.5 1.5v22c0 .828-.672 1.5-1.5 1.5h-16c-.828 0-1.5-.672-1.5-1.5v-22C3 .672 3.672 0 4.5 0zm16 24a.5.5 0 00.5-.5v-22a.5.5 0 00-.5-.5h-16a.5.5 0 00-.5.5V8h13.5a.5.5 0 010 1H4v7h13.5a.5.5 0 010 1H4v6.5a.5.5 0 00.5.5h16z\" fill=\"#5F259F\"/><path d=\"M6.468 12h1.064c.259 0 .468.21.468.467v.065c0 .259-.21.468-.468.468H6.468A.467.467 0 016 12.533v-.065A.468.468 0 016.468 12zM7.5 20h-1a.5.5 0 000 1h1a.5.5 0 000-1zM7.5 4h-1a.5.5 0 000 1h1a.5.5 0 000-1z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "hosting-server",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"26\" fill=\"none\"><path fill=\"#D8D6E5\" d=\"M21 2.728h2v14h-2z\"/><path fill=\"#6F647A\" fill-rule=\"evenodd\" d=\"M22.5 1.728h-20a1.5 1.5 0 00-1.5 1.5v18a1.5 1.5 0 001.5 1.5h7.374l1.535 1.565c.585.58 1.526.58 2.11 0l1.536-1.566H22.5a1.5 1.5 0 001.5-1.5v-18a1.5 1.5 0 00-1.5-1.5zm.5 19.5a.5.5 0 01-.5.5h-7.866l-.293.3-1.525 1.555a.498.498 0 01-.692.01l-1.536-1.566-.293-.3H2.5a.5.5 0 01-.5-.5v-2.292l5.03-5.03 4.65 4.707a.498.498 0 00.72-.085l5.562-7.416L23 17.571v3.656zM18.424 9.962L23 15.685V3.227a.5.5 0 00-.5-.5h-20a.5.5 0 00-.5.5V17.52l4.646-4.647a.502.502 0 01.674-.03l4.596 4.663L17.6 9.929a.467.467 0 01.421-.2.498.498 0 01.403.234z\" clip-rule=\"evenodd\"/><path fill=\"#6F647A\" fill-rule=\"evenodd\" d=\"M5 7.728a2 2 0 113.999-.001A2 2 0 015 7.728zm1 0a1 1 0 102 0 1 1 0 00-2 0z\" clip-rule=\"evenodd\"/><path fill=\"#D8D6E5\" d=\"M18.189 11.4l-3.134 10.327H22.5a.5.5 0 00.5-.5v-3.656l-4.811-6.17z\"/><path fill=\"#D8D6E5\" d=\"M11.68 18.612l-4.65-4.708-2.686 7.823h5.95l.295.3 1.534 1.566a.5.5 0 00.694-.011l1.524-1.555.294-.3h.42l-3.088-3.01a.488.488 0 01-.287-.105z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "26",
      "name": "image-caption-1",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M21 2h2v14h-2z\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M22.5 1h-20A1.5 1.5 0 001 2.5v18A1.5 1.5 0 002.5 22h7.374l1.535 1.566a1.499 1.499 0 002.11 0L15.056 22H22.5a1.5 1.5 0 001.5-1.5v-18A1.5 1.5 0 0022.5 1zm.5 19.5a.5.5 0 01-.5.5h-7.866l-.293.3-1.525 1.555a.498.498 0 01-.692.011L10.587 21.3l-.293-.3H2.5a.5.5 0 01-.5-.5v-2.293l5.03-5.03 4.65 4.708a.502.502 0 00.72-.085l5.562-7.417L23 16.843V20.5zM18.424 9.235L23 14.957V2.5a.5.5 0 00-.5-.5h-20a.5.5 0 00-.5.5v14.294l4.646-4.647a.5.5 0 01.674-.03l4.596 4.662L17.6 9.201a.472.472 0 01.421-.2.5.5 0 01.403.234z\" clip-rule=\"evenodd\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M5 7a2 2 0 113.999-.001A2 2 0 015 7zm1 0a1 1 0 102 0 1 1 0 00-2 0z\" clip-rule=\"evenodd\"/><path fill=\"#9EFFED\" d=\"M18.189 10.673L15.055 21H22.5a.5.5 0 00.5-.5v-3.656l-4.811-6.17zm-6.509 7.212l-4.65-4.708L4.344 21h5.95l.295.3 1.534 1.566a.5.5 0 00.694-.011L14.34 21.3l.294-.3h.42l-3.088-3.01a.495.495 0 01-.287-.105z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "image-caption-2",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"none\"><path fill=\"#FFE292\" d=\"M21 2h2v14h-2z\"/><path fill=\"#6F647A\" fill-rule=\"evenodd\" d=\"M22.5 1h-20A1.5 1.5 0 001 2.5v18A1.5 1.5 0 002.5 22h7.374l1.535 1.566a1.499 1.499 0 002.11 0L15.056 22H22.5a1.5 1.5 0 001.5-1.5v-18A1.5 1.5 0 0022.5 1zm.5 19.5a.5.5 0 01-.5.5h-7.866l-.293.3-1.525 1.555a.498.498 0 01-.692.011L10.587 21.3l-.293-.3H2.5a.5.5 0 01-.5-.5v-2.293l5.03-5.03 4.65 4.708a.502.502 0 00.72-.085l5.562-7.417L23 16.843V20.5zM18.424 9.235L23 14.957V2.5a.5.5 0 00-.5-.5h-20a.5.5 0 00-.5.5v14.294l4.646-4.647a.5.5 0 01.674-.03l4.596 4.662L17.6 9.201a.472.472 0 01.421-.2.5.5 0 01.403.234z\" clip-rule=\"evenodd\"/><path fill=\"#6F647A\" fill-rule=\"evenodd\" d=\"M5 7a2 2 0 113.999-.001A2 2 0 015 7zm1 0a1 1 0 102 0 1 1 0 00-2 0z\" clip-rule=\"evenodd\"/><path fill=\"#FFE292\" d=\"M18.189 10.673L15.055 21H22.5a.5.5 0 00.5-.5v-3.657l-4.811-6.17zm-6.509 7.212l-4.65-4.708L4.344 21h5.95l.295.3 1.534 1.566a.5.5 0 00.694-.011L14.34 21.3l.294-.3h.42l-3.088-3.01a.495.495 0 01-.287-.105z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "image-caption",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10.24\" y=\"30.72\" width=\"8.96\" height=\"8.96\" rx=\".5\" transform=\"rotate(-180 10.24 30.72)\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.92 32H9.6c1.06 0 1.92-.86 1.92-1.92v-3.2H28.8c1.06 0 1.92-.86 1.92-1.92V3.2c0-1.06-.86-1.92-1.92-1.92H7.04c-1.06 0-1.92.86-1.92 1.92v17.28h-3.2C.86 20.48 0 21.34 0 22.4v7.68C0 31.14.86 32 1.92 32zM6.4 3.2a.64.64 0 01.64-.64H28.8a.64.64 0 01.64.64v21.76a.64.64 0 01-.64.64H11.52v-3.2a1.904 1.904 0 00-.192-.824l.005-.003 7.867-7.868v3.575a.64.64 0 101.28 0v-5.12a.64.64 0 00-.64-.64h-5.12a.64.64 0 100 1.28h3.575l-7.868 7.867-.003.005a1.9 1.9 0 00-.824-.192H6.4V3.2zM1.92 21.76a.64.64 0 00-.64.64v7.68c0 .354.287.64.64.64H9.6a.64.64 0 00.64-.64V22.4a.64.64 0 00-.64-.64H1.92z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "32",
      "height": "32",
      "name": "inside-element-rotated",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"17\" y=\"1\" width=\"7\" height=\"7\" rx=\".5\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M23.5 0h-6A1.5 1.5 0 0016 1.5V4H2.5A1.5 1.5 0 001 5.5v17A1.5 1.5 0 002.5 24h17a1.5 1.5 0 001.5-1.5V9h2.5A1.5 1.5 0 0025 7.5v-6A1.5 1.5 0 0023.5 0zM20 22.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-17a.5.5 0 01.5-.5H16v2.5c.001.223.052.443.15.644l-.004.002L10 14.293V11.5a.5.5 0 00-1 0v4a.5.5 0 00.5.5h4a.5.5 0 000-1h-2.793l6.146-6.146.003-.004c.2.098.42.149.644.15H20v13.5zM23.5 8a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-6a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h6z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "inside-element",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M42.559 17.92c-.019 0-.036.005-.055.005a11.166 11.166 0 01-6.61 20.15l.008.005H20.15l.009-.005a11.165 11.165 0 01-6.61-20.15c-.02 0-.037-.005-.055-.005a11.2 11.2 0 00-2.295 22.16v2.48h29.12v-2.5c.735.164 1.486.251 2.24.259 6.186 0 11.2-5.014 11.2-11.2 0-6.186-5.014-11.2-11.2-11.2z\" fill=\"#B482E1\"/><path d=\"M37.752 33.928l-8.96-8.96a1.12 1.12 0 00-1.584 0l-8.96 8.96a1.12 1.12 0 001.584 1.584l7.048-7.048V54.88a1.12 1.12 0 002.24 0V28.464l7.048 7.048a1.12 1.12 0 001.584-1.584z\" fill=\"#782DC8\"/><path d=\"M44.638 15.857A16.444 16.444 0 0027.999 2.24a16.444 16.444 0 00-16.638 13.617C4.43 16.94-.503 23.175.041 30.172c.544 6.995 6.382 12.393 13.398 12.39h3.36a1.12 1.12 0 100-2.24h-3.36a11.192 11.192 0 01-1.733-22.25l1.641-.256.232-1.645A14.239 14.239 0 0128 4.48a14.238 14.238 0 0114.42 11.69l.233 1.645 1.641.255a11.192 11.192 0 01-1.734 22.25H39.2a1.12 1.12 0 100 2.24h3.36c7.017.004 12.854-5.394 13.399-12.39.544-6.995-4.388-13.23-11.32-14.313z\" fill=\"#782DC8\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "interface-cloud-upload",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"none\"><path fill=\"#D8D6E5\" d=\"M21 1h2v15h-2zM1 20h15v3H1zm16 3v-6h6v5.5a.5.5 0 01-.5.5H17z\"/><path fill=\"#6F647A\" fill-rule=\"evenodd\" d=\"M22.5 0h-21A1.5 1.5 0 000 1.5v21A1.5 1.5 0 001.5 24h21a1.5 1.5 0 001.5-1.5v-21A1.5 1.5 0 0022.5 0zM17 23v-6h6v5.5a.5.5 0 01-.5.5H17zm-1-6a1 1 0 011-1h6V1.5a.5.5 0 00-.5-.5h-21a.5.5 0 00-.5.5v21a.5.5 0 00.5.5H16v-6z\" clip-rule=\"evenodd\"/><path fill=\"#6F647A\" d=\"M5.707 5H10.5a.5.5 0 000-1h-6a.5.5 0 00-.5.5v6a.5.5 0 001 0V5.707l9.146 9.146a.501.501 0 00.708-.707L5.707 5z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "interface-expand-view",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M24.96 12.8h-3.2v13.44a.64.64 0 01-.64.64H5.76v3.2c0 .354.286.64.64.64h18.56a.64.64 0 00.64-.64V13.44a.642.642 0 00-.64-.64z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M24.96 12.8h-1.92V7.04A7.041 7.041 0 0016 0a7.039 7.039 0 00-7.04 7.04v5.76H7.04a1.92 1.92 0 00-1.92 1.92v15.36c0 1.06.859 1.92 1.92 1.92h17.92c1.06 0 1.92-.86 1.92-1.92V14.72c0-1.06-.86-1.92-1.92-1.92zM10.24 7.04a5.76 5.76 0 1111.52 0v5.76H10.24V7.04zm14.72 23.68a.642.642 0 00.64-.64V14.72a.642.642 0 00-.64-.64H7.04a.64.64 0 00-.64.64v15.36c0 .353.286.64.64.64h17.92z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M15.12 18.037c.287-.077.582-.116.879-.117a3.189 3.189 0 012.084 5.611l1.083 2.507a.64.64 0 01-.607.842h-5.12a.641.641 0 01-.606-.843l1.083-2.507a3.186 3.186 0 01-.972-3.381 3.147 3.147 0 012.176-2.112zm.28 5.086L14.329 25.6h3.343l-1.074-2.477.648-.56a1.89 1.89 0 00.674-1.443A1.922 1.922 0 0016 19.2c-.186 0-.37.025-.55.073-.61.17-1.091.637-1.278 1.242a1.917 1.917 0 00.582 2.048l.648.56z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "32",
      "height": "32",
      "name": "interface-lock",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"44\" fill=\"none\"><path fill=\"#FFE292\" d=\"M38.812 8.662l2.925 2.926L23.96 29.365a.802.802 0 01-.566.235H20.8v1.6h4.194a.798.798 0 00.566-.235l17.777-17.777-4.526-4.526zm7.354.566l-1.6-1.6a.8.8 0 010 1.13l-1.697 1.698 1.6 1.6 1.697-1.697a.8.8 0 000-1.131z\"/><path fill=\"#5F259F\" d=\"M39.2 28a.8.8 0 00-.8.8v12.8a.8.8 0 01-.8.8H10.4a.8.8 0 01-.8-.8V14.4a.8.8 0 01.8-.8h12.8a.8.8 0 100-1.6H10.4A2.4 2.4 0 008 14.4v27.2a2.4 2.4 0 002.4 2.4h27.2a2.4 2.4 0 002.4-2.4V28.8a.8.8 0 00-.8-.8z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M47.297 8.096l-3.394-3.393a2.4 2.4 0 00-3.394 0L19.903 25.308a2.402 2.402 0 00-.703 1.698V31.2a1.6 1.6 0 001.6 1.6h4.194c.637 0 1.247-.253 1.697-.704l20.606-20.605a2.4 2.4 0 000-3.395zM25.56 30.966a.8.8 0 01-.566.234H20.8v-4.194c0-.213.084-.417.235-.567L38.812 8.662l4.526 4.526L25.56 30.965zm18.909-18.91l1.697-1.697a.8.8 0 000-1.131l-3.394-3.394a.802.802 0 00-1.132 0l-1.697 1.697 4.526 4.526z\" clip-rule=\"evenodd\"/><circle cx=\"13\" cy=\"13\" r=\"13\" fill=\"#FFE292\"/><path fill=\"#5F259F\" d=\"M16.332 10.31c0 .409-.085.813-.256 1.21-.17.388-.392.769-.665 1.144a9.647 9.647 0 01-.905 1.075c-.34.341-.682.677-1.023 1.007-.182.17-.387.375-.615.614-.227.239-.443.478-.648.717a6.504 6.504 0 00-.529.7c-.148.215-.227.397-.239.545h5.255v1.74H9.183a2.722 2.722 0 01-.017-.324v-.307c0-.546.085-1.046.256-1.501a5.89 5.89 0 01.7-1.297c.284-.398.602-.774.955-1.126.352-.353.705-.7 1.058-1.041.273-.262.534-.518.785-.768.25-.25.466-.495.648-.734.193-.25.347-.5.46-.75.114-.262.171-.53.171-.802 0-.592-.17-1.013-.512-1.263-.34-.25-.756-.375-1.245-.375-.319 0-.614.045-.887.136a3.97 3.97 0 00-.734.325 4.12 4.12 0 00-.546.392c-.16.125-.279.227-.358.307l-1.024-1.45a5.58 5.58 0 011.672-1.092 5.113 5.113 0 012.082-.427c1.262 0 2.19.302 2.78.905.604.591.905 1.404.905 2.44z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "48",
      "height": "44",
      "name": "interface-ui-compose-2-numeric",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"none\"><path fill=\"#FFE292\" d=\"M19.257 2.914l1.829 1.829-11.111 11.11a.496.496 0 01-.354.147H8v1h2.621a.5.5 0 00.354-.146l11.11-11.111-2.828-2.829zm4.597.354l-1-1a.5.5 0 010 .706l-1.061 1.061 1 1 1.06-1.06a.5.5 0 000-.707z\"/><path fill=\"#5F259F\" d=\"M19.5 15a.5.5 0 00-.5.5v8a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-17a.5.5 0 01.5-.5h8a.5.5 0 000-1h-8A1.5 1.5 0 000 6.5v17A1.5 1.5 0 001.5 25h17a1.5 1.5 0 001.5-1.5v-8a.5.5 0 00-.5-.5z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M24.56 2.56L22.44.44a1.5 1.5 0 00-2.122 0L7.44 13.317c-.281.281-.44.663-.439 1.06V17a1 1 0 001 1h2.621c.398 0 .78-.158 1.061-.44L24.561 4.682a1.501 1.501 0 000-2.122zM10.976 16.853a.496.496 0 01-.354.147H8v-2.621a.5.5 0 01.146-.354L19.258 2.914l2.829 2.828-11.111 11.111zM22.793 5.035l1.06-1.06a.5.5 0 000-.708l-2.12-2.12a.5.5 0 00-.708 0l-1.06 1.06 2.828 2.828z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "interface-ui-compose-2",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M30.813 4.662l2.925 2.926-17.777 17.777a.802.802 0 01-.566.235H12.8v1.6h4.194a.798.798 0 00.566-.235L35.338 9.188l-4.526-4.526zm7.353.565l-1.6-1.6a.8.8 0 010 1.13l-1.697 1.698 1.6 1.6 1.697-1.697a.8.8 0 000-1.131z\"/><path fill=\"#5F259F\" d=\"M31.2 24a.8.8 0 00-.8.8v12.8a.8.8 0 01-.8.8H2.4a.8.8 0 01-.8-.8V10.4a.8.8 0 01.8-.8h12.8a.8.8 0 100-1.6H2.4A2.4 2.4 0 000 10.4v27.2A2.4 2.4 0 002.4 40h27.2a2.4 2.4 0 002.4-2.4V24.8a.8.8 0 00-.8-.8z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M39.296 4.096L35.902.703a2.4 2.4 0 00-3.394 0L11.902 21.308a2.402 2.402 0 00-.703 1.698V27.2a1.6 1.6 0 001.6 1.6h4.194c.637 0 1.247-.253 1.697-.704L39.296 7.491a2.4 2.4 0 000-3.395zM17.56 26.966a.8.8 0 01-.566.234H12.8v-4.194c0-.213.084-.417.235-.567L30.81 4.662l4.526 4.526-17.778 17.777zm18.909-18.91l1.697-1.697a.8.8 0 000-1.131L34.77 1.834a.802.802 0 00-1.132 0l-1.697 1.697 4.526 4.526z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "interface-ui-compose",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" fill=\"none\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"#F0EFF5\" opacity=\".7\"/><path fill=\"#E8D7E2\" d=\"M82.255 10.696l4.158 3.244 4.406-2.897-3.244 4.158 2.897 4.406-4.157-3.244-4.406 2.897 3.244-4.158-2.898-4.406zM32.265 77l-1.83 4.945 4.097 3.32-4.945-1.83-3.32 4.097 1.83-4.946L24 79.266l4.945 1.83L32.265 77z\"/><path fill=\"#D3285C\" d=\"M65.788 12l.536 3.252 3.252.536-3.252.536-.536 3.252-.536-3.252L62 15.788l3.252-.536.536-3.252z\"/><path fill=\"#E8D7E2\" d=\"M45.599 62.687c14.299 3.297 42.342-20.354 43.441-25.12L81.346 70.93l-35.747-8.244z\"/><path fill=\"#D3285C\" fill-rule=\"evenodd\" d=\"M65.48 40.472a4.891 4.891 0 11-9.538-2.17 4.891 4.891 0 019.538 2.17zm-2.386-.543a2.445 2.445 0 10-4.769-1.085 2.445 2.445 0 004.769 1.085zm3.899 15.937a4.891 4.891 0 119.538 2.17 4.891 4.891 0 01-9.538-2.17zm2.383.542a2.446 2.446 0 104.77 1.086 2.446 2.446 0 00-4.77-1.086z\" clip-rule=\"evenodd\"/><path fill=\"#D3285C\" d=\"M54.336 56.37l24.152-17.958 1.46 1.962-24.153 17.959z\"/><path fill=\"#D3285C\" fill-rule=\"evenodd\" d=\"M24.938 28.081l-13.631 4.783a2.445 2.445 0 00-1.498 3.117l2.429 6.924c5.098-1.79 10.681.894 12.47 5.992 1.789 5.098-.894 10.68-5.992 12.47l2.429 6.923a2.446 2.446 0 003.117 1.498l13.632-4.783-.81-2.307-13.632 4.783-1.701-4.848a12.249 12.249 0 005.264-14.545 12.25 12.25 0 00-13.199-8.07l-1.7-4.846 13.632-4.783-.81-2.308zm17.279 35.591l37.963 8.88a2.445 2.445 0 002.938-1.824l7.8-33.34a2.447 2.447 0 00-1.825-2.938L51.13 25.57l-.557 2.381 37.962 8.88-7.799 33.34-37.962-8.88-.557 2.38z\" clip-rule=\"evenodd\"/><path stroke=\"#D3285C\" stroke-dasharray=\"7.51 1.88\" stroke-width=\"1.22\" d=\"M24.385 28.366l13.607 36.6M51.6 26.02l-9.385 37.538\"/><path fill=\"#D3285C\" d=\"M94.041 33.685l-1.927 2.674 1.915 2.683-2.674-1.928-2.683 1.915 1.927-2.674-1.915-2.683 2.674 1.927 2.683-1.914zM9.759 73.42l-1.436 2.966 2.349 2.312-2.967-1.436-2.312 2.35 1.437-2.968-2.35-2.311 2.967 1.436 2.312-2.35z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "100",
      "height": "100",
      "name": "invalid-coupon",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"29\" height=\"29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.778 21.178c-.046.17-.083.442-.024.77 6.367-1.886 10.826-1.599 16.04.163.091-.139.17-.31.232-.489.015-.044.03-.087.042-.128-3.06-1.525-6.442-1.849-9.43-1.66-2.942.185-5.468.864-6.86 1.344zm16.868.052l.494.08a.5.5 0 00-.259-.521c-3.367-1.794-7.096-2.155-10.306-1.954-3.212.203-5.942.97-7.348 1.477a.5.5 0 00-.272.234c-.2.375-.404 1.244.004 2.218a.5.5 0 00.609.285c6.55-2.021 10.931-1.72 16.218.116a.5.5 0 00.493-.096c.366-.32.575-.786.69-1.117a4.434 4.434 0 00.167-.623l.003-.012v-.006l-.493-.081z\" fill=\"#5F259F\"/><path d=\"M21.893 16.126c-10.83-1.99-15.718.345-17.317 1.159l.41 1.564.95-.588 3.396-1.312 3.486-.316 5.568.5 4.402 1.36 1.233-9.184-1.75 1.263c-.12.513-.056 2-.378 5.554z\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.995 8.79a.5.5 0 01.527-.08l6.775 2.965L14.1 4.493a.5.5 0 01.867.061l3.47 7.237 5.412-3.223a.5.5 0 01.703.474c-.064 1.845-.489 3.891-.596 5.104l-.011.125c-.104 1.174-.22 2.497-.34 4.77a.5.5 0 01-.839.34c-.481-.447-1.49-.881-2.905-1.216-1.39-.33-3.095-.545-4.888-.608-3.61-.127-7.462.368-9.813 1.695a.5.5 0 01-.728-.306L1.838 9.298a.5.5 0 01.157-.509zm1.08 1.254l2.161 8.043c2.598-1.236 6.363-1.65 9.772-1.53 1.846.065 3.617.287 5.083.635.991.234 1.882.535 2.565.906.103-1.764.203-2.898.293-3.916l.01-.124c.09-1.017.501-2.895.562-4.25l-5.12 3.094a.5.5 0 01-.655-.24l-3.302-6.885-4.548 6.802a.5.5 0 01-.617.18l-6.205-2.716z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "29",
      "height": "29",
      "name": "kinghost",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M4.8 33.95l8.732-8.003 7.93 9.253H4.8v-1.25zm18.768 1.25l-5.187-6.05 7.995-7.996 8.824 9.557v4.49H23.568z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M37.6 8H27.568L20.595.25a.833.833 0 00-1.19 0L12.432 8H2.4A2.4 2.4 0 000 10.4v27.2A2.4 2.4 0 002.4 40h35.2a2.4 2.4 0 002.4-2.4V10.4A2.4 2.4 0 0037.6 8zM20 1.983L25.415 8h-10.83L20 1.983zM37.6 38.4a.8.8 0 00.8-.8V10.4a.8.8 0 00-.8-.8H2.4a.8.8 0 00-.8.8v27.2a.8.8 0 00.8.8h35.2z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M4 11.2h32a.8.8 0 01.8.8v24c0 .441-.359.8-.8.8H4a.8.8 0 01-.8-.8V12c0-.443.357-.8.8-.8zm31.2 17.154V12.799H4.8V31.78l8.259-7.57a.802.802 0 011.148.068l3.13 3.652 8.497-8.496a.852.852 0 01.581-.235.804.804 0 01.572.258l8.212 8.897zM4.8 33.95l8.73-8.003 7.93 9.252H4.8v-1.25zm13.581-4.8l5.186 6.05H35.2v-4.49l-8.822-9.556-7.995 7.995z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M12.8 17.6a3.2 3.2 0 11-6.4 0 3.2 3.2 0 016.4 0zm-1.6 0a1.6 1.6 0 10-3.2 0 1.6 1.6 0 003.2 0z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "landscape",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M28.8 17.6h4.8v-8H6.4v16h22.4v-8zm6.399 0h3.2v16h-3.2z\"/><path fill=\"#fff\" d=\"M24.8 30.4a.8.8 0 100-1.6H3.2V7.2a.8.8 0 01.8-.8h32a.8.8 0 01.8.8v6.4a.8.8 0 101.6 0V7.2A2.402 2.402 0 0036 4.8H4a2.402 2.402 0 00-2.4 2.4v21.6H.8a.8.8 0 00-.8.8v1.6c0 2.21 1.79 4 4 4h20.8a.8.8 0 100-1.6H4a2.402 2.402 0 01-2.4-2.4v-.8h23.2z\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M28.8 16h9.6a1.6 1.6 0 011.6 1.6v16a1.6 1.6 0 01-1.6 1.6h-9.6a1.6 1.6 0 01-1.6-1.6v-16a1.6 1.6 0 011.6-1.6zm0 17.6h9.6v-16h-9.6v16z\" clip-rule=\"evenodd\"/><path fill=\"#fff\" d=\"M32.8 32h1.6a.8.8 0 100-1.6h-1.6a.8.8 0 100 1.6z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "laptop-smartphone-2",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 11h3V6H4v10h14v-5zM22 11h2v10h-2z\" fill=\"#D2B6F1\"/><path d=\"M15.5 19a.5.5 0 000-1H2V4.5a.5.5 0 01.5-.5h20a.5.5 0 01.5.5v4a.5.5 0 001 0v-4c0-.828-.672-1.5-1.5-1.5h-20C1.672 3 1 3.672 1 4.5V18H.5a.5.5 0 00-.5.5v1A2.5 2.5 0 002.5 22h13a.5.5 0 000-1h-13c-.828 0-1.5-.672-1.5-1.5V19h14.5z\" fill=\"#5F259F\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18 10h6a1 1 0 011 1v10a1 1 0 01-1 1h-6a1 1 0 01-1-1V11a1 1 0 011-1zm0 11h6V11h-6v10z\" fill=\"#5F259F\"/><path d=\"M20.5 20h1a.5.5 0 000-1h-1a.5.5 0 000 1z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "laptop-smartphone",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"38.08\" y=\"2.24\" width=\"15.68\" height=\"15.68\" rx=\".5\" fill=\"#B482E1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M52.64 0H39.2a3.36 3.36 0 00-3.36 3.36v5.6H5.6a3.36 3.36 0 00-3.36 3.36V50.4a3.36 3.36 0 003.36 3.36h38.08a3.36 3.36 0 003.36-3.36V20.16h5.6A3.36 3.36 0 0056 16.8V3.36A3.36 3.36 0 0052.64 0zM44.8 50.4a1.12 1.12 0 01-1.12 1.12H5.6a1.12 1.12 0 01-1.12-1.12V12.32c0-.619.502-1.12 1.12-1.12h30.24v5.6c.002.5.117.993.336 1.443l-.009.005L22.4 32.016V25.76a1.12 1.12 0 10-2.24 0v8.96c0 .619.502 1.12 1.12 1.12h8.96a1.12 1.12 0 100-2.24h-6.256l13.768-13.768.006-.009c.45.22.942.335 1.442.337h5.6V50.4zm7.84-32.48a1.12 1.12 0 001.12-1.12V3.36a1.12 1.12 0 00-1.12-1.12H39.2a1.12 1.12 0 00-1.12 1.12V16.8c0 .619.502 1.12 1.12 1.12h13.44z\" fill=\"#782DC8\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "layout-inside-element",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"26\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.9 12.5c.004-.502.04-1.003.11-1.5h6.102a5.403 5.403 0 000 3H2.01c-.069-.497-.105-.998-.11-1.5zM18.688 11h6.103c.069.497.105.998.109 1.5-.004.502-.04 1.003-.11 1.5h-6.102c.283-.98.283-2.02 0-3zM14.9 1.11v6.102a5.403 5.403 0 00-3 0V1.11c.497-.069.998-.105 1.5-.109.502.004 1.003.04 1.5.11zM11.9 23.89v-6.102c.98.283 2.02.283 3 0v6.103c-.497.069-.998.105-1.5.109a11.512 11.512 0 01-1.5-.11z\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M.9 12.5C.9 5.596 6.496 0 13.4 0c6.903 0 12.5 5.596 12.5 12.5S20.304 25 13.4 25 .9 19.404.9 12.5zm8 0a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm-7 0c.004-.502.04-1.003.11-1.5h6.102a5.403 5.403 0 000 3H2.01c-.069-.497-.105-.998-.11-1.5zM24.79 11h-6.102c.283.98.283 2.02 0 3h6.103c.069-.497.105-.998.109-1.5a11.493 11.493 0 00-.11-1.5zm-.172-1H18.3l-.005.001a5.515 5.515 0 00-2.396-2.396V1.282A11.527 11.527 0 0124.62 10h-.001zM14.9 7.212V1.11c-.497-.069-.998-.105-1.5-.109-.502.004-1.003.04-1.5.11v6.102a5.403 5.403 0 013 0zm-4-5.93V7.604a5.516 5.516 0 00-2.395 2.397L8.5 10H2.182A11.527 11.527 0 0110.9 1.282zM8.5 15H2.182a11.527 11.527 0 008.718 8.718V17.395a5.512 5.512 0 01-2.395-2.396L8.5 15zm3.4 8.89v-6.102c.98.283 2.02.283 3 0v6.103c-.497.069-.998.105-1.5.109a11.512 11.512 0 01-1.5-.11zm4-6.49v6.318A11.527 11.527 0 0024.618 15H18.295a5.514 5.514 0 01-2.396 2.395v.005z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "26",
      "height": "25",
      "name": "life-buoy",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M22.56 10.552h-1.92v9.608a.48.48 0 01-.48.48H.96v1.92c0 .265.215.48.48.48h21.12a.48.48 0 00.48-.48V11.032a.48.48 0 00-.48-.48z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M22.56 9.592h-1.705L12.357.15a.5.5 0 00-.714 0L3.145 9.592H1.44A1.44 1.44 0 000 11.032V22.56C0 23.355.645 24 1.44 24h21.12A1.44 1.44 0 0024 22.56V11.032a1.44 1.44 0 00-1.44-1.44zM12 1.189l7.561 8.403H4.438L12 1.189zM22.56 23.04a.48.48 0 00.48-.48V11.032a.48.48 0 00-.48-.48H1.44a.48.48 0 00-.48.48V22.56c0 .265.215.48.48.48h21.12z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" d=\"M17.76 14.392H6.24a.48.48 0 000 .96h11.52a.48.48 0 000-.96zm-1.92 3.84H8.16a.48.48 0 000 .96h7.68a.48.48 0 000-.96z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "24",
      "height": "24",
      "name": "market-sign",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.736 3.057A7.84 7.84 0 0122 5.108c0 7.083-11.5 14.784-11.5 14.784a43.367 43.367 0 01-8.307-7.574C5.133 17.901 12.5 22.892 12.5 22.892S24 15.192 24 8.108a5.94 5.94 0 00-2.264-5.051z\" fill=\"#D8D6E5\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 11.107h2.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H14v2.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2.5H8.5a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5H11v-2.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2.5zm-1 2h3v-1h-3v-3h-1v3H9v1h3v3h1v-3z\" fill=\"#6F647A\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.505 4.456c1.128-1.322 3.298-3.349 5.995-3.349 3.888 0 6.5 2.813 6.5 7 0 7.467-11.277 15.224-11.92 15.667l-.013.009-.57.324-.568-.395-.025-.017C11.144 23.168 0 15.447 0 8.107c0-4.187 2.612-7 6.5-7 2.725 0 4.884 2.025 6.005 3.35zM1 8.107c0 7 11.5 14.784 11.5 14.784S24 15.191 24 8.107c0-3.5-2-6-5.5-6-3.417 0-6 4-6 4s-2.542-4-6-4c-3.5 0-5.5 2.5-5.5 6z\" fill=\"#6F647A\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "26",
      "name": "medical-assistance",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.075 8.896l1.876-.287.528-.08.227-.483.794-1.692.794 1.692.227.483.528.08 1.876.287-1.391 1.426-.352.361.081.498.318 1.947-1.597-.882-.484-.268-.484.268-1.597.882.318-1.947.081-.498-.352-.361-1.391-1.426z\" fill=\"#D2B6F1\"/><path d=\"M22 3v13H2v1h21V3h-1zM9 18h7v1H9z\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2 2h21a1 1 0 011 1v14a1 1 0 01-1 1h-6v7l-4.5-2L8 25v-7H2a1 1 0 01-1-1V3a1 1 0 011-1zm10 16H9v5.461l3-1.333V18zm4 5.461l-3-1.333V18h3v5.461zM2 17h21V3H2v14z\" fill=\"#5F259F\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.5 13.121L9.1 15l.65-3.98L7 8.202l3.8-.58L12.5 4l1.7 3.621 3.8.58-2.75 2.819.65 3.98-3.4-1.879zM10.951 8.61l-1.876.287 1.39 1.426.353.361-.081.498-.318 1.948 1.597-.883.484-.268.484.268 1.597.882-.318-1.947-.081-.498.352-.361 1.391-1.426-1.876-.287-.528-.08-.227-.483-.794-1.692-.794 1.692-.227.483-.528.08z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "membership-card",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"58\" height=\"56\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M29 50L2 45.5V48l28 6 2.5-3-1-49H29v48z\"/><path stroke=\"#5F259F\" stroke-linecap=\"round\" stroke-width=\"2.5\" d=\"M2 46.86V8.167c0-.966.69-1.793 1.64-1.968l26-4.766A2 2 0 0132 3.4v48.66a2 2 0 01-2.392 1.962l-26-5.2A2 2 0 012 46.86z\"/><path fill=\"#D2B6F1\" stroke=\"#5F259F\" stroke-width=\"1.874\" d=\"M9.503 37.898v.788l.776.135 12.06 2.102 1.097.19v-7.981l-.865-.067-5.933-.453v-2.68l4.866-.027.932-.005v-6.842l-.942.005-4.856.026v-2.653h7.298v-6.884l-.972.037-12.56.474-.901.034V37.9z\"/><mask id=\"a\" fill=\"#fff\"><path fill-rule=\"evenodd\" d=\"M35 11h20a3 3 0 013 3v28a3 3 0 01-3 3H35v-5.034l1.485.892a1 1 0 001.34-.293l6.5-9.5a1 1 0 00-1.65-1.13l-5.968 8.723-1.693-1.015-.014-.009V27.568l2.753 3.096a.999.999 0 101.494-1.328l-4-4.5a.983.983 0 00-.247-.202v-6.768l.014-.008 1.83-1.099 2.449 2.448a1 1 0 001.414-1.414l-3-3a.999.999 0 00-1.222-.15l-1.485.89V11zm9.695 4.407A.998.998 0 0145.5 15H53a1 1 0 011 1v8c0 .234-.082.46-.232.64l-2.5 3a1 1 0 11-1.536-1.28L52 23.638V17h-5.995l-6.7 9.093a1 1 0 11-1.61-1.186l7-9.5zm-.63 9.268a1 1 0 00-1.13 1.65L52 32.528v6.533l-6.565.41-2.676-3.122a1 1 0 10-1.518 1.302l3 3.5a.998.998 0 00.821.347l8-.5A1 1 0 0054 40v-8a1 1 0 00-.435-.825l-9.5-6.5z\" clip-rule=\"evenodd\"/></mask><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M35 11h20a3 3 0 013 3v28a3 3 0 01-3 3H35v-5.034l1.485.892a1 1 0 001.34-.293l6.5-9.5a1 1 0 00-1.65-1.13l-5.968 8.723-1.693-1.015-.014-.009V27.568l2.753 3.096a.999.999 0 101.494-1.328l-4-4.5a.983.983 0 00-.247-.202v-6.768l.014-.008 1.83-1.099 2.449 2.448a1 1 0 001.414-1.414l-3-3a.999.999 0 00-1.222-.15l-1.485.89V11zm9.695 4.407A.998.998 0 0145.5 15H53a1 1 0 011 1v8c0 .234-.082.46-.232.64l-2.5 3a1 1 0 11-1.536-1.28L52 23.638V17h-5.995l-6.7 9.093a1 1 0 11-1.61-1.186l7-9.5zm-.63 9.268a1 1 0 00-1.13 1.65L52 32.528v6.533l-6.565.41-2.676-3.122a1 1 0 10-1.518 1.302l3 3.5a.998.998 0 00.821.347l8-.5A1 1 0 0054 40v-8a1 1 0 00-.435-.825l-9.5-6.5z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" d=\"M35 11v-1h-1v1h1zm0 34h-1v1h1v-1zm0-5.034l.514-.857L34 38.2v1.766h1zm1.485.892l-.514.857.514-.857zm1.34-.293l.825.565-.825-.565zm6.5-9.5L43.5 30.5l.825.565zm-.26-1.39l.564-.826-.564.826zm-1.39.26l.825.565-.825-.565zm-5.968 8.723l-.515.857L37 40l.532-.777-.825-.565zm-1.693-1.015l-.514.857.514-.857zM35 37.634h-1v.577l.5.289.5-.866zm0-10.066l.747-.665L34 24.938v2.63h1zm2.753 3.096l-.748.665.748-.665zm1.494-1.328L38.5 30l.747-.664zm-4-4.5l.748-.665-.748.665zM35 24.634h-1v.577l.5.289.5-.866zm0-6.768l-.508-.862-.492.29v.572h1zm.014-.008l.508.861.007-.004-.515-.857zm1.83-1.099l.708-.707L37 15.5l-.67.402.515.857zm2.449 2.448L40 18.5l-.707.707zm1.414-1.414L40 18.5l.707-.707zm-3-3l.707-.707-.707.707zm-1.222-.15l-.514-.858.514.857zm-1.485.89h-1V17.3l1.514-.909-.514-.857zm9.695-.126l-.805-.593.805.593zm9.073 9.233L53 24l.768.64zm-2.5 3l.768.64-.768-.64zm-1.536-1.28l-.769-.64.769.64zM52 23.638l.768.64L53 24v-.362h-1zM52 17h1v-1h-1v1zm-5.995 0v-1H45.5l-.3.407.805.593zm-6.7 9.093L38.5 25.5l.805.593zm-1.61-1.186l-.805-.593.805.593zm4.98.028l.825.565-.825-.565zm1.39-.26l-.565.825.565-.825zm-1.13 1.65l.565-.825-.565.825zM52 32.528h1V32l-.435-.298-.565.826zm0 6.533l.062.998L53 40v-.94h-1zm-6.565.41l-.76.65.325.38.497-.032-.062-.998zm-2.676-3.122L42 37l.76-.65zm-1.518 1.302l-.76.65.76-.65zm3 3.5l-.76.65.76-.65zm.821.347L45 40.5l.062.998zm8-.5l.063.998-.063-.998zm.503-9.823L53 32l.565-.825zM55 10H35v2h20v-2zm4 4c0-2.21-1.79-4-4-4v2a2 2 0 012 2h2zm0 28V14h-2v28h2zm-4 4c2.21 0 4-1.79 4-4h-2a2 2 0 01-2 2v2zm-20 0h20v-2H35v2zm-1-6.034V45h2v-5.034h-2zM37 40l-1.486-.891-1.029 1.715 1.486.891L37 40zm0 0l-1.03 1.715a2 2 0 002.68-.586L37 40zm6.5-9.5L37 40l1.65 1.13 6.5-9.5-1.65-1.13zm0 0l1.65 1.13a2 2 0 00-.52-2.78L43.5 30.5zm0 0l1.13-1.65a2 2 0 00-2.78.52l1.65 1.13zm-5.968 8.723L43.5 30.5l-1.65-1.13-5.969 8.723 1.65 1.13zM34.5 38.5l1.692 1.015 1.03-1.715-1.693-1.015-1.03 1.715zm0 0l1.029-1.715-.029-.017-1 1.732zM34 27.568v10.066h2V27.568h-2zM38.5 30l-2.753-3.097-1.494 1.33 2.752 3.096L38.5 30zm0 0l-1.495 1.329a2 2 0 002.824.166L38.5 30zm0 0l1.329 1.495a2 2 0 00.166-2.824L38.5 30zm-4-4.5l4 4.5 1.495-1.329-4-4.5L34.5 25.5zm0 0l1.495-1.329a2 2 0 00-.495-.403l-1 1.732zm-.5-7.634v6.768h2v-6.768h-2zm.507-.87l-.014.008 1.014 1.724.015-.009-1.015-1.723zm1.823-1.094L34.5 17l1.029 1.715 1.83-1.098-1.029-1.715zM40 18.5l-2.448-2.448-1.414 1.414 2.448 2.448L40 18.5zm0 0l-1.414 1.414a2 2 0 002.828 0L40 18.5zm0 0l1.414 1.414a2 2 0 000-2.828L40 18.5zm-3-3l3 3 1.414-1.414-3-3L37 15.5zm0 0l1.414-1.414a1.999 1.999 0 00-2.443-.301L37 15.5zm-1.486.891L37 15.5l-1.03-1.715-1.484.891 1.029 1.715zM34 11v4.534h2V11h-2zm11.5 3c-.636 0-1.233.302-1.61.814L45.5 16v-2zm7.5 0h-7.5v2H53v-2zm2 2a2 2 0 00-2-2v2h2zm0 8v-8h-2v8h2zm-.464 1.28c.3-.36.464-.812.464-1.28h-2l1.536 1.28zm-2.5 3l2.5-3L53 24l-2.5 3 1.536 1.28zm-2.817.256c.849.708 2.11.593 2.817-.256L50.5 27l-1.28 1.536zm-.256-2.816a2 2 0 00.256 2.816L50.5 27l-1.536-1.28zm2.269-2.722l-2.269 2.722L50.5 27l2.268-2.722-1.536-1.28zM51 17v6.638h2V17h-2zm-4.995 1H52v-2h-5.995v2zm-5.895 8.686l6.7-9.093-1.61-1.186-6.7 9.093 1.61 1.186zm-2.797.424a2 2 0 002.797-.424L38.5 25.5l-1.187 1.61zm-.423-2.796a1.999 1.999 0 00.423 2.796L38.5 25.5l-1.61-1.186zm7-9.5l-7 9.5L38.5 25.5l7-9.5-1.61-1.186zM43.5 25.5l1.13-1.65a2 2 0 00-2.78.52l1.65 1.13zm0 0l-1.65-1.13a2 2 0 00.52 2.78l1.13-1.65zm9.065 6.202L43.5 25.5l-1.13 1.65 9.065 6.203 1.13-1.65zM53 39.061v-6.533h-2v6.533h2zm-7.503 1.408l6.565-.41-.124-1.996-6.566.41.125 1.996zM42 37l2.676 3.122 1.518-1.302-2.676-3.121L42 37zm0 0l1.518-1.301a1.998 1.998 0 00-2.82-.217L42 37zm0 0l-1.302-1.518a2.001 2.001 0 00-.217 2.82L42 37zm3 3.5L42 37l-1.519 1.302 3 3.5L45 40.5zm0 0l-1.519 1.302a2.003 2.003 0 001.644.694L45 40.5zm8-.5l-8 .5.125 1.996 8-.5L53 40zm0 0l.125 1.996A2 2 0 0055 40h-2zm0-8v8h2v-8h-2zm0 0h2a2 2 0 00-.87-1.65L53 32zm-9.5-6.5L53 32l1.13-1.65-9.5-6.5-1.13 1.65z\" mask=\"url(#a)\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "58",
      "height": "56",
      "name": "microsoft-exchange",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"41\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M35.2 12.59V20a.8.8 0 01-.8.8H20.8v.803c.001.442.36.8.8.8h16a.8.8 0 00.8-.8v-11.05l-3.2 2.036z\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M28.8 8.004h8.8a2.4 2.4 0 012.4 2.4v11.2a2.4 2.4 0 01-2.4 2.4h-8.8v13.6a2.4 2.4 0 01-2.4 2.4H7.2a2.4 2.4 0 01-2.4-2.4v-35.2a2.4 2.4 0 012.4-2.4h19.2a2.4 2.4 0 012.4 2.4v5.6zm.8 6.251l7.31-4.651H22.291l7.31 4.651zm-2.4 23.349a.8.8 0 01-.8.8H7.2a.802.802 0 01-.8-.8v-35.2c.001-.442.36-.8.8-.8h19.2a.8.8 0 01.8.8v5.6h-5.6a2.4 2.4 0 00-2.4 2.4v11.2a2.4 2.4 0 002.4 2.4h5.6v13.6zm-5.6-15.2h16a.8.8 0 00.8-.8V10.552l-8.37 5.327a.799.799 0 01-.859 0l-8.37-5.327v11.052a.8.8 0 00.8.8z\" clip-rule=\"evenodd\"/><path fill=\"#fff\" d=\"M18.4 33.603h-3.2a.801.801 0 000 1.6h3.2a.8.8 0 100-1.6z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "41",
      "name": "mobile-email",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"24\" height=\"18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22.56 1.32h-1.44V13.8a.48.48 0 01-.48.48H.96v1.44c0 .265.215.48.48.48h21.12a.48.48 0 00.48-.48V1.8a.48.48 0 00-.48-.48z\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.32 9c0 2.916-1.934 5.28-4.32 5.28S7.68 11.916 7.68 9c0-2.916 1.934-5.28 4.32-5.28S16.32 6.084 16.32 9zm-.96 0c0-2.382-1.507-4.32-3.36-4.32S8.64 6.618 8.64 9c0 2.382 1.507 4.32 3.36 4.32s3.36-1.938 3.36-4.32z\" fill=\"#5F259F\"/><path d=\"M18.72 4.68h1.92a.48.48 0 000-.96h-1.92a.48.48 0 100 .96zM3.36 14.28h1.92a.48.48 0 100-.96H3.36a.48.48 0 000 .96z\" fill=\"#5F259F\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M.96.84h22.08c.53 0 .96.43.96.96v14.4c0 .53-.43.96-.96.96H.96A.96.96 0 010 16.2V1.8C0 1.27.43.84.96.84zm0 15.36h22.08V1.8H.96v14.4z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "24",
      "height": "18",
      "name": "money",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M23.68 0a3.204 3.204 0 00-3.2 3.2v3.856A3.157 3.157 0 0016 7.7a3.157 3.157 0 00-4.48-.644V5.76a3.2 3.2 0 10-6.4 0v12.16a8.941 8.941 0 003.622 7.18l-.03.051-1.247 2.126a2.557 2.557 0 001.684 3.802c2.463.541 4.97.85 7.49.921a27.373 27.373 0 006.36-.86 2.557 2.557 0 001.584-3.78l-1.297-2.21-.03-.05a8.942 8.942 0 003.623-7.18V3.2a3.204 3.204 0 00-3.2-3.2zm-5.12 7.68c1.06 0 1.92.86 1.92 1.92v3.2h-3.84V9.6c0-1.06.859-1.92 1.92-1.92zm-5.12 0c1.06 0 1.92.86 1.92 1.92v3.2h-1.92c-.694 0-1.368.224-1.92.641V9.6c0-1.06.859-1.92 1.92-1.92zm10.039 20.329a1.277 1.277 0 01-.789 1.89 26.161 26.161 0 01-6.05.821 39.392 39.392 0 01-7.233-.894 1.277 1.277 0 01-.839-1.901l1.249-2.126c.293.158.594.298.902.421.092.038.186.068.279.102a8.873 8.873 0 001.017.308c.232.056.468.1.707.136.105.016.208.036.314.048.346.042.694.064 1.043.066h3.84a8.99 8.99 0 001.044-.066c.106-.012.209-.032.314-.048A8.52 8.52 0 0021 26.322c.093-.034.187-.065.278-.102.309-.123.61-.264.903-.42l1.297 2.209zm2.12-10.089a7.676 7.676 0 01-3.96 6.717l-.069.037a7.9 7.9 0 01-3.65.926h-3.84a7.842 7.842 0 01-3.72-.963A7.676 7.676 0 016.4 17.92V5.76a1.92 1.92 0 113.84 0V16a3.204 3.204 0 003.2 3.2h6.4a.64.64 0 100-1.28h-6.4a1.92 1.92 0 010-3.84h10.88c.706 0 1.28.573 1.28 1.28v2.56zm-3.84-5.12V3.2a1.92 1.92 0 013.84 0v9.6h-3.84z\" fill=\"#00D1AB\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "32",
      "height": "32",
      "name": "music-rock",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M23.04 7.68v20.48H5.12v2.56h19.84a.64.64 0 00.64-.64V7.68h-2.56z\" fill=\"#9EFFED\"/><path d=\"M24.958 3.84h-2.56a.64.64 0 01.64.64V6.4h2.56V4.48a.64.64 0 00-.64-.64z\" fill=\"#00D1AB\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M24.96 2.56h-1.92V.64a.64.64 0 10-1.28 0v1.92h-5.12V.64a.64.64 0 10-1.28 0v1.92h-5.12V.64a.64.64 0 10-1.28 0v1.92H7.04a1.922 1.922 0 00-1.92 1.92v25.6A1.922 1.922 0 007.04 32h17.92a1.922 1.922 0 001.92-1.92V4.48a1.922 1.922 0 00-1.92-1.92zm.64 27.52a.64.64 0 01-.64.64H7.04a.64.64 0 01-.64-.64V7.68h19.2v22.4zM6.4 6.4V4.48a.64.64 0 01.64-.64h17.92a.64.64 0 01.64.64V6.4H6.4z\" fill=\"#00D1AB\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.439 14.08h7.68a.64.64 0 100-1.28h-7.68a.64.64 0 000 1.28z\" fill=\"#00D1AB\"/><path d=\"M10.878 14.08a.64.64 0 100-1.28.64.64 0 000 1.28z\" fill=\"#00D1AB\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.439 19.2h7.68a.64.64 0 100-1.28h-7.68a.64.64 0 000 1.28z\" fill=\"#00D1AB\"/><path d=\"M10.878 19.2a.64.64 0 100-1.28.64.64 0 000 1.28z\" fill=\"#00D1AB\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.439 24.32h7.68a.64.64 0 100-1.28h-7.68a.64.64 0 000 1.28z\" fill=\"#00D1AB\"/><path d=\"M10.878 24.32a.64.64 0 100-1.28.64.64 0 000 1.28z\" fill=\"#00D1AB\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.398 6.4V4.48a.64.64 0 01.64-.64h17.92a.64.64 0 01.64.64V6.4h-19.2z\" fill=\"#9EFFED\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "32",
      "height": "32",
      "name": "notes-notes-list",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"56\" height=\"56\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M53.76 41.44a1.12 1.12 0 01-1.12 1.12H3.36a1.12 1.12 0 01-1.12-1.12v-5.6h51.52v5.6z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M3.36 0h49.28A3.363 3.363 0 0156 3.36v38.08a3.363 3.363 0 01-3.36 3.36H34.048l1.344 6.72H39.2a1.12 1.12 0 110 2.24H16.8a1.12 1.12 0 110-2.24h3.808l1.344-6.72H3.36A3.363 3.363 0 010 41.44V3.36A3.363 3.363 0 013.36 0zm19.533 51.52h10.214l-1.344-6.72h-7.526l-1.344 6.72zM53.76 41.44a1.12 1.12 0 01-1.12 1.12H3.36a1.12 1.12 0 01-1.12-1.12v-5.6h51.52v5.6zM2.24 33.6h51.52V3.36a1.12 1.12 0 00-1.12-1.12H3.36a1.12 1.12 0 00-1.12 1.12V33.6z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" d=\"M10.08 20.16a1.12 1.12 0 00-1.12 1.12V28a1.12 1.12 0 002.24 0v-6.72c0-.619-.5-1.12-1.12-1.12zm8.96-11.2a1.12 1.12 0 00-1.12 1.12V28a1.12 1.12 0 102.24 0V10.08a1.12 1.12 0 00-1.12-1.12zM28 22.4a1.12 1.12 0 00-1.12 1.12V28a1.12 1.12 0 002.24 0v-4.48c0-.619-.5-1.12-1.12-1.12zm8.96-8.96a1.12 1.12 0 00-1.12 1.12V28a1.12 1.12 0 102.24 0V14.56a1.12 1.12 0 00-1.12-1.12zm8.96 4.48a1.12 1.12 0 00-1.12 1.12V28a1.12 1.12 0 002.24 0v-8.96c0-.619-.5-1.12-1.12-1.12z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "online-stock",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.5 12.5L10 11V1h2.5v11.5z\" fill=\"#D2B6F1\"/><path d=\"M22.5 3H20v17.5a.5.5 0 01-.5.5H2v2.5a.5.5 0 00.5.5h20a.5.5 0 00.5-.5v-20a.5.5 0 00-.5-.5z\" fill=\"#D2B6F1\"/><path d=\"M22.5 2h-8a.5.5 0 000 1h8a.5.5 0 01.5.5v20a.5.5 0 01-.5.5h-20a.5.5 0 01-.5-.5v-20a.5.5 0 01.5-.5h2a.5.5 0 000-1h-2A1.5 1.5 0 001 3.5v20A1.5 1.5 0 002.5 25h20a1.5 1.5 0 001.5-1.5v-20A1.5 1.5 0 0022.5 2z\" fill=\"#5F259F\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.757 12.928a.496.496 0 01-.61-.075A.5.5 0 016 12.5V1.5A1.5 1.5 0 017.5 0h4A1.5 1.5 0 0113 1.5v11a.5.5 0 01-.757.428L9.5 11l-2.743 1.928zM7.5 1a.5.5 0 00-.5.5v10.035l1.925-1.353a1 1 0 011.15 0L12 11.535V1.5a.5.5 0 00-.5-.5h-4z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "page-mark",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M20.16 3.84v12a.48.48 0 01-.48.48H1.92v1.44c0 .265.215.48.48.48h19.2a.48.48 0 00.48-.48V3.84h-1.92z\"/><path fill=\"#39264F\" fill-rule=\"evenodd\" d=\"M.48 2.88h23.04a.48.48 0 010 .96h-.48v13.92c0 .795-.645 1.439-1.44 1.44h-7.078l1.737 3.127a.478.478 0 01-.419.712.481.481 0 01-.42-.246L13.424 19.2h-2.848L8.58 22.793a.482.482 0 01-.882-.101.48.48 0 01.042-.365L9.478 19.2H2.4a1.441 1.441 0 01-1.44-1.44V3.84H.48a.48.48 0 010-.96zM21.6 18.24a.48.48 0 00.48-.48V3.84H1.92v13.92c0 .265.215.48.48.48h19.2z\" clip-rule=\"evenodd\"/><path fill=\"#39264F\" d=\"M4.8 14.88c.128 0 .25-.05.34-.141l4.46-4.46 3.5 3.5a.482.482 0 00.68 0l4.46-4.46v1.72a.48.48 0 10.96 0V8.16a.48.48 0 00-.48-.48h-2.88a.48.48 0 000 .96h1.721l-4.12 4.122-3.501-3.5a.48.48 0 00-.68 0l-4.8 4.8a.48.48 0 00.34.819z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "24",
      "height": "24",
      "name": "performance-board",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.425 10.853L4.999 18.745 5 22.015l15.007-9.531-2.582-1.631z\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.293 2.287a.989.989 0 011.233-.13l15.016 9.514a.979.979 0 010 1.658L5.526 22.844A.991.991 0 014 22.014V2.986c0-.262.106-.514.293-.698zm15.714 10.197L4.996 3.004 5 22.015l15.007-9.53z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "play-2",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"26\" fill=\"none\"><path fill=\"#D8D6E5\" d=\"M20 1.728v15h-2.5a2.5 2.5 0 00-2.5 2.5.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5 2.5 2.5 0 00-2.5-2.5H4v1h3.5a1.5 1.5 0 011.5 1.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a1.5 1.5 0 011.5-1.5H21v-16h-1z\"/><path fill=\"#D8D6E5\" d=\"M22.5 18.727H22v4.5a.5.5 0 01-.5.5H2v.5a.5.5 0 00.5.5h20a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5z\"/><path fill=\"#6F647A\" d=\"M9.5 11.727H12v2.5a.5.5 0 101 0v-2.5h2.5a.5.5 0 100-1H13v-2.5a.5.5 0 00-1 0v2.5H9.5a.5.5 0 000 1z\"/><path fill=\"#6F647A\" fill-rule=\"evenodd\" d=\"M22.5 17.727H22v-15.5a1.5 1.5 0 00-1.5-1.5h-16a1.5 1.5 0 00-1.5 1.5v15.5h-.5a1.5 1.5 0 00-1.5 1.5v5a1.5 1.5 0 001.5 1.5h20a1.5 1.5 0 001.5-1.5v-5a1.5 1.5 0 00-1.5-1.5zM4 2.227a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v15.5h-3.5a1.5 1.5 0 00-1.5 1.5v1a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-1a1.5 1.5 0 00-1.5-1.5H4v-15.5zm18.5 22.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v1a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-1a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h20z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "26",
      "name": "project-file-plus-2",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M20 1v15h-2.5a2.5 2.5 0 00-2.5 2.5.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5A2.5 2.5 0 007.5 16H4v1h3.5A1.5 1.5 0 019 18.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a1.5 1.5 0 011.5-1.5H21V1h-1z\"/><path fill=\"#9EFFED\" d=\"M22.5 18H22v4.5a.5.5 0 01-.5.5H2v.5a.5.5 0 00.5.5h20a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5z\"/><path fill=\"#fff\" d=\"M9.5 11H12v2.5a.5.5 0 001 0V11h2.5a.5.5 0 000-1H13V7.5a.5.5 0 00-1 0V10H9.5a.5.5 0 000 1z\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M22.5 17H22V1.5A1.5 1.5 0 0020.5 0h-16A1.5 1.5 0 003 1.5V17h-.5A1.5 1.5 0 001 18.5v5A1.5 1.5 0 002.5 25h20a1.5 1.5 0 001.5-1.5v-5a1.5 1.5 0 00-1.5-1.5zM4 1.5a.5.5 0 01.5-.5h16a.5.5 0 01.5.5V17h-3.5a1.5 1.5 0 00-1.5 1.5v1a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-1A1.5 1.5 0 007.5 17H4V1.5zM22.5 24a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v1a1.5 1.5 0 01-1.5 1.5h-6A1.5 1.5 0 018 19.5v-1a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h20z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "project-file-plus-3",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"none\"><path fill=\"#FFE292\" d=\"M20 1v15h-2.5a2.5 2.5 0 00-2.5 2.5.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5A2.5 2.5 0 007.5 16H4v1h3.5A1.5 1.5 0 019 18.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a1.5 1.5 0 011.5-1.5H21V1h-1z\"/><path fill=\"#FFE292\" d=\"M22.5 18H22v4.5a.5.5 0 01-.5.5H2v.5a.5.5 0 00.5.5h20a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5z\"/><path fill=\"#6F647A\" d=\"M9.5 11H12v2.5a.5.5 0 001 0V11h2.5a.5.5 0 000-1H13V7.5a.5.5 0 00-1 0V10H9.5a.5.5 0 000 1z\"/><path fill=\"#6F647A\" fill-rule=\"evenodd\" d=\"M22.5 17H22V1.5A1.5 1.5 0 0020.5 0h-16A1.5 1.5 0 003 1.5V17h-.5A1.5 1.5 0 001 18.5v5A1.5 1.5 0 002.5 25h20a1.5 1.5 0 001.5-1.5v-5a1.5 1.5 0 00-1.5-1.5zM4 1.5a.5.5 0 01.5-.5h16a.5.5 0 01.5.5V17h-3.5a1.5 1.5 0 00-1.5 1.5v1a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-1A1.5 1.5 0 007.5 17H4V1.5zM22.5 24a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v1a1.5 1.5 0 01-1.5 1.5h-6A1.5 1.5 0 018 19.5v-1a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h20z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "project-file-plus",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26\" height=\"26\" fill=\"none\"><path fill=\"#6F647A\" fill-rule=\"evenodd\" d=\"M16.726 24.343a11.99 11.99 0 008.253-11.382 11.957 11.957 0 00-3.515-8.485l-.682.682a11.065 11.065 0 11-4.53-2.742l.285-.918a11.989 11.989 0 10.189 22.845zm-10.31-8.425a7.199 7.199 0 1011.652-8.047l.682-.68a8.164 8.164 0 01.65 10.808 8.164 8.164 0 01-10.652 1.95 8.165 8.165 0 016.651-14.784l-.285.918a7.198 7.198 0 00-8.697 9.834zm8.938-5.332a3.358 3.358 0 11-2.375-.985c.337.004.671.06.991.166l.284-.913a4.286 4.286 0 00-1.275-.213 4.32 4.32 0 103.055 1.265l-.68.68zm4.825-7.705a.96.96 0 11-1.92 0 .96.96 0 011.92 0z\" clip-rule=\"evenodd\"/><path fill=\"#6F647A\" d=\"M24.98 12.96h-.5.5zm-8.254 11.383l-.155-.475.155.475zm4.738-19.867l.353-.354-.353-.353-.353.353.353.354zm-.682.682l-.354-.354-.353.354.353.353.354-.353zm.879 14.648l-.394-.308.394.308zM7.225 22.445l.259-.428-.259.428zM2.866 8.432l-.455-.205.455.205zm13.386-6.016l-.15.478.479.149.148-.479-.477-.148zm.285-.918l.477.148.149-.478-.478-.148-.148.478zM3.219 6.002l.407.29-.407-.29zm.117 14.058l.402-.296-.402.296zm9.643.1v-.5.5zm-6.563-4.242l.456-.206-.456.206zm13.215-.2l.462.19-.462-.19zm-1.564-7.846l-.353-.353-.354.353.354.354.353-.354zm.682-.68l.353-.354-.353-.354-.354.354.354.353zM8.747 19.95l-.259.427.259-.427zM5.525 9.612l.456.206-.456-.206zm9.873-4.446l.478.148.148-.477-.477-.149-.149.478zm-.285.918l-.148.477.478.148.148-.477-.478-.148zM7.588 8.19l-.375-.331.375.331zm7.766 2.395L15 10.233l-.353.353.353.353.354-.353zm-3.663 5.475l-.192.462.191-.462zm-2.007-3.759l-.49-.098.49.098zM12.979 9.6l.007-.5h-.007v.5zm.991.166l-.157.475.484.16.15-.487-.477-.148zm.284-.913l.477.148.146-.47-.467-.153-.156.475zm-1.275-.213l.007-.5h-.007v.5zm-4.237 3.477l.49.098-.49-.098zm2.584 4.834l.191-.462-.19.462zm5.245-1.591l.416.277-.416-.277zm-.537-5.455l.353-.354-.353-.353-.354.354.354.353zm8.445 3.054a11.491 11.491 0 01-7.908 10.908l.311.95a12.49 12.49 0 008.597-11.857h-1zm-3.368-8.13a11.46 11.46 0 013.368 8.13l1 .001a12.463 12.463 0 00-3.662-8.84l-.706.709zm.024.682l.683-.683-.707-.707-.683.682.707.708zm.92 14.603a11.564 11.564 0 00-.92-15.31l-.707.706a10.566 10.566 0 01.84 13.987l.786.617zm-15.09 2.758a11.564 11.564 0 0015.088-2.757l-.787-.617a10.564 10.564 0 01-13.783 2.519l-.518.855zM2.411 8.227a11.564 11.564 0 004.555 14.645l.518-.855a10.566 10.566 0 01-4.162-13.38l-.911-.41zM16.4 1.939A11.565 11.565 0 002.41 8.227l.911.41a10.563 10.563 0 0112.78-5.743l.299-.955zm-.342-.59l-.285.92.955.295.285-.918-.955-.297zM3.626 6.292A11.492 11.492 0 0116.39 1.975l.296-.955A12.492 12.492 0 002.81 5.712l.815.58zm.112 13.472a11.491 11.491 0 01-.112-13.472l-.815-.58a12.49 12.49 0 00.122 14.645l.805-.593zm12.833 4.104a11.492 11.492 0 01-12.833-4.104l-.805.593a12.489 12.489 0 0013.95 4.46l-.312-.95zm-3.592-4.207a6.698 6.698 0 01-6.107-3.949l-.912.411a7.7 7.7 0 007.019 4.538v-1zm6.19-4.135a6.697 6.697 0 01-6.19 4.135v1a7.7 7.7 0 007.114-4.752l-.924-.383zm-1.455-7.3a6.698 6.698 0 011.455 7.3l.924.383a7.696 7.696 0 00-1.673-8.39l-.706.707zm.681-1.388l-.681.68.707.708.681-.681-.707-.707zm1.397 11.47a8.664 8.664 0 00-.69-11.47l-.707.707a7.665 7.665 0 01.61 10.147l.787.617zm-11.304 2.07a8.665 8.665 0 0011.304-2.07l-.787-.616a7.666 7.666 0 01-10 1.83l-.517.857zm-3.42-10.97a8.665 8.665 0 003.42 10.97l.518-.855a7.666 7.666 0 01-3.025-9.705l-.912-.41zm10.479-4.72a8.666 8.666 0 00-10.478 4.72l.912.41a7.665 7.665 0 019.269-4.175l.297-.955zm.044 1.544l.285-.918-.955-.297-.285.919.955.296zm-7.629 2.29a6.698 6.698 0 017.003-1.96l.296-.956A7.702 7.702 0 007.213 7.86l.75.662zm-1.09 7.19a6.701 6.701 0 011.09-7.19l-.749-.662a7.701 7.701 0 00-1.253 8.263l.912-.41zm9.312-.607a3.858 3.858 0 00-.476-4.872l-.708.706a2.859 2.859 0 01.353 3.61l.831.556zM11.5 16.523c1.7.705 3.662.112 4.685-1.418l-.83-.556a2.86 2.86 0 01-3.472 1.05l-.383.924zm-2.305-4.319a3.859 3.859 0 002.305 4.319l.383-.924a2.858 2.858 0 01-1.708-3.199l-.98-.196zm3.785-3.103a3.858 3.858 0 00-3.785 3.103l.98.196a2.86 2.86 0 012.805-2.3v-1zm1.148.191a3.812 3.812 0 00-1.141-.191l-.014 1c.286.004.57.051.841.141l.314-.95zm-.35-.586l-.284.913.955.296.283-.913-.955-.296zm-.805.435c.383.005.762.068 1.125.188l.313-.95a4.787 4.787 0 00-1.424-.238l-.014 1zm-3.74 3.075a3.82 3.82 0 013.747-3.075v-1a4.818 4.818 0 00-4.727 3.88l.98.195zm2.286 4.274a3.82 3.82 0 01-2.285-4.274l-.981-.195a4.819 4.819 0 002.883 5.393l.383-.924zm4.637-1.407a3.82 3.82 0 01-4.638 1.407l-.382.924a4.82 4.82 0 005.852-1.776l-.831-.555zm-.475-4.823a3.82 3.82 0 01.476 4.823l.831.556a4.822 4.822 0 00-.6-6.087l-.707.708zm.027.68l.68-.68-.707-.707-.68.68.707.707zm3.512-6.6a1.46 1.46 0 001.46-1.46h-1a.46.46 0 01-.46.46v1zm-1.46-1.46c0 .807.654 1.46 1.46 1.46v-1a.46.46 0 01-.46-.46h-1zm1.46-1.46a1.46 1.46 0 00-1.46 1.46h1a.46.46 0 01.46-.46v-1zm1.46 1.46a1.46 1.46 0 00-1.46-1.46v1a.46.46 0 01.46.46h1z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "26",
      "height": "26",
      "name": "radar",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"59\" height=\"56\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M25.762 2.24a7.705 7.705 0 00-2.24.366 7.827 7.827 0 015.6 7.474c-.001.376-.032.75-.095 1.12h4.48c.063-.37.094-.744.095-1.12a7.85 7.85 0 00-7.84-7.84zm-9.464 11.2a10.279 10.279 0 01-.57-2.87 21.875 21.875 0 00-3.6 2.87h4.17zM35.48 7.543c.146.574.246 1.159.3 1.749A18.721 18.721 0 0147.04 25.76c0 9.856-8.856 17.986-20.16 18.944.738.063 1.485.096 2.24.096 12.352 0 22.4-8.54 22.4-19.04 0-8.616-6.785-15.879-16.04-18.217z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M56.44 19.8l-3.967-.794a19.855 19.855 0 00-2.024-3.897L51.52 2.24s-8.649.882-12.78 3.944a27.253 27.253 0 00-4.329-1.2A10.03 10.03 0 0024.207.12a10.038 10.038 0 00-8.258 7.723 22.712 22.712 0 00-9.064 8.842l-2.903-1.936a1.121 1.121 0 00-1.747.858c-.025.402.168.786.505 1.006l3.178 2.12a18.538 18.538 0 00-1.437 7.028 19.849 19.849 0 007.123 14.959v6.321a4.48 4.48 0 004.48 4.48h1.433a4.48 4.48 0 004.419-5.217l-.032-.195a28.294 28.294 0 0014.86-.124l-.053.32a4.483 4.483 0 004.419 5.216h1.43a4.48 4.48 0 004.48-4.48v-6.704a20.436 20.436 0 006.199-10.215l3.2-.64a2.242 2.242 0 001.802-2.198v-5.286a2.24 2.24 0 00-1.8-2.197zM49.055 4.86l-.598 7.173a81.095 81.095 0 01-1.066-.627l-.278-.165a24.511 24.511 0 00-5.865-3.987 29.132 29.132 0 017.807-2.394zM33.6 10.081a7.848 7.848 0 00-7.84-7.84 7.848 7.848 0 00-7.84 7.84c0 .375.032.75.094 1.12h15.492c.062-.37.093-.745.094-1.12zM19.726 46.67a2.242 2.242 0 01-2.209 2.609h-1.433a2.241 2.241 0 01-2.24-2.24v-4.603a25.61 25.61 0 005.662 2.922l.22 1.313zm22.835 2.61a2.244 2.244 0 002.24-2.24v-4.865a25.588 25.588 0 01-5.633 3.002l-.248 1.494a2.236 2.236 0 002.21 2.608h1.43zM29.12 44.8c-12.352 0-22.4-8.542-22.4-19.04a18.22 18.22 0 019.008-15.191c.052.979.244 1.945.57 2.87h18.925a9.985 9.985 0 00.617-3.36 10.028 10.028 0 00-.362-2.537c9.256 2.338 16.042 9.6 16.042 18.217 0 10.5-10.049 19.04-22.4 19.04zm24.111-23.358c.516 2.062.656 4.2.412 6.313L56 27.283v-5.286l-2.769-.554z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" d=\"M43.68 20.16a1.12 1.12 0 10.001-2.239 1.12 1.12 0 00-.001 2.239z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "59",
      "height": "56",
      "name": "savings",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"26\" fill=\"none\"><path fill=\"#D8D6E5\" d=\"M14.804 4.925a7.472 7.472 0 00-2.999-1.832c.356.248.69.526.999.832a7.499 7.499 0 01-7.609 12.438 7.498 7.498 0 009.609-11.438z\"/><path fill=\"#6F647A\" fill-rule=\"evenodd\" d=\"M24.562 23.168l-4.95-4.95a1.451 1.451 0 00-1.697-.283l-2.068-2.068a8.529 8.529 0 10-.707.707l2.068 2.068a1.49 1.49 0 00.282 1.697l4.95 4.95a1.5 1.5 0 002.121-2.122zM9.5 17.727A7.499 7.499 0 014.197 4.924 7.5 7.5 0 0114.803 15.53 7.452 7.452 0 019.5 17.727zm13.646 6.853a.499.499 0 10.707-.706l-4.95-4.95a.497.497 0 00-.838.223.5.5 0 00.131.483l4.95 4.95z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "26",
      "name": "search-a-1",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M14.804 4.197a7.472 7.472 0 00-2.999-1.832c.356.248.69.526.999.832a7.498 7.498 0 01-7.609 12.439 7.499 7.499 0 009.609-11.439z\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M24.56 22.44l-4.95-4.95a1.45 1.45 0 00-1.696-.283l-2.068-2.068a8.529 8.529 0 10-.707.706l2.068 2.068a1.49 1.49 0 00.282 1.697l4.95 4.95a1.5 1.5 0 002.122-2.122zM9.5 17A7.5 7.5 0 014.197 4.197a7.5 7.5 0 0110.606 10.606A7.452 7.452 0 019.5 17zm13.646 6.854a.5.5 0 00.707-.707l-4.95-4.95a.497.497 0 00-.838.223.5.5 0 00.131.483l4.95 4.95z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "search-a-2",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"none\"><path fill=\"#FFE292\" d=\"M14.804 4.197a7.484 7.484 0 00-2.999-1.832c.356.249.69.527.999.832a7.499 7.499 0 01-7.609 12.439 7.498 7.498 0 009.609-11.439z\"/><path fill=\"#6F647A\" fill-rule=\"evenodd\" d=\"M24.56 22.44l-4.95-4.95a1.448 1.448 0 00-1.696-.282l-2.068-2.069a8.529 8.529 0 10-.707.707l2.068 2.069a1.488 1.488 0 00.282 1.696l4.95 4.95a1.5 1.5 0 002.122-2.121zM9.5 17A7.5 7.5 0 014.197 4.197a7.5 7.5 0 0110.606 10.607A7.451 7.451 0 019.5 17zm13.646 6.854a.5.5 0 00.707-.707l-4.95-4.95a.499.499 0 00-.838.223.501.501 0 00.131.484l4.95 4.95z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "search-a",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M33.16 9.401a16.716 16.716 0 00-6.717-4.104c.798.556 1.546 1.18 2.236 1.864a16.796 16.796 0 01-17.042 27.862c7.13 5.007 16.906 3.73 22.51-2.942 5.604-6.672 5.175-16.52-.988-22.68z\" fill=\"#E8D7E2\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.016 50.265L43.928 39.177a3.246 3.246 0 00-3.8-.632l-4.633-4.633c6.867-7.721 6.35-19.503-1.165-26.594-7.516-7.09-19.308-6.92-26.616.385S.23 26.8 7.318 34.32c7.087 7.519 18.869 8.04 26.592 1.176l4.634 4.634a3.333 3.333 0 00.632 3.8l11.088 11.087a3.36 3.36 0 004.752-4.751zM21.28 38.08A16.8 16.8 0 019.4 9.4c6.571-6.5 17.16-6.472 23.696.064 6.536 6.535 6.564 17.124.063 23.695a16.691 16.691 0 01-11.88 4.92zm30.568 15.351a1.12 1.12 0 001.584-1.584L42.344 40.762a1.12 1.12 0 10-1.584 1.583l11.088 11.088z\" fill=\"#782DC8\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "search-b",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"36\" height=\"36\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M22.319 11.52c-.09 0-.173.022-.261.026a6.438 6.438 0 01-3.798 11.467 6.467 6.467 0 104.059-11.494z\"/><path fill=\"#00D1AB\" d=\"M2.16 12.96h10.08a.72.72 0 000-1.44H2.16a.72.72 0 100 1.44zm0 5.76h8.64a.72.72 0 000-1.44H2.16a.72.72 0 100 1.44zm0 5.76h10.08a.72.72 0 000-1.44H2.16a.719.719 0 100 1.44z\"/><path fill=\"#00D1AB\" fill-rule=\"evenodd\" d=\"M28.406 23.066l5.944 5.944a.72.72 0 01-1.019 1.018l-5.944-5.944a7.926 7.926 0 111.019-1.018zM15.84 17.999a6.48 6.48 0 006.48 6.48 6.48 6.48 0 100-12.96 6.48 6.48 0 00-6.48 6.48z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "36",
      "height": "36",
      "name": "search-list",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M25.6 17.6c-.013 0-.025.003-.039.003a7.976 7.976 0 01-4.721 14.393A7.988 7.988 0 1025.601 17.6z\"/><path fill=\"#00D1AB\" fill-rule=\"evenodd\" d=\"M32.978 31.847l6.789 6.788a.802.802 0 01-1.132 1.132l-6.788-6.789a.114.114 0 01-.022-.032c-.005-.01-.01-.02-.018-.028A9.615 9.615 0 0118.79 18.786a9.614 9.614 0 0114.128 13.021c.02.012.041.026.06.04zm-15.377-6.246a8 8 0 008 8 8.01 8.01 0 008-8 8 8 0 00-16 0z\" clip-rule=\"evenodd\"/><path fill=\"#00D1AB\" d=\"M13.6 30.4H2.4a.8.8 0 01-.8-.8V2.4a.8.8 0 01.8-.8h27.2a.8.8 0 01.8.8v11.2a.8.8 0 101.6 0V2.4A2.4 2.4 0 0029.6 0H2.4A2.4 2.4 0 000 2.4v27.2A2.4 2.4 0 002.4 32h11.2a.8.8 0 100-1.6z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "search-view",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\"><path fill=\"#FFE292\" d=\"M18.24 1.92v6.72c0 4.074-4.98 10.56-9.12 10.56a6.462 6.462 0 01-3.657-1.422C7.273 20.171 9.757 22.08 12 22.08c4.14 0 9.12-6.486 9.12-10.56v-9.6h-2.88z\"/><path fill=\"#39264F\" fill-rule=\"evenodd\" d=\"M1.92 11.52V.96h20.16v10.56c0 4.44-5.22 11.52-10.08 11.52S1.92 15.96 1.92 11.52zM12 22.08c4.14 0 9.12-6.486 9.12-10.56v-9.6H2.88v9.6c0 4.074 4.98 10.56 9.12 10.56z\" clip-rule=\"evenodd\"/><path fill=\"#39264F\" d=\"M12 20.16a.48.48 0 100-.96c-2.832 0-6.24-4.422-6.24-7.2V4.8h4.32a.48.48 0 100-.96h-4.8a.48.48 0 00-.48.48V12c0 3.296 3.793 8.16 7.2 8.16z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "24",
      "height": "24",
      "name": "security-guard",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M27.564 9.6l1.098 25.6H33.6L28.8 9.6h-1.236zM2.4 35.198a.799.799 0 01-.8-.839l.198-3.96h25.206l.197 3.96a.793.793 0 01-.22.59.8.8 0 01-.578.25H2.4z\"/><path fill=\"#5F259F\" d=\"M14.4 19.2a6.4 6.4 0 006.4-6.4v-4a.8.8 0 10-1.6 0v4a4.8 4.8 0 11-9.6 0v-4a.8.8 0 10-1.6 0v4a6.4 6.4 0 006.4 6.4z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M38.585 10.259a2.402 2.402 0 00-2.397-2.26h-8.704l-.126-2.52a2.4 2.4 0 00-2.396-2.28H3.839a2.4 2.4 0 00-2.397 2.28L.003 34.28a2.401 2.401 0 002.395 2.52h35.203a2.401 2.401 0 002.395-2.54l-1.41-24zm-2.397-.66c.424 0 .774.33.8.753L38.167 30.4h-9.563l-.523-10.454A4.54 4.54 0 0032 15.2v-2.4a.8.8 0 10-1.6 0v2.4a2.926 2.926 0 01-2.398 3.159L27.564 9.6h8.624zM3.84 4.8a.801.801 0 00-.8.762L1.878 28.799h25.045L25.762 5.56a.801.801 0 00-.8-.76H3.839zM2.4 35.2a.799.799 0 01-.8-.839l.199-3.96h25.205l.198 3.96a.803.803 0 01-.799.84H2.398zm35.202 0a.796.796 0 00.799-.846L38.26 32h-9.576l.114 2.28c.015.313-.031.625-.136.92h8.939z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "shopping-bags",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.855 14.107a11.39 11.39 0 01-11.308 9c-.78-.002-1.558-.08-2.322-.233a11.84 11.84 0 005.274 1.233 11.33 11.33 0 0011.453-10h-3.098z\" fill=\"#D8D6E5\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 13.107h25a11.996 11.996 0 01-7.511 11H19.5a.5.5 0 010 1h-14a.5.5 0 110-1h2.011a11.996 11.996 0 01-7.511-11zm1.787 4a11.519 11.519 0 0010.713 7 11.33 11.33 0 0011.453-10H1.047c.065.682.196 1.356.393 2.013.02-.006.04-.01.06-.013h16a.5.5 0 010 1H1.787z\" fill=\"#6F647A\"/><path d=\"M8.162 9.405A2.815 2.815 0 007 11.607a.5.5 0 101 0c.029-.594.34-1.139.838-1.465A2.813 2.813 0 0010 7.939a2.815 2.815 0 00-1.162-2.203A1.862 1.862 0 018 4.271a1.86 1.86 0 01.837-1.463A2.809 2.809 0 0010 .608a.5.5 0 00-1 0 1.858 1.858 0 01-.838 1.462A2.809 2.809 0 007 4.27c.024.876.453 1.69 1.162 2.204.498.326.809.871.838 1.465a1.861 1.861 0 01-.838 1.466zm4.5 0a2.815 2.815 0 00-1.162 2.202.5.5 0 101 0c.029-.594.34-1.139.838-1.465A2.814 2.814 0 0014.5 7.939a2.815 2.815 0 00-1.162-2.203 1.862 1.862 0 01-.838-1.465 1.86 1.86 0 01.837-1.463A2.809 2.809 0 0014.5.608a.5.5 0 00-1 0 1.858 1.858 0 01-.838 1.462 2.809 2.809 0 00-1.162 2.2c.024.875.453 1.69 1.162 2.203.498.327.809.872.838 1.466a1.861 1.861 0 01-.838 1.466zm4.5 0A2.815 2.815 0 0016 11.607a.5.5 0 101 0c.029-.594.34-1.139.838-1.465A2.814 2.814 0 0019 7.939a2.815 2.815 0 00-1.162-2.203A1.862 1.862 0 0117 4.271a1.86 1.86 0 01.837-1.463A2.809 2.809 0 0019 .608a.5.5 0 00-1 0 1.858 1.858 0 01-.838 1.462A2.809 2.809 0 0016 4.27c.024.876.453 1.69 1.162 2.204.498.326.809.871.838 1.465a1.861 1.861 0 01-.838 1.466z\" fill=\"#6F647A\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "26",
      "name": "soup-bowl",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.25 1.143a.5.5 0 10-.701.714c4.412 4.312 4.62 11.341.473 15.908a.5.5 0 00.742.67c4.507-4.964 4.28-12.604-.514-17.292zM1 10.063a11.412 11.412 0 013.451-8.206.5.5 0 00-.7-.714C-1.045 5.83-1.272 13.47 3.235 18.436a.5.5 0 00.743-.671A11.467 11.467 0 011 10.063z\" fill=\"#5F259F\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15 10.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-1 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z\" fill=\"#5F259F\"/><path d=\"M6.144 15.693a8.471 8.471 0 01.47-11.753.5.5 0 10-.693-.72 9.47 9.47 0 00-.525 13.135.5.5 0 10.748-.663zM19.08 3.22a.5.5 0 00-.694.72 8.471 8.471 0 01.47 11.752.5.5 0 10.748.663A9.47 9.47 0 0019.08 3.22z\" fill=\"#5F259F\"/><path d=\"M18 10.063a5.498 5.498 0 01-1.313 3.56.5.5 0 10.761.649 6.483 6.483 0 00-.542-8.98.5.5 0 10-.68.735A5.444 5.444 0 0118 10.063zM7.552 14.272a.5.5 0 00.762-.648A5.499 5.499 0 017 10.064a5.443 5.443 0 011.774-4.037.5.5 0 00-.68-.734 6.483 6.483 0 00-.542 8.98z\" fill=\"#5F259F\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.5 25h-2.082l-1.926-10.59a.5.5 0 10-.984.18l.62 3.41h-3.256l.62-3.41a.5.5 0 00-.985-.18L8.582 25H6.5a.5.5 0 000 1h12a.5.5 0 100-1zm-4.19-6l.364 2h-4.348l.364-2h3.62zm-4.166 3L9.6 25H15.4l-.545-3h-4.712z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "26",
      "name": "signal-tower",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"36\" height=\"36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 2.092c-.246.27-.535.597-.843.955 2.587 3.251 5.884 8.275 5.884 12.793 0 8.456-4.6 12.96-7.92 12.96a3.98 3.98 0 01-.652-.057A5.703 5.703 0 0018 30.24c3.32 0 7.92-4.504 7.92-12.96 0-5.876-5.583-12.622-7.92-15.188z\" fill=\"#9EFFED\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.4 18a3.6 3.6 0 117.2 0 3.6 3.6 0 01-7.2 0zm1.44 0a2.16 2.16 0 104.32 0 2.16 2.16 0 00-4.32 0z\" fill=\"#00D1AB\"/><path d=\"M18.001 10.08a.72.72 0 100-1.44.72.72 0 000 1.44z\" fill=\"#00D1AB\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.258 15.785C26.247 8.092 18 0 18 0S9.752 8.092 8.743 15.785c-1.73 1.833-4.423 4.85-4.423 5.815C4.32 23.4 6.18 36 7.2 36c.269-.269.463-1.063.71-2.067.536-2.192 1.317-5.385 3.652-6.303a11.92 11.92 0 001.398 1.652v3.838c0 .795.645 1.44 1.44 1.44h1.572a2.148 2.148 0 004.056 0H21.6a1.44 1.44 0 001.44-1.44v-3.838a11.89 11.89 0 001.398-1.652c2.336.918 3.117 4.111 3.654 6.303.245 1.004.44 1.798.708 2.067 1.02 0 2.88-12.6 2.88-14.4 0-.966-2.692-3.982-4.422-5.815zM7.165 31.204a92.726 92.726 0 01-1.403-9.493 20.713 20.713 0 012.904-3.724 18.33 18.33 0 002.119 8.4 7.609 7.609 0 00-3.62 4.817zm7.235-.749v2.665h1.44v-1.896a8.03 8.03 0 01-1.44-.769zM18 34.56a.721.721 0 01-.72-.72v-2.215c.477.073.963.073 1.44 0v2.215a.72.72 0 01-.72.72zm2.16-1.44h1.44v-2.665a8.024 8.024 0 01-1.44.769v1.896zM18 30.24c-3.32 0-7.92-4.504-7.92-12.96 0-5.876 5.584-12.622 7.92-15.188 2.337 2.566 7.92 9.312 7.92 15.188 0 8.456-4.6 12.96-7.92 12.96zm7.216-3.852a7.61 7.61 0 013.62 4.816 92.724 92.724 0 001.402-9.493 20.718 20.718 0 00-2.903-3.724 18.331 18.331 0 01-2.12 8.4z\" fill=\"#00D1AB\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "36",
      "height": "36",
      "name": "space-rocket",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"#05FFD1\" d=\"M20 1.766c-.57.42-1.105.888-1.6 1.397 1.8 1.797 4 4.629 4 6.437v22.85c-.466.148-1.022.304-1.6.456v.628c1.63-.21 3.238-.573 4.8-1.084V9.6c0-2.425-3.959-6.696-5.6-7.834zM9.602 23.062V32h3.2V19.862l-3.2 3.2zm17.599-3.2V32h3.2v-8.938l-3.2-3.2z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M34.498 24.897L27.2 17.6v-8C27.2 5.8 21 0 20 0s-7.2 5.8-7.2 9.6v8l-7.297 7.297a2.4 2.4 0 00-.703 1.697V31.2a2.4 2.4 0 002.4 2.4h5.6s1.184.43 2.711.843l-.729 3.643A1.602 1.602 0 0016.352 40h7.296a1.598 1.598 0 001.569-1.914l-.729-3.643c1.528-.414 2.712-.843 2.712-.843h5.6a2.4 2.4 0 002.4-2.4v-4.606c0-.636-.253-1.247-.703-1.697zM7.2 32a.8.8 0 01-.8-.8v-4.606a.8.8 0 01.234-.566l6.166-6.165V32H7.2zM20 1.766c-1.64 1.138-5.6 5.409-5.6 7.834v22.85c1.562.511 3.17.874 4.8 1.084V23.2a.8.8 0 111.6 0v10.334c1.63-.21 3.237-.573 4.8-1.084V9.6c0-2.425-3.96-6.696-5.6-7.834zM16.353 38.4l.715-3.576c.962.224 1.945.35 2.933.376.988-.026 1.97-.152 2.933-.376l.715 3.576h-7.296zM32.8 32a.8.8 0 00.8-.8v-4.606a.798.798 0 00-.235-.566L27.2 19.863V32h5.6z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" d=\"M31.2 35.2a.8.8 0 00-.8.8v1.6a.8.8 0 001.6 0V36a.8.8 0 00-.8-.8zm-22.4 0a.8.8 0 00-.8.8v1.6a.8.8 0 101.6 0V36a.8.8 0 00-.8-.8zm11.2-24a5.474 5.474 0 012.67 1.398.799.799 0 001.062-1.196A6.995 6.995 0 0020 9.6a6.573 6.573 0 00-3.748 1.817.799.799 0 00-.034 1.13.798.798 0 001.13.035A5.145 5.145 0 0120 11.2z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "space-spaceship-purple",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M20 1.766a12.8 12.8 0 00-1.6 1.397c1.8 1.797 4 4.629 4 6.437v22.85c-.467.148-1.023.304-1.6.456v.628c1.63-.21 3.237-.573 4.8-1.084V9.6c0-2.425-3.96-6.696-5.6-7.834zM9.6 23.062V32h3.2V19.862l-3.2 3.2zm17.6-3.2V32h3.2v-8.938l-3.2-3.2z\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M34.497 24.897L27.2 17.6v-8C27.2 5.8 21 0 20 0s-7.2 5.8-7.2 9.6v8l-7.297 7.297a2.4 2.4 0 00-.703 1.697V31.2a2.4 2.4 0 002.4 2.4h5.6s1.184.43 2.711.843l-.728 3.643A1.6 1.6 0 0016.352 40h7.296a1.598 1.598 0 001.569-1.914l-.729-3.643c1.528-.414 2.712-.843 2.712-.843h5.6a2.4 2.4 0 002.4-2.4v-4.606c0-.636-.253-1.247-.703-1.697zM7.2 32a.8.8 0 01-.8-.8v-4.606a.8.8 0 01.234-.566l6.166-6.165V32H7.2zM20 1.766c-1.641 1.138-5.6 5.409-5.6 7.834v22.85c1.562.511 3.17.874 4.8 1.084V23.2a.8.8 0 111.6 0v10.334c1.63-.21 3.237-.573 4.8-1.084V9.6c0-2.425-3.96-6.696-5.6-7.834zM16.352 38.4l.715-3.576c.962.224 1.945.35 2.933.376.988-.026 1.97-.152 2.933-.376l.715 3.576h-7.296zM32.8 32a.8.8 0 00.8-.8v-4.606a.798.798 0 00-.235-.566L27.2 19.864V32h5.6z\" clip-rule=\"evenodd\"/><path fill=\"#fff\" d=\"M31.2 35.2a.8.8 0 00-.8.8v1.6a.8.8 0 101.6 0V36a.8.8 0 00-.8-.8zm-22.4 0a.8.8 0 00-.8.8v1.6a.8.8 0 101.6 0V36a.8.8 0 00-.8-.8zm11.2-24a5.468 5.468 0 012.668 1.398.8.8 0 001.063-1.196A6.995 6.995 0 0019.999 9.6a6.573 6.573 0 00-3.748 1.817.8.8 0 101.097 1.165 5.142 5.142 0 012.651-1.382z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "space-spaceship",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M53.505 21.823a1.17 1.17 0 00-.874-.414 1.105 1.105 0 00-.599.187l-1.16.748-2.274 14.786a1.114 1.114 0 01-1.108.95H6.861l.544 3.53c.081.548.553.953 1.106.95h41.22a1.114 1.114 0 001.106-.95l2.908-18.901c.06-.317-.03-.643-.24-.886z\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.37 12.461a3.331 3.331 0 012.621-1.26 3.342 3.342 0 012.798 1.495L41.44 25.76l9.38-6.047a3.326 3.326 0 011.81-.543 3.367 3.367 0 013.328 3.88l-2.907 18.9a3.36 3.36 0 01-3.321 2.85H8.51a3.36 3.36 0 01-3.32-2.85l-2.908-18.9a3.367 3.367 0 013.328-3.88c.643.002 1.271.19 1.81.542l9.38 6.048 10.57-13.299zm3.551 1.472a1.105 1.105 0 00-.93-.493 1.1 1.1 0 00-.87.42L18.552 27.153l-1.262 1.588-1.705-1.099-9.38-6.048a1.103 1.103 0 00-.597-.185 1.172 1.172 0 00-.873.414c-.211.243-.3.57-.24.886L7.404 41.61c.081.547.553.952 1.107.95H49.73a1.114 1.114 0 001.106-.952l2.908-18.9a1.062 1.062 0 00-.24-.887 1.17 1.17 0 00-.874-.413 1.105 1.105 0 00-.6.187l-9.376 6.046-1.86 1.2-1.221-1.845-8.652-13.064z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "sport-king-2",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M53.505 21.823a1.17 1.17 0 00-.874-.414 1.105 1.105 0 00-.599.187l-1.16.748-2.274 14.786a1.114 1.114 0 01-1.108.95H6.861l.544 3.53c.081.548.553.953 1.106.95h41.22a1.114 1.114 0 001.106-.95l2.908-18.901c.06-.317-.03-.643-.24-.886z\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.37 12.461a3.331 3.331 0 012.621-1.26 3.342 3.342 0 012.798 1.495L41.44 25.76l9.38-6.047a3.326 3.326 0 011.81-.543 3.367 3.367 0 013.328 3.88l-2.907 18.9a3.36 3.36 0 01-3.321 2.85H8.51a3.36 3.36 0 01-3.32-2.85l-2.908-18.9a3.367 3.367 0 013.328-3.88c.643.002 1.271.19 1.81.542l9.38 6.048 10.57-13.299zm3.551 1.472a1.105 1.105 0 00-.93-.493 1.1 1.1 0 00-.87.42L18.552 27.153l-1.262 1.588-1.705-1.099-9.38-6.048a1.103 1.103 0 00-.597-.185 1.172 1.172 0 00-.873.414c-.211.243-.3.57-.24.886L7.404 41.61c.081.547.553.952 1.107.95H49.73a1.114 1.114 0 001.106-.952l2.908-18.9a1.062 1.062 0 00-.24-.887 1.17 1.17 0 00-.874-.413 1.105 1.105 0 00-.6.187l-9.376 6.046-1.86 1.2-1.221-1.845-8.652-13.064z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "sport-king",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"39\" height=\"37\" fill=\"none\"><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M18.49.435A.795.795 0 0119.202 0c.3-.002.576.166.712.434l5.538 10.782 12.276 1.982a.8.8 0 01.41 1.381l-9.327 8.345 2.482 12.924a.797.797 0 01-1.152.862l-10.982-5.67-10.982 5.664a.796.796 0 01-1.152-.866L9.579 22.93.263 14.579a.8.8 0 01.41-1.38l12.28-1.982L18.49.435zm5.909 12.23L19.202 2.552l-5.196 10.115L2.584 14.51l8.742 7.839-2.41 12.173 10.243-5.283 10.253 5.293-.762-3.965-1.58-8.232 8.746-7.826L24.4 12.666z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "39",
      "height": "37",
      "name": "star",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"38\" height=\"38\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M24.636 10.449L17.14 9.257l-3.459-6.636-1.52 2.916 1.939 3.72 7.495 1.192-5.766 5.083 1.226 6.29 3.374 1.718-1.56-8.007 5.765-5.084zM10.61 20.09l-3.381 1.719-.346 1.721 5.247-2.667c-.945-.48-.95-.482-1.52-.773z\"/><path fill=\"#00D1AB\" fill-rule=\"evenodd\" d=\"M27.336 9.659a.562.562 0 01-.162.578l-6.646 5.859 1.768 9.076a.57.57 0 01-.122.466.568.568 0 01-.699.138l-7.825-3.981-7.825 3.978a.57.57 0 01-.7-.14.567.567 0 01-.12-.469l1.82-9.062-6.638-5.866a.561.561 0 01.292-.969l8.75-1.393 3.946-7.57a.574.574 0 011.013 0l3.946 7.571 8.748 1.392a.56.56 0 01.454.392zM6.884 23.529l6.766-3.44.482.246 6.298 3.204-1.56-8.008 5.765-5.083-7.495-1.192-3.458-6.636-3.46 6.636-7.498 1.193L8 15.112l.488.431-.119.591-1.485 7.396zm26.503-3.103l4.373.655a.26.26 0 01.146.457l-3.322 2.757.883 4.271a.267.267 0 01-.065.224.272.272 0 01-.215.09.292.292 0 01-.13-.03l-3.912-1.874-3.913 1.872a.292.292 0 01-.13.03.272.272 0 01-.28-.316l.91-4.265-3.319-2.76a.26.26 0 01.146-.456l4.375-.655 1.973-3.562a.295.295 0 01.507 0l1.973 3.562zm-.477 3.282l.703-.583 1.151-.954-1.602-.24-.742-.111-.363-.656-.897-1.619-.896 1.619-.364.656-.741.11-1.608.242 1.153.957.707.588-.192.899-.38 1.778 1.65-.788.656-.315.656.314 1.667.8-.373-1.802-.185-.895z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "38",
      "height": "38",
      "name": "stars",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"61\" height=\"56\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M7.304 14.609v19.478a4.87 4.87 0 004.87 4.87h20.29l6.492 4.87h5.681l-9.739-7.305H13.391a3.652 3.652 0 01-3.652-3.652V12.174H3.652c-.672 0-1.216.545-1.217 1.217v1.218h4.87z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M35.584.005H13.391A3.651 3.651 0 009.74 3.657V9.74H3.652A3.651 3.651 0 000 13.391v29.213a3.652 3.652 0 003.652 3.652H9.74v7.304A2.439 2.439 0 0012.186 56c.524 0 1.033-.173 1.45-.491l12.335-9.252.737.001h.002c3.812.007 20.554.036 21.345-.093.205.062.417.096.631.101a2.437 2.437 0 002.445-2.44v-7.304h6.087a3.653 3.653 0 003.653-3.652V21.758L36.097 37.42l8.541 6.406H25.153l-.643.483-12.336 9.251v-9.734H9.739l-6.087-.005a1.217 1.217 0 01-1.217-1.217V13.39c0-.672.545-1.216 1.217-1.217H9.74V32.87a3.652 3.652 0 003.652 3.652h20.231L9.74 21.758v-5.712L35.584.005zm25.286 16.04L35.6.006h21.617a3.653 3.653 0 013.653 3.652v12.389z\" clip-rule=\"evenodd\"/><circle cx=\"36.59\" cy=\"19.119\" r=\"11.069\" fill=\"#5F259F\"/><mask id=\"a\" width=\"23\" height=\"23\" x=\"25\" y=\"8\" maskUnits=\"userSpaceOnUse\"><circle cx=\"36.589\" cy=\"19.119\" r=\"11.069\" fill=\"#5F259F\"/></mask><g mask=\"url(#a)\"><path stroke=\"#D2B6F1\" stroke-linecap=\"round\" stroke-width=\"2\" d=\"M24.514 16.797c4.025-1.174 14.39-1.71 23.647 5.534\"/></g></svg>",
    "type": "shady",
    "metadata": {
      "width": "61",
      "height": "56",
      "name": "support-portuguese",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"#05FFD1\" d=\"M38.4 9.6h-24V4.8h23.2a.8.8 0 01.8.8v4z\"/><path fill=\"#5F259F\" d=\"M12.986 23.489a.8.8 0 00.102 1.127l4.8 4a.8.8 0 001.079-.05l8-8a.799.799 0 00-1.132-1.13l-7.483 7.483-4.24-3.533a.8.8 0 00-1.126.103z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M2.4 3.2h35.2A2.403 2.403 0 0140 5.6v28.8a2.402 2.402 0 01-2.4 2.4H2.4A2.401 2.401 0 010 34.4V5.6a2.403 2.403 0 012.4-2.4zm0 1.6a.8.8 0 00-.8.8v4h11.2V4.8H2.4zm36 29.6a.8.8 0 01-.8.8H2.4a.8.8 0 01-.8-.8V11.2h36.8v23.2zm-24-24.8h24v-4a.8.8 0 00-.8-.8H14.4v4.8z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" d=\"M3.199 6.4h1.6V8h-1.6zm3.201 0H8V8H6.4zm3.2 0h1.6V8H9.6z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "tech-browser-tick-purple",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M35.84 33.6v5.6a12.333 12.333 0 01-10.08 12.105A12.277 12.277 0 0040.32 39.2v-5.6h-4.48zm0-6.72h4.48v4.48h-4.48zM28 6.72c-.752.003-1.502.074-2.24.214A12.333 12.333 0 0135.84 19.04v5.6h4.48v-5.6C40.312 12.239 34.8 6.727 28 6.72z\" fill=\"#B482E1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M42.56 31.36h5.6a1.12 1.12 0 110 2.24h-5.6v5.6a14.514 14.514 0 01-.823 4.794c.08.04.156.09.224.15l4.752 4.752a1.12 1.12 0 01-1.585 1.583l-4.33-4.331a14.564 14.564 0 01-25.595 0l-4.33 4.331a1.12 1.12 0 01-1.584-1.583l4.752-4.753a1.06 1.06 0 01.224-.148 14.511 14.511 0 01-.824-4.795v-5.6h-5.6a1.12 1.12 0 010-2.24h5.6V19.04a14.538 14.538 0 017.168-12.528l-2.36-2.36a1.12 1.12 0 111.584-1.584l2.907 2.907a14.4 14.4 0 0110.521 0l2.908-2.907a1.12 1.12 0 111.584 1.583l-2.36 2.36A14.538 14.538 0 0142.56 19.04v12.32zM28 51.52c6.805 0 12.32-5.516 12.32-12.32v-5.6h-11.2v10.928a1.12 1.12 0 11-2.24 0V33.6h-11.2v5.6c0 6.804 5.517 12.32 12.32 12.32zm12.32-20.16H15.68v-4.48h24.64v4.48zm-24.64-6.72h24.64v-5.6c0-6.805-5.515-12.32-12.32-12.32-6.803 0-12.32 5.515-12.32 12.32v5.6z\" fill=\"#782DC8\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "tech-development-bug",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M42.56 4.48v15.68c0 9.506-11.619 24.64-21.28 24.64a15.092 15.092 0 01-8.534-3.317C16.97 47.067 22.766 51.521 28 51.521c9.661 0 21.28-15.135 21.28-24.64V4.48h-6.72z\" fill=\"#B482E1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.48 26.88V2.24h47.04v24.64c0 10.36-12.18 26.88-23.52 26.88S4.48 37.24 4.48 26.88zM28 51.52c9.661 0 21.28-15.134 21.28-24.64V4.48H6.72v22.4c0 9.506 11.62 24.64 21.28 24.64z\" fill=\"#782DC8\"/><path d=\"M28.001 47.04a1.12 1.12 0 000-2.24c-6.61 0-14.56-10.318-14.56-16.8V11.2h10.08a1.12 1.12 0 000-2.24h-11.2a1.12 1.12 0 00-1.12 1.12V28c0 7.691 8.85 19.04 16.8 19.04z\" fill=\"#782DC8\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "tech-security-guard",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"46\" height=\"44\" fill=\"none\"><path fill=\"#FFE292\" d=\"M44.4 13.6h-24V8.8h23.2a.8.8 0 01.8.8v4z\"/><path fill=\"#5F259F\" d=\"M18.985 27.489a.801.801 0 00.102 1.127l4.8 4a.801.801 0 001.079-.05l8-8a.799.799 0 00-1.132-1.13l-7.483 7.483-4.24-3.533a.8.8 0 00-1.126.103z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M8.4 7.2h35.2A2.403 2.403 0 0146 9.6v28.8a2.402 2.402 0 01-2.4 2.4H8.4A2.401 2.401 0 016 38.4V9.6a2.403 2.403 0 012.4-2.4zm0 1.6a.8.8 0 00-.8.8v4h11.2V8.8H8.4zm36 29.6a.8.8 0 01-.8.8H8.4a.8.8 0 01-.8-.8V15.2h36.8v23.2zm-24-24.8h24v-4a.8.8 0 00-.8-.8H20.4v4.8z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" d=\"M9.2 10.4h1.6V12H9.2zm3.2 0H14V12h-1.6zm3.2 0h1.6V12h-1.6z\"/><circle cx=\"13\" cy=\"13\" r=\"13\" fill=\"#FFE292\"/><path fill=\"#5F259F\" d=\"M12.152 19.318c-.307 0-.626-.022-.956-.068a7.828 7.828 0 01-.921-.153c-.284-.057-.546-.12-.785-.188a3.618 3.618 0 01-.546-.222l.41-1.757c.238.113.585.244 1.04.392.455.137 1.018.205 1.69.205.898 0 1.546-.17 1.945-.512.398-.353.597-.819.597-1.4 0-.374-.08-.687-.24-.938a1.592 1.592 0 00-.63-.597 2.545 2.545 0 00-.922-.324 5.58 5.58 0 00-1.092-.102h-.7v-1.672h.854c.261 0 .523-.023.785-.069.273-.057.517-.148.733-.273.216-.136.393-.313.53-.529.136-.216.204-.494.204-.836 0-.273-.051-.506-.153-.7a1.404 1.404 0 00-.41-.477 1.54 1.54 0 00-.563-.273 2.669 2.669 0 00-.683-.085c-.511 0-.966.08-1.365.239-.398.147-.75.318-1.057.511l-.751-1.535c.16-.103.352-.21.58-.324.227-.114.478-.222.75-.325.285-.102.586-.182.905-.238a4.749 4.749 0 011.007-.103c.66 0 1.228.08 1.706.24.478.158.87.386 1.177.682.319.284.552.625.7 1.023.16.387.239.814.239 1.28 0 .546-.154 1.035-.461 1.467a2.886 2.886 0 01-1.16.99c.614.216 1.12.574 1.518 1.075.41.5.615 1.143.615 1.928 0 .523-.091 1.012-.273 1.467-.182.444-.461.83-.837 1.16-.375.32-.853.575-1.433.768-.569.182-1.251.273-2.047.273z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "46",
      "height": "44",
      "name": "tech-browser-tick-purple-numeric",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M38.4 9.6h-24V4.8h23.2a.8.8 0 01.8.8v4z\"/><path fill=\"#fff\" d=\"M12.986 23.489a.8.8 0 00.102 1.127l4.8 4a.8.8 0 001.079-.05l8-8a.799.799 0 00-1.132-1.13l-7.483 7.483-4.24-3.533a.8.8 0 00-1.126.103z\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M2.4 3.2h35.2A2.403 2.403 0 0140 5.6v28.8a2.402 2.402 0 01-2.4 2.4H2.4A2.401 2.401 0 010 34.4V5.6a2.403 2.403 0 012.4-2.4zm0 1.6a.8.8 0 00-.8.8v4h11.2V4.8H2.4zm36 29.6a.8.8 0 01-.8.8H2.4a.8.8 0 01-.8-.8V11.2h36.8v23.2zm-24-24.8h24v-4a.8.8 0 00-.8-.8H14.4v4.8z\" clip-rule=\"evenodd\"/><path fill=\"#fff\" d=\"M3.199 6.4h1.6V8h-1.6zm3.201 0H8V8H6.4zm3.2 0h1.6V8H9.6z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "tech-browser-tick",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" fill=\"none\"><path fill=\"#D8D6E5\" d=\"M22 13h2v10h-2zM1 15h14v5H3a2 2 0 01-2-2v-3zm17-3h2V3H3v10h14a1 1 0 011-1z\"/><path fill=\"#6F647A\" fill-rule=\"evenodd\" d=\"M14 23h1.5a.5.5 0 010 1h-8a.5.5 0 010-1H9v-3H1.5A1.5 1.5 0 010 18.5v-17A1.5 1.5 0 011.5 0h20A1.5 1.5 0 0123 1.5v8a.5.5 0 01-1 0v-8a.5.5 0 00-.5-.5h-20a.5.5 0 00-.5.5V15h13.5a.5.5 0 010 1H1v2.5a.5.5 0 00.5.5h13a.5.5 0 010 1H14v3zm-4 0h3v-3h-3v3z\" clip-rule=\"evenodd\"/><path fill=\"#6F647A\" fill-rule=\"evenodd\" d=\"M18 12h6a1 1 0 011 1v10a1 1 0 01-1 1h-6a1 1 0 01-1-1V13a1 1 0 011-1zm0 11h6V13h-6v10z\" clip-rule=\"evenodd\"/><path fill=\"#6F647A\" d=\"M20.5 22h1a.5.5 0 000-1h-1a.5.5 0 000 1z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "tech-desktop-smartphone",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"57\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M31.203 27.502c.1.312.153.636.157.963a3.364 3.364 0 01-3.36 3.36 3.32 3.32 0 01-.963-.157 3.35 3.35 0 104.166-4.166zm11.2 20.16c.1.312.152.636.157.963a3.36 3.36 0 01-3.36 3.36 3.32 3.32 0 01-.964-.157 3.35 3.35 0 104.167-4.166z\" fill=\"#B482E1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M51.52 18.385a4.426 4.426 0 00-2.05.518L31.32 5.334c.005-.048.011-.096.018-.143.01-.081.022-.162.022-.246a4.48 4.48 0 10-8.96 0c.007.186.025.372.056.555L6.608 18.945a4.434 4.434 0 00-2.128-.56 4.477 4.477 0 00-.824 8.877l7.606 21.732.012.016a4.463 4.463 0 008.69 1.97l15.976.887a5.594 5.594 0 109.508-4.904l6.895-19.701a4.476 4.476 0 00-.823-8.877zM26.88 2.705a2.24 2.24 0 110 4.48 2.24 2.24 0 010-4.48zm.093 6.719a4.445 4.445 0 01-3.622-1.749L8.26 20.48c.456.712.699 1.54.7 2.385a.71.71 0 01-.009.1.831.831 0 00-.009.088l16.4 4.99a5.56 5.56 0 019.645-.28l12.099-4.457c-.005-.05-.012-.1-.019-.149-.013-.096-.026-.192-.026-.292 0-.866.253-1.713.728-2.438L30.523 7.535a4.445 4.445 0 01-3.55 1.889zm6.627 21.28a3.36 3.36 0 11-6.72 0 3.36 3.36 0 016.72 0zM4.48 20.625a2.24 2.24 0 100 4.48 2.24 2.24 0 000-4.48zm11.2 31.36a2.24 2.24 0 110-4.48 2.24 2.24 0 010 4.48zm22.4-1.12a3.36 3.36 0 106.72 0 3.36 3.36 0 00-6.72 0zm5.445-5.189a5.572 5.572 0 00-7.538 3.952l-15.949-.886a4.45 4.45 0 00-7.31-2.342L5.965 27.074a4.47 4.47 0 002.325-1.878l16.403 4.992c-.006.061-.014.122-.022.183-.015.11-.03.22-.03.334a5.6 5.6 0 1011.2 0 5.54 5.54 0 00-.085-.838l12.086-4.454a4.48 4.48 0 002.196 1.66l-6.512 18.602zm5.755-22.81a2.24 2.24 0 104.48 0 2.24 2.24 0 00-4.48 0z\" fill=\"#782DC8\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "57",
      "name": "tech-internet-network",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\"><style>.shp0{fill:#05ffd1}.shp1{fill:#5f259f}</style><path id=\"Layer\" class=\"shp0\" d=\"M27.4 19.8h4.8v14.4h-4.8V19.8z\"/><path id=\"Layer\" class=\"shp0\" d=\"M36.2 15h-4.8c.44 0 .8.36.8.8v22.4c0 .44-.36.8-.8.8h4.8c.44 0 .8-.36.8-.8V15.8c0-.44-.36-.8-.8-.8z\"/><path id=\"Layer\" fill-rule=\"evenodd\" class=\"shp1\" d=\"M32.2 18.2c.88 0 1.6.72 1.6 1.6v14.4c0 .88-.72 1.6-1.6 1.6H17.8c-.88 0-1.6-.72-1.6-1.6V19.8c0-.88.72-1.6 1.6-1.6h14.4zm0 16V19.8H17.8v14.4h14.4z\"/><path id=\"Layer\" fill-rule=\"evenodd\" class=\"shp1\" d=\"M41 27.8h-2.4v6.4H41c.44 0 .8.36.8.8 0 .44-.36.8-.8.8h-2.4v2.4c0 1.33-1.07 2.4-2.4 2.4h-2.4V43c0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8v-2.4h-6.4V43c0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8v-2.4h-6.4V43c0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8v-2.4h-2.4a2.4 2.4 0 01-2.4-2.4v-2.4H9c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8h2.4v-6.4H9c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8h2.4v-6.4H9c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8h2.4v-2.4c0-1.32 1.08-2.4 2.4-2.4h2.4V11c0-.44.36-.8.8-.8.44 0 .8.36.8.8v2.4h6.4V11c0-.44.36-.8.8-.8.44 0 .8.36.8.8v2.4h6.4V11c0-.44.36-.8.8-.8.44 0 .8.36.8.8v2.4h2.4a2.4 2.4 0 012.4 2.4v2.4H41c.44 0 .8.36.8.8 0 .44-.36.8-.8.8h-2.4v6.4H41c.44 0 .8.36.8.8 0 .44-.36.8-.8.8zm-4 10.4V15.8c0-.44-.36-.8-.8-.8H13.8c-.44 0-.8.36-.8.8v22.4c0 .44.36.8.8.8h22.4c.44 0 .8-.36.8-.8z\"/><path id=\"Layer\" class=\"shp1\" d=\"M27.4 29.4h3.2v3.2h-3.2v-3.2z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "50",
      "height": "50",
      "name": "tech-processor-chip-purple",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M22.4 12.8h4.8v14.4h-4.8z\"/><path fill=\"#9EFFED\" d=\"M31.2 8h-4.8a.8.8 0 01.8.8v22.4a.8.8 0 01-.8.8h4.8a.8.8 0 00.8-.8V8.8a.8.8 0 00-.8-.8z\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M12.8 11.2h14.4a1.6 1.6 0 011.6 1.6v14.4a1.6 1.6 0 01-1.6 1.6H12.8a1.6 1.6 0 01-1.6-1.6V12.8a1.6 1.6 0 011.6-1.6zm0 16h14.4V12.8H12.8v14.4z\" clip-rule=\"evenodd\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M36.8 20a.8.8 0 01-.8.8h-2.4v6.4H36a.8.8 0 110 1.6h-2.4v2.4a2.4 2.4 0 01-2.4 2.4h-2.4V36a.8.8 0 11-1.6 0v-2.4h-6.4V36a.8.8 0 11-1.6 0v-2.4h-6.4V36a.8.8 0 11-1.6 0v-2.4H8.8a2.4 2.4 0 01-2.4-2.4v-2.4H4a.8.8 0 110-1.6h2.4v-6.4H4a.8.8 0 110-1.6h2.4v-6.4H4a.8.8 0 110-1.6h2.4V8.8a2.4 2.4 0 012.4-2.4h2.4V4a.8.8 0 111.6 0v2.4h6.4V4a.8.8 0 111.6 0v2.4h6.4V4a.8.8 0 111.6 0v2.4h2.4a2.4 2.4 0 012.4 2.4v2.4H36a.8.8 0 110 1.6h-2.4v6.4H36a.8.8 0 01.8.8zm-5.6 12a.8.8 0 00.8-.8V8.8a.8.8 0 00-.8-.8H8.8a.8.8 0 00-.8.8v22.4a.8.8 0 00.8.8h22.4z\" clip-rule=\"evenodd\"/><path fill=\"#fff\" d=\"M22.4 22.4h3.2v3.2h-3.2z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "tech-processor-chip",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\"><path fill=\"#FFE292\" d=\"M18.24 2.88v14.88a.48.48 0 01-.48.48H2.88v2.88h18.24V2.88h-2.88z\"/><path fill=\"#39264F\" fill-rule=\"evenodd\" d=\"M24 2.88c0 .53-.43.96-.96.96h-.96v16.32h.96c.53 0 .96.43.96.96v1.92c0 .53-.43.96-.96.96h-1.92a.96.96 0 01-.96-.96v-.96H3.84v.96c0 .53-.43.96-.96.96H.96a.96.96 0 01-.96-.96v-1.92c0-.53.43-.96.96-.96h.96V3.84H.96A.96.96 0 010 2.88V.96C0 .43.43 0 .96 0h1.92c.53 0 .96.43.96.96v.96h16.32V.96c0-.53.43-.96.96-.96h1.92c.53 0 .96.43.96.96v1.92zM23.04.96h-1.92v1.92h1.92V.96zM.96 2.88V.96h1.92v1.92H.96zm0 18.24v1.92h1.92v-1.92H.96zm22.08 0v1.92h-1.92v-1.92h1.92zm-2.88 0c0-.53.43-.96.96-.96V3.84a.96.96 0 01-.96-.96H3.84c0 .53-.43.96-.96.96v16.32c.53 0 .96.43.96.96h16.32z\" clip-rule=\"evenodd\"/><path fill=\"#39264F\" d=\"M16.32 6.72H7.68a.96.96 0 00-.96.96v1.44a.48.48 0 00.96 0V7.68h3.84v9.6h-1.44a.48.48 0 000 .96h3.84a.48.48 0 100-.96h-1.44v-9.6h3.84v1.44a.48.48 0 00.96 0V7.68a.96.96 0 00-.96-.96z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "24",
      "height": "24",
      "name": "text-box",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"14.4\" y=\"14.4\" width=\"7.68\" height=\"7.68\" rx=\".5\" fill=\"#D2B6F1\"/><rect x=\"1.92\" y=\"1.92\" width=\"7.68\" height=\"7.68\" rx=\".5\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.4.96h6.72c.795 0 1.44.645 1.44 1.44v6.72a1.44 1.44 0 01-1.44 1.44H2.4A1.44 1.44 0 01.96 9.12V2.4c0-.795.645-1.44 1.44-1.44zM9.12 9.6a.48.48 0 00.48-.48V2.4a.48.48 0 00-.48-.48H2.4a.48.48 0 00-.48.48v6.72c0 .265.215.48.48.48h6.72zM14.88.96h6.72c.795 0 1.44.645 1.44 1.44v6.72a1.44 1.44 0 01-1.44 1.44h-6.72a1.44 1.44 0 01-1.44-1.44V2.4c0-.795.645-1.44 1.44-1.44zM21.6 9.6a.48.48 0 00.48-.48V2.4a.48.48 0 00-.48-.48h-6.72a.48.48 0 00-.48.48v6.72c0 .265.215.48.48.48h6.72zM2.4 13.44h6.72c.795 0 1.44.645 1.44 1.44v6.72a1.44 1.44 0 01-1.44 1.44H2.4A1.44 1.44 0 01.96 21.6v-6.72c0-.795.645-1.44 1.44-1.44zm6.72 8.64a.48.48 0 00.48-.48v-6.72a.48.48 0 00-.48-.48H2.4a.48.48 0 00-.48.48v6.72c0 .265.215.48.48.48h6.72zM14.88 13.44h6.72c.795 0 1.44.645 1.44 1.44v6.72a1.44 1.44 0 01-1.44 1.44h-6.72a1.44 1.44 0 01-1.44-1.44v-6.72c0-.795.645-1.44 1.44-1.44zm6.72 8.64a.48.48 0 00.48-.48v-6.72a.48.48 0 00-.48-.48h-6.72a.48.48 0 00-.48.48v6.72c0 .265.215.48.48.48h6.72z\" fill=\"#fff\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "24",
      "height": "24",
      "name": "two-grids",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"26\" fill=\"none\"><path fill=\"#D8D6E5\" d=\"M19.257 3.642l1.829 1.828L9.975 16.581a.495.495 0 01-.354.146H8v1h2.621a.5.5 0 00.354-.146l11.11-11.11-2.828-2.83zm4.597.353l-1-1a.5.5 0 010 .707l-1.061 1.06 1 1 1.06-1.06a.5.5 0 000-.707z\"/><path fill=\"#5F259F\" d=\"M19.5 15.727a.5.5 0 00-.5.5v8a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-17a.5.5 0 01.5-.5h8a.5.5 0 100-1h-8a1.5 1.5 0 00-1.5 1.5v17a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5v-8a.5.5 0 00-.5-.5z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M24.56 3.288l-2.12-2.121a1.5 1.5 0 00-2.122 0L7.44 14.045c-.281.282-.44.663-.439 1.061v2.621a1 1 0 001 1h2.621c.398 0 .78-.158 1.061-.44L24.561 5.41a1.498 1.498 0 000-2.121zM10.976 17.58a.495.495 0 01-.354.146H8v-2.62a.5.5 0 01.146-.355l11.111-11.11 2.829 2.828-11.111 11.11zM22.793 5.763l1.06-1.061a.499.499 0 000-.707l-2.12-2.121a.502.502 0 00-.708 0l-1.06 1.06 2.828 2.829z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "26",
      "name": "ui-compose-2",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\"><path fill=\"#9EFFED\" fill-rule=\"evenodd\" d=\"M2.4 2.88h19.2a.48.48 0 01.48.48v2.4H1.92v-2.4a.48.48 0 01.48-.48z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M21.6 1.92H2.4A1.44 1.44 0 00.96 3.36v17.28c0 .795.645 1.44 1.44 1.44h19.2a1.44 1.44 0 001.44-1.44V3.36a1.44 1.44 0 00-1.44-1.44zm-19.2.96h19.2a.48.48 0 01.48.48v2.4H1.92v-2.4a.48.48 0 01.48-.48zm19.2 18.24H2.4a.48.48 0 01-.48-.48V6.72h20.16v13.92a.48.48 0 01-.48.48z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "24",
      "height": "24",
      "name": "topbar",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M30.811 4.663l2.926 2.925L15.96 25.366a.797.797 0 01-.566.234H12.8v1.6h4.194a.8.8 0 00.566-.234L35.337 9.188l-4.526-4.525zm7.355.565l-1.6-1.6a.8.8 0 010 1.131l-1.697 1.698 1.6 1.6 1.697-1.698a.8.8 0 000-1.13z\"/><path fill=\"#3A7C70\" d=\"M31.2 24a.8.8 0 00-.8.8v12.8a.8.8 0 01-.8.8H2.4a.8.8 0 01-.8-.8V10.4a.8.8 0 01.8-.8h12.8a.8.8 0 100-1.6H2.4A2.4 2.4 0 000 10.4v27.2A2.4 2.4 0 002.4 40h27.2a2.4 2.4 0 002.4-2.4V24.8a.8.8 0 00-.8-.8z\"/><path fill=\"#3A7C70\" fill-rule=\"evenodd\" d=\"M39.297 4.097L35.903.703a2.4 2.4 0 00-3.394 0L11.903 21.31a2.4 2.4 0 00-.703 1.697V27.2a1.6 1.6 0 001.6 1.6h4.194a2.4 2.4 0 001.697-.703L39.297 7.49a2.4 2.4 0 000-3.394zM17.56 26.966a.795.795 0 01-.566.234H12.8v-4.194c0-.212.084-.416.235-.566L30.812 4.663l4.525 4.525L17.56 26.966zM36.469 8.057l1.697-1.698a.8.8 0 000-1.13l-3.394-3.394a.8.8 0 00-1.132 0L31.943 3.53l4.526 4.526z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "ui-compose-3",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M30.813 4.662l2.925 2.926-17.777 17.777a.802.802 0 01-.566.235H12.8v1.6h4.194a.798.798 0 00.566-.235L35.338 9.188l-4.526-4.526zm7.353.565l-1.6-1.6a.8.8 0 010 1.13l-1.697 1.698 1.6 1.6 1.697-1.697a.8.8 0 000-1.131z\"/><path fill=\"#fff\" d=\"M31.2 24a.8.8 0 00-.8.8v12.8a.8.8 0 01-.8.8H2.4a.8.8 0 01-.8-.8V10.4a.8.8 0 01.8-.8h12.8a.8.8 0 100-1.6H2.4A2.4 2.4 0 000 10.4v27.2A2.4 2.4 0 002.4 40h27.2a2.4 2.4 0 002.4-2.4V24.8a.8.8 0 00-.8-.8z\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M39.296 4.096L35.902.703a2.4 2.4 0 00-3.394 0L11.902 21.308a2.402 2.402 0 00-.703 1.698V27.2a1.6 1.6 0 001.6 1.6h4.194c.637 0 1.247-.253 1.697-.704L39.296 7.491a2.4 2.4 0 000-3.395zM17.56 26.966a.8.8 0 01-.566.234H12.8v-4.194c0-.213.084-.417.235-.567L30.81 4.662l4.526 4.526-17.778 17.777zm18.909-18.91l1.697-1.697a.8.8 0 000-1.131L34.77 1.834a.802.802 0 00-1.132 0l-1.697 1.697 4.526 4.526z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "40",
      "height": "40",
      "name": "ui-compose",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M22.122 2.627A14.703 14.703 0 016.037 26.815a14.71 14.71 0 0024.682-10.656 14.71 14.71 0 00-8.597-13.532z\"/><path fill=\"#00D1AB\" fill-rule=\"evenodd\" d=\"M0 16C0 7.163 7.163 0 16 0a16.003 16.003 0 0116 16c0 8.837-7.163 16-16 16S0 24.837 0 16zm28.279-8.122A14.717 14.717 0 0016 1.28 14.719 14.719 0 003.721 7.878 14.72 14.72 0 002.456 21.76h10.408a3.183 3.183 0 011.674-2.21 3.184 3.184 0 012.772-.064.569.569 0 01.026-.056L25.08 8.588a.641.641 0 011.043.744l-7.745 10.842a.085.085 0 01-.027.023.143.143 0 00-.023.02c.408.429.688.963.808 1.543h10.408a14.717 14.717 0 00-1.265-13.882zM17.92 22.4a1.92 1.92 0 11-3.841-.001 1.92 1.92 0 013.841.001zm-14.843.64A14.733 14.733 0 0016 30.72a14.735 14.735 0 0012.924-7.68h-9.788a3.2 3.2 0 01-6.272 0H3.077z\" clip-rule=\"evenodd\"/><path fill=\"#00D1AB\" d=\"M4.48 16.64a.64.64 0 00.64-.64c0-4.015 2.21-7.703 5.75-9.596a10.883 10.883 0 0111.174.55.64.64 0 00.712-1.063A12.16 12.16 0 003.84 16c0 .353.286.64.64.64z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "32",
      "height": "32",
      "name": "ui-speed",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"33\" height=\"32\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M16.998 6.4a4.436 4.436 0 00-1.92.45 4.452 4.452 0 010 8.061 4.44 4.44 0 001.92.45 4.48 4.48 0 000-8.96zm0 12.8a9.46 9.46 0 00-1.92.199 9.615 9.615 0 017.543 7.86 14.664 14.664 0 01-7.543 3.32 14.43 14.43 0 0011.383-3.321 9.606 9.606 0 00-9.463-8.059z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M11.238 10.88a5.76 5.76 0 1111.52 0 5.76 5.76 0 01-11.52 0zm1.28 0a4.48 4.48 0 004.48 4.48 4.48 4.48 0 10-4.48-4.48z\" clip-rule=\"evenodd\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M17 0a15.985 15.985 0 00-9.6 28.78 15.916 15.916 0 0019.198 0 16.23 16.23 0 001.228-1.023A15.984 15.984 0 0017 0zm0 30.72a14.65 14.65 0 01-9.464-3.461 9.585 9.585 0 0118.926 0 14.646 14.646 0 01-9.463 3.461zm0-12.801c5.017 0 9.381 3.436 10.559 8.313 5.625-5.792 5.534-15.033-.202-20.714-5.737-5.681-14.979-5.681-20.716 0C.905 11.198.814 20.44 6.44 26.232A10.861 10.861 0 0117 17.92z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "33",
      "height": "32",
      "name": "user-profile-picture",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"28\" cy=\"28\" r=\"28\" fill=\"#F0C63B\"/><path d=\"M41.639 12.078c-2.11 1.338-6.124 3.041-10.401.798-7.725-4.014-14.241-.147-16.797 1.824l-.272-.75a.803.803 0 00-.972-.521.767.767 0 00-.5 1l11.886 32.918a.812.812 0 00.977.527.782.782 0 00.5-1.004L21.6 34.512c1.833-1.637 5.633-4.367 9.13-2.726 4.7 2.204 9.285.843 11.301 0a1.74 1.74 0 001.066-1.587l.134-17.238a1.039 1.039 0 00-1.593-.892v.009zm.303 2.381l-.058 14.718c0 .687 0 1.218-1.057 1.575-2.003.816-4.665 1.663-9.206-.076-3.974-1.864-8.229.25-9.682 1.632-.3.286-.7.955-1.124.072L15.06 16.453a.445.445 0 01.138-.375c1.312-1.19 7.056-5.994 15.856-1.65.338.164.69.297 1.052.397 4.46 1.227 6.41.513 8.425-.785 1.236-.798 1.419-.383 1.414.446\" fill=\"#fff\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "valor-comprometimento",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"28\" cy=\"28\" r=\"28\" fill=\"#00E3B8\"/><path d=\"M43.775 31.037v-4.863l2.284-1.133a.64.64 0 000-1.137l-17.284-8.69a1.699 1.699 0 00-1.52 0l-17.192 8.549a.823.823 0 000 1.465l8.324 4.192v6.85c.192 2.607 4.416 4.694 9.59 4.694 5.173 0 9.401-2.087 9.588-4.694v-6.946l4.813-2.424v4.137a2.082 2.082 0 00-1.114 2.968 1.918 1.918 0 001.726 1.04h.023a2.114 2.114 0 002.1-1.68 2.063 2.063 0 00-1.333-2.328h-.005zm-7.616 4.83c-.251 2.188-3.826 3.9-8.187 3.9-4.36 0-7.936-1.721-8.192-3.918v-5.725l7.169 3.611a2.086 2.086 0 001.863 0l7.347-3.703v5.836zm-9.073-3.543L12.214 24.84a.384.384 0 010-.685l15.068-7.484a1.63 1.63 0 011.462 0L43.61 24.17a.362.362 0 010 .644l-14.927 7.511a1.78 1.78 0 01-1.607 0\" fill=\"#fff\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "valor-excelencia",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"28\" cy=\"28\" r=\"28\" fill=\"#FF56A9\"/><path d=\"M36.656 13.096a9.74 9.74 0 00-8.675 5.283 9.739 9.739 0 00-8.676-5.283 9.749 9.749 0 00-9.73 9.187c0 8.895 5.602 17.119 16.716 23.288a3.26 3.26 0 001.671.342 3.252 3.252 0 001.672-.342C40.748 39.397 46.35 31.173 46.35 22.283a9.749 9.749 0 00-9.73-9.187h.036zm-6.958 30.593a3.699 3.699 0 01-1.736.535 3.539 3.539 0 01-1.735-.535C16.99 38.552 11.035 29.96 11.26 22.863a8.028 8.028 0 018.046-7.936 7.931 7.931 0 017.447 5.214A1.324 1.324 0 0028 21.151a1.324 1.324 0 001.2-.996 7.936 7.936 0 017.448-5.215 8.027 8.027 0 018.055 7.914c.224 7.096-5.73 15.69-14.968 20.826\" fill=\"#fff\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "valor-gratidao",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"28\" cy=\"28\" r=\"28\" fill=\"#346CBA\"/><path d=\"M35.736 20.38a.955.955 0 00-.717-.598L28.22 17.23a1.147 1.147 0 00-.219 0 1.18 1.18 0 00-.22 0l-6.794 2.552a.964.964 0 00-.721.617c-.292.79-1.37 4.265-1.37 6.58v.406c-.002.139.007.278.027.415.076.845.27 1.675.576 2.466.963 3.197 3.53 6.087 7.69 8.398.25.126.531.182.812.164.28.02.562-.037.813-.164 4.16-2.31 6.73-5.215 7.694-8.398a9.211 9.211 0 00.575-2.465c0-.215.032-.279.028-.416-.005-.137 0-.27 0-.406 0-2.315-1.092-5.79-1.37-6.58l-.005-.018zm.005 7.453a7.631 7.631 0 01-.489 2.095c-.817 2.704-3 5.17-6.534 7.133a1.37 1.37 0 01-.69.141 1.37 1.37 0 01-.69-.141c-3.533-1.964-5.716-4.43-6.533-7.133a7.796 7.796 0 01-.494-2.114 2.951 2.951 0 01-.022-.351v-.347a17.37 17.37 0 011.173-5.59.817.817 0 01.612-.52l5.772-2.169a.915.915 0 01.187 0 .837.837 0 01.187 0l5.772 2.169a.818.818 0 01.612.52 17.351 17.351 0 011.173 5.59v.347c0 .114 0 .169-.027.351l-.01.018zm7.808-1.603c0-3.197-1.854-9.85-2.352-11.197a1.627 1.627 0 00-1.25-1.04L28.384 9.644a2.042 2.042 0 00-.375-.032c-.125 0-.25.01-.374.032l-11.562 4.347a1.64 1.64 0 00-1.242 1.041c-.493 1.348-2.352 8.023-2.352 11.197v.69c.004.237.019.475.046.712.132 1.434.462 2.843.982 4.187 1.64 5.424 6.009 10.356 13.082 14.287.424.214.896.311 1.37.284a2.69 2.69 0 001.37-.284c7.077-3.931 11.447-8.863 13.087-14.287.518-1.344.847-2.753.977-4.187a5.91 5.91 0 00.045-.713v-.69h.11zm-1.539 1.434a14.154 14.154 0 01-.913 3.817c-1.493 4.94-5.48 9.438-11.927 13.023-.39.195-.825.284-1.26.255-.436.029-.87-.06-1.26-.255-6.338-3.585-10.343-8.082-11.818-13.023a14.158 14.158 0 01-.913-3.817 5.876 5.876 0 01-.046-.644v-.635c0-3.384 1.694-8.973 2.142-10.2a1.497 1.497 0 011.1-.969l10.539-3.959c.111-.02.225-.03.338-.032.115.002.23.013.342.032l10.548 3.96a1.488 1.488 0 011.114.953c.457 1.229 2.142 6.818 2.142 10.201v.635c-.001.215-.015.43-.041.644\" fill=\"#fff\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "valor-integridade",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"28\" cy=\"28\" r=\"28\" fill=\"#809399\"/><path d=\"M45.7 27.307h-3.265a14.452 14.452 0 00-13.744-13.74v-3.264a.694.694 0 00-1.37 0v3.264a14.452 14.452 0 00-13.754 13.74h-3.264a.694.694 0 000 1.37h3.264a14.452 14.452 0 0013.74 13.744v3.265a.693.693 0 001.37 0v-3.265a14.453 14.453 0 0013.744-13.744h3.265a.693.693 0 000-1.37h.014zM28 41.107a13.105 13.105 0 110-26.21 13.105 13.105 0 010 26.21zm0-21.558a8.452 8.452 0 100 16.904 8.452 8.452 0 000-16.904zm0 15.553a7.1 7.1 0 110-14.2 7.1 7.1 0 010 14.2zm0-9.557a2.456 2.456 0 100 4.912 2.456 2.456 0 000-4.912zm0 3.561a1.105 1.105 0 110-2.21 1.105 1.105 0 010 2.21z\" fill=\"#fff\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "valor-simplicidade",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"56\" height=\"56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"28\" cy=\"28\" r=\"28\" fill=\"#FF674C\"/><path d=\"M35.941 32.731c1.621-10.046-1.3-21.256-7.689-23.333a.881.881 0 00-.502 0c-6.393 2.078-9.306 13.278-7.69 23.333-3.607 4.434-4.32 8.534-3.653 11.822a.717.717 0 001.279.288 13.192 13.192 0 014.79-4.242.5.5 0 00.192.2c1.08.573 2.256.943 3.47 1.092v2.352a1.867 1.867 0 103.735 0V41.89c1.214-.15 2.39-.52 3.47-1.091a.507.507 0 00.192-.201c1.92 1 3.566 2.456 4.79 4.242a.717.717 0 001.279-.288c.662-3.288-.05-7.388-3.653-11.822h-.01zm-18.36 10.26a.087.087 0 01-.165-.05c.083-3.434 1.31-6.1 3.096-7.908.338 1.474.797 2.92 1.37 4.32-1.26.62-3.598 2.232-4.324 3.652l.023-.014zm10.822 1.265a.425.425 0 11-.85 0V33.973a.425.425 0 01.85 0v10.283zm4.169-4.977a.484.484 0 01-.174.196 7.503 7.503 0 01-2.552.937v-6.439a1.868 1.868 0 00-3.736 0v6.425a7.59 7.59 0 01-2.557-.936.457.457 0 01-.169-.197c-4.442-10.045-2.365-26.027 4.389-28.424a.599.599 0 01.41 0c6.754 2.415 8.832 18.37 4.389 28.424v.014zm5.826 3.712c-.726-1.406-3.064-3.018-4.324-3.652a28.246 28.246 0 001.416-4.306c1.785 1.826 2.995 4.474 3.095 7.908a.087.087 0 01-.164.05h-.023zM28.001 18.266a4.635 4.635 0 10-.009 9.27 4.635 4.635 0 00.009-9.27zm0 7.868a3.237 3.237 0 11-.01-6.474 3.237 3.237 0 01.01 6.474z\" fill=\"#fff\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "56",
      "name": "valor-evolucao",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.5 21.107a8.5 8.5 0 100-17 8.5 8.5 0 000 17z\" fill=\"#D8D6E5\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 12.607C0 5.704 5.596.107 12.5.107a12.5 12.5 0 0112.5 12.5c0 6.904-5.596 12.5-12.5 12.5S0 19.511 0 12.607zm1 0c0 6.352 5.149 11.5 11.5 11.5 6.348-.007 11.493-5.151 11.5-11.5 0-6.35-5.149-11.5-11.5-11.5S1 6.257 1 12.607z\" fill=\"#6F647A\"/><path d=\"M13 12.4V6.608a.5.5 0 00-1 0v6.002c0 .13.052.254.142.346l.004.006 4 4a.5.5 0 00.707-.707L13 12.4z\" fill=\"#6F647A\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "26",
      "name": "wall-clock",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"55\" height=\"55\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M37.4 39.6v1.1a3.305 3.305 0 01-3.3 3.3h8.8a3.305 3.305 0 003.3-3.3v-1.1h-8.8zm0-15.4H44v13.2h-6.6zm11-22h4.4V22h-4.4z\"/><path fill=\"#5F259F\" d=\"M36.3 8.8h6.6a1.1 1.1 0 100-2.2h-3.3V5.5a1.1 1.1 0 00-2.2 0v1.1h-1.1a3.3 3.3 0 000 6.6h4.4a1.1 1.1 0 010 2.2h-6.6a1.1 1.1 0 000 2.2h3.3v1.1a1.1 1.1 0 102.2 0v-1.1h1.1a3.3 3.3 0 000-6.6h-4.4a1.1 1.1 0 010-2.2z\"/><path fill=\"#5F259F\" fill-rule=\"evenodd\" d=\"M25.3 0h26.4A3.3 3.3 0 0155 3.3v17.6a3.3 3.3 0 01-3.3 3.3h-5.5v13.2h2.2v3.3a5.506 5.506 0 01-5.5 5.5H5.5A5.507 5.507 0 010 40.7v-3.3h2.2V9.9a3.303 3.303 0 013.3-3.3H22V3.3A3.3 3.3 0 0125.3 0zm17.6 44a3.303 3.303 0 003.3-3.3v-1.1H28.6v2.2h-8.8v-2.2H2.2v1.1A3.303 3.303 0 005.5 44h37.4zM44 24.2v13.2H4.4V9.9a1.1 1.1 0 011.1-1.1H22v12.1a3.3 3.3 0 003.3 3.3H44zm7.7-2.2a1.1 1.1 0 001.1-1.1V3.3a1.1 1.1 0 00-1.1-1.1H25.3a1.1 1.1 0 00-1.1 1.1v17.6a1.1 1.1 0 001.1 1.1h26.4z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "55",
      "height": "55",
      "name": "web-banking",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"35\" height=\"35\" fill=\"none\"><path fill=\"#D2B6F1\" fill-rule=\"evenodd\" d=\"M14.728 29.454c8.134 0 14.727-6.593 14.727-14.727 0-5.296-2.795-9.94-6.992-12.535 6.609 2.043 11.41 8.201 11.41 15.48 0 8.948-7.252 16.2-16.2 16.2-7.279 0-13.437-4.8-15.48-11.41 2.595 4.197 7.239 6.992 12.535 6.992z\" clip-rule=\"evenodd\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M17.46 0c9.723-.003 17.469 7.896 17.466 17.81-.003 9.359-7.955 17.188-17.458 17.19C7.786 35.002 0 27.152 0 17.39 0 7.877 7.908.002 17.46 0zm-7.337 9.237c.159.53-.286.714-.759.751-.498.039-.995.076-1.573.12l5.71 17.01c.136-.225.193-.288.218-.362 1.055-3.156 2.117-6.31 3.146-9.474.094-.289.048-.671-.055-.968-.545-1.572-1.197-3.109-1.675-4.7-.326-1.089-.76-1.793-2.046-1.667-.22.021-.487-.45-.733-.694.297-.177.592-.504.892-.508 2.62-.04 5.243-.04 7.864.002.3.005.595.34.892.522-.26.237-.484.594-.788.686-.488.147-1.029.119-1.613.17l5.717 17.007c.866-2.877 1.671-5.518 2.455-8.166.699-2.364.282-4.572-.981-6.654-.38-.625-.847-1.233-1.063-1.916-.244-.776-.448-1.66-.318-2.44.22-1.32 1.233-1.976 2.604-2.101-7.502-6.963-19.29-4.47-23.634 3.095 1.672-.078 3.269-.179 4.866-.2.302-.005.803.25.874.487zm2.989 23.036c-.035.102-.037.215-.064.385 3.233.896 6.403.831 9.648-.262L17.74 18.817c-1.587 4.613-3.108 9.034-4.627 13.456zm-2.498-.614L3.144 11.17c-3.369 6.582-.806 16.624 7.47 20.49zm22.58-13.165c.237-3.112-.837-7.421-1.764-8.014-.104 1.145-.031 2.418-.36 3.579-.773 2.734-1.718 5.42-2.63 8.115-.989 2.928-2.018 5.843-3.03 8.765 4.755-2.819 7.367-6.978 7.784-12.445z\" clip-rule=\"evenodd\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "35",
      "height": "35",
      "name": "word-press-2",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10 20c5.523 0 10-4.477 10-10a9.994 9.994 0 00-4.748-8.511C19.74 2.875 23 7.057 23 12c0 6.075-4.925 11-11 11-4.943 0-9.124-3.26-10.511-7.748A9.994 9.994 0 009.999 20z\" fill=\"#D2B6F1\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.856 0c6.601-.002 11.861 5.361 11.86 12.093-.003 6.355-5.402 11.671-11.855 11.672C5.287 23.767 0 18.437 0 11.808 0 5.349 5.37.002 11.856 0zM6.874 6.272c.108.36-.195.485-.516.51l-1.068.082c1.295 3.858 2.57 7.66 3.877 11.55.093-.153.131-.196.148-.246.717-2.143 1.438-4.284 2.137-6.433.063-.196.032-.456-.038-.657-.37-1.068-.813-2.112-1.137-3.192-.221-.74-.516-1.218-1.39-1.132-.149.015-.33-.306-.497-.471.202-.12.402-.342.605-.345 1.78-.027 3.56-.027 5.34.002.204.003.404.23.606.354-.176.161-.329.403-.535.465-.331.1-.699.081-1.095.117l3.881 11.547c.588-1.953 1.136-3.747 1.668-5.545.474-1.605.191-3.104-.667-4.518-.258-.425-.575-.837-.721-1.3-.166-.528-.304-1.129-.216-1.658.15-.896.837-1.341 1.768-1.427C13.93-.752 5.926.94 2.976 6.077c1.135-.053 2.22-.121 3.304-.136.205-.003.545.17.594.331zm2.03 15.642c-.024.069-.026.146-.045.261 2.196.609 4.349.565 6.552-.178l-3.366-9.22-3.142 9.137zm-1.697-.417L2.135 7.585c-2.288 4.469-.547 11.288 5.072 13.912zm15.332-8.94c.16-2.113-.568-5.039-1.198-5.441-.07.777-.021 1.642-.244 2.43-.525 1.857-1.167 3.681-1.785 5.51-.672 1.989-1.37 3.968-2.058 5.952 3.228-1.914 5.002-4.738 5.285-8.45z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "24",
      "height": "24",
      "name": "wordpress",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"56\" height=\"59\" fill=\"none\"><path fill=\"#D2B6F1\" d=\"M49.28 21.28v30.24H1.12v3.36c0 .619.5 1.12 1.12 1.12h50.4a1.12 1.12 0 001.12-1.12v-33.6h-4.48z\"/><path fill=\"#5F259F\" d=\"M54.88 20.16a1.12 1.12 0 00-1.12 1.12V56H2.24V22.4H44.8a6.72 6.72 0 100-13.44H23.984l4.808-4.808a1.12 1.12 0 10-1.584-1.584l-6.72 6.72a1.12 1.12 0 000 1.584l6.72 6.72a1.12 1.12 0 101.584-1.584L23.984 11.2H44.8a4.48 4.48 0 010 8.96H2.24A2.24 2.24 0 000 22.4V56a2.24 2.24 0 002.24 2.24h51.52A2.24 2.24 0 0056 56V21.28a1.12 1.12 0 00-1.12-1.12z\"/><path fill=\"#5F259F\" d=\"M28 33.6h4.48a1.12 1.12 0 100-2.24h-3.36v-1.12a1.12 1.12 0 00-2.24 0v1.12h-2.24a2.24 2.24 0 00-2.24 2.24v4.48a2.24 2.24 0 002.24 2.24h6.72v4.48h-7.84a1.12 1.12 0 000 2.24h3.36v1.12a1.12 1.12 0 002.24 0v-1.12h2.24a2.24 2.24 0 002.24-2.24v-4.48a2.24 2.24 0 00-2.24-2.24h-6.72V33.6H28z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "56",
      "height": "59",
      "name": "refund-dollar",
      "type": "shady"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.5 1h-2a.5.5 0 01.5.5v20.732l2 1.334V1.5a.5.5 0 00-.5-.5z\" fill=\"#D2B6F1\"/><path d=\"M15.5 5H13v-.5a.5.5 0 00-1 0V5h-1.5C9.672 5 9 5.672 9 6.5v1c0 .828.672 1.5 1.5 1.5h4a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 000 1H12v.5a.5.5 0 001 0V12h1.5c.828 0 1.5-.672 1.5-1.5v-1c0-.828-.672-1.5-1.5-1.5h-4a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h5a.5.5 0 000-1zM15.5 15h-6a.5.5 0 000 1h6a.5.5 0 000-1z\" fill=\"#5F259F\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.5 0h16c.828 0 1.5.672 1.5 1.5v23a.5.5 0 01-.777.416L18.5 23.101l-2.723 1.815a.499.499 0 01-.554 0L12.5 23.101l-2.723 1.815a.499.499 0 01-.554 0L6.5 23.101l-2.723 1.815A.5.5 0 013 24.5v-23C3 .672 3.672 0 4.5 0zm14.277 22.084L21 23.566V1.5a.5.5 0 00-.5-.5h-16a.5.5 0 00-.5.5v22.066l2.223-1.482a.499.499 0 01.554 0L9.5 23.899l2.723-1.815a.499.499 0 01.554 0l2.723 1.815 2.723-1.815a.499.499 0 01.554 0z\" fill=\"#5F259F\"/><path d=\"M15.5 18h-6a.5.5 0 000 1h6a.5.5 0 000-1z\" fill=\"#5F259F\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "receipt",
      "type": "shady"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"34\" fill=\"none\"><path fill=\"#9EFFED\" d=\"M16 28.16c6.008 0 10.88-4.87 10.88-10.88C26.88 11.271 22.007 6.4 16 6.4c-6.01 0-10.88 4.871-10.88 10.88 0 6.01 4.87 10.88 10.88 10.88z\"/><path fill=\"#00D1AB\" d=\"M32 17.281A15.996 15.996 0 001.28 11.03V3.2A.64.64 0 000 3.2v8.96a.642.642 0 00.64.64H9.6a.64.64 0 000-1.28H2.468a14.71 14.71 0 0128.252 5.76v1.28a.64.64 0 001.28 0v-1.279zm-.64 4.48H22.4a.64.64 0 000 1.28h7.132A14.713 14.713 0 011.28 17.28V16A.64.64 0 000 16v1.28a15.996 15.996 0 0030.72 6.252v7.828a.64.64 0 101.28 0V22.4a.64.64 0 00-.64-.64z\"/></svg>",
    "type": "shady",
    "metadata": {
      "width": "32",
      "height": "34",
      "name": "reload-ui",
      "type": "shady"
    }
  }],
  "solid": [{
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M23 12.494c0 .133-.053.26-.146.353l-7 7a.5.5 0 01-.707-.707l6.146-6.146H1.5a.5.5 0 010-1h19.793l-6.146-6.147a.5.5 0 01.707-.707l7 7c.093.094.146.221.146.354z\" fill=\"currentColor\" stroke=\"currentColor\"/></svg>",
    "type": "solid",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "arrow-right",
      "type": "solid"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.87 7.843l-9.646 10a.5.5 0 01-.7.028l-5.353-5.025a.5.5 0 11.67-.742l4.99 4.697 9.31-9.644a.5.5 0 11.73.686z\" fill=\"currentColor\"/></svg>",
    "type": "solid",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "check-ui",
      "type": "solid"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.994 8.5c0 .133-.053.26-.147.353l-9 9a.5.5 0 01-.707 0l-9-9a.5.5 0 01.707-.707l8.647 8.647 8.646-8.647a.5.5 0 01.854.354z\" fill=\"currentColor\" stroke=\"currentColor\"/></svg>",
    "type": "solid",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "chevron-bottom",
      "type": "solid"
    }
  }, {
    "source": "<svg width=\"20\" height=\"18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.08.72h15.84c.596 0 1.08.484 1.08 1.08v11.52a1.08 1.08 0 01-1.08 1.08h-1.8v2.16a.72.72 0 01-1.156.572l-3.546-2.657a.365.365 0 00-.22-.075H2.08A1.08 1.08 0 011 13.32V1.8C1 1.204 1.484.72 2.08.72zm15.84 12.96a.36.36 0 00.36-.36V1.8a.36.36 0 00-.36-.36H2.08a.36.36 0 00-.36.36v11.52c0 .198.161.36.36.36h9.117c.237 0 .466.078.654.22l3.547 2.658.002-2.374c0-.278.226-.504.504-.504h2.016z\" fill=\"currentColor\"/><path d=\"M17.92.72v-.5.5zM2.08.72v-.5.5zM19 1.8h.5-.5zm0 11.52h.5-.5zm-1.08 1.08v.5-.5zm-1.8 0v-.5h-.5v.5h.5zm0 2.16h.5-.5zm-.4.644l-.222-.448.222.448zm-.756-.072l.303-.398-.003-.002-.3.4zm-3.546-2.657l-.304.398.004.002.3-.4zm-.22-.075l.002-.5h-.003v.5zm-9.118 0v.5-.5zM1 13.32H.5 1zM1 1.8H.5 1zm17.28 11.52h.5-.5zm-.36.36v.5-.5zm.36-11.88h.5-.5zm-.36-.36v-.5.5zm-15.84 0v-.5.5zm-.36.36h-.5.5zm0 11.52h-.5.5zm.36.36v.5-.5zm9.117 0l.002-.5h-.002v.5zm.654.22l-.302.399.003.001.3-.4zm3.547 2.658l-.3.4.799.599v-.999h-.5zm.002-2.374h-.5.5zm.504-.504v-.5.5zM17.92.22H2.08v1h15.84v-1zM19.5 1.8A1.58 1.58 0 0017.92.22v1c.32 0 .58.26.58.58h1zm0 11.52V1.8h-1v11.52h1zm-1.58 1.58a1.581 1.581 0 001.58-1.58h-1c0 .32-.26.58-.58.58v1zm-1.8 0h1.8v-1h-1.8v1zm.5 1.66V14.4h-1v2.16h1zm-.678 1.092a1.22 1.22 0 00.678-1.093h-1a.22.22 0 01-.122.197l.444.896zm-1.28-.122c.368.28.864.328 1.28.122l-.444-.896a.22.22 0 01-.231-.022l-.606.796zm-3.544-2.655l3.546 2.657.6-.8-3.547-2.657-.6.8zm.077.025a.135.135 0 01-.08-.027l.606-.796a.865.865 0 00-.521-.177l-.005 1zm-9.115 0h9.117v-1H2.08v1zM.5 13.32c0 .872.708 1.579 1.58 1.58v-1a.58.58 0 01-.58-.58h-1zM.5 1.8v11.52h1V1.8h-1zM2.08.22A1.58 1.58 0 00.5 1.8h1c0-.32.26-.58.58-.58v-1zm15.7 13.1a.14.14 0 01.14-.14v1a.86.86 0 00.86-.86h-1zm0-11.52v11.52h1V1.8h-1zm.14.14a.14.14 0 01-.14-.14h1a.86.86 0 00-.86-.86v1zm-15.84 0h15.84v-1H2.08v1zm.14-.14a.14.14 0 01-.14.14v-1a.86.86 0 00-.86.86h1zm0 11.52V1.8h-1v11.52h1zm-.14-.14a.14.14 0 01.14.14h-1a.86.86 0 00.86.86v-1zm9.117 0H2.08v1h9.117v-1zm.956.322a1.587 1.587 0 00-.955-.322l-.002 1c.128 0 .252.042.354.119l.603-.797zm3.545 2.656L12.15 13.5l-.6.8 3.547 2.658.6-.8zm-.798-1.975l-.002 2.374 1 .001.002-2.374h-1zm1.003-1.003c-.553 0-1.002.45-1.003 1.003l1 .002v-.002l.001-.002h.002l.002-.001-.002-1zm2.017 0h-2.016v1h2.016v-1z\" fill=\"currentColor\"/></svg>",
    "type": "solid",
    "metadata": {
      "width": "20",
      "height": "18",
      "name": "chat",
      "type": "solid"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.847 12.847l-9 9a.5.5 0 01-.707-.707l8.647-8.646L8.14 3.847a.5.5 0 01.707-.707l9 9a.5.5 0 010 .707z\" fill=\"currentColor\" stroke=\"currentColor\"/></svg>",
    "type": "solid",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "chevron-right",
      "type": "solid"
    }
  }, {
    "source": "<svg width=\"8\" height=\"23\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4 10.72V5.06M4 1.962V1\" stroke=\"currentColor\" stroke-linecap=\"round\"/><mask id=\"a\" fill=\"currentColor\"><path d=\"M3.601 22.494L.165 19A.56.56 0 010 18.608c0-.14.055-.281.165-.393a.54.54 0 01.783 0l2.502 2.539v-8.193c0-.309.248-.561.55-.561.302 0 .55.252.55.561v8.193l2.502-2.54a.54.54 0 01.783 0c.22.225.22.576 0 .8l-3.436 3.494c-.234.21-.591.21-.798-.014z\"/></mask><path d=\"M3.601 22.494l1.473-1.353-.023-.026-.024-.024-1.426 1.403zM.165 19l-1.429 1.4.003.003L.165 19zm.783-.785l-1.428 1.4.004.003 1.424-1.403zm2.502 2.539l-1.425 1.404 3.425 3.476v-4.88h-2zm0-8.193h2-2zm1.1 0h-2 2zm0 8.193h-2v4.88l3.425-3.476-1.425-1.404zm2.502-2.54l1.424 1.404.004-.003-1.428-1.4zm.783.8l1.426 1.403.003-.003-1.429-1.4zm-3.436 3.494l1.338 1.486.045-.04.042-.044L4.4 22.508zm.628-1.417l-3.436-3.493-2.852 2.805 3.437 3.493 2.851-2.805zm-3.433-3.49c.248.254.406.613.406 1.007h-4c0 .674.268 1.314.736 1.792l2.858-2.8zM2 18.608c0 .393-.158.752-.406 1.006l-2.858-2.799A2.56 2.56 0 00-2 18.608h4zm-.406 1.006a1.46 1.46 0 01-2.074 0l2.857-2.799a2.54 2.54 0 00-3.64 0l2.857 2.8zm-2.07.004l2.501 2.54 2.85-2.808-2.502-2.539-2.85 2.807zm5.926 1.136v-8.193h-4v8.193h4zm0-8.193C5.45 13.32 4.84 14 4 14v-4c-1.445 0-2.55 1.187-2.55 2.561h4zM4 14c-.84 0-1.45-.681-1.45-1.439h4C6.55 11.187 5.445 10 4 10v4zm-1.45-1.439v8.193h4v-8.193h-4zm3.425 9.597l2.501-2.54-2.85-2.807-2.5 2.54 2.849 2.807zm2.505-2.544a1.46 1.46 0 01-2.074 0l2.858-2.799a2.54 2.54 0 00-3.641 0l2.857 2.8zm-2.074 0a1.433 1.433 0 010-2l2.858 2.8a2.567 2.567 0 000-3.599l-2.857 2.8zm.003-2.002l-3.436 3.493 2.851 2.805 3.437-3.493-2.852-2.805zm-3.349 3.41a1.433 1.433 0 012.014.119l-2.946 2.706c1.036 1.127 2.66 1.001 3.609.147L3.06 21.02z\" fill=\"currentColor\" mask=\"url(#a)\"/></svg>",
    "type": "solid",
    "metadata": {
      "width": "8",
      "height": "23",
      "name": "dashed-arrow-bottom",
      "type": "solid"
    }
  }, {
    "source": "<svg width=\"24\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22 21.6c0 .609-.494 1.103-1.104 1.103H15.8v-7.745h2.6l.389-3.018h-2.99v-1.927c0-.874.243-1.47 1.497-1.47h1.598v-2.7a21.391 21.391 0 00-2.33-.12c-2.304 0-3.881 1.408-3.881 3.99v2.227h-2.607v3.018h2.607v7.745h-9.58C2.495 22.703 2 22.21 2 21.6V3.807c0-.61.494-1.104 1.104-1.104h17.792c.61 0 1.104.494 1.104 1.104V21.6z\" fill=\"currentColor\"/><mask id=\"a\" maskUnits=\"userSpaceOnUse\" x=\"2\" y=\"2\" width=\"20\" height=\"21\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22 21.6c0 .609-.494 1.103-1.104 1.103H15.8v-7.745h2.6l.389-3.018h-2.99v-1.927c0-.874.243-1.47 1.497-1.47h1.598v-2.7a21.391 21.391 0 00-2.33-.12c-2.304 0-3.881 1.408-3.881 3.99v2.227h-2.607v3.018h2.607v7.745h-9.58C2.495 22.703 2 22.21 2 21.6V3.807c0-.61.494-1.104 1.104-1.104h17.792c.61 0 1.104.494 1.104 1.104V21.6z\" fill=\"currentColor\"/></mask><g mask=\"url(#a)\"><path fill=\"currentColor\" d=\"M0 .703h24v24H0z\"/></g></svg>",
    "type": "solid",
    "metadata": {
      "width": "24",
      "height": "25",
      "name": "facebook",
      "type": "solid"
    }
  }, {
    "source": "<svg width=\"25\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.86 18.153a.5.5 0 01-.707.707l-5.647-5.647L6.86 18.86a.5.5 0 01-.707-.707l5.646-5.647L6.153 6.86a.5.5 0 11.707-.707l5.646 5.646 5.647-5.646a.5.5 0 11.707.707l-5.647 5.646 5.647 5.647z\" fill=\"currentColor\"/></svg>",
    "type": "solid",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "cross-ui",
      "type": "solid"
    }
  }, {
    "source": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\"><path d=\"M22 5.5a.5.5 0 01-.5.5h-18a.5.5 0 010-1h18a.5.5 0 01.5.5zM19.5 9h-14a.5.5 0 000 1h14a.5.5 0 000-1zm-2 4h-10a.5.5 0 000 1h10a.5.5 0 000-1zm-2 4h-6a.5.5 0 000 1h6a.5.5 0 000-1zm-2 4h-2a.5.5 0 000 1h2a.5.5 0 000-1z\" fill-rule=\"evenodd\"/></svg>",
    "type": "solid",
    "metadata": {
      "width": "25",
      "height": "25",
      "name": "filter",
      "type": "solid"
    }
  }, {
    "source": "<svg width=\"20\" height=\"20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.19 0H1.81C.81 0 0 .81 0 1.81v16.38C0 19.19.81 20 1.81 20h16.38c1 0 1.81-.81 1.81-1.81V1.81c0-1-.81-1.81-1.81-1.81zM6.19 17.27c0 .29-.236.526-.527.526h-2.24a.526.526 0 01-.527-.527V7.875c0-.291.235-.527.526-.527h2.241c.291 0 .527.236.527.527v9.394zM4.542 6.461a2.13 2.13 0 110-4.258 2.13 2.13 0 010 4.258zM17.9 17.312a.484.484 0 01-.484.484h-2.405a.484.484 0 01-.484-.484v-4.407c0-.657.193-2.88-1.718-2.88-1.482 0-1.783 1.521-1.843 2.204v5.083a.484.484 0 01-.484.484H8.157a.484.484 0 01-.484-.484v-9.48c0-.267.216-.484.484-.484h2.326c.267 0 .484.217.484.484v.82c.55-.825 1.366-1.462 3.105-1.462 3.851 0 3.829 3.598 3.829 5.575v4.547z\" fill=\"currentColor\"/></svg>",
    "type": "solid",
    "metadata": {
      "width": "20",
      "height": "20",
      "name": "linkedin",
      "type": "solid"
    }
  }, {
    "source": "<svg width=\"24\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.875 2.77c1.066-.049 1.407-.06 4.122-.06s3.055.011 4.122.06c1.064.048 1.79.217 2.426.464a4.9 4.9 0 011.77 1.153 4.9 4.9 0 011.154 1.771c.247.636.416 1.363.464 2.427.05 1.066.06 1.406.06 4.121 0 2.715-.01 3.056-.06 4.122-.048 1.064-.217 1.79-.464 2.427a4.9 4.9 0 01-1.153 1.77 4.901 4.901 0 01-1.77 1.153c-.637.247-1.363.416-2.427.465-1.067.049-1.407.06-4.122.06s-3.056-.011-4.122-.06c-1.064-.049-1.79-.218-2.426-.465a4.9 4.9 0 01-1.771-1.153 4.9 4.9 0 01-1.153-1.77c-.247-.636-.416-1.363-.465-2.427-.048-1.066-.06-1.407-.06-4.122s.012-3.055.06-4.121c.049-1.064.218-1.791.465-2.427a4.9 4.9 0 011.153-1.77 4.9 4.9 0 011.77-1.154c.636-.247 1.363-.416 2.427-.464zm8.161 1.799c-1.054-.048-1.37-.058-4.04-.058-2.668 0-2.985.01-4.039.058-.974.044-1.504.207-1.856.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.747 1.15-.137.352-.3.881-.344 1.856-.049 1.054-.059 1.37-.059 4.04 0 2.669.01 2.985.059 4.039.044.975.207 1.504.344 1.856.181.467.398.8.748 1.15.35.35.682.566 1.149.747.352.137.882.3 1.856.345 1.054.048 1.37.058 4.04.058s2.986-.01 4.04-.058c.974-.045 1.503-.208 1.856-.345.466-.18.8-.397 1.15-.747.349-.35.566-.683.747-1.15.137-.352.3-.881.344-1.856.048-1.054.058-1.37.058-4.04 0-2.669-.01-2.985-.058-4.04-.044-.974-.207-1.503-.344-1.856a3.097 3.097 0 00-.748-1.149 3.097 3.097 0 00-1.15-.748c-.352-.137-.88-.3-1.856-.344zm-7.371 8.137a3.332 3.332 0 106.664 0 3.332 3.332 0 00-6.664 0zm-1.802 0a5.133 5.133 0 1110.267 0 5.133 5.133 0 01-10.267 0zm10.47-4.136a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z\" fill=\"currentColor\"/><mask id=\"a\" maskUnits=\"userSpaceOnUse\" x=\"2\" y=\"2\" width=\"20\" height=\"21\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.875 2.77c1.066-.049 1.407-.06 4.122-.06s3.055.011 4.122.06c1.064.048 1.79.217 2.426.464a4.9 4.9 0 011.77 1.153 4.9 4.9 0 011.154 1.771c.247.636.416 1.363.464 2.427.05 1.066.06 1.406.06 4.121 0 2.715-.01 3.056-.06 4.122-.048 1.064-.217 1.79-.464 2.427a4.9 4.9 0 01-1.153 1.77 4.901 4.901 0 01-1.77 1.153c-.637.247-1.363.416-2.427.465-1.067.049-1.407.06-4.122.06s-3.056-.011-4.122-.06c-1.064-.049-1.79-.218-2.426-.465a4.9 4.9 0 01-1.771-1.153 4.9 4.9 0 01-1.153-1.77c-.247-.636-.416-1.363-.465-2.427-.048-1.066-.06-1.407-.06-4.122s.012-3.055.06-4.121c.049-1.064.218-1.791.465-2.427a4.9 4.9 0 011.153-1.77 4.9 4.9 0 011.77-1.154c.636-.247 1.363-.416 2.427-.464zm8.161 1.799c-1.054-.048-1.37-.058-4.04-.058-2.668 0-2.985.01-4.039.058-.974.044-1.504.207-1.856.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.747 1.15-.137.352-.3.881-.344 1.856-.049 1.054-.059 1.37-.059 4.04 0 2.669.01 2.985.059 4.039.044.975.207 1.504.344 1.856.181.467.398.8.748 1.15.35.35.682.566 1.149.747.352.137.882.3 1.856.345 1.054.048 1.37.058 4.04.058s2.986-.01 4.04-.058c.974-.045 1.503-.208 1.856-.345.466-.18.8-.397 1.15-.747.349-.35.566-.683.747-1.15.137-.352.3-.881.344-1.856.048-1.054.058-1.37.058-4.04 0-2.669-.01-2.985-.058-4.04-.044-.974-.207-1.503-.344-1.856a3.097 3.097 0 00-.748-1.149 3.097 3.097 0 00-1.15-.748c-.352-.137-.88-.3-1.856-.344zm-7.371 8.137a3.332 3.332 0 106.664 0 3.332 3.332 0 00-6.664 0zm-1.802 0a5.133 5.133 0 1110.267 0 5.133 5.133 0 01-10.267 0zm10.47-4.136a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z\" fill=\"currentColor\"/></mask><g mask=\"url(#a)\"><path fill=\"currentColor\" d=\"M0 .703h24v24H0z\"/></g></svg>",
    "type": "solid",
    "metadata": {
      "width": "24",
      "height": "25",
      "name": "instagram",
      "type": "solid"
    }
  }, {
    "source": "<svg width=\"105\" height=\"105\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M24 28.5C24 12.76 36.76 0 52.5 0A28.5 28.5 0 0181 28.5C81 44.24 68.24 57 52.5 57S24 44.24 24 28.5zm22.28 14.634L66.8 29.456a1.14 1.14 0 00.001-1.91l-20.52-13.68a1.14 1.14 0 00-1.761.956v27.356a1.14 1.14 0 001.76.956z\" fill=\"currentColor\"/></svg>",
    "type": "solid",
    "metadata": {
      "width": "105",
      "height": "105",
      "name": "music-play-sign",
      "type": "solid"
    }
  }, {
    "source": "<svg width=\"25\" height=\"26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.92 16.505l6.825 6.825a1 1 0 01-1.414 1.414l-6.826-6.825a9.519 9.519 0 111.414-1.414zM2.037 10.537a7.5 7.5 0 007.5 7.5 7.509 7.509 0 007.5-7.5 7.5 7.5 0 00-15 0z\" fill=\"currentColor\"/></svg>",
    "type": "solid",
    "metadata": {
      "width": "25",
      "height": "26",
      "name": "search",
      "type": "solid"
    }
  }, {
    "source": "<svg width=\"24\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.29 20.954c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.354-.012-.53A8.348 8.348 0 0022 6.625a8.19 8.19 0 01-2.357.645A4.118 4.118 0 0021.447 5a8.224 8.224 0 01-2.605.997 4.107 4.107 0 00-6.993 3.742 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.478 4.073 4.073 0 01-1.862-.514v.052a4.105 4.105 0 003.292 4.022 4.097 4.097 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.234 8.234 0 012 19.111a11.617 11.617 0 006.29 1.84\" fill=\"currentColor\"/><mask id=\"a\" maskUnits=\"userSpaceOnUse\" x=\"2\" y=\"4\" width=\"20\" height=\"17\"><path d=\"M8.29 20.954c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.354-.012-.53A8.348 8.348 0 0022 6.625a8.19 8.19 0 01-2.357.645A4.118 4.118 0 0021.447 5a8.224 8.224 0 01-2.605.997 4.107 4.107 0 00-6.993 3.742 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.478 4.073 4.073 0 01-1.862-.514v.052a4.105 4.105 0 003.292 4.022 4.097 4.097 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.234 8.234 0 012 19.111a11.617 11.617 0 006.29 1.84\" fill=\"currentColor\"/></mask><g mask=\"url(#a)\"><path fill=\"currentColor\" d=\"M0 .703h24v24H0z\"/></g></svg>",
    "type": "solid",
    "metadata": {
      "width": "24",
      "height": "25",
      "name": "twitter",
      "type": "solid"
    }
  }, {
    "source": "<svg width=\"14\" height=\"14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#a)\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.128 0a6.916 6.916 0 00-3.465.93 6.847 6.847 0 00-2.52 2.536 6.78 6.78 0 00.097 6.875L0 14l3.801-1.207a6.913 6.913 0 008.542-1.536 6.8 6.8 0 001.434-2.733 6.769 6.769 0 00-1.222-5.879A6.863 6.863 0 0010.148.7 6.917 6.917 0 007.124.002L7.128 0zm0 12.553a5.776 5.776 0 01-3.18-.948l-2.22.705.72-2.132a5.702 5.702 0 01.293-7.091A5.788 5.788 0 016.01 1.192a5.818 5.818 0 013.749.519 5.753 5.753 0 012.62 2.71 5.692 5.692 0 01.368 3.738 5.729 5.729 0 01-2.042 3.162 5.808 5.808 0 01-3.577 1.23v.002zM5.515 4c-.11-.266-.196-.275-.369-.284-.058 0-.122-.005-.192-.005-.222 0-.452.065-.59.205a1.829 1.829 0 00-.59 1.394c0 .823.604 1.618.688 1.73.085.111 1.178 1.824 2.879 2.522 1.327.546 1.72.497 2.024.432.44-.095.994-.418 1.135-.808.14-.39.14-.725.098-.795-.042-.07-.152-.111-.323-.195s-.997-.488-1.152-.543a.327.327 0 00-.415.124 6.74 6.74 0 01-.453.593.364.364 0 01-.409.064 4.29 4.29 0 01-1.355-.83 5.037 5.037 0 01-.937-1.158c-.098-.167-.01-.267.067-.358.086-.104.166-.179.25-.276a1.11 1.11 0 00.188-.26.34.34 0 00-.024-.311c-.042-.084-.38-.906-.52-1.241z\" fill=\"currentColor\"/></g><defs><clipPath id=\"a\"><path fill=\"currentColor\" d=\"M0 0h14v14H0z\"/></clipPath></defs></svg>",
    "type": "solid",
    "metadata": {
      "width": "14",
      "height": "14",
      "name": "whatsapp",
      "type": "solid"
    }
  }, {
    "source": "<svg width=\"24\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.738 6.283A2.494 2.494 0 0121.5 8.044c.416 1.553.416 4.794.416 4.794s0 3.24-.416 4.793a2.494 2.494 0 01-1.76 1.76c-1.554.417-7.781.417-7.781.417s-6.228 0-7.781-.416a2.494 2.494 0 01-1.76-1.76C2 16.077 2 12.837 2 12.837s0-3.24.416-4.794a2.494 2.494 0 011.76-1.76c1.554-.417 7.782-.417 7.782-.417s6.227 0 7.78.416zm-4.598 6.555L9.966 9.85v5.975l5.174-2.987z\" fill=\"currentColor\"/><mask id=\"a\" maskUnits=\"userSpaceOnUse\" x=\"2\" y=\"5\" width=\"20\" height=\"15\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.738 6.283A2.494 2.494 0 0121.5 8.044c.416 1.553.416 4.794.416 4.794s0 3.24-.416 4.793a2.494 2.494 0 01-1.76 1.76c-1.554.417-7.781.417-7.781.417s-6.228 0-7.781-.416a2.494 2.494 0 01-1.76-1.76C2 16.077 2 12.837 2 12.837s0-3.24.416-4.794a2.494 2.494 0 011.76-1.76c1.554-.417 7.782-.417 7.782-.417s6.227 0 7.78.416zm-4.598 6.555L9.966 9.85v5.975l5.174-2.987z\" fill=\"currentColor\"/></mask><g mask=\"url(#a)\"><path fill=\"currentColor\" d=\"M0 .703h24v24H0z\"/></g></svg>",
    "type": "solid",
    "metadata": {
      "width": "24",
      "height": "25",
      "name": "youtube",
      "type": "solid"
    }
  }, {
    "source": "<svg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.75 7.28894V19.2889C15.75 19.4879 15.671 19.6786 15.5303 19.8193C15.3897 19.9599 15.1989 20.0389 15 20.0389C14.8011 20.0389 14.6103 19.9599 14.4697 19.8193C14.329 19.6786 14.25 19.4879 14.25 19.2889V7.28894C14.25 7.09003 14.329 6.89926 14.4697 6.75861C14.6103 6.61796 14.8011 6.53894 15 6.53894C15.1989 6.53894 15.3897 6.61796 15.5303 6.75861C15.671 6.89926 15.75 7.09003 15.75 7.28894ZM18.75 2.78894C18.5511 2.78894 18.3603 2.86796 18.2197 3.00861C18.079 3.14926 18 3.34003 18 3.53894V19.2889C18 19.4879 18.079 19.6786 18.2197 19.8193C18.3603 19.9599 18.5511 20.0389 18.75 20.0389C18.9489 20.0389 19.1397 19.9599 19.2803 19.8193C19.421 19.6786 19.5 19.4879 19.5 19.2889V3.53894C19.5 3.34003 19.421 3.14926 19.2803 3.00861C19.1397 2.86796 18.9489 2.78894 18.75 2.78894ZM11.25 10.2889C11.0511 10.2889 10.8603 10.368 10.7197 10.5086C10.579 10.6493 10.5 10.84 10.5 11.0389V19.2889C10.5 19.4879 10.579 19.6786 10.7197 19.8193C10.8603 19.9599 11.0511 20.0389 11.25 20.0389C11.4489 20.0389 11.6397 19.9599 11.7803 19.8193C11.921 19.6786 12 19.4879 12 19.2889V11.0389C12 10.84 11.921 10.6493 11.7803 10.5086C11.6397 10.368 11.4489 10.2889 11.25 10.2889ZM7.5 14.0389C7.30109 14.0389 7.11032 14.118 6.96967 14.2586C6.82902 14.3993 6.75 14.59 6.75 14.7889V19.2889C6.75 19.4879 6.82902 19.6786 6.96967 19.8193C7.11032 19.9599 7.30109 20.0389 7.5 20.0389C7.69891 20.0389 7.88968 19.9599 8.03033 19.8193C8.17098 19.6786 8.25 19.4879 8.25 19.2889V14.7889C8.25 14.59 8.17098 14.3993 8.03033 14.2586C7.88968 14.118 7.69891 14.0389 7.5 14.0389ZM3.75 17.7889C3.55109 17.7889 3.36032 17.868 3.21967 18.0086C3.07902 18.1493 3 18.34 3 18.5389V19.2889C3 19.4879 3.07902 19.6786 3.21967 19.8193C3.36032 19.9599 3.55109 20.0389 3.75 20.0389C3.94891 20.0389 4.13968 19.9599 4.28033 19.8193C4.42098 19.6786 4.5 19.4879 4.5 19.2889V18.5389C4.5 18.34 4.42098 18.1493 4.28033 18.0086C4.13968 17.868 3.94891 17.7889 3.75 17.7889Z\" fill=\"white\"/></svg>",
    "type": "solid",
    "metadata": {
      "width": "24",
      "height": "25",
      "name": "signal",
      "type": "solid"
    }
  }, {
    "source": "<svg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.75 5.03894V8.78894C21.75 8.98785 21.671 9.17862 21.5303 9.31927C21.3897 9.45992 21.1989 9.53894 21 9.53894C20.8011 9.53894 20.6103 9.45992 20.4697 9.31927C20.329 9.17862 20.25 8.98785 20.25 8.78894V5.78894H17.25C17.0511 5.78894 16.8603 5.70992 16.7197 5.56927C16.579 5.42862 16.5 5.23785 16.5 5.03894C16.5 4.84003 16.579 4.64926 16.7197 4.50861C16.8603 4.36796 17.0511 4.28894 17.25 4.28894H21C21.1989 4.28894 21.3897 4.36796 21.5303 4.50861C21.671 4.64926 21.75 4.84003 21.75 5.03894ZM6.75 19.2889H3.75V16.2889C3.75 16.09 3.67098 15.8993 3.53033 15.7586C3.38968 15.618 3.19891 15.5389 3 15.5389C2.80109 15.5389 2.61032 15.618 2.46967 15.7586C2.32902 15.8993 2.25 16.09 2.25 16.2889V20.0389C2.25 20.2379 2.32902 20.4286 2.46967 20.5693C2.61032 20.7099 2.80109 20.7889 3 20.7889H6.75C6.94891 20.7889 7.13968 20.7099 7.28033 20.5693C7.42098 20.4286 7.5 20.2379 7.5 20.0389C7.5 19.84 7.42098 19.6493 7.28033 19.5086C7.13968 19.368 6.94891 19.2889 6.75 19.2889ZM21 15.5389C20.8011 15.5389 20.6103 15.618 20.4697 15.7586C20.329 15.8993 20.25 16.09 20.25 16.2889V19.2889H17.25C17.0511 19.2889 16.8603 19.368 16.7197 19.5086C16.579 19.6493 16.5 19.84 16.5 20.0389C16.5 20.2379 16.579 20.4286 16.7197 20.5693C16.8603 20.7099 17.0511 20.7889 17.25 20.7889H21C21.1989 20.7889 21.3897 20.7099 21.5303 20.5693C21.671 20.4286 21.75 20.2379 21.75 20.0389V16.2889C21.75 16.09 21.671 15.8993 21.5303 15.7586C21.3897 15.618 21.1989 15.5389 21 15.5389ZM3 9.53894C3.19891 9.53894 3.38968 9.45992 3.53033 9.31927C3.67098 9.17862 3.75 8.98785 3.75 8.78894V5.78894H6.75C6.94891 5.78894 7.13968 5.70992 7.28033 5.56927C7.42098 5.42862 7.5 5.23785 7.5 5.03894C7.5 4.84003 7.42098 4.64926 7.28033 4.50861C7.13968 4.36796 6.94891 4.28894 6.75 4.28894H3C2.80109 4.28894 2.61032 4.36796 2.46967 4.50861C2.32902 4.64926 2.25 4.84003 2.25 5.03894V8.78894C2.25 8.98785 2.32902 9.17862 2.46967 9.31927C2.61032 9.45992 2.80109 9.53894 3 9.53894ZM7.5 8.03894C7.30109 8.03894 7.11032 8.11796 6.96967 8.25861C6.82902 8.39926 6.75 8.59003 6.75 8.78894V16.2889C6.75 16.4879 6.82902 16.6786 6.96967 16.8193C7.11032 16.9599 7.30109 17.0389 7.5 17.0389C7.69891 17.0389 7.88968 16.9599 8.03033 16.8193C8.17098 16.6786 8.25 16.4879 8.25 16.2889V8.78894C8.25 8.59003 8.17098 8.39926 8.03033 8.25861C7.88968 8.11796 7.69891 8.03894 7.5 8.03894ZM17.25 16.2889V8.78894C17.25 8.59003 17.171 8.39926 17.0303 8.25861C16.8897 8.11796 16.6989 8.03894 16.5 8.03894C16.3011 8.03894 16.1103 8.11796 15.9697 8.25861C15.829 8.39926 15.75 8.59003 15.75 8.78894V16.2889C15.75 16.4879 15.829 16.6786 15.9697 16.8193C16.1103 16.9599 16.3011 17.0389 16.5 17.0389C16.6989 17.0389 16.8897 16.9599 17.0303 16.8193C17.171 16.6786 17.25 16.4879 17.25 16.2889ZM13.5 8.03894C13.3011 8.03894 13.1103 8.11796 12.9697 8.25861C12.829 8.39926 12.75 8.59003 12.75 8.78894V16.2889C12.75 16.4879 12.829 16.6786 12.9697 16.8193C13.1103 16.9599 13.3011 17.0389 13.5 17.0389C13.6989 17.0389 13.8897 16.9599 14.0303 16.8193C14.171 16.6786 14.25 16.4879 14.25 16.2889V8.78894C14.25 8.59003 14.171 8.39926 14.0303 8.25861C13.8897 8.11796 13.6989 8.03894 13.5 8.03894ZM10.5 8.03894C10.3011 8.03894 10.1103 8.11796 9.96967 8.25861C9.82902 8.39926 9.75 8.59003 9.75 8.78894V16.2889C9.75 16.4879 9.82902 16.6786 9.96967 16.8193C10.1103 16.9599 10.3011 17.0389 10.5 17.0389C10.6989 17.0389 10.8897 16.9599 11.0303 16.8193C11.171 16.6786 11.25 16.4879 11.25 16.2889V8.78894C11.25 8.59003 11.171 8.39926 11.0303 8.25861C10.8897 8.11796 10.6989 8.03894 10.5 8.03894Z\" fill=\"white\"/></svg>",
    "type": "solid",
    "metadata": {
      "width": "24",
      "height": "25",
      "name": "bar-code",
      "type": "solid"
    }
  }, {
    "source": "<svg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.125 17.4139C13.125 17.6364 13.059 17.854 12.9354 18.039C12.8118 18.224 12.6361 18.3682 12.4305 18.4533C12.225 18.5385 11.9988 18.5607 11.7805 18.5173C11.5623 18.4739 11.3618 18.3668 11.2045 18.2094C11.0472 18.0521 10.94 17.8516 10.8966 17.6334C10.8532 17.4152 10.8755 17.189 10.9606 16.9834C11.0458 16.7779 11.19 16.6022 11.375 16.4785C11.56 16.3549 11.7775 16.2889 12 16.2889C12.2984 16.2889 12.5845 16.4075 12.7955 16.6184C13.0065 16.8294 13.125 17.1156 13.125 17.4139ZM12 7.28894C9.93188 7.28894 8.25 8.803 8.25 10.6639V11.0389C8.25 11.2379 8.32902 11.4286 8.46967 11.5693C8.61033 11.7099 8.80109 11.7889 9 11.7889C9.19892 11.7889 9.38968 11.7099 9.53033 11.5693C9.67099 11.4286 9.75 11.2379 9.75 11.0389V10.6639C9.75 9.63269 10.7597 8.78894 12 8.78894C13.2403 8.78894 14.25 9.63269 14.25 10.6639C14.25 11.6952 13.2403 12.5389 12 12.5389C11.8011 12.5389 11.6103 12.618 11.4697 12.7586C11.329 12.8993 11.25 13.09 11.25 13.2889V14.0389C11.25 14.2379 11.329 14.4286 11.4697 14.5693C11.6103 14.7099 11.8011 14.7889 12 14.7889C12.1989 14.7889 12.3897 14.7099 12.5303 14.5693C12.671 14.4286 12.75 14.2379 12.75 14.0389V13.9714C14.46 13.6574 15.75 12.2933 15.75 10.6639C15.75 8.803 14.0681 7.28894 12 7.28894ZM21.75 12.5389C21.75 14.4673 21.1782 16.3524 20.1068 17.9557C19.0355 19.5591 17.5127 20.8088 15.7312 21.5468C13.9496 22.2847 11.9892 22.4778 10.0979 22.1016C8.20656 21.7254 6.46928 20.7968 5.10571 19.4332C3.74215 18.0697 2.81355 16.3324 2.43735 14.4411C2.06114 12.5498 2.25422 10.5894 2.99218 8.80778C3.73013 7.0262 4.97982 5.50346 6.58319 4.43211C8.18657 3.36077 10.0716 2.78894 12 2.78894C14.585 2.79167 17.0634 3.81978 18.8913 5.64766C20.7192 7.47555 21.7473 9.95392 21.75 12.5389ZM20.25 12.5389C20.25 10.9072 19.7661 9.31219 18.8596 7.95549C17.9531 6.59878 16.6646 5.54136 15.1571 4.91693C13.6497 4.29251 11.9909 4.12913 10.3905 4.44746C8.79017 4.76579 7.32016 5.55153 6.16637 6.70531C5.01259 7.85909 4.22685 9.3291 3.90853 10.9294C3.5902 12.5298 3.75358 14.1886 4.378 15.6961C5.00242 17.2036 6.05984 18.492 7.41655 19.3986C8.77326 20.3051 10.3683 20.7889 12 20.7889C14.1873 20.7865 16.2843 19.9165 17.8309 18.3698C19.3775 16.8232 20.2475 14.7262 20.25 12.5389Z\" fill=\"white\"/></svg>",
    "type": "solid",
    "metadata": {
      "width": "24",
      "height": "25",
      "name": "interrogation",
      "type": "solid"
    }
  }]
};
exports.iconsByType = iconsByType;

var Icon = function Icon(_ref) {
  var type = _ref.type,
      props = _objectWithoutProperties(_ref, ["type"]);

  var SvgIcon = icons[type];
  return SvgIcon ? /*#__PURE__*/_react["default"].createElement(SvgIcon, _extends({
    className: "icon",
    width: "1em",
    height: "1em"
  }, props)) : '';
};

var _default = Icon;
exports["default"] = _default;