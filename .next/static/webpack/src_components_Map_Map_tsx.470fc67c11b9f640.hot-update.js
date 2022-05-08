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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar osm = {\n    maptiler: {\n        url: \"https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1\",\n        attribution: '&copy; <a href=\"https://www.maptiler.com/\">MapTiler</a> &copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'\n    }\n};\nvar purpleOptions = {\n    color: \"purple\"\n};\nvar Map = function(props) {\n    var _this1 = _this;\n    _s();\n    var districts = props.districts;\n    var mapRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_3__.MapContainer, {\n        center: {\n            lat: 46.887455,\n            lng: 2.425491\n        },\n        zoom: 7,\n        minZoom: 7,\n        ref: mapRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_3__.TileLayer, {\n                url: osm.maptiler.url,\n                attribution: osm.maptiler.attribution\n            }, void 0, false, {\n                fileName: \"/home/delangle/Git/flaviendelangle/circonscriptions/src/components/Map/Map.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, _this),\n            districts.slice(0, 1).map(function(district) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: district.coordinates.map(function(districtPolygon, districtPolygonIndex) {\n                        console.log(districtPolygon);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_3__.Polygon, {\n                            pathOptions: purpleOptions,\n                            positions: districtPolygon\n                        }, districtPolygonIndex, false, {\n                            fileName: \"/home/delangle/Git/flaviendelangle/circonscriptions/src/components/Map/Map.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 29\n                        }, _this1);\n                    })\n                }, district.ref, false, {\n                    fileName: \"/home/delangle/Git/flaviendelangle/circonscriptions/src/components/Map/Map.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/home/delangle/Git/flaviendelangle/circonscriptions/src/components/Map/Map.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, _this);\n};\n_s(Map, \"eZwvXZNGrOinO8i65lLhOza0GRY=\");\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYXAvTWFwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUErQjtBQUNrQztBQUUvQjs7QUFHbEMsSUFBTUksR0FBRyxHQUFHO0lBQ1JDLFFBQVEsRUFBRTtRQUNOQyxHQUFHLEVBQ0Msa0ZBQWtGO1FBQ3RGQyxXQUFXLEVBQ1Asa0lBQWtJO0tBQ3pJO0NBQ0o7QUFFRCxJQUFNQyxhQUFhLEdBQUc7SUFBRUMsS0FBSyxFQUFFLFFBQVE7Q0FBRTtBQUV6QyxJQUFNQyxHQUFHLEdBQUcsU0FBQ0MsS0FBZSxFQUFLOzs7SUFDN0IsSUFBTSxTQUFXLEdBQUtBLEtBQUssQ0FBbkJDLFNBQVM7SUFFakIsSUFBTUMsTUFBTSxHQUFHYix5Q0FBWSxDQUFvQixJQUFJLENBQUM7SUFFcEQscUJBQ0ksOERBQUNDLHVEQUFZO1FBQUNjLE1BQU0sRUFBRTtZQUFFQyxHQUFHLEVBQUUsU0FBUztZQUFFQyxHQUFHLEVBQUUsUUFBUTtTQUFFO1FBQUVDLElBQUksRUFBRSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxDQUFDO1FBQUVDLEdBQUcsRUFBRVAsTUFBTTs7MEJBQ3JGLDhEQUFDWCxvREFBUztnQkFDTkksR0FBRyxFQUFFRixHQUFHLENBQUNDLFFBQVEsQ0FBQ0MsR0FBRztnQkFDckJDLFdBQVcsRUFBRUgsR0FBRyxDQUFDQyxRQUFRLENBQUNFLFdBQVc7Ozs7O3FCQUN2QztZQUNESyxTQUFTLENBQUNTLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNDLEdBQUcsQ0FBQ0MsU0FBQUEsUUFBUTtxQ0FDL0IsOERBQUN2QiwyQ0FBYzs4QkFDVnVCLFFBQVEsQ0FBQ0UsV0FBVyxDQUFDSCxHQUFHLENBQUMsU0FBQ0ksZUFBZSxFQUFFQyxvQkFBb0IsRUFBSzt3QkFDakVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxlQUFlLENBQUM7d0JBQzVCLHFCQUNJLDhEQUFDdkIsa0RBQU87NEJBQTRCMkIsV0FBVyxFQUFFdEIsYUFBYTs0QkFDckR1QixTQUFTLEVBQUVMLGVBQWU7MkJBRHJCQyxvQkFBb0I7Ozs7a0NBQ0ksQ0FDeEM7cUJBQ0wsQ0FBQzttQkFQZUosUUFBUSxDQUFDSCxHQUFHOzs7OzBCQVFoQjthQUNwQixDQUFDOzs7Ozs7YUFDUyxDQUNqQjtDQUNMO0dBeEJLVixHQUFHO0FBQUhBLEtBQUFBLEdBQUc7QUE4QlQsK0RBQWVBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFwL01hcC50c3g/MWZlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hcENvbnRhaW5lciwgVGlsZUxheWVyLCBQb2x5Z29uIH0gZnJvbSBcInJlYWN0LWxlYWZsZXRcIjtcbmltcG9ydCB7IE1hcCBhcyBMZWFmbGV0TWFwIH0gZnJvbSAnbGVhZmxldCdcbmltcG9ydCBcImxlYWZsZXQvZGlzdC9sZWFmbGV0LmNzc1wiO1xuaW1wb3J0IHtEaXN0cmljdH0gZnJvbSBcIi4uLy4uL21vZGVscy9kaXN0cmljdFwiO1xuXG5jb25zdCBvc20gPSB7XG4gICAgbWFwdGlsZXI6IHtcbiAgICAgICAgdXJsOlxuICAgICAgICAgICAgXCJodHRwczovL2FwaS5tYXB0aWxlci5jb20vbWFwcy9iYXNpYy8yNTYve3p9L3t4fS97eX0ucG5nP2tleT1mWG1Ud0pNNjQydVBMWml3emhBMVwiLFxuICAgICAgICBhdHRyaWJ1dGlvbjpcbiAgICAgICAgICAgICcmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcHRpbGVyLmNvbS9cIj5NYXBUaWxlcjwvYT4gJmNvcHk7IDxhIGhyZWY9XCJodHRwOi8vb3NtLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnLFxuICAgIH0sXG59O1xuXG5jb25zdCBwdXJwbGVPcHRpb25zID0geyBjb2xvcjogJ3B1cnBsZScgfVxuXG5jb25zdCBNYXAgPSAocHJvcHM6IE1hcFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBkaXN0cmljdHMgfSA9IHByb3BzXG5cbiAgICBjb25zdCBtYXBSZWYgPSBSZWFjdC51c2VSZWY8TGVhZmxldE1hcCB8IG51bGw+KG51bGwpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1hcENvbnRhaW5lciBjZW50ZXI9e3sgbGF0OiA0Ni44ODc0NTUsIGxuZzogMi40MjU0OTEgfX0gem9vbT17N30gbWluWm9vbT17N30gcmVmPXttYXBSZWZ9PlxuICAgICAgICAgICAgPFRpbGVMYXllclxuICAgICAgICAgICAgICAgIHVybD17b3NtLm1hcHRpbGVyLnVybH1cbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbj17b3NtLm1hcHRpbGVyLmF0dHJpYnV0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtkaXN0cmljdHMuc2xpY2UoMCwgMSkubWFwKGRpc3RyaWN0ID0+IChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtkaXN0cmljdC5yZWZ9PlxuICAgICAgICAgICAgICAgICAgICB7ZGlzdHJpY3QuY29vcmRpbmF0ZXMubWFwKChkaXN0cmljdFBvbHlnb24sIGRpc3RyaWN0UG9seWdvbkluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkaXN0cmljdFBvbHlnb24pXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb2x5Z29uIGtleT17ZGlzdHJpY3RQb2x5Z29uSW5kZXh9IHBhdGhPcHRpb25zPXtwdXJwbGVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucz17ZGlzdHJpY3RQb2x5Z29ufS8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvTWFwQ29udGFpbmVyPlxuICAgICk7XG59O1xuXG5pbnRlcmZhY2UgTWFwUHJvcHMge1xuICAgIGRpc3RyaWN0czogRGlzdHJpY3RbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXAiXSwibmFtZXMiOlsiUmVhY3QiLCJNYXBDb250YWluZXIiLCJUaWxlTGF5ZXIiLCJQb2x5Z29uIiwib3NtIiwibWFwdGlsZXIiLCJ1cmwiLCJhdHRyaWJ1dGlvbiIsInB1cnBsZU9wdGlvbnMiLCJjb2xvciIsIk1hcCIsInByb3BzIiwiZGlzdHJpY3RzIiwibWFwUmVmIiwidXNlUmVmIiwiY2VudGVyIiwibGF0IiwibG5nIiwiem9vbSIsIm1pblpvb20iLCJyZWYiLCJzbGljZSIsIm1hcCIsImRpc3RyaWN0IiwiRnJhZ21lbnQiLCJjb29yZGluYXRlcyIsImRpc3RyaWN0UG9seWdvbiIsImRpc3RyaWN0UG9seWdvbkluZGV4IiwiY29uc29sZSIsImxvZyIsInBhdGhPcHRpb25zIiwicG9zaXRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Map/Map.tsx\n");

/***/ })

});