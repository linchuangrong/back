/**
 * 作者：林创荣
 * 功能：新增筹款
 * 时间：2016年01月11日
 */
(function() {
	'use strict';

	app.import(yiqi_config.directiveUrl + '/layDate.directive.js', 'layDate.directive'); //日期插件

	app.addController("addCrowdfundCtrl", addCrowdfundCtrl);
	addCrowdfundCtrl.$inject = ['$rootScope', '$window'];

	function addCrowdfundCtrl($rootScope, $window) {
		var vm = this;
		$rootScope.title = "新增筹款";

		/*****************变量 begin****************/

		//tab选项卡标题
		vm.tabMenu = [{
			"name": "已上线筹款",
			"active": false,
			"url": "crowdfund.crowdfundReleaseList"
		}, {
			"name": "待审核筹款",
			"active": false,
			"url": "crowdfund.crowdfundExamineList"
		}, {
			"name": "已成功筹款",
			"active": false,
			"url": "crowdfund.crowdfundSuccessList"
		}, {
			"name": "筹款类型",
			"active": false,
			"url": "crowdfund.crowdfundTypeList"
		}, {
			"name": "新增筹款",
			"active": true,
			"url": "crowdfund.addCrowdfund"
		}];
		
		vm.submitForm={
			"begin_time":"",
			"end_time":""
		}

		/*****************变量 end****************/

		/*****************函数 begin****************/

		/*****************函数 end****************/


	}
})();