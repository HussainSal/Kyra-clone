/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/context.tsx":
/*!*****************************!*\
  !*** ./context/context.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppWrapper\": () => (/* binding */ AppWrapper),\n/* harmony export */   \"useAppContext\": () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    activeTab: false,\n    setActiveTab: null,\n    disableAudio: false,\n    setDisableAudio: null,\n    enableMenu: false,\n    setEnableMenu: null\n});\nconst AppWrapper = ({ children  })=>{\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [disableAudio, setDisableAudio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [enableMenu, setEnableMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            activeTab,\n            setActiveTab,\n            disableAudio,\n            setDisableAudio,\n            enableMenu,\n            setEnableMenu\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/salman/Desktop/Kyra-clone/context/context.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAppContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2NvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDOEU7QUFFOUUsTUFBTUksMkJBQWFGLG9EQUFhQSxDQUFNO0lBQ3BDRyxXQUFXLEtBQUs7SUFDaEJDLGNBQWMsSUFBSTtJQUNsQkMsY0FBYyxLQUFLO0lBQ25CQyxpQkFBaUIsSUFBSTtJQUNyQkMsWUFBWSxLQUFLO0lBQ2pCQyxlQUFlLElBQUk7QUFDckI7QUFFTyxNQUFNQyxhQUEwQyxDQUFDLEVBQUVDLFNBQVEsRUFBRSxHQUFLO0lBQ3ZFLE1BQU0sQ0FBQ1AsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2hELE1BQU0sQ0FBQ0ksY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEQsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFFbEQscUJBQ0UsOERBQUNDLFdBQVdTLFFBQVE7UUFDbEJDLE9BQU87WUFDTFQ7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7UUFDRjtrQkFFQ0U7Ozs7OztBQUdQLEVBQUU7QUFDSyxNQUFNRyxnQkFBZ0IsSUFBTTtJQUNqQyxPQUFPZCxpREFBVUEsQ0FBQ0c7QUFDcEIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2t5cmFfY2xvbmUvLi9jb250ZXh0L2NvbnRleHQudHN4P2YxZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxhbnk+KHtcbiAgYWN0aXZlVGFiOiBmYWxzZSxcbiAgc2V0QWN0aXZlVGFiOiBudWxsLFxuICBkaXNhYmxlQXVkaW86IGZhbHNlLFxuICBzZXREaXNhYmxlQXVkaW86IG51bGwsXG4gIGVuYWJsZU1lbnU6IGZhbHNlLFxuICBzZXRFbmFibGVNZW51OiBudWxsLFxufSk7XG5cbmV4cG9ydCBjb25zdCBBcHBXcmFwcGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBhbnkgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkaXNhYmxlQXVkaW8sIHNldERpc2FibGVBdWRpb10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbmFibGVNZW51LCBzZXRFbmFibGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBhY3RpdmVUYWIsXG4gICAgICAgIHNldEFjdGl2ZVRhYixcbiAgICAgICAgZGlzYWJsZUF1ZGlvLFxuICAgICAgICBzZXREaXNhYmxlQXVkaW8sXG4gICAgICAgIGVuYWJsZU1lbnUsXG4gICAgICAgIHNldEVuYWJsZU1lbnUsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IHVzZUFwcENvbnRleHQgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJBcHBDb250ZXh0IiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwiZGlzYWJsZUF1ZGlvIiwic2V0RGlzYWJsZUF1ZGlvIiwiZW5hYmxlTWVudSIsInNldEVuYWJsZU1lbnUiLCJBcHBXcmFwcGVyIiwiY2hpbGRyZW4iLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXBwQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/context.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/context */ \"./context/context.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_context__WEBPACK_IMPORTED_MODULE_1__.AppWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/salman/Desktop/Kyra-clone/pages/_app.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this),\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/salman/Desktop/Kyra-clone/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStDO0FBQ2pCO0FBR2YsU0FBU0MsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlELHFCQUNFO2tCQUNFLDRFQUFDSCx3REFBVUE7OzhCQUNULDhEQUFDRTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Z0JBQUs7Ozs7Ozs7O0FBSXJDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9reXJhX2Nsb25lLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBXcmFwcGVyIH0gZnJvbSBcIkAvY29udGV4dC9jb250ZXh0XCI7XG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QXBwV3JhcHBlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPntcIiBcIn1cbiAgICAgIDwvQXBwV3JhcHBlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJBcHBXcmFwcGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();