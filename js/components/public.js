/**
 * 作者：林创荣
 * 功能：公共入口public
 * 时间：2016年01月06日
 */
(function() {
	'use strict';

	app.import(yiqi_config.directiveUrl + '/tabMenu.directive.js', 'tabMenu.directive'); //tab导航条
	app.import(yiqi_config.directiveUrl + '/repeatDone.directive.js', 'repeatDone.directive'); //循环结束事件
	app.import(yiqi_config.serviceUrl + '/public.service.js', 'public.service'); //引入“公共接口”服务
	app.import(yiqi_config.directiveUrl + '/bsDialog.directive.js', 'bsDialog.directive'); //显示、隐藏弹框插件

	app.controller("publicCtrl", publicCtrl);
	publicCtrl.$inject = ['$timeout', '$rootScope', '$state', 'publicService'];

	function publicCtrl($timeout, $rootScope, $state, publicService) {
		var vm = this;
		vm.baseUrl = yiqi_config.baseUrl; //全局变量
		vm.imgUrl = yiqi_config.baseUrl + "img"; //全局变量

		/*****************变量 begin****************/

		vm.buttonDialog = {}; //有确定，取消按钮的参数

		/*****************变量 end****************/

		/*****************函数 begin****************/

		/*****************函数 end****************/

		(function init() {

			/*
			 * 创建一个loading动画
			 * 调用方法：window.loading.show();
			 * 调用方法：window.loading.hide();
			 */
			window.loading = {
				"show": function() {
					$timeout(function() {
						vm.showLoading = true;
					}, 0, true);
				},
				"hide": function() {
					$timeout(function() {
						vm.showLoading = false;
					}, 0, true);
				}
			}

			/*
			 * 创建一个只有确定按钮的弹框
			 * 调用方法：window.alertDialog.show("提示","操作成功");
			 * 调用方法：window.alertDialog.hide();
			 */
			window.alertDialog = {
				"show": function(title, html) {
					//加个timeout实现数据的刷新
					$timeout(function() {
						if (!!title && !!html) {
							vm.alertTitle = title;
							vm.alertHtml = html;
						} else {
							vm.alertTitle = "提示";
							vm.alertHtml = title;
						}
						angular.element("#publicAlertDialog").modal("show");
					}, 0, true);
				},
				"hide": function() {
					angular.element("#publicAlertDialog").modal("hide");
				}
			}

			/*
			 * 创建一个有确定、取消按钮的弹框
			 * 调用方法：window.buttonDialog.show(params);
			 * 调用方法：window.buttonDialog.hide();
			 */
			window.buttonDialog = {
				"show": function(params) {
					$timeout(function() {
						vm.buttonDialog.title = params.title || "提示"; //标题title
						vm.buttonDialog.html = params.html || "执行出错，请联系管理员"; //文本
						vm.buttonDialog.confirm = params.confirm || window.buttonDialog.hide; //确定函数
						vm.buttonDialog.cancel = params.cancel || window.buttonDialog.hide; //取消函数
						vm.buttonDialog.confirmText = params.confirmText || "确定"; //确定按钮文字
						vm.buttonDialog.cancelText = params.cancelText || "取消"; //取消按钮文字
						vm.buttonDialog.width = params.width || "360px"; //宽度
						angular.element("#buttonDialog").modal("show");
					}, 0, true);
				},
				"hide": function() {
					angular.element("#buttonDialog").modal("hide");
				}
			}

			/*
			 * 动画提示文字
			 * 调用语法：window.showAlertTip(data.msg);
			 * 调用语法：window.showAlertTip(["展示的文字",3000]);//3000为停留在界面上的毫秒时间
			 */
			window.alertTip = {
				"show": function(data) {
					//清除隐藏的延时处理
					$timeout.cancel(vm.alertTipPanelTimeout);
					$timeout(function() {
						//默认时间2500毫秒
						var showTime = 2500;
						//修改文字
						if (data) {
							if (data instanceof Array) {
								vm.alertTipText = data[0].toString(); //文字
								showTime = data[1]; //时间
							} else {
								vm.alertTipText = data.toString();
							}
						} else {
							vm.alertTipText = "操作完成";
						}
						//展开动画
						if (!vm.alertTipPanel) {
							vm.alertTipPanel = true;
						}
						console.log(vm.alertTipPanel);
						//倒计时隐藏动画
						vm.alertTipPanelTimeout = $timeout(function() {
							vm.alertTipPanel = false;
						}, showTime, true);
					}, 0, true);

				}
			}

		})();
	}
})();