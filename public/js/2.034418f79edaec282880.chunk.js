webpackJsonp([2],{

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(261)
/* template */
var __vue_template__ = __webpack_require__(262)
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuetify_src_components_VGrid_VContent__ = __webpack_require__(283);
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
    components: { VContent: __WEBPACK_IMPORTED_MODULE_0_vuetify_src_components_VGrid_VContent__["a" /* default */] },
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
                _this.articles = response.data;
                console.log(_this.articles);
            });
        }
    }
});

/***/ }),

/***/ 262:
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
                  _c("span", { staticClass: "headline" }, [
                    _vm._v(_vm._s(article.title))
                  ])
                ]
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

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_content_styl__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylus_components_content_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__stylus_components_content_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_ssr_bootable__ = __webpack_require__(285);
// Styles


// Mixins


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-content',

  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_ssr_bootable__["a" /* default */]],

  props: {
    tag: {
      type: String,
      default: 'main'
    }
  },

  computed: {
    styles () {
      const {
        bar, top, right, footer, bottom, left
      } = this.$vuetify.application

      return {
        paddingTop: `${top + bar}px`,
        paddingRight: `${right}px`,
        paddingBottom: `${footer + bottom}px`,
        paddingLeft: `${left}px`
      }
    }
  },

  render (h) {
    const data = {
      staticClass: 'content',
      'class': this.classes,
      style: this.styles,
      ref: 'content'
    }

    return h(this.tag, data, [
      h(
        'div',
        { staticClass: 'content--wrap' },
        this.$slots.default
      )
    ])
  }
});


/***/ }),

/***/ 284:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (1:0)\nYou may need an appropriate loader to handle this file type.\n| @import '../bootstrap'\n| @import '../browsers'\n| ");

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * SSRBootable
 *
 * @mixin
 *
 * Used in layout components (drawer, toolbar, content)
 * to avoid an entry animation when using SSR
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ssr-bootable',

  data: () => ({
    isBooted: false
  }),

  mounted () {
    // Use setAttribute instead of dataset
    // because dataset does not work well
    // with unit tests
    window.requestAnimationFrame(() => {
      this.$el.setAttribute('data-booted', true)
      this.isBooted = true
    })
  }
});


/***/ })

});