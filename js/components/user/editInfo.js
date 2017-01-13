/**
 * 作者：林创荣
 * 功能：待办事项
 * 时间：2016年01月08日
 */
(function() {
	'use strict';
	
	app.import(yiqi_config.directiveUrl + '/breadcrumb.directive.js', 'breadcrumb.directive'); //面包屑导航条

	app.addController("editInfoCtrl", editInfoCtrl);
	editInfoCtrl.$inject = ['$rootScope'];

	function editInfoCtrl($rootScope) {
		var vm = this;
		$rootScope.title = "待办事项";

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

		//面包屑标题
		vm.smallMenu = [{
			"name": "用户管理",
			"url": "user.manage"
		}, {
			"name": "编辑个人信息",
			"url": ""
		}];

		/*****************变量 end****************/

		/*****************函数 begin****************/

		/*****************函数 end****************/

		//
		//
		//
		//
		//
		//----------------------------联系人图表------------------------------------------
		//
		//
		//
		//
		//

	}
})();