"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Map_Map_tsx",{

/***/ "./src/components/Map/Map.tsx":
/*!************************************!*\
  !*** ./src/components/Map/Map.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar osm = {\n    maptiler: {\n        url: \"https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1\",\n        attribution: '&copy; <a href=\"https://www.maptiler.com/\">MapTiler</a> &copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'\n    }\n};\nvar purpleOptions = {\n    color: \"purple\"\n};\nvar Map = function(props) {\n    var _this1 = _this;\n    _s();\n    var districts = props.districts;\n    var mapRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_3__.MapContainer, {\n        center: {\n            lat: 46.887455,\n            lng: 2.425491\n        },\n        zoom: 7,\n        minZoom: 7,\n        ref: mapRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_3__.TileLayer, {\n                url: osm.maptiler.url,\n                attribution: osm.maptiler.attribution\n            }, void 0, false, {\n                fileName: \"/home/delangle/Git/flaviendelangle/circonscriptions/src/components/Map/Map.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, _this),\n            districts.map(function(district) {\n                var _this2 = _this1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: district.coordinates.map(function(districtPolygon, districtPolygonIndex) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_3__.Polygon, {\n                            pathOptions: purpleOptions,\n                            positions: districtPolygon.map(function(el) {\n                                return [\n                                    el[1],\n                                    el[0]\n                                ];\n                            })\n                        }, districtPolygonIndex, false, {\n                            fileName: \"/home/delangle/Git/flaviendelangle/circonscriptions/src/components/Map/Map.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 33\n                        }, _this2);\n                    })\n                }, district.ref, false, {\n                    fileName: \"/home/delangle/Git/flaviendelangle/circonscriptions/src/components/Map/Map.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 21\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/home/delangle/Git/flaviendelangle/circonscriptions/src/components/Map/Map.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, _this);\n};\n_s(Map, \"eZwvXZNGrOinO8i65lLhOza0GRY=\");\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYXAvTWFwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUErQjtBQUNrQztBQUUvQjs7QUFJbEMsSUFBTUksR0FBRyxHQUFHO0lBQ1JDLFFBQVEsRUFBRTtRQUNOQyxHQUFHLEVBQ0Msa0ZBQWtGO1FBQ3RGQyxXQUFXLEVBQ1Asa0lBQWtJO0tBQ3pJO0NBQ0o7QUFFRCxJQUFNQyxhQUFhLEdBQUc7SUFBRUMsS0FBSyxFQUFFLFFBQVE7Q0FBRTtBQUV6QyxJQUFNQyxHQUFHLEdBQUcsU0FBQ0MsS0FBZSxFQUFLOzs7SUFDN0IsSUFBTSxTQUFXLEdBQUtBLEtBQUssQ0FBbkJDLFNBQVM7SUFFakIsSUFBTUMsTUFBTSxHQUFHYix5Q0FBWSxDQUFvQixJQUFJLENBQUM7SUFFcEQscUJBQ0ksOERBQUNDLHVEQUFZO1FBQUNjLE1BQU0sRUFBRTtZQUFFQyxHQUFHLEVBQUUsU0FBUztZQUFFQyxHQUFHLEVBQUUsUUFBUTtTQUFFO1FBQUVDLElBQUksRUFBRSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxDQUFDO1FBQUVDLEdBQUcsRUFBRVAsTUFBTTs7MEJBQ3JGLDhEQUFDWCxvREFBUztnQkFDTkksR0FBRyxFQUFFRixHQUFHLENBQUNDLFFBQVEsQ0FBQ0MsR0FBRztnQkFDckJDLFdBQVcsRUFBRUgsR0FBRyxDQUFDQyxRQUFRLENBQUNFLFdBQVc7Ozs7O3FCQUN2QztZQUNESyxTQUFTLENBQUNTLEdBQUcsQ0FBQ0MsU0FBQUEsUUFBUSxFQUFJOztnQkFDdkIscUJBQ0ksOERBQUN0QiwyQ0FBYzs4QkFDVnNCLFFBQVEsQ0FBQ0UsV0FBVyxDQUFDSCxHQUFHLENBQUMsU0FBQ0ksZUFBZSxFQUFFQyxvQkFBb0IsRUFBSzt3QkFDakUscUJBQ0ksOERBQUN2QixrREFBTzs0QkFBNEJ3QixXQUFXLEVBQUVuQixhQUFhOzRCQUNyRG9CLFNBQVMsRUFBRUgsZUFBZSxDQUFDSixHQUFHLENBQUNRLFNBQUFBLEVBQUU7dUNBQUk7b0NBQUNBLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0NBQUVBLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUNBQUM7NkJBQUEsQ0FBQzsyQkFEL0NILG9CQUFvQjs7OztrQ0FDOEIsQ0FDbEU7cUJBQ0wsQ0FBQzttQkFOZUosUUFBUSxDQUFDRixHQUFHOzs7OzBCQU9oQixDQUNuQjthQUNMLENBQUM7Ozs7OzthQUNTLENBQ2pCO0NBQ0w7R0F6QktWLEdBQUc7QUFBSEEsS0FBQUEsR0FBRztBQStCVCwrREFBZUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYXAvTWFwLnRzeD8xZmVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWFwQ29udGFpbmVyLCBUaWxlTGF5ZXIsIFBvbHlnb24gfSBmcm9tIFwicmVhY3QtbGVhZmxldFwiO1xuaW1wb3J0IHsgTWFwIGFzIExlYWZsZXRNYXAgfSBmcm9tICdsZWFmbGV0J1xuaW1wb3J0IFwibGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzXCI7XG5pbXBvcnQge0Rpc3RyaWN0fSBmcm9tIFwiLi4vLi4vbW9kZWxzL2Rpc3RyaWN0XCI7XG5pbXBvcnQge3Bvc2l0aW9uc30gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XG5cbmNvbnN0IG9zbSA9IHtcbiAgICBtYXB0aWxlcjoge1xuICAgICAgICB1cmw6XG4gICAgICAgICAgICBcImh0dHBzOi8vYXBpLm1hcHRpbGVyLmNvbS9tYXBzL2Jhc2ljLzI1Ni97en0ve3h9L3t5fS5wbmc/a2V5PWZYbVR3Sk02NDJ1UExaaXd6aEExXCIsXG4gICAgICAgIGF0dHJpYnV0aW9uOlxuICAgICAgICAgICAgJyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFwdGlsZXIuY29tL1wiPk1hcFRpbGVyPC9hPiAmY29weTsgPGEgaHJlZj1cImh0dHA6Ly9vc20ub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycycsXG4gICAgfSxcbn07XG5cbmNvbnN0IHB1cnBsZU9wdGlvbnMgPSB7IGNvbG9yOiAncHVycGxlJyB9XG5cbmNvbnN0IE1hcCA9IChwcm9wczogTWFwUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGRpc3RyaWN0cyB9ID0gcHJvcHNcblxuICAgIGNvbnN0IG1hcFJlZiA9IFJlYWN0LnVzZVJlZjxMZWFmbGV0TWFwIHwgbnVsbD4obnVsbCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TWFwQ29udGFpbmVyIGNlbnRlcj17eyBsYXQ6IDQ2Ljg4NzQ1NSwgbG5nOiAyLjQyNTQ5MSB9fSB6b29tPXs3fSBtaW5ab29tPXs3fSByZWY9e21hcFJlZn0+XG4gICAgICAgICAgICA8VGlsZUxheWVyXG4gICAgICAgICAgICAgICAgdXJsPXtvc20ubWFwdGlsZXIudXJsfVxuICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uPXtvc20ubWFwdGlsZXIuYXR0cmlidXRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Rpc3RyaWN0cy5tYXAoZGlzdHJpY3QgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2Rpc3RyaWN0LnJlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGlzdHJpY3QuY29vcmRpbmF0ZXMubWFwKChkaXN0cmljdFBvbHlnb24sIGRpc3RyaWN0UG9seWdvbkluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvbHlnb24ga2V5PXtkaXN0cmljdFBvbHlnb25JbmRleH0gcGF0aE9wdGlvbnM9e3B1cnBsZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucz17ZGlzdHJpY3RQb2x5Z29uLm1hcChlbCA9PiBbZWxbMV0sIGVsWzBdXSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L01hcENvbnRhaW5lcj5cbiAgICApO1xufTtcblxuaW50ZXJmYWNlIE1hcFByb3BzIHtcbiAgICBkaXN0cmljdHM6IERpc3RyaWN0W11cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWFwQ29udGFpbmVyIiwiVGlsZUxheWVyIiwiUG9seWdvbiIsIm9zbSIsIm1hcHRpbGVyIiwidXJsIiwiYXR0cmlidXRpb24iLCJwdXJwbGVPcHRpb25zIiwiY29sb3IiLCJNYXAiLCJwcm9wcyIsImRpc3RyaWN0cyIsIm1hcFJlZiIsInVzZVJlZiIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJtaW5ab29tIiwicmVmIiwibWFwIiwiZGlzdHJpY3QiLCJGcmFnbWVudCIsImNvb3JkaW5hdGVzIiwiZGlzdHJpY3RQb2x5Z29uIiwiZGlzdHJpY3RQb2x5Z29uSW5kZXgiLCJwYXRoT3B0aW9ucyIsInBvc2l0aW9ucyIsImVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Map/Map.tsx\n");

/***/ })

});