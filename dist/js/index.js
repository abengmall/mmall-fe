webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
var $ = __webpack_require__(3);
var a = __webpack_require__(4);

// $('body').html('hello hahah' + a());
// 测试数据接口
// http://www.happymmall.com/product/list.do?keyword=1
var _mm = __webpack_require__(5);

_mm.request({
  url: '/product/list.do?keyword=1',
  success: function (res) {
    console.log(res);
  },
  error: function (err) {
    console.log(err);
  }
});

// console.log(_mm.getUrlParam('abeng'));
/*var data = {
  screenName: "dhg",
};

var template = "Follow {{screenName}}.";
console.log(_mm.renderHtml(template, data));*/

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = window.jQuery;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function () {
  console.log('aaa');
  return 'wangabeng';
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// var Hogan = require('hogan.js');

var _mm = {
  request: function (param) {
    var _this = this;
    $.ajax({
      type: param.method || 'get',
      url: param.url || '',
      datatype: param.type || 'json',
      success: function (res) {
        // 得到数据
        if (res.status === 0) {
          typeof param.success === 'function' && param.success(res.data, res.msg);
        } else if (res.status === 1) {
          // 请求数据错误
          typeof param.error === 'function' && param.error(res.data, res.msg);
        } else if (res.status === 10) {
          // 需要登录 处理登录
          _this.dologin();
        }
      },
      err: function (err) {
        typeof param.error === 'function' && param.error(err.statusText);
      }
    })
  },
  // 处理登录
  dologin: function () {
    window.location.href = './user-login.html?redirect=' + encodeURLComponent(window.location.href);
  }/*,
  getUrlParam: function (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var result = window.location.search.substring(1).match(reg);
    return result? decodeURIComponent(result[2]): null;
  },
  // 渲染HTML模板
  renderHtml: function (htmlTemplate, data) {
    var template = Hogan.compile(htmlTemplate);
    var output = template.render(data);
    return output;
  }*/
};
module.exports = _mm;

/***/ })
],[0]);