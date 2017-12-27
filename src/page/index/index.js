require('./index.css');
var $ = require('jQuery');

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
  screenName: "dhgeeeeeddeee",
};

var template = "Follow {{screenName}}.";
console.log(_mm.renderHtml(template, data));