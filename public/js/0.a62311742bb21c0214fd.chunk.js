webpackJsonp([0],{

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(68)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(70)
/* template */
var __vue_template__ = __webpack_require__(71)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-74dd49fd"
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
Component.options.__file = "resources\\assets\\js\\views\\app\\auth\\login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74dd49fd", Component.options)
  } else {
    hotAPI.reload("data-v-74dd49fd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("f8ab771e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74dd49fd\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74dd49fd\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.login .login_con h3[data-v-74dd49fd]{\n    margin: 5px 0 22px 0;\n    font-size: 20px;\n    line-height: 34px;\n    color: #0E1726;\n}\n.login h3[data-v-74dd49fd] {\n    font-size: 20px;\n    line-height: 20px;\n    color: #222222;\n    text-align: center;\n}\n.login .login_con .jump_link[data-v-74dd49fd]{\n    height: 17px;\n    line-height: 17px;\n    font-size: 12px;\n    margin-top: 16px;\n}\n.login .login_con .jump_link .register[data-v-74dd49fd] {\n    float: left;\n    color: #2878FF;\n    cursor: pointer;\n}\n.login .login_con .jump_link .forget[data-v-74dd49fd]{\n    float: right;\n    cursor: pointer;\n    color: #9FA2A8;\n}\n.login .wx_login[data-v-74dd49fd] {\n    border-top: 1px solid #C9C9C9;\n    margin-top: 40px;\n    position: relative;\n}\n.login .wx_login .wx_btn[data-v-74dd49fd]{\n    font-size: 12px;\n    color: #888888;\n    margin: 0 auto;\n    position: relative;\n    top: -10px;\n    left: 0;\n    height: 14px;\n    width: 100px;\n    background: white;\n    padding: 0 20px 0 20px;\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 70:
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
            valid: true,
            form: {},
            emailRule: [function (v) {
                return !!v || '请输入邮箱';
            }, function (v) {
                return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '邮箱格式不正确'
                );
            }],
            passwordRule: [function (v) {
                return !!v || '请输入密码';
            }]
        };
    },

    methods: {
        submit: function submit() {
            var _this = this;

            if (this.$refs.form.validate()) {
                this.$http.post('login', this.form).then(function (response) {
                    if (typeof response.code != 'undefined' && response.code == 0) {
                        _this.$router.push({
                            path: '/register_success',
                            query: { email: _this.form.email }
                        });
                    }
                    _this.$store.commit('SET_USERINFO', response.data.user);
                    _this.$store.commit('SET_TOKEN', response.data.token);
                    _this.$store.commit('getNotificationCount');

                    var redirect = _this.$route.query.redirect;
                    if (redirect) {
                        _this.$router.push(redirect);
                    } else {
                        _this.$router.push('/');
                    }
                });
            }
        },
        socialiteQQ: function socialiteQQ() {
            window.location = '/auth/qq';
        },
        socialiteWeibo: function socialiteWeibo() {
            window.location = '/auth/weibo';
        }
    }
});

/***/ }),

/***/ 71:
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
        _c("h3", [_vm._v("登录")]),
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
            _c(
              "v-btn",
              {
                attrs: { block: "", color: "primary", dark: "" },
                on: { click: _vm.submit }
              },
              [_vm._v("登录")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "jump_link" },
          [
            _c("router-link", { attrs: { to: "/register" } }, [
              _c("span", { staticClass: "register" }, [_vm._v("注册")])
            ]),
            _vm._v(" "),
            _c("router-link", { attrs: { to: "/forgetpassword" } }, [
              _c("span", { staticClass: "forget" }, [_vm._v("找回密码")])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "text-xs-center" },
          [
            _c(
              "v-btn",
              {
                staticStyle: { background: "#00adb5" },
                attrs: { fab: "", dark: "", small: "" },
                on: { click: _vm.socialiteQQ }
              },
              [
                _c(
                  "v-icon",
                  {
                    staticStyle: { "padding-top": "6px" },
                    attrs: { dark: "" }
                  },
                  [_vm._v("fab fa-qq")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-btn",
              {
                staticStyle: { background: "#f75b5b" },
                attrs: { fab: "", dark: "", small: "" },
                on: { click: _vm.socialiteWeibo }
              },
              [
                _c(
                  "v-icon",
                  {
                    staticStyle: { "padding-top": "6px" },
                    attrs: { dark: "" }
                  },
                  [_vm._v("fab fa-weibo")]
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "wx_login" }, [
      _c("div", { staticClass: "wx_btn" }, [_vm._v("第三方登陆")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-74dd49fd", module.exports)
  }
}

/***/ })

});