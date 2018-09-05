webpackJsonp([2],{

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(261)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(263)
/* template */
var __vue_template__ = __webpack_require__(264)
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
Component.options.__file = "resources\\assets\\js\\views\\app\\articles\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26d9658a", Component.options)
  } else {
    hotAPI.reload("data-v-26d9658a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(262);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("3cbe5580", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-26d9658a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!./index.less", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-26d9658a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!./index.less");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.btn-group-vertical > .btn-group:after,\n.btn-group-vertical > .btn-group:before,\n.btn-toolbar:after,\n.btn-toolbar:before,\n.clearfix:after,\n.clearfix:before,\n.container-fluid:after,\n.container-fluid:before,\n.container:after,\n.container:before,\n.dl-horizontal dd:after,\n.dl-horizontal dd:before,\n.form-horizontal .form-group:after,\n.form-horizontal .form-group:before,\n.modal-footer:after,\n.modal-footer:before,\n.modal-header:after,\n.modal-header:before,\n.nav:after,\n.nav:before,\n.navbar-collapse:after,\n.navbar-collapse:before,\n.navbar-header:after,\n.navbar-header:before,\n.navbar:after,\n.navbar:before,\n.pager:after,\n.pager:before,\n.panel-body:after,\n.panel-body:before,\n.row:after,\n.row:before {\n  display: table;\n  content: \" \";\n}\n.base_content {\n  z-index: 998;\n  color: #fff;\n}\n.header__NyBc {\n  height: 275px;\n  margin-top: -30px;\n}\n.header__NyBc .bg-wrapper__teZt {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  height: 387px;\n  width: 100%;\n  overflow: hidden;\n}\n.header__NyBc .background__26YF {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(-150deg, #222 15%, #373737 70%, #3c4859 94%);\n}\n.header__NyBc .container__28Ei {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 65px;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.avatar-base__19M6 {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  text-align: center;\n  position: relative;\n}\n.avatar__2sMj {\n  cursor: pointer;\n  height: 140px;\n  width: 140px;\n  border: 5px solid #fff;\n  border-radius: 15px;\n}\n.user-info__2aLr {\n  overflow: hidden;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.user-info__2aLr .name__3EWH {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.user-info__2aLr .name__3EWH .container__1Mii {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  max-width: 90%;\n}\n.user-info__2aLr .name-text__1-NA {\n  color: #fff;\n  font-size: 24px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-info__2aLr .name__3EWH .right-side__3zuc {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 0 0px;\n  flex: 1 0 0;\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n.user-info__2aLr .public__2p3C {\n  margin-left: 8px;\n  font-size: 16px;\n}\n.user-info__2aLr .header {\n  font-size: 18px;\n  font-weight: bold;\n}\n.user-info__2aLr .description {\n  font-size: 16px;\n  margin: 10px 0;\n}\n.nav__2IK2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  position: relative;\n}\n.side__1bvU {\n  width: 25%;\n  min-height: 600px;\n}\n.sidebar-base__2RIZ .header__2nTK {\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  margin-left: 20px;\n  position: relative;\n  top: 30px;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  text-align: center;\n}\n.sidebar-base__2RIZ ul {\n  margin-top: 90px;\n  -webkit-padding-start: 0;\n  width: 100% !important;\n  background-color: transparent;\n}\n.sidebar-base__2RIZ ul li {\n  list-style: none;\n  padding-right: 20px;\n  margin: 10px;\n}\n.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {\n  color: #fff!important;\n  background-color: #64b9f9;\n  z-index: 2;\n}\n.ivu-menu-vertical .ivu-menu-item:hover,\n.ivu-menu-vertical .ivu-menu-submenu-title:hover {\n  background-color: #64b9f9;\n  color: #fff!important;\n}\n.active__1IwF {\n  background-color: #64b9f9;\n  color: #fff!important;\n}\n.content-toggled__1rll {\n  right: 0;\n}\n.content__2Ok3 {\n  width: 75%;\n  -webkit-transition: right 0.3s cubic-bezier(0.17, 0.04, 0.03, 0.94);\n  -o-transition: right 0.3s cubic-bezier(0.17, 0.04, 0.03, 0.94);\n}\n.container__PZyq:hover {\n  -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.15);\n}\n.container__PZyq {\n  min-height: 600px;\n  background: #fff;\n  border-radius: 5px;\n  margin-bottom: 50px;\n  font-size: 14px;\n  -webkit-box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.08);\n  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.08);\n  -webkit-transition: -webkit-box-shadow 0.4s;\n  transition: -webkit-box-shadow 0.4s;\n  transition: box-shadow 0.4s;\n  transition: box-shadow 0.4s, -webkit-box-shadow 0.4s;\n  color: #000;\n}\n.section__3bS4 {\n  padding: 10px 15px;\n  border: none;\n  margin-bottom: 0px;\n  border-bottom: 1px solid #f2f2f2;\n}\n.section__3bS4 a {\n  color: #15b982;\n}\n.experience {\n  right: 0;\n  text-align: right;\n}\n.sn-inline {\n  list-style: none;\n  display: inline;\n  margin: 0;\n  padding: 0;\n  vertical-align: text-bottom;\n}\n.banner-profile__github {\n  margin: 0 9px 0 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.banner-profile__github i {\n  background: #222;\n  color: #fff;\n  padding: 7px 7px 6px;\n  border-radius: 3px;\n  margin-right: 7px;\n}\n.banner-profile__twitter {\n  margin: 0 9px 0 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.banner-profile__twitter i {\n  background: #ff5252;\n  color: #fff;\n  padding: 7px 7px 6px;\n  border-radius: 3px;\n  margin-right: 7px;\n}\n", ""]);

