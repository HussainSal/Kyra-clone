"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/NavOptions/NavOption.tsx":
/*!*********************************************!*\
  !*** ./components/NavOptions/NavOption.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavOption_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavOption.module.css */ \"./components/NavOptions/NavOption.module.css\");\n/* harmony import */ var _NavOption_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NavOption_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n\n\n\n\nconst data = [\n    {\n        id: \"creator\",\n        title: \"Creator\"\n    },\n    {\n        id: \"brands\",\n        title: \"Brands\"\n    },\n    {\n        id: \"carrers\",\n        title: \"Carrers\"\n    }\n];\nconst NavOption = (param)=>{\n    let { getSection  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_NavOption_module_css__WEBPACK_IMPORTED_MODULE_3___default().container), \"  \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_NavOption_module_css__WEBPACK_IMPORTED_MODULE_3___default().text_container),\n            children: data.map((cur)=>{\n                return(// <ScrollLink href={`#${cur.id}`} >\n                // <p\n                //   id={cur.id}\n                //   className={styles.option}\n                //   // onClick={() => {\n                //   //   scrollToPage(cur.id);\n                //   // }}\n                //   // href={`#${cur.id}`}\n                //   key={cur.id}\n                // >\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_NavOption_module_css__WEBPACK_IMPORTED_MODULE_3___default().option),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        to: cur.id,\n                        smooth: true,\n                        duration: 500,\n                        children: cur.title\n                    }, void 0, false, {\n                        fileName: \"/Users/salman/Desktop/Kyra-clone/components/NavOptions/NavOption.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 15\n                    }, undefined)\n                }, cur.id, false, {\n                    fileName: \"/Users/salman/Desktop/Kyra-clone/components/NavOptions/NavOption.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, undefined));\n            })\n        }, void 0, false, {\n            fileName: \"/Users/salman/Desktop/Kyra-clone/components/NavOptions/NavOption.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/salman/Desktop/Kyra-clone/components/NavOptions/NavOption.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NavOption;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavOption);\nvar _c;\n$RefreshReg$(_c, \"NavOption\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdk9wdGlvbnMvTmF2T3B0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDUjtBQUdwQyxNQUFNRyxPQUFPO0lBQ1g7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRCxJQUFJO1FBQ0pDLE9BQU87SUFDVDtJQUNBO1FBQ0VELElBQUk7UUFDSkMsT0FBTztJQUNUO0NBQ0Q7QUFFRCxNQUFNQyxZQUE0RCxTQUU1RDtRQUY2RCxFQUNqRUMsV0FBVSxFQUNYO0lBRUMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVcsR0FBb0IsT0FBakJSLHdFQUFnQixFQUFDO2tCQUNsQyw0RUFBQ087WUFBSUMsV0FBV1IsNkVBQXFCO3NCQUNsQ0UsS0FBS1MsR0FBRyxDQUFDLENBQUNDLE1BQVE7Z0JBQ2pCLE9BQ0Usb0NBQW9DO2dCQUNwQyxLQUFLO2dCQUNMLGdCQUFnQjtnQkFDaEIsOEJBQThCO2dCQUM5Qix3QkFBd0I7Z0JBQ3hCLCtCQUErQjtnQkFDL0IsVUFBVTtnQkFDViwyQkFBMkI7Z0JBQzNCLGlCQUFpQjtnQkFDakIsSUFBSTs4QkFDSiw4REFBQ0w7b0JBQWlCQyxXQUFXUixxRUFBYTs4QkFDeEMsNEVBQUNDLDhDQUFJQTt3QkFBQ2EsSUFBSUYsSUFBSVQsRUFBRTt3QkFBRVksUUFBUSxJQUFJO3dCQUFFQyxVQUFVO2tDQUV6Q0osSUFBSVIsS0FBSzs7Ozs7O21CQUhGUSxJQUFJVCxFQUFFOzs7OztZQVFwQjs7Ozs7Ozs7Ozs7QUFJUjtLQS9CTUU7QUFpQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZPcHRpb25zL05hdk9wdGlvbi50c3g/ZjFkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL05hdk9wdGlvbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuaW1wb3J0IFNjcm9sbExpbmsgZnJvbSBcIi4uL1Njcm9sbExpbmtcIjtcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiBcImNyZWF0b3JcIixcbiAgICB0aXRsZTogXCJDcmVhdG9yXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJicmFuZHNcIixcbiAgICB0aXRsZTogXCJCcmFuZHNcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcImNhcnJlcnNcIixcbiAgICB0aXRsZTogXCJDYXJyZXJzXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBOYXZPcHRpb246IFJlYWN0LkZDPHsgZ2V0U2VjdGlvbjogKGlkOiBzdHJpbmcpID0+IHZvaWQgfT4gPSAoe1xuICBnZXRTZWN0aW9uLFxufSkgPT4ge1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gIGB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0X2NvbnRhaW5lcn0+XG4gICAgICAgIHtkYXRhLm1hcCgoY3VyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8vIDxTY3JvbGxMaW5rIGhyZWY9e2AjJHtjdXIuaWR9YH0gPlxuICAgICAgICAgICAgLy8gPHBcbiAgICAgICAgICAgIC8vICAgaWQ9e2N1ci5pZH1cbiAgICAgICAgICAgIC8vICAgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufVxuICAgICAgICAgICAgLy8gICAvLyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAvLyAgIC8vICAgc2Nyb2xsVG9QYWdlKGN1ci5pZCk7XG4gICAgICAgICAgICAvLyAgIC8vIH19XG4gICAgICAgICAgICAvLyAgIC8vIGhyZWY9e2AjJHtjdXIuaWR9YH1cbiAgICAgICAgICAgIC8vICAga2V5PXtjdXIuaWR9XG4gICAgICAgICAgICAvLyA+XG4gICAgICAgICAgICA8ZGl2IGtleT17Y3VyLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259ID5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2N1ci5pZH0gc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfT5cblxuICAgICAgICAgICAgICB7Y3VyLnRpdGxlfVxuICAgICAgICAgICAgICA8L0xpbms+XG48L2Rpdj4gICAgICAgICAgIFxuIC8vIDwvU2Nyb2xsTGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2T3B0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiTGluayIsImRhdGEiLCJpZCIsInRpdGxlIiwiTmF2T3B0aW9uIiwiZ2V0U2VjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRleHRfY29udGFpbmVyIiwibWFwIiwiY3VyIiwib3B0aW9uIiwidG8iLCJzbW9vdGgiLCJkdXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavOptions/NavOption.tsx\n"));

/***/ })

});