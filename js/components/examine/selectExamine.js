/**
 * 作者：林创荣
 * 功能：筹款类型
 * 时间：2016年01月12日
 */
(function() {
	'use strict';

	app.import(yiqi_config.directiveUrl + '/pagebar.directive.js', 'pagebar.directive'); //分页插件
	app.import(yiqi_config.directiveUrl + '/layDate.directive.js', 'layDate.directive'); //日期插件

	app.addController("selectExamineCtrl", selectExamineCtrl);
	selectExamineCtrl.$inject = ['$rootScope', '$window', '$state'];

	function selectExamineCtrl($rootScope, $window, $state) {
		var vm = this;
		$rootScope.title = "筹款类型";

		/*****************变量 begin****************/

		//tab选项卡标题
		vm.tabMenu = [{
			"name": "评审评估",
			"active": false,
			"url": "examine.examineList"
		}, {
			"name": "预约列表",
			"active": false,
			"url": "examine.examineOrderList"
		}, {
			"name": "进行中",
			"active": false,
			"url": "examine.examineReleaseList"
		}, {
			"name": "已结束",
			"active": false,
			"url": "examine.examineStopList"
		}, {
			"name": "新增评审评估",
			"active": true,
			"url": "examine.selectExamine"
		}];

		//应用场景
		vm.typeArray = [{
			"id": 0,
			"name": "评审"
		}, {
			"id": 1,
			"name": "评估"
		}];

		//选择模板
		vm.templateArray = [{
			"id": 1,
			"name": "模板1"
		}, {
			"id": 2,
			"name": "模板2"
		}, {
			"id": 3,
			"name": "模板3"
		}];

		vm.selectForm = {
			"type": 0,
			"template": 1
		}

		/*****************变量 end****************/

		/*****************函数 begin****************/

		vm.goToPage = goToPageFn;

		/*****************函数 end****************/

		function goToPageFn() {
			$state.go("examine.addExamine" + vm.selectForm.template, {
				'type': vm.selectForm.type
			});
		}

	}
})();