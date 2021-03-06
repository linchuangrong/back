/**
 * 作者：林创荣
 * 功能：用户未登录拦截
 * 时间：2016年10月24日
 */
(function() {
	'use strict';

	angular.module("httpInterceptor.service", [])
		.service("httpInterceptor", httpInterceptor);

	httpInterceptor.$inject = [];

	function httpInterceptor() {
		this.response = function(response) {
			//用户未登录
			if (response.data && response.data.data && response.data.data.code == 30004) {
				window.alertDialog.show("登录失效，请先登录");
				window.location.href = "#/login";
			} else if (response.data && response.data.data && response.data.data.code == 40023) {
				window.alertDialog.show("无访问权限");
				window.location.href = "#/index";
			}
			return response;
		}

	}
})();