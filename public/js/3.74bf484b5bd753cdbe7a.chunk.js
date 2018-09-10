webpackJsonp([3],{

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(290)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(289)
/* template */
var __vue_template__ = __webpack_require__(292)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-790d7e24"
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
Component.options.__file = "resources\\assets\\js\\views\\app\\articles\\show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-790d7e24", Component.options)
  } else {
    hotAPI.reload("data-v-790d7e24", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 289:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            article: {
                user: {}
            }
        };
    },
    created: function created() {
        var _this = this;

        this.$http.get('/articles/' + this.$route.params.slug).then(function (response) {
            _this.article = response.data;
            _this.is_original = response.data.is_original == 1 ? true : false;
            _this.commentable_id = _this.article.id;
            _this.config.title = response.data.title;
            _this.config.description = response.data.meta_description;
            _this.config.image = response.data.page_image;
            document.title = _this.article.title + '| cocoyo';
        });
    }
});

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(291);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("843aa7fc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-790d7e24\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-790d7e24\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n#article .article-list[data-v-790d7e24] {\n  -webkit-transition: all 1s;\n  transition: all 1s;\n}\n#article .article-list[data-v-790d7e24]:hover {\n  -webkit-box-shadow: 8px 8px 8px -8px rgba(0, 0, 0, 0.5);\n          box-shadow: 8px 8px 8px -8px rgba(0, 0, 0, 0.5);\n  -webkit-transform: translateY(-2px);\n  transform: translateY(-2px);\n}\n#article .article-list .extra[data-v-790d7e24] {\n  max-width: 100%;\n  min-height: 0em !important;\n  -webkit-box-flex: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.05) !important;\n  position: static;\n  background: none;\n  width: auto;\n  margin: 0em 0em;\n  padding: 16px;\n  top: 0em;\n  left: 0em;\n  color: rgba(0, 0, 0, 0.4);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-transition: color 0.1s ease;\n  transition: color 0.1s ease;\n}\n#article .pagination .icon[data-v-790d7e24] {\n  font-size: 10px !important;\n}\n#article .article-title[data-v-790d7e24] {\n  font-size: 32px;\n  font-weight: 600;\n  text-align: center;\n  margin-bottom: 12px;\n}\n#article .meta[data-v-790d7e24] {\n  margin-bottom: 15px;\n  margin-top: 10px;\n  text-align: center;\n}\n#article .meta .user-card[data-v-790d7e24] {\n  display: inline-block;\n  margin-right: 15px;\n}\n#article .meta .user-card h4[data-v-790d7e24] {\n  display: inline;\n  vertical-align: middle;\n  margin-right: 8px;\n  font-weight: 400;\n  margin: 0 10px 0 0;\n  font-size: 14px;\n  line-height: 1.66666667;\n  margin-right: 20px;\n}\n#article .meta .user-card .time[data-v-790d7e24] {\n  vertical-align: middle;\n  font-size: 12px;\n  color: #9b9b9b;\n}\n#article .meta .avatar img[data-v-790d7e24] {\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  border: 1px solid #fff;\n  background: #fff;\n  padding: 3px;\n  border: 1px solid #c5c5c5;\n  border-radius: 50%;\n}\n#article .meta .actions[data-v-790d7e24] {\n  display: inline-block;\n}\n#article .meta .actions a[data-v-790d7e24] {\n  font-size: 12px;\n  margin-right: 5px;\n  color: #9b9b9b;\n}\n@media (min-width: 768px) {\n.container-show[data-v-790d7e24] {\n    width: 750px;\n}\n}\n@media (min-width: 992px) {\n.container-show[data-v-790d7e24] {\n    width: 970px;\n}\n}\n@media (min-width: 1200px) {\n.container-show[data-v-790d7e24] {\n    width: 1170px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-content",
    { staticClass: "main-content" },
    [
      _c(
        "v-container",
        {
          staticClass: "container-show",
          attrs: { "grid-list-x1": "", id: "article" }
        },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c("v-flex", { attrs: { md10: "", "offset-md1": "" } }, [
                _c("h1", { staticClass: "article-title" }, [
                  _vm._v(_vm._s(_vm.article.title))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "meta",
                    staticStyle: { "text-align": "center" }
                  },
                  [
                    _c("div", { staticStyle: { "text-align": "center" } }, [
                      _c("div", { staticClass: "user-card size60" }, [
                        _c(
                          "a",
                          { staticClass: "avatar", attrs: { href: "" } },
                          [
                            _c("img", {
                              staticClass: "img-circle",
                              staticStyle: { width: "30px", height: "30px" },
                              attrs: { src: _vm.article.user.avatar }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "h4",
                          [
                            _c(
                              "router-link",
                              {
                                staticStyle: { color: "#15b982" },
                                attrs: { to: "/users/" + _vm.article.user.name }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.article.user.nickname
                                      ? _vm.article.user.nickname
                                      : _vm.article.user.name
                                  )
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "time",
                          {
                            staticStyle: {
                              "vertical-align": "middle",
                              "font-size": "12px",
                              color: "#9b9b9b"
                            }
                          },
                          [
                            _vm._v(
                              "发表于 " +
                                _vm._s(_vm.article.published_individualization)
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "actions" })
                    ])
                  ]
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-790d7e24", module.exports)
  }
}

/***/ })

});