webpackJsonp([7],{

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(360)
/* template */
var __vue_template__ = __webpack_require__(326)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\dashboard\\categories\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-111e3c07", Component.options)
  } else {
    hotAPI.reload("data-v-111e3c07", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "Row",
        [
          _c(
            "Col",
            { attrs: { sapn: "24" } },
            [
              _c(
                "Card",
                [
                  _c(
                    "p",
                    {
                      staticStyle: { height: "100%", "text-align": "right" },
                      attrs: { slot: "title" },
                      slot: "title"
                    },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/categories/add" } },
                        [
                          _c(
                            "Button",
                            {
                              attrs: {
                                type: "primary",
                                icon: "android-add-circle"
                              }
                            },
                            [_vm._v("添加分类")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Table",
                    {
                      attrs: {
                        loading: _vm.loading,
                        data: _vm.tableData,
                        columns: _vm.tableColumns,
                        stripe: ""
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticStyle: { margin: "10px", overflow: "hidden" } },
                        [
                          _c("div", { staticStyle: { float: "right" } }, [
                            _vm._v(
                              "\n\n                            2\n                        "
                            )
                          ])
                        ]
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-111e3c07", module.exports)
  }
}

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            loading: true
        };
    }
});

/***/ })

});