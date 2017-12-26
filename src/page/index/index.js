require('./index.css');
var $ = require('jQuery');
var a = require('./a.js');

// $('body').html('hello hahah' + a());
// 测试数据接口
// http://www.happymmall.com/product/list.do?keyword=1
var _mm = require('util/mm.js');

_mm.request({
  url: '/product/list.do?keyword=1',
  success: function (res) {
    console.log(res);
  },
  error: function (err) {
    console.log(err);
  }
});

console.log(_mm.getUrlParam('abeng'));
var data = {
  screenName: "dhg",
};

var template = "Follow {{screenName}}.";
console.log(_mm.renderHtml(template, data));