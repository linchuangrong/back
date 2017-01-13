/**
 * 作者：林创荣
 * 功能：待办事项
 * 时间：2016年01月08日
 */
(function() {
	'use strict';

	app.addController("workCtrl", workCtrl);
	workCtrl.$inject = ['$rootScope'];

	function workCtrl($rootScope) {
		var vm = this;
		$rootScope.title="待办事项";
		
		/*****************变量 begin****************/
		
		//tab选项卡标题
		vm.tabMenu = [{
			"name": "待办事项",
			"active": true,
			"url": "system.work"
		}, {
			"name": "网站数据统计",
			"active": false,
			"url": "system.data"
		}, {
			"name": "系统日志",
			"active": false,
			"url": "system.log"
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