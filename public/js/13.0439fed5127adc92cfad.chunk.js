webpackJsonp([13],{

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(375)
/* template */
var __vue_template__ = __webpack_require__(344)
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
Component.options.__file = "resources\\assets\\js\\views\\dashboard\\articles\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-501e0628", Component.options)
  } else {
    hotAPI.reload("data-v-501e0628", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 344:
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
                        { attrs: { to: "/articles/add" } },
                        [
                          _c(
                            "Button",
                            {
                              attrs: {
                                type: "primary",
                                icon: "android-add-circle"
                              }
                            },
                            [_vm._v("添加文章")]
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
                          _c(
                            "div",
                            { staticStyle: { float: "right" } },
                            [
                              _c("Page", {
                                attrs: {
                                  total: _vm.meta.total,
                                  current: _vm.meta.current_page
                                }
                              })
                            ],
                            1
                          )
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
    require("vue-hot-reload-api")      .rerender("data-v-501e0628", module.exports)
  }
}

/***/ }),

/***/ 375:
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
        var _this = this;

        return {
            loading: false,
            tableData: [],
            meta: {
                current_page: 1,
                total: 0,
                per_page: 10
            },
            tableColumns: [{
                title: 'id',
                key: 'id'
            }, {
                title: '所属分类',
                key: 'category_name',
                render: function render(h, params) {
                    return params.row.category.name;
                }
            }, {
                title: '作者',
                key: 'type',
                render: function render(h, params) {
                    return h('Tooltip', {
                        props: {
                            content: params.row.user.name
                        }
                    }, [h('Avatar', {
                        props: {
                            src: params.row.user.avatar
                        }
                    })]);
                }
            }, {
                title: '标题',
                key: 'title'
            }, {
                title: '封面图片',
                key: 'page_image',
                render: function render(h, params) {
                    return h('Avatar', {
                        props: {
                            src: params.row.page_image
                        }
                    });
                }
            }, {
                title: '发布时间',
                key: 'published_at'
            }, {
                title: '创建时间',
                key: 'created_at'
            }, {
                title: '操作',
                key: 'action',
                align: 'center',
                render: function render(h, params) {
                    return h('div', [h('router-link', {
                        props: {
                            to: '/articles/' + params.row.id + '/edit'
                        }
                    }, [h('Button', {
                        props: {
                            type: 'success',
                            shape: 'circle',
                            icon: 'edit'
                        },
                        style: {
                            marginRight: '5px'
                        }
                    })]), h('Button', {
                        props: {
                            type: 'error',
                            shape: 'circle',
                            icon: 'android-delete'
                        },
                        on: {
                            click: function click() {
                                _this.handleDelete(params);
                            }
                        }
                    })]);
                }
            }]
        };
    },
    created: function created() {
        this.loadData();
    },

    methods: {
        loadData: function loadData() {
            var _this2 = this;

            this.loading = true;
            var url = 'articles';
            if (this.meta.current_page > 1) {
                var page = '';
                if (url.indexOf('?') != -1) {
                    page = '&page=';
                } else {
                    page = '?page';
                }
                url = url + page + this.meta.current_page;
                this.$router.push(page + this.meta.current_page);
            }
            this.$http.get(url).then(function (response) {
                _this2.loading = false;
                _this2.tableData = response.data;
                _this2.meta = response.meta;
            });
        }
    }
});

/***/ })

});