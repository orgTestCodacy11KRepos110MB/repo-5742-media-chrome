import m from"./media-chrome-button.js";import i from"./media-controller.js";import r from"./media-chrome-range.js";import d from"./media-control-bar.js";import n from"./media-current-time-display.js";import s from"./media-duration-display.js";import l from"./media-time-display.js";import p from"./media-captions-button.js";import u from"./media-seek-forward-button.js";import c from"./media-fullscreen-button.js";import f from"./media-mute-button.js";import M from"./media-pip-button.js";import j from"./media-play-button.js";import b from"./media-playback-rate-button.js";import g from"./media-progress-range.js";import h from"./media-seek-backward-button.js";import o from"./media-thumbnail-preview.js";import w from"./media-time-range.js";import B from"./media-title-element.js";import y from"./media-volume-range.js";import{Window as e}from"./utils/server-safe-globals.js";class C extends i{}e.customElements.get("media-chrome")||e.customElements.define("media-chrome",C);class t extends i{constructor(){super();console.warn("MediaChrome: <media-container> is deprecated. Use <media-controller>.")}}e.customElements.get("media-container")||e.customElements.define("media-container",t);export{m as MediaChromeButton,t as MediaContainer,i as MediaController,r as MediaChromeRange,d as MediaControlBar,n as MediaCurrentTimeDisplay,s as MediaDurationDisplay,l as MediaTimeDisplay,p as MediaCaptionsButton,u as MediaSeekForwardButton,c as MediaFullscreenButton,f as MediaMuteButton,M as MediaPipButton,j as MediaPlayButton,b as MediaPlaybackRateButton,g as MediaProgressRange,h as MediaSeekBackwardButton,o as MediaThumbnailPreview,o as MediaThumbnailPreviewElement,w as MediaTimeRange,B as MediaTitleElement,y as MediaVolumeRange};