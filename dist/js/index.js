webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);
var $ = __webpack_require__(10);
var _mm = __webpack_require__(0);

__webpack_require__(1);
__webpack_require__(15);

var navSide = __webpack_require__(17);
navSide.init({ name: 'user-center' });

__webpack_require__(20);

/*_mm.request({
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
console.log(_mm.renderHtml(template, data));*/

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = window.jQuery;

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(16);

var _mm = __webpack_require__(0);
/*var _user = require('service/user-service.js');
var _cart = require('service/cart-service.js');*/
// 导航
/*var nav = {
    init : function(){
        this.bindEvent();
        this.loadUserInfo();
        this.loadCartCount();
        return this;
    },
    bindEvent : function(){
        // 登录点击事件
        $('.js-login').click(function(){
            _mm.doLogin();
        });
        // 注册点击事件
        $('.js-register').click(function(){
            window.location.href = './user-register.html';
        });
        // 退出点击事件
        $('.js-logout').click(function(){
            _user.logout(function(res){
                window.location.reload();
            }, function(errMsg){
                _mm.errorTips(errMsg);
            });
        });

    },
    // 加载用户信息
    loadUserInfo : function(){
        _user.checkLogin(function(res){
            $('.user.not-login').hide().siblings('.user.login').show()
                .find('.username').text(res.username);
        }, function(errMsg){
            // do nothing
        });
    },
    // 加载购物车数量
    loadCartCount : function(){
        _cart.getCartCount(function(res){
            $('.nav .cart-count').text(res || 0);
        }, function(errMsg){
            $('.nav .cart-count').text(0);
        });
    }
};

module.exports  = nav.init();*/

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(18);
var _mm = __webpack_require__(0);
var templateIndex = __webpack_require__(19);
// var templateIndex = require('./index.tpl');

//侧边导航
var navSide = {
    option: {
        name: '',
        navList: [{ name: 'user-center', desc: '个人中心', href: './user-center.html' }, { name: 'order-list', desc: '我的订单', href: './order-list.html' }, { name: 'user-pass-update', desc: '修改密码', href: './user-pass-update.html' }, { name: 'about', desc: '关于MMall', href: './about.html' }]
    },
    init: function init(option) {
        // 合并选项
        $.extend(this.option, option);
        this.renderNav();
    },
    //渲染导航菜单
    renderNav: function renderNav() {
        //计算active数据
        for (var i = 0, iLength = this.option.navList.length; i < iLength; i++) {
            if (this.option.navList[i].name === this.option.name) {
                this.option.navList[i].isActive = true;
            }
        }
        //渲染数据 用 hogon渲染
        var navHtml = _mm.renderHtml(templateIndex, {
            navList: this.option.navList
        });
        // 用ejs渲染 不支持ie8 9
        /*        var navHtml = _mm.renderEjsHtml(templateIndex,{
                    navList : this.option.navList
                });*/
        //将html放入容器
        $('.nav-side').html(navHtml);
    }
};

module.exports = navSide;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "{{#navList}}\r\n{{#isActive}}\r\n<li class=\"nav-item active\">\r\n{{/isActive}}\r\n{{^isActive}}\r\n<li class=\"nav-item\">\r\n{{/isActive}}\r\n    <a class=\"link\" href=\"{{href}}\">{{desc}}</a>\r\n</li>\r\n{{/navList}}";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(21);
var _mm = __webpack_require__(0);

var header = {
    init: function init() {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function onLoad() {
        var keyword = _mm.getUrlParam('keyword');
        if (keyword) {
            //keyword存在，则回填输入框
            // 亲测此语句无效 当前location是不带参数的
            $('#search-input').val(keyword);
        }
    },
    bindEvent: function bindEvent() {
        var _this = this;
        $('#search-btn').click(function () {
            //点击搜索按钮，做提交
            _this.searchSubmit();
        });
        //输入回车后做提交
        $('#search-input').keyup(function (e) {
            if (e.keyCode === 13) {
                _this.searchSubmit();
            }
        });
    },
    //搜索的提交
    searchSubmit: function searchSubmit() {
        var keyword = $.trim($('#search-input').val());
        // 如果提交的时候有keyword，正常跳转到list页；
        if (keyword) {
            window.location.href = './list.html?keyword=' + keyword;
        } else {
            //keyword为空，直接返回首页
            _mm.goHome();
        }
    }
};

module.exports = header.init();

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[7]);