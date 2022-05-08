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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s2, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s2 = _i.next()).done); _n = true){\n            _arr.push(_s2.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar osm = {\n    maptiler: {\n        url: \"https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1\",\n        attribution: '&copy; <a href=\"https://www.maptiler.com/\">MapTiler</a> &copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'\n    }\n};\nvar getDistrictCountyCodeFromRawCountyCode = function(code) {\n    return \"0\".concat(code);\n};\nvar AdministrativeAreaShape = function(props) {\n    var _this1 = _this;\n    _s();\n    var data = props.data, type = props.type, onClick = props.onClick;\n    var polygons = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(function() {\n        return data.coordinates.map(function(polygonWithHoles) {\n            return polygonWithHoles.map(function(polygon) {\n                return polygon.map(function(el) {\n                    return [\n                        el[1],\n                        el[0]\n                    ];\n                });\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: polygons.map(function(polygon, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_3__.Polygon, {\n                interactive: true,\n                positions: polygon,\n                eventHandlers: {\n                    click: function() {\n                        return onClick(type, data);\n                    }\n                }\n            }, index, false, {\n                fileName: \"/home/delangle/Git/flaviendelangle/circonscriptions/src/components/Map/Map.tsx\",\n                lineNumber: 27,\n                columnNumber: 21\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/home/delangle/Git/flaviendelangle/circonscriptions/src/components/Map/Map.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, _this);\n};\n_s(AdministrativeAreaShape, \"bZTpwg8GgkMuRTsQBD2p7BoZoyk=\");\n_c = AdministrativeAreaShape;\nvar Map = function(props) {\n    var _this2 = _this;\n    _s1();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(null), 2), selectedCountyCode = ref[0], setSelectedCountyCode = ref[1];\n    var counties = props.counties, districts = props.districts;\n    var mapRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    console.log(counties.map(function(el) {\n        return el.code;\n    }));\n    console.log(_toConsumableArray(new Set(districts.map(function(el) {\n        return el.countyCode;\n    }))));\n    var districtsInSelectedCounty = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(function() {\n        if (selectedCountyCode == null) {\n            return [];\n        }\n        var cleanSelectedCountyCode = getDistrictCountyCodeFromRawCountyCode(selectedCountyCode);\n        console.log(cleanSelectedCountyCode);\n        return districts;\n        return districts.filter(function(district) {\n            return district.countyCode === cleanSelectedCountyCode;\n        });\n    }, [\n        selectedCountyCode,\n        districts\n    ]);\n    var handleClickAdministrativeAreaShape = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function(type, value) {\n        if (type === \"county\") {\n            return setSelectedCountyCode(value.code);\n        }\n        console.log(value);\n    }, []);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function() {\n        var handleKeyDown = function(e) {\n            if (selectedCountyCode != null && e.key === \"Escape\") {\n                setSelectedCountyCode(null);\n            }\n        };\n        window.addEventListener(\"keydown\", handleKeyDown);\n        return function() {\n            window.removeEventListener(\"keydown\", handleKeyDown);\n        };\n    }, [\n        selectedCountyCode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_3__.MapContainer, {\n        center: {\n            lat: 46.887455,\n            lng: 2.425491\n        },\n        zoom: 7,\n        ref: mapRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_3__.TileLayer, {\n                url: osm.maptiler.url,\n                attribution: osm.maptiler.attribution\n            }, void 0, false, {\n                fileName: \"/home/delangle/Git/flaviendelangle/circonscriptions/src/components/Map/Map.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, _this),\n            districtsInSelectedCounty.map(function(district) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AdministrativeAreaShape, {\n                    type: \"district\",\n                    data: district,\n                    onClick: handleClickAdministrativeAreaShape\n                }, district.ref, false, {\n                    fileName: \"/home/delangle/Git/flaviendelangle/circonscriptions/src/components/Map/Map.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 56\n                }, _this2);\n            }),\n            selectedCountyCode == null && counties.map(function(county) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AdministrativeAreaShape, {\n                    type: \"county\",\n                    onClick: handleClickAdministrativeAreaShape,\n                    data: county\n                }, county.code, false, {\n                    fileName: \"/home/delangle/Git/flaviendelangle/circonscriptions/src/components/Map/Map.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 67\n                }, _this2);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/home/delangle/Git/flaviendelangle/circonscriptions/src/components/Map/Map.tsx\",\n        lineNumber: 84,\n        columnNumber: 9\n    }, _this);\n};\n_s1(Map, \"T2fAzTOYXmZzi6pLIiK0LHJMHkY=\");\n_c1 = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c, _c1;\n$RefreshReg$(_c, \"AdministrativeAreaShape\");\n$RefreshReg$(_c1, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxFQUFFSCxHQUFHLENBQUNDLFFBQVEsQ0FBQ0UsV0FBVzs7Ozs7cUJBQ3ZDO1lBQ0RpQyx5QkFBeUIsQ0FBQ3RCLEdBQUcsQ0FBQ3lCLFNBQUFBLFFBQVE7cUNBQUksOERBQUNqQyx1QkFBdUI7b0JBQWFHLElBQUksRUFBQyxVQUFVO29CQUFDRCxJQUFJLEVBQUUrQixRQUFRO29CQUFFN0IsT0FBTyxFQUFFOEIsa0NBQWtDO21CQUFPRCxRQUFRLENBQUNlLEdBQUc7Ozs7MEJBQUk7YUFBQSxDQUFDO1lBQ2xMNUIsa0JBQWtCLElBQUksSUFBSSxJQUFJRSxRQUFRLENBQUNkLEdBQUcsQ0FBQ3lDLFNBQUFBLE1BQU07cUNBQUksOERBQUNqRCx1QkFBdUI7b0JBQVdHLElBQUksRUFBQyxRQUFRO29CQUFDQyxPQUFPLEVBQUU4QixrQ0FBa0M7b0JBQUVoQyxJQUFJLEVBQUUrQyxNQUFNO21CQUFPQSxNQUFNLENBQUNsRCxJQUFJOzs7OzBCQUFJO2FBQUEsQ0FBQzs7Ozs7O2FBQzVLLENBQ2pCO0NBQ0w7SUFyREttQixHQUFHO0FBQUhBLE1BQUFBLEdBQUc7QUE0RFQsK0RBQWVBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFwL01hcC50c3g/MWZlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hcENvbnRhaW5lciwgVGlsZUxheWVyLCBQb2x5Z29uIH0gZnJvbSBcInJlYWN0LWxlYWZsZXRcIjtcbmltcG9ydCB7TWFwIGFzIExlYWZsZXRNYXAsIHBvbHlnb259IGZyb20gJ2xlYWZsZXQnXG5pbXBvcnQgXCJsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3NcIjtcbmltcG9ydCB7RGlzdHJpY3QsIENvdW50eSwgQWRtaW5pc3RyYXRpdmVBcmVhIH0gZnJvbSBcIi4uLy4uL21vZGVscy9BZG1pbmlzdHJhdGl2ZUFyZWFcIjtcblxuY29uc3Qgb3NtID0ge1xuICAgIG1hcHRpbGVyOiB7XG4gICAgICAgIHVybDpcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9hcGkubWFwdGlsZXIuY29tL21hcHMvYmFzaWMvMjU2L3t6fS97eH0ve3l9LnBuZz9rZXk9ZlhtVHdKTTY0MnVQTFppd3poQTFcIixcbiAgICAgICAgYXR0cmlidXRpb246XG4gICAgICAgICAgICAnJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5tYXB0aWxlci5jb20vXCI+TWFwVGlsZXI8L2E+ICZjb3B5OyA8YSBocmVmPVwiaHR0cDovL29zbS5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJyxcbiAgICB9LFxufTtcblxuY29uc3QgZ2V0RGlzdHJpY3RDb3VudHlDb2RlRnJvbVJhd0NvdW50eUNvZGUgPSAoY29kZTogc3RyaW5nKSA9PiBgMCR7Y29kZX1gXG5cbmNvbnN0IEFkbWluaXN0cmF0aXZlQXJlYVNoYXBlID0gPEsgZXh0ZW5kcyAnY291bnRyeScgIHwgJ2Rpc3RyaWN0Jz4ocHJvcHM6IEFkbWluaXN0cmF0aXZlQXJlYVNoYXBlUHJvcHM8Sz4pID0+IHtcbiAgICBjb25zdCB7IGRhdGEsIHR5cGUsIG9uQ2xpY2sgfSA9IHByb3BzXG5cbiAgICBjb25zdCBwb2x5Z29ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gZGF0YS5jb29yZGluYXRlcy5tYXAocG9seWdvbldpdGhIb2xlcyA9PiBwb2x5Z29uV2l0aEhvbGVzLm1hcChwb2x5Z29uID0+IHBvbHlnb24ubWFwKGVsID0+IFtlbFsxXSwgZWxbMF1dKSkpLCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtwb2x5Z29ucy5tYXAoKHBvbHlnb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFBvbHlnb24ga2V5PXtpbmRleH0gaW50ZXJhY3RpdmUgcG9zaXRpb25zPXtwb2x5Z29ufSBldmVudEhhbmRsZXJzPXt7IGNsaWNrOiAoKSA9PiBvbkNsaWNrKHR5cGUsIGRhdGEpIH19IC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59XG5cbmludGVyZmFjZSBBZG1pbmlzdHJhdGl2ZUFyZWFTaGFwZVByb3BzPEsgZXh0ZW5kcyAnY291bnRyeScgfCAnZGlzdHJpY3QnPiB7XG4gICAgdHlwZTogSyxcbiAgICBkYXRhOiBLIGV4dGVuZHMgJ2NvdW50eScgPyBDb3VudHkgOiBEaXN0cmljdCxcbiAgICBvbkNsaWNrOiAodHlwZTogSywgdmFsdWU6IEsgZXh0ZW5kcyAnY291bnR5JyA/IENvdW50eSA6IERpc3RyaWN0KSA9PiB2b2lkXG59XG5cbmNvbnN0IE1hcCA9IChwcm9wczogTWFwUHJvcHMpID0+IHtcbiAgICBjb25zdCBbc2VsZWN0ZWRDb3VudHlDb2RlLCBzZXRTZWxlY3RlZENvdW50eUNvZGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgICBjb25zdCB7IGNvdW50aWVzLCBkaXN0cmljdHMgfSA9IHByb3BzXG5cbiAgICBjb25zdCBtYXBSZWYgPSBSZWFjdC51c2VSZWY8TGVhZmxldE1hcCB8IG51bGw+KG51bGwpO1xuXG4gICAgY29uc29sZS5sb2coY291bnRpZXMubWFwKGVsID0+IGVsLmNvZGUpKVxuICAgIGNvbnNvbGUubG9nKFsuLi5uZXcgU2V0KGRpc3RyaWN0cy5tYXAoZWwgPT4gZWwuY291bnR5Q29kZSkpXSlcblxuICAgIGNvbnN0IGRpc3RyaWN0c0luU2VsZWN0ZWRDb3VudHkgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkQ291bnR5Q29kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsZWFuU2VsZWN0ZWRDb3VudHlDb2RlID0gZ2V0RGlzdHJpY3RDb3VudHlDb2RlRnJvbVJhd0NvdW50eUNvZGUoc2VsZWN0ZWRDb3VudHlDb2RlKVxuICAgICAgICBjb25zb2xlLmxvZyhjbGVhblNlbGVjdGVkQ291bnR5Q29kZSlcblxuICAgICAgICByZXR1cm4gZGlzdHJpY3RzXG4gICAgICAgIHJldHVybiBkaXN0cmljdHMuZmlsdGVyKGRpc3RyaWN0ID0+IGRpc3RyaWN0LmNvdW50eUNvZGUgPT09IGNsZWFuU2VsZWN0ZWRDb3VudHlDb2RlKVxuICAgIH0sIFtzZWxlY3RlZENvdW50eUNvZGUsIGRpc3RyaWN0c10pXG5cbiAgICBjb25zdCBoYW5kbGVDbGlja0FkbWluaXN0cmF0aXZlQXJlYVNoYXBlID0gUmVhY3QudXNlQ2FsbGJhY2soPEsgZXh0ZW5kcyAnY291bnR5JyB8ICdkaXN0cmljdCc+KHR5cGU6IEssIHZhbHVlOiBLIGV4dGVuZHMgJ2NvdW50eScgPyBDb3VudHkgOiBEaXN0cmljdCkgPT4ge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2NvdW50eScpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRTZWxlY3RlZENvdW50eUNvZGUoKHZhbHVlIGFzIENvdW50eSkuY29kZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgIH0sIFtdKVxuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRDb3VudHlDb2RlICE9IG51bGwgJiYgZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRDb3VudHlDb2RlKG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pXG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bilcbiAgICAgICAgfVxuICAgIH0sIFtzZWxlY3RlZENvdW50eUNvZGVdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1hcENvbnRhaW5lciBjZW50ZXI9e3sgbGF0OiA0Ni44ODc0NTUsIGxuZzogMi40MjU0OTEgfX0gem9vbT17N30gcmVmPXttYXBSZWZ9ID5cbiAgICAgICAgICAgIDxUaWxlTGF5ZXJcbiAgICAgICAgICAgICAgICB1cmw9e29zbS5tYXB0aWxlci51cmx9XG4gICAgICAgICAgICAgICAgYXR0cmlidXRpb249e29zbS5tYXB0aWxlci5hdHRyaWJ1dGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZGlzdHJpY3RzSW5TZWxlY3RlZENvdW50eS5tYXAoZGlzdHJpY3QgPT4gPEFkbWluaXN0cmF0aXZlQXJlYVNoYXBlPCdkaXN0cmljdCc+IHR5cGU9J2Rpc3RyaWN0JyBkYXRhPXtkaXN0cmljdH0gb25DbGljaz17aGFuZGxlQ2xpY2tBZG1pbmlzdHJhdGl2ZUFyZWFTaGFwZX0ga2V5PXtkaXN0cmljdC5yZWZ9IC8+KX1cbiAgICAgICAgICAgIHtzZWxlY3RlZENvdW50eUNvZGUgPT0gbnVsbCAmJiBjb3VudGllcy5tYXAoY291bnR5ID0+IDxBZG1pbmlzdHJhdGl2ZUFyZWFTaGFwZTwnY291bnR5Jz4gdHlwZT0nY291bnR5JyBvbkNsaWNrPXtoYW5kbGVDbGlja0FkbWluaXN0cmF0aXZlQXJlYVNoYXBlfSBkYXRhPXtjb3VudHl9IGtleT17Y291bnR5LmNvZGV9IC8+KX1cbiAgICAgICAgPC9NYXBDb250YWluZXI+XG4gICAgKTtcbn07XG5cbmludGVyZmFjZSBNYXBQcm9wcyB7XG4gICAgY291bnRpZXM6IENvdW50eVtdXG4gICAgZGlzdHJpY3RzOiBEaXN0cmljdFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcCJdLCJuYW1lcyI6WyJSZWFjdCIsIk1hcENvbnRhaW5lciIsIlRpbGVMYXllciIsIlBvbHlnb24iLCJvc20iLCJtYXB0aWxlciIsInVybCIsImF0dHJpYnV0aW9uIiwiZ2V0RGlzdHJpY3RDb3VudHlDb2RlRnJvbVJhd0NvdW50eUNvZGUiLCJjb2RlIiwiQWRtaW5pc3RyYXRpdmVBcmVhU2hhcGUiLCJwcm9wcyIsImRhdGEiLCJ0eXBlIiwib25DbGljayIsInBvbHlnb25zIiwidXNlTWVtbyIsImNvb3JkaW5hdGVzIiwibWFwIiwicG9seWdvbldpdGhIb2xlcyIsInBvbHlnb24iLCJlbCIsIkZyYWdtZW50IiwiaW5kZXgiLCJpbnRlcmFjdGl2ZSIsInBvc2l0aW9ucyIsImV2ZW50SGFuZGxlcnMiLCJjbGljayIsIk1hcCIsInVzZVN0YXRlIiwic2VsZWN0ZWRDb3VudHlDb2RlIiwic2V0U2VsZWN0ZWRDb3VudHlDb2RlIiwiY291bnRpZXMiLCJkaXN0cmljdHMiLCJtYXBSZWYiLCJ1c2VSZWYiLCJjb25zb2xlIiwibG9nIiwiU2V0IiwiY291bnR5Q29kZSIsImRpc3RyaWN0c0luU2VsZWN0ZWRDb3VudHkiLCJjbGVhblNlbGVjdGVkQ291bnR5Q29kZSIsImZpbHRlciIsImRpc3RyaWN0IiwiaGFuZGxlQ2xpY2tBZG1pbmlzdHJhdGl2ZUFyZWFTaGFwZSIsInVzZUNhbGxiYWNrIiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVLZXlEb3duIiwiZSIsImtleSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2VudGVyIiwibGF0IiwibG5nIiwiem9vbSIsInJlZiIsImNvdW50eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Map/Map.tsx\n");

/***/ })

});