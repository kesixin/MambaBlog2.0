webpackJsonp([0],{

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(269)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(271)
/* template */
var __vue_template__ = __webpack_require__(272)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61f631bf"
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
Component.options.__file = "resources\\assets\\js\\views\\app\\auth\\register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61f631bf", Component.options)
  } else {
    hotAPI.reload("data-v-61f631bf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(270);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("4d44680a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-61f631bf\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-61f631bf\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.login .login_con h3[data-v-61f631bf]{\n    margin: 5px 0 22px 0;\n    font-size: 20px;\n    line-height: 34px;\n    color: #0E1726;\n}\n.login h3[data-v-61f631bf] {\n    font-size: 20px;\n    line-height: 20px;\n    color: #222222;\n    text-align: center;\n}\n.login .login_con .jump_link[data-v-61f631bf]{\n    height: 17px;\n    line-height: 17px;\n    font-size: 12px;\n    margin-top: 16px;\n}\n.login .login_con .jump_link .register[data-v-61f631bf] {\n    float: left;\n    color: #2878FF;\n    cursor: pointer;\n}\n.login .login_con .jump_link .forget[data-v-61f631bf]{\n    float: right;\n    cursor: pointer;\n    color: #9FA2A8;\n}\n.login .main .send_suc_box[data-v-61f631bf]{\n    width: 310px;\n    margin: 0 auto;\n}\n.login .main .send_suc_box .text[data-v-61f631bf]{\n    color: #797D85;\n    font-size: 14px;\n    line-height: 23px;\n    padding-top: 50px;\n}\n.login .main .send_suc_box .back[data-v-61f631bf]{\n    font-size: 14px;\n    text-align: center;\n    margin-top: 26px;\n    line-height: 20px;\n    color: #2878FF;\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 271:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var _this = this;

        return {
            valid: true,
            form: {
                name: '',
                password: '',
                password_confirmation: ''
            },
            nameRules: [function (v) {
                return !!v || '请输入昵称';
            }, function (v) {
                return v.length <= 10 || '名称必须少于8个字符';
            }, function (v) {
                return v.length >= 3 || '名称必须大于3个字符';
            }],
            emailRule: [function (v) {
                return !!v || '请输入邮箱';
            }, function (v) {
                return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '邮箱格式不正确'
                );
            }],
            passwordRule: [function (v) {
                return !!v || '请输入密码';
            }, function (v) {
                return v.length <= 16 || '密码必须少于16个字符';
            }, function (v) {
                return v.length >= 6 || '密码必须大于6个字符';
            }],
            passwordConfirmationRule: [function (v) {
                return !!v || '请输入确认密码';
            }, function (v) {
                return v == _this.form.password || '两次密码不一致';
            }]
        };
    },

    methods: {
        submit: function submit() {
            var _this2 = this;

            if (this.$refs.form.validate()) {
                this.$http.post('register', this.form).then(function (response) {
                    _this2.$router.push({
                        path: '/register_success',
                        query: { email: _this2.form.email }
                    });
                });
            }
        }
    }
});

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "main" },
      [
        _c("h3", [_vm._v("注册")]),
        _vm._v(" "),
        _c(
          "v-form",
          {
            ref: "form",
            attrs: { "lazy-validation": "" },
            model: {
              value: _vm.valid,
              callback: function($$v) {
                _vm.valid = $$v
              },
              expression: "valid"
            }
          },
          [
            _c("v-text-field", {
              attrs: { label: "用户名", rules: _vm.nameRules, required: "" },
              model: {
                value: _vm.form.name,
                callback: function($$v) {
                  _vm.$set(_vm.form, "name", $$v)
                },
                expression: "form.name"
              }
            }),
            _vm._v(" "),
            _c("v-text-field", {
              attrs: { label: "邮箱", rules: _vm.emailRule, required: "" },
              model: {
                value: _vm.form.email,
                callback: function($$v) {
                  _vm.$set(_vm.form, "email", $$v)
                },
                expression: "form.email"
              }
            }),
            _vm._v(" "),
            _c("v-text-field", {
              attrs: {
                label: "密码",
                rules: _vm.passwordRule,
                required: "",
                type: "password"
              },
              model: {
                value: _vm.form.password,
                callback: function($$v) {
                  _vm.$set(_vm.form, "password", $$v)
                },
                expression: "form.password"
              }
            }),
            _vm._v(" "),
            _c("v-text-field", {
              attrs: {
                label: "确认密码",
                rules: _vm.passwordConfirmationRule,
                required: "",
                type: "password"
              },
              model: {
                value: _vm.form.password_confirmation,
                callback: function($$v) {
                  _vm.$set(_vm.form, "password_confirmation", $$v)
                },
                expression: "form.password_confirmation"
              }
            }),
            _vm._v(" "),
            _c(
              "v-btn",
              {
                attrs: { block: "", color: "primary", dark: "" },
                on: { click: _vm.submit }
              },
              [_vm._v("注册")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "jump_link" },
          [
            _c("router-link", { attrs: { to: "/login" } }, [
              _c("span", { staticClass: "register" }, [_vm._v("已有账号?")])
            ]),
            _vm._v(" "),
            _c("router-link", { attrs: { to: "/forgetpassword" } }, [
              _c("span", { staticClass: "forget" }, [_vm._v("找回密码")])
            ])
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-61f631bf", module.exports)
  }
}

/***/ })

});