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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_delangle_Git_flaviendelangle_circonscriptions_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_delangle_Git_flaviendelangle_circonscriptions_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_delangle_Git_flaviendelangle_circonscriptions_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Map */ \"./src/components/Map/index.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref2 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2__.useState(), 2), districts = ref2[0], setDistricts = ref2[1];\n    react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function() {\n        var fetchDb = function() {\n            var _ref = _asyncToGenerator(_home_delangle_Git_flaviendelangle_circonscriptions_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response, db, lookup, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, feature1, ref3, ref1, county, districtNumber, newDistricts;\n                return _home_delangle_Git_flaviendelangle_circonscriptions_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return window.fetch(\"/circonscriptions-legislatives.json\");\n                        case 2:\n                            response = _ctx.sent;\n                            _ctx.next = 5;\n                            return response.json();\n                        case 5:\n                            db = _ctx.sent;\n                            lookup = {};\n                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n                            _ctx.prev = 8;\n                            for(_iterator = db.features[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                                feature1 = _step.value;\n                                ref3 = feature1.properties.REF;\n                                ref1 = _slicedToArray(ref3.split(\"-\").map(Number), 2), county = ref1[0], districtNumber = ref1[1];\n                                if (!lookup[ref3]) {\n                                    lookup[ref3] = {\n                                        county: county,\n                                        districtNumber: districtNumber,\n                                        coordinates: []\n                                    };\n                                }\n                                console.log(feature1.geometry);\n                                lookup[ref3].coordinates.push([]);\n                            }\n                            _ctx.next = 16;\n                            break;\n                        case 12:\n                            _ctx.prev = 12;\n                            _ctx.t0 = _ctx[\"catch\"](8);\n                            _didIteratorError = true;\n                            _iteratorError = _ctx.t0;\n                        case 16:\n                            _ctx.prev = 16;\n                            _ctx.prev = 17;\n                            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                                _iterator.return();\n                            }\n                        case 19:\n                            _ctx.prev = 19;\n                            if (!_didIteratorError) {\n                                _ctx.next = 22;\n                                break;\n                            }\n                            throw _iteratorError;\n                        case 22:\n                            return _ctx.finish(19);\n                        case 23:\n                            return _ctx.finish(16);\n                        case 24:\n                            newDistricts = db.features.map(function(feature) {\n                                var ref = _slicedToArray(feature.properties.REF.split(\"-\").map(Number), 2), county = ref[0], districtNumber = ref[1];\n                            });\n                        case 25:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        8,\n                        12,\n                        16,\n                        24\n                    ],\n                    [\n                        17,\n                        ,\n                        19,\n                        23\n                    ]\n                ]);\n            }));\n            return function fetchDb() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchDb();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            width: 500,\n            height: 500\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_Map__WEBPACK_IMPORTED_MODULE_3__.Map, {}, void 0, false, {\n            fileName: \"/home/delangle/Git/flaviendelangle/circonscriptions/pages/index.tsx\",\n            lineNumber: 41,\n            columnNumber: 11\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/delangle/Git/flaviendelangle/circonscriptions/pages/index.tsx\",\n        lineNumber: 40,\n        columnNumber: 7\n    }, _this);\n};\n_s(Home, \"iqNZBHgK+y1KKJtj5ro0xoTcnl8=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFDTCxDQUNUO0NBQ0Y7R0F0Q0tDLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQXdDViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgTWFwIH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL01hcFwiO1xuaW1wb3J0IHtEaXN0cmljdH0gZnJvbSBcIi4uL3NyYy9tb2RlbHMvZGlzdHJpY3RcIjtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtkaXN0cmljdHMsIHNldERpc3RyaWN0c10gPSBSZWFjdC51c2VTdGF0ZTxEaXN0cmljdFtdPigpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERiID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3cuZmV0Y2goJy9jaXJjb25zY3JpcHRpb25zLWxlZ2lzbGF0aXZlcy5qc29uJylcbiAgICAgIGNvbnN0IGRiID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICAgIGNvbnN0IGxvb2t1cDogeyBbcmVmOiBzdHJpbmddOiBEaXN0cmljdCB9ID0ge31cbiAgICAgIGZvciAoY29uc3QgZmVhdHVyZSBvZiBkYi5mZWF0dXJlcykge1xuICAgICAgICBjb25zdCByZWYgPSBmZWF0dXJlLnByb3BlcnRpZXMuUkVGXG4gICAgICAgIGNvbnN0IFtjb3VudHksIGRpc3RyaWN0TnVtYmVyXSA9IHJlZi5zcGxpdCgnLScpLm1hcChOdW1iZXIpXG4gICAgICAgIGlmICghbG9va3VwW3JlZl0pIHtcbiAgICAgICAgICBsb29rdXBbcmVmXSA9IHtcbiAgICAgICAgICAgIGNvdW50eSxcbiAgICAgICAgICAgIGRpc3RyaWN0TnVtYmVyLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGZlYXR1cmUuZ2VvbWV0cnkpXG4gICAgICAgIGxvb2t1cFtyZWZdLmNvb3JkaW5hdGVzLnB1c2goW10pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld0Rpc3RyaWN0cyA9IGRiLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IHtcbiAgICAgICAgY29uc3QgW2NvdW50eSwgZGlzdHJpY3ROdW1iZXJdID0gZmVhdHVyZS5wcm9wZXJ0aWVzLlJFRi5zcGxpdCgnLScpLm1hcChOdW1iZXIpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZldGNoRGIoKVxuICB9LCBbXSlcblxuXG4gIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA1MDAsIGhlaWdodDogNTAwIH19PlxuICAgICAgICAgIDxNYXAgLz5cbiAgICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1hcCIsIkhvbWUiLCJ1c2VTdGF0ZSIsImRpc3RyaWN0cyIsInNldERpc3RyaWN0cyIsInVzZUVmZmVjdCIsImZldGNoRGIiLCJyZXNwb25zZSIsImRiIiwibG9va3VwIiwiZmVhdHVyZSIsInJlZiIsImNvdW50eSIsImRpc3RyaWN0TnVtYmVyIiwibmV3RGlzdHJpY3RzIiwid2luZG93IiwiZmV0Y2giLCJqc29uIiwiZmVhdHVyZXMiLCJwcm9wZXJ0aWVzIiwiUkVGIiwic3BsaXQiLCJtYXAiLCJOdW1iZXIiLCJjb29yZGluYXRlcyIsImNvbnNvbGUiLCJsb2ciLCJnZW9tZXRyeSIsInB1c2giLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});