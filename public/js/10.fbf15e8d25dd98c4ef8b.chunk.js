webpackJsonp([10],{

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(359)
/* template */
var __vue_template__ = __webpack_require__(358)
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
Component.options.__file = "resources\\assets\\js\\views\\dashboard\\categories\\add.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e8dcf96", Component.options)
  } else {
    hotAPI.reload("data-v-6e8dcf96", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 358:
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
            [
              _c(
                "Card",
                [
                  _c(
                    "Form",
                    {
                      ref: "form",
                      attrs: {
                        model: _vm.form,
                        rules: _vm.ruleValidate,
                        "label-position": "right",
                        "label-width": 100
                      }
                    },
                    [
                      _c(
                        "FormItem",
                        { attrs: { label: "分类名", prop: "name" } },
                        [
                          _c("Input", {
                            attrs: {
                              size: "large",
                              placeholder: "Enter something..."
                            },
                            model: {
                              value: _vm.form.name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "name", $$v)
                              },
                              expression: "form.name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "FormItem",
                        { attrs: { label: "描述", prop: "description" } },
                        [
                          _c("Input", {
                            attrs: {
                              size: "large",
                              placeholder: "Enter something...",
                              type: "textarea",
                              autosize: { minRows: 2, maxRows: 5 }
                            },
                            model: {
                              value: _vm.form.description,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "description", $$v)
                              },
                              expression: "form.description"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "FormItem",
                        [
                          _c("Button", { attrs: { type: "success" } }, [
                            _vm._v("添加分类")
                          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-6e8dcf96", module.exports)
  }
}

/***/ }),

/***/ 359:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            form: {},
            ruleValidate: {
                name: [{ required: true, message: '分类名不能为空' }]
            }
        };
    }
});

/***/ })

});