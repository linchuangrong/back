/**
 * 作者：林创荣
 * 功能：实名认证审核
 * 时间：2016年01月10日
 */
(function() {
	'use strict';
	
	app.import(yiqi_config.directiveUrl + '/breadcrumb.directive.js', 'breadcrumb.directive'); //面包屑导航条

	app.addController("certificationDetailCtrl", certificationDetailCtrl);
	certificationDetailCtrl.$inject = ['$rootScope'];

	function certificationDetailCtrl($rootScope) {
		var vm = this;
		$rootScope.title = "实名认证审核";

		/*****************变量 begin****************/

		//tab选项卡标题
		vm.tabMenu = [{
			"name": "用户管理",
			"active": false,
			"url": "user.manage"
		}, {
			"name": "个人实名认证",
			"active": true,
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
			"name": "个人实名认证",
			"url": "user.certification"
		}, {
			"name": "实名认证审核",
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