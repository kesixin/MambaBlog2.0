webpackJsonp([2],{

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(285)
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
                                          _c(
                                            "span",
                                            { staticClass: "headline" },
                                            [_vm._v(_vm._s(article.title))]
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
                                  _vm._v(_vm._s(article.published_time))
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

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(286);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2b84ec6c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-26d9658a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-26d9658a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

throw new Error("Module build failed: \r\n\r\n\r\n@import \"styles/index.less\";\r\n^\r\nCan't resolve './styles/index.less' in 'E:\\xampp\\htdocs\\MambaBlog2.0\\resources\\assets\\js\\views\\app\\articles'\r\n      in E:\\xampp\\htdocs\\MambaBlog2.0\\resources\\assets\\js\\views\\app\\articles\\index.vue (line 58, column 0)");

/***/ })

});