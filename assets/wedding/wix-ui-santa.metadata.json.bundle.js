
(function (root, factory) { if (typeof define === 'function' && define.amd) { define([], factory); } else if (typeof module === 'object' && module.exports) { module.exports = factory(); } else { root.returnExports = factory(); } }(typeof self !== 'undefined' ? self : this, function () { return {
  "version": "2.0.0",
  "name": "wix-ui-santa",
  "fs": {
    "/wix-ui-santa/src/components/Rating/Rating.st.css": {
      "metadata": {
        "namespace": "rating669718767",
        "depth": 7
      },
      "content": ":import {\n    -st-from: \"wix-ui-core/index.st.css\";\n    -st-named: RadioButton\n}\n\n:vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.Rating'; \n\n        /* REGULAR */\n    /* @type COLOR_ALPHA */\n    filledShapeColor: color_5;\n    /* @type COLOR_ALPHA */\n    emptyShapeColor: color_15;\n\n    /* @type BORDER_COLOR_ALPHA */\n    shapeBorderColor: color_32;\n    /* @type BORDER_SIZE */\n    shapeBorderWidth: 3;\n\n    /* @type FONT */\n    labelFont: font_8;\n    /* @type TEXT_COLOR */\n    labelFontColor: color_15;\n\n        /* ERROR */\n    /* @type COLOR_ALPHA */\n    errorFilledShapeColor: color_7;\n    /* @type BORDER_COLOR_ALPHA */\n    errorShapeBorderColor: color_37;\n    /* @type BORDER_SIZE */\n    errorShapeBorderWidth: 7;\n    /* @type TEXT_COLOR */\n    errorLabelFontColor: color_17;\n\n        /* FOCUS */\n    /* @type COLOR_ALPHA */\n    focusEmptyShapeColor: #b0abba;\n    /* @type BORDER_COLOR_ALPHA */\n    focusShapeBorderColor: #b0abba;\n    /* @type BORDER_SIZE */\n    focusShapeBorderWidth: 1;\n\n}\n\n.root {\n    display: inline-flex;\n    align-items: center;\n    font: value(labelFont);\n    -st-states: ratingAfter, editorMode, noReviewsMode(enum(nothing, empty-icons, placeholder-text)),\n                labelPosition(enum(top, bottom, side)), disabled, rtl, alignment(enum(left, right, center)), error,\n                mode(enum(display, input));\n}\n\n.root:rtl::displayMode, .root:rtl::inputMode {\n    direction: rtl;\n}\n\n.displayMode {\n    display: inline-flex;\n    width: 100%;\n    align-items: center;\n}\n\n.root:alignment(center)::displayMode {\n    justify-content: center;\n}\n\n.root:alignment(right)::displayMode, .root:rtl:alignment(left)::displayMode {\n    justify-content: flex-end;\n}\n\n.root:alignment(left)::displayMode, .root:rtl:alignment(right)::displayMode {\n    justify-content: flex-start;\n}\n\n.inputMode {\n    display: inline-flex;\n    flex-direction: column;\n    width: 100%;\n    text-align: center;\n    align-items: center;\n}\n\n.root:alignment(right)::inputMode {\n    text-align: right;\n    align-items: flex-end;\n}\n\n.root:rtl:alignment(right)::inputMode {\n    align-items: flex-start;\n}\n\n.root:alignment(left)::inputMode {\n    text-align: left;\n    align-items: flex-start;\n}\n\n.root:rtl:alignment(left)::inputMode {\n    align-items: flex-end;\n}\n\n.root:labelPosition(side)::inputMode, .root:rtl:labelPosition(side)::inputMode {\n    flex-direction: row;\n    align-items: center;\n}\n\n.stars {\n    order: 2;\n    display: flex;\n}\n\n.root:mode(input)::stars {\n    cursor: pointer;\n}\n\n.root:disabled::stars {\n    pointer-events: none;\n}\n\n.ratingValue, .reviewsCount, .noReviewsPlaceholder {\n    color: value(labelFontColor);\n    line-height: 1.5;\n}\n\n.ratingValue {\n    order: 1;\n    align-self: center;\n}\n\n.reviewsCount {\n    order: 3;\n    align-self: center;\n    white-space: nowrap;\n}\n\n.noReviewsPlaceholder {\n    align-self: center;\n    white-space: nowrap;\n    overflow-x: hidden;\n}\n\n.labelsContainer {\n    display: inline-flex;\n    width: 100%;\n    order: 1;\n    overflow: hidden;\n    align-items: flex-end;\n}\n\n.root:labelPosition(bottom)::labelsContainer {\n    align-items: flex-start;\n}\n\n.root:labelPosition(side)::labelsContainer {\n    align-items: center;\n}\n\n.label, .title {\n    color: value(labelFontColor);\n    line-height: 1.5;\n    flex-shrink: 0;\n    display: block;\n    width: 100%;\n}\n\n.root:error::label, .root[data-preview=\"error\"]::label, .root:error::title, .root[data-preview=\"error\"]::title {\n    color: value(errorLabelFontColor);\n}\n\n.root:labelPosition(side)::stars {\n    align-self: center;\n}\n\n.label {\n    visibility: hidden;\n}\n\n.root:labelPosition(bottom)::stars, .root:labelPosition(side)::stars {\n    order: 0;\n}\n\n.root:ratingAfter::stars {\n    order: 0;\n}\n\n.root:noReviewsMode(nothing):editorMode::stars,\n.root:noReviewsMode(nothing):editorMode::ratingValue,\n.root:noReviewsMode(nothing):editorMode::reviewsCount {\n    opacity: 0.15;\n}\n\n.icon {\n    -st-states: checked, split;\n    display: block;\n    position: relative;\n    stroke: value(shapeBorderColor);\n    stroke-width: value(shapeBorderWidth);\n    fill: value(emptyShapeColor);\n}\n\n.icon path {\n    fill: value(emptyShapeColor);\n}\n\n.icon:checked path {\n    fill: value(filledShapeColor);\n}\n\n.icon svg {\n    display: block;\n    height: 100%;\n    width: 100%;\n    transform: translateZ(0);\n}\n\n.halfIcon {\n    position: absolute;\n    top: 0;\n    overflow: hidden;\n}\n\n.root:mode(display)::icon {\n    cursor: default\n}\n\n.root:error::icon:not(:checked), .root[data-preview=\"error\"]::icon {\n    stroke: value(errorShapeBorderColor);\n    stroke-width: value(errorShapeBorderWidth);\n}\n\n.root:error::icon:not(:checked) path, .root[data-preview=\"error\"]::icon path{\n    fill: value(errorFilledShapeColor);\n}\n\n.radioButton {\n    -st-extends: RadioButton;\n}\n\n.radioButton:focus-visible .icon:not(:checked) path, .root[data-preview=\"focus\"]::icon:not(:checked) path {\n    fill: value(focusEmptyShapeColor);\n}\n\n.radioButton:focus-visible .icon, .root[data-preview=\"focus\"]::icon {\n    stroke: value(focusShapeBorderColor);\n    stroke-width: value(focusShapeBorderWidth);\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/horizontal-menu/layout/styles/HorizontalMenuSubmenu.st.css": {
      "metadata": {
        "namespace": "horizontalmenusubmenu1330664667",
        "depth": 2
      },
      "content": ":import {\n  -st-from: '../../item/styles/HorizontalMenuSubItem.st.css';\n  -st-default: HorizontalMenuSubItem;\n}\n\n:import {\n  -st-from: '../../item/styles/HorizontalMenuHeadingItem.st.css';\n  -st-default: HorizontalMenuHeadingItem;\n}\n\n.root {\n  -archetype: paddingBox;\n  -st-states: submenuMode(enum(flyout)), chrome;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.listWrapper {\n  max-width: 100%;\n  column-gap: 0px;\n}\n\n.pageWrapper {\n  display: flex;\n}\n\n.pageStretchWrapper {\n  margin: 0 auto;\n}\n\n.category {}\n\n.columnsList {}\n\n.flex {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.listItem {\n  box-sizing: border-box;\n\n  -webkit-column-break-inside: avoid; /* Chrome, Safari, Opera */\n  page-break-inside: avoid; /* Firefox */\n  break-inside: avoid; /* IE 10+ */\n}\n\n.rowItem {}\n\n.columnsList > .listItem {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n\n.root:submenuMode(flyout) .listItem {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n\n.root:chrome .listItem {\n  transform: translateZ(0px);\n}\n\n/* columns submenu item */\n.heading {\n  -st-extends: HorizontalMenuHeadingItem;\n}\n\n/* columns menu item */\n.menuItem {\n  -st-extends: HorizontalMenuSubItem;\n}\n\n.root > ul > li:first-of-type > a,\n.root > ul > li:first-of-type > span {\n  margin-top: 0px !important;\n}\n\n.root > ul > li:last-of-type > a,\n.root > ul > li:last-of-type > span,\n.listWrapper > li > a:not(:only-child),\n.listWrapper > li > span:not(:only-child) {\n  margin-bottom: 0px !important;\n}\n"
    },
    "/wix-ui-santa/src/components/MusicPlayer/MusicPlayer.st.css": {
      "metadata": {
        "namespace": "musicplayer2534280964",
        "depth": 3
      },
      "content": ":import {\n  -st-from: \"santa-skin-utils/dist/cjs/runtime/functions.js\";\n  -st-named: getColorWithOpacity;\n}\n\n:vars {\n  /* @type SKINS */\n  skins: 'wixui.skins.MusicPlayer';\n\n  /* @type COLOR_ALPHA */\n  backgroundColor: color_11;\n\n  /* @type COLOR_ALPHA */\n  backgroundColorIcon: color_18;\n\n  /* @type FONT */\n  font: font_8;\n\n  /* @type COLOR */\n  regularColor: color_15;\n\n  /* @type COLOR */\n  regularColorIcon: color_16;\n\n  /* @type COLOR */\n  colorOnHover: color_19;\n\n  /* @type BORDER_COLOR_ALPHA */\n  borderColor: color_15;\n\n  /* @type BORDER_SIZE */\n  borderSize: 0;\n\n  /* @type BORDER_RADIUS */\n  borderRadius: 0;\n\n  /* @type BOX_SHADOW */\n  boxShadow: none;\n}\n\n.root {\n  -st-states: isMobileView, isDesktopView, hasCover, hasProgressBar, hasSingleRow, hasTitleTimeRow, hasOnlyPlay, isHoverState, isClassicLayout, isIconLayout, isTracksAreAvailableToShare, showTracksActions, isScrollShow, isPlaylistShow;\n  box-shadow: none;\n  position: relative;\n  width: 100%;\n  min-height: 40px;\n  height: 100%;\n  text-align: left;\n  color: value(regularColor);\n  font: value(font);\n  overflow: hidden;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n}\n\n.mainLayoutWrapper {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n\n.root:isClassicLayout {\n  background: value(backgroundColor);\n  border: value(borderSize) solid value(borderColor);\n  border-radius: value(borderRadius);\n}\n\n.root:isIconLayout {\n  background: transparent;\n  height: 100%;\n}\n\n.title {\n  text-align: left;\n  font-size: inherit;\n}\n\n.title + .title {\n  opacity: 0.6;\n}\n\n.title + .title::before {\n  content: '-';\n  padding: 0.4em;\n  opacity: 1;\n}\n\n.title:empty + .title::before {\n  content: '';\n  display: none;\n}\n\n.title + .title:empty::before {\n  content: '';\n  display: none;\n}\n\n.cover {\n  width: 100%;\n}\n\n.progressRangeBar::-webkit-slider-thumb {\n  background-color: value(regularColor);\n}\n\n.progressRangeBar::-moz-range-thumb {\n  background-color: value(regularColor);\n}\n\n.progressRangeBar:hover {\n  color: value(colorOnHover);\n}\n\n.playButton:hover {\n  min-width: 18px;\n  color: value(colorOnHover);\n}\n\n.skipButton:hover {\n  color: value(colorOnHover);\n}\n\n.root:isHoverState::skipButton {\n  color: value(colorOnHover);\n}\n\n/* LAYOUT */\n\n.titleLayout {\n  display: flex;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.progressLayout {\n  width: auto;\n  flex-grow: 1;\n}\n\n.timeStamp {\n  opacity: 1;\n  font-size: 12px;\n  line-height: 16px;\n  padding: 2px 0;\n}\n\n.playLayout {\n  margin-right: 14px;\n}\n\n.mainLayout {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  padding: 6px 16px;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n.root:hasSingleRow .mainLayout{\n  justify-content: center;\n}\n\n.root:isPlaylistShow .mainLayout{\n  padding: 6px 24px;\n}\n\n.root:isPlaylistShow:hasCover .mainLayout {\n  padding: 6px 24px 6px 16px;\n}\n\n.upperLayout {\n  display: flex;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n.lowerLayout {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.coverLayout {\n  width: 70px;\n  flex: 0 0 70px;\n}\n\n.root:hasSingleRow .cover{\n  height: 40px;\n}\n\n.root:hasProgressBar::timeStamp {\n  opacity: 0.6;\n  padding-left: 12px;\n}\n\n.root:hasOnlyPlay::playLayout {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  margin-right: 0;\n}\n\n.root:hasSingleRow::coverLayout {\n  width: 40px;\n  flex-basis: 40px;\n}\n\n.root:hasTitleTimeRow::timeStamp {\n  font-size: 14px;\n  padding-left: 12px;\n}\n\n.root:isHoverState::playButton,\n.root:isHoverState::progressRangeBar {\n  color: value(colorOnHover);\n}\n\n.disabled {\n  color: #808080;\n}\n\n.disabled:hover {\n  color: #808080;\n}\n\n/*ICON___LAYOUT*/\n\n/* Complex selectors due to specificity */\n.root :global(.playPauseBtn).disabled path,\n.root :global(.playPauseBtn).disabled > div:global(.twoColors) path,\n.root :global(.playPauseBtn).disabled:hover path {\n  fill: #808080;\n}\n\n.root :global(.playPauseBtn).disabled > div:global(.twoColors) path:nth-of-type(2) {\n  fill: #c0c0c0;\n}\n\n.root :global(.oneColor), .root :global(.oneColorWithOpacity), .root :global(.twoColors){\n  width: 100%;\n  height: 66.6%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.root :global(.oneColor) > svg > path {\n  fill: value(backgroundColorIcon)\n}\n\n.root :global(.oneColorWithOpacity) > svg > g {\n  fill: value(backgroundColorIcon)\n}\n\n.root :global(.twoColors) > svg > g > path:nth-of-type(1) {\n  fill: value(backgroundColorIcon)\n}\n\n.root :global(.oneColorPause) > svg > g {\n  fill: value(backgroundColorIcon)\n}\n\n.root :global(.twoColors) > svg > g > path:nth-of-type(2) {\n  fill: value(regularColorIcon)\n}\n\n.root:isHoverState :global(.oneColor) > svg > path {\n  fill: value(colorOnHover);\n}\n\n.root:isHoverState :global(.oneColorWithOpacity) > svg > g {\n  fill: value(colorOnHover);\n}\n\n.root:isHoverState :global(.twoColors) > svg > g > path:nth-of-type(2) {\n  fill: value(colorOnHover);\n}\n\n.root :global(.oneColorPause):hover > svg > g {\n  fill: value(colorOnHover)\n}\n\n.root :global(.oneColor):hover > svg > path {\n  fill: value(colorOnHover);\n}\n\n.root :global(.oneColorWithOpacity):hover > svg > g {\n  fill: value(colorOnHover);\n}\n\n.root :global(.twoColors):hover > svg > g > path:nth-of-type(2) {\n  fill: value(colorOnHover);\n}\n\n.root :global(.playPauseBtn) {\n  width: 100%;\n  height: 100%;\n}\n\n.footerWrapper {\n  height: 60px;\n  width: 100%;\n  display: flex;\n  margin: 0 auto;\n  flex-direction: column;\n  padding: 0 24px;\n  box-sizing: border-box;\n}\n\n.divider {\n  border-color: getColorWithOpacity(value(regularColor), 0.20);\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 0;\n  width: 100%;\n  align-self: center;\n}\n\n.footer {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.footerItem {\n  cursor: pointer;\n}\n\n.footerItem:hover {\n  color: value(colorOnHover);\n}\n\n.root:isHoverState::footerItem{\n  color: value(colorOnHover);\n}\n\n.playlist {\n  margin: 12px 0;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.playlist > div > div:last-child{\n  display: none;\n}\n\n.trackName {\n  flex: 1 1 40%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font: value(font);\n  color: value(regularColor);\n}\n\n.playingBtn {\n  text-align: left;\n  width: 15px;\n  display: none;\n}\n\n.trackWrapper {\n  display: flex;\n  height: 52px;\n  align-items: center;\n  padding: 0 24px;\n}\n\n.trackWrapper:hover {\n  background-color: getColorWithOpacity(value(regularColor), 0.06);\n}\n\n.active .playingBtn {\n  display: flex;\n  margin-right: 18px;\n}\n\n.trackWrapper:hover .playingBtn,\n.trackWrapper:hover .trackActions,\n.root:isHoverState .trackActions {\n  display: flex;\n}\n\n.trackWrapper:hover .playingBtn {\n  margin-right: 18px;\n}\n\n.active .playingBtn > svg > g > g {\n  fill: value(colorOnHover);\n}\n\n.trackActions {\n  display: none;\n  padding: 0 18px;\n  justify-content: space-around;\n}\n\n.trackActions > :nth-child(2) {\n  margin-left: 18px;\n}\n\n.trackActions > svg {\n  cursor: pointer;\n}\n\n.root:showTracksActions::trackActions{\n  display: flex;\n}\n\n.price {\n  display: none;\n  background: value(colorOnHover);\n  justify-content: center;\n  color: value(backgroundColor);\n}\n\n.time {\n  width: 50px;\n  padding: 0;\n  text-align: right;\n  font: value(font);\n  color: value(regularColor);\n}\n\n.trackWrapper:hover .price,\n.root:isHoverState .price {\n  display: flex;\n  width: 50px;\n  height: 30px;\n  align-items: center;\n}\n\n.trackWrapper:hover .time,\n.root:isHoverState .time {\n  display: none;\n}\n\n.trackWrapper:hover .trackActions > svg > g > g,\n.root:isHoverState .trackActions > svg > g > g {\n  fill: value(colorOnHover);\n}\n\n.active .play > svg > g > g,\n.active .trackActions > svg > g > g {\n  fill: value(colorOnHover);\n}\n\n.active .trackName,\n.active .time {\n  color: value(colorOnHover);\n}\n\n.playlist::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 7px\n}\n\n.playlist::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: transparent;\n}\n\n.playlist:hover::-webkit-scrollbar-thumb {\n  background-color: rgba(0,0,0,.4);\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/StylableHorizontalMenu.st.css": {
      "metadata": {
        "namespace": "stylablehorizontalmenu4089050981",
        "depth": 3
      },
      "content": ":import {\n  -st-from: './horizontal-menu/item/styles/HorizontalMenuItem.st.css';\n  -st-default: HorizontalMenuItem;\n}\n\n:import {\n  -st-from: './horizontal-menu/layout/styles/HorizontalMenuSubmenu.st.css';\n  -st-default: HorizontalMenuColumnsLayout;\n}\n\n:import {\n  -st-from: './horizontal-menu/scroll-button/ScrollButton.st.css';\n  -st-default: HorizontalMenuScrollButton;\n}\n\n/**\n * For focus-ring to be applied inside items BB\n */\n:global(.visual-focus-on) .root :global(.focus-ring:not(.has-custom-focus):focus) {\n  box-shadow: inset 0 0 0 1px #ffffff, inset 0 0 0 3px #116dff;\n}\n\n.root {\n  -st-states: menuMode(enum(wrap, scroll)), direction(enum(ltr, rtl)), isScrollable;\n  -archetype: paddingBox;\n\n  box-sizing: border-box;\n\n  display: flex;\n  height: 100%;\n  width: 100%;\n\n  transition: inherit;\n}\n\n.menu {\n  display: flex;\n  box-sizing: border-box;\n}\n\n/* root menu item */\n.menuItem {\n  -st-extends: HorizontalMenuItem;\n}\n\n.scrollButton {\n  -st-extends: HorizontalMenuScrollButton;\n}\n\n/* first level submenu */\n.columnsLayout {\n  -st-extends: HorizontalMenuColumnsLayout;\n}\n\n.leftAlignmentScrollItem {}\n\n.rightAlignmentScrollItem {}\n\n.listItem {\n  flex-grow: inherit;\n  box-sizing: border-box;\n}\n\n.positionBox {}\n\n.root:menuMode(scroll) .menu > li > span,\n.root:menuMode(scroll) .menu > li > a {\n  margin-top: 0;\n  margin-bottom: 0;\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.root:menuMode(wrap) .menu {\n  flex-wrap: wrap;\n}\n\n.root:menuMode(scroll):direction(ltr) .menu > li:first-of-type > span,\n.root:menuMode(scroll):direction(ltr) .menu > li:first-of-type > a,\n.root:menuMode(scroll):direction(rtl) .menu > li:last-of-type > span,\n.root:menuMode(scroll):direction(rtl) .menu > li:last-of-type > a {\n  margin-left: 0;\n}\n\n.root:menuMode(scroll):direction(ltr) .menu > li:last-of-type > span,\n.root:menuMode(scroll):direction(ltr) .menu > li:last-of-type > a,\n.root:menuMode(scroll):direction(rtl) .menu > li:first-of-type > span,\n.root:menuMode(scroll):direction(rtl) .menu > li:first-of-type > a {\n  margin-right: 0;\n}\n\n.root:menuMode(scroll) .menu {\n  height: auto;\n  width: auto;\n  margin: 0;\n  flex-wrap: nowrap;\n  justify-content: flex-start !important;\n  transition: padding-right .1s !important;\n}\n\n.root:menuMode(scroll) {\n  overflow-x: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  -webkit-overflow-scrolling: touch;\n}\n\n.root:menuMode(scroll)::-webkit-scrollbar {\n  display: none;\n}\n\n.root:isScrollable .menu {\n  padding-right: inherit;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/variants/addPanelV1/stylableStylableHorizontalMenu1.st.css": {
      "metadata": {
        "namespace": "stylableStylableHorizontalMenu1-stylablehorizontalmenu4089050981",
        "variant": true,
        "depth": 3
      },
      "content": ":import {\n  -st-from: '../../StylableHorizontalMenu.st.css';\n  -st-default: StylableHorizontalMenu;\n}\n.root {\n    -st-extends: StylableHorizontalMenu;\n    border: 0 solid #000;\n    background: #FFF;\n}\n.root::menu {\n    direction: ltr;\n    width: calc(100% + 8px);\n    margin-left: -4px;\n    margin-right: -4px;\n    flex-grow: 1;\n    height: calc(100% + 8px);\n    margin-top: -4px;\n    margin-bottom: -4px;\n    justify-content: flex-start;\n}\n.root::menuItem {\n    margin-left: 4px;\n    margin-right: 4px;\n    border: 0 solid #757575;\n    padding-top: 10px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-bottom: 10px;\n    background: rgba(117, 117, 117, 0);\n    margin-top: 4px;\n    margin-bottom: 4px;\n}\n.root::menuItem::label {\n    font-size: 16px;\n    color: #000;\n    font-family: \"libre baskerville\", serif;\n    letter-spacing: 0.05em;\n}\n.root::menuItem::container {\n    justify-content: center;\n}\n.root::menuItem:isCurrentPage::label {\n    color: #E33292;\n}\n.root::menuItem:isHovered::label {\n    color: #E33292;\n}\n.root::rightAlignmentScrollItem {\n    --flexGrow: 1;\n}\n.root::scrollButton {\n    background: #FFF;\n    border: 0 solid #757575;\n    padding: 10px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    box-shadow: -5.66px 5.66px 15px 3px rgba(0, 0, 0, 0.05);\n}\n.root::scrollButton::icon {\n    fill: #000;\n    width: 16px;\n    height: 16px;\n}\n.root::scrollButton:hover::icon {\n    fill: #E33292;\n}\n.root::positionBox {\n    margin-left: 20px;\n    margin-right: 20px;\n}\n.root::columnsLayout {\n    --flyoutAlignment: left;\n    --horizontalSpacing: 32;\n    background: #FFF;\n    border: 0 solid #000;\n    padding: 10px;\n    margin-top: 0px;\n}\n.root::columnsLayout::listWrapper {\n    --width: 80;\n    --columnsAmount: 3;\n    width: 100%;\n    column-count: 3;\n}\n.root::columnsLayout::pageWrapper {\n    justify-content: space-between;\n    margin-left: -16px;\n    margin-right: -16px;\n    width: calc(100% + 32px);\n    margin-bottom: -4px;\n}\n.root::columnsLayout::pageStretchWrapper {\n    width: 100%;\n}\n.root::columnsLayout::category {\n    margin-top: 4px;\n}\n.root::columnsLayout::flex {\n    margin-bottom: -8px;\n}\n.root::columnsLayout::listItem {\n    margin-left: 16px;\n    margin-right: 16px;\n}\n.root::columnsLayout::rowItem {\n    margin-bottom: 8px;\n}\n.root::columnsLayout::menuItem {\n    border: 0 solid #757575;\n    background: rgba(117, 117, 117, 0);\n    margin-bottom: 4px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    padding-left: 0px;\n    padding-right: 0px;\n}\n.root::columnsLayout::menuItem::container {\n    justify-content: flex-start;\n}\n.root::columnsLayout::menuItem::label {\n    font-size: 16px;\n    color: #000;\n    font-family: \"libre baskerville\", serif;\n    letter-spacing: 0.05em;\n}\n.root::columnsLayout::menuItem:isCurrentPage::label {\n    color: #E33292;\n}\n.root::columnsLayout::menuItem:isHovered::label {\n    color: #E33292;\n}\n.root::columnsLayout::heading {\n    margin-bottom: 4px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    padding-left: 0px;\n    padding-right: 0px;\n    border-bottom: 2px solid #000;\n}\n.root::columnsLayout::heading:isCurrentPage {\n    border-bottom: 2px solid rgb(227, 50, 146);\n}\n.root::columnsLayout::heading:isHovered {\n    border-bottom: 2px solid rgb(227, 50, 146);\n}\n.root::columnsLayout::heading::container {\n    justify-content: flex-start;\n}\n.root::columnsLayout::heading::label {\n    letter-spacing: 0.05em;\n    font-family: \"libre baskerville\", serif;\n    color: #000;\n    font-size: 12px;\n    font-weight: 400;\n}\n.root::columnsLayout::heading:isCurrentPage::label {\n    color: #E33292;\n}\n.root::columnsLayout::heading:isHovered::label {\n    color: #E33292;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/variants/addPanelV1/stylableStylableHorizontalMenu10.st.css": {
      "metadata": {
        "namespace": "stylableStylableHorizontalMenu10-stylablehorizontalmenu4089050981",
        "variant": true,
        "depth": 3
      },
      "content": ":import {\n  -st-from: '../../StylableHorizontalMenu.st.css';\n  -st-default: StylableHorizontalMenu;\n}\n.root {\n    -st-extends: StylableHorizontalMenu;\n    background: no-repeat padding-box border-box 50%/cover scroll wixMediaUrl(221eb5f37f0741bbafb2f8e5852b5103.jpg, 5184, 3456);\n    border: 0 solid #000;\n}\n.root::menu {\n    width: calc(100% + 8px);\n    margin-left: -4px;\n    margin-right: -4px;\n    height: calc(100% + 8px);\n    margin-top: -4px;\n    margin-bottom: -4px;\n    direction: ltr;\n    flex-grow: 1;\n    justify-content: flex-start;\n}\n.root::menuItem {\n    border: 0 solid #757575;\n    padding-right: 10px;\n    padding-left: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-left: 4px;\n    margin-right: 4px;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    background: rgba(117, 117, 117, 0);\n}\n.root::menuItem::label {\n    font-family: futura-lt-w01-book, sans-serif;\n    font-size: 16px;\n    color: #FFF;\n    letter-spacing: .1em;\n}\n.root::menuItem::container {\n    justify-content: center;\n}\n.root::menuItem:isCurrentPage::label {\n    text-decoration-line: underline;\n}\n.root::menuItem:isHovered::label {\n    text-decoration-line: underline;\n}\n.root::rightAlignmentScrollItem {\n    --flexGrow: 1;\n}\n.root::scrollButton {\n    border: 0 solid #757575;\n    padding-left: 12px;\n    padding-right: 12px;\n    padding: 10px;\n    background: #000;\n    padding-top: 0px;\n    padding-bottom: 0px;\n}\n.root::scrollButton:hover {\n    background: #FFF;\n}\n.root::scrollButton::icon {\n    width: 16px;\n    height: 16px;\n    fill: #FFF;\n}\n.root::scrollButton:hover::icon {\n    fill: #000;\n}\n.root::positionBox {\n    margin-left: 20px;\n    margin-right: 20px;\n}\n.root::columnsLayout {\n    --flyoutAlignment: left;\n    --horizontalSpacing: 8;\n    background: #000;\n    border: 1px solid #fff;\n    border-right: 0 solid #FFF;\n    border-bottom: 0 solid #FFF;\n    border-left: 0 solid #FFF;\n    padding: 10px;\n    margin-top: 0px;\n}\n.root::columnsLayout::listWrapper {\n    --width: 80;\n    --columnsAmount: 3;\n    width: 100%;\n    column-count: 3;\n}\n.root::columnsLayout::pageWrapper {\n    justify-content: space-between;\n    width: calc(100% + 8px);\n    margin-left: -4px;\n    margin-right: -4px;\n    margin-bottom: -4px;\n}\n.root::columnsLayout::pageStretchWrapper {\n    width: 980px;\n}\n.root::columnsLayout::category {\n    margin-top: 4px;\n}\n.root::columnsLayout::flex {\n    margin-bottom: -8px;\n}\n.root::columnsLayout::listItem {\n    margin-left: 4px;\n    margin-right: 4px;\n}\n.root::columnsLayout::rowItem {\n    margin-bottom: 8px;\n}\n.root::columnsLayout::menuItem {\n    border: 0 solid #757575;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-bottom: 4px;\n    background: rgba(117, 117, 117, 0);\n}\n.root::columnsLayout::menuItem::container {\n    justify-content: flex-start;\n}\n.root::columnsLayout::menuItem::label {\n    font-family: futura-lt-w01-light, sans-serif;\n    font-size: 16px;\n    color: #fff;\n    letter-spacing: .1em;\n}\n.root::columnsLayout::menuItem:isCurrentPage::label {\n    text-decoration-line: underline;\n}\n.root::columnsLayout::menuItem:isHovered::label {\n    text-decoration-line: underline;\n}\n.root::columnsLayout::heading {\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-bottom: 4px;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n.root::columnsLayout::heading::label {\n    font-weight: 400;\n    font-family: futura-lt-w01-book, sans-serif;\n    font-size: 14px;\n    text-transform: uppercase;\n    color: #757575;\n    letter-spacing: 0.2em;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/variants/addPanelV1/stylableStylableHorizontalMenu11.st.css": {
      "metadata": {
        "namespace": "stylableStylableHorizontalMenu11-stylablehorizontalmenu4089050981",
        "variant": true,
        "depth": 3
      },
      "content": ":import {\n  -st-from: '../../StylableHorizontalMenu.st.css';\n  -st-default: StylableHorizontalMenu;\n}\n.root {\n    -st-extends: StylableHorizontalMenu;\n    border: 1px solid #1A2DF3;\n    background: rgba(255, 241, 152, 0);\n}\n.root::menu {\n    direction: ltr;\n    width: calc(100% + 8px);\n    margin-left: -4px;\n    margin-right: -4px;\n    height: calc(100% + 8px);\n    margin-top: -4px;\n    margin-bottom: -4px;\n    flex-grow: 1;\n    justify-content: flex-start;\n}\n.root::menuItem {\n    padding-right: 10px;\n    padding-left: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border: 12px solid #FFF;\n    background: #FFF;\n    margin-left: 4px;\n    margin-right: 4px;\n    margin-top: 4px;\n    margin-bottom: 4px;\n}\n.root::menuItem:isCurrentPage {\n    background: #FFF198;\n}\n.root::menuItem:isHovered {\n    background: #FFF198;\n}\n.root::menuItem::label {\n    letter-spacing: .1em;\n    font-family: proxima-n-w01-reg, sans-serif;\n    font-size: 16px;\n    color: #1A2DF3;\n}\n.root::menuItem::container {\n    justify-content: center;\n}\n.root::rightAlignmentScrollItem {\n    --flexGrow: 1;\n}\n.root::scrollButton {\n    border: 0 solid #757575;\n    padding: 10px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    background: #FFF;\n}\n.root::scrollButton:hover {\n    background: rgb(26, 45, 243);\n}\n.root::scrollButton::icon {\n    width: 16px;\n    height: 16px;\n    fill: #1A2DF3;\n}\n.root::scrollButton:hover::icon {\n    fill: #FFF;\n}\n.root::positionBox {\n    margin-left: 20px;\n    margin-right: 20px;\n}\n.root::columnsLayout {\n    --flyoutAlignment: left;\n    --horizontalSpacing: 30;\n    background: #FFF;\n    border: 1px solid #1A2DF3;\n    padding: 10px;\n    margin-top: 0px;\n}\n.root::columnsLayout::listWrapper {\n    --width: 80;\n    --columnsAmount: 3;\n    width: 100%;\n    column-count: 3;\n}\n.root::columnsLayout::pageWrapper {\n    justify-content: space-between;\n    width: calc(100% + 30px);\n    margin-left: -15px;\n    margin-right: -15px;\n    margin-bottom: -10px;\n}\n.root::columnsLayout::pageStretchWrapper {\n    width: 980px;\n}\n.root::columnsLayout::category {\n    margin-top: 10px;\n}\n.root::columnsLayout::flex {\n    margin-bottom: -24px;\n}\n.root::columnsLayout::listItem {\n    margin-left: 15px;\n    margin-right: 15px;\n}\n.root::columnsLayout::rowItem {\n    margin-bottom: 24px;\n}\n.root::columnsLayout::menuItem {\n    border: 0 solid #757575;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n    background: rgba(117, 117, 117, 0);\n    padding-left: 10px;\n    padding-right: 10px;\n}\n.root::columnsLayout::menuItem:isCurrentPage {\n    background: #FFF198;\n}\n.root::columnsLayout::menuItem:isHovered {\n    background: rgba(255, 241, 152, 0.35);\n}\n.root::columnsLayout::menuItem::container {\n    justify-content: flex-start;\n}\n.root::columnsLayout::menuItem::label {\n    font-size: 16px;\n    letter-spacing: .1em;\n    font-family: din-next-w01-light, din-next-w02-light, din-next-w10-light, sans-serif;\n    color: #1A2DF3;\n}\n.root::columnsLayout::heading {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n    background: #FFF198;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n.root::columnsLayout::heading::label {\n    font-weight: 400;\n    font-size: 16px;\n    color: #1A2DF3;\n    font-family: proxima-n-w01-reg, sans-serif;\n    letter-spacing: 0.05em;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/variants/addPanelV1/stylableStylableHorizontalMenu2.st.css": {
      "metadata": {
        "namespace": "stylableStylableHorizontalMenu2-stylablehorizontalmenu4089050981",
        "variant": true,
        "depth": 3
      },
      "content": ":import {\n  -st-from: '../../StylableHorizontalMenu.st.css';\n  -st-default: StylableHorizontalMenu;\n}\n.root {\n    -st-extends: StylableHorizontalMenu;\n    border: 0 solid #000;\n    background: repeat padding-box border-box 0% 0%/auto auto scroll linear-gradient(58deg, rgba(237, 88, 41, 0.76) 0%, rgba(249, 195, 0, 0.47) 13%, rgba(210, 172, 247, 0.44) 36%, rgba(140, 182, 214, 0.53) 48%, rgba(0, 189, 151, 0.18) 66%, rgba(105, 181, 199, 0.365) 76%, rgba(210, 172, 247, 0.27) 86%, rgba(186, 131, 240, 0.76) 99%), #FFF;\n}\n.root::menu {\n    direction: ltr;\n    width: calc(100% + 8px);\n    margin-left: -4px;\n    margin-right: -4px;\n    height: calc(100% + 8px);\n    margin-top: -4px;\n    margin-bottom: -4px;\n    flex-grow: 1;\n    justify-content: flex-start;\n}\n.root::menuItem {\n    padding-right: 10px;\n    padding-left: 10px;\n    border: 0 solid #757575;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-left: 4px;\n    margin-right: 4px;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    background: rgba(117, 117, 117, 0);\n}\n.root::menuItem::label {\n    font-size: 16px;\n    color: #000;\n    font-family: \"palatino linotype\", serif;\n    letter-spacing: 0.05em;\n}\n.root::menuItem::container {\n    justify-content: center;\n}\n.root::menuItem:isCurrentPage::label {\n    text-decoration-line: underline;\n}\n.root::menuItem:isHovered::label {\n    text-decoration-line: underline;\n}\n.root::rightAlignmentScrollItem {\n    --flexGrow: 1;\n}\n.root::scrollButton {\n    border: 0 solid #757575;\n    padding: 10px;\n    background: rgba(255, 255, 255, 0.8);\n    padding-top: 0px;\n    padding-bottom: 0px;\n}\n.root::scrollButton::icon {\n    width: 16px;\n    height: 16px;\n    fill: #000;\n}\n.root::scrollButton:hover::icon {\n    fill: rgba(0, 0, 0, 0.6);\n}\n.root::positionBox {\n    margin-left: 20px;\n    margin-right: 20px;\n}\n.root::columnsLayout {\n    --flyoutAlignment: left;\n    --horizontalSpacing: 28;\n    padding: 12px;\n    background: #FFF;\n    border: 1px solid #000;\n    margin-top: 0px;\n}\n.root::columnsLayout::listWrapper {\n    --width: 80;\n    --columnsAmount: 3;\n    width: 100%;\n    column-count: 3;\n}\n.root::columnsLayout::pageWrapper {\n    justify-content: space-between;\n    margin-bottom: -4px;\n    margin-left: -14px;\n    margin-right: -14px;\n    width: calc(100% + 28px);\n}\n.root::columnsLayout::pageStretchWrapper {\n    width: 100%;\n}\n.root::columnsLayout::category {\n    margin-top: 4px;\n}\n.root::columnsLayout::flex {\n    margin-bottom: -8px;\n}\n.root::columnsLayout::listItem {\n    margin-left: 14px;\n    margin-right: 14px;\n}\n.root::columnsLayout::rowItem {\n    margin-bottom: 8px;\n}\n.root::columnsLayout::menuItem {\n    padding-right: 10px;\n    padding-left: 10px;\n    border: 0 solid #757575;\n    background: rgba(117, 117, 117, 0);\n    margin-bottom: 4px;\n    padding-top: 6px;\n    padding-bottom: 6px;\n}\n.root::columnsLayout::menuItem::container {\n    justify-content: flex-start;\n}\n.root::columnsLayout::menuItem::label {\n    font-size: 16px;\n    font-family: \"palatino linotype\", serif;\n    letter-spacing: 0em;\n    color: #000;\n}\n.root::columnsLayout::menuItem:isCurrentPage::label {\n    text-decoration-line: underline;\n}\n.root::columnsLayout::menuItem:isHovered::label {\n    text-decoration-line: underline;\n}\n.root::columnsLayout::heading {\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-bottom: 4px;\n    padding-top: 6px;\n    padding-bottom: 6px;\n    border: 1px solid;\n    border-width: 0px 0px 3px;\n    border-image: linear-gradient(58deg, rgba(237, 88, 41, 0.76) 0%, rgba(249, 195, 0, 0.47) 13%, rgba(210, 172, 247, 0.44) 36%, rgba(140, 182, 214, 0.53) 48%, rgba(0, 189, 151, 0.18) 66%, rgba(105, 181, 199, 0.365) 76%, rgba(210, 172, 247, 0.27) 86%, rgba(186, 131, 240, 0.76) 99%) 1 / 0px 0px 3px stretch;\n    border-radius: 0px;\n}\n.root::columnsLayout::heading::container {\n    justify-content: flex-start;\n}\n.root::columnsLayout::heading::label {\n    letter-spacing: 0.05em;\n    font-style: italic;\n    color: #000;\n    font-weight: 400;\n    font-size: 16px;\n    font-family: \"palatino linotype\", serif;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/variants/addPanelV1/stylableStylableHorizontalMenu3.st.css": {
      "metadata": {
        "namespace": "stylableStylableHorizontalMenu3-stylablehorizontalmenu4089050981",
        "variant": true,
        "depth": 3
      },
      "content": ":import {\n  -st-from: '../../StylableHorizontalMenu.st.css';\n  -st-default: StylableHorizontalMenu;\n}\n.root {\n    -st-extends: StylableHorizontalMenu;\n    background: #FFF;\n    border: 0px solid #000;\n}\n.root::menu {\n    direction: ltr;\n    width: calc(100% + 8px);\n    margin-left: -4px;\n    margin-right: -4px;\n    height: calc(100% + 8px);\n    margin-top: -4px;\n    margin-bottom: -4px;\n    flex-grow: 1;\n    justify-content: flex-start;\n}\n.root::menuItem {\n    margin-left: 4px;\n    margin-right: 4px;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    border: 0 solid #757575;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-right: 10px;\n    padding-left: 10px;\n    background: rgba(117, 117, 117, 0);\n}\n.root::menuItem::label {\n    letter-spacing: .1em;\n    color: #000;\n    font-family: anton, sans-serif;\n    font-size: 20px;\n}\n.root::menuItem::container {\n    justify-content: center;\n}\n.root::menuItem:isCurrentPage::label {\n    color: #5F2BE0;\n}\n.root::menuItem:isHovered::label {\n    color: #5F2BE0;\n}\n.root::rightAlignmentScrollItem {\n    --flexGrow: 1;\n}\n.root::scrollButton {\n    background: #FFF;\n    border: 0 solid #757575;\n    padding: 10px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    box-shadow: -5.66px 5.66px 15px 3px rgba(0, 0, 0, 0.05);\n}\n.root::scrollButton::icon {\n    fill: #000;\n    width: 16px;\n    height: 16px;\n}\n.root::scrollButton:hover::icon {\n    fill: #5F2BE0;\n}\n.root::positionBox {\n    margin-left: 20px;\n    margin-right: 20px;\n}\n.root::columnsLayout {\n    --flyoutAlignment: left;\n    --horizontalSpacing: 8;\n    border: 0 solid #000;\n    background: #F7F7F7;\n    padding: 10px;\n    margin-top: 0px;\n}\n.root::columnsLayout::listWrapper {\n    --width: 80;\n    --columnsAmount: 3;\n    width: 100%;\n    column-count: 3;\n}\n.root::columnsLayout::listItem {\n    margin-left: 4px;\n    margin-right: 4px;\n}\n.root::columnsLayout::pageWrapper {\n    justify-content: space-between;\n    width: calc(100% + 8px);\n    margin-left: -4px;\n    margin-right: -4px;\n    margin-bottom: -0px;\n}\n.root::columnsLayout::pageStretchWrapper {\n    width: 980px;\n}\n.root::columnsLayout::category {\n    margin-top: 0px;\n}\n.root::columnsLayout::flex {\n    margin-bottom: -8px;\n}\n.root::columnsLayout::menuItem {\n    padding-right: 10px;\n    padding-left: 10px;\n    border: 0 solid #757575;\n    background: rgba(117, 117, 117, 0);\n    padding-top: 8px;\n    padding-bottom: 8px;\n    margin-bottom: 0px;\n}\n.root::columnsLayout::menuItem::container {\n    justify-content: flex-start;\n}\n.root::columnsLayout::menuItem::label {\n    color: #000;\n    letter-spacing: 0.05em;\n    font-size: 18px;\n    font-family: anton, sans-serif;\n}\n.root::columnsLayout::menuItem:isCurrentPage::label {\n    color: #5F2BE0;\n}\n.root::columnsLayout::menuItem:isHovered::label {\n    color: #5F2BE0;\n}\n.root::columnsLayout::heading {\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    margin-bottom: 0px;\n    background: rgba(117, 117, 117, 0);\n}\n.root::columnsLayout::heading::container {\n    justify-content: flex-start;\n}\n.root::columnsLayout::heading::label {\n    font-weight: 400;\n    font-size: 16px;\n    letter-spacing: 0.05em;\n    font-family: oswald-extralight, oswald, sans-serif;\n    color: #2F2F2F;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/variants/addPanelV1/stylableStylableHorizontalMenu4.st.css": {
      "metadata": {
        "namespace": "stylableStylableHorizontalMenu4-stylablehorizontalmenu4089050981",
        "variant": true,
        "depth": 3
      },
      "content": ":import {\n  -st-from: '../../StylableHorizontalMenu.st.css';\n  -st-default: StylableHorizontalMenu;\n}\n.root {\n    -st-extends: StylableHorizontalMenu;\n    border: 0 solid #000;\n    background: #FFF;\n}\n.root::menu {\n    direction: ltr;\n    width: calc(100% + 8px);\n    margin-left: -4px;\n    margin-right: -4px;\n    height: calc(100% + 8px);\n    margin-top: -4px;\n    margin-bottom: -4px;\n    flex-grow: 1;\n    justify-content: flex-start;\n}\n.root::menuItem {\n    padding-right: 10px;\n    padding-left: 10px;\n    margin-left: 4px;\n    margin-right: 4px;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    padding-bottom: 10px;\n    padding-top: 10px;\n    border: 1px solid rgb(204, 204, 204);\n    border-left: 0px solid rgba(204, 204, 204, 0);\n    border-right: 0px solid rgb(204, 204, 204);\n    border-top: 1px solid rgba(204, 204, 204, 0);\n    border-bottom: 1px solid rgba(204, 204, 204, 0);\n    background: rgba(117, 117, 117, 0);\n}\n.root::menuItem:isCurrentPage {\n    border-top: 1px solid #000;\n    border-bottom: 1px solid #000;\n}\n.root::menuItem:isHovered {\n    border-top: 1px solid #000;\n    border-bottom: 1px solid #000;\n}\n.root::menuItem::label {\n    font-size: 16px;\n    color: #000;\n    font-family: georgia, palatino, \"book antiqua\", \"palatino linotype\", serif;\n    letter-spacing: 0.05em;\n}\n.root::menuItem::container {\n    justify-content: center;\n}\n.root::rightAlignmentScrollItem {\n    --flexGrow: 1;\n}\n.root::scrollButton {\n    border: 0 solid #757575;\n    padding: 10px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    background: #FFF;\n}\n.root::scrollButton::icon {\n    width: 16px;\n    height: 16px;\n    fill: #000\n}\n.root::scrollButton:hover::icon {\n    fill: rgba(0, 0, 0, 0.6);\n}\n.root::positionBox {\n    margin-left: 20px;\n    margin-right: 20px;\n}\n.root::columnsLayout {\n    --flyoutAlignment: left;\n    --horizontalSpacing: 0;\n    background: #FFF;\n    border: 1px solid #000;\n    border-left: 0px solid #000;\n    border-top: 0px solid #000;\n    border-right: 0px solid #000;\n    padding: 10px;\n    margin-top: 0px;\n}\n.root::columnsLayout::listWrapper {\n    --width: 80;\n    --columnsAmount: 3;\n    width: 100%;\n    column-count: 3;\n}\n.root::columnsLayout::pageWrapper {\n    justify-content: space-between;\n    margin-left: -0px;\n    margin-right: -0px;\n    width: calc(100% + 0px);\n    margin-bottom: -0px;\n}\n.root::columnsLayout::pageStretchWrapper {\n    width: 980px;\n}\n.root::columnsLayout::category {\n    margin-top: 0px;\n}\n.root::columnsLayout::flex {\n    margin-bottom: -8px;\n}\n.root::columnsLayout::listItem {\n    margin-left: 0px;\n    margin-right: 0px;\n}\n.root::columnsLayout::rowItem {\n    margin-bottom: 8px;\n}\n.root::columnsLayout::menuItem {\n    padding-left: 10px;\n    padding-right: 10px;\n    border: 0 solid #757575;\n    background: rgba(117, 117, 117, 0);\n    margin-bottom: 0px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n}\n.root::columnsLayout::menuItem::container {\n    justify-content: flex-start;\n}\n.root::columnsLayout::menuItem::label {\n    color: #000;\n    font-size: 16px;\n    font-family: \"palatino linotype\", serif;\n    letter-spacing: 0.05em;\n}\n.root::columnsLayout::menuItem:isCurrentPage::label {\n    text-decoration-line: underline;\n}\n.root::columnsLayout::menuItem:isHovered::label {\n    text-decoration-line: underline;\n}\n.root::columnsLayout::heading {\n    padding-left: 10px;\n    padding-right: 10px;\n    border: 0px solid #757575;\n    margin-bottom: 0px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n}\n.root::columnsLayout::heading::container {\n    justify-content: flex-start;\n}\n.root::columnsLayout::heading::label {\n    letter-spacing: 0.05em;\n    font-style: italic;\n    font-weight: 400;\n    font-family: cormorantgaramond-semibold, cormorantgaramond, \"cormorant garamond\", serif;\n    font-size: 16px;\n    color: #8F8F8F;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/variants/addPanelV1/stylableStylableHorizontalMenu5.st.css": {
      "metadata": {
        "namespace": "stylableStylableHorizontalMenu5-stylablehorizontalmenu4089050981",
        "variant": true,
        "depth": 3
      },
      "content": ":import {\n  -st-from: '../../StylableHorizontalMenu.st.css';\n  -st-default: StylableHorizontalMenu;\n}\n.root {\n    -st-extends: StylableHorizontalMenu;\n    border: 0 solid #1B5B3F;\n    background: rgba(27, 91, 63, 0);\n}\n.root::menu {\n    direction: ltr;\n    width: calc(100% + 8px);\n    margin-left: -4px;\n    margin-right: -4px;\n    height: calc(100% + 8px);\n    margin-top: -4px;\n    margin-bottom: -4px;\n    flex-grow: 1;\n    justify-content: flex-start;\n}\n.root::menuItem {\n    padding-right: 10px;\n    padding-left: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-left: 4px;\n    margin-right: 4px;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    border: 1px solid #1B5B3F;\n    background: #1B5B3F;\n}\n.root::menuItem:isCurrentPage {\n    background: #FFF;\n}\n.root::menuItem:isHovered {\n    background: #FFF;\n}\n.root::menuItem::label {\n    font-family: avenir-lt-w01_85-heavy1475544, sans-serif;\n    font-size: 16px;\n    letter-spacing: .05em;\n    color: #fff;\n}\n.root::menuItem::container {\n    justify-content: center;\n}\n.root::menuItem:isCurrentPage::label {\n    color: #1B5B3F;\n}\n.root::menuItem:isHovered::label {\n    color: #1B5B3F;\n}\n.root::rightAlignmentScrollItem {\n    --flexGrow: 1;\n}\n.root::scrollButton {\n    background: #FFF;\n    border: 1px solid #1B5B3F;\n    padding: 10px;\n    padding-top: 0px;\n    padding-bottom: 0px\n}\n.root::scrollButton:hover {\n    background: #1B5B3F;\n}\n.root::scrollButton::icon {\n    fill: #1B5B3F;\n    width: 16px;\n    height: 16px;\n}\n.root::scrollButton:hover::icon {\n    fill: #fff;\n}\n.root::positionBox {\n    margin-left: 20px;\n    margin-right: 20px;\n}\n.root::columnsLayout {\n    --flyoutAlignment: left;\n    --horizontalSpacing: 8;\n    background: #FFF;\n    border: 1px solid rgb(27, 91, 63);\n    padding: 10px;\n    margin-top: 0px;\n}\n.root::columnsLayout::listWrapper {\n    --width: 80;\n    --columnsAmount: 3;\n    width: 100%;\n    column-count: 3;\n}\n.root::columnsLayout::pageWrapper {\n    justify-content: space-between;\n    width: calc(100% + 8px);\n    margin-left: -4px;\n    margin-right: -4px;\n    margin-bottom: -4px;\n}\n.root::columnsLayout::pageStretchWrapper {\n    width: 980px;\n}\n.root::columnsLayout::category {\n    margin-top: 4px;\n}\n.root::columnsLayout::flex {\n    margin-bottom: -8px;\n}\n.root::columnsLayout::listItem {\n    margin-left: 4px;\n    margin-right: 4px;\n}\n.root::columnsLayout::rowItem {\n    margin-bottom: 8px;\n}\n.root::columnsLayout::menuItem {\n    border: 0 solid #757575;\n    background: rgba(117, 117, 117, 0);\n    margin-bottom: 4px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n.root::columnsLayout::menuItem::container {\n    justify-content: flex-start;\n}\n.root::columnsLayout::menuItem::label {\n    letter-spacing: .1em;\n    font-family: avenir-lt-w01_35-light1475496, sans-serif;\n    font-size: 14px;\n    color: #1B5B3F;\n}\n.root::columnsLayout::menuItem:isCurrentPage::label {\n    text-decoration-line: underline;\n}\n.root::columnsLayout::menuItem:isHovered::label {\n    text-decoration-line: underline;\n}\n.root::columnsLayout::heading {\n    background: #1B5B3F;\n    margin-bottom: 4px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n.root::columnsLayout::heading::label {\n    font-size: 16px;\n    letter-spacing: 0.05em;\n    font-weight: 400;\n    color: #fff;\n    font-family: avenir-lt-w01_35-light1475496, sans-serif;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/variants/addPanelV1/stylableStylableHorizontalMenu6.st.css": {
      "metadata": {
        "namespace": "stylableStylableHorizontalMenu6-stylablehorizontalmenu4089050981",
        "variant": true,
        "depth": 3
      },
      "content": ":import {\n  -st-from: '../../StylableHorizontalMenu.st.css';\n  -st-default: StylableHorizontalMenu;\n}\n.root {\n    -st-extends: StylableHorizontalMenu;\n    background: #FFF;\n    border: 0 solid #9E3B1B;\n}\n.root::menu {\n    width: calc(100% + 8px);\n    margin-left: -4px;\n    margin-right: -4px;\n    height: calc(100% + 8px);\n    margin-top: -4px;\n    margin-bottom: -4px;\n    flex-grow: 1;\n    direction: ltr;\n    justify-content: flex-start;\n}\n.root::menuItem {\n    padding-right: 10px;\n    padding-left: 10px;\n    margin-left: 4px;\n    margin-right: 4px;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    border: 0 solid #757575;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    background: rgba(117, 117, 117, 0);\n}\n.root::menuItem:isCurrentPage {\n    background: #FCF7E6;\n}\n.root::menuItem:isHovered {\n    background: #FCF7E6;\n}\n.root::menuItem::label {\n    font-size: 16px;\n    color: #9E3B1B;\n    letter-spacing: 0.05em;\n    font-family: futura-lt-w01-book, sans-serif;\n}\n.root::menuItem::container {\n    justify-content: center;\n}\n.root::rightAlignmentScrollItem {\n    --flexGrow: 1;\n}\n.root::scrollButton {\n    border: 0 solid #757575;\n    padding: 10px;\n    background: #FFF;\n    padding-top: 0px;\n    padding-bottom: 0px;\n}\n.root::scrollButton:hover {\n    background: #FCF7E6;\n}\n.root::scrollButton::icon {\n    width: 16px;\n    height: 16px;\n    fill: #9E3B1B;\n}\n.root::positionBox {\n    margin-left: 20px;\n    margin-right: 20px;\n}\n.root::columnsLayout {\n    --flyoutAlignment: left;\n    --horizontalSpacing: 8;\n    border: 0 solid #9E3B1B;\n    background: #FCF7E6;\n    padding: 10px;\n    margin-top: 0px;\n}\n.root::columnsLayout::listWrapper {\n    --width: 80;\n    --columnsAmount: 3;\n    width: 100%;\n    column-count: 3;\n}\n.root::columnsLayout::pageWrapper {\n    justify-content: space-between;\n    width: calc(100% + 8px);\n    margin-left: -4px;\n    margin-right: -4px;\n    margin-bottom: -0px;\n}\n.root::columnsLayout::pageStretchWrapper {\n    width: 980px;\n}\n.root::columnsLayout::category {\n    margin-top: 0px;\n}\n.root::columnsLayout::flex {\n    margin-bottom: -8px;\n}\n.root::columnsLayout::listItem {\n    margin-left: 4px;\n    margin-right: 4px;\n}\n.root::columnsLayout::rowItem {\n    margin-bottom: 8px;\n}\n.root::columnsLayout::menuItem {\n    padding-right: 10px;\n    padding-left: 10px;\n    border: 0 solid #757575;\n    background: rgba(117, 117, 117, 0);\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-bottom: 0px;\n}\n.root::columnsLayout::menuItem::container {\n    justify-content: flex-start;\n}\n.root::columnsLayout::menuItem::label {\n    font-size: 16px;\n    color: #9E3B1B;\n    letter-spacing: 0.05em;\n    font-family: futura-lt-w01-book, sans-serif;\n}\n.root::columnsLayout::heading {\n    padding-left: 10px;\n    padding-right: 10px;\n    background: #fff;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-bottom: 0px;\n}\n.root::columnsLayout::heading::container {\n    justify-content: flex-start;\n}\n.root::columnsLayout::heading::label {\n    font-weight: 400;\n    font-size: 16px;\n    letter-spacing: 0.05em;\n    font-family: futura-lt-w01-book, sans-serif;\n    color: #9E3B1B;\n}\n.root::columnsLayout::menuItem:isCurrentPage::label {\n    color: rgba(158, 59, 27, 0.7);\n}\n.root::columnsLayout::menuItem:isHovered::label {\n    color: rgba(158, 59, 27, 0.7);\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/variants/addPanelV1/stylableStylableHorizontalMenu7.st.css": {
      "metadata": {
        "namespace": "stylableStylableHorizontalMenu7-stylablehorizontalmenu4089050981",
        "variant": true,
        "depth": 3
      },
      "content": ":import {\n  -st-from: '../../StylableHorizontalMenu.st.css';\n  -st-default: StylableHorizontalMenu;\n}\n.root {\n    -st-extends: StylableHorizontalMenu;\n    border: 0 solid #000;\n    border-radius: 100px;\n    background: rgba(255, 222, 95, 0)\n}\n.root::menu {\n    direction: ltr;\n    width: calc(100% + 8px);\n    margin-left: -4px;\n    margin-right: -4px;\n    height: calc(100% + 8px);\n    margin-top: -4px;\n    margin-bottom: -4px;\n    flex-grow: 1;\n    justify-content: flex-start;\n}\n.root::menuItem {\n    padding-right: 10px;\n    padding-left: 10px;\n    margin-left: 4px;\n    margin-right: 4px;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    border-radius: 100px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    background: #FFDE5F;\n    border: 0 solid #757575;\n}\n.root::menuItem:isCurrentPage {\n    background: #E7D6F9;\n}\n.root::menuItem:isHovered {\n    background: #E7D6F9;\n}\n.root::menuItem::label {\n    font-size: 16px;\n    font-family: raleway-semibold, raleway, sans-serif;\n    letter-spacing: 0.05em;\n    color: #242323;\n}\n.root::menuItem::container {\n    justify-content: center;\n}\n.root::rightAlignmentScrollItem {\n    --flexGrow: 1;\n}\n.root::scrollButton {\n    box-shadow: -2.83px 2.83px 10px 4px rgba(0, 0, 0, .05);\n    padding: 10px;\n    border: 0 solid #757575;\n    border-radius: 0px 100px 100px 0px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    background: #FFF;\n}\n.root::scrollButton:hover {\n    background: #242323;\n}\n.root::scrollButton::icon {\n    fill: #000;\n    width: 16px;\n    height: 16px;\n}\n.root::scrollButton:hover::icon {\n    fill: #FFF;\n}\n.root::positionBox {\n    margin-left: 20px;\n    margin-right: 20px;\n}\n.root::columnsLayout {\n    --flyoutAlignment: left;\n    --horizontalSpacing: 8;\n    padding: 10px;\n    border-radius: 20px;\n    background: #fff;\n    border: 1px solid #E7D6F9;\n    margin-top: 10px;\n}\n.root::columnsLayout::listWrapper {\n    --width: 80;\n    --columnsAmount: 3;\n    width: 100%;\n    column-count: 3;\n}\n.root::columnsLayout::pageWrapper {\n    justify-content: space-between;\n    width: calc(100% + 8px);\n    margin-left: -4px;\n    margin-right: -4px;\n    margin-bottom: -8px;\n}\n.root::columnsLayout::pageStretchWrapper {\n    width: 980px;\n}\n.root::columnsLayout::category {\n    margin-top: 8px;\n}\n.root::columnsLayout::flex {\n    margin-bottom: -16px;\n}\n.root::columnsLayout::listItem {\n    margin-left: 4px;\n    margin-right: 4px;\n}\n.root::columnsLayout::rowItem {\n    margin-bottom: 16px;\n}\n.root::columnsLayout::menuItem {\n    padding-bottom: 10px;\n    border-radius: 100px;\n    padding-right: 10px;\n    padding-left: 10px;\n    padding-top: 10px;\n    margin-bottom: 8px;\n    background: rgba(255, 222, 95, 0)\n}\n.root::columnsLayout::menuItem:isCurrentPage {\n    background: #E7D6F9;\n}\n.root::columnsLayout::menuItem:isHovered {\n    background: #E7D6F9;\n}\n.root::columnsLayout::menuItem::container {\n    justify-content: center;\n}\n.root::columnsLayout::menuItem::label {\n    color: #000;\n    font-size: 14px;\n    font-family: raleway-semibold, raleway, sans-serif;\n    letter-spacing: 0.05em;\n    text-align: center;\n}\n.root::columnsLayout::heading {\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-bottom: 8px;\n    border-radius: 100px;\n    background: #fff;\n    border: 1px solid #E7D6F9;\n}\n.root::columnsLayout::heading::container {\n    justify-content: center;\n}\n.root::columnsLayout::heading::label {\n    font-weight: 400;\n    letter-spacing: 0.05em;\n    color: #000;\n    font-family: raleway-semibold, raleway, sans-serif;\n    font-size: 14px;\n    text-align: center;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/variants/addPanelV1/stylableStylableHorizontalMenu8.st.css": {
      "metadata": {
        "namespace": "stylableStylableHorizontalMenu8-stylablehorizontalmenu4089050981",
        "variant": true,
        "depth": 3
      },
      "content": ":import {\n  -st-from: '../../StylableHorizontalMenu.st.css';\n  -st-default: StylableHorizontalMenu;\n}\n.root {\n    -st-extends: StylableHorizontalMenu;\n    background: #FFF;\n    border: 0 solid #000;\n}\n.root::menu {\n    direction: ltr;\n    width: calc(100% + 8px);\n    margin-left: -4px;\n    margin-right: -4px;\n    height: calc(100% + 8px);\n    margin-top: -4px;\n    margin-bottom: -4px;\n    flex-grow: 1;\n    justify-content: flex-start;\n}\n.root::menuItem {\n    padding-right: 10px;\n    padding-left: 10px;\n    padding-top: 10px;\n    margin-left: 4px;\n    margin-right: 4px;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    padding-bottom: 10px;\n    border: 0px solid rgba(255, 255, 255, 0);\n    border-bottom: 2px solid rgba(255, 255, 255, 0);\n    background: rgba(117, 117, 117, 0);\n}\n.root::menuItem:isCurrentPage {\n    border-color: #000;\n    border-bottom: 2px solid #000;\n}\n.root::menuItem:isHovered {\n    border-color: #000;\n    border-bottom: 2px solid #000;\n}\n.root::menuItem::label {\n    font-size: 16px;\n    letter-spacing: .1em;\n    color: #000;\n    font-family: helvetica-w01-roman, helvetica-w02-roman, helvetica-lt-w10-roman, sans-serif;\n}\n.root::menuItem::container {\n    justify-content: center\n}\n.root::rightAlignmentScrollItem {\n    --flexGrow: 1;\n}\n.root::scrollButton {\n    background: #000;\n    border: 0 solid #757575;\n    padding: 10px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n}\n.root::scrollButton:hover {\n    background: #444343;\n}\n.root::scrollButton::icon {\n    width: 16px;\n    height: 16px;\n    fill: #fff;\n}\n.root::positionBox {\n    margin-left: 20px;\n    margin-right: 20px;\n}\n.root::columnsLayout {\n    --flyoutAlignment: left;\n    --horizontalSpacing: 8;\n    background: #FFF;\n    border: 0 solid #ccc;\n    padding: 10px;\n    border-bottom: 2px solid #000;\n    margin-top: 0px;\n}\n.root::columnsLayout::listWrapper {\n    --width: 80;\n    --columnsAmount: 3;\n    width: 100%;\n    column-count: 3;\n}\n.root::columnsLayout::pageWrapper {\n    justify-content: space-between;\n    width: calc(100% + 8px);\n    margin-left: -4px;\n    margin-right: -4px;\n    margin-bottom: -0px;\n}\n.root::columnsLayout::pageStretchWrapper {\n    width: 980px;\n}\n.root::columnsLayout::category {\n    margin-top: 0px;\n}\n.root::columnsLayout::flex {\n    margin-bottom: -8px;\n}\n.root::columnsLayout::listItem {\n    margin-left: 4px;\n    margin-right: 4px;\n}\n.root::columnsLayout::rowItem {\n    margin-bottom: 8px;\n}\n.root::columnsLayout::menuItem {\n    padding-right: 10px;\n    padding-left: 10px;\n    border: 0 solid #757575;\n    background: rgba(117, 117, 117, 0);\n    margin-bottom: 0px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n.root::columnsLayout::menuItem::container {\n    justify-content: flex-start;\n}\n.root::columnsLayout::menuItem::label {\n    font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;\n    color: #575859;\n    letter-spacing: 0em;\n    font-size: 16px;\n}\n.root::columnsLayout::menuItem:isCurrentPage::label {\n    text-decoration-line: underline;\n}\n.root::columnsLayout::menuItem:isHovered::label {\n    text-decoration-line: underline;\n}\n.root::columnsLayout::heading {\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-bottom: 0px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n.root::columnsLayout::heading::label {\n    font-weight: 400;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    color: #000;\n    font-family: helvetica-w01-roman, helvetica-w02-roman, helvetica-lt-w10-roman, sans-serif;\n    font-size: 15px;\n}\n.root::columnsLayout::heading:isCurrentPage::label {\n    text-decoration-line: underline;\n}\n.root::columnsLayout::heading:isHovered::label {\n    text-decoration-line: underline;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/variants/addPanelV1/stylableStylableHorizontalMenu9.st.css": {
      "metadata": {
        "namespace": "stylableStylableHorizontalMenu9-stylablehorizontalmenu4089050981",
        "variant": true,
        "depth": 3
      },
      "content": ":import {\n  -st-from: '../../StylableHorizontalMenu.st.css';\n  -st-default: StylableHorizontalMenu;\n}\n.root {\n    -st-extends: StylableHorizontalMenu;\n    border: 0 solid #000;\n    background: rgba(255, 245, 249, 0);\n}\n.root::menu {\n    direction: ltr;\n    width: calc(100% + 8px);\n    margin-left: -4px;\n    margin-right: -4px;\n    height: calc(100% + 8px);\n    margin-top: -4px;\n    margin-bottom: -4px;\n    flex-grow: 1;\n    justify-content: flex-start;\n}\n.root::menuItem {\n    padding-right: 10px;\n    padding-left: 10px;\n    padding-bottom: 10px;\n    margin-left: 4px;\n    margin-right: 4px;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    border: 0 solid #757575;\n    padding-top: 10px;\n    background: repeat padding-box border-box 50%/100% scroll wixMediaUrl(11062b_c4e7499e6335490a9692ad5bd3883fd5~mv2.png, 250, 250), #fff5f9;\n}\n.root::menuItem::label {\n    font-size: 16px;\n    letter-spacing: .1em;\n    color: #000;\n    font-family: montserrat, sans-serif\n}\n.root::menuItem::container {\n    justify-content: center;\n}\n.root::menuItem:isCurrentPage::label {\n    color: #D02727;\n}\n.root::menuItem:isHovered::label {\n    color: #D02727;\n}\n.root::rightAlignmentScrollItem {\n    --flexGrow: 1;\n}\n.root::scrollButton {\n    border: 0 solid #757575;\n    padding: 10px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    background: #FFF5F9;\n}\n.root::scrollButton:hover {\n    background: rgb(208, 39, 39);\n}\n.root::scrollButton::icon {\n    width: 16px;\n    height: 16px;\n    fill: #D02727;\n}\n.root::scrollButton:hover::icon {\n    fill: #FFF5F9;\n}\n.root::positionBox {\n    margin-left: 20px;\n    margin-right: 20px;\n}\n.root::columnsLayout {\n    --flyoutAlignment: left;\n    --horizontalSpacing: 8;\n    border: 0 solid #000;\n    padding: 10px;\n    margin-top: 0px;\n    background: #FFF5F9;\n}\n.root::columnsLayout::listWrapper {\n    --width: 80;\n    --columnsAmount: 3;\n    width: 100%;\n    column-count: 3;\n}\n.root::columnsLayout::pageWrapper {\n    justify-content: space-between;\n    width: calc(100% + 8px);\n    margin-left: -4px;\n    margin-right: -4px;\n    margin-bottom: -4px;\n}\n.root::columnsLayout::pageStretchWrapper {\n    width: 100%;\n}\n.root::columnsLayout::category {\n    margin-top: 4px;\n}\n.root::columnsLayout::flex {\n    margin-bottom: -8px;\n}\n.root::columnsLayout::listItem {\n    margin-left: 4px;\n    margin-right: 4px;\n}\n.root::columnsLayout::rowItem {\n    margin-bottom: 8px;\n}\n.root::columnsLayout::menuItem {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    padding-right: 10px;\n    padding-left: 10px;\n    background: rgba(117, 117, 117, 0);\n    border: 0 solid #757575;\n    margin-bottom: 4px;\n}\n.root::columnsLayout::menuItem::container {\n    justify-content: flex-start;\n}\n.root::columnsLayout::menuItem::label {\n    letter-spacing: .1em;\n    font-size: 16px;\n    color: #000;\n    font-family: montserrat, sans-serif;\n}\n.root::columnsLayout::menuItem:isCurrentPage::label {\n    color: #D02727;\n}\n.root::columnsLayout::menuItem:isHovered::label {\n    color: #D02727;\n}\n.root::columnsLayout::heading {\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-bottom: 4px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    border: 1px solid #ED5829;\n    border-top: 0px solid #ED5829;\n    border-right: 0px solid #ED5829;\n    border-left: 0px solid #ED5829;\n    border-bottom: 1px solid #FFCCBC;\n}\n.root::columnsLayout::heading::label {\n    font-weight: 400;\n    font-size: 16px;\n    letter-spacing: 0.05em;\n    color: #000;\n    font-family: bree-w01-thin-oblique, sans-serif;\n}\n.root::columnsLayout::heading:isCurrentPage::label {\n    color: #D02727;\n}\n.root::columnsLayout::heading:isHovered::label {\n    color: #D02727;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/editor/LayoutPanel.st.css": {
      "metadata": {
        "namespace": "layoutpanel392533137",
        "depth": 1
      },
      "content": ".root {}\n\n.hiddenImagePreloader {}\n\n.alignThumbnail {}\n\n.left {}\n\n.center {}\n\n.right {}\n\n.justify {}\n\n"
    },
    "/wix-ui-santa/src/components/TimePicker/TimePicker.st.css": {
      "metadata": {
        "namespace": "timepicker2632287174",
        "depth": 7
      },
      "content": ":import {\n  -st-from: \"wix-ui-core/index.st.css\";\n  -st-named: TimePicker;\n}\n\n:vars {\n  /* @type SKINS */\n  skins: 'wixui.skins.TimePicker';\n\n  /* @type COLOR_ALPHA */\n  backgroundColor: #FFFFFF;\n  /* @type COLOR_ALPHA */\n  iconColor: #000000;\n\n  /* @type COLOR_ALPHA */\n  borderColor: #919191;\n  /* @type BORDER_SIZES */\n  borderWidth: 1px;\n\n  /* @type BORDER_RADIUS */\n  borderRadius: 0px;\n\n  /* @type BOX_SHADOW */\n  boxShadow: 0 0px 0px rgba(0, 0, 0, .7);\n\n  /* @type FONT */\n  textFont: font_1;\n  /* @type TEXT_COLOR */\n  textColor: #000000;\n  /* @type TEXT_COLOR */\n  placeholderTextColor: #000000;\n\n  /* @type COLOR_ALPHA */\n  hoverBackgroundColor: #F2FAF9;\n  /* @type COLOR_ALPHA */\n  hoverBorderColor: #000000;\n  /* @type BORDER_SIZE */\n  hoverBorderWidth: 1px;\n\n  /* @type COLOR_ALPHA */\n  focusBackgroundColor: #FFFFFF;\n  /* @type COLOR_ALPHA */\n  focusBorderColor: #000000;\n  /* @type BORDER_SIZE */\n  focusBorderWidth: 1px;\n\n  /* @type COLOR_ALPHA */\n  errorBackgroundColor: #FFFFFF;\n  /* @type COLOR_ALPHA */\n  errorBorderColor: #ff4040;\n  /* @type BORDER_SIZE */\n  errorBorderWidth: 1px;\n\n  /* @type COLOR_ALPHA */\n  disabledBackgroundColor: #FFFFFF;\n  /* @type COLOR_ALPHA */\n  disabledBorderColor: #DBDBDB;\n  /* @type BORDER_SIZE */\n  disabledBorderWidth: 1px;\n  /* @type TEXT_COLOR */\n  disabledTextColor: #D4D4D4;\n\n  /* @type TEXT_COLOR */\n  txtlbl: color_15;\n\n  /* @type FONT */\n  fntlbl: font_8;\n\n  /* @type COLOR_ALPHA */\n  txtlblrq: color_15;\n}\n\n.root {\n  -st-states: error, disabled, alignment(enum(left, center, right)), previewState(enum(hover, focus, error, disabled, required)), isFocused, isMobile, required;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.dropdown-root, .timepicker-root {\n  border-width: value(borderWidth);\n  border-color: value(borderColor);\n  border-style: solid;\n  border-radius: value(borderRadius);\n  background-color: value(backgroundColor);\n  box-shadow: value(boxShadow);\n  box-sizing: border-box;\n  color: value(textColor);\n  height: 100%;\n}\n\n.root:hover .dropdown-root,\n.root:hover .timepicker-root,\n.root:hover .timepicker-root::nativeInput,\n.root:previewState(hover) .dropdown-root,\n.root:previewState(hover) .timepicker-root,\n.root:previewState(hover) .timepicker-root::nativeInput {\n  background-color: value(hoverBackgroundColor);\n  border-color: value(hoverBorderColor);\n  border-width: value(hoverBorderWidth);\n}\n\n.dropdown-root:focus,\n.timepicker-root:focus,\n.timepicker-root:focus::nativeInput,\n.root:previewState(focus) .dropdown-root,\n.root:previewState(focus) .timepicker-root,\n.root:previewState(focus) .timepicker-root::nativeInput,\n.root:isFocused .dropdown-root {\n  background-color: value(focusBackgroundColor);\n  border-color: value(focusBorderColor);\n  border-width: value(focusBorderWidth);\n}\n\n.root:disabled .dropdown-root,\n.root:disabled .timepicker-root,\n.root:disabled .timepicker-root::nativeInput,\n.root:previewState(disabled) .dropdown-root,\n.root:previewState(disabled) .timepicker-root,\n.root:previewState(disabled) .timepicker-root::nativeInput {\n  background-color: value(disabledBackgroundColor);\n  border-color: value(disabledBorderColor);\n  border-width: value(disabledBorderWidth);\n  color: value(disabledTextColor);\n}\n\n.root:error .dropdown-root,\n.root:error .timepicker-root,\n.root:error .timepicker-root::nativeInput,\n.root:previewState(error) .dropdown-root,\n.root:previewState(error) .timepicker-root,\n.root:previewState(error) .timepicker-root::nativeInput {\n  background-color: value(errorBackgroundColor);\n  border-color: value(errorBorderColor);\n  border-width: value(errorBorderWidth);\n}\n\n.root:alignment(center) .dropdown-root,\n.root:alignment(center) .timepicker-root::nativeInput {\n  text-align: center;\n}\n\n.root:alignment(right) .dropdown-root,\n.root:alignment(right) .timepicker-root {\n  flex-direction: row-reverse;\n}\n\n.root:alignment(right) .timepicker-root::tickers {\n  margin-right: 0;\n  margin-left: 20px;\n}\n\n.root:alignment(right) .dropdown-root,\n.root:alignment(right) .timepicker-root::nativeInput {\n  text-align: right;\n}\n\n.root:alignment(right) .dropdown-root svg {\n  margin-right: 0px;\n  margin-left: 20px;\n}\n\n.timepicker-root {\n  -st-extends: TimePicker;\n  display: inline-flex;\n  height: 100%;\n  width: 100%;\n  min-height: 25px;\n}\n\n.timepicker-root::nativeInput {\n  width: 100%;\n  font: value(textFont);\n  color: inherit;\n  border: none;\n  outline: none;\n  margin: 0px;\n  padding: 8px 0;\n  background-color: transparent;\n  border-radius: value(borderRadius);\n  min-width: 0;\n}\n\n.root:isMobile .timepicker-root::nativeInput {\n  font-size: inherit;\n}\n\n.timepicker-root::tickers {\n  margin-right: 20px;\n  padding: 3px 0px;\n  justify-content: center;\n}\n\n.timepicker-root::tickers::ticker {\n  color: value(iconColor);\n  flex-grow: initial;\n  height: 9px;\n  max-height: 9px;\n}\n\n.timepicker-root::tickers::ticker:first-of-type {\n  margin-bottom: 6px;\n}\n\n.dropdown-root {\n  height: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  font: value(textFont);\n}\n\n.dropdown-root [data-hook=\"timepicker-dropdown-value\"], .dropdown-root [data-hook=\"timepicker-dropdown-placeholder\"] {\n  flex: 1;\n  padding: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.dropdown-root [data-hook=\"timepicker-dropdown-placeholder\"] {\n  color: value(placeholderTextColor);\n}\n\n.dropdown-root select {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-appearance: menulist-button;\n}\n\n.dropdown-root svg {\n  margin-right: 20px;\n  color: value(iconColor);\n}\n\n.label {\n  color: value(txtlbl);\n  font: value(fntlbl);\n\n  padding-left: 0;\n  display: inline-block;\n  direction: ltr;\n  word-break: break-word;\n  line-height: 1;\n}\n\n.root:required .label::after {\n  content: \" *\";\n  color: value(txtlblrq);\n}\n\n.root:alignment(center) .label{\n  text-align: center;\n}\n\n.root:alignment(left) .label{\n  text-align: left;\n}\n\n.root:alignment(right) .label{\n  text-align: right;\n  direction: rtl;\n}"
    },
    "/wix-ui-santa/src/components/StylableButton/StylableButton.st.css": {
      "metadata": {
        "namespace": "stylablebutton643855516",
        "depth": 1
      },
      "content": ".root {\n    -archetype: box;\n    /* -st-states: error, disabled; */\n    cursor: pointer;\n    border: none;\n    display: block;\n    min-width: 10px;\n    min-height: 10px;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    padding: 0px;\n}\n\n.root[disabled] {\n    pointer-events: none;\n}\n\n.link {\n    -archetype: box;\n    text-decoration: none;\n    box-sizing: border-box;\n    color: black;\n}\n\n.container {\n    display: flex;\n    flex-basis: auto;\n    justify-content: center;\n    flex-direction: row;\n    flex-grow: 1;\n    align-items: center;\n    overflow: hidden;\n    height: 100%;\n    width: 100%;\n    transition: all 0.2s ease, visibility 0s;\n}\n\n.label {\n    -archetype: text;\n    -controller-part-type: \"LayoutChildDisplayDropdown, LayoutFlexChildSpacing(first)\";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    min-width: 1.8em;\n    max-width: 100%;\n    text-align: center;\n    transition: inherit;\n}\n\n.icon {\n    -archetype: icon;\n    -controller-part-type: \"LayoutChildDisplayDropdown, LayoutFlexChildSpacing(last)\";\n    min-width: 1px;\n    height: 50px;\n    transition: inherit;\n    flex-shrink: 0;\n    position: relative;\n}\n\n.icon > div,\n.icon svg {\n    width: inherit;\n    height: inherit;\n    top: 0;\n    left: 0;\n}\n.icon > div {\n    position: relative;\n}\n.icon svg {\n    position: absolute;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton1.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton1-stylablebutton643855516",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     border-radius: 100px;\n     padding: 4px 6px;\n     background: #323232;\n     box-shadow: 2.12px 2.12px 8px rgba(50,50,50,0);\n}\n .root:hover {\n     background: #FFFFFF;\n     border: 1px solid rgb(50, 50, 50);\n}\n .root:hover::label {\n     color: #323232;\n}\n .root:hover::icon {\n     fill: #323232;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     fill: #FFFFFF;\n     margin: 0px 0px 0px 3px;\n     width: 14px;\n     height: 14px;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-family: futura-lt-w01-book,sans-serif;\n     font-weight: 300;\n     font-size: 13px;\n     color: #FFFFFF;\n     margin: 0px 3px 0px 0px;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton10.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton10-stylablebutton643855516",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     padding: 4px 6px;\n     border-radius: 0px;\n     box-shadow: 2.12px 2.12px 4px rgba(50,50,50,0);\n     background: #AF60D8;\n     border-width: 0px;\n     border: 0px solid rgb(254, 232, 135);\n}\n .root:hover {\n     background: #FEE887;\n}\n .root:hover::label {\n     color: #AF60D8;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     width: 14px;\n     height: 14px;\n     fill: #FEE887;\n     display: none;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-family: playfairdisplay-bold,\\\"playfair display\\\",serif;\n     font-weight: 300;\n     letter-spacing: 0.05em;\n     font-size: 14px;\n     color: #FEE887;\n}\n "
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton11.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton11-stylablebutton643855516",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     border-radius: 100px;\n     padding: 4px 6px;\n     box-shadow: 2.12px 2.12px 8px rgba(50,50,50,0);\n     background: repeat padding-box border-box 0% 0%/auto auto scroll linear-gradient(180deg, rgba(255, 208, 100, 0.6) 0%, rgba(255, 208, 100, 0.6) 100%), repeat padding-box border-box 0%/60% scroll url('https://static.wixstatic.com/media/11062b_ae6a248fb44a41ff998fa4bb245dd70d~mv2.png'), #FFD064;\n}\n .root:hover {\n     border: 2px solid #FFD064;\n     background: #FFFFFF;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     display: initial;\n     margin: 0px 0px 0px 3px;\n     width: 14px;\n     height: 14px;\n     fill: #323232;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-family: futura-lt-w01-book,sans-serif;\n     font-weight: 300;\n     margin: 0px 3px 0px 0px;\n     font-size: 13px;\n     color: #323232;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton12.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton12-stylablebutton643855516",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     border-radius: 100px;\n     padding: 4px 6px;\n     box-shadow: 2.12px 2.12px 8px rgba(50,50,50,0);\n     background: repeat padding-box border-box 0% 0%/auto auto scroll linear-gradient(180deg, rgba(251, 212, 225, 0.6) 0%, rgba(251, 212, 225, 0.6) 100%), repeat padding-box border-box 51% 49%/60% scroll url('https://static.wixstatic.com/media/11062b_017372245417456bbcd2e558ed667fde~mv2.png'), #FBD4E1;\n}\n .root:hover {\n     background: repeat padding-box border-box 0% 0%/auto auto scroll linear-gradient(180deg, rgba(251, 212, 225, 0.6) 0%, rgba(251, 212, 225, 0.6) 100%), repeat padding-box border-box 50% 51%/72% scroll url('https://static.wixstatic.com/media/11062b_017372245417456bbcd2e558ed667fde~mv2.png'), #FBD4E1;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     width: 14px;\n     height: 14px;\n     fill: #323232;\n     display: none;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-family: poppins-extralight,poppins,sans-serif;\n     color: #323232;\n     font-size: 14px;\n     font-weight: 400;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton2.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton2-stylablebutton643855516",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     padding: 4px 6px;\n     box-shadow: 2.12px 2.12px 8px rgba(50,50,50,0);\n     border-radius: 0px;\n     border: 1px solid rgb(50, 50, 50);\n     background: #FFFFFF;\n}\n .root:hover {\n     background: #323232;\n}\n .root:hover::label {\n     color: #FFFFFF;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     fill: #FFFFFF;\n     width: 14px;\n     height: 14px;\n     display: none;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-weight: 300;\n     color: #323232;\n     font-size: 14px;\n     letter-spacing: 0.15em;\n     font-family: playfairdisplay-bold,\\\"playfair display\\\",serif;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton3.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton3-stylablebutton643855516",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     padding: 4px 6px;\n     box-shadow: 2.12px 2.12px 8px rgba(50,50,50,0);\n     border-radius: 0px;\n     background: #B6F3E8;\n     border: 0px solid rgb(31, 44, 243);\n}\n .root:hover {\n     border: 1px solid #1F2CF3;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     fill: #1F2CF3;\n     width: 10px;\n     height: 10px;\n     display: none;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-weight: 300;\n     font-size: 14px;\n     letter-spacing: 0.15em;\n     color: #1F2CF3;\n     font-family: oswald-medium,oswald,sans-serif;\n}\n "
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton4.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton4-stylablebutton643855516",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     padding: 4px 6px;\n     border-radius: 100px;\n     background: #FFFFFF;\n     border: 1px solid rgb(31, 44, 243);\n     box-shadow: 4.24px 4.24px 0 rgb(31, 44, 243);\n}\n .root:hover {\n     border: 1px solid #1F2CF3;\n     box-shadow: 4.24px 4.24px 0 rgba(31,44,243,0);\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     fill: #1F2CF3;\n     width: 10px;\n     height: 10px;\n     display: none;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-weight: 300;\n     color: #1F2CF3;\n     letter-spacing: 0.05em;\n     font-size: 13px;\n     font-family: raleway-semibold,raleway,sans-serif;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton5.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton5-stylablebutton643855516",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     padding: 4px 6px;\n     border-radius: 0px;\n     background: #B6F3E8;\n     border: 0px solid rgb(31, 44, 243);\n     box-shadow: 4.24px 4.24px 0 rgb(31, 44, 243);\n}\n .root:hover {\n     background: #1F2CF3;\n     box-shadow: 4.24px 4.24px 0 #B6F3E8;\n}\n .root:hover::icon {\n     fill: #B6F3E8;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     fill: #1F2CF3;\n     width: 24px;\n     height: 24px;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-family: oswald-medium,oswald,sans-serif;\n     font-weight: 300;\n     font-size: 14px;\n     letter-spacing: 0.15em;\n     color: #1F2CF3;\n     display: none;\n}\n "
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton6.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton6-stylablebutton643855516",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     padding: 4px 6px;\n     box-shadow: 2.12px 2.12px 8px rgba(50,50,50,0);\n     border-radius: 0px;\n     background: linear-gradient(309deg, #1e34e9 0%, #f89ba6 100%);\n     border: 0px solid rgba(255,255,255,0);\n}\n .root:hover {\n     border: 2px solid;\n     border-width: 2px;\n     border-image: linear-gradient(292deg, #1e34e9 0%, #f89ba6 100%) 1 / 2px stretch;\n     background: #FFFFFF;\n}\n .root:hover::label {\n     color: #323232;\n}\n .root:hover::icon {\n     fill: #323232;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     margin: 0px 0px 0px 3px;\n     width: 14px;\n     height: 14px;\n     fill: #FFFFFF;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-family: avenir-lt-w01_85-heavy1475544,sans-serif;\n     font-weight: 300;\n     margin: 0px 3px 0px 0px;\n     font-size: 14px;\n     letter-spacing: 0.15em;\n     color: #FFFFFF;\n}\n "
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton7.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton7-stylablebutton643855516",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     padding: 4px 6px;\n     box-shadow: 2.12px 2.12px 8px rgba(50,50,50,0);\n     border-radius: 0px;\n     background: #9CA7F7;\n     border: 4px double #FFFFFF;\n}\n .root:hover::icon {\n     display: initial;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     margin: 0px 0px 0px 3px;\n     width: 14px;\n     height: 14px;\n     fill: #FFFFFF;\n     display: none;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-family: avenir-lt-w01_35-light1475496,sans-serif;\n     font-weight: 300;\n     margin: 0px 3px 0px 0px;\n     font-size: 14px;\n     letter-spacing: 0.15em;\n     color: #FFFFFF;\n}\n "
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton8.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton8-stylablebutton643855516",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     padding: 4px 6px;\n     background: #FF7934;\n     border-radius: 100px;\n     border: 1px solid #FF7934;\n     box-shadow: 2.12px 2.12px 4px rgba(50, 50, 50, 0);\n}\n .root:hover {\n     background: #FFFFFF;\n     box-shadow: 2.12px 2.12px 4px rgba(50,50,50,0);\n}\n .root:hover::icon {\n     fill: #323232;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     width: 24px;\n     height: 24px;\n     fill: #FFFFFF;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-family: playfairdisplay-bold,\\\"playfair display\\\",serif;\n     font-weight: 300;\n     font-size: 14px;\n     letter-spacing: 0.15em;\n     color: #1F2CF3;\n     display: none;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1/stylableStylableButton9.st.css": {
      "metadata": {
        "namespace": "stylableStylableButton9-stylablebutton643855516",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n     -st-from: '../../StylableButton.st.css';\n     -st-default: StylableButton;\n}\n .root {\n     -st-extends: StylableButton;\n     transition: all 0.2s ease;\n     padding: 4px 6px;\n     background: #FFFFFF;\n     border-radius: 0px;\n     box-shadow: 2.12px 2.12px 4px rgba(50,50,50,0);\n     border: 2px solid;\n     border-width: 2px;\n     border-image: linear-gradient(150deg, #eaff94 0%, #2bc276 100%) 1 / 2px stretch;\n}\n .root:hover {\n     background: linear-gradient(150deg, #eaff94 0%, #2bc276 100%);\n     border-width: 0px;\n     border: 0px solid rgba(255, 255, 255, 0);\n}\n .root:hover::label {\n     color: #FFFFFF;\n}\n .root::container {\n     transition: inherit;\n     justify-content: center;\n     flex-direction: row;\n}\n .root::icon {\n     width: 14px;\n     height: 14px;\n     fill: #323232;\n     display: none;\n     transition: inherit;\n}\n .root::label {\n     transition: inherit;\n     font-family: helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;\n     font-weight: 300;\n     letter-spacing: 0.05em;\n     color: #323232;\n     display: initial;\n     font-size: 14px;\n}\n"
    },
    "/wix-ui-santa/src/components/AddressInput/AddressInput.st.css": {
      "metadata": {
        "namespace": "addressinput1374411744",
        "depth": 7
      },
      "content": ":import {\n    -st-from: \"wix-ui-core/index.st.css\";\n    -st-named: AddressInput;\n}\n\n:import {\n    -st-from: \"wix-ui-core/index.st.css\";\n    -st-named: DropdownOption;\n}\n\n:vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.AddressInput';\n\n    /* @type BG_COLOR_ALPHA */\n    dropdownBackgroundColor: #ffffff;\n    /* @type COLOR_ALPHA */\n    dropdownLocationIconColor: #797979;\n    /* @type BORDER_COLOR_ALPHA */\n    dropdownStrokeColor: #2cd8d7;\n    /* @type BORDER_SIZE */\n    dropdownStrokeWidth: 1;\n    /* @type BORDER_COLOR_ALPHA */\n    dropdownDividerStrokeColor: #2cd8d7;\n    /* @type BORDER_SIZE */\n    dropdownDividerStrokeWidth: 1;\n    /* @type BOX_SHADOW */\n    dropdownBoxShadow: none;\n    /* @type FONT */\n    dropdownFont: font_1;\n    /* @type COLOR */\n    dropdownTextColor: #000000;\n    /* @type COLOR */\n    dropdownHoverTextColor: #9b9b9b;\n    /* @type BG_COLOR_ALPHA */\n    dropdownHoverBackgroundColor: rgba(44, 216, 215, .7);\n    /* @type BORDER_SIZE */\n    dropdownOptionPadding: 16px;\n\n    /* @type BG_COLOR_ALPHA */\n    inputBackgroundColor: #f7f7f7;\n    /* @type BORDER_COLOR_ALPHA */\n    inputStrokeColor: #2cd8d7;\n    /* @type BORDER_SIZES */\n    inputStrokeWidth: 1;\n    /* @type BORDER_RADIUS */\n    inputBorderRadius: 10px;\n    /* @type BOX_SHADOW */\n    inputBoxShadow: 0 2px 0 0 #2cd8d7;\n    /* @type FONT */\n    inputFont: font_1;\n    /* @type COLOR */\n    inputTextColor: #000000;\n    /* @type COLOR */\n    inputPlaceholderTextColor: #000000;\n\n    /* @type BG_COLOR_ALPHA */\n    inputHoverBackgroundColor: #fdf3f2;\n    /* @type BORDER_COLOR_ALPHA */\n    inputHoverStrokeColor: #2cd8d7;\n    /* @type BORDER_SIZE */\n    inputHoverStrokeWidth: 1;\n\n    /* @type BG_COLOR_ALPHA */\n    inputFocusBackgroundColor: #ffffff;\n    /* @type BORDER_COLOR_ALPHA */\n    inputFocusStrokeColor: #2cd8d7;\n    /* @type BORDER_SIZE */\n    inputFocusStrokeWidth: 1;\n\n    /* @type BG_COLOR_ALPHA */\n    inputErrorBackgroundColor: #ffffff; /* TODO */\n    /* @type BORDER_COLOR_ALPHA */\n    inputErrorStrokeColor: #d0001b; /* TODO */\n    /* @type BORDER_SIZE */\n    inputErrorStrokeWidth: 1; /* TODO */\n\n    /* @type BG_COLOR_ALPHA */\n    inputDisabledBackgroundColor: #ffffff;\n    /* @type BORDER_COLOR_ALPHA */\n    inputDisabledStrokeColor: #9b9b9b;\n    /* @type BORDER_SIZE */\n    inputDisabledStrokeWidth: 1;\n    /* @type COLOR */\n    inputDisabledTextColor: #9b9b9b;\n\n    /* @type TEXT_COLOR */\n    txtlbl: color_15;\n\n    /* @type FONT */\n    fntlbl: font_8;\n\n    /* @type COLOR_ALPHA */\n    txtlblrq: color_15;\n}\n\n.address-input-root {\n    -st-extends: AddressInput;\n    -st-states: error, show-dividers, preview-input-hover, preview-input-disabled, preview-input-focus, preview-input-error, preview-list-regular, preview-list-hover, alignment(enum(left, center, right)), mobile;\n    width: 100%;\n    height: 100%;\n    min-height: 25px;\n}\n\n.address-input-root:alignment(left)::inputComponent::nativeInput, .address-input-root:alignment(left)::dropdownContent::dropdownOption {\n    text-align: left;\n}\n\n.address-input-root:alignment(right)::inputComponent::nativeInput, .address-input-root:alignment(right)::dropdownContent::dropdownOption {\n    text-align: right;\n}\n\n.address-input-root:alignment(center)::inputComponent::nativeInput, .address-input-root:alignment(center)::dropdownContent::dropdownOption {\n    text-align: center;\n}\n\n.address-input-root [data-hook=\"popover-element\"] {\n    width: 100%;\n    height: 100%;\n}\n\n.address-input-root [data-hook=\"popover-content\"] {\n    border: none;\n    background: transparent;\n    width: 100%;\n}\n\n.address-input-root::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    width: 100%;\n    height: 100%;\n    box-shadow: value(inputBoxShadow);\n}\n\n.address-input-root::inputComponent {\n    position: relative;\n    height: 100%;\n    border-radius: value(inputBorderRadius);\n    background-color: value(inputBackgroundColor);\n    border-color: value(inputStrokeColor);\n    border-width: value(inputStrokeWidth);\n    border-style: solid;\n    box-sizing: border-box;\n    overflow: hidden;\n}\n\n.address-input-root::inputComponent::nativeInput {\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    font: value(inputFont);\n    color: value(inputTextColor);\n    background-color: transparent;\n    padding: 10px 0;\n    border: none;\n}\n\n.address-input-root::inputComponent::nativeInput:focus {\n    outline: none;\n}\n\n.address-input-root:mobile::inputComponent::nativeInput {\n    font-size: inherit;\n}\n\n.address-input-root:content-visible::inputComponent {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.wrapper:hover .address-input-root::inputComponent,\n.wrapper:previewState(hover) .address-input-root::inputComponent {\n    background-color: value(inputHoverBackgroundColor);\n    border-color: value(inputHoverStrokeColor);\n    border-width: value(inputHoverStrokeWidth);\n}\n\n.address-input-root::inputComponent:focus,\n.address-input-root:preview-input-focus::inputComponent,\n.address-input-root:preview-list-regular::inputComponent,\n.address-input-root:preview-list-hover::inputComponent,\n.wrapper:focus-within .address-input-root::inputComponent {\n    background-color: value(inputFocusBackgroundColor);\n    border-color: value(inputFocusStrokeColor);\n    border-width: value(inputFocusStrokeWidth);\n}\n\n.address-input-root:error::inputComponent,\n.address-input-root:preview-input-error::inputComponent {\n    background-color: value(inputErrorBackgroundColor);\n    border-color: value(inputErrorStrokeColor);\n    border-width: value(inputErrorStrokeWidth);\n}\n\n.address-input-root::inputComponent:disabled,\n.address-input-root:preview-input-disabled::inputComponent {\n    background-color: value(inputDisabledBackgroundColor);\n    border-color: value(inputDisabledStrokeColor);\n    border-width: value(inputDisabledStrokeWidth);\n    color: value(inputDisabledTextColor);\n}\n\n.address-input-root::inputComponent::nativeInput::placeholder {\n    color: value(inputPlaceholderTextColor);\n}\n\n.address-input-root::dropdownContent::before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    background: transparent;\n    box-shadow: value(dropdownBoxShadow);\n}\n\n.address-input-root::dropdownContent {\n    background-color: value(dropdownBackgroundColor);\n    border-color: value(dropdownStrokeColor);\n    border-width: value(dropdownStrokeWidth);\n    border-style: solid;\n    font: value(dropdownFont);\n    color: value(dropdownTextColor);\n    border-top-width: 0;\n    border-radius: value(inputBorderRadius);\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    overflow: hidden;\n}\n\n.address-input-root:mobile::dropdownContent {\n    font-size: inherit;\n}\n\n.address-input-root::dropdownContent::dropdownOption::highlight {\n    color: value(dropdownTextColor);\n    opacity: 1;\n}\n\n.address-input-root::dropdownContent::dropdownOption::nonHighlight {\n    color: value(dropdownTextColor);\n    opacity: .6;\n}\n\n.address-input-root::dropdownContent::dropdownOption {\n    /* -st-extends: DropdownOption; */\n    -st-mixin: DropdownOption(\n        selectedBackgroundColor value(dropdownBackgroundColor),\n        selectedHoverBackgroundColor value(dropdownHoverBackgroundColor)\n    );\n    padding: 5px 0;\n}\n\n.address-input-root::dropdownContent::dropdownOption:first-of-type {\n    padding-top: 10px;\n}\n\n.address-input-root::dropdownContent::dropdownOption:last-of-type {\n    padding-bottom: 10px;\n}\n\n.address-input-root:show-dividers::dropdownContent::dropdownOption {\n    border-bottom-color: value(dropdownDividerStrokeColor);\n    border-bottom-width: value(dropdownDividerStrokeWidth);\n    border-bottom-style: solid;\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n\n.address-input-root::optionContent {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.address-input-root::dropdownContent::dropdownOption:hover,\n.address-input-root::dropdownContent::dropdownOption:hovered,\n.address-input-root::dropdownContent::dropdownOption:selected:hover,\n.address-input-root::dropdownContent::dropdownOption:selected:hovered,\n.address-input-root:preview-list-hover::dropdownContent::dropdownOption:first-of-type {\n    background: value(dropdownHoverBackgroundColor);\n    color: value(dropdownHoverTextColor);\n}\n\n.address-input-root::dropdownContent::dropdownOption:last-of-type {\n    border-bottom-width: 0;\n}\n\n.locationIcon path {\n    fill: value(dropdownLocationIconColor);\n}\n\n.address-input-root::iconWrapper {\n    padding: 0 8px 0 0;\n}\n\n.address-input-root:alignment(right)::iconWrapper {\n    padding: 0 0 0 8px;\n}\n\n.address-input-root:alignment(right)::option {\n    flex-direction: row-reverse;\n}\n\n.address-input-root:alignment(center)::option {\n    justify-content: center;\n}\n\n.address-input-root:alignment(center)::optionContent {\n    flex: inherit;\n}\n\n.dropdownFooter {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: flex-end;\n    box-sizing: border-box;\n    padding: 12px;\n}\n\n.googleBanner {\n    width: 144px;\n    height: 18px;\n}\n\n.label {\n    color: value(txtlbl);\n    font: value(fntlbl);\n\n    padding-left: 0;\n    display: inline-block;\n    direction: ltr;\n    word-break: break-word;\n    line-height: 1;\n}\n\n.wrapper {\n    -st-states: error, disabled, alignment(enum(left, center, right)), previewState(enum(hover, focus, error, disabled, required)), isFocused, isMobile, required;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.wrapper:required .label::after {\n    content: \" *\";\n    color: value(txtlblrq);\n}\n\n.wrapper:alignment(center) .label{\n    text-align: center;\n}\n\n.wrapper:alignment(left) .label{\n    text-align: left;\n}\n\n.wrapper:alignment(right) .label{\n    text-align: right;\n    direction: rtl;\n}"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/index.st.css": {
      "metadata": {
        "namespace": "index1906245426",
        "depth": 6
      },
      "content": "\n:import {-st-from: \"./dist/src/components/video/Video.st.css\";-st-default:Video;}\n.root Video{}\n:import {-st-from: \"./dist/src/components/tooltip/Tooltip.st.css\";-st-default:Tooltip;}\n.root Tooltip{}\n:import {-st-from: \"./dist/src/components/toggle-switch/ToggleSwitch.st.css\";-st-default:ToggleSwitch;}\n.root ToggleSwitch{}\n:import {-st-from: \"./dist/src/components/toggle-switch/ToggleSwitchColor.st.css\";-st-default:ToggleSwitchColor;}\n.root ToggleSwitchColor{}\n:import {-st-from: \"./dist/src/components/toggle-switch/ToggleSwitchLayout.st.css\";-st-default:ToggleSwitchLayout;}\n.root ToggleSwitchLayout{}\n:import {-st-from: \"./dist/src/components/toggle-switch/ToggleSwitchStyle.st.css\";-st-default:ToggleSwitchStyle;}\n.root ToggleSwitchStyle{}\n:import {-st-from: \"./dist/src/components/time-picker/Tickers.st.css\";-st-default:Tickers;}\n.root Tickers{}\n:import {-st-from: \"./dist/src/components/time-picker/TimePicker.st.css\";-st-default:TimePicker;}\n.root TimePicker{}\n:import {-st-from: \"./dist/src/components/thumbnail/Thumbnail.st.css\";-st-default:Thumbnail;}\n.root Thumbnail{}\n:import {-st-from: \"./dist/src/components/tags-list/Tag.st.css\";-st-default:Tag;}\n.root Tag{}\n:import {-st-from: \"./dist/src/components/tags-list/TagsList.st.css\";-st-default:TagsList;}\n.root TagsList{}\n:import {-st-from: \"./dist/src/components/slider/Slider.st.css\";-st-default:Slider;}\n.root Slider{}\n:import {-st-from: \"./dist/src/components/signature-input/title/Title.st.css\";-st-default:Title;}\n.root Title{}\n:import {-st-from: \"./dist/src/components/signature-input/signing-pad/SigningPad.st.css\";-st-default:SigningPad;}\n.root SigningPad{}\n:import {-st-from: \"./dist/src/components/signature-input/clear-button/ClearButton.st.css\";-st-default:ClearButton;}\n.root ClearButton{}\n:import {-st-from: \"./dist/src/components/radio-button/RadioButton.st.css\";-st-default:RadioButton;}\n.root RadioButton{}\n:import {-st-from: \"./dist/src/components/popover-next/components/Loader.st.css\";-st-default:Loader;}\n.root Loader{}\n:import {-st-from: \"./dist/src/components/popover/Popover.st.css\";-st-default:Popover;}\n.root Popover{}\n:import {-st-from: \"./dist/src/components/pagination/Pagination.st.css\";-st-default:Pagination;}\n.root Pagination{}\n:import {-st-from: \"./dist/src/components/pagination/PaginationTest.st.css\";-st-default:PaginationTest;}\n.root PaginationTest{}\n:import {-st-from: \"./dist/src/components/nav-stepper/NavStep.st.css\";-st-default:NavStep;}\n.root NavStep{}\n:import {-st-from: \"./dist/src/components/nav-stepper/NavStepper.st.css\";-st-default:NavStepper;}\n.root NavStepper{}\n:import {-st-from: \"./dist/src/components/menu-item/menu-item.st.css\";-st-default:MenuItem;}\n.root MenuItem{}\n:import {-st-from: \"./dist/src/components/linear-progress-bar/LinearProgressBar.st.css\";-st-default:LinearProgressBar;}\n.root LinearProgressBar{}\n:import {-st-from: \"./dist/src/components/label-with-options/LabelWithOptions.st.css\";-st-default:LabelWithOptions;}\n.root LabelWithOptions{}\n:import {-st-from: \"./dist/src/components/input-with-options/InputWithOptions.st.css\";-st-default:InputWithOptions;}\n.root InputWithOptions{}\n:import {-st-from: \"./dist/src/components/input/Input.st.css\";-st-default:Input;}\n.root Input{}\n:import {-st-from: \"./dist/src/components/image/image.st.css\";-st-default:Image;}\n.root Image{}\n:import {-st-from: \"./dist/src/components/icon-with-options/IconWithOptions.st.css\";-st-default:IconWithOptions;}\n.root IconWithOptions{}\n:import {-st-from: \"./dist/src/components/horizontal-menu/HorizontalMenu.st.css\";-st-default:HorizontalMenu;}\n.root HorizontalMenu{}\n:import {-st-from: \"./dist/src/components/horizontal-menu/horizontal-menu-item/HorizontalMenuItem.st.css\";-st-default:HorizontalMenuItem;}\n.root HorizontalMenuItem{}\n:import {-st-from: \"./dist/src/components/horizontal-menu/horizontal-menu-grid-layout/HorizontalMenuGridLayout.st.css\";-st-default:HorizontalMenuGridLayout;}\n.root HorizontalMenuGridLayout{}\n:import {-st-from: \"./dist/src/components/horizontal-menu/horizontal-menu-columns-layout/HorizontalMenuColumnsLayout.st.css\";-st-default:HorizontalMenuColumnsLayout;}\n.root HorizontalMenuColumnsLayout{}\n:import {-st-from: \"./dist/src/components/file-picker-button/FilePickerButton.st.css\";-st-default:FilePickerButton;}\n.root FilePickerButton{}\n:import {-st-from: \"./dist/src/components/ellipsis-tooltip/Ellipsis.st.css\";-st-default:Ellipsis;}\n.root Ellipsis{}\n:import {-st-from: \"./dist/src/components/ellipsis-tooltip/EllipsisTooltip.st.css\";-st-default:EllipsisTooltip;}\n.root EllipsisTooltip{}\n:import {-st-from: \"./dist/src/components/ellipsis-tooltip/tests/EllipsisTooltipTests.st.css\";-st-default:EllipsisTooltipTests;}\n.root EllipsisTooltipTests{}\n:import {-st-from: \"./dist/src/components/dropdown-option/DropdownOption.st.css\";-st-default:DropdownOption;}\n.root DropdownOption{}\n:import {-st-from: \"./dist/src/components/dropdown-content/DropdownContent.st.css\";-st-default:DropdownContent;}\n.root DropdownContent{}\n:import {-st-from: \"./dist/src/components/dropdown/Dropdown.st.css\";-st-default:Dropdown;}\n.root Dropdown{}\n:import {-st-from: \"./dist/src/components/deprecated/stylable-badge/Badge.st.css\";-st-default:Badge;}\n.root Badge{}\n:import {-st-from: \"./dist/src/components/deprecated/stylable-badge/BadgeStyle.st.css\";-st-default:BadgeStyle;}\n.root BadgeStyle{}\n:import {-st-from: \"./dist/src/components/deprecated/label/Label.st.css\";-st-default:Label;}\n.root Label{}\n:import {-st-from: \"./dist/src/components/deprecated/divider/Divider.st.css\";-st-default:Divider;}\n.root Divider{}\n:import {-st-from: \"./dist/src/components/deprecated/button/Button.st.css\";-st-default:Button;}\n.root Button{}\n:import {-st-from: \"./dist/src/components/deprecated/button/ButtonStyle.st.css\";-st-default:ButtonStyle;}\n.root ButtonStyle{}\n:import {-st-from: \"./dist/src/components/circular-progress-bar/CircularProgressBar.st.css\";-st-default:CircularProgressBar;}\n.root CircularProgressBar{}\n:import {-st-from: \"./dist/src/components/checkbox/Checkbox.st.css\";-st-default:Checkbox;}\n.root Checkbox{}\n:import {-st-from: \"./dist/src/components/captcha/Captcha.st.css\";-st-default:Captcha;}\n.root Captcha{}\n:import {-st-from: \"./dist/src/components/button-next/button-next.st.css\";-st-default:ButtonNext;}\n.root ButtonNext{}\n:import {-st-from: \"./dist/src/components/avatar/avatar.st.css\";-st-default:Avatar;}\n.root Avatar{}\n:import {-st-from: \"./dist/src/components/autocomplete/Autocomplete.st.css\";-st-default:Autocomplete;}\n.root Autocomplete{}\n:import {-st-from: \"./dist/src/components/address-input/AddressInput.st.css\";-st-default:AddressInput;}\n.root AddressInput{}\n:import {-st-from: \"./dist/src/components/popover/Popover.st.css\";-st-named: arrow as Popover_arrow, withArrow as Popover_withArrow, popoverContent as Popover_popoverContent;}\n.root .Popover_arrow {}\n.root .Popover_withArrow {}\n.root .Popover_popoverContent {}"
    },
    "/wix-ui-santa/src/components/BarChart/BarChart.st.css": {
      "metadata": {
        "namespace": "barchart1810838788",
        "depth": 1
      },
      "content": ":vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.BarChart';\n\n    /* @type COLOR */\n    color1: #308ddd;\n    /* @type COLOR */\n    hover1: #3899ec;\n    /* @type COLOR */\n    color2: #20455e;\n    /* @type COLOR */\n    hover2: #275473;\n    /* @type COLOR */\n    color3: #577083;\n    /* @type COLOR */\n    hover3: #7a92a5;\n    /* @type COLOR */\n    color4: #61ad5a;\n    /* @type COLOR */\n    hover4: #60bc57;\n    /* @type COLOR */\n    color5: #fdb10c;\n    /* @type COLOR */\n    hover5: #fac249;\n    /* @type COLOR */\n    color6: #d6453d;\n    /* @type COLOR */\n    hover6: #f66;\n    /* @type COLOR_ALPHA */\n    backgroundColor: color_18;\n}\n\n.root {\n    position: relative;\n    width: 100%;\n    height: 100%;\n\n    background: value(backgroundColor);\n}\n\n.rootContainer {\n    display: flex;\n\n    height: 100%;\n}\n\n.barItem {\n    -st-states: colorIndex(number);\n\n    position: relative;\n\n    min-width: 10px;\n    margin: 0 auto;\n    padding: 0 10px;\n\n    flex-grow: 0;\n}\n\n.barItem:colorIndex(0) {\n    background-color: value(color1);\n}\n\n.barItem:colorIndex(0):hover {\n    background-color: value(hover1);\n}\n\n.barItem:colorIndex(1) {\n    background-color: value(color2);\n}\n\n.barItem:colorIndex(1):hover {\n    background-color: value(hover2);\n}\n\n.barItem:colorIndex(2) {\n    background-color: value(color3);\n}\n\n.barItem:colorIndex(2):hover {\n    background-color: value(hover3);\n}\n\n.barItem:colorIndex(3) {\n    background-color: value(color4);\n}\n\n.barItem:colorIndex(3):hover {\n    background-color: value(hover4);\n}\n\n.barItem:colorIndex(4) {\n    background-color: value(color5);\n}\n\n.barItem:colorIndex(4):hover {\n    background-color: value(hover5);\n}\n\n.barItem:colorIndex(5) {\n    background-color: value(color6);\n}\n\n.barItem:colorIndex(5):hover {\n    background-color: value(hover6);\n}\n\n.barItemText {\n    font-size: 20px;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n\n    max-width: 100%;\n\n    transform: translate(-50%, -50%);\n\n    color: #fff;\n}\n\n.barItemTitle {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n\n    overflow: hidden;\n\n    max-width: 100%;\n    margin: 0 5px;\n\n    transform: translate(-50%, calc(100% + 12px));\n    text-transform: uppercase;\n    text-overflow: ellipsis;\n    pointer-events: none;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/horizontal-menu/item/styles/HorizontalMenuItem.st.css": {
      "metadata": {
        "namespace": "horizontalmenuitem2191703659",
        "depth": 1
      },
      "content": "@keyframes expandSubmenu {\n  0% {\n    transform: translateY(-34%);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\n.root {\n  -archetype: paintBox;\n  -st-states: isHovered, isCurrentPage;\n\n  box-sizing: border-box;\n\n  display: block;\n\n  transition: inherit;\n}\n\n.root:not([href]) {\n  cursor: default !important;\n}\n\n.root:isHovered,\n.root:isCurrentPage,\n.root:isHovered::label,\n.root:isCurrentPage::label {\n  transition: all 0.08s cubic-bezier(0, 0, 1, 1);\n}\n\n.positionBox {\n  position: absolute;\n  z-index: 47;\n  overflow: hidden;\n  transition: opacity 0.08s cubic-bezier(0, 0, 1, 1);\n}\n\n.opened {}\n.collapsed {}\n.expanded {}\n\n.positionBox.collapsed {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.positionBox.opened {\n  transition: opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1);\n}\n\n.positionBox.expanded {\n  overflow: visible;\n}\n\n.positionBox > div {\n  transition: border-color 0.08s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.08s cubic-bezier(0.25, 1, 0.5, 1);\n}\n\n.positionBox:not(.expanded) > div {\n  border-color: transparent;\n  box-shadow: 0 0 transparent;\n}\n\n.positionBox.opened > div {\n  animation-name: expandSubmenu;\n  animation-duration: 0.3s;\n  animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);\n  transition: border-color 0.08s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.08s cubic-bezier(0.25, 1, 0.5, 1);\n}\n\n.container {\n  -archetype: box;\n  display: flex;\n  height: 100%;\n  align-items: center;\n}\n\n.label {\n  -archetype: text;\n  -controller-part-type: LayoutChildDisplayDropdown;\n  white-space: nowrap;\n  transition: inherit;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/horizontal-menu/item/styles/HorizontalMenuSubItem.st.css": {
      "metadata": {
        "namespace": "horizontalmenusubitem3868523538",
        "depth": 1
      },
      "content": "@keyframes expandLeftTranslate {\n  0% {\n    transform: translateX(-34%);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes expandRightTranslate {\n  0% {\n    transform: translateX(34%);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n.root {\n  -archetype: paintBox;\n  -st-states: isHovered, isCurrentPage;\n\n  box-sizing: border-box;\n\n  display: inline-block;\n  width: 100%;\n\n  transition: inherit;\n}\n\n.root:not([href]) {\n  cursor: default !important;\n}\n\n.root:isHovered,\n.root:isCurrentPage,\n.root:isHovered::label,\n.root:isCurrentPage::label {\n  transition: all 0.08s cubic-bezier(0, 0, 1, 1);\n}\n\n.positionBox {\n  position: absolute;\n  z-index: 47;\n}\n\n.opened {}\n.collapsed {}\n.expanded {}\n\n.expand-left {}\n\n.expand-right {}\n\n.positionBox.collapsed {\n  opacity: 0;\n  overflow: hidden;\n  pointer-events: none;\n  transition: opacity 0.08s cubic-bezier(0, 0, 1, 1);\n}\n\n.positionBox.opened {\n  transition: opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1);\n}\n\n.positionBox > div {\n  transition: border-color 0.08s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.08s cubic-bezier(0.25, 1, 0.5, 1);\n}\n\n.positionBox:not(.expanded) > div {\n  border-color: transparent;\n  box-shadow: 0 0 transparent;\n}\n\n.positionBox.opened > div {\n  transition: border-color 0.08s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.08s cubic-bezier(0.25, 1, 0.5, 1);\n}\n\n.positionBox.opened.expand-left > div {\n  animation-name: expandLeftTranslate;\n  animation-duration: 0.3s;\n  animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);\n}\n\n.positionBox.opened.expand-right > div {\n  animation-name: expandRightTranslate;\n  animation-duration: 0.3s;\n  animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);\n}\n\n.container {\n  -archetype: box;\n  display: flex;\n}\n\n.label {\n  -archetype: text;\n  -controller-part-type: LayoutChildDisplayDropdown;\n  overflow-wrap: break-word;\n  text-overflow: clip;\n  white-space: normal;\n  word-wrap: break-word;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/horizontal-menu/item/styles/HorizontalMenuHeadingItem.st.css": {
      "metadata": {
        "namespace": "horizontalmenuheadingitem589696139",
        "depth": 1
      },
      "content": ".root {\n  -archetype: paintBox;\n  -st-states: isHovered, isCurrentPage;\n\n  box-sizing: border-box;\n\n  display: inline-block;\n  width: 100%;\n\n  transition: inherit;\n}\n\n.root:not([href]) {\n  cursor: default !important;\n}\n\n.root:isHovered,\n.root:isCurrentPage,\n.root:isHovered::label,\n.root:isCurrentPage::label {\n  transition: all 0.08s cubic-bezier(0, 0, 1, 1);\n}\n\n.container {\n  -archetype: box;\n  display: flex;\n}\n\n.label {\n  -archetype: text;\n  -controller-part-type: LayoutChildDisplayDropdown;\n  color: black;\n  overflow-wrap: break-word;\n  text-overflow: clip;\n  white-space: normal;\n  word-wrap: break-word;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/horizontal-menu/scroll-button/ScrollButton.st.css": {
      "metadata": {
        "namespace": "scrollbutton3613656053",
        "depth": 1
      },
      "content": ".root {\n  -archetype: paddingBox;\n  -st-states: side(enum(left, right)), isHidden;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  pointer-events: auto;\n  overflow: hidden;\n}\n\n.root:hover {\n  transition: all 0.08s cubic-bezier(0, 0, 1, 1);\n}\n\n.root:side(left) {\n  transform: scaleX(-1);\n  -webkit-transform: scaleX(-1);\n}\n\n.root:side(right) {}\n\n.root:isHidden {\n  visibility: hidden;\n  pointer-events: none;\n}\n\n.icon {\n  -archetype: icon;\n  -controller-part-type: LayoutChildDisplayDropdown;\n  min-width: 1px;\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.icon > svg {\n  width: inherit;\n  height: inherit;\n}\n"
    },
    "/wix-ui-santa/src/components/SignatureInput/SignatureInput.st.css": {
      "metadata": {
        "namespace": "signatureinput851956241",
        "depth": 3
      },
      "content": "/* prettier-ignore */\n:vars {\n  /* @type SKINS */\n  skins: 'wixui.skins.SignatureInput';\n\n  /* @type COLOR_ALPHA */\n  padBackground: color_8;\n  /* @type COLOR_ALPHA */\n  padBackgroundHover: color_8;\n  /* @type COLOR_ALPHA */\n  padBackgroundFocus: color_8;\n  /* @type COLOR_ALPHA */\n  padBackgroundError: color_8;\n  /* @type COLOR_ALPHA */\n  padBackgroundDisabled: color_8;\n\n  /* @type COLOR_ALPHA */\n  padLineColor: color_2;\n  /* @type COLOR_ALPHA */\n  padLineColorHover: color_2;\n  /* @type COLOR_ALPHA */\n  padLineColorFocus: color_2;\n  /* @type COLOR_ALPHA */\n  padLineColorError: color_2;\n  /* @type COLOR_ALPHA */\n  padLineColorDisabled: color_2;\n\n  /* @type BORDER_SIZE */\n  padLineWidth: 3px;\n  /* @type BORDER_SIZE */\n  padLineWidthHover: 3px;\n  /* @type BORDER_SIZE */\n  padLineWidthFocus: 3px;\n  /* @type BORDER_SIZE */\n  padLineWidthError: 3px;\n  /* @type BORDER_SIZE */\n  padLineWidthDisabled: 3px;\n\n  /* @type COLOR */\n  signatureColor: color_2;\n\n  /* @type TEXT_SIZE */\n  signatureSize: 1px;\n\n  /* @type COLOR_ALPHA */\n  padBorderColor: color_2;\n  /* @type COLOR_ALPHA */\n  padBorderColorHover: color_2;\n  /* @type COLOR_ALPHA */\n  padBorderColorFocus: color_2;\n  /* @type COLOR_ALPHA */\n  padBorderColorError: color_2;\n  /* @type COLOR_ALPHA */\n  padBorderColorDisabled: color_2;\n\n  /* @type BORDER_SIZES */\n  padBorderWidth: 1px;\n  /* @type BORDER_SIZES */\n  padBorderWidthHover: 1px;\n  /* @type BORDER_SIZES */\n  padBorderWidthFocus: 1px;\n  /* @type BORDER_SIZES */\n  padBorderWidthError: 1px;\n  /* @type BORDER_SIZES */\n  padBorderWidthDisabled: 1px;\n\n  /* @type BORDER_RADIUS */\n  padBorderRadius: 12px;\n\n  /* @type BOX_SHADOW */\n  padBoxShadow: none;\n\n  /* @type TEXT_COLOR */\n  titleColor: color_2;\n  /* @type TEXT_COLOR */\n  titleColorDisabled: color_2;\n\n  /* @type TEXT_COLOR */\n  titleAsteriskColor: color_2;\n  /* @type TEXT_COLOR */\n  titleAsteriskColorDisabled: color_2;\n\n  /* @type FONT */\n  titleFont: font_1;\n  /* @type FONT */\n  titleFontDisabled: font_1;\n\n  /* @type TEXT_COLOR */\n  clearButtonColor: color_14;\n  /* @type TEXT_COLOR */\n  clearButtonColorFocus: color_5;\n  /* @type TEXT_COLOR */\n  clearButtonColorDisabled: color_14;\n\n  /* @type FONT */\n  clearButtonFont: font_9;\n  /* @type FONT */\n  clearButtonFontDisabled: font_9;\n}\n\n.root {\n  -st-states: direction(enum(rtl, ltr)), preview-mode(string), required, error,\n    disabled, focus;\n}\n\n.root {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  height: 100%;\n  width: 100%;\n}\n\n.root * {\n  box-sizing: border-box;\n}\n\n.root:direction(rtl) {\n  direction: rtl;\n}\n\n.root:direction(ltr) {\n  direction: ltr;\n}\n\n.title {\n  margin-top: 0;\n  color: value(titleColor);\n  font: value(titleFont);\n}\n\n.root:disabled .title,\n.root:preview-mode(disabled) .title {\n  color: value(titleColorDisabled);\n  font: value(titleFontDisabled);\n}\n\n.root:required .title::after {\n  content: ' *';\n  color: value(titleAsteriskColor);\n}\n\n.root:required:disabled .title::after,\n.root:required:preview-mode(disabled) .title::after {\n  color: value(titleAsteriskColorDisabled);\n}\n\n.padContainer {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n  position: relative;\n  width: 100%;\n  background: value(padBackground);\n  border-color: value(padBorderColor);\n  border-width: value(padBorderWidth);\n  border-style: solid;\n  box-shadow: value(padBoxShadow);\n}\n\n.padContainer,\n.pad {\n  border-radius: value(padBorderRadius);\n}\n\n.pad {\n  width: 100%;\n}\n\n.root .padContainer:hover,\n.root:preview-mode(hover) .padContainer {\n  border-color: value(padBorderColorHover);\n  border-width: value(padBorderWidthHover);\n  background: value(padBackgroundHover);\n}\n\n.root:focus .padContainer,\n.root:preview-mode(focus) .padContainer {\n  border-color: value(padBorderColorFocus);\n  border-width: value(padBorderWidthFocus);\n  background: value(padBackgroundFocus);\n}\n\n.root:error .padContainer,\n.root:preview-mode(error) .padContainer {\n  border-color: value(padBorderColorError);\n  border-width: value(padBorderWidthError);\n  background: value(padBackgroundError);\n}\n\n.root:disabled .padContainer,\n.root:preview-mode(disabled) .padContainer {\n  border-color: value(padBorderColorDisabled);\n  border-width: value(padBorderWidthDisabled);\n  background: value(padBackgroundDisabled);\n}\n\n.padContainer::after {\n  content: '';\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  right: 20px;\n  border-top-style: solid;\n  border-top-width: value(padLineWidth);\n  border-color: value(padLineColor);\n  pointer-events: none;\n}\n\n.root .padContainer:hover::after,\n.root:preview-mode(hover) .padContainer::after {\n  border-top-width: value(padLineWidthHover);\n  border-color: value(padLineColorHover);\n}\n\n.root:focus .padContainer::after,\n.root:preview-mode(focus) .padContainer::after {\n  border-top-width: value(padLineWidthFocus);\n  border-color: value(padLineColorFocus);\n}\n\n.root:error .padContainer::after,\n.root:preview-mode(error) .padContainer::after {\n  border-top-width: value(padLineWidthError);\n  border-color: value(padLineColorError);\n}\n\n.root:disabled .padContainer::after,\n.root:preview-mode(disabled) .padContainer::after {\n  border-top-width: value(padLineWidthDisabled);\n  border-color: value(padLineColorDisabled);\n}\n\n.clearButton {\n  display: inline-block;\n  margin-top: 8px;\n  touch-action: manipulation;\n  align-self: flex-end;\n  font: value(clearButtonFont);\n  color: value(clearButtonColor);\n}\n\n.clearButton:focus,\n.root:preview-mode(focus) .clearButton {\n  font: value(clearButtonFont);\n  color: value(clearButtonColorFocus);\n}\n\n.root:disabled .clearButton,\n.root:preview-mode(disabled) .clearButton {\n  font: value(clearButtonFontDisabled);\n  color: value(clearButtonColorDisabled);\n}\n\n/*\n * The following variables are used only in javascript to set the\n * canvas drawing color and width. The variables have to be used in\n * at least one class in order to appear in the custom design panel\n * even if the class is not used\n*/\n.unused {\n  stroke: value(signatureColor);\n  stroke-width: value(signatureSize);\n}\n"
    },
    "/wix-ui-santa/src/components/SelectionTagsList/SelectionTagsList.st.css": {
      "metadata": {
        "namespace": "selectiontagslist4181853147",
        "depth": 7
      },
      "content": ":import {\n  -st-from: 'wix-ui-core/index.st.css';\n  -st-named: TagsList, Tag;\n}\n\n/**\n * The component's design panel is auto generated according to variables stated in :vars section\n * For available variable types see https://github.com/wix-private/santa/wiki/Skins#2-using-skin-parameters\n * For advanced styling of the design panel see https://github.com/wix-private/santa-editor/blob/master/santa-editor/conf/data/advancedStyleSkinsStaticConfig.json\n * For setting the custom design panel title see https://github.com/wix-private/santa-editor/blob/master/santa-editor/packages/addPanelData/src/main/designData/componentsLiveSections.js\n * For setting the custom desgin panel help id see https://github.com/wix-private/santa-editor/blob/master/santa-editor/packages/helpIds/src/main/constants/customizeDesign.js\n * For setting the desgin panel help id see https://github.com/wix-private/santa-editor/blob/master/santa-editor/packages/helpIds/src/main/constants/design.js\n */\n:vars {\n  /**\n  * Currently needed for skin based component (using the editor's custom design panel)\n  * The SKINS var is used to identify which variables are relevant for each skin name, you can use values delimited by `,`\n  * To use same variables for multiple skins.\n  */\n  /* @type SKINS */\n  skins: 'wixui.skins.SelectionTagsList';\n\n  /* @type BG_COLOR_ALPHA */\n  bg: color_8;\n  /* @type BG_COLOR_ALPHA */\n  bg_h: color_8;\n  /* @type BG_COLOR_ALPHA */\n  bg_e: color_8;\n  /* @type BG_COLOR_ALPHA */\n  bg_d: color_8;\n  /* @type BG_COLOR_ALPHA */\n  bg_s: color_8;\n\n  /* @type TEXT_COLOR */\n  txt: color_1;\n  /* @type TEXT_COLOR */\n  txt_h: color_1;\n  /* @type TEXT_COLOR */\n  txt_e: color_1;\n  /* @type TEXT_COLOR */\n  txt_d: color_1;\n  /* @type TEXT_COLOR */\n  txt_s: color_1;\n\n  /* @type BORDER_SIZE */\n  brw: 0;\n\n  /* @type BORDER_COLOR_ALPHA */\n  brd: color_8;\n  /* @type BORDER_COLOR_ALPHA */\n  brd_h: color_8;\n  /* @type BORDER_COLOR_ALPHA */\n  brd_e: color_33;\n  /* @type BORDER_COLOR_ALPHA */\n  brd_d: color_8;\n  /* @type BORDER_COLOR_ALPHA */\n  brd_s: color_8;\n\n  /* @type BORDER_RADIUS */\n  rd: 0;\n\n  /* @type BOX_SHADOW */\n  shd: 0 0 0 rgba(0, 0, 0, 0);\n\n  /* @type FONT */\n  fnt: font_9;\n\n  /* @type SIZE */\n  desktopHorizontalPadding: 0;\n\n  /* @type SIZE */\n  desktopVerticalPadding: 0;\n\n  /* @type SIZE */\n  desktopVerticalMargin: 0;\n\n  /* @type SIZE */\n  desktopHorizontalMargin: 0;\n\n  /* @type SIZE */\n  mobileHorizontalPadding: 0;\n\n  /* @type SIZE */\n  mobileVerticalPadding: 0;\n\n  /* @type SIZE */\n  mobileVerticalMargin: 0;\n\n  /* @type SIZE */\n  mobileHorizontalMargin: 0;\n}\n\n.root {\n  -st-states:\n    mobile,\n    previewState(enum(error, selected, disabled, mobile, hover)),\n    tagsAlignment(enum(left, center, right)),\n    tagsDirection(enum(rtl, ltr));\n}\n\n.root:tagsAlignment(left) .tagList {\n  justify-content: flex-start;\n}\n\n.root:tagsAlignment(center) .tagList {\n  justify-content: center;\n}\n\n.root:tagsAlignment(right) .tagList {\n  justify-content: flex-end;\n}\n\n.root:tagsDirection(rtl) .tagList {\n  direction: rtl;\n}\n\n.root:tagsDirection(rtl):tagsAlignment(left) .tagList {\n  justify-content: flex-end;\n}\n\n.root:tagsDirection(rtl):tagsAlignment(right) .tagList {\n  justify-content: flex-start;\n}\n\n.root:mobile .tagList {\n  margin: calc(-0.5 * value(mobileVerticalMargin)) calc(-0.5 * value(mobileHorizontalMargin));\n}\n\n.tagList {\n  margin: calc(-0.5 * value(desktopVerticalMargin)) calc(-0.5 * value(desktopHorizontalMargin));\n  min-width: 50px;\n}\n\n.tag {\n  -st-states: error, selected, disabled, mobile;\n  margin: calc(0.5 * value(desktopVerticalMargin)) calc(0.5 * value(desktopHorizontalMargin));\n  padding: value(desktopVerticalPadding) value(desktopHorizontalPadding);\n  box-shadow: value(shd);\n  font: value(fnt);\n  color: value(txt);\n  background-color: value(bg);\n  border-width: value(brw);\n  border-color: value(brd);\n  border-style: solid;\n  border-radius: value(rd);\n}\n\n.tag:mobile {\n  margin: calc(0.5 * value(mobileVerticalMargin)) calc(0.5 * value(mobileHorizontalMargin));\n  padding: value(mobileVerticalPadding) value(mobileHorizontalPadding);\n}\n\n.tag:error,\n.tag:error:hover,\n.root:previewState(error) .tag {\n  color: value(txt_e);\n  background-color: value(bg_e);\n  border-color: value(brd_e);\n}\n\n.tag:hover:not(:disabled),\n.tag:error:hover,\n.root:previewState(hover) .tag {\n  color: value(txt_h);\n  background-color: value(bg_h);\n  border-color: value(brd_h);\n  cursor: pointer;\n}\n\n.tag:selected,\n.tag:hover:selected,\n.root:previewState(selected) .tag {\n  color: value(txt_s);\n  background-color: value(bg_s);\n  border-color: value(brd_s);\n}\n\n.tag:disabled,\n.root:previewState(disabled) .tag {\n  color: value(txt_d);\n  background-color: value(bg_d);\n  border-color: value(brd_d);\n  pointer-events: none;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/input/Input.st.css": {
      "metadata": {
        "namespace": "input2809619320",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/input/Input.st.css\" */\n.root {\n  -st-states: disabled, error, focus;\n  position: relative;\n}\n\n.nativeInput {}\n"
    },
    "/wix-ui-santa/src/components/Tags/Tags.st.css": {
      "metadata": {
        "namespace": "tags2778230083",
        "depth": 1
      },
      "content": ":vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.Tags'; \n\n    /* @type COLOR */\n    tagBackgroundColor: color_8;\n\n    /* @type BORDER_COLOR_ALPHA */\n    tagBorderColor: color_3;\n\n    /* @type BORDER_SIZE */\n    tagBorderSize: 3;\n\n    /* @type BOX_SHADOW */\n    tagBoxShadow: 0 1px 4px rgba(0, 0, 0, .6);\n\n    /* @type FONT */\n    tagFont: font_4;\n\n    /* @type COLOR */\n    tagFontColor: color_3;\n\n    /* @type COLOR */\n    tagBackgroundColorHover: color_6;\n\n    /* @type COLOR */\n    tagFontColorHover: color_1;\n\n    /* @type BORDER_RADIUS */\n    tagBorderRadius: 100px;\n}\n\n.root {\n    -st-states: alignment(enum(left, center, right));\n}\n\n.tagsContainer {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n.root:alignment(left) .tagsContainer {\n    justify-content: flex-start;\n}\n\n.root:alignment(center) .tagsContainer {\n    justify-content: center;\n}\n\n.root:alignment(right) .tagsContainer {\n    justify-content: flex-end;\n}\n\n.tag {\n    box-shadow: value(tagBoxShadow);\n    border: value(tagBorderSize) solid value(tagBorderColor);\n    border-radius: value(tagBorderRadius);\n    cursor: pointer;\n    background-color: value(tagBackgroundColor);\n    font: value(tagFont);\n    color: value(tagFontColor);\n    text-decoration: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.tag:hover {\n    color: value(tagFontColorHover);\n    background-color: value(tagBackgroundColorHover);\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/video/Video.st.css": {
      "metadata": {
        "namespace": "video3610220499",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/video/Video.st.css\" */\n.root {\n    position: relative;\n}\n\n.playerContainer {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    background-color: #000;\n}\n\n.responsiveMode {\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n}\n\n.playerContainer iframe {\n    height: 100%;\n    width: 100%;\n    visibility: visible;\n}\n\n.cover {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: #000 50% 50% no-repeat;\n    background-size: cover;\n    cursor: pointer;\n}\n\n.cover.transparentOverlay {\n    background: transparent;\n}\n\n.overlay {\n    display: flex;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n}\n\n.title {\n    margin: 0 15px 15px;\n    text-align: center;\n}\n\n.poster {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n}\n"
    },
    "/wix-ui-santa/src/components/ProgressBar/ProgressBar.st.css": {
      "metadata": {
        "namespace": "progressbar2672267335",
        "depth": 7
      },
      "content": ":import {\n    -st-from: \"wix-ui-core/index.st.css\";\n    -st-named: LinearProgressBar;\n}\n\n:import {\n    -st-from: \"santa-skin-utils/dist/cjs/runtime/functions.js\";\n    -st-named: getInnerBorderRadius;\n}\n\n:vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.ProgressBar'; \n\n    /* @type COLOR_ALPHA */\n    barBackgroundColor: color_8;\n\n    /* @type COLOR_ALPHA */\n    barForegroundColor: color_6;\n\n    /* @type BORDER_RADIUS */\n    borderRadius: 0px;\n\n    /* @type BOX_SHADOW */\n    boxShadow: 0 1px 4px rgba(0, 0, 0, .6);\n\n    /* @type BORDER_SIZE */\n    borderSize: 0px;\n\n    /* @type COLOR_ALPHA */\n    borderColor: color_5;\n\n}\n\n.root {\n    -st-extends: LinearProgressBar;\n    -st-states: direction(enum(rtl, ltr)), viewMode(string);\n    z-index: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.root::barContainer {\n    border-radius: value(borderRadius);\n    height: 100%;\n    width: 100%;\n    box-shadow: value(boxShadow);\n    border-width: value(borderSize); \n    border-color: value(borderColor);\n    box-sizing: border-box;\n    overflow: hidden;\n    border-style: solid;\n}\n\n.root:direction(rtl) {\n    direction: rtl;\n}\n\n.root:direction(ltr) {\n    direction: ltr;\n}\n\n.root::barBackground {\n    background: value(barBackgroundColor);\n    border-radius: getInnerBorderRadius(value(borderRadius), value(borderSize));\n    height: 100%;\n    width: 100%;\n}\n\n.root::barForeground {\n    background: value(barForegroundColor);\n    height: 100%;   \n    border-radius: getInnerBorderRadius(value(borderRadius), value(borderSize));\n    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition-duration: 300ms;\n}\n\n.root:viewMode(editor)::barForeground {\n    transition: initial;\n}\n"
    },
    "/wix-ui-santa/src/components/ImageX/ImageX.st.css": {
      "metadata": {
        "namespace": "imagex3474482427",
        "depth": 7
      },
      "content": "/* REPLACE-ME: Extend the core component (e.g Label) to fit products definition for styling. */\n:import {\n  -st-from: 'wix-ui-core/index.st.css';\n  -st-named: Label;\n}\n\n/**\n * The component's design panel is auto generated according to variables stated in :vars section\n * For available variable types see https://github.com/wix-private/santa/wiki/Skins#2-using-skin-parameters\n * For advanced styling of the design panel see https://github.com/wix-private/santa-editor/blob/master/santa-editor/conf/data/advancedStyleSkinsStaticConfig.json\n * For setting the custom design panel title see https://github.com/wix-private/santa-editor/blob/master/santa-editor/packages/addPanelData/src/main/designData/componentsLiveSections.js\n * For setting the custom desgin panel help id see https://github.com/wix-private/santa-editor/blob/master/santa-editor/packages/helpIds/src/main/constants/customizeDesign.js\n * For setting the desgin panel help id see https://github.com/wix-private/santa-editor/blob/master/santa-editor/packages/helpIds/src/main/constants/design.js\n * For using formatter see https://github.com/wix-private/wix-ui-santa/wiki/FAQ#i-cant-import-formatter-into-my-stcss-file-from-wix-ui-santa\n */\n\n:vars {\n  /**\n  * Currently needed for skin based component (using the editor's custom design panel)\n  * The SKINS var is used to identify which variables are relevant for each skin name, you can use values delimited by `,`\n  * To use same variables for multiple skins.\n  */\n  /* @type SKINS */\n  skins: 'wixui.skins.ImageX';\n\n  /* @type COLOR_ALPHA */\n  backgroundColor: color_8;\n  /* @type COLOR_ALPHA */\n  borderColor: color_8;\n  /* @type BORDER_SIZE */\n  borderWidth: 0px;\n  /* @type BORDER_RADIUS */\n  cornerRadius: 0px;\n  /* @type BOX_SHADOW */\n  boxShadow: none;\n\n  /* @type ALPHA */\n  mediaOpacity: 1;\n}\n\n.root {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n\n  background-color: value(backgroundColor);\n  border-color: value(borderColor);\n  border-width: value(borderWidth);\n  border-style: solid;\n  border-radius: value(cornerRadius);\n  box-shadow: value(boxShadow);\n}\n\n:global(wix-image) {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: value(mediaOpacity);\n}\n"
    },
    "/wix-ui-santa/src/components/VideoPlayer/VideoPlayer.st.css": {
      "metadata": {
        "namespace": "videoplayer2725432193",
        "depth": 7
      },
      "content": ":import {\n    -st-from: \"wix-ui-core/index.st.css\";\n    -st-named: Video\n}\n\n:import {\n    -st-from: \"santa-skin-utils/dist/cjs/runtime/functions.js\";\n    -st-named: increaseAlphaChannel;\n}\n\n:vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.VideoPlayer';\n\n    /* @type COLOR_ALPHA */\n    backgroundColor: color_10;\n\n    /* @type FONT */\n    font: font_8;\n\n    /* @type COLOR */\n    fontColor: color_2;\n\n    /* @type BORDER_COLOR_ALPHA */\n    borderColor: color_2;\n\n    /* @type BORDER_SIZE */\n    borderSize: 0;\n\n    /* @type BOX_SHADOW */\n    boxShadow: none;\n\n    /* @type TEXT_SIZE */\n    textSizeScale: 1px;\n\n    /* @type BORDER_SIZE */\n    playButtonSize: 50px;\n\n    /* @type BORDER_SIZE */\n    playButtonMobileSize: 30px;\n}\n\n.root {\n    -st-extends: Video;\n    -st-states: isMobileView, isDesktopView, isTitleExists;\n    box-shadow: value(boxShadow);\n    border: value(borderSize) solid value(borderColor);\n    margin-top: calc(-1 * value(borderSize));\n    margin-left: calc(-1 * value(borderSize));\n    position: absolute;\n    top: 0;\n}\n\n/* title */\n\n.root::title {\n    font: value(font);\n    color: value(fontColor);\n    margin: 0 0 15px;\n    padding: 0 10%;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    max-height: 2.8em;\n}\n\n.root:isMobileView::title {\n    font-size: calc(18 * value(textSizeScale));\n    margin: 0 0 10px;\n}\n\n/* overlay */\n\n.root::overlay {\n    background-color: value(backgroundColor);\n    transition: background-color .2s ease;\n}\n\n.root::overlay:hover {\n  background-color: increaseAlphaChannel(value(backgroundColor), 10);\n}\n\n/* play button */\n\n.root .playButton {\n    display: block;\n    width: value(playButtonSize);\n    height: value(playButtonSize);\n    padding: 0;\n    border: 0;\n    background: transparent;\n    box-sizing: border-box;\n    cursor: pointer;\n    transition: opacity .2s ease;\n}\n\n.root .playButton:hover {\n    opacity: .8;\n}\n\n.root:isMobileView .playButton {\n    width: value(playButtonMobileSize);\n    height: value(playButtonMobileSize);\n}\n\n.playButton circle {\n    stroke: value(fontColor);\n}\n\n.playButton path {\n    fill: value(fontColor);\n}\n"
    },
    "/wix-ui-santa/src/components/StylableHorizontalMenu/horizontal-menu/scroll-controls/ScrollControls.st.css": {
      "metadata": {
        "namespace": "scrollcontrols3995638425",
        "depth": 1
      },
      "content": ".root {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding-top: inherit;\n  padding-bottom: inherit;\n  border: inherit;\n  border-color: transparent;\n\n  display: flex;\n  justify-content: space-between;\n\n  pointer-events: none;\n\n  border-radius: inherit;\n}"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/VolumeBars/VolumeBars.st.css": {
      "metadata": {
        "namespace": "volumebars1154848801",
        "depth": 1
      },
      "content": ".container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n}\n.container .barItemContainer {\n  display: inline;\n}\n\n.bar {\n  -st-states: on;\n  width: 4px;\n  height: 10px;\n  background-color: white;\n  opacity: 0.3;\n  margin: 0 1px;\n}\n.bar:on {\n  opacity: 1;\n}\n"
    },
    "/wix-ui-santa/src/components/Pagination/Pagination.st.css": {
      "metadata": {
        "namespace": "pagination4218733356",
        "depth": 7
      },
      "content": ":import {\n    -st-from: \"wix-ui-core/index.st.css\";\n    -st-named: Pagination\n}\n\n:vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.Pagination'; \n\n        /* PAGES MODE */\n    /* @type COLOR_ALPHA */\n    selectedPageBG: color_22;\n    /* @type BORDER_COLOR_ALPHA */\n    selectedPageBorderColor: color_26;\n    /* @type BORDER_SIZE */\n    selectedPageBorderWidth: 0;\n    /* @type TEXT_COLOR */\n    selectedPageTextColor: color_25;\n    /* @type TEXT_COLOR */\n    pageNumbersTextColor: color_6;\n\n\n        /* INPUT MODE */\n    /* @type COLOR_ALPHA */\n    pageInputBG: color_23;\n    /* @type BORDER_COLOR_ALPHA */\n    pageInputBorderColor: color_27;\n    /* @type BORDER_SIZE */\n    pageInputBorderWidth: 0;\n    /* @type TEXT_COLOR */\n    pageInputTextColor: color_26;\n    /* @type TEXT_COLOR */\n    totalPagesTextColor: color_7;\n    /* @type COLOR_ALPHA */\n    pageInputFocusBG: color_8;\n    /* @type BORDER_COLOR_ALPHA */\n    pageInputFocusBorderColor: color_38;\n    /* @type BORDER_SIZE */\n    pageInputFocusBorderWidth: 3;\n    /* @type COLOR_ALPHA */\n    pageInputErrorBG: color_2;\n    /* @type BORDER_COLOR_ALPHA */\n    pageInputErrorBorderColor: color_22;\n    /* @type BORDER_SIZE */\n    pageInputErrorBorderWidth: 3;\n\n\n        /* NAV BUTTONS GENERAL */\n    /* @type COLOR_ALPHA */\n    navButtonBG: transparent;\n    /* @type BORDER_SIZE */\n    navButtonBorderWidth: 3;\n    /* @type BORDER_COLOR_ALPHA */\n    navButtonBorderColor: color_32;\n    /* @type BORDER_SIZE */\n    navButtonDisabledBorderWidth: 3;\n    /* @type BORDER_COLOR_ALPHA */\n    navButtonDisabledBorderColor: color_43;\n    /* @type COLOR_ALPHA */\n    navButtonDisabledBG: color_27;\n\n\n        /* ICON NAV BUTTONS */\n    /* @type COLOR_ALPHA */\n    arrowsColor: color_32;\n    /* @type COLOR_ALPHA */\n    arrowsDisabledColor: color_37;\n\n        /* TEXT NAV BUTTONS */\n    /* @type TEXT_SIZE */\n    navButtonTextSize: 15px;\n    /* @type TEXT_COLOR */\n    navButtonTextColor: color_15;\n    /* @type TEXT_COLOR */\n    navButtonDisabledTextColor: color_11;\n\n        /* GENERAL */\n    /* @type FONT */\n    fnt: font_8;\n    /* @type BORDER_RADIUS */\n    bRadius: 100px;\n    /* @type BOX_SHADOW */\n    shadow: none;\n}\n\n.pageButtonRules {\n    min-width: 1em;\n    min-height: 1em;\n    line-height: 1em;\n    justify-content: center;\n    align-items: center;\n    padding: 0.5em 0.5em;\n    margin: 0.25em;\n}\n\n.root {\n    -st-extends: Pagination;\n    -st-states: paginationMode(enum(pages, input)), navButtonsType(enum(text, arrows)), navButtonsAmount(number);\n    align-items: stretch;\n    font: value(fnt);\n    box-sizing: border-box;\n}\n\n.root::pageButton {\n    -st-mixin: pageButtonRules;\n    position: relative;\n    color: value(pageNumbersTextColor);\n}\n\n.root::currentPage {\n    -st-mixin: pageButtonRules;\n    color: value(selectedPageTextColor);\n    background: value(selectedPageBG);\n    border-radius: value(bRadius);\n    border: value(selectedPageBorderWidth) solid value(selectedPageBorderColor);\n    box-shadow: value(shadow);\n    padding: calc(0.5em - value(selectedPageBorderWidth)) calc(0.5em - value(selectedPageBorderWidth));\n}\n\n.root:not(:disabled)::pageButton:hover::before {\n    background: value(selectedPageBG);\n    opacity: 0.2;\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    border-radius: value(bRadius);\n}\n\n.root:not(:disabled)::pageButton:hover {\n    opacity: 0.7;\n}\n\n.root:disabled::pageButton {\n    cursor: default;\n}\n\n.root::navButton {\n    min-width: 1em;\n    min-height: 1em;\n    padding: calc(0.75em - value(navButtonBorderWidth));\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: value(navButtonBorderWidth) solid value(navButtonBorderColor);\n    background: value(navButtonBG);\n    border-radius: value(bRadius);\n}\n\n.root::navButton:disabled, .root[data-preview=\"disabled\"]::navButton {\n    padding: calc(0.75em - value(navButtonDisabledBorderWidth));\n    border: value(navButtonDisabledBorderWidth) solid value(navButtonDisabledBorderColor);\n    background: value(navButtonDisabledBG);\n    cursor: default;\n}\n\n.root::navButton:disabled svg, .root[data-preview=\"disabled\"]::navButton svg {\n    fill: value(arrowsDisabledColor);\n}\n\n.root::navButton:hover:not(:disabled) {\n    opacity: 0.8;\n}\n\n.root::navButton svg {\n    width: 1em;\n    min-width: 16px;\n    height: 1em;\n    min-height: 16px;\n    fill: value(arrowsColor);\n}\n\n.root[dir=\"rtl\"]::navButton svg {\n    transform: scaleX(-1);\n}\n\n.root::navButton span {\n    font-size: value(navButtonTextSize);\n    color: value(navButtonTextColor);\n    line-height: 1em;\n}\n\n.root::navButton:disabled span, .root[data-preview=\"disabled\"]::navButton span {\n    color: value(navButtonDisabledTextColor);\n}\n\n.root::navButtonFirst {\n    margin-right: 1em;\n}\n\n.root[dir=\"rtl\"]::navButtonFirst {\n    margin-right: 0;\n    margin-left: 1em;\n}\n\n.root::navButtonPrevious {\n    margin-right: 1em;\n}\n\n.root[dir=\"rtl\"]::navButtonPrevious {\n    margin-right: 0;\n    margin-left: 1em;\n}\n\n.root::navButtonLast {\n    margin-left: 1em;\n}\n\n.root[dir=\"rtl\"]::navButtonLast {\n    margin-left: 0;\n    margin-right: 1em;\n}\n\n.root::navButtonNext {\n    margin-left: 1em;\n}\n\n.root[dir=\"rtl\"]::navButtonNext {\n    margin-left: 0;\n    margin-right: 1em;\n}\n\n.root::gap {\n    -st-mixin: pageButtonRules;\n    color: value(pageNumbersTextColor);\n}\n\n.root::pageStrip {\n    min-width: 3em;\n    overflow: visible;\n    align-self: center;\n}\n\n.root::pageStripInner {\n    flex-grow: 1;\n    flex-basis: auto;\n    justify-content: center;\n    overflow: visible;\n    align-items: center;\n}\n\n.root::pageStripTemplate {\n    overflow: hidden;\n}\n\n.root::pageForm {\n    flex-grow: 1;\n    flex-basis: auto;\n    justify-content: center;\n    align-items: stretch;\n}\n\n.root::slash {\n    width: 1em;\n    height: 1em;\n    flex-shrink: 0;\n    align-self: center;\n}\n\n.root::slash svg {\n    width: 1em;\n    height: 1em;\n}\n\n.root::slash svg > g {\n    stroke: value(totalPagesTextColor)\n}\n\n.root::pageInput {\n    min-width: 3.5em;\n    padding: calc(0.25em - value(pageInputBorderWidth)) calc(0.5ch - value(pageInputBorderWidth));\n    color: value(pageInputTextColor);\n    border-radius: value(bRadius);\n    border: value(pageInputBorderWidth) solid value(pageInputBorderColor);\n    text-align: center;\n    margin: 0 0.25em;\n    background: value(pageInputBG);\n    box-shadow: value(shadow);\n    font: inherit;\n    -moz-appearance: textfield;\n}\n\n.root::pageInput:hover {\n    opacity: 0.8;\n}\n\n.root::pageInput:focus, .root[data-preview=\"focus\"]::pageInput {\n    padding: calc(0.25em - value(pageInputFocusBorderWidth)) calc(0.5ch - value(pageInputFocusBorderWidth));\n    background: value(pageInputFocusBG);\n    border: value(pageInputFocusBorderWidth) solid value(pageInputFocusBorderColor);\n}\n\n.root::pageInput::-webkit-inner-spin-button, .root::pageInput::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n}\n\n.root::totalPages {\n    max-width: 4ch;\n    min-width: 1ch;\n    padding-left: 0.25em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: value(totalPagesTextColor);\n    align-self: center;\n}\n\n.root:error::pageInput, .root[data-preview=\"error\"]::pageInput {\n    padding: calc(0.25em - value(pageInputErrorBorderWidth)) calc(0.5ch - value(pageInputErrorBorderWidth));\n    background: value(pageInputErrorBG);\n    border: value(pageInputErrorBorderWidth) solid value(pageInputErrorBorderColor);\n}\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .root::totalPages {\n        max-width: 6ch;\n        min-width: 6ch;\n    }\n}"
    },
    "/wix-ui-santa/src/components/Captcha/Captcha.st.css": {
      "metadata": {
        "namespace": "captcha890886509",
        "depth": 7
      },
      "content": ":import {\n    -st-from: \"wix-ui-core/index.st.css\";\n    -st-named: Captcha;\n}\n\n:vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.Captcha'\n}\n\n.root {\n    -st-extends: Captcha\n}\n\n.root::captcha {\n    /* in order to fit mobile view we need rescale the size to fit the mobile size */\n    transform: scale(0.77);\n    transform-origin: top left;\n}\n"
    },
    "/wix-ui-santa/src/components/Slider/Slider.st.css": {
      "metadata": {
        "namespace": "slider3954033323",
        "depth": 7
      },
      "content": ":import {\n    -st-from: \"wix-ui-core/index.st.css\";\n    -st-named: Slider;\n}\n\n:vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.Slider'; \n\n    /* @type COLOR_ALPHA */\n    thumbBackground: color_25;\n    /* @type COLOR_ALPHA */\n    thumbBackgroundHover: color_23;\n    /* @type COLOR_ALPHA */\n    thumbBackgroundFocus: color_22;\n    /* @type COLOR_ALPHA */\n    thumbBackgroundDisabled: color_21;\n    /* @type BOX_SHADOW */\n    thumbBoxShadow: 0 1px 4px rgba(0, 0, 0, .6);\n\n    /* @type COLOR_ALPHA */\n    trackFill: color_22;\n    /* @type COLOR_ALPHA */\n    trackFillHover: color_23;\n    /* @type COLOR_ALPHA */\n    trackFillFocus: color_24;\n    /* @type COLOR_ALPHA */\n    trackFillDisabled: color_25;\n    /* @type BOX_SHADOW */\n    trackBoxShadow: 0 1px 4px rgba(0, 0, 0, .6);\n\n    /* @type COLOR_ALPHA */\n    trackBackground: color_26;\n    /* @type COLOR_ALPHA */\n    trackBackgroundHover: color_27;\n    /* @type COLOR_ALPHA */\n    trackBackgroundFocus: color_28;\n    /* @type COLOR_ALPHA */\n    trackBackgroundDisabled: color_29;\n\n    /* @type COLOR_ALPHA */\n    tooltipBackground: color_30;\n    /* @type TEXT_SIZE */\n    tooltipFontSize: 14;\n    /* @type FONT_FAMILY */\n    tooltipFontFamily: arial;\n    /* @type TEXT_COLOR */\n    tooltipFontColor: color_1;\n    /* @type BOX_SHADOW */\n    tooltipBoxShadow: initial;\n\n    /* @type COLOR_ALPHA */\n    tickMarkColor: color_4;\n\n    /* @type COLOR_ALPHA */\n    thumbBorderColor: color_22;\n    /* @type COLOR_ALPHA */\n    thumbBorderColorHover: color_23;\n    /* @type COLOR_ALPHA */\n    thumbBorderColorFocus: color_24;\n    /* @type COLOR_ALPHA */\n    thumbBorderColorDisabled: color_25;\n\n    /* @type BORDER_SIZE */\n    thumbBorderWidth: 4;\n    /* @type BORDER_SIZE */\n    thumbBorderWidthHover: 4;\n    /* @type BORDER_SIZE */\n    thumbBorderWidthFocus: 4;\n    /* @type BORDER_SIZE */\n    thumbBorderWidthDisabled: 4;\n    /* @type BORDER_RADIUS */\n    thumbBorderRadius: 8px;\n\n    /* @type COLOR_ALPHA */\n    trackBorderColor: color_28;\n    /* @type COLOR_ALPHA */\n    trackBorderColorHover: color_29;\n    /* @type COLOR_ALPHA */\n    trackBorderColorFocus: color_30;\n    /* @type COLOR_ALPHA */\n    trackBorderColorDisabled: color_31;\n\n    /* @type BORDER_SIZE */\n    trackBorderWidth: 7;\n    /* @type BORDER_SIZE */\n    trackBorderWidthHover: 6;\n    /* @type BORDER_SIZE */\n    trackBorderWidthFocus: 6;\n    /* @type BORDER_SIZE */\n    trackBorderWidthDisabled: 6;\n\n    /* @type BORDER_RADIUS */\n    tooltipBorderRadius: 2px;\n\n    /* @type BORDER_RADIUS */\n    trackBorderRadius: 8px;\n}\n\n.root {\n  -st-extends: Slider;\n  -st-states: preview-regular, preview-hover, preview-disabled, preview-focus;\n  z-index: 0;\n}\n\n.root::thumbShape {\n    background: value(thumbBackground);\n    border-color: value(thumbBorderColor);\n    border-width: value(thumbBorderWidth);\n    box-shadow: value(thumbBoxShadow);\n    border-style: solid;\n}\n\n.root::tick {\n  background: value(tickMarkColor);\n}\n\n.root::tooltip {\n  font-family: value(tooltipFontFamily);\n  font-size: value(tooltipFontSize);\n  color: value(tooltipFontColor);\n  background: value(tooltipBackground);\n  border-width: 0;\n  border-radius: value(tooltipBorderRadius);\n  box-shadow: value(tooltipBoxShadow);\n}\n\n.root::tooltip::before {\n  border-width: 0;\n}\n\n.root:orientation(horizontal)::tooltip:normalPosition::after {\n  border-color: value(tooltipBackground) transparent transparent transparent;\n}\n.root:orientation(horizontal)::tooltip:acrossPosition::after {\n  border-color: transparent transparent value(tooltipBackground) transparent;\n}\n.root:orientation(vertical)::tooltip:normalPosition::after {\n  border-color: transparent transparent transparent value(tooltipBackground);\n}\n.root:orientation(vertical)::tooltip:acrossPosition::after {\n  border-color: transparent value(tooltipBackground) transparent transparent;\n}\n\n.root:preview-hover::thumbShape, .root:hover::thumbShape {\n    background: value(thumbBackgroundHover);\n    border-color: value(thumbBorderColorHover);\n    border-width: value(thumbBorderWidthHover);\n}\n\n.root:preview-focus::thumbShape, .root:focus::thumbShape {\n    background: value(thumbBackgroundFocus);\n    border-color: value(thumbBorderColorFocus);\n    border-width: value(thumbBorderWidthFocus);\n}\n\n.root:preview-disabled::thumbShape, .root:disabled::thumbShape {\n    background: value(thumbBackgroundDisabled);\n    border-color: value(thumbBorderColorDisabled);\n    border-width: value(thumbBorderWidthDisabled);\n}\n\n.root::track {\n    background: value(trackBackground);\n    border-radius: value(trackBorderRadius);\n    border-color: value(trackBorderColor);\n    border-width: value(trackBorderWidth);\n    box-shadow: value(trackBoxShadow);\n}\n\n.root::trackFill {\n    background: value(trackFill);\n    border-radius: value(trackBorderRadius);\n}\n\n.root:orientation(horizontal):dir(ltr)::trackFill {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.root:orientation(horizontal):dir(rtl)::trackFill {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.root:orientation(vertical)::trackFill {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.root:preview-hover::trackFill, .root:hover::trackFill {\n    background: value(trackFillHover);\n}\n\n.root:preview-focus::trackFill, .root:focus::trackFill {\n    background: value(trackFillFocus);\n}\n\n.root:preview-disabled::trackFill, .root:disabled::trackFill {\n    background: value(trackFillDisabled);\n}\n\n.root:preview-hover::track, .root:hover::track {\n    background: value(trackBackgroundHover);\n    border-color: value(trackBorderColorHover);\n    border-width: value(trackBorderWidthHover);\n}\n\n.root:preview-focus::track, .root:focus::track {\n    background: value(trackBackgroundFocus);\n    border-color: value(trackBorderColorFocus);\n    border-width: value(trackBorderWidthFocus);\n}\n\n.root:preview-disabled::track, .root:disabled::track {\n    background: value(trackBackgroundDisabled);\n    border-color: value(trackBorderColorDisabled);\n    border-width: value(trackBorderWidthDisabled);\n}\n\n.root::thumbShape:shapeType(circle) {\n    border-radius: 50%;\n}\n.root::thumbShape:shapeType(circle):shapeType(circle) {\n    border-radius: value(thumbBorderRadius);\n}\n\n.root::thumbShape:shapeType(square) {\n    border-radius: 17px;\n}\n.root::thumbShape:shapeType(square):shapeType(square) {\n    border-radius: value(thumbBorderRadius);\n}\n\n.root::thumbShape:shapeType(rectangle) {\n    border-radius: 37px;\n}\n.root::thumbShape:shapeType(rectangle):shapeType(rectangle) {\n    border-radius: value(thumbBorderRadius);\n}\n\n.root::thumbShape:shapeType(bar) {\n    border-radius: 5px;\n}\n.root::thumbShape:shapeType(bar):shapeType(bar) {\n    border-radius: value(thumbBorderRadius);\n}\n"
    },
    "/wix-ui-santa/src/components/SearchBox/SearchBox.st.css": {
      "metadata": {
        "namespace": "searchbox1252846306",
        "depth": 8
      },
      "content": ":import {\n  -st-from: \"@wix/search-box-v2/dist/src/components/SearchBox/SearchBox.st.css\";\n  -st-default: SearchBox;\n}\n\n:vars {\n  /* @type SKINS */\n  skins: 'wixui.skins.SearchBox'; \n\n  /* REGULAR STATE */\n  /* @type COLOR_ALPHA */\n  inputBackgroundColor: color_11;\n  /* @type COLOR_ALPHA */\n  inputIconColor: color_15;\n  /* @type COLOR_ALPHA */\n  buttonBackgroundColor: color_15;\n  /* @type COLOR_ALPHA */\n  buttonIconColor: color_11;\n  /* @type COLOR */\n  inputTextColor: color_15;\n  /* @type COLOR */\n  inputPlaceholderColor: color_15;\n  /* @type FONT */\n  inputFont: font_8;\n  /* @type BORDER_COLOR_ALPHA */\n  inputBorderColor: color_15;\n  /* @type BORDER_SIZES */\n  inputBorderWidth: 1px;\n  /* @type BORDER_RADIUS */\n  inputBorderRadius: 0;\n  /* @type BOX_SHADOW */\n  inputShadow: none;\n\n  /* HOVER STATE */\n  /* @type COLOR_ALPHA */\n  inputHoverBackgroundColor: color_11;\n  /* @type COLOR_ALPHA */\n  inputHoverIconColor: color_15;\n  /* @type COLOR_ALPHA */\n  buttonHoverBackgroundColor: color_15;\n  /* @type COLOR_ALPHA */\n  buttonHoverIconColor:color_11;\n  /* @type BORDER_COLOR_ALPHA */\n  inputHoverBorderColor: color_15;\n  /* @type BORDER_SIZES */\n  inputHoverBorderWidth: 1px;\n  \n  /* FOCUS STATE */\n  /* @type COLOR_ALPHA */\n  inputFocusBackgroundColor: color_11;\n  /* @type COLOR_ALPHA */\n  inputFocusIconColor: color_15;\n  /* @type COLOR_ALPHA */\n  buttonFocusBackgroundColor: color_15;\n  /* @type COLOR_ALPHA */\n  buttonFocusIconColor: color_11;\n  /* @type BORDER_COLOR_ALPHA */\n  inputFocusBorderColor: color_15;\n  /* @type BORDER_SIZES */\n  inputFocusBorderWidth: 1px;\n\n  /* @type COLOR_ALPHA */\n  suggestionSectionDividerColorNew: color_15;\n}\n\n/*\n  suggestionSectionDividerColorNew - is hidden from design panel (see santa-editor/conf/data/advancedStyleSkinsStaticConfig.json)\n  suggestionSectionDividerColorNew renamed from suggestionSectionDividerColor (added \"New\" suffix)\n  becasue previous property was not hidden from design panel and users maight change the value \n*/\n\n.root {\n  -st-mixin: SearchBox(\n    inputBackgroundColor value(inputBackgroundColor),\n    inputIconColor value(inputIconColor),\n    buttonBackgroundColor value(buttonBackgroundColor),\n    buttonIconColor value(buttonIconColor),\n    inputTextColor value(inputTextColor),\n    inputPlaceholderColor value(inputPlaceholderColor),\n    inputFont value(inputFont),\n    inputBorderColor value(inputBorderColor),\n    inputBorderWidth value(inputBorderWidth),\n    inputBorderRadius value(inputBorderRadius),\n    inputShadow value(inputShadow),\n\n    inputHoverBackgroundColor value(inputHoverBackgroundColor),\n    inputHoverIconColor value(inputHoverIconColor),\n    buttonHoverBackgroundColor value(buttonHoverBackgroundColor),\n    buttonHoverIconColor value(buttonHoverIconColor),\n    inputHoverBorderColor value(inputHoverBorderColor),\n    inputHoverBorderWidth value(inputHoverBorderWidth),\n\n    inputFocusBackgroundColor value(inputFocusBackgroundColor),\n    inputFocusIconColor value(inputFocusIconColor),\n    buttonFocusBackgroundColor value(buttonFocusBackgroundColor),\n    buttonFocusIconColor value(buttonFocusIconColor),\n    inputFocusBorderColor value(inputFocusBorderColor),\n    inputFocusBorderWidth value(inputFocusBorderWidth),\n\n    suggestionHoverColor value(inputHoverBackgroundColor),\n    suggestionSectionDividerColor value(suggestionSectionDividerColorNew),\n\n    searchIconSize 0.9em\n  );\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/ProgressBar/ProgressBar.st.css": {
      "metadata": {
        "namespace": "progressbar1224245611",
        "depth": 2
      },
      "content": "@st-global-custom-property --value;\n\n:import {\n  -st-from: \"../common.st.css\";\n  -st-named: colorDisabled;\n}\n\n:vars {\n  range-track-height: 4px;\n  range-thumb-height: 4px;\n  range-thumb-hover-height: 12px;\n  range-thumb-bg: #fff;\n  border-radius: 50px;\n  progress-size: 12px;\n}\n\n.disabled {\n  color: value(colorDisabled);\n}\n\n.disabled:hover {\n  color: value(colorDisabled);\n}\n\n.disabled::-webkit-slider-thumb,\n.disabled::-webkit-slider-thumb {\n  display: none;\n}\n\n.disabled::-moz-range-thumb,\n.disabled::-moz-range-thumb {\n  display: none;\n}\n\n.disabled::-ms-thumb,\n.disabled::-ms-thumb {\n  display: none;\n}\n\n.mixin-range-track {\n  background: transparent;\n  border: 0;\n  border-radius: value(border-radius);\n  height: 100%;\n  user-select: none;\n}\n\n.mixin-range-thumb {\n  background: value(range-thumb-bg);\n  border: 0;\n  border-radius: value(border-radius);\n  height: value(range-track-height);\n  width: value(range-track-height);\n  margin: 0;\n  position: relative;\n  transition: all 0.3s ease;\n}\n\n.container {\n  position: relative;\n  width: 100%;\n  height: value(range-track-height);\n  margin: 8px 0;\n}\n\n.container::before,\n.container::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: value(border-radius);\n    display: none;\n}\n\n.container::before {\n    display: block;\n    opacity: .2;\n    background: currentColor;\n}\n\n@keyframes progress-bar-stripes {\n  from { background-position: 12px 0; }\n  to { background-position: 0 0; }\n}\n\n.container.loading::after {\n  display: block;\n  pointer-events: none;\n  opacity: .15;\n  background: linear-gradient(\n      45deg,\n      currentColor 25%,\n      transparent 25%,\n      transparent 50%,\n      currentColor 50%,\n      currentColor 75%,\n      transparent 75%,\n      transparent\n  );\n  background-size: value(progress-size) value(progress-size);\n  animation: progress-bar-stripes 1s linear infinite;\n}\n\n\n.progress {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  border: 0;\n  border-radius: value(border-radius);\n  background-color: transparent;\n  color: currentColor;\n  opacity: .3;\n  -webkit-appearance: none;\n}\n\n.progress::-webkit-progress-bar {\n  background-color: transparent;\n  border-radius: value(border-radius);\n}\n\n.progress::-moz-progress-bar {\n  background-color: currentColor;\n  border-radius: value(border-radius);\n}\n\n.progress::-webkit-progress-value {\n  background-color: currentColor;\n  border-radius: value(border-radius);\n}\n\n.progress::-ms-fill {\n  border-radius: value(border-radius);\n}\n\n.range {\n  position: absolute;\n  top: -8px; /*calc(value(range-thumb-height) - value(range-thumb-hover-height));*/\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  box-sizing: content-box;\n  padding: 8px 0; /*calc(value(range-thumb-hover-height) - value(range-thumb-height)) 0;*/\n  margin: 0;\n  border: 0;\n  border-radius: value(border-radius);\n  background: transparent;\n  color: currentColor;\n  transition: color 0.3s ease;\n  cursor: pointer;\n  -webkit-appearance: none;\n}\n\n.range::-webkit-slider-runnable-track {\n  -st-mixin: mixin-range-track;\n  background-image: linear-gradient(\n    to right,\n    currentColor var(--value, 0%),\n    transparent var(--value, 0%)\n  );\n}\n\n.range::-webkit-slider-thumb {\n  -st-mixin: mixin-range-thumb;\n  transform: translateX(var(--value, 0%));\n  margin-left: -2px;\n  -webkit-appearance: none;\n}\n\n.range::-moz-range-track {\n  -st-mixin: mixin-range-track;\n}\n\n.range::-moz-range-thumb {\n  -st-mixin: mixin-range-thumb;\n  transform: translateX(-2px);\n}\n\n.range::-moz-range-progress {\n  background: currentColor;\n  border-radius: value(border-radius);\n  height: 100%;\n}\n\n.range::-moz-focus-outer {\n  border: 0;\n}\n\n.range:hover::-webkit-slider-thumb,\n.range:active::-webkit-slider-thumb {\n  transform: scale(3);\n}\n\n.range:hover::-moz-range-thumb,\n.range:active::-moz-range-thumb {\n  transform: scale(3);\n}\n\n.range:hover::-ms-thumb,\n.range:active::-ms-thumb {\n  transform: scale(3);\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/radio-button/RadioButton.st.css": {
      "metadata": {
        "namespace": "radiobutton1410913776",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/radio-button/RadioButton.st.css\" */\n.root {\n  display: inline-block;\n  -st-states: disabled, checked, focused, focus-visible;\n}\n\n.icon {\n  cursor: pointer;\n  height: auto;\n}\n\n.label {}\n\n.root:checked::icon, .root:hover::icon {}\n\n.root:disabled {\n  filter: grayscale(75%);\n  opacity: 0.7;\n}\n\n.hiddenRadio {\n  position: absolute;\n  overflow: hidden;\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0;\n  opacity: 0;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/time-picker/Tickers.st.css": {
      "metadata": {
        "namespace": "tickers3432618669",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/time-picker/Tickers.st.css\" */\n.root {\n  display: inline-flex;\n  flex-direction: column;\n  vertical-align: top;\n}\n\n.ticker {\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-color: transparent;\n  padding: 0;\n  margin: 0;\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/Skip/Skip.st.css": {
      "metadata": {
        "namespace": "skip409918654",
        "depth": 2
      },
      "content": ":import {\n  -st-from: \"../common.st.css\";\n  -st-named: colorDisabled;\n}\n\n.button {\n  display: block;\n  width: 25px;\n  height: 20px;\n  padding: 0;\n  border: 0;\n  fill: currentColor;\n  background: transparent;\n  cursor: pointer;\n  color: currentColor;\n  transition: color .4s ease, opacity .4s ease;\n}\n\n.iconWrapper {\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.backSkip {\n  transform: rotate(0.5turn);\n}\n\n.disabled {\n  color: value(colorDisabled);\n}\n\n.disabled:hover {\n  color: value(colorDisabled);\n}\n"
    },
    "/wix-ui-santa/src/components/StylableLine/StylableLine.st.css": {
      "metadata": {
        "namespace": "stylableline2123045772",
        "depth": 1
      },
      "content": ".root {\n    -archetype: box;\n    box-sizing: border-box;\n}\n.text {\n    -archetype: text;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableLine/variants/a.st.css": {
      "metadata": {
        "namespace": "a-stylableline2123045772",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n    -st-from: \"../StylableLine.st.css\";\n    -st-default: StylableLine;\n}\n\n.root {\n    -st-extends: StylableLine;\n    box-sizing: border-box;\n    border: 2px solid orange;\n    background: lightblue;\n    font-size: 20px;\n    border-radius: 30px;\n    color: red;\n}\n"
    },
    "/wix-ui-santa/src/components/StylableLine/variants/test.st.css": {
      "metadata": {
        "namespace": "test-stylableline2123045772",
        "variant": true,
        "depth": 1
      },
      "content": ":import {\n    -st-from: \"../StylableLine.st.css\";\n    -st-default: StylableLine;\n}\n\n.root {\n    -st-extends: StylableLine;\n    box-sizing: border-box;\n    border-radius: 20px;\n    padding: 2px;\n    background: rebeccapurple;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/slider/Slider.st.css": {
      "metadata": {
        "namespace": "slider3652079713",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/slider/Slider.st.css\" */\n:import {\n  -st-from: \"../../mixins/calc\";\n  -st-default: calc\n}\n\n:vars {\n  tickLineWidth: 1px;\n  tickLineHeight: 10px;\n  tickDotSize: 3px;\n  tickMarksGap: 12px;\n  tooltipGap: 10px;\n}\n\n.root {\n  -st-states: orientation(enum(vertical, horizontal)), tickMarksPosition(enum(normal, middle, across)), tickMarksShape(enum(line, dot)), dir(enum(ltr, rtl)), disabled;\n  position: relative;\n  box-sizing: border-box;\n  outline: none !important;\n}\n\n.root * {\n  box-sizing: border-box;\n}\n\n.tooltip {\n  -st-states: normalPosition, acrossPosition;\n  position: absolute;\n  background: #363636;\n  color: #fff;\n  padding: 4px 12px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 1.5;\n  border-radius: 3px;\n  white-space: nowrap;\n}\n\n.tooltip::after,\n.tooltip::before {\n  content: ' ';\n  position: absolute;\n  margin-left: -8px;\n  border-width: 8px;\n  border-style: solid;\n}\n\n.track {\n  z-index: 0;\n  width: 100%;\n  height: 25%;\n  position: relative;\n  cursor: pointer;\n  background: #dadada;\n  opacity: 1;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 2px solid transparent;\n  min-height: 1px;\n}\n\n.inner {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.trackFill {\n  position: absolute;\n  background: linear-gradient(to right, #4992e3, #70bff3);\n  height: 100%;\n  width: 100%;\n}\n\n.root:dir(rtl) .trackFill {\n  right: 0;\n}\n\n.root:orientation(vertical) .track {\n  width: 25%;\n  height: 100%;\n}\n\n.root:orientation(vertical) .trackFill {\n  background: linear-gradient(to top, #4992e3, #70bff3);\n}\n\n.thumb {\n  z-index: 2;\n  position: absolute;\n  cursor: pointer;\n}\n\n.thumbShape {\n  -st-states: shapeType(enum(circle, square, rectangle, bar));\n  width: 100%;\n  height: 100%;\n  background: green;\n  border: 2px solid blue;\n}\n\n.thumbShape:shapeType(circle) {\n  border-radius: 50%;\n}\n\n.thumbShape:shapeType(square) {\n  border-radius: 7px;\n}\n\n.thumbShape:shapeType(rectangle) {\n  border-radius: 37px;\n}\n\n.thumbShape:shapeType(bar) {\n  border-radius: 7px;\n}\n\n.root:orientation(horizontal) .tooltip:normalPosition {\n  left: 50%;\n  top: calc(-7px - value(tooltipGap));\n  transform: translate(-50%, -100%);\n}\n.root:orientation(horizontal) .tooltip:acrossPosition {\n  left: 50%;\n  bottom: calc(-7px - value(tooltipGap));\n  transform: translate(-50%, 100%);\n}\n.root:orientation(vertical) .tooltip:normalPosition {\n  left: 50%;\n  left: calc(-7px - value(tooltipGap));\n  transform: translate(-100%, -50%);\n}\n.root:orientation(vertical) .tooltip:acrossPosition {\n  right: calc(-7px - value(tooltipGap));\n  transform: translate(100%, -50%);\n}\n\n.root:orientation(horizontal) .tooltip:normalPosition::after,\n.root:orientation(horizontal) .tooltip:normalPosition::before {\n  border-color: #363636 transparent transparent transparent;\n  top: 100%; /* At the bottom of the tooltip */\n  left: 50%;\n}\n\n.root:orientation(horizontal) .tooltip:acrossPosition::after,\n.root:orientation(horizontal) .tooltip:acrossPosition::before {\n  border-color: transparent transparent #363636 transparent;\n  bottom: 100%; /* At the bottom of the tooltip */\n  left: 50%;\n}\n\n.root:orientation(vertical) .tooltip {\n  top: 50%;\n}\n\n.root:orientation(vertical) .tooltip::after,\n.root:orientation(vertical) .tooltip::before {\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.root:orientation(vertical) .tooltip:normalPosition::after,\n.root:orientation(vertical) .tooltip:normalPosition::before {\n  left: 100%;\n  margin-left: 0;\n  border-color: transparent transparent transparent #363636;\n}\n\n.root:orientation(vertical) .tooltip:acrossPosition::after,\n.root:orientation(vertical) .tooltip:acrossPosition::before {\n  right: 100%;\n  border-color: transparent #363636 transparent transparent;\n}\n\n.tick {\n  display: inline-block;\n  position: absolute;\n  background: #000;\n  cursor: pointer;\n}\n\n.root:orientation(horizontal):tickMarksShape(line) .tick {\n  width: value(tickLineWidth);\n  height: value(tickLineHeight);\n}\n\n.root:orientation(vertical):tickMarksShape(line) .tick {\n  height: value(tickLineWidth);\n  width: value(tickLineHeight);\n}\n\n.root:tickMarksShape(dot) .tick {\n  width: value(tickDotSize);\n  height: value(tickDotSize);\n  border-radius: 50%;\n}\n\n.root:orientation(horizontal) .tick {\n  transform: translateX(-50%);\n}\n.root:orientation(vertical) .tick {\n  transform: translateY(50%);\n}\n\n.root:orientation(horizontal):tickMarksPosition(normal) .tick {\n  bottom: 0;\n}\n\n.root:orientation(vertical):tickMarksPosition(normal) .tick {\n  right: 0;\n}\n\n.root:orientation(horizontal):tickMarksPosition(middle) .tick {\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n\n.root:orientation(vertical):tickMarksPosition(middle) .tick {\n  left: 50%;\n  transform: translateX(-50%) translateY(50%);\n}\n\n.root:orientation(horizontal):tickMarksPosition(across) .tick {\n  top: 0;\n}\n\n.root:orientation(vertical):tickMarksPosition(across) .tick {\n  left: 0;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/dropdown-option/DropdownOption.st.css": {
      "metadata": {
        "namespace": "dropdownoption141330405",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/dropdown-option/DropdownOption.st.css\" */\n:vars {\n  /** Option background color when hovered */\n  hoverBackgroundColor: lightgrey;\n  /** Option background color when selected */\n  selectedBackgroundColor: grey;\n  /** Option background color when selected & hovered */\n  selectedHoverBackgroundColor: dimgrey;\n  /** Option background color when disabled */\n  disabledBackgroundColor: white;\n}\n\n.root {\n  -st-states: hovered, disabled, selectable, selected;\n  cursor: pointer;\n}\n\n.root:hovered {\n  background-color: value(hoverBackgroundColor);\n}\n\n.root:disabled {\n  cursor: default;\n  background-color: value(disabledBackgroundColor);\n}\n\n.root:selected {\n  background-color: value(selectedBackgroundColor);\n}\n\n.root:selected:hovered {\n  background-color: value(selectedHoverBackgroundColor);\n}\n\n.root:not(:selectable) {\n  cursor: default;\n}\n\n.highlight {\n  background-color: transparent;\n  font-weight: bold;\n}\n\n.nonHighlight {\n\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/dist/src/components/SearchBox/SearchBox.st.css": {
      "metadata": {
        "namespace": "searchbox2722269655",
        "depth": 7
      },
      "content": "@namespace \"SearchBox\";\n\n:import {\n  -st-from: \"wix-ui-core/index.st.css\";\n  -st-named: InputWithOptions;\n}\n\n:import {\n  -st-from: \"wix-ui-core/index.st.css\";\n  -st-named: ButtonNext;\n}\n\n:import {\n  -st-from: \"../Suggestion/Suggestion.st.css\";\n  -st-default: Suggestion;\n  -st-named: lineClamp;\n}\n\n:import {\n  -st-from: \"../SuggestionFooter/SuggestionFooter.st.css\";\n  -st-default: SuggestionFooter;\n}\n\n:import {\n  -st-from: \"../SuggestionHeader/SuggestionHeader.st.css\";\n  -st-default: SuggestionHeader;\n}\n\n:import {\n  -st-from: \"santa-skin-utils/dist/cjs/runtime/functions.js\";\n  -st-named:\n    getFontWithSizeInRange,\n    isEmptyCSSValue,\n    getValueByCondition,\n    getColorWithOpacity;\n}\n\n:import {\n  -st-from: './focusRings.st.css';\n  -st-named:\n    insetFocusRing,\n    focusRing;\n}\n\n:vars {\n  inputPlaceholderColor: rgba(0, 0, 0, 0.6);\n  inputBackgroundColor: rgb(255, 255, 255);\n  inputIconColor: rgba(0, 0, 0, 0.6);\n  buttonBackgroundColor: rgba(0, 0, 0, 0.07);\n  buttonIconColor: rgba(0, 0, 0, 0.96);\n  inputTextColor: rgba(0, 0, 0, 0.96);\n  inputFont: normal normal 300 normal 16px / normal Roboto, system-ui, sans-serif;\n  inputBorderColor: rgba(0, 0, 0, 0.6);\n  inputBorderWidth: 1px;\n  inputBorderRadius: 16px;\n  inputShadow:  none;\n  softInputShadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n\n  inputHoverBackgroundColor: rgb(255, 255, 245);\n  inputHoverIconColor: rgba(0, 0, 0, 1);\n  buttonHoverBackgroundColor: rgba(0, 0, 0, 0.1);\n  buttonHoverIconColor: rgba(0, 0, 0, 1);\n  inputHoverBorderColor: rgba(0, 0, 0, 0.6);\n  inputHoverBorderWidth: 1px;\n\n  inputFocusBackgroundColor: rgba(255, 255, 215, 1);\n  inputFocusIconColor: rgba(0, 0, 0, 1);\n  buttonFocusBackgroundColor: rgba(0, 0, 0, 0.2);\n  buttonFocusIconColor: rgba(0, 0, 0, 1);\n  inputFocusBorderColor: rgba(0, 0, 0, 0.6);\n  inputFocusBorderWidth: 1px;\n\n  suggestionSectionDividerColor: rgba(0, 0, 0, 0.2);\n\n  searchIconSize: 0.9em;\n}\n\n.root {\n   -st-states:\n    withClearIcon,\n    textAlignment(enum(left, center)),\n    buttonAlignment(enum(left, right)),\n    iconAlignment(enum(left, right)),\n    previewStateHover,\n    previewStateFocus,\n    withOverrideFontSize,\n    withSuggestions,\n    withCustomSuggestionsHeight,\n    withSuggestionsTopBorder,\n    disabled,\n    shouldShowClearIcon,\n    isExpandable,\n    collapsed,\n    expandedDirection(enum(left, right)),\n    inputFocused,\n    withFocusRing;\n\n  display: flex;\n\n  /* Always should fit 100% width & height of parent to work corretcly in editor    */\n  width: 100%;\n  height: 100%;\n\n  border-radius: value(inputBorderRadius);\n}\n\n.root:isExpandable:expandedDirection(left) {\n  flex-direction: row-reverse;\n}\n\n.root:isExpandable .input::inputComponent {\n  z-index: 999;\n}\n.root:isExpandable:collapsed .input::inputComponent {\n  z-index: 998;\n}\n\n/* Set font to .button-icon and .icon so sizes in \"em\" will work correctly */\n.root .input::inputComponent::nativeInput,\n.root .button-icon,\n.root .icon {\n  font: value(inputFont);\n}\n\n/* override font size if passed via component propert */\n.root:withOverrideFontSize .input::inputComponent::nativeInput,\n.root:withOverrideFontSize .button-icon,\n.root:withOverrideFontSize .icon {\n  font-size: var(--font-size);\n}\n\n/* --- CLEAR ICON --- */\n.clearButton {\n  color: value(inputTextColor);\n  visibility: hidden;\n}\n\n.root:shouldShowClearIcon .clearButton {\n  visibility: visible;\n}\n\n/* --- INPUT --- */\n.inputContainer {\n  width: 100%;\n}\n\n.root:isExpandable .inputContainer {\n  width: auto;\n}\n\n.input {\n  -st-extends: InputWithOptions;\n}\n\n.input:content-visible::popoverElement {\n  border-bottom: none;\n}\n\n.input {\n  cursor: text;\n  box-sizing: border-box;\n\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n}\n\n.input::inputComponent {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.input::inputComponent::nativeInput {\n  outline: none;\n  border: none;\n  width: 100%;\n  background: transparent;\n\n  /* left padding is different for textAlignment \"left\" & \"center\" */\n  padding: 8px 0px 8px 0;\n}\n\n.root:isExpandable .input::inputComponent::nativeInput {\n  box-sizing: border-box;\n  width: var(--expanded-width);\n  transition: width .25s ease-out, padding .25s ease-out;\n}\n\n.root:isExpandable:collapsed .input::inputComponent::nativeInput {\n  width: 0;\n  padding: 8px 0;\n}\n\n.input::inputComponent::nativeInput::-ms-clear {\n  display: none;\n}\n\n/* value textSpacing property. Set it only if textAlignment is set to \"left\"*/\n.root:textAlignment(left) .input::inputComponent::nativeInput {\n  padding-left: var(--text-spacing);\n}\n\n.root:textAlignment(center) .input::inputComponent::nativeInput {\n  padding-left: 8px;\n}\n\n.root:textAlignment(left):isExpandable:collapsed .input::inputComponent::nativeInput,\n.root:textAlignment(center):isExpandable:collapsed .input::inputComponent::nativeInput {\n  padding-left: 0;\n}\n\n.input::before {\n  content: '';\n  position: absolute;\n  top: 0; right: 0; bottom: 0; left: 0;\n  border-radius: value(inputBorderRadius);\n\n  box-shadow: value(inputShadow);\n  z-index: 0;\n}\n\n.input::popoverElement {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n\n  border-radius: value(inputBorderRadius);\n  border-style: solid;\n  border-width: value(inputBorderWidth);\n  border-color: value(inputBorderColor);\n}\n\n.input::inputComponent::nativeInput::placeholder {\n  color: value(inputPlaceholderColor);\n}\n\n.icon {\n  color: value(inputIconColor);\n  flex-shrink: 0;\n\n\n  min-width: 14px;\n  min-height: 14px;\n\n  max-width: 50px;\n  max-height: 50px;\n\n  /* by default icon size in \"em\" */\n  width: value(searchIconSize);\n  height: value(searchIconSize);\n}\n\n.root:iconAlignment(left) .icon {\n  margin-left: var(--icon-spacing);\n}\n\n.root:iconAlignment(right) .icon {\n  margin-right: var(--icon-spacing);\n}\n\n.root:isExpandable .icon {\n  margin: 0;\n}\n\n.root:previewStateHover .input .icon,\n.input:hover .icon {\n  color: value(inputHoverIconColor);\n}\n\n.root:previewStateFocus .icon,\n.input:focus-within .icon {\n  color: value(inputFocusIconColor);\n}\n\n.input::inputComponent::nativeInput {\n  color: value(inputTextColor);\n}\n\n.root:textAlignment(left) .input::inputComponent::nativeInput {\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.root:textAlignment(center) .input::inputComponent::nativeInput {\n  text-align: center;\n}\n\n/* --- BUTTON --- */\n.button {\n  -st-extends: ButtonNext;\n  flex-direction: column;\n  flex-shrink: 0;\n  outline: none;\n  border: none;\n\n  padding: 0;\n\n  box-sizing: border-box;\n  height: 100%;\n\n  border-style: solid;\n  border-width: value(inputBorderWidth);\n  border-color: value(inputBorderColor);\n\n  border-top: none;\n  border-bottom: none;\n}\n\n.button:global(.focus-ring)::content {\n  -st-mixin: insetFocusRing;\n}\n\n.button::content {\n  display: flex;\n}\n\n.root:buttonAlignment(right) .button {\n  border-right: none;\n}\n\n.root:buttonAlignment(left) .button {\n  border-left: none;\n}\n\n.button::content {\n  background: value(buttonBackgroundColor);\n  flex-grow: 1;\n  align-items: center;\n  display: flex;\n}\n\n.root:previewStateHover .button::content,\n.button::content:hover {\n  background: value(buttonHoverBackgroundColor);\n}\n\n.root:previewStateFocus .button::content,\n.button::content:active  {\n  background: value(buttonFocusBackgroundColor);\n}\n\n.button-icon {\n  color: value(buttonIconColor);\n\n  min-width: 14px;\n  min-height: 14px;\n\n  max-width: 50px;\n  max-height: 50px;\n\n  width: value(searchIconSize);\n  height: value(searchIconSize);\n  margin:0 var(--icon-spacing);\n}\n\n.root:previewStateHover .button .button-icon,\n.button:hover .button-icon {\n  color: value(buttonHoverIconColor);\n}\n\n.button:focus .button-icon {\n  color: value(buttonHoverIconColor);\n}\n\n.root:previewStateFocus .button .button-icon,\n.button:active .button-icon {\n  color: value(buttonFocusIconColor);\n}\n\n/* --- COMPONENT BACKGROUND & BORDERS--- */\n\n.input::inputComponent {\n  background: value(inputBackgroundColor);\n}\n\n.root:previewStateHover .input::inputComponent,\n.input::inputComponent:hover {\n  background: value(inputHoverBackgroundColor);\n}\n\n.root:previewStateFocus .input::inputComponent,\n.input::inputComponent:focus-within  {\n  background: value(inputFocusBackgroundColor);\n}\n\n.root:previewStateHover .input::popoverElement,\n.root:previewStateHover .button,\n.root:hover .input::popoverElement, .root:hover .button {\n  border-width: value(inputHoverBorderWidth);\n  border-color: value(inputHoverBorderColor);\n}\n\n.root:previewStateFocus .input::popoverElement,\n.root:previewStateFocus .button,\n.root:focus-within .input::popoverElement, .root:focus-within .button {\n  border-width: value(inputFocusBorderWidth);\n  border-color: value(inputFocusBorderColor);\n}\n\n/* --- Suggestion - */\n.root:withSuggestions .input:content-visible::popoverElement,\n.root:withSuggestions .input:content-visible::before {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input:content-visible::popoverContent {\n  /* Popover's content z-index should be less then popoverElement so popoverContent box-shadow will not fit in popoverElement */\n  z-index: 1000;\n\n  /* Make sure popover content is fit input width */\n  left: 0;\n  right: 0;\n}\n\n.input:content-visible::popoverElement {\n  z-index: 1001;\n}\n\n.input::dropdownContent {\n  /* popoverContent's background always should be without opacity */\n  background: getColorWithOpacity(value(inputFocusBackgroundColor), 1);\n}\n\n.input::popoverContent {\n  overflow: hidden;\n  border: none;\n  min-width: var(--suggestions-min-width);\n  box-sizing: border-box;\n\n  /* Set soft shadow if there is no inputShadow and borderWidth is 0 */\n  box-shadow: getValueByCondition(\n    value(softInputShadow),\n    value(inputShadow),\n    isEmptyCSSValue(\n      value(inputShadow),\n    value(inputFocusBorderWidth)\n    )\n  );\n\n  border-style: solid;\n  border-color: value(inputFocusBorderColor);\n  border-width: value(inputFocusBorderWidth);\n\n  border-radius: value(inputBorderRadius);\n  /* Remove top border to get rid of \"double border\" because there is input border */\n  border-top: none;\n\n  /* popoverContent border radius should set onlt for bottom border */\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.root:withSuggestionsTopBorder .input::popoverContent {\n  border-top-style: solid;\n  border-top-width: var(--suggestions-top-border-width);\n  border-top-color: var(--suggestions-top-border-color);\n}\n\n.root:isExpandable .input::popoverElement {\n  overflow: auto;\n}\n\n.input::popoverContent {\n  min-width: 280px;\n}\n\n.input::dropdownContent::dropdownOption:selected,\n.input::dropdownContent::dropdownOption:hovered {\n  /* remove default backgrounds */\n  background: none\n}\n\n/* remove backgrounds for selected state (actually there is no \"selected\" state at ui)*/\n.input::dropdownContent::dropdownOption:selected Suggestion,\n.input::dropdownContent::dropdownOption:selected SuggestionHeader {\n  background: none;\n}\n\n.input::dropdownContent::optionsContainer {\n  max-height: var(--suggestions-max-height);\n}\n\n.input::dropdownContent::dropdownOption SuggestionHeader {\n  cursor: default;\n}\n\n.input::dropdownContent::dropdownOption:hovered SuggestionHeader::showAllLink{\n  opacity: 1;\n}\n\n.input::dropdownContent::dropdownOption:hovered Suggestion,\n.input::dropdownContent::dropdownOption:hovered SuggestionHeader {\n  background: getColorWithOpacity(value(inputTextColor), 0.05);\n}\n\n.input::dropdownContent::dropdownOption:hover {\n  background: none;\n}\n\n.root Suggestion {\n  padding: 10px 20px;\n  cursor: pointer;\n}\n\n.root Suggestion::thumbnail {\n  width: 73px;\n  height: 55px;\n}\n\n.root Suggestion::content {\n  margin-left: 12px;\n}\n\n.root Suggestion::title {\n  color: value(inputTextColor);\n\n  /* font should be the same as at input but with restricted font-size */\n  font: getFontWithSizeInRange(value(inputFont), 10, 20);\n  text-decoration: none;\n  line-height: 1.5em;\n}\n\n.root Suggestion::description {\n  -st-mixin:lineClamp(lineSize 1);\n  min-height: auto;\n  color: value(inputTextColor);\n  font: value(inputFont);\n  font-size: 12px;\n  line-height: 1.42em;\n  margin-top: 4px;\n}\n\n.suggestion-item-link:link, .suggestion-item-link:hover,\n.suggestion-item-link:hover, .suggestion-item-link:active {\n  text-decoration: none;\n}\n\n/* set font to the root element because ::title and ::showAllLinkfont-size set in em */\n.root SuggestionHeader, .root SuggestionHeader::title {\n  /* font should be the same as at input but with restricted font-size */\n  font: getFontWithSizeInRange(value(inputFont), 10, 16);\n}\n\n.root SuggestionHeader::title, .root SuggestionHeader::showAllLink{\n  color: value(inputTextColor);\n  line-height: 1.5em;\n  text-decoration: none;\n}\n\n.root SuggestionHeader::divider {\n  background: getColorWithOpacity(value(suggestionSectionDividerColor), 0.3);\n}\n\n.root SuggestionFooter {\n  font: value(inputFont);\n  color: value(inputTextColor);\n}\n\n.root SuggestionFooter::text {\n  font: value(inputFont);\n  font-size: 12px;\n}\n\n.root SuggestionFooter::icon {\n  color: value(inputFocusIconColor);\n}\n\n/* --- DISABLED */\n.root:disabled {\n  user-select: none;\n}\n\n/* NOTE: set opacity instead of `color: getColorWithOpacity` becasue\n  function `getColorWithOpacity` works only with rgba/rgba pattern */\n.root:disabled .input::inputComponent::nativeInput,\n.root:disabled .clearButton {\n  /* color: getColorWithOpacity(value(inputTextColor), 0.3); */\n  opacity: 0.3;\n}\n\n.root:disabled .input::inputComponent::nativeInput::placeholder {\n  /* color: getColorWithOpacity(value(inputTextColor), 0.2); */\n  opacity: 0.9;\n}\n\n.root:disabled .input,\n.root:disabled .icon,\n.root:disabled .button {\n  cursor: default;\n}\n\n.root:disabled .button::content,\n.root:disabled .button::content:hover,\n.root:disabled .button::content:focus {\n  background: getColorWithOpacity(value(buttonBackgroundColor), 0.3);\n}\n\n.root:disabled .button .button-icon,\n.root:disabled .button:hover .button-icon,\n.root:disabled .button:focus .button-icon {\n  color: getColorWithOpacity(value(buttonIconColor), 0.3);\n}\n\n.root:disabled .input::popoverElement,\n.root:disabled .button,\n.root:disabled:hover .input::popoverElement,\n.root:disabled:hover .button,\n.root:disabled:focus-within .input::popoverElement,\n.root:disabled:focus-within .button {\n  border-width: getColorWithOpacity(value(inputBorderWidth), 0.3);\n  border-color: getColorWithOpacity(value(inputBorderColor), 0.3);\n}\n\n.root:disabled .input .icon,\n.root:disabled .input:hover .icon,\n.root:disabled .input:focus-within .icon å{\n  color: getColorWithOpacity(value(inputIconColor), 0.3);\n}\n\n.root:disabled .input::inputComponent,\n.root:disabled .input::inputComponent:hover,\n.root:disabled .input::inputComponent:focus-within {\n  background: getColorWithOpacity(value(inputBackgroundColor), 0.3);\n}\n\n/* Hide x icon on Chrome */\n.root input[type=\"search\"]::-webkit-search-decoration,\n.root input[type=\"search\"]::-webkit-search-cancel-button,\n.root input[type=\"search\"]::-webkit-search-results-button,\n.root input[type=\"search\"]::-webkit-search-results-decoration {\n  display: none;\n}\n\n/* Remove Safari specific styling */\n.root input[type=\"search\"] {\n  -webkit-appearance: none;\n}\n\n/* Remove input wix focus ring */\n.root .input::inputComponent::nativeInput {\n  box-shadow: none;\n}\n\n.root:withFocusRing:inputFocused {\n  -st-mixin: focusRing;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/dropdown-option/DropdownOption.st.css": {
      "metadata": {
        "namespace": "dropdownoption3857507964",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/dropdown-option/DropdownOption.st.css\" */\n:vars {\n  /** Option background color when hovered */\n  hoverBackgroundColor: lightgrey;\n  /** Option background color when selected */\n  selectedBackgroundColor: grey;\n  /** Option background color when selected & hovered */\n  selectedHoverBackgroundColor: dimgrey;\n  /** Option background color when disabled */\n  disabledBackgroundColor: white;\n}\n\n.root {\n  -st-states: hovered, disabled, selectable, selected;\n  cursor: pointer;\n}\n\n.root:hovered {\n  background-color: value(hoverBackgroundColor);\n}\n\n.root:disabled {\n  cursor: default;\n  background-color: value(disabledBackgroundColor);\n}\n\n.root:selected {\n  background-color: value(selectedBackgroundColor);\n}\n\n.root:selected:hovered {\n  background-color: value(selectedHoverBackgroundColor);\n}\n\n.root:not(:selectable) {\n  cursor: default;\n}\n\n.highlight {\n  background-color: transparent;\n  font-weight: bold;\n}\n\n.nonHighlight {\n\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/editor-elements-library/dist/components/BoltComponent/viewer/style/BoltComponent.st.css": {
      "metadata": {
        "namespace": "boltcomponent4036504862",
        "depth": 1
      },
      "content": ".root {\n  border: 5px solid #1c60f2;\n  padding: 20px;\n  color: blue;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/editor-elements-library/dist/components/Breadcrumbs/viewer/style/Breadcrumbs.st.css": {
      "metadata": {
        "namespace": "breadcrumbs1044375426",
        "depth": 2
      },
      "content": "@namespace \"Breadcrumbs\";\n\n@st-global-custom-property\n  --horizontalMargin,\n  --verticalMargin,\n  --alignment;\n\n:import {\n  -st-from: \"../../../../stylable/device.st.css\";\n  -st-named: mobile-only;\n}\n\n.root {\n  -archetype: paintBox;\n  overflow: hidden;\n}\n\n.list {\n  -archetype: text;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: var(--alignment);\n  flex-wrap: wrap;\n  margin: 0 0 calc(-1 * var(--verticalMargin)) calc(-1 * var(--horizontalMargin));\n}\n\n.list.no-wrap {\n  flex-wrap: nowrap;\n}\n\n.list.no-wrap .breadcrumb:first-child,\n.list.no-wrap .breadcrumb:last-child {\n  flex-shrink: 0;\n}\n\n.list.no-wrap .breadcrumb:not(:first-child):not(:last-child) {\n  min-width: calc(3em + var(--horizontalMargin) * 2);\n}\n\n.list:not(.no-wrap) .breadcrumb {\n  min-width: 3em;\n}\n\n.breadcrumb {\n  -archetype: paddingBox;\n  cursor: pointer;\n  display: flex;\n}\n\n.breadcrumb:hover .anchor {\n  text-decoration: underline;\n}\n\n.anchor {\n  -archetype: paddingBox;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin: 0 0 var(--verticalMargin) var(--horizontalMargin);\n}\n\n.separator {\n  -st-states: showOnlyPrev;\n  margin-left: var(--horizontalMargin);\n}\n\n.separator:showOnlyPrev {\n  align-self: flex-start;\n}\n\n.label {\n  letter-spacing: 0em;\n}\n\n.icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.icon > svg {\n  width: 1em;\n  height: auto;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/time-picker/TimePicker.st.css": {
      "metadata": {
        "namespace": "timepicker3820196819",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/time-picker/TimePicker.st.css\" */\n:import {\n  -st-from: \"../input/Input.st.css\";\n  -st-default: Input;\n}\n\n:import {\n  -st-from: \"./Tickers.st.css\";\n  -st-default: Tickers;\n}\n\n.root {\n  -st-extends: Input;\n  -st-states: focus;\n}\n\n.tickers {\n  -st-extends: Tickers;\n}\n"
    },
    "/wix-ui-santa/src/components/LineShareButton/LineShareButton.st.css": {
      "metadata": {
        "namespace": "linesharebutton3578505228",
        "depth": 1
      },
      "content": ".root {}\n\n:vars {\n    /* @type SKINS */\n    skins: 'wixui.skins.LineShareButton';    \n}"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/PlayPause/PlayPause.st.css": {
      "metadata": {
        "namespace": "playpause3212934267",
        "depth": 2
      },
      "content": ":import {\n  -st-from: \"../common.st.css\";\n  -st-named: colorDisabled;\n}\n\n.button {\n  display: block;\n  width: 18px;\n  height: 20px;\n  padding: 0;\n  border: 0;\n  fill: currentColor;\n  background: transparent;\n  cursor: pointer;\n  color: currentColor;\n  transition: color .4s ease, opacity .4s ease;\n}\n\n.disabled {\n  color: value(colorDisabled);\n}\n\n.disabled:hover {\n  color: value(colorDisabled);\n}\n"
    },
    "/wix-ui-santa/src/components/SocialAuth/SocialAuth.st.css": {
      "metadata": {
        "namespace": "socialauth909457630",
        "depth": 1
      },
      "content": "  \n  /**\n   * The component's design panel is auto generated according to variables stated in :vars section\n   * For available variable types see https://github.com/wix-private/santa/wiki/Skins#2-using-skin-parameters\n   * For advanced styling of the design panel see https://github.com/wix-private/santa-editor/blob/master/santa-editor/conf/data/advancedStyleSkinsStaticConfig.json\n   * For setting the custom design panel title see https://github.com/wix-private/santa-editor/blob/master/santa-editor/packages/addPanelData/src/main/designData/componentsLiveSections.js\n   * For setting the custom desgin panel help id see https://github.com/wix-private/santa-editor/blob/master/santa-editor/packages/helpIds/src/main/constants/customizeDesign.js\n   * For setting the desgin panel help id see https://github.com/wix-private/santa-editor/blob/master/santa-editor/packages/helpIds/src/main/constants/design.js\n   * For using formatter see https://github.com/wix-private/wix-ui-santa/wiki/FAQ#i-cant-import-formatter-into-my-stcss-file-from-wix-ui-santa\n   */\n  \n  :vars {\n    /**\n    * Currently needed for skin based component (using the editor's custom design panel)\n    * The SKINS var is used to identify which variables are relevant for each skin name, you can use values delimited by `,` \n    * To use same variables for multiple skins.\n    */\n    /* @type SKINS */\n    skins: 'wixui.skins.SocialAuth';\n  \n    /* @type COLOR_ALPHA */\n    color: color_8;\n  }"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/common.st.css": {
      "metadata": {
        "namespace": "common2267786240",
        "depth": 1
      },
      "content": ":vars {\n  colorDisabled: #808080;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/pagination/Pagination.st.css": {
      "metadata": {
        "namespace": "pagination1305586870",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/pagination/Pagination.st.css\" */\n.button-common-mixin {\n    display: inline-flex;\n    flex-shrink: 0;\n}\n\n.root {\n    -st-states: disabled, error;\n    display: inline-flex;\n    user-select: none;\n}\n\n.navButton {\n    -st-mixin: button-common-mixin;\n    -st-states: disabled;\n}\n\n.navButton:not(:disabled) {\n    cursor: pointer;\n}\n\n.emptyButton {\n    -st-mixin: button-common-mixin;\n}\n\n.navButtonFirst {  order: 1;  }\n.navButtonPrevious,\n.emptyButtonPrevious{  order: 2;  }\n.navButtonNext,\n.emptyButtonNext{  order: 4;  }\n.navButtonLast {  order: 5;  }\n\n.pageStrip {\n    order: 3;\n    overflow-x: hidden;\n}\n\n.pageStripInner {\n    display: flex;\n}\n\n.pageStripTemplate {\n    height: 0;\n    overflow: hidden;\n}\n\n.pageButton {\n    -st-mixin: button-common-mixin;\n    -st-states: disabled;\n}\n\n.pageButton:not(:disabled) {\n    cursor: pointer;\n}\n\n.currentPage {\n    -st-mixin: button-common-mixin;\n}\n\n.gap {\n    -st-mixin: button-common-mixin;\n}\n\n.pageForm {\n    display: flex;\n    order: 3;\n}\n\n.compact {\n    -st-extends: pageForm;\n}\n\n.pageInput {}\n.totalPages {}\n.slash {}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/dropdown/Dropdown.st.css": {
      "metadata": {
        "namespace": "dropdown3082560593",
        "depth": 3
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/dropdown/Dropdown.st.css\" */\n:import {\n  -st-from: \"../popover/Popover.st.css\";\n  -st-default: Popover;\n}\n\n:import {\n  -st-from: \"../dropdown-content/DropdownContent.st.css\";\n  -st-default: DropdownContent;\n}\n\n.root {\n  -st-extends: Popover;\n  -st-states: content-visible;\n}\n\n.root::popover {\n  min-width: 100%;\n}\n\n.dropdownContent {\n  -st-extends: DropdownContent;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/popover/Popover.st.css": {
      "metadata": {
        "namespace": "popover1690392109",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/popover/Popover.st.css\" */\n:import {\n  -st-from: \"../../mixins/calc\";\n  -st-default: calc\n}\n\n:vars {\n  /** Background color of the content */\n  contentBackgroundColor: white;\n  /** Border width of the content */\n  contentBorderWidth: 1px;\n  /** Border style of the content */\n  contentBorderStyle: solid;\n  /** Border color of the content */\n  contentBorderColor: black;\n  /** Border radius of the content */\n  contentBorderRadius: initial;\n  /** Content padding for the content */\n  contentPadding: initial;\n  /** Size of the arrow of the content */\n  contentArrowSize: 5px;\n}\n\n.root {\n  -st-states: fluid;\n  /*popper sets tooltip in absolute position according to this container*/\n  position: relative;\n  /*popper adds an extra div that needs to be measured without stretching*/\n  display: inline-block;\n}\n\n.root:fluid {\n  /* for stretching the container alongside the positioning mechanism */\n  display: block;\n}\n\n.popoverAnimation {}\n\n.popoverAnimation-enter {}\n\n.popoverAnimation-enter.popoverAnimation-enter-active {}\n\n.popoverAnimation-exit {}\n\n.popoverAnimation-exit.popoverAnimation-exit-active {}\n\n.popoverContent {\n  background-color: value(contentBackgroundColor);\n  border-width: value(contentBorderWidth);\n  border-style: value(contentBorderStyle);\n  border-color: value(contentBorderColor);\n  border-radius: value(contentBorderRadius);\n  padding: value(contentPadding);\n}\n\n.arrow {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  position: absolute;\n  margin: value(contentArrowSize);\n}\n\n.popover {\n}\n\n.withArrow {\n}\n\n/* TODO: use a stylable state for this. Notice it would break consumers styles */\n.popover[data-placement*=\"right\"].withArrow {\n  padding-left: value(contentArrowSize);\n}\n\n.popover[data-placement*=\"right\"].withArrow .arrow {\n  border-width: value(contentArrowSize) value(contentArrowSize) value(contentArrowSize) 0;\n  left: calc(-1 * value(contentArrowSize));\n  margin-left: value(contentArrowSize);\n  margin-right: 0;\n  border-color: transparent value(contentBorderColor) transparent transparent;\n}\n\n.popover[data-placement*=\"left\"].withArrow {\n  padding-right: value(contentArrowSize);\n}\n\n.popover[data-placement*=\"left\"].withArrow .arrow {\n  border-width: value(contentArrowSize) 0 value(contentArrowSize) value(contentArrowSize);\n  right: calc(-1 * value(contentArrowSize));\n  margin-left: 0;\n  margin-right: value(contentArrowSize);\n  border-color: transparent transparent transparent value(contentBorderColor);\n}\n\n.popover[data-placement*=\"bottom\"].withArrow {\n  padding-top: value(contentArrowSize);\n}\n\n.popover[data-placement*=\"bottom\"].withArrow .arrow {\n  border-width: 0 value(contentArrowSize) value(contentArrowSize) value(contentArrowSize);\n  top: calc(-1 * value(contentArrowSize));\n  margin-top: value(contentArrowSize);\n  margin-bottom: 0;\n  border-color: transparent transparent value(contentBorderColor) transparent;\n}\n\n.popover[data-placement*=\"top\"].withArrow {\n  padding-bottom: value(contentArrowSize);\n}\n\n.popover[data-placement*=\"top\"].withArrow .arrow {\n  border-width: value(contentArrowSize) value(contentArrowSize) 0 value(contentArrowSize);\n  bottom: calc(-1 * value(contentArrowSize));\n  margin-top: 0;\n  margin-bottom: value(contentArrowSize);\n  border-color: value(contentBorderColor) transparent transparent transparent;\n}\n\n.popoverElement {}\n\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/dropdown-content/DropdownContent.st.css": {
      "metadata": {
        "namespace": "dropdowncontent1057325482",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/dropdown-content/DropdownContent.st.css\" */\n:import {\n  -st-from: \"../dropdown-option/DropdownOption.st.css\";\n  -st-default: DropdownOption;\n}\n\n.root {\n  outline: 0;\n}\n\n.optionsContainer {\n  outline: 0;\n  overflow: auto;\n  max-height: 260px;\n  position: relative;\n}\n\n.dropdownOption {\n  -st-extends: DropdownOption;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/input/Input.st.css": {
      "metadata": {
        "namespace": "input17156874",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/input/Input.st.css\" */\n.root {\n  -st-states: disabled, error, focus;\n  position: relative;\n}\n\n.nativeInput {}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/hocs/Focusable/Focusable.st.css": {
      "metadata": {
        "namespace": "focusable1057284438",
        "depth": 1
      },
      "content": ".root {\n  -st-states: focus, focus-visible;\n}\n\n.root:focus {\n /* need to be extended and implemented by consumers of focusableHoc */\n}\n\n.root:focus-visible {\n  /* need to be extended and implemented by consumers of focusableHoc */\n}\n\n.focus-box {\n\toutline: none;\n}\n\n.focus-box-error {\n\toutline: none;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/dist/src/components/SuggestionFooter/SuggestionFooter.st.css": {
      "metadata": {
        "namespace": "suggestionfooter3611147190",
        "depth": 2
      },
      "content": ".root {\n  cursor: pointer;\n  padding: 12px 20px;\n\n  display: flex;\n  align-items: center;\n  opacity: 0.6;\n  transition: opacity 0.2s;\n\n  box-sizing: border-box;\n}\n\n\n.root:hover {\n  opacity: 1;\n}\n\n.root:link, .root:hover,\n.root:active, .root:focus {\n  text-decoration: none;\n}\n\n.icon {\n  width: 12px;\n  height: 12px;\n  margin-right: 12px;\n}\n\n.text {\n  font-size: 12px;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/dist/src/components/Suggestion/Suggestion.st.css": {
      "metadata": {
        "namespace": "suggestion1417895888",
        "depth": 3
      },
      "content": ":vars {\n  lineSize: 3;\n}\n\n.root {\n  -st-states: mobileView;\n  display: flex;\n  margin-bottom: 32px;\n  line-height: 1.0em;\n}\n\n.root:last-child {\n  margin-bottom: 0;\n}\n\n.lineClamp {\n  display: -webkit-box;\n  -webkit-line-clamp: value(lineSize);\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.content {\n  margin-left: 32px;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  justify-content: center;\n}\n\n.thumbnail {\n  width: 176px;\n  height: 124px;\n}\n\n.title {}\n\n.description {\n  margin-top: 8px;\n  min-height: 20px;\n  max-height: 70px;\n  -st-mixin: lineClamp;\n}\n\n.root:mobileView .description {\n  margin-top: 4px;\n  max-height: 40px;\n  font-size: 14px !important;\n  -st-mixin: lineClamp(lineSize 2);\n}\n\n.root:mobileView {\n  margin-bottom: 20px;\n}\n\n.root:mobileView .content {\n  margin-left: 0;\n}\n\n.root:mobileView .title {\n  font-size: 16px !important;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/dist/src/components/SuggestionHeader/SuggestionHeader.st.css": {
      "metadata": {
        "namespace": "suggestionheader1467359289",
        "depth": 1
      },
      "content": ".root {\n  padding: 20px 20px 11px 20px;\n  font-size: 14px;\n}\n\n.inner {\n  display: flex;\n  flex: 1;\n  justify-content: space-between;\n}\n\n.divider {\n  margin-top: 8px;\n  width: 100%;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.title {\n  font-size: 14px;\n}\n\n.showAllLink {\n  font-size: 0.9em;\n  opacity: 0.8;\n  transition: opacity 0.2s;\n  flex-shrink: 0;\n}\n\n.showAllLink:hover {\n  opacity: 1;\n}\n\n.showAllLink:link, .showAllLink:hover,\n.showAllLink:active, .showAllLink:focus {\n  text-decoration: none;\n  color: inherit;\n}"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/input-with-options/InputWithOptions.st.css": {
      "metadata": {
        "namespace": "inputwithoptions1922860281",
        "depth": 4
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/input-with-options/InputWithOptions.st.css\" */\n:import {\n  -st-from: \"../dropdown/Dropdown.st.css\";\n  -st-default: Dropdown;\n}\n\n:import {\n  -st-from: \"../input/Input.st.css\";\n  -st-default: Input;\n}\n\n.root {\n  -st-extends: Dropdown;\n}\n\n.inputComponent {\n  -st-extends: Input;\n}"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/dropdown/Dropdown.st.css": {
      "metadata": {
        "namespace": "dropdown2320977156",
        "depth": 3
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/dropdown/Dropdown.st.css\" */\n:import {\n  -st-from: \"../popover/Popover.st.css\";\n  -st-default: Popover;\n}\n\n:import {\n  -st-from: \"../dropdown-content/DropdownContent.st.css\";\n  -st-default: DropdownContent;\n}\n\n.root {\n  -st-extends: Popover;\n  -st-states: content-visible;\n}\n\n.root::popover {\n  min-width: 100%;\n}\n\n.dropdownContent {\n  -st-extends: DropdownContent;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/popover/Popover.st.css": {
      "metadata": {
        "namespace": "popover1907359532",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/popover/Popover.st.css\" */\n:import {\n  -st-from: \"../../mixins/calc\";\n  -st-default: calc\n}\n\n:vars {\n  /** Background color of the content */\n  contentBackgroundColor: white;\n  /** Border width of the content */\n  contentBorderWidth: 1px;\n  /** Border style of the content */\n  contentBorderStyle: solid;\n  /** Border color of the content */\n  contentBorderColor: black;\n  /** Border radius of the content */\n  contentBorderRadius: initial;\n  /** Content padding for the content */\n  contentPadding: initial;\n  /** Size of the arrow of the content */\n  contentArrowSize: 5px;\n}\n\n.root {\n  -st-states: fluid;\n  /*popper sets tooltip in absolute position according to this container*/\n  position: relative;\n  /*popper adds an extra div that needs to be measured without stretching*/\n  display: inline-block;\n}\n\n.root:fluid {\n  /* for stretching the container alongside the positioning mechanism */\n  display: block;\n}\n\n.popoverAnimation {}\n\n.popoverAnimation-enter {}\n\n.popoverAnimation-enter.popoverAnimation-enter-active {}\n\n.popoverAnimation-exit {}\n\n.popoverAnimation-exit.popoverAnimation-exit-active {}\n\n.popoverContent {\n  background-color: value(contentBackgroundColor);\n  border-width: value(contentBorderWidth);\n  border-style: value(contentBorderStyle);\n  border-color: value(contentBorderColor);\n  border-radius: value(contentBorderRadius);\n  padding: value(contentPadding);\n}\n\n.arrow {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  position: absolute;\n  margin: value(contentArrowSize);\n}\n\n.popover {\n}\n\n.withArrow {\n}\n\n/* TODO: use a stylable state for this. Notice it would break consumers styles */\n.popover[data-placement*=\"right\"].withArrow {\n  padding-left: value(contentArrowSize);\n}\n\n.popover[data-placement*=\"right\"].withArrow .arrow {\n  border-width: value(contentArrowSize) value(contentArrowSize) value(contentArrowSize) 0;\n  left: calc(-1 * value(contentArrowSize));\n  margin-left: value(contentArrowSize);\n  margin-right: 0;\n  border-color: transparent value(contentBorderColor) transparent transparent;\n}\n\n.popover[data-placement*=\"left\"].withArrow {\n  padding-right: value(contentArrowSize);\n}\n\n.popover[data-placement*=\"left\"].withArrow .arrow {\n  border-width: value(contentArrowSize) 0 value(contentArrowSize) value(contentArrowSize);\n  right: calc(-1 * value(contentArrowSize));\n  margin-left: 0;\n  margin-right: value(contentArrowSize);\n  border-color: transparent transparent transparent value(contentBorderColor);\n}\n\n.popover[data-placement*=\"bottom\"].withArrow {\n  padding-top: value(contentArrowSize);\n}\n\n.popover[data-placement*=\"bottom\"].withArrow .arrow {\n  border-width: 0 value(contentArrowSize) value(contentArrowSize) value(contentArrowSize);\n  top: calc(-1 * value(contentArrowSize));\n  margin-top: value(contentArrowSize);\n  margin-bottom: 0;\n  border-color: transparent transparent value(contentBorderColor) transparent;\n}\n\n.popover[data-placement*=\"top\"].withArrow {\n  padding-bottom: value(contentArrowSize);\n}\n\n.popover[data-placement*=\"top\"].withArrow .arrow {\n  border-width: value(contentArrowSize) value(contentArrowSize) 0 value(contentArrowSize);\n  bottom: calc(-1 * value(contentArrowSize));\n  margin-top: 0;\n  margin-bottom: value(contentArrowSize);\n  border-color: value(contentBorderColor) transparent transparent transparent;\n}\n\n.popoverElement {}\n\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/dropdown-content/DropdownContent.st.css": {
      "metadata": {
        "namespace": "dropdowncontent4149667232",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/dropdown-content/DropdownContent.st.css\" */\n:import {\n  -st-from: \"../dropdown-option/DropdownOption.st.css\";\n  -st-default: DropdownOption;\n}\n\n.root {\n  outline: 0;\n}\n\n.optionsContainer {\n  outline: 0;\n  overflow: auto;\n  max-height: 260px;\n  position: relative;\n}\n\n.dropdownOption {\n  -st-extends: DropdownOption;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/hocs/Focusable/Focusable.st.css": {
      "metadata": {
        "namespace": "focusable1358304697",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/hocs/Focusable/Focusable.st.css\" */\n.root {\n  -st-states: focus, focus-visible;\n}\n\n.root:focus {\n /* need to be extended and implemented by consumers of focusableHoc */\n}\n\n.root:focus-visible {\n  /* need to be extended and implemented by consumers of focusableHoc */\n}\n\n.focus-box {\n\toutline: none;\n}\n\n.focus-box-error {\n\toutline: none;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/ArtistName/ArtistName.st.css": {
      "metadata": {
        "namespace": "artistname4035125376",
        "depth": 1
      },
      "content": ".title {\n  color: inherit;\n  font-size: 16px;\n  line-height: 1;\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/Cover/Cover.st.css": {
      "metadata": {
        "namespace": "cover2572219373",
        "depth": 1
      },
      "content": ".cover {\n  display: block;\n  width: 70px;\n  height: 70px;\n  background-position: center;\n  background-size: cover;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/TimeStamp/TimeStamp.st.css": {
      "metadata": {
        "namespace": "timestamp2037660507",
        "depth": 1
      },
      "content": ".time {\n  display: block;\n  padding: 4px 0 4px 12px;\n  opacity: .6;\n  font-size: 12px;\n  line-height: 1;\n  white-space: nowrap;\n  font-family: Helvetica Neue, HelveticaNeue-Light, Helvetica Neue Light, Avenir, Gordita, Helvetica, Arial, sans-serif;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/TrackName/TrackName.st.css": {
      "metadata": {
        "namespace": "trackname1899081343",
        "depth": 1
      },
      "content": ".title {\n  color: inherit;\n  font-size: 16px;\n  line-height: 1;\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/Mute/Mute.st.css": {
      "metadata": {
        "namespace": "mute3837973433",
        "depth": 1
      },
      "content": ".button {\n  display: block;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  outline: 0;\n  cursor: pointer;\n  color: inherit;\n  transition: color .4s ease, opacity .4s ease;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/Rate/Rate.st.css": {
      "metadata": {
        "namespace": "rate2752670572",
        "depth": 1
      },
      "content": ".button {\n  display: block;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  outline: 0;\n  cursor: pointer;\n  color: inherit;\n  transition: color .4s ease, opacity .4s ease;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/soundhead-react/dist/es/src/components/Forward/Forward.st.css": {
      "metadata": {
        "namespace": "forward2433111626",
        "depth": 1
      },
      "content": ".button {\n  display: block;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  outline: 0;\n  cursor: pointer;\n  color: inherit;\n  transition: color .4s ease, opacity .4s ease;\n}\n"
    },
    "/wix-ui-santa/src/components/BoltComponent/BoltComponent.st.css": {
      "metadata": {
        "namespace": "boltcomponent1063612038",
        "depth": 4
      },
      "content": ":import {\n  -st-from: '@wix/editor-elements-library/index.st.css';\n  -st-named: BoltComponent;\n}\n\n.root {\n  -st-extends: BoltComponent;\n  border: 5px solid #1c60f2;\n  padding: 20px;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/editor-elements-library/dist/stylable/device.st.css": {
      "metadata": {
        "namespace": "device868912756",
        "depth": 1
      },
      "content": ".mobile-only {\n  -st-global: \"body.device-mobile-optimized\";\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/index.st.css": {
      "metadata": {
        "namespace": "index2247495585",
        "depth": 6
      },
      "content": "\n:import {-st-from: \"./dist/src/components/video/Video.st.css\";-st-default:Video;}\n.root Video{}\n:import {-st-from: \"./dist/src/components/tooltip/Tooltip.st.css\";-st-default:Tooltip;}\n.root Tooltip{}\n:import {-st-from: \"./dist/src/components/toggle-switch/ToggleSwitch.st.css\";-st-default:ToggleSwitch;}\n.root ToggleSwitch{}\n:import {-st-from: \"./dist/src/components/toggle-switch/ToggleSwitchColor.st.css\";-st-default:ToggleSwitchColor;}\n.root ToggleSwitchColor{}\n:import {-st-from: \"./dist/src/components/toggle-switch/ToggleSwitchLayout.st.css\";-st-default:ToggleSwitchLayout;}\n.root ToggleSwitchLayout{}\n:import {-st-from: \"./dist/src/components/toggle-switch/ToggleSwitchStyle.st.css\";-st-default:ToggleSwitchStyle;}\n.root ToggleSwitchStyle{}\n:import {-st-from: \"./dist/src/components/time-picker/Tickers.st.css\";-st-default:Tickers;}\n.root Tickers{}\n:import {-st-from: \"./dist/src/components/time-picker/TimePicker.st.css\";-st-default:TimePicker;}\n.root TimePicker{}\n:import {-st-from: \"./dist/src/components/thumbnail/Thumbnail.st.css\";-st-default:Thumbnail;}\n.root Thumbnail{}\n:import {-st-from: \"./dist/src/components/tags-list/Tag.st.css\";-st-default:Tag;}\n.root Tag{}\n:import {-st-from: \"./dist/src/components/tags-list/TagsList.st.css\";-st-default:TagsList;}\n.root TagsList{}\n:import {-st-from: \"./dist/src/components/slider/Slider.st.css\";-st-default:Slider;}\n.root Slider{}\n:import {-st-from: \"./dist/src/components/signature-input/title/Title.st.css\";-st-default:Title;}\n.root Title{}\n:import {-st-from: \"./dist/src/components/signature-input/signing-pad/SigningPad.st.css\";-st-default:SigningPad;}\n.root SigningPad{}\n:import {-st-from: \"./dist/src/components/signature-input/clear-button/ClearButton.st.css\";-st-default:ClearButton;}\n.root ClearButton{}\n:import {-st-from: \"./dist/src/components/radio-button/RadioButton.st.css\";-st-default:RadioButton;}\n.root RadioButton{}\n:import {-st-from: \"./dist/src/components/popover-next/components/Loader.st.css\";-st-default:Loader;}\n.root Loader{}\n:import {-st-from: \"./dist/src/components/popover/Popover.st.css\";-st-default:Popover;}\n.root Popover{}\n:import {-st-from: \"./dist/src/components/pagination/Pagination.st.css\";-st-default:Pagination;}\n.root Pagination{}\n:import {-st-from: \"./dist/src/components/pagination/PaginationTest.st.css\";-st-default:PaginationTest;}\n.root PaginationTest{}\n:import {-st-from: \"./dist/src/components/nav-stepper/NavStep.st.css\";-st-default:NavStep;}\n.root NavStep{}\n:import {-st-from: \"./dist/src/components/nav-stepper/NavStepper.st.css\";-st-default:NavStepper;}\n.root NavStepper{}\n:import {-st-from: \"./dist/src/components/menu-item/menu-item.st.css\";-st-default:MenuItem;}\n.root MenuItem{}\n:import {-st-from: \"./dist/src/components/linear-progress-bar/LinearProgressBar.st.css\";-st-default:LinearProgressBar;}\n.root LinearProgressBar{}\n:import {-st-from: \"./dist/src/components/label-with-options/LabelWithOptions.st.css\";-st-default:LabelWithOptions;}\n.root LabelWithOptions{}\n:import {-st-from: \"./dist/src/components/input-with-options/InputWithOptions.st.css\";-st-default:InputWithOptions;}\n.root InputWithOptions{}\n:import {-st-from: \"./dist/src/components/input/Input.st.css\";-st-default:Input;}\n.root Input{}\n:import {-st-from: \"./dist/src/components/image/image.st.css\";-st-default:Image;}\n.root Image{}\n:import {-st-from: \"./dist/src/components/icon-with-options/IconWithOptions.st.css\";-st-default:IconWithOptions;}\n.root IconWithOptions{}\n:import {-st-from: \"./dist/src/components/horizontal-menu/HorizontalMenu.st.css\";-st-default:HorizontalMenu;}\n.root HorizontalMenu{}\n:import {-st-from: \"./dist/src/components/horizontal-menu/horizontal-menu-item/HorizontalMenuItem.st.css\";-st-default:HorizontalMenuItem;}\n.root HorizontalMenuItem{}\n:import {-st-from: \"./dist/src/components/horizontal-menu/horizontal-menu-grid-layout/HorizontalMenuGridLayout.st.css\";-st-default:HorizontalMenuGridLayout;}\n.root HorizontalMenuGridLayout{}\n:import {-st-from: \"./dist/src/components/horizontal-menu/horizontal-menu-columns-layout/HorizontalMenuColumnsLayout.st.css\";-st-default:HorizontalMenuColumnsLayout;}\n.root HorizontalMenuColumnsLayout{}\n:import {-st-from: \"./dist/src/components/file-picker-button/FilePickerButton.st.css\";-st-default:FilePickerButton;}\n.root FilePickerButton{}\n:import {-st-from: \"./dist/src/components/ellipsis-tooltip/Ellipsis.st.css\";-st-default:Ellipsis;}\n.root Ellipsis{}\n:import {-st-from: \"./dist/src/components/ellipsis-tooltip/EllipsisTooltip.st.css\";-st-default:EllipsisTooltip;}\n.root EllipsisTooltip{}\n:import {-st-from: \"./dist/src/components/ellipsis-tooltip/tests/EllipsisTooltipTests.st.css\";-st-default:EllipsisTooltipTests;}\n.root EllipsisTooltipTests{}\n:import {-st-from: \"./dist/src/components/dropdown-option/DropdownOption.st.css\";-st-default:DropdownOption;}\n.root DropdownOption{}\n:import {-st-from: \"./dist/src/components/dropdown-content/DropdownContent.st.css\";-st-default:DropdownContent;}\n.root DropdownContent{}\n:import {-st-from: \"./dist/src/components/dropdown/Dropdown.st.css\";-st-default:Dropdown;}\n.root Dropdown{}\n:import {-st-from: \"./dist/src/components/deprecated/stylable-badge/Badge.st.css\";-st-default:Badge;}\n.root Badge{}\n:import {-st-from: \"./dist/src/components/deprecated/stylable-badge/BadgeStyle.st.css\";-st-default:BadgeStyle;}\n.root BadgeStyle{}\n:import {-st-from: \"./dist/src/components/deprecated/label/Label.st.css\";-st-default:Label;}\n.root Label{}\n:import {-st-from: \"./dist/src/components/deprecated/divider/Divider.st.css\";-st-default:Divider;}\n.root Divider{}\n:import {-st-from: \"./dist/src/components/deprecated/button/Button.st.css\";-st-default:Button;}\n.root Button{}\n:import {-st-from: \"./dist/src/components/deprecated/button/ButtonStyle.st.css\";-st-default:ButtonStyle;}\n.root ButtonStyle{}\n:import {-st-from: \"./dist/src/components/circular-progress-bar/CircularProgressBar.st.css\";-st-default:CircularProgressBar;}\n.root CircularProgressBar{}\n:import {-st-from: \"./dist/src/components/checkbox/Checkbox.st.css\";-st-default:Checkbox;}\n.root Checkbox{}\n:import {-st-from: \"./dist/src/components/captcha/Captcha.st.css\";-st-default:Captcha;}\n.root Captcha{}\n:import {-st-from: \"./dist/src/components/button-next/button-next.st.css\";-st-default:ButtonNext;}\n.root ButtonNext{}\n:import {-st-from: \"./dist/src/components/avatar/avatar.st.css\";-st-default:Avatar;}\n.root Avatar{}\n:import {-st-from: \"./dist/src/components/autocomplete/Autocomplete.st.css\";-st-default:Autocomplete;}\n.root Autocomplete{}\n:import {-st-from: \"./dist/src/components/address-input/AddressInput.st.css\";-st-default:AddressInput;}\n.root AddressInput{}\n\n  :import {-st-from: \"./dist/src/components/popover/Popover.st.css\";-st-named: arrow as Popover_arrow, withArrow as Popover_withArrow, popoverContent as Popover_popoverContent;}\n  .root .Popover_arrow {}\n  .root .Popover_withArrow {}\n  .root .Popover_popoverContent {}\n  "
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/captcha/Captcha.st.css": {
      "metadata": {
        "namespace": "captcha2647478683",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/captcha/Captcha.st.css\" */\n.root {\n    -st-states: loaded(boolean);\n    /* we set this to relevant so we can position the hidden checkbox(root .checkbox) relatie to the captcha */\n    position: relative;\n}\n\n.loaderWrapper {\n\n}\n\n.captcha {\n\n}\n\n.root:loaded .captcha {\n    display: block;\n}\n\n.root:loaded .loaderWrapper {\n    display: none;\n}\n\n.root .captcha {\n    display: none;\n}\n/* a hidden check box that will give the captcha a required input element capabilities */\n.root .requiredField {\n    position: absolute;\n    opacity : 0.0;\n    bottom: 0;\n    left: 0;\n    /*avoid user clicking on this hidden checkbox*/\n    -webkit-user-select: none; /* Safari 3.1+ */\n    -moz-user-select: none; /* Firefox 2+ */\n    -ms-user-select: none; /* IE 10+ */\n    user-select: none; /* Standard syntax */\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/linear-progress-bar/LinearProgressBar.st.css": {
      "metadata": {
        "namespace": "linearprogressbar2894776134",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/linear-progress-bar/LinearProgressBar.st.css\" */\n.root {\n  -st-states: error, success;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.progressIndicationSection {\n  position: relative;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.barContainer {\n  width: 100%;\n  position: relative;\n  height: 100%;\n}\n\n.barBackground, .barForeground{\n  top: 50%;\n  transform: translateY(-50%);\n  position: absolute;\n}\n\n.barBackground {\n  width: 100%;\n}\n\n.indicationContainer {}\n\n.progressPercentage {}"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/input-with-options/InputWithOptions.st.css": {
      "metadata": {
        "namespace": "inputwithoptions2222937164",
        "depth": 4
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/input-with-options/InputWithOptions.st.css\" */\n:import {\n  -st-from: \"../dropdown/Dropdown.st.css\";\n  -st-default: Dropdown;\n}\n\n:import {\n  -st-from: \"../input/Input.st.css\";\n  -st-default: Input;\n}\n\n.root {\n  -st-extends: Dropdown;\n}\n\n.inputComponent {\n  -st-extends: Input;\n}"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/deprecated/divider/Divider.st.css": {
      "metadata": {
        "namespace": "divider3544298721",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/deprecated/divider/Divider.st.css\" */\n:vars {\n  /** Height of the divider */\n  dividerHeight: 1px;\n  /** Background color of the divider */\n  dividerBackgroundColor: black;\n  /** Opacity of the divider */\n  dividerOpacity: initial;\n  /** Margin top of the divider */\n  dividerMarginTop: initial;\n  /** Margin bottom of the divider */\n  dividerMarginBottom: initial;\n}\n\n.root {\n  -st-states: vertical, customDivider;\n}\n\n.root:customDivider {\n  reset: all;\n}\n\n.root:not(:customDivider) {\n  height: value(dividerHeight);\n  background-color: value(dividerBackgroundColor);\n  opacity: value(dividerOpacity);\n  margin-top: value(dividerMarginTop);\n  margin-bottom: value(dividerMarginBottom);\n}\n\n.root:vertical {\n  height: auto;\n  width: value(dividerHeight);\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/button-next/button-next.st.css": {
      "metadata": {
        "namespace": "buttonnext934096820",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/button-next/button-next.st.css\" */\n:import {\n  -st-from: \"../../hocs/Focusable/Focusable.st.css\";\n  -st-default: Focusable;\n}\n\n.root {\n  -st-states: disabled;\n  -st-extends: Focusable;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.content {}\n\n.prefix {\n  flex-shrink: 0;\n}\n\n.suffix {\n  flex-shrink: 0;\n}\n\n.root:disabled {\n  cursor: default;\n}\n\n/*\n  NOTE: This fixes issues when disabled button is used with a Tooltip. The root issue\n  is that browsers do not fire a mouseleave event for a disabled button. More details:\n  https://github.com/facebook/react/issues/4251\n*/\n.root[disabled] {\n  pointer-events: none;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/dist/src/components/ClearButton/ClearButton.st.css": {
      "metadata": {
        "namespace": "clearbutton3731144049",
        "depth": 1
      },
      "content": ":vars {\n  clearButtonColor: rgba(0, 0, 0, 0.6);\n}\n\n.root {\n  margin: 0 12px;\n  padding: 0;\n  box-sizing: border-box;\n  text-align: center;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  color: value(clearButtonColor);\n  opacity: 0.6;\n  padding: 0 3px;\n}\n\n\n.root:focus, .root:active, .root:hover {\n  color: rgba(0, 0, 0, 1);\n  opacity: 1;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/dist/src/components/RatioBox/RatioBox.st.css": {
      "metadata": {
        "namespace": "ratiobox2012394676",
        "depth": 1
      },
      "content": "\n.ratio {\n  display: inline-block;\n  position: relative;\n  width: var(--width);\n  height: var(--height);\n}\n\n.ratioElement {\n  display: block;\n  width: var(--width);\n  height: var(--height);\n  visibility: hidden;\n  text-align: left;\n}\n\n.children {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%)\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/dist/src/components/ImageCover/ImageCover.st.css": {
      "metadata": {
        "namespace": "imagecover243152474",
        "depth": 1
      },
      "content": ".root {\n  width: 100%;\n  height: 100%;\n  background-position: 50%;\n  background-size: cover;\n\n  -st-states: loading, placeholder;\n}\n\n.root::before {\n  content: '';\n  display: block;\n  padding-top: calc(3 / 4 * 100%);\n}\n\n.root:placeholder {\n  /*\n    workaround for misconfigured `svg-url-loader` in yoshi@4\n    see also:\n      https://github.com/bhovhannes/svg-url-loader/issues/151\n      https://github.com/wix/yoshi/blob/b8feb9ac104e46eb7c54c6564d666d43058b8f60/packages/yoshi/config/webpack.config.js#L524\n  */\n  /* background-image: url(../../assets/placeholder.svg); */\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzYiIGhlaWdodD0iMTI0IiB2aWV3Qm94PSIwIDAgMTc2IDEyNCI+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxwYXRoIGZpbGw9IiM5REE1QUYiIGQ9Ik0wIDBoMTc2djEyNEgweiIvPgogICAgPHBhdGggZmlsbD0iI0Q3RENFMiIgZD0iTTk5LjcyMSA0OEgxMDlhNCA0IDAgMCAxIDQgNHYyNmE0IDQgMCAwIDEtNCA0SDY4YTQgNCAwIDAgMS00LTRWNTJhNCA0IDAgMCAxIDQtNGg5LjI5NGwxLjU1LTUuMjgyYTEgMSAwIDAgMSAuOTYtLjcxOEg5Ny4yOWExIDEgMCAwIDEgLjk2NC43MzJMOTkuNzIgNDh6TTg4LjUgNzUuNUM5NC4yOTkgNzUuNSA5OSA3MC43OTkgOTkgNjVzLTQuNzAxLTEwLjUtMTAuNS0xMC41Uzc4IDU5LjIwMSA3OCA2NXM0LjcwMSAxMC41IDEwLjUgMTAuNXoiLz4KICA8L2c+Cjwvc3ZnPgo=\");\n}\n\n.root:loading {\n  position: relative;\n  overflow: hidden;\n  background-color: #eeeeee;\n}\n\n.root:loading::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-image: linear-gradient(\n    to right,\n    rgba(225, 225, 225, 0),\n    #e0e0e0 51%,\n    rgba(231, 231, 231, 0)\n  );\n  animation-name: loading;\n  animation-duration: 1.5s;\n  animation-iteration-count: infinite;\n}\n\n@keyframes loading {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/dist/src/components/Thumbnail/Thumbnail.st.css": {
      "metadata": {
        "namespace": "thumbnail1780107866",
        "depth": 2
      },
      "content": ".root {\n  flex-shrink: 0;\n  width: 200px;\n  height: 150px;\n  display: inline-block;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/dist/src/components/Title/Title.st.css": {
      "metadata": {
        "namespace": "title841348506",
        "depth": 1
      },
      "content": ":vars {\n  black: #000;\n}\n\n.root {\n  display: inline-block;\n  text-decoration: none;\n  font-weight: bold;\n  color: value(black);\n  font-size: 20px;\n  max-width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  align-self: flex-start;\n}\n\n.root:hover {\n  text-decoration: underline;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/dist/src/components/Description/Description.st.css": {
      "metadata": {
        "namespace": "description2059507781",
        "depth": 1
      },
      "content": ".root {\n  font-size: 14px;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/address-input/AddressInput.st.css": {
      "metadata": {
        "namespace": "addressinput1283517680",
        "depth": 5
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/address-input/AddressInput.st.css\" */\n:import {\n    -st-from: \"../input-with-options/InputWithOptions.st.css\";\n    -st-default: InputWithOptions;\n}\n\n.root {\n    -st-extends: InputWithOptions;\n}\n\n.option {\n    display: flex;\n}\n\n.iconWrapper {\n    display: flex;\n    align-items: center;\n    padding: 0 6px;\n}\n\n.icon {\n\n}\n\n.optionContent {\n    flex: 1;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/deprecated/divider/Divider.st.css": {
      "metadata": {
        "namespace": "divider1911414647",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/deprecated/divider/Divider.st.css\" */\n:vars {\n  /** Height of the divider */\n  dividerHeight: 1px;\n  /** Background color of the divider */\n  dividerBackgroundColor: black;\n  /** Opacity of the divider */\n  dividerOpacity: initial;\n  /** Margin top of the divider */\n  dividerMarginTop: initial;\n  /** Margin bottom of the divider */\n  dividerMarginBottom: initial;\n}\n\n.root {\n  -st-states: vertical, customDivider;\n}\n\n.root:customDivider {\n  reset: all;\n}\n\n.root:not(:customDivider) {\n  height: value(dividerHeight);\n  background-color: value(dividerBackgroundColor);\n  opacity: value(dividerOpacity);\n  margin-top: value(dividerMarginTop);\n  margin-bottom: value(dividerMarginBottom);\n}\n\n.root:vertical {\n  height: auto;\n  width: value(dividerHeight);\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/signature-input/title/Title.st.css": {
      "metadata": {
        "namespace": "title1758655975",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/signature-input/title/Title.st.css\" */\n.root {\n  word-break: break-all;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/signature-input/signing-pad/SigningPad.st.css": {
      "metadata": {
        "namespace": "signingpad2933362031",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/signature-input/signing-pad/SigningPad.st.css\" */\n.visuallyHidden {\n  position: absolute;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  white-space: nowrap;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/signature-input/clear-button/ClearButton.st.css": {
      "metadata": {
        "namespace": "clearbutton2532503896",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/signature-input/clear-button/ClearButton.st.css\" */\n.root {\n  word-break: break-all;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/button-next/button-next.st.css": {
      "metadata": {
        "namespace": "buttonnext2554334148",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/button-next/button-next.st.css\" */\n:import {\n  -st-from: \"../../hocs/Focusable/Focusable.st.css\";\n  -st-default: Focusable;\n}\n\n.root {\n  -st-states: disabled;\n  -st-extends: Focusable;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.content {}\n\n.prefix {\n  flex-shrink: 0;\n}\n\n.suffix {\n  flex-shrink: 0;\n}\n\n.root:disabled {\n  cursor: default;\n}\n\n/*\n  NOTE: This fixes issues when disabled button is used with a Tooltip. The root issue\n  is that browsers do not fire a mouseleave event for a disabled button. More details:\n  https://github.com/facebook/react/issues/4251\n*/\n.root[disabled] {\n  pointer-events: none;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/tags-list/TagsList.st.css": {
      "metadata": {
        "namespace": "tagslist2686010025",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/tags-list/TagsList.st.css\" */\n.root {\n  display: flex;\n  flex-flow: wrap;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/tags-list/Tag.st.css": {
      "metadata": {
        "namespace": "tag1994215249",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/tags-list/Tag.st.css\" */\n.tag {\n  cursor: pointer;\n  width: auto;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow-x: hidden;\n  user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\n.tag * {\n  cursor: pointer;\n}\n\n.tagInput {\n  display: none;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/editor-elements-library/index.st.css": {
      "metadata": {
        "namespace": "index2266569317",
        "depth": 3
      },
      "content": "\n:import {-st-from: \"./dist/stylable/device.st.css\";-st-default:Device;}\n.root Device{}\n:import {-st-from: \"./dist/components/StylableButton/styles/StylableButton.st.css\";-st-default:StylableButton;}\n.root StylableButton{}\n:import {-st-from: \"./dist/components/Breadcrumbs/viewer/style/Breadcrumbs.st.css\";-st-default:Breadcrumbs;}\n.root Breadcrumbs{}\n:import {-st-from: \"./dist/components/BoltComponent/viewer/style/BoltComponent.st.css\";-st-default:BoltComponent;}\n.root BoltComponent{}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/dist/src/components/SearchBox/focusRings.st.css": {
      "metadata": {
        "namespace": "focusrings1524789696",
        "depth": 1
      },
      "content": ".focusRing {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 3px #116dff;\n  z-index: 999;\n}\n\n.insetFocusRing {\n  box-shadow: inset 0 0 0 2px #116dff, inset 0 0 0 3px #fff;\n  z-index: 999;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/editor-elements-library/dist/components/StylableButton/styles/StylableButton.st.css": {
      "metadata": {
        "namespace": "stylablebutton4141257359",
        "depth": 1
      },
      "content": ":import {\n  -st-from: './formatter.js';\n  -st-named: LayoutFlexChildSpacing;\n}\n\n.root {\n  -archetype: box;\n  /* -st-states: error, disabled;  - StylableButton states are currently commented out in Bolt also */\n  cursor: pointer;\n  border: none;\n  display: block;\n  min-width: 10px;\n  min-height: 10px;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 0px;\n}\n\n.root[disabled] {\n  pointer-events: none;\n}\n\n.link {\n  -archetype: box;\n  text-decoration: none;\n  box-sizing: border-box;\n  color: black;\n}\n\n.container {\n  display: flex;\n  flex-basis: auto;\n  justify-content: center;\n  flex-direction: row;\n  flex-grow: 1;\n  align-items: center;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n  transition: all 0.2s ease, visibility 0s;\n}\n\n.label {\n  -archetype: text;\n  -controller-part-type: LayoutChildDisplayDropdown,\n    LayoutFlexChildSpacing(first);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-width: 1.8em;\n  max-width: 100%;\n  transition: inherit;\n}\n\n.icon {\n  -archetype: icon;\n  -controller-part-type: LayoutChildDisplayDropdown,\n    LayoutFlexChildSpacing(last);\n  min-width: 1px;\n  height: 50px;\n  transition: inherit;\n  flex-shrink: 0;\n}\n\n.icon > div,\n.icon svg {\n  width: inherit;\n  height: inherit;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/common/a11y.st.css": {
      "metadata": {
        "namespace": "a11y1891725589",
        "depth": 1
      },
      "content": ".srOnly {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    border: 0;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/address-input/AddressInput.st.css": {
      "metadata": {
        "namespace": "addressinput2359534611",
        "depth": 5
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/address-input/AddressInput.st.css\" */\n:import {\n    -st-from: \"../input-with-options/InputWithOptions.st.css\";\n    -st-default: InputWithOptions;\n}\n\n.root {\n    -st-extends: InputWithOptions;\n}\n\n.option {\n    display: flex;\n}\n\n.iconWrapper {\n    display: flex;\n    align-items: center;\n    padding: 0 6px;\n}\n\n.icon {\n\n}\n\n.optionContent {\n    flex: 1;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/autocomplete/Autocomplete.st.css": {
      "metadata": {
        "namespace": "autocomplete2004522957",
        "depth": 5
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/autocomplete/Autocomplete.st.css\" */\n:import {\n  -st-from: \"../input-with-options/InputWithOptions.st.css\";\n  -st-default: InputWithOptions;\n}\n\n:import {\n  -st-from: \"../deprecated/divider/Divider.st.css\";\n  -st-default: Divider;\n}\n\n.root {\n  -st-extends: InputWithOptions;\n  -st-states: disabled;\n}\n\n.divider {\n  -st-extends: Divider;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/avatar/avatar.st.css": {
      "metadata": {
        "namespace": "avatar1784568423",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/avatar/avatar.st.css\" */\n:import {\n  -st-from: \"../../hocs/Focusable/Focusable.st.css\";\n  -st-default: Focusable;\n}\n\n.root {\n  -st-states: imgLoaded(boolean), contentType(enum(text, placeholder, image));\n  -st-extends: Focusable;\n}\n\n.content {}\n\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/captcha/Captcha.st.css": {
      "metadata": {
        "namespace": "captcha3860070219",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/captcha/Captcha.st.css\" */\n.root {\n    -st-states: loaded(boolean);\n    /* we set this to relevant so we can position the hidden checkbox(root .checkbox) relatie to the captcha */\n    position: relative;\n}\n\n.loaderWrapper {\n\n}\n\n.captcha {\n\n}\n\n.root:loaded .captcha {\n    display: block;\n}\n\n.root:loaded .loaderWrapper {\n    display: none;\n}\n\n.root .captcha {\n    display: none;\n}\n/* a hidden check box that will give the captcha a required input element capabilities */\n.root .requiredField {\n    position: absolute;\n    opacity : 0.0;\n    bottom: 0;\n    left: 0;\n    /*avoid user clicking on this hidden checkbox*/\n    -webkit-user-select: none; /* Safari 3.1+ */\n    -moz-user-select: none; /* Firefox 2+ */\n    -ms-user-select: none; /* IE 10+ */\n    user-select: none; /* Standard syntax */\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/checkbox/Checkbox.st.css": {
      "metadata": {
        "namespace": "checkbox970347674",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/checkbox/Checkbox.st.css\" */\n@namespace \"Checkbox\";\n\n.root {\n    -st-states: checked, disabled, indeterminate, readonly, focus, focus-visible, error;\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n}\n\n.root:disabled {\n    pointer-events: none;\n}\n\n.box {}\n\n.nativeCheckbox {\n    margin: 0;\n    position: absolute;\n    cursor: inherit;\n    pointer-events: none;\n    opacity: 0;\n}\n\n.childContainer {\n    display: inline;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/circular-progress-bar/CircularProgressBar.st.css": {
      "metadata": {
        "namespace": "circularprogressbar1907238557",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/circular-progress-bar/CircularProgressBar.st.css\" */\n.root {\n  -st-states: error, success;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.label, .progressIndicator {\n  position: relative;\n  height: 100%;\n}\n\n.indicationIconContainer,\n.statusIndicator {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.arcsContainer {\n  width: 54px;\n  position: relative;\n  height: 54px;\n}\n\n.foreArc,\n.backArc {\n  width: 100%;\n  height: 100%;\n  fill: none;\n  stroke-linecap: round;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/deprecated/button/Button.st.css": {
      "metadata": {
        "namespace": "button2420297485",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/deprecated/button/Button.st.css\" */\n.root {\n    -st-states: disabled;\n    display: inline-flex;\n    align-items: center;\n    position: relative;\n    outline: none;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/deprecated/button/ButtonStyle.st.css": {
      "metadata": {
        "namespace": "buttonstyle771786257",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/deprecated/button/ButtonStyle.st.css\" */\n:import {\n    -st-from: \"./Button.st.css\";\n    -st-default: Button;\n}\n\n.root {\n    height: 16px;\n    background-color: red;\n}\n\n:vars {\n    height: initial;\n    padding: 0px 23px;\n    borderRadius: 0;\n\n    fontFamily: \"HelveticaNeueW01-45Ligh\", \"HelveticaNeueW02-45Ligh\", \"HelveticaNeueW10-45Ligh\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", \"メイリオ; meiryo\", \"ヒラギノ角ゴ pro w3\", \"hiragino kaku gothic pro\", \"sans-serif\";\n    fontSize: 16px;\n    lineHeight: 24px;\n    fontStyle: normal;\n    fontWeight: normal;\n    color: black;\n    backgroundColor: grey;\n    borderColor: black;\n    disabledBackgroundColor: black;\n    disabledBorderColor: grey;\n    disabledColor: grey;\n}\n\n.root {\n    -st-extends: Button;\n    height: value(height);\n    padding: value(padding);\n    border-radius: value(borderRadius);\n    font-family: value(fontFamily);\n    font-size: value(fontSize);\n    line-height: value(lineHeight);\n    font-style: value(fontStyle);\n    font-weight: value(fontWeight);\n    color: value(color);\n    background-color: value(backgroundColor);\n    border-color: value(borderColor);\n}\n\n.root:disabled {\n    background-color: value(disabledBackgroundColor);\n    border-color: value(disabledBorderColor);\n    color: value(disabledColor);\n}\n\n.root:hover {\n    background-color: value(backgroundColor);\n    border-color: value(borderColor);\n    color: value(color);\n}\n\n.root:active {\n    background-color: value(backgroundColor);\n    border-color: value(borderColor);\n    color: value(color);\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/deprecated/label/Label.st.css": {
      "metadata": {
        "namespace": "label226775503",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/deprecated/label/Label.st.css\" */\n:import {\n    -st-from: '../../../mixins/mixins.st.css';\n    -st-named: ellipsisMixin;\n}\n\n\n.root {\n    -st-states: ellipsis, disabled;\n}\n\n.root:ellipsis {\n  -st-mixin: ellipsisMixin;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/deprecated/stylable-badge/Badge.st.css": {
      "metadata": {
        "namespace": "badge3862216636",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/deprecated/stylable-badge/Badge.st.css\" */\n.root {\n    cursor: default;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/deprecated/stylable-badge/BadgeStyle.st.css": {
      "metadata": {
        "namespace": "badgestyle607280232",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/deprecated/stylable-badge/BadgeStyle.st.css\" */\n:import {\n    -st-from: \"./Badge.st.css\";\n    -st-default: Badge;\n  }\n  \n:vars {\n    backgroundColor: grey;\n    borderColor: grey;\n    color: white;\n}\n\n.root {\n    -st-extends: Badge;\n    height: 24px;\n    padding: 4px 12px;\n    \n    border: 1px solid;\n    border-radius: 2px;\n    border-color: value(borderColor);\n    color: value(color);\n    \n    background: value(backgroundColor);\n    \n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n\n    line-height: 1;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/ellipsis-tooltip/Ellipsis.st.css": {
      "metadata": {
        "namespace": "ellipsis3127916336",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/ellipsis-tooltip/Ellipsis.st.css\" */\n.root {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%;\n  vertical-align: bottom;\n}"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/ellipsis-tooltip/EllipsisTooltip.st.css": {
      "metadata": {
        "namespace": "ellipsistooltip3818090756",
        "depth": 3
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/ellipsis-tooltip/EllipsisTooltip.st.css\" */\n:import {\n  -st-from: \"../tooltip/Tooltip.st.css\";\n  -st-default: Tooltip;\n}\n\n.root {\n  -st-extends: Tooltip;\n  display: inline;\n  overflow: hidden;\n}\n\n.root::popoverElement {\n  max-width: 100%;\n  line-height: initial;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/ellipsis-tooltip/tests/EllipsisTooltipTests.st.css": {
      "metadata": {
        "namespace": "ellipsistooltiptests1522369358",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/ellipsis-tooltip/tests/EllipsisTooltipTests.st.css\" */\n.withDifferentWhiteSpace {\n  white-space: pre-line;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/file-picker-button/FilePickerButton.st.css": {
      "metadata": {
        "namespace": "filepickerbutton856361972",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/file-picker-button/FilePickerButton.st.css\" */\n:import {\n    -st-from: '../../common/a11y.st.css';\n    -st-named: srOnly;\n}\n\n.root {\n    -st-states: required, disabled;\n}\n\n.fileInput {\n    -st-mixin: srOnly;\n}\n\n.chooseFileButton {}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/horizontal-menu/HorizontalMenu.st.css": {
      "metadata": {
        "namespace": "horizontalmenu2267501474",
        "depth": 3
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/horizontal-menu/HorizontalMenu.st.css\" */\n:import {\n  -st-from: \"./horizontal-menu-item/HorizontalMenuItem.st.css\";\n  -st-default: HorizontalMenuItem;\n}\n\n:import {\n  -st-from: \"./horizontal-menu-grid-layout/HorizontalMenuGridLayout.st.css\";\n  -st-default: HorizontalMenuGridLayout;\n}\n\n:import {\n  -st-from: \"./horizontal-menu-columns-layout/HorizontalMenuColumnsLayout.st.css\";\n  -st-default: HorizontalMenuColumnsLayout;\n}\n\n.root {\n  box-sizing: border-box;\n  position: relative;\n  transition: inherit;\n}\n\n.menu {\n  box-sizing: border-box;\n\n  display: flex;\n  flex-wrap: wrap;\n\n  height: 100%;\n\n  margin: 0;\n  padding: 0;\n\n  list-style: none;\n}\n\n/* menu item */\n.menuItem {\n  -st-extends: HorizontalMenuItem;\n}\n\n/* grid layout */\n.gridLayout {\n  -st-extends: HorizontalMenuGridLayout;\n}\n\n/* columns layout */\n.columnsLayout {\n  -st-extends: HorizontalMenuColumnsLayout;\n}\n\n.menu > .menuItem > .gridLayout {\n  position: absolute;\n}\n\n.menu > .menuItem > .columnsLayout {\n  position: absolute;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/horizontal-menu/horizontal-menu-columns-layout/HorizontalMenuColumnsLayout.st.css": {
      "metadata": {
        "namespace": "horizontalmenucolumnslayout140912300",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/horizontal-menu/horizontal-menu-columns-layout/HorizontalMenuColumnsLayout.st.css\" */\n:import {\n  -st-from: \"../horizontal-menu-item/HorizontalMenuItem.st.css\";\n  -st-default: HorizontalMenuItem;\n}\n\n.root {\n  -st-states: expandSize(enum(column)), columnsAlignment(enum(left, center, right, justify));\n\n  box-sizing: border-box;\n\n  z-index: 1;\n\n  display: none;\n  min-width: 100%;\n\n  flex: 1;\n\n  transition: inherit;\n}\n\n.root:expandSize(column) .listWrapper {\n  box-sizing: content-box;\n  width: max-content;\n}\n\n.root:columnsAlignment(left) {\n  justify-content: flex-start;\n}\n\n.root:columnsAlignment(center) {\n  justify-content: center;\n}\n\n.root:columnsAlignment(right) {\n  justify-content: flex-end;\n}\n\n.root:columnsAlignment(justify) > .listWrapper {\n  width: 100%;\n}\n\n.root[data-opened=\"true\"] {\n  display: flex;\n}\n\n.listWrapper {\n  margin: 0;\n  padding: 0;\n\n  list-style: none;\n}\n\n.menuItem {\n  -st-extends: HorizontalMenuItem;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/horizontal-menu/horizontal-menu-grid-layout/HorizontalMenuGridLayout.st.css": {
      "metadata": {
        "namespace": "horizontalmenugridlayout2965739949",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/horizontal-menu/horizontal-menu-grid-layout/HorizontalMenuGridLayout.st.css\" */\n:import {\n  -st-from: \"../horizontal-menu-item/HorizontalMenuItem.st.css\";\n  -st-default: HorizontalMenuItem;\n}\n\n.root {\n  -st-states: expandSize(enum(column));\n\n  box-sizing: border-box;\n\n  z-index: 1;\n\n  display: none;\n  min-width: 100%;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: stretch;\n\n  flex: 1;\n\n  transition: inherit;\n}\n\n.root:expandSize(column) {\n  box-sizing: content-box;\n  width: max-content;\n}\n\n.root[data-opened=\"true\"] {\n  display: flex;\n}\n\n.listWrapper {\n  display: flex;\n\n  margin: 0;\n  padding: 0;\n\n  list-style: none;\n}\n\n.menuItem {\n  -st-extends: HorizontalMenuItem;\n  flex: 1;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/horizontal-menu/horizontal-menu-item/HorizontalMenuItem.st.css": {
      "metadata": {
        "namespace": "horizontalmenuitem3896676203",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/horizontal-menu/horizontal-menu-item/HorizontalMenuItem.st.css\" */\n:import {\n  -st-from: \"../horizontal-menu-columns-layout/HorizontalMenuColumnsLayout.st.css\";\n  -st-default: HorizontalMenuColumnsLayout;\n}\n\n:import {\n  -st-from: \"../horizontal-menu-grid-layout/HorizontalMenuGridLayout.st.css\";\n  -st-default: HorizontalMenuGridLayout;\n}\n\n.root {\n  -st-states: expandSize(enum(column));\n\n  transition: inherit;\n  -webkit-column-break-inside: avoid; /* Chrome, Safari, Opera */\n  page-break-inside: avoid; /* Firefox */\n  break-inside: avoid; /* IE 10+ */\n}\n\n.root:expandSize(column) {\n  position: relative;\n}\n\n.menuItemLink {}\n\n.expandIcon {\n  display: inline-block;\n}\n\n.divider {\n  display: none;\n}\n\n.linkContainer {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/icon-with-options/IconWithOptions.st.css": {
      "metadata": {
        "namespace": "iconwithoptions414060506",
        "depth": 4
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/icon-with-options/IconWithOptions.st.css\" */\n:import {\n  -st-from: \"../dropdown/Dropdown.st.css\";\n  -st-default: Dropdown;\n}\n\n.root {\n  -st-extends: Dropdown;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/image/image.st.css": {
      "metadata": {
        "namespace": "image2935114817",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/image/image.st.css\" */\n.root {\n    -st-states: loadState(enum(loading, loaded, error));\n}\n\n.hiddenImage {\n    visibility: hidden;\n    width: 100%;\n    height: 100%;\n}\n\n.wrapper {\n    -st-extends: root;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/label-with-options/LabelWithOptions.st.css": {
      "metadata": {
        "namespace": "labelwithoptions3282245464",
        "depth": 4
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/label-with-options/LabelWithOptions.st.css\" */\n:import {\n  -st-from: \"../dropdown/Dropdown.st.css\";\n  -st-default: Dropdown;\n}\n\n:import {\n  -st-from: \"../dropdown-option/DropdownOption.st.css\";\n  -st-default: DropdownOption;\n}\n\n:import {\n  -st-from: \"../checkbox/Checkbox.st.css\";\n  -st-default: Checkbox;\n}\n\n:import {\n  -st-from: \"../deprecated/label/Label.st.css\";\n  -st-default: Label;\n}\n\n:import {\n  -st-from: \"../deprecated/divider/Divider.st.css\";\n  -st-default: Divider;\n}\n\n.root {\n  -st-extends: Dropdown;\n  -st-states: required, error, disabled, checkbox;\n}\n\n@custom-selector :--selected .root:checkbox DropdownOption:selected;\n\n:--selected {\n  background-color: white; \n}\n.selection {\n\n}\n\n.label {\n  -st-extends: Label;\n}\n\n.divider {\n  -st-extends: Divider;\n}\n\n.placeholder {\n}\n\n.optionContainer {\n  display: flex;\n}\n\n.checkbox {\n  -st-extends: Checkbox;\n  width: 1em;\n  height: 1em;\n  border: 1px solid black;\n}\n\n.checkbox:checked {\n  background: blue;\n}"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/linear-progress-bar/LinearProgressBar.st.css": {
      "metadata": {
        "namespace": "linearprogressbar3992740055",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/linear-progress-bar/LinearProgressBar.st.css\" */\n.root {\n  -st-states: error, success;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.progressIndicationSection {\n  position: relative;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.barContainer {\n  width: 100%;\n  position: relative;\n  height: 100%;\n}\n\n.barBackground, .barForeground{\n  top: 50%;\n  transform: translateY(-50%);\n  position: absolute;\n}\n\n.barBackground {\n  width: 100%;\n}\n\n.indicationContainer {}\n\n.progressPercentage {}"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/menu-item/menu-item.st.css": {
      "metadata": {
        "namespace": "menuitem2033423221",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/menu-item/menu-item.st.css\" */\n.root {\n  -st-states: selected, highlighted, disabled;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/nav-stepper/NavStep.st.css": {
      "metadata": {
        "namespace": "navstep2269313787",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/nav-stepper/NavStep.st.css\" */\n.root {\n    -st-states: active, visited, disabled;\n}\n\n.root:visited {\n    color: green;\n}\n\n.root:disabled {\n    color: grey;\n}\n\n.root:active {\n    color: blue;\n}"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/nav-stepper/NavStepper.st.css": {
      "metadata": {
        "namespace": "navstepper792495657",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/nav-stepper/NavStepper.st.css\" */\n:import {\n    -st-from: \"./NavStep.st.css\";\n    -st-default: NavStep;\n}\n.root {\n\n}\n.steps {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n}\n.step {\n    -st-extends: NavStep;\n}"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/pagination/Pagination.st.css": {
      "metadata": {
        "namespace": "pagination2435371183",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/pagination/Pagination.st.css\" */\n.button-common-mixin {\n    display: inline-flex;\n    flex-shrink: 0;\n}\n\n.root {\n    -st-states: disabled, error;\n    display: inline-flex;\n    user-select: none;\n}\n\n.navButton {\n    -st-mixin: button-common-mixin;\n    -st-states: disabled;\n}\n\n.navButton:not(:disabled) {\n    cursor: pointer;\n}\n\n.emptyButton {\n    -st-mixin: button-common-mixin;\n}\n\n.navButtonFirst {  order: 1;  }\n.navButtonPrevious,\n.emptyButtonPrevious{  order: 2;  }\n.navButtonNext,\n.emptyButtonNext{  order: 4;  }\n.navButtonLast {  order: 5;  }\n\n.pageStrip {\n    order: 3;\n    overflow-x: hidden;\n}\n\n.pageStripInner {\n    display: flex;\n}\n\n.pageStripTemplate {\n    height: 0;\n    overflow: hidden;\n}\n\n.pageButton {\n    -st-mixin: button-common-mixin;\n    -st-states: disabled;\n}\n\n.pageButton:not(:disabled) {\n    cursor: pointer;\n}\n\n.currentPage {\n    -st-mixin: button-common-mixin;\n}\n\n.gap {\n    -st-mixin: button-common-mixin;\n}\n\n.pageForm {\n    display: flex;\n    order: 3;\n}\n\n.compact {\n    -st-extends: pageForm;\n}\n\n.pageInput {}\n.totalPages {}\n.slash {}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/pagination/PaginationTest.st.css": {
      "metadata": {
        "namespace": "paginationtest3930351907",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/pagination/PaginationTest.st.css\" */\n:import {\n  -st-from: './Pagination.st.css';\n  -st-default: Pagination;\n}\n\n:vars {\n  materialBlueGray100: #CFD8DC;\n  materialBlueGray200: #B0BEC5;\n  materialBlueGray700: #455A64;\n  materialRed500: #f44336;\n}\n\n.button-common-mixin {\n  align-items: center;\n  justify-content: center;\n  margin: 5px;\n  padding: 5px;\n  min-width: 20px;\n  min-height: 20px;\n  font: 12px/1 Arial, sans-serif;\n  text-decoration: none;\n}\n\n.root {\n  -st-extends: Pagination;\n  color: value(materialBlueGray700);\n  background-color: #ECEFF1;\n}\n\n.root::navButton {\n  -st-mixin: button-common-mixin;\n  background-color: value(materialBlueGray100);\n}\n\n.root::navButton.disabled {\n  color: value(materialBlueGray200);\n  background-color: transparent;\n}\n\n.root::pageStripInner {\n  justify-content: center;\n}\n\n.root::pageButton {\n  -st-mixin: button-common-mixin;\n  background-color: value(materialBlueGray200);\n}\n\n.root::currentPage {\n  -st-mixin: button-common-mixin;\n  background-color: value(materialBlueGray700);\n  color: value(materialBlueGray100);\n}\n\n.root::gap {\n  -st-mixin: button-common-mixin;\n  background-color: value(materialBlueGray100);\n}\n\n.root::pageForm {\n  margin: 5px;\n  align-items: center;\n}\n\n.root::pageInput {\n  box-sizing: border-box;\n  height: 30px;\n  text-align: center;\n  font: 12px/1 Arial, sans-serif;\n  color: inherit;\n}\n\n.root:error::pageInput {\n  border-color: value(materialRed500);\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/popover-next/components/Loader.st.css": {
      "metadata": {
        "namespace": "loader2987041408",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/popover-next/components/Loader.st.css\" */\n.root div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  top: -10px;\n  left: 100%;\n  width:  20px;\n  height: 20px;\n  margin: 8px;\n  border: 3px solid grey;\n  border-radius: 50%;\n  animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: grey transparent transparent transparent;\n}\n\n.root div:nth-child(1) {\n  animation-delay: -0.45s;\n}\n\n.root div:nth-child(2) {\n  animation-delay: -0.3s;\n}\n\n.root div:nth-child(3) {\n  animation-delay: -0.15s;\n}\n\n@keyframes loader {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/radio-button/RadioButton.st.css": {
      "metadata": {
        "namespace": "radiobutton3513903083",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/radio-button/RadioButton.st.css\" */\n.root {\n  display: inline-block;\n  -st-states: disabled, checked, focused, focus-visible;\n}\n\n.icon {\n  cursor: pointer;\n  height: auto;\n}\n\n.label {}\n\n.root:checked::icon, .root:hover::icon {}\n\n.root:disabled {\n  filter: grayscale(75%);\n  opacity: 0.7;\n}\n\n.hiddenRadio {\n  position: absolute;\n  overflow: hidden;\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0;\n  opacity: 0;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/signature-input/clear-button/ClearButton.st.css": {
      "metadata": {
        "namespace": "clearbutton2629718448",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/signature-input/clear-button/ClearButton.st.css\" */\n.root {\n  word-break: break-all;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/signature-input/signing-pad/SigningPad.st.css": {
      "metadata": {
        "namespace": "signingpad866515450",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/signature-input/signing-pad/SigningPad.st.css\" */\n.visuallyHidden {\n  position: absolute;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  white-space: nowrap;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/signature-input/title/Title.st.css": {
      "metadata": {
        "namespace": "title3933275520",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/signature-input/title/Title.st.css\" */\n.root {\n  word-break: break-all;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/slider/Slider.st.css": {
      "metadata": {
        "namespace": "slider391913826",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/slider/Slider.st.css\" */\n:import {\n  -st-from: \"../../mixins/calc\";\n  -st-default: calc\n}\n\n:vars {\n  tickLineWidth: 1px;\n  tickLineHeight: 10px;\n  tickDotSize: 3px;\n  tickMarksGap: 12px;\n  tooltipGap: 10px;\n}\n\n.root {\n  -st-states: orientation(enum(vertical, horizontal)), tickMarksPosition(enum(normal, middle, across)), tickMarksShape(enum(line, dot)), dir(enum(ltr, rtl)), disabled;\n  position: relative;\n  box-sizing: border-box;\n  outline: none !important;\n}\n\n.root * {\n  box-sizing: border-box;\n}\n\n.tooltip {\n  -st-states: normalPosition, acrossPosition;\n  position: absolute;\n  background: #363636;\n  color: #fff;\n  padding: 4px 12px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 1.5;\n  border-radius: 3px;\n  white-space: nowrap;\n}\n\n.tooltip::after,\n.tooltip::before {\n  content: ' ';\n  position: absolute;\n  margin-left: -8px;\n  border-width: 8px;\n  border-style: solid;\n}\n\n.track {\n  z-index: 0;\n  width: 100%;\n  height: 25%;\n  position: relative;\n  cursor: pointer;\n  background: #dadada;\n  opacity: 1;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 2px solid transparent;\n  min-height: 1px;\n}\n\n.inner {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.trackFill {\n  position: absolute;\n  background: linear-gradient(to right, #4992e3, #70bff3);\n  height: 100%;\n  width: 100%;\n}\n\n.root:dir(rtl) .trackFill {\n  right: 0;\n}\n\n.root:orientation(vertical) .track {\n  width: 25%;\n  height: 100%;\n}\n\n.root:orientation(vertical) .trackFill {\n  background: linear-gradient(to top, #4992e3, #70bff3);\n}\n\n.thumb {\n  z-index: 2;\n  position: absolute;\n  cursor: pointer;\n}\n\n.thumbShape {\n  -st-states: shapeType(enum(circle, square, rectangle, bar));\n  width: 100%;\n  height: 100%;\n  background: green;\n  border: 2px solid blue;\n}\n\n.thumbShape:shapeType(circle) {\n  border-radius: 50%;\n}\n\n.thumbShape:shapeType(square) {\n  border-radius: 7px;\n}\n\n.thumbShape:shapeType(rectangle) {\n  border-radius: 37px;\n}\n\n.thumbShape:shapeType(bar) {\n  border-radius: 7px;\n}\n\n.root:orientation(horizontal) .tooltip:normalPosition {\n  left: 50%;\n  top: calc(-7px - value(tooltipGap));\n  transform: translate(-50%, -100%);\n}\n.root:orientation(horizontal) .tooltip:acrossPosition {\n  left: 50%;\n  bottom: calc(-7px - value(tooltipGap));\n  transform: translate(-50%, 100%);\n}\n.root:orientation(vertical) .tooltip:normalPosition {\n  left: 50%;\n  left: calc(-7px - value(tooltipGap));\n  transform: translate(-100%, -50%);\n}\n.root:orientation(vertical) .tooltip:acrossPosition {\n  right: calc(-7px - value(tooltipGap));\n  transform: translate(100%, -50%);\n}\n\n.root:orientation(horizontal) .tooltip:normalPosition::after,\n.root:orientation(horizontal) .tooltip:normalPosition::before {\n  border-color: #363636 transparent transparent transparent;\n  top: 100%; /* At the bottom of the tooltip */\n  left: 50%;\n}\n\n.root:orientation(horizontal) .tooltip:acrossPosition::after,\n.root:orientation(horizontal) .tooltip:acrossPosition::before {\n  border-color: transparent transparent #363636 transparent;\n  bottom: 100%; /* At the bottom of the tooltip */\n  left: 50%;\n}\n\n.root:orientation(vertical) .tooltip {\n  top: 50%;\n}\n\n.root:orientation(vertical) .tooltip::after,\n.root:orientation(vertical) .tooltip::before {\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.root:orientation(vertical) .tooltip:normalPosition::after,\n.root:orientation(vertical) .tooltip:normalPosition::before {\n  left: 100%;\n  margin-left: 0;\n  border-color: transparent transparent transparent #363636;\n}\n\n.root:orientation(vertical) .tooltip:acrossPosition::after,\n.root:orientation(vertical) .tooltip:acrossPosition::before {\n  right: 100%;\n  border-color: transparent #363636 transparent transparent;\n}\n\n.tick {\n  display: inline-block;\n  position: absolute;\n  background: #000;\n  cursor: pointer;\n}\n\n.root:orientation(horizontal):tickMarksShape(line) .tick {\n  width: value(tickLineWidth);\n  height: value(tickLineHeight);\n}\n\n.root:orientation(vertical):tickMarksShape(line) .tick {\n  height: value(tickLineWidth);\n  width: value(tickLineHeight);\n}\n\n.root:tickMarksShape(dot) .tick {\n  width: value(tickDotSize);\n  height: value(tickDotSize);\n  border-radius: 50%;\n}\n\n.root:orientation(horizontal) .tick {\n  transform: translateX(-50%);\n}\n.root:orientation(vertical) .tick {\n  transform: translateY(50%);\n}\n\n.root:orientation(horizontal):tickMarksPosition(normal) .tick {\n  bottom: 0;\n}\n\n.root:orientation(vertical):tickMarksPosition(normal) .tick {\n  right: 0;\n}\n\n.root:orientation(horizontal):tickMarksPosition(middle) .tick {\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n\n.root:orientation(vertical):tickMarksPosition(middle) .tick {\n  left: 50%;\n  transform: translateX(-50%) translateY(50%);\n}\n\n.root:orientation(horizontal):tickMarksPosition(across) .tick {\n  top: 0;\n}\n\n.root:orientation(vertical):tickMarksPosition(across) .tick {\n  left: 0;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/tags-list/Tag.st.css": {
      "metadata": {
        "namespace": "tag2399538658",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/tags-list/Tag.st.css\" */\n.tag {\n  cursor: pointer;\n  width: auto;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow-x: hidden;\n  user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\n.tag * {\n  cursor: pointer;\n}\n\n.tagInput {\n  display: none;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/tags-list/TagsList.st.css": {
      "metadata": {
        "namespace": "tagslist3414668212",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/tags-list/TagsList.st.css\" */\n.root {\n  display: flex;\n  flex-flow: wrap;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/thumbnail/Thumbnail.st.css": {
      "metadata": {
        "namespace": "thumbnail1763443812",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/thumbnail/Thumbnail.st.css\" */\n.root {\n  -st-states: selected, disabled;\n  position: relative;\n  border: 1px solid grey;\n}\n\n.selectedIcon {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n}\n\n:global([dir=\"rtl\"]) .selectedIcon {\n  left: -10px;\n  right: unset;\n}\n\n.root:disabled {\n  cursor: default;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/time-picker/Tickers.st.css": {
      "metadata": {
        "namespace": "tickers2658543404",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/time-picker/Tickers.st.css\" */\n.root {\n  display: inline-flex;\n  flex-direction: column;\n  vertical-align: top;\n}\n\n.ticker {\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-color: transparent;\n  padding: 0;\n  margin: 0;\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/time-picker/TimePicker.st.css": {
      "metadata": {
        "namespace": "timepicker348380634",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/time-picker/TimePicker.st.css\" */\n:import {\n  -st-from: \"../input/Input.st.css\";\n  -st-default: Input;\n}\n\n:import {\n  -st-from: \"./Tickers.st.css\";\n  -st-default: Tickers;\n}\n\n.root {\n  -st-extends: Input;\n  -st-states: focus;\n}\n\n.tickers {\n  -st-extends: Tickers;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/toggle-switch/ToggleSwitch.st.css": {
      "metadata": {
        "namespace": "toggleswitch416327894",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/toggle-switch/ToggleSwitch.st.css\" */\n.root {\n  /* Info on focus-visible: https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo */\n  -st-states: checked, disabled, focus, focus-visible;\n  display: inline-flex;\n  position: relative;\n}\n\n/* We're relying on the input to handle mouse events, that's why we need it to cover the entire component */\n.input {\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  cursor: inherit;\n}\n\n.track {}\n\n.knob {}\n\n.knobIcon {}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/toggle-switch/ToggleSwitchColor.st.css": {
      "metadata": {
        "namespace": "toggleswitchcolor299048572",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/toggle-switch/ToggleSwitchColor.st.css\" */\n:import {\n  -st-from: \"./ToggleSwitch.st.css\";\n  -st-default: ToggleSwitch;\n}\n\n:vars {\n  colorUnchecked: #999;\n  colorChecked: #999;\n  colorUncheckedHover: #999;\n  colorCheckedHover: #999;\n  colorDisabled: #999;\n}\n\n.root {\n  -st-extends: ToggleSwitch;\n}\n\n.root::track {\n  background-color: currentColor;\n}\n\n.root::knob {\n  background-color: white;\n}\n\n.root::knobIcon {\n  fill: currentColor;\n}\n\n.root {\n  color: value(colorUnchecked);\n}\n\n.root:hover {\n  color: value(colorUncheckedHover);\n}\n\n.root:checked {\n  color: value(colorChecked);\n}\n\n.root:checked:hover {\n  color: value(colorCheckedHover);\n}\n\n.root:disabled,\n.root:disabled:hover,\n.root:disabled:checked,\n.root:disabled:checked:hover {\n  color: value(colorDisabled);\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/toggle-switch/ToggleSwitchLayout.st.css": {
      "metadata": {
        "namespace": "toggleswitchlayout3395385782",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/toggle-switch/ToggleSwitchLayout.st.css\" */\n:import {\n  -st-from: \"./ToggleSwitch.st.css\";\n  -st-default: ToggleSwitch;\n}\n\n:import {\n  -st-from: \"../../mixins/calc\";\n  -st-default: calc\n}\n\n:vars {\n  rootWidth: 48px;\n  rootHeight: 24px;\n  trackWidth: value(rootWidth);\n  trackHeight: value(rootHeight);\n  knobWidth: calc(value(rootHeight) / 1.2);\n  knobHeight: calc(value(rootHeight) / 1.2);\n  knobMovementRange: calc(value(trackWidth)/2 - value(knobWidth)/2 - 1);\n}\n\n.root {\n  -st-extends: ToggleSwitch;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: value(rootWidth);\n  height: value(rootHeight);\n  box-sizing: border-box;\n}\n\n.root::track {\n  box-sizing: border-box;\n  width: value(trackWidth);\n  height: value(trackHeight);\n  border-radius: calc(value(trackHeight) / 2);\n}\n\n.root::knob {\n  position: absolute;\n  box-sizing: border-box;\n  width: value(knobWidth);\n  height: value(knobHeight);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: calc(value(knobHeight) / 2);\n  transform: translateX(calc(-1 * value(knobMovementRange)));\n}\n\n.root::knobIcon {\n  width: calc(value(knobHeight) / 2);\n  height: calc(value(knobHeight) / 2);\n}\n\n.root::knobIcon > svg {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.root:checked::knob,\n:global([dir=\"rtl\"]) .root::knob {\n  transform: translateX(value(knobMovementRange));\n}\n\n:global([dir=\"rtl\"]) .root:checked::knob {\n  transform: translateX(calc(-1 * value(knobMovementRange)));\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/toggle-switch/ToggleSwitchStyle.st.css": {
      "metadata": {
        "namespace": "toggleswitchstyle2146009653",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/toggle-switch/ToggleSwitchStyle.st.css\" */\n:import {\n  -st-from: \"./ToggleSwitch.st.css\";\n  -st-default: ToggleSwitch;\n}\n\n.root {\n  -st-extends: ToggleSwitch;\n}\n\n.root:not(:disabled) {\n  cursor: pointer;\n}\n\n.root::track {\n  transition: all 300ms ease;\n}\n\n.root::knob {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.6);\n  transition: all 300ms ease;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/tooltip/Tooltip.st.css": {
      "metadata": {
        "namespace": "tooltip6538498",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/tooltip/Tooltip.st.css\" */\n:import {\n  -st-from: \"../popover/Popover.st.css\";\n  -st-default: Popover;\n}\n\n.root {\n  -st-extends: Popover;\n}\n\n.root::popoverContent {\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/components/video/Video.st.css": {
      "metadata": {
        "namespace": "video3577878715",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/video/Video.st.css\" */\n.root {\n    position: relative;\n}\n\n.playerContainer {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    background-color: #000;\n}\n\n.responsiveMode {\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n}\n\n.playerContainer iframe {\n    height: 100%;\n    width: 100%;\n    visibility: visible;\n}\n\n.cover {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: #000 50% 50% no-repeat;\n    background-size: cover;\n    cursor: pointer;\n}\n\n.cover.transparentOverlay {\n    background: transparent;\n}\n\n.overlay {\n    display: flex;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n}\n\n.title {\n    margin: 0 15px 15px;\n    text-align: center;\n}\n\n.poster {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n}\n"
    },
    "/wix-ui-santa/node_modules/@wix/search-box-v2/node_modules/wix-ui-core/dist/src/mixins/mixins.st.css": {
      "metadata": {
        "namespace": "mixins4050676252",
        "depth": 1
      },
      "content": ".ellipsisMixin {\n    display: block;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/common/a11y.st.css": {
      "metadata": {
        "namespace": "a11y100255460",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../src/common/a11y.st.css\" */\n.srOnly {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    border: 0;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/autocomplete/Autocomplete.st.css": {
      "metadata": {
        "namespace": "autocomplete3946127165",
        "depth": 5
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/autocomplete/Autocomplete.st.css\" */\n:import {\n  -st-from: \"../input-with-options/InputWithOptions.st.css\";\n  -st-default: InputWithOptions;\n}\n\n:import {\n  -st-from: \"../deprecated/divider/Divider.st.css\";\n  -st-default: Divider;\n}\n\n.root {\n  -st-extends: InputWithOptions;\n  -st-states: disabled;\n}\n\n.divider {\n  -st-extends: Divider;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/avatar/avatar.st.css": {
      "metadata": {
        "namespace": "avatar423525652",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/avatar/avatar.st.css\" */\n:import {\n  -st-from: \"../../hocs/Focusable/Focusable.st.css\";\n  -st-default: Focusable;\n}\n\n.root {\n  -st-states: imgLoaded(boolean), contentType(enum(text, placeholder, image));\n  -st-extends: Focusable;\n}\n\n.content {}\n\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/checkbox/Checkbox.st.css": {
      "metadata": {
        "namespace": "checkbox3901557422",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/checkbox/Checkbox.st.css\" */\n@namespace \"Checkbox\";\n\n.root {\n    -st-states: checked, disabled, indeterminate, readonly, focus, focus-visible, error;\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n}\n\n.root:disabled {\n    pointer-events: none;\n}\n\n.box {}\n\n.nativeCheckbox {\n    margin: 0;\n    position: absolute;\n    cursor: inherit;\n    pointer-events: none;\n    opacity: 0;\n}\n\n.childContainer {\n    display: inline;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/circular-progress-bar/CircularProgressBar.st.css": {
      "metadata": {
        "namespace": "circularprogressbar3641522035",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/circular-progress-bar/CircularProgressBar.st.css\" */\n.root {\n  -st-states: error, success;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.label, .progressIndicator {\n  position: relative;\n  height: 100%;\n}\n\n.indicationIconContainer,\n.statusIndicator {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.arcsContainer {\n  width: 54px;\n  position: relative;\n  height: 54px;\n}\n\n.foreArc,\n.backArc {\n  width: 100%;\n  height: 100%;\n  fill: none;\n  stroke-linecap: round;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/deprecated/button/Button.st.css": {
      "metadata": {
        "namespace": "button1782131701",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/deprecated/button/Button.st.css\" */\n.root {\n    -st-states: disabled;\n    display: inline-flex;\n    align-items: center;\n    position: relative;\n    outline: none;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/deprecated/button/ButtonStyle.st.css": {
      "metadata": {
        "namespace": "buttonstyle2043990165",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/deprecated/button/ButtonStyle.st.css\" */\n:import {\n    -st-from: \"./Button.st.css\";\n    -st-default: Button;\n}\n\n.root {\n    height: 16px;\n    background-color: red;\n}\n\n:vars {\n    height: initial;\n    padding: 0px 23px;\n    borderRadius: 0;\n\n    fontFamily: '\"HelveticaNeueW01-45Ligh\", \"HelveticaNeueW02-45Ligh\", \"HelveticaNeueW10-45Ligh\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", \"メイリオ; meiryo\", \"ヒラギノ角ゴ pro w3\", \"hiragino kaku gothic pro\", \"sans-serif\"';\n    fontSize: 16px;\n    lineHeight: 24px;\n    fontStyle: normal;\n    fontWeight: normal;\n    color: black;\n    backgroundColor: grey;\n    borderColor: black;\n    disabledBackgroundColor: black;\n    disabledBorderColor: grey;\n    disabledColor: grey;\n}\n\n.root {\n    -st-extends: Button;\n    height: value(height);\n    padding: value(padding);\n    border-radius: value(borderRadius);\n    font-family: value(fontFamily);\n    font-size: value(fontSize);\n    line-height: value(lineHeight);\n    font-style: value(fontStyle);\n    font-weight: value(fontWeight);\n    color: value(color);\n    background-color: value(backgroundColor);\n    border-color: value(borderColor);\n}\n\n.root:disabled {\n    background-color: value(disabledBackgroundColor);\n    border-color: value(disabledBorderColor);\n    color: value(disabledColor);\n}\n\n.root:hover {\n    background-color: value(backgroundColor);\n    border-color: value(borderColor);\n    color: value(color);\n}\n\n.root:active {\n    background-color: value(backgroundColor);\n    border-color: value(borderColor);\n    color: value(color);\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/deprecated/label/Label.st.css": {
      "metadata": {
        "namespace": "label3936932550",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/deprecated/label/Label.st.css\" */\n:import {\n    -st-from: '../../../mixins/mixins.st.css';\n    -st-named: ellipsisMixin;\n}\n\n\n.root {\n    -st-states: ellipsis, disabled;\n}\n\n.root:ellipsis {\n  -st-mixin: ellipsisMixin;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/deprecated/stylable-badge/Badge.st.css": {
      "metadata": {
        "namespace": "badge2624617484",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/deprecated/stylable-badge/Badge.st.css\" */\n.root {\n    cursor: default;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/deprecated/stylable-badge/BadgeStyle.st.css": {
      "metadata": {
        "namespace": "badgestyle767077084",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/deprecated/stylable-badge/BadgeStyle.st.css\" */\n:import {\n    -st-from: \"./Badge.st.css\";\n    -st-default: Badge;\n  }\n  \n:vars {\n    backgroundColor: grey;\n    borderColor: grey;\n    color: white;\n}\n\n.root {\n    -st-extends: Badge;\n    height: 24px;\n    padding: 4px 12px;\n    \n    border: 1px solid;\n    border-radius: 2px;\n    border-color: value(borderColor);\n    color: value(color);\n    \n    background: value(backgroundColor);\n    \n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n\n    line-height: 1;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/ellipsis-tooltip/Ellipsis.st.css": {
      "metadata": {
        "namespace": "ellipsis465997022",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/ellipsis-tooltip/Ellipsis.st.css\" */\n.root {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 100%;\n  vertical-align: bottom;\n}"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/ellipsis-tooltip/EllipsisTooltip.st.css": {
      "metadata": {
        "namespace": "ellipsistooltip2528098017",
        "depth": 3
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/ellipsis-tooltip/EllipsisTooltip.st.css\" */\n:import {\n  -st-from: \"../tooltip/Tooltip.st.css\";\n  -st-default: Tooltip;\n}\n\n.root {\n  -st-extends: Tooltip;\n  display: inline;\n  overflow: hidden;\n}\n\n.root::popoverElement {\n  max-width: 100%;\n  line-height: initial;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/ellipsis-tooltip/tests/EllipsisTooltipTests.st.css": {
      "metadata": {
        "namespace": "ellipsistooltiptests1258526520",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/ellipsis-tooltip/tests/EllipsisTooltipTests.st.css\" */\n.withDifferentWhiteSpace {\n  white-space: pre-line;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/file-picker-button/FilePickerButton.st.css": {
      "metadata": {
        "namespace": "filepickerbutton1923650699",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/file-picker-button/FilePickerButton.st.css\" */\n:import {\n    -st-from: '../../common/a11y.st.css';\n    -st-named: srOnly;\n}\n\n.root {\n    -st-states: required, disabled;\n}\n\n.fileInput {\n    -st-mixin: srOnly;\n}\n\n.chooseFileButton {}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/horizontal-menu/HorizontalMenu.st.css": {
      "metadata": {
        "namespace": "horizontalmenu3906556319",
        "depth": 3
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/horizontal-menu/HorizontalMenu.st.css\" */\n:import {\n  -st-from: \"./horizontal-menu-item/HorizontalMenuItem.st.css\";\n  -st-default: HorizontalMenuItem;\n}\n\n:import {\n  -st-from: \"./horizontal-menu-grid-layout/HorizontalMenuGridLayout.st.css\";\n  -st-default: HorizontalMenuGridLayout;\n}\n\n:import {\n  -st-from: \"./horizontal-menu-columns-layout/HorizontalMenuColumnsLayout.st.css\";\n  -st-default: HorizontalMenuColumnsLayout;\n}\n\n.root {\n  box-sizing: border-box;\n  position: relative;\n  transition: inherit;\n}\n\n.menu {\n  box-sizing: border-box;\n\n  display: flex;\n  flex-wrap: wrap;\n\n  height: 100%;\n\n  margin: 0;\n  padding: 0;\n\n  list-style: none;\n}\n\n/* menu item */\n.menuItem {\n  -st-extends: HorizontalMenuItem;\n}\n\n/* grid layout */\n.gridLayout {\n  -st-extends: HorizontalMenuGridLayout;\n}\n\n/* columns layout */\n.columnsLayout {\n  -st-extends: HorizontalMenuColumnsLayout;\n}\n\n.menu > .menuItem > .gridLayout {\n  position: absolute;\n}\n\n.menu > .menuItem > .columnsLayout {\n  position: absolute;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/horizontal-menu/horizontal-menu-columns-layout/HorizontalMenuColumnsLayout.st.css": {
      "metadata": {
        "namespace": "horizontalmenucolumnslayout336307226",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/horizontal-menu/horizontal-menu-columns-layout/HorizontalMenuColumnsLayout.st.css\" */\n:import {\n  -st-from: \"../horizontal-menu-item/HorizontalMenuItem.st.css\";\n  -st-default: HorizontalMenuItem;\n}\n\n.root {\n  -st-states: expandSize(enum(column)), columnsAlignment(enum(left, center, right, justify));\n\n  box-sizing: border-box;\n\n  z-index: 1;\n\n  display: none;\n  min-width: 100%;\n\n  flex: 1;\n\n  transition: inherit;\n}\n\n.root:expandSize(column) .listWrapper {\n  box-sizing: content-box;\n  width: max-content;\n}\n\n.root:columnsAlignment(left) {\n  justify-content: flex-start;\n}\n\n.root:columnsAlignment(center) {\n  justify-content: center;\n}\n\n.root:columnsAlignment(right) {\n  justify-content: flex-end;\n}\n\n.root:columnsAlignment(justify) > .listWrapper {\n  width: 100%;\n}\n\n.root[data-opened=\"true\"] {\n  display: flex;\n}\n\n.listWrapper {\n  margin: 0;\n  padding: 0;\n\n  list-style: none;\n}\n\n.menuItem {\n  -st-extends: HorizontalMenuItem;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/horizontal-menu/horizontal-menu-grid-layout/HorizontalMenuGridLayout.st.css": {
      "metadata": {
        "namespace": "horizontalmenugridlayout2604239538",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/horizontal-menu/horizontal-menu-grid-layout/HorizontalMenuGridLayout.st.css\" */\n:import {\n  -st-from: \"../horizontal-menu-item/HorizontalMenuItem.st.css\";\n  -st-default: HorizontalMenuItem;\n}\n\n.root {\n  -st-states: expandSize(enum(column));\n\n  box-sizing: border-box;\n\n  z-index: 1;\n\n  display: none;\n  min-width: 100%;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: stretch;\n\n  flex: 1;\n\n  transition: inherit;\n}\n\n.root:expandSize(column) {\n  box-sizing: content-box;\n  width: max-content;\n}\n\n.root[data-opened=\"true\"] {\n  display: flex;\n}\n\n.listWrapper {\n  display: flex;\n\n  margin: 0;\n  padding: 0;\n\n  list-style: none;\n}\n\n.menuItem {\n  -st-extends: HorizontalMenuItem;\n  flex: 1;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/horizontal-menu/horizontal-menu-item/HorizontalMenuItem.st.css": {
      "metadata": {
        "namespace": "horizontalmenuitem1023549667",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/horizontal-menu/horizontal-menu-item/HorizontalMenuItem.st.css\" */\n:import {\n  -st-from: \"../horizontal-menu-columns-layout/HorizontalMenuColumnsLayout.st.css\";\n  -st-default: HorizontalMenuColumnsLayout;\n}\n\n:import {\n  -st-from: \"../horizontal-menu-grid-layout/HorizontalMenuGridLayout.st.css\";\n  -st-default: HorizontalMenuGridLayout;\n}\n\n.root {\n  -st-states: expandSize(enum(column));\n\n  transition: inherit;\n  -webkit-column-break-inside: avoid; /* Chrome, Safari, Opera */\n  page-break-inside: avoid; /* Firefox */\n  break-inside: avoid; /* IE 10+ */\n}\n\n.root:expandSize(column) {\n  position: relative;\n}\n\n.menuItemLink {}\n\n.expandIcon {\n  display: inline-block;\n}\n\n.divider {\n  display: none;\n}\n\n.linkContainer {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/icon-with-options/IconWithOptions.st.css": {
      "metadata": {
        "namespace": "iconwithoptions977146686",
        "depth": 4
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/icon-with-options/IconWithOptions.st.css\" */\n:import {\n  -st-from: \"../dropdown/Dropdown.st.css\";\n  -st-default: Dropdown;\n}\n\n.root {\n  -st-extends: Dropdown;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/image/image.st.css": {
      "metadata": {
        "namespace": "image1833749769",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/image/image.st.css\" */\n.root {\n    -st-states: loadState(enum(loading, loaded, error));\n}\n\n.hiddenImage {\n    visibility: hidden;\n    width: 100%;\n    height: 100%;\n}\n\n.wrapper {\n    -st-extends: root;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/label-with-options/LabelWithOptions.st.css": {
      "metadata": {
        "namespace": "labelwithoptions2346743821",
        "depth": 4
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/label-with-options/LabelWithOptions.st.css\" */\n:import {\n  -st-from: \"../dropdown/Dropdown.st.css\";\n  -st-default: Dropdown;\n}\n\n:import {\n  -st-from: \"../dropdown-option/DropdownOption.st.css\";\n  -st-default: DropdownOption;\n}\n\n:import {\n  -st-from: \"../checkbox/Checkbox.st.css\";\n  -st-default: Checkbox;\n}\n\n:import {\n  -st-from: \"../deprecated/label/Label.st.css\";\n  -st-default: Label;\n}\n\n:import {\n  -st-from: \"../deprecated/divider/Divider.st.css\";\n  -st-default: Divider;\n}\n\n.root {\n  -st-extends: Dropdown;\n  -st-states: required, error, disabled, checkbox;\n}\n\n@custom-selector :--selected .root:checkbox DropdownOption:selected;\n\n:--selected {\n  background-color: white; \n}\n.selection {\n\n}\n\n.label {\n  -st-extends: Label;\n}\n\n.divider {\n  -st-extends: Divider;\n}\n\n.placeholder {\n}\n\n.optionContainer {\n  display: flex;\n}\n\n.checkbox {\n  -st-extends: Checkbox;\n  width: 1em;\n  height: 1em;\n  border: 1px solid black;\n}\n\n.checkbox:checked {\n  background: blue;\n}"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/menu-item/menu-item.st.css": {
      "metadata": {
        "namespace": "menuitem2548543652",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/menu-item/menu-item.st.css\" */\n.root {\n  -st-states: selected, highlighted, disabled;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/nav-stepper/NavStep.st.css": {
      "metadata": {
        "namespace": "navstep2256518416",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/nav-stepper/NavStep.st.css\" */\n.root {\n    -st-states: active, visited, disabled;\n}\n\n.root:visited {\n    color: green;\n}\n\n.root:disabled {\n    color: grey;\n}\n\n.root:active {\n    color: blue;\n}"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/nav-stepper/NavStepper.st.css": {
      "metadata": {
        "namespace": "navstepper4135591081",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/nav-stepper/NavStepper.st.css\" */\n:import {\n    -st-from: \"./NavStep.st.css\";\n    -st-default: NavStep;\n}\n.root {\n\n}\n.steps {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n}\n.step {\n    -st-extends: NavStep;\n}"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/pagination/PaginationTest.st.css": {
      "metadata": {
        "namespace": "paginationtest1393848156",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/pagination/PaginationTest.st.css\" */\n:import {\n  -st-from: './Pagination.st.css';\n  -st-default: Pagination;\n}\n\n:vars {\n  materialBlueGray100: #CFD8DC;\n  materialBlueGray200: #B0BEC5;\n  materialBlueGray700: #455A64;\n  materialRed500: #f44336;\n}\n\n.button-common-mixin {\n  align-items: center;\n  justify-content: center;\n  margin: 5px;\n  padding: 5px;\n  min-width: 20px;\n  min-height: 20px;\n  font: 12px/1 Arial, sans-serif;\n  text-decoration: none;\n}\n\n.root {\n  -st-extends: Pagination;\n  color: value(materialBlueGray700);\n  background-color: #ECEFF1;\n}\n\n.root::navButton {\n  -st-mixin: button-common-mixin;\n  background-color: value(materialBlueGray100);\n}\n\n.root::navButton.disabled {\n  color: value(materialBlueGray200);\n  background-color: transparent;\n}\n\n.root::pageStripInner {\n  justify-content: center;\n}\n\n.root::pageButton {\n  -st-mixin: button-common-mixin;\n  background-color: value(materialBlueGray200);\n}\n\n.root::currentPage {\n  -st-mixin: button-common-mixin;\n  background-color: value(materialBlueGray700);\n  color: value(materialBlueGray100);\n}\n\n.root::gap {\n  -st-mixin: button-common-mixin;\n  background-color: value(materialBlueGray100);\n}\n\n.root::pageForm {\n  margin: 5px;\n  align-items: center;\n}\n\n.root::pageInput {\n  box-sizing: border-box;\n  height: 30px;\n  text-align: center;\n  font: 12px/1 Arial, sans-serif;\n  color: inherit;\n}\n\n.root:error::pageInput {\n  border-color: value(materialRed500);\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/popover-next/components/Loader.st.css": {
      "metadata": {
        "namespace": "loader1362687714",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../../src/components/popover-next/components/Loader.st.css\" */\n.root div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  top: -10px;\n  left: 100%;\n  width:  20px;\n  height: 20px;\n  margin: 8px;\n  border: 3px solid grey;\n  border-radius: 50%;\n  animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: grey transparent transparent transparent;\n}\n\n.root div:nth-child(1) {\n  animation-delay: -0.45s;\n}\n\n.root div:nth-child(2) {\n  animation-delay: -0.3s;\n}\n\n.root div:nth-child(3) {\n  animation-delay: -0.15s;\n}\n\n@keyframes loader {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/thumbnail/Thumbnail.st.css": {
      "metadata": {
        "namespace": "thumbnail4148770293",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/thumbnail/Thumbnail.st.css\" */\n.root {\n  -st-states: selected, disabled;\n  position: relative;\n  border: 1px solid grey;\n}\n\n.selectedIcon {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n}\n\n:global([dir=\"rtl\"]) .selectedIcon {\n  left: -10px;\n  right: unset;\n}\n\n.root:disabled {\n  cursor: default;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/toggle-switch/ToggleSwitch.st.css": {
      "metadata": {
        "namespace": "toggleswitch236342849",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/toggle-switch/ToggleSwitch.st.css\" */\n.root {\n  /* Info on focus-visible: https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo */\n  -st-states: checked, disabled, focus, focus-visible;\n  display: inline-flex;\n  position: relative;\n}\n\n/* We're relying on the input to handle mouse events, that's why we need it to cover the entire component */\n.input {\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  cursor: inherit;\n}\n\n.track {}\n\n.knob {}\n\n.knobIcon {}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/toggle-switch/ToggleSwitchColor.st.css": {
      "metadata": {
        "namespace": "toggleswitchcolor1630806711",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/toggle-switch/ToggleSwitchColor.st.css\" */\n:import {\n  -st-from: \"./ToggleSwitch.st.css\";\n  -st-default: ToggleSwitch;\n}\n\n:vars {\n  colorUnchecked: #999;\n  colorChecked: #999;\n  colorUncheckedHover: #999;\n  colorCheckedHover: #999;\n  colorDisabled: #999;\n}\n\n.root {\n  -st-extends: ToggleSwitch;\n}\n\n.root::track {\n  background-color: currentColor;\n}\n\n.root::knob {\n  background-color: white;\n}\n\n.root::knobIcon {\n  fill: currentColor;\n}\n\n.root {\n  color: value(colorUnchecked);\n}\n\n.root:hover {\n  color: value(colorUncheckedHover);\n}\n\n.root:checked {\n  color: value(colorChecked);\n}\n\n.root:checked:hover {\n  color: value(colorCheckedHover);\n}\n\n.root:disabled,\n.root:disabled:hover,\n.root:disabled:checked,\n.root:disabled:checked:hover {\n  color: value(colorDisabled);\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/toggle-switch/ToggleSwitchLayout.st.css": {
      "metadata": {
        "namespace": "toggleswitchlayout341605706",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/toggle-switch/ToggleSwitchLayout.st.css\" */\n:import {\n  -st-from: \"./ToggleSwitch.st.css\";\n  -st-default: ToggleSwitch;\n}\n\n:import {\n  -st-from: \"../../mixins/calc\";\n  -st-default: calc\n}\n\n:vars {\n  rootWidth: 48px;\n  rootHeight: 24px;\n  trackWidth: value(rootWidth);\n  trackHeight: value(rootHeight);\n  knobWidth: calc(value(rootHeight) / 1.2);\n  knobHeight: calc(value(rootHeight) / 1.2);\n  knobMovementRange: calc(value(trackWidth)/2 - value(knobWidth)/2 - 1);\n}\n\n.root {\n  -st-extends: ToggleSwitch;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: value(rootWidth);\n  height: value(rootHeight);\n  box-sizing: border-box;\n}\n\n.root::track {\n  box-sizing: border-box;\n  width: value(trackWidth);\n  height: value(trackHeight);\n  border-radius: calc(value(trackHeight) / 2);\n}\n\n.root::knob {\n  position: absolute;\n  box-sizing: border-box;\n  width: value(knobWidth);\n  height: value(knobHeight);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: calc(value(knobHeight) / 2);\n  transform: translateX(calc(-1 * value(knobMovementRange)));\n}\n\n.root::knobIcon {\n  width: calc(value(knobHeight) / 2);\n  height: calc(value(knobHeight) / 2);\n}\n\n.root::knobIcon > svg {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.root:checked::knob,\n:global([dir=\"rtl\"]) .root::knob {\n  transform: translateX(value(knobMovementRange));\n}\n\n:global([dir=\"rtl\"]) .root:checked::knob {\n  transform: translateX(calc(-1 * value(knobMovementRange)));\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/toggle-switch/ToggleSwitchStyle.st.css": {
      "metadata": {
        "namespace": "toggleswitchstyle1135966553",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/toggle-switch/ToggleSwitchStyle.st.css\" */\n:import {\n  -st-from: \"./ToggleSwitch.st.css\";\n  -st-default: ToggleSwitch;\n}\n\n.root {\n  -st-extends: ToggleSwitch;\n}\n\n.root:not(:disabled) {\n  cursor: pointer;\n}\n\n.root::track {\n  transition: all 300ms ease;\n}\n\n.root::knob {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.6);\n  transition: all 300ms ease;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/components/tooltip/Tooltip.st.css": {
      "metadata": {
        "namespace": "tooltip314162184",
        "depth": 2
      },
      "content": "/* st-namespace-reference=\"../../../../src/components/tooltip/Tooltip.st.css\" */\n:import {\n  -st-from: \"../popover/Popover.st.css\";\n  -st-default: Popover;\n}\n\n.root {\n  -st-extends: Popover;\n}\n\n.root::popoverContent {\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n}\n"
    },
    "/wix-ui-santa/node_modules/wix-ui-core/dist/src/mixins/mixins.st.css": {
      "metadata": {
        "namespace": "mixins406335838",
        "depth": 1
      },
      "content": "/* st-namespace-reference=\"../../../src/mixins/mixins.st.css\" */\n.ellipsisMixin {\n    display: block;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}"
    },
    "/wix-ui-santa/index.st.css": {
      "metadata": {
        "namespace": "wix-ui-santa-index",
        "depth": 3
      },
      "content": ":import {-st-from: \"/wix-ui-santa/src/components/StylableHorizontalMenu/StylableHorizontalMenu.st.css\"; -st-default: StylableHorizontalMenu} .root StylableHorizontalMenu{}\n:import {-st-from: \"/wix-ui-santa/src/components/StylableButton/StylableButton.st.css\"; -st-default: StylableButton} .root StylableButton{}\n:import {-st-from: \"/wix-ui-santa/src/components/StylableLine/StylableLine.st.css\"; -st-default: StylableLine} .root StylableLine{}\n"
    }
  },
  "components": {
    "StylableHorizontalMenu": {
      "id": "StylableHorizontalMenu",
      "stylesheetPath": "/wix-ui-santa/src/components/StylableHorizontalMenu/StylableHorizontalMenu.st.css",
      "variantsPath": "/wix-ui-santa/src/components/StylableHorizontalMenu/variants/addPanelV1",
      "presets": [],
      "previewProps": {
        "styleId": "",
        "style": {}
      },
      "selectorConfiguration": {
        ".root": {
          "nameKey": "StylablePanel_Design_Horizontal_Menu_MainMenu_Tab_Label",
          "stateDisplayKey": "StylablePanel_Design_State_Dropdown_Horizontal_Menu_Label",
          "stateNameOverrides": {
            "active": {
              "hidden": true
            },
            "hover": {
              "hidden": true
            },
            "focus": {
              "hidden": true
            },
            "disabled": {
              "hidden": true
            },
            "error": {
              "hidden": true
            },
            "menuMode": {
              "hidden": true
            },
            "direction": {
              "hidden": true
            },
            "isScrollable": {
              "hidden": true
            }
          }
        },
        ".root::columnsLayout": {
          "nameKey": "StylablePanel_Design_Horizontal_Menu_Submenu_Tab_Label",
          "stateDisplayKey": "StylablePanel_Design_State_Dropdown_Horizontal_Submenu_Label",
          "stateNameOverrides": {
            "active": {
              "hidden": true
            },
            "hover": {
              "hidden": true
            },
            "focus": {
              "hidden": true
            },
            "disabled": {
              "hidden": true
            },
            "error": {
              "hidden": true
            },
            "chrome": {
              "hidden": true
            },
            "submenuMode": {
              "hidden": true
            }
          }
        },
        ".root::columnsLayout::menuItem": {
          "nameKey": "StylablePanel_Design_Horizontal_Menu_Submenu_Items_Tab_Label",
          "stateDisplayKey": "StylablePanel_Design_State_Dropdown_Horizontal_Submenu_Item_Label",
          "statesOrder": [
            "isHovered",
            "isCurrentPage"
          ],
          "stateNameOverrides": {
            "active": {
              "hidden": true
            },
            "hover": {
              "hidden": true
            },
            "focus": {
              "hidden": true
            },
            "disabled": {
              "hidden": true
            },
            "error": {
              "hidden": true
            },
            "isCurrentPage": {
              "nameKey": "StylablePanel_Design_State_Dropdown_Current_Page"
            },
            "isHovered": {
              "nameKey": "StylablePanel_Design_State_Dropdown_Hover_Menu"
            }
          }
        },
        ".root::columnsLayout::menuItem::label": {
          "nameKey": "StylablePanel_Design_Horizontal_Menu_Text_Tab_Label",
          "primeElementSelector": ".root::columnsLayout::menuItem",
          "controllerData": {
            "text": {
              "hideShownToggle": true,
              "noStateResizing": [
                "isHovered",
                "isCurrentPage"
              ]
            }
          }
        },
        ".root::columnsLayout::menuItem::container": {
          "hide": true
        },
        ".root::columnsLayout::menuItem::positionBox": {
          "hide": true
        },
        ".root::columnsLayout::menuItem::expanded": {
          "hide": true
        },
        ".root::columnsLayout::menuItem::collapsed": {
          "hide": true
        },
        ".root::columnsLayout::menuItem::opened": {
          "hide": true
        },
        ".root::columnsLayout::menuItem::expand-left": {
          "hide": true
        },
        ".root::columnsLayout::menuItem::expand-right": {
          "hide": true
        },
        ".root::columnsLayout::listWrapper": {
          "hide": true
        },
        ".root::columnsLayout::pageWrapper": {
          "hide": true
        },
        ".root::columnsLayout::pageStretchWrapper": {
          "hide": true
        },
        ".root::columnsLayout::category": {
          "hide": true
        },
        ".root::columnsLayout::columnsList": {
          "hide": true
        },
        ".root::columnsLayout::flex": {
          "hide": true
        },
        ".root::columnsLayout::rowItem": {
          "hide": true
        },
        ".root::columnsLayout::listItem": {
          "hide": true
        },
        ".root::columnsLayout::submenuItem": {
          "hide": true
        },
        ".root::columnsLayout::heading": {
          "nameKey": "StylablePanel_Design_Horizontal_Menu_Submenu_Items_Level1_Tab_Label",
          "stateDisplayKey": "StylablePanel_Design_State_Dropdown_Horizontal_Submenu_Item_Label",
          "statesOrder": [
            "isHovered",
            "isCurrentPage"
          ],
          "stateNameOverrides": {
            "active": {
              "hidden": true
            },
            "hover": {
              "hidden": true
            },
            "focus": {
              "hidden": true
            },
            "disabled": {
              "hidden": true
            },
            "error": {
              "hidden": true
            },
            "isCurrentPage": {
              "nameKey": "StylablePanel_Design_State_Dropdown_Current_Page"
            },
            "isHovered": {
              "nameKey": "StylablePanel_Design_State_Dropdown_Hover_Menu"
            }
          }
        },
        ".root::columnsLayout::heading::label": {
          "nameKey": "StylablePanel_Design_Horizontal_Menu_Text_Tab_Label",
          "primeElementSelector": ".root::columnsLayout::heading",
          "controllerData": {
            "text": {
              "hideShownToggle": true,
              "noStateResizing": [
                "isHovered",
                "isCurrentPage"
              ]
            }
          }
        },
        ".root::columnsLayout::heading::container": {
          "hide": true
        },
        ".root::scrollButton": {
          "nameKey": "StylablePanel_Design_Horizontal_Menu_ScrollButton_Tab_Label",
          "stateDisplayKey": "StylablePanel_Design_State_Dropdown_Horizontal_Menu_Scroll_Button_Label",
          "stateNameOverrides": {
            "active": {
              "hidden": true
            },
            "focus": {
              "hidden": true
            },
            "disabled": {
              "hidden": true
            },
            "error": {
              "hidden": true
            },
            "isHidden": {
              "hidden": true
            },
            "side": {
              "hidden": true
            }
          }
        },
        ".root::scrollButton::icon": {
          "nameKey": "StylablePanel_Design_Horizontal_Menu_ScrollIcon_Tab_Label",
          "primeElementSelector": ".root::scrollButton",
          "controllerData": {
            "icon": {
              "hideShownToggle": true
            }
          }
        },
        ".root::menuItem": {
          "nameKey": "StylablePanel_Design_Horizontal_Menu_MenuItems_Tab_Label",
          "stateDisplayKey": "StylablePanel_Design_State_Dropdown_Horizontal_Menu_Item_Label",
          "statesOrder": [
            "isHovered",
            "isCurrentPage"
          ],
          "stateNameOverrides": {
            "active": {
              "hidden": true
            },
            "focus": {
              "hidden": true
            },
            "hover": {
              "hidden": true
            },
            "disabled": {
              "hidden": true
            },
            "error": {
              "hidden": true
            },
            "isCurrentPage": {
              "nameKey": "StylablePanel_Design_State_Dropdown_Current_Page"
            },
            "isHovered": {
              "nameKey": "StylablePanel_Design_State_Dropdown_Hover_Menu"
            }
          }
        },
        ".root::menuItem::label": {
          "nameKey": "StylablePanel_Design_Horizontal_Menu_Text_Tab_Label",
          "primeElementSelector": ".root::menuItem",
          "controllerData": {
            "text": {
              "hideShownToggle": true,
              "noStateResizing": [
                "isHovered",
                "isCurrentPage"
              ]
            }
          }
        },
        ".root::menuItem::container": {
          "hide": true
        },
        ".root::menuItem::positionBox": {
          "hide": true
        },
        ".root::menuItem::expanded": {
          "hide": true
        },
        ".root::menuItem::collapsed": {
          "hide": true
        },
        ".root::menuItem::opened": {
          "hide": true
        },
        ".root::leftAlignmentScrollItem": {
          "hide": true
        },
        ".root::rightAlignmentScrollItem": {
          "hide": true
        },
        ".root::menu": {
          "hide": true
        },
        ".root::listItem": {
          "hide": true
        },
        ".root::positionBox": {
          "hide": true
        }
      },
      "namespace": "stylablehorizontalmenu4089050981"
    },
    "StylableButton": {
      "id": "StylableButton",
      "stylesheetPath": "/wix-ui-santa/src/components/StylableButton/StylableButton.st.css",
      "variantsPath": "/wix-ui-santa/src/components/StylableButton/variants/addPanelV1",
      "presets": [],
      "themePresets": {
        "stButton1": ":import{\n    -st-from: 'wix-ui-santa/index.st.css';\n    -st-named: StylableButton\n}\n.root{\n    -st-extends: StylableButton;\n    transition: all 0.2s ease, visibility 0s;\n    background: value(site_1_5)\n}\n.root:hover{\n    border: 1px solid value(site_1_5);\n    background: value(site_1_1)\n}\n.root:hover::label{\n    color: value(site_1_5)\n}\n.root:disabled{\n    background: #E2E2E2\n}\n.root:disabled::label{\n    color: #8F8F8F\n}\n.root:disabled::icon{\n    fill: #8F8F8F\n}\n.root::container{\n    transition: inherit\n}\n.root::label{\n    transition: inherit;\n    font-family: futura-lt-w01-book,sans-serif;\n    margin: 0px 4px 0px 0px;\n    font-size: 14px;\n    letter-spacing: 0.1em;\n    -st-mixin: font_8;\n    color: value(site_1_1)\n}\n.root::icon{\n    transition: inherit;\n    width: 10px;\n    height: 10px;\n    margin: 0px 0px 0px 4px;\n    fill: value(site_1_1);\n    display: none\n}\n.root:hover::icon{\n    fill: value(site_1_5)\n}",
        "stButton2": ":import{\n    -st-from: 'wix-ui-santa/index.st.css';\n    -st-named: StylableButton\n}\n.root{\n    -st-extends: StylableButton;\n    transition: all 0.2s ease, visibility 0s;\n    background: value(site_1_1)\n}\n.root::container{\n    transition: inherit\n}\n.root::label{\n    transition: inherit;\n    margin: 0px 4px 0px 0px;\n    font-size: 14px;\n    letter-spacing: 0.1em;\n    font-family: montserrat,sans-serif;\n    font-weight: 400;\n    -st-mixin: font_8;\n    color: value(site_1_5)\n}\n.root:disabled{\n    background: #E2E2E2\n}\n.root:disabled::label{\n    color: #8F8F8F\n}\n.root:disabled::icon{\n    fill: #8F8F8F\n}\n.root::icon{\n    transition: inherit;\n    width: 10px;\n    height: 10px;\n    margin: 0px 0px 0px 4px;\n    fill: value(site_1_5);\n    display: none\n}\n.root:hover::label {\n    color: value(site_1_4);\n}\n.root:hover::icon {\n    fill: value(site_1_4);\n}",
        "stButton3": ".root:hover::icon {\n    fill: value(site_1_1);\n}\n:import{\n    -st-from: 'wix-ui-santa/index.st.css';\n    -st-named: StylableButton\n}\n.root{\n    -st-extends: StylableButton;\n    transition: all 0.2s ease, visibility 0s;\n    border: 1px solid value(site_2_3);\n    background: value(site_1_1)\n}\n.root:hover {\n    background: value(site_2_3);\n}\n.root:hover::label {\n    color: value(site_1_1);\n}\n.root:disabled{\n    background: #E2E2E2\n}\n.root:disabled::label{\n    color: #8F8F8F\n}\n.root:disabled::icon{\n    fill: #8F8F8F\n}\n.root::container{\n    transition: inherit\n}\n.root::label{\n    transition: inherit;\n    font-size: 14px;\n    letter-spacing: 0.1em;\n    color: value(site_2_3);\n    font-family: poppins-extralight,poppins,sans-serif;\n    -st-mixin: font_9;\n    margin: 0px 2px 0px 0px\n}\n.root::icon{\n    transition: inherit;\n    display: initial;\n    fill: value(site_2_3);\n    margin: 0px 0px 0px 2px;\n    width: 12px;\n    height: 12px;\n}",
        "stButton4": ":import{\n    -st-from: 'wix-ui-santa/index.st.css';\n    -st-named: StylableButton\n}\n.root{\n    -st-extends: StylableButton;\n    transition: all 0.2s ease, visibility 0s;\n    background: value(site_2_3)\n}\n.root:hover {\n    background: value(site_2_2);\n}\n.root:disabled{\n    background: #E2E2E2\n}\n.root:disabled::label{\n    color: #8F8F8F\n}\n.root:disabled::icon{\n    fill: #8F8F8F\n}\n.root::container{\n    transition: inherit\n}\n.root::label{\n    transition: inherit;\n    margin: 0px 4px 0px 0px;\n    letter-spacing: 0.1em;\n    font-family: bree-w01-thin-oblique,sans-serif;\n    font-size: 15px;\n    font-weight: normal;\n    font-style: normal;\n    -st-mixin: font_9;\n    color: value(site_1_1)\n}\n.root::icon{\n    transition: inherit;\n    width: 10px;\n    height: 10px;\n    margin: 0px 0px 0px 4px;\n    fill: value(site_1_1);\n    display: none;\n}"
      },
      "previewProps": {
        "styleId": "",
        "style": {}
      },
      "selectorConfiguration": {
        ".root": {
          "displayName": "Button",
          "nameKey": "StylablePanel_Design_Button_Tab_Label",
          "stateDisplayKey": "StylablePanel_Design_State_Dropdown_Button_Label",
          "stateNameOverrides": {
            "focus": {
              "hidden": true
            },
            "active": {
              "hidden": true
            },
            "disabled": {
              "hidden": false
            },
            "error": {
              "hidden": true
            }
          },
          "copyControllers": {
            ".root::container": [
              {
                "categoryId": "layout",
                "controllerKey": "layout"
              }
            ]
          },
          "controllerData": {
            "layout": {
              "translationKeys": {
                "flex-direction_title_key": "StylablePanel_Design_Button_Layout_Position_Label",
                "justify-content_title_key": "StylablePanel_Design_Button_Layout_Alignment_Label",
                "align-items_title_key": "StylablePanel_Design_Button_Layout_Alignment_Label",
                "display_title_key": "StylablePanel_Design_Layout_Show_Label",
                "display_option_all_key": "StylablePanel_Design_Layout_Show_Dropdown_TextIcon",
                "display_option_label_key": "StylablePanel_Design_Layout_Show_Dropdown_Text",
                "display_option_icon_key": "StylablePanel_Design_Layout_Show_Dropdown_Icon",
                "spacing_title_key": "StylablePanel_Design_Button_Layout_Spacing_Label"
              }
            }
          }
        },
        ".root::container": {
          "hide": true,
          "primeElementSelector": ".root",
          "displayName": "Container",
          "nameKey": "Container"
        },
        ".root::link": {
          "hide": true
        },
        ".root::label": {
          "displayName": "Label",
          "nameKey": "StylablePanel_Design_Button_Text_Tab_Label",
          "primeElementSelector": ".root",
          "stateNameOverrides": {
            "focus": {
              "hidden": true
            },
            "active": {
              "hidden": true
            },
            "disabled": {
              "hidden": true
            }
          }
        },
        ".root::icon": {
          "displayName": "Icon",
          "nameKey": "StylablePanel_Design_Button_Icon_Tab_Label",
          "primeElementSelector": ".root",
          "stateNameOverrides": {
            "focus": {
              "hidden": true
            },
            "active": {
              "hidden": true
            },
            "disabled": {
              "hidden": true
            }
          }
        }
      },
      "namespace": "stylablebutton643855516"
    },
    "StylableLine": {
      "id": "StylableLine",
      "stylesheetPath": "/wix-ui-santa/src/components/StylableLine/StylableLine.st.css",
      "variantsPath": "/wix-ui-santa/src/components/StylableLine/variants",
      "presets": [
        {
          "path": "/wix-ui-santa/src/components/StylableLine/variants/test.st.css"
        },
        {
          "path": "/wix-ui-santa/src/components/StylableLine/variants/a.st.css"
        }
      ],
      "previewProps": {
        "styleId": "",
        "style": {}
      },
      "selectorConfiguration": {
        ".root": {
          "displayName": "Line"
        }
      },
      "namespace": "stylableline2123045772"
    }
  },
  "packages": {
    "wix-ui-santa": "/wix-ui-santa",
    "wix-ui-core": "/wix-ui-santa/node_modules/wix-ui-core",
    "@wix/soundhead-react": "/wix-ui-santa/node_modules/@wix/soundhead-react",
    "@wix/search-box-v2": "/wix-ui-santa/node_modules/@wix/search-box-v2",
    "@wix/editor-elements-library": "/wix-ui-santa/node_modules/@wix/editor-elements-library"
  }
}; }));