/**
 * 作者：林创荣
 * 功能：系统日志
 * 时间：2016年01月08日
 */
(function() {
	'use strict';

	app.import(yiqi_config.directiveUrl + '/pagebar.directive.js', 'pagebar.directive'); //分页插件

	app.addController("manageCtrl", manageCtrl);
	manageCtrl.$inject = ['$rootScope', '$window', '$timeout'];

	function manageCtrl($rootScope, $window, $timeout) {
		var vm = this;
		$rootScope.title = "系统日志";

		/*****************变量 begin****************/

		//tab选项卡标题
		vm.tabMenu = [{
			"name": "用户管理",
			"active": true,
			"url": "user.manage"
		}, {
			"name": "个人实名认证",
			"active": false,
			"url": "user.certification"
		}, {
			"name": "企业认证",
			"active": false,
			"url": "user.companyCertification"
		}, {
			"name": "评审评估机构认证",
			"active": false,
			"url": "user.examineCertification"
		}];

		//分页参数
		vm.pageParams = {
			showPage: 5, //显示多少个页码提供用户点击，不会变
			pageSize: 10, //1页显示的数量,不会变
			current: 1, //当前页
			page_count: 40, //总共多少页
			pageChange: pageChangeFn //切换页面函数
		}

		/*****************变量 end****************/

		/*****************函数 begin****************/

		vm.setId = setIdFn;
		vm.showDeleteDialog = showDeleteDialogFn;
		vm.deleteConfirm = deleteConfirmFn;

		/*****************函数 end****************/

		(function init() {

			/*loading 模拟*/
			window.loading.show();
			$timeout(function() {
				window.loading.hide();
			}, 1000);

		})();

		//
		//
		//
		//
		//
		//----------------------------分页事件------------------------------------------
		//
		//
		//
		//
		//
		function pageChangeFn() {
			return function(param) {
				if (parseInt(param) > 0 && parseInt(param) <= vm.pageParams.page_count) {
					//获取数据
					//vm.getActiivtyList();
					//修改页码
					vm.pageParams.current = parseInt(param);
					//滚动到顶部
					angular.element($window).scrollTop(0);
				} else {
					console.log("输入非法");
				}
			}
		}
		//
		//
		//
		//
		//
		//----------------------------编辑按钮------------------------------------------
		//
		//
		//
		//
		//
		function setIdFn() {
			console.log("点击了编辑按钮");
		}
		//
		//
		//
		//
		//
		//----------------------------编辑按钮------------------------------------------
		//
		//
		//
		//
		//
		function showDeleteDialogFn() {
			var params = {
				"title": "删除提示",
				"html": "确定删除吗？",
				"confirm": vm.deleteConfirm,
				"confirmText": "确定",
				"cancel": null,
				"cancelText": "取消",
				"width": "400px"
			}
			window.buttonDialog.show(params);
		}
		//
		//
		//
		//
		//
		//----------------------------编辑按钮------------------------------------------
		//
		//
		//
		//
		//
		function deleteConfirmFn() {
			console.log("点击确定按钮");
			window.loading.show();
			$timeout(function() {
				window.buttonDialog.hide();
				window.loading.hide();
				window.alertDialog.show("提示", "删除成功");
			}, 2000);
		}
	}
})();