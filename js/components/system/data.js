/**
 * 作者：林创荣
 * 功能：数据统计
 * 时间：2016年01月08日
 */
(function() {
	'use strict';

	app.addController("dataCtrl", dataCtrl);
	dataCtrl.$inject = ['$rootScope', '$timeout'];

	function dataCtrl($rootScope, $timeout) {
		var vm = this;
		$rootScope.title = "数据统计";

		/*****************变量 begin****************/

		//tab选项卡标题
		vm.tabMenu = [{
			"name": "待办事项",
			"active": false,
			"url": "system.work"
		}, {
			"name": "网站数据统计",
			"active": true,
			"url": "system.data"
		}, {
			"name": "系统日志",
			"active": false,
			"url": "system.log"
		}];

		/*****************变量 end****************/

		/*****************函数 begin****************/

		/*****************函数 end****************/

		(function init() {
			/*loading 模拟*/
			window.loading.show();
			$timeout(function() {
				window.loading.hide();
			}, 1000);
		})();

	}
})();