// exports


/***/ }),

/***/ 263:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            articles: []
        };
    },
    created: function created() {
        console.log("etet");
        this.loadData();
    },

    methods: {
        loadData: function loadData() {
            var _this = this;

            var url = "articles";
            this.$http.get(url).then(function (response) {
                _this.articles = response.data.data;
                console.log(_this.articles);
            });
        }
    }
});

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-content",
    [
      _c(
        "v-container",
        { attrs: { id: "article" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            _vm._l(_vm.articles, function(article) {
              return _c(
                "v-flex",
                {
                  key: article.id,
                  staticClass: "px-2 py-2",
                  attrs: { md4: "" }
                },
                [
                  _c(
                    "router-link",
                    { attrs: { to: "/articles/" + article.slug } },
                    [
                      _c(
                        "v-card",
                        { staticClass: "article-list" },
                        [
                          _c(
                            "v-card-media",
                            {
                              staticClass: "white--text",
                              attrs: {
                                height: "200px",
                                src: article.page_image
                              }
                            },
                            [
                              _c(
                                "v-container",
                                { attrs: { "fill-height": "", fluid: "" } },
                                [
                                  _c(
                                    "v-layout",
                                    { attrs: { "fill-height": "" } },
                                    [
                                      _c(
                                        "v-flex",
                                        {
                                          attrs: {
                                            xs12: "",
                                            "align-end": "",
                                            flexbox: ""
                                          }
                                        },
                                        [
                                          _c("span", [
                                            _vm._v(_vm._s(article.title))
                                          ])
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
                          ),
                          _vm._v(" "),
                          _c("v-card-title", [
                            _c(
                              "p",
                              {
                                staticClass: "grey--text text-sm-left",
                                staticStyle: { width: "100%" }
                              },
                              [
                                _c("span", [
                                  _vm._v(_vm._s(article.published_at))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      float: "right",
                                      "margin-left": "10px"
                                    }
                                  },
                                  [
                                    _c("v-icon", { attrs: { size: "10px" } }, [
                                      _vm._v("fas fa-eye")
                                    ]),
                                    _vm._v("  " + _vm._s(article.visitors))
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticStyle: { float: "right" } },
                                  [
                                    _c("v-icon", { attrs: { size: "10px" } }, [
                                      _vm._v("fas fa-user")
                                    ]),
                                    _vm._v(
                                      "  " +
                                        _vm._s(
                                          article.user.nickname
                                            ? article.user.nickname
                                            : article.user.name
                                        )
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "extra content" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(article.meta_description) +
                                "\n                        "
                            )
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
            })
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
    require("vue-hot-reload-api")      .rerender("data-v-26d9658a", module.exports)
  }
}

/***/ })

});