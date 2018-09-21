webpackJsonp([6],{

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(352)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(318)
/* template */
var __vue_template__ = __webpack_require__(319)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources\\assets\\js\\views\\dashboard\\users\\edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d5057da", Component.options)
  } else {
    hotAPI.reload("data-v-3d5057da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 318:
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
            visible: false,
            cut_avatar: false,
            cropper: {}
        };
    },
    created: function created() {
        var _this = this;

        this.$http.get('users/' + this.$route.params.id + '/edit').then(function (response) {

            _this.form = response.data;
        });
    }
});

/***/ }),

/***/ 319:
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
            { attrs: { span: 24 } },
            [
              _c(
                "Card",
                [
                  _c(
                    "Row",
                    [
                      _c("Col", { attrs: { span: 4, offset: 4 } }, [
                        _c(
                          "div",
                          { staticClass: "cover-avatar" },
                          [
                            _c("div", { staticClass: "upload-list" }, [
                              _c("img", {
                                staticClass: "avatar",
                                attrs: { src: _vm.form.avatar }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "upload-list-cover" },
                                [
                                  _c("Icon", {
                                    attrs: { type: "ios-eye-outline" }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "fileinput",
                              attrs: {
                                type: "file",
                                accept:
                                  "image/png,image/jpeg,image/gif,image/jpg",
                                id: "fileinput"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "filelabe",
                                attrs: { for: "fileinput" }
                              },
                              [
                                _c("Icon", { attrs: { type: "iamge" } }),
                                _vm._v("修改头像")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "Modal",
                              {
                                attrs: { title: "头像" },
                                model: {
                                  value: _vm.visible,
                                  callback: function($$v) {
                                    _vm.visible = $$v
                                  },
                                  expression: "visible"
                                }
                              },
                              [
                                _vm.visible
                                  ? _c("img", {
                                      staticStyle: { width: "100%" },
                                      attrs: { src: "form.avatar" }
                                    })
                                  : _vm._e()
                              ]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "Col",
                        { attrs: { span: 10, offset: 1 } },
                        [
                          _c(
                            "Form",
                            {
                              attrs: {
                                model: _vm.form,
                                "label-position": "right",
                                "label-width": 100
                              }
                            },
                            [
                              _c(
                                "FormItem",
                                { attrs: { label: "用户名" } },
                                [
                                  _c("Input", {
                                    attrs: {
                                      size: "large",
                                      disabled: "",
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
                                { attrs: { label: "邮箱" } },
                                [
                                  _c("Input", {
                                    attrs: {
                                      size: "large",
                                      disabled: "",
                                      placeholder: "Enter something..."
                                    },
                                    model: {
                                      value: _vm.form.email,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "email", $$v)
                                      },
                                      expression: "form.email"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "FormItem",
                                { attrs: { label: "昵称" } },
                                [
                                  _c("Input", {
                                    attrs: {
                                      size: "large",
                                      placeholder: "Enter something..."
                                    },
                                    model: {
                                      value: _vm.form.nickname,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "nickname", $$v)
                                      },
                                      expression: "form.nickname"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "FormItem",
                                { attrs: { label: "Website" } },
                                [
                                  _c("Input", {
                                    attrs: {
                                      size: "large",
                                      placeholder: "Enter something..."
                                    },
                                    model: {
                                      value: _vm.form.website,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "website", $$v)
                                      },
                                      expression: "form.website"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("FormItem", { attrs: { label: "" } })
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
    require("vue-hot-reload-api")      .rerender("data-v-3d5057da", module.exports)
  }
}

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(353);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("7946f43a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d5057da\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d5057da\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.cover-avatar {\n  text-align: center;\n}\n.upload-list {\n  display: inline-block;\n  text-align: center;\n  width: 150px;\n  height: 150px;\n  line-height: 60px;\n  border: 1px solid transparent;\n  border-radius: 50%;\n  overflow: hidden;\n  background: #fff;\n  position: relative;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  margin-right: 4px;\n  margin-bottom: 20px;\n}\n.cover-avatar .upload-list .avatar {\n  width: 100%;\n  height: 100%;\n  transition: transform 0.6s ease-in, -webkit-transform 0.6s ease-in;\n}\n.cover-avatar .upload-list:hover .avatar {\n  -webkit-transform: rotateZ(360deg);\n          transform: rotateZ(360deg);\n}\n.upload-list-cover {\n  display: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.upload-list:hover .upload-list-cover {\n  display: block;\n}\n.upload-list-cover i {\n  color: #fff;\n  font-size: 20px;\n  cursor: pointer;\n  margin: 0 2px;\n  position: absolute;\n  top: 63px;\n  left: 63px;\n}\n", ""]);

// exports


/***/ })

});