var MePage = require("../dist/MePage.js");
var MeAnimation = require("../dist/MeAnimation.js");
var MeToolBar = require("../dist/MeToolBar.js");
var MeMusic = require("../dist/MeMusic.js")
var MeTouchTrigger = require("../dist/MeTouchTrigger.js");
var MeVPads = require("../dist/MeVPads.js");
var MePanArea = require("../dist/MePanArea.js");
var MeArticle = require("../src/me-article.js");
var MePageMgr = require("../src/MePageMgr.js");
var MeSvg = require("../dist/MeSvg.js");
var MeRadio = require("../dist/MeRadio.js");
var MeCheckbox = require("../dist/MeCheckbox.js");
var MeLabel = require("../dist/MeLabel.js");

var EventEmitter = require("wolfy87-eventemitter");
var React = require("react");
var ReactDOM = require("react-dom");

function renderjs(){}
module.exports = {
	MePage:MePage,
	MeAnimation:MeAnimation,
	MeToolBar:MeToolBar,
	MeMusic:MeMusic,
	MeVPads:MeVPads,
	MeArticle:MeArticle,
	MeTouchTrigger:MeTouchTrigger,
	MePanArea:MePanArea,
	MePageMgr:MePageMgr,
	MeSvg:MeSvg,
    MeCheckbox:MeCheckbox,
    MeRadio:MeRadio,
    MeLabel:MeLabel,
	EventEmitter:EventEmitter,
	React:React,
	ReactDOM:ReactDOM
};