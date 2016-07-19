(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("rc-collapse"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "rc-collapse"], factory);
	else if(typeof exports === 'object')
		exports["MofoUI"] = factory(require("react"), require("rc-collapse"));
	else
		root["MofoUI"] = factory(root["react"], root["rc-collapse"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Panel = exports.Collapse = exports.RadioFilter = exports.TabSwitcher = undefined;

	var _tabSwitcher = __webpack_require__(1);

	var _tabSwitcher2 = _interopRequireDefault(_tabSwitcher);

	var _radioFilter = __webpack_require__(3);

	var _radioFilter2 = _interopRequireDefault(_radioFilter);

	var _rcCollapse = __webpack_require__(4);

	var _rcCollapse2 = _interopRequireDefault(_rcCollapse);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TabSwitcher = exports.TabSwitcher = _tabSwitcher2.default;
	var RadioFilter = exports.RadioFilter = _radioFilter2.default;
	var Collapse = exports.Collapse = _rcCollapse2.default;
	var Panel = exports.Panel = _rcCollapse2.default.Panel;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Children nodes and buttons can be hidden if empty based on hidden param passed to them.
	// TODO: find a way to allow another tab to be active by default, especially if it's the only tab with content/not hidden

	exports.default = _react2.default.createClass({
	  displayName: "tab-switcher",

	  propTypes: {
	    baseURL: _react2.default.PropTypes.string.isRequired,
	    className: _react2.default.PropTypes.string,
	    children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	      props: _react2.default.PropTypes.shape({
	        name: _react2.default.PropTypes.string.isRequired,
	        slug: _react2.default.PropTypes.string.isRequired,
	        iconDefault: _react2.default.PropTypes.string.isRequired,
	        iconActive: _react2.default.PropTypes.string
	      }).isRequired
	    })),
	    onChange: _react2.default.PropTypes.func
	  },
	  getSlugIndex: function getSlugIndex(slug) {
	    var slugIndex = 0; // Default to first tab

	    for (var i = 0; i < this.props.children.length; i++) {
	      if (this.props.children[i].props.slug === slug) {
	        slugIndex = i;
	        break;
	      }
	    }

	    return slugIndex;
	  },
	  getInitialState: function getInitialState() {
	    return {
	      activeTab: this.getSlugIndex(this.props.initialTab)
	    };
	  },

	  tabClick: function tabClick(index) {
	    this.setState({ activeTab: index });

	    if (this.props.onChange) {
	      this.props.onChange({
	        index: index,
	        tabName: this.props.children[index].props.name
	      });
	    }
	  },
	  render: function render() {
	    var _this = this;

	    var buttons = this.props.children.map(function (element, index) {
	      if (_this.props.children[index].props.hidden) {
	        return;
	      }

	      return _react2.default.createElement(
	        "button",
	        {
	          className: "btn " + (index === _this.state.activeTab ? "active" : ""),
	          onClick: _this.tabClick.bind(null, index),
	          key: element.props.slug,
	          hidden: _this.props.children[index].props.hidden },
	        _react2.default.createElement("img", { className: "icon", src: index === _this.state.activeTab && element.props.iconActive ? element.props.iconActive : element.props.iconDefault }),
	        _react2.default.createElement(
	          "span",
	          { className: "name" },
	          element.props.name
	        )
	      );
	    });

	    // Remove undefined values from buttons
	    buttons = buttons.filter(Boolean);

	    var panels = this.props.children.map(function (element, index) {
	      return _react2.default.createElement(
	        "div",
	        {
	          className: "panel " + (index === _this.state.activeTab ? "active" : ""),
	          key: index },
	        element
	      );
	    });

	    return _react2.default.createElement(
	      "div",
	      { className: "tab-switcher" + (this.props.className ? " " + this.props.className : "") },
	      _react2.default.createElement(
	        "div",
	        { className: "tabs", hidden: buttons.length < 2 },
	        buttons
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "panels" },
	        panels
	      )
	    );
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "radio-filter",

	  propTypes: {
	    options: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	      value: _react2.default.PropTypes.string.isRequired,
	      label: _react2.default.PropTypes.string.isRequired
	    }).isRequired).isRequired,
	    initialChoice: _react2.default.PropTypes.string,
	    onChange: _react2.default.PropTypes.func
	  },
	  getInitialState: function getInitialState() {
	    return {
	      activeFilter: this.props.initialChoice || this.props.options[0].value
	    };
	  },

	  onChange: function onChange() {
	    var choice = this.refs.radioFilter.elements.filterBy.value;

	    this.setState({
	      activeFilter: choice
	    });

	    this.props.onChange(choice);
	  },
	  render: function render() {
	    var _this = this;

	    var options = this.props.options.map(function (option) {
	      return _react2.default.createElement(
	        "label",
	        { key: option.value, className: "radio-inline" },
	        _react2.default.createElement("input", {
	          type: "radio",
	          name: "filterBy",
	          id: "filter-radio-" + option.value,
	          value: option.value,
	          onChange: _this.onChange,
	          checked: _this.state.activeFilter === option.value }),
	        _react2.default.createElement(
	          "span",
	          null,
	          option.label
	        )
	      );
	    });

	    return _react2.default.createElement(
	      "form",
	      { ref: "radioFilter", className: "radio-filter" },
	      options
	    );
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }
/******/ ])
});
;