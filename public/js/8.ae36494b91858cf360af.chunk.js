webpackJsonp([8],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(317)
/* template */
var __vue_template__ = __webpack_require__(318)
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
Component.options.__file = "resources\\assets\\js\\views\\dashboard\\users\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e94b2fce", Component.options)
  } else {
    hotAPI.reload("data-v-e94b2fce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 317:
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
                title: '头像',
                key: 'avatar',
                render: function render(h, params) {
                    return h('Avatar', {
                        props: {
                            src: params.row.avatar
                        }
                    });
                }
            }, {
                title: '用户名',
                key: 'name'
            }, {
                title: '邮箱',
                key: 'email'
            }, {
                title: '状态',
                key: 'status',
                render: function render(h, params) {
                    return h('span', [h('Icon', {
                        props: {
                            type: 'record'
                        },
                        style: {
                            color: params.row.status == 1 ? 'rgb(142, 180, 203)' : '    color: rgb(191, 83, 41)'
                        }
                    })]);
                }
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
                            to: '/users/' + params.row.id + '/edit'
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
            var url = 'users';
            if (this.meta.current_page > 1) {
                var page = '';
                if (url.indexOf('?') != -1) {
                    page = "&page=";
                } else {
                    page = "?page=";
                }
                url = url + page + this.meta.current_page;
                this.$router.push(page + this.meta.current_page);
            }
            this.$http.get(url).then(function (response) {
                console.log(response);
                _this2.loading = false;
                _this2.tableData = response.data;
                _this2.meta = response.meta;
            });
        }
    }
});

/***/ }),

/***/ 318:
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
                  _c("Table", {
                    attrs: {
                      loading: _vm.loading,
                      data: _vm.tableData,
                      columns: _vm.tableColumns,
                      stripe: ""
                    }
                  }),
                  _vm._v(" "),
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
    require("vue-hot-reload-api")      .rerender("data-v-e94b2fce", module.exports)
  }
}

/***/ })

});