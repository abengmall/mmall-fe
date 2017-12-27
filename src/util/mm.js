var Hogan = require('hogan.js');

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
  },
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
  },
  // 成功提示
  successTips: function (msg) {
    alert(msg || '操作成功');
  },
  // 错误提示
  errorTips: function (msg) {
    alert(msg || '哪里不对了');
  },
  // 字段验证 验证是否为空 手机 邮箱
  validate : function(value, type){
    var value = $.trim(value);
    // 非空验证
    if('require' === type){
      return !!value;
    }
    // 手机号验证
    if('phone' === type){
      return /^1\d{10}$/.test(value);
    }
    // 邮箱格式验证
    if('email' === type){
      return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
    }
  },
  // 跳转到首页
  goHome: function () {
    window.location.href = './index.html';
  }
};
module.exports = _mm;