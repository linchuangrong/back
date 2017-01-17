/**
 * 作者：林创荣
 * 功能：待办事项
 * 时间：2016年01月08日
 */
(function() {
	'use strict';
	
	app.import(yiqi_config.directiveUrl + '/breadcrumb.directive.js', 'breadcrumb.directive'); //面包屑导航条
	app.import(yiqi_config.directiveUrl + '/layDate.directive.js', 'layDate.directive'); //日期插件

	app.addController("activityIncreaseCtrl", activityIncreaseCtrl);
	activityIncreaseCtrl.$inject = ['$rootScope', '$window'];

	function activityIncreaseCtrl($rootScope, $window) {
		var vm = this;
		$rootScope.title = "新增活动";

		/*****************变量 begin****************/

		//tab选项卡标题
		vm.tabMenu = [{
			"name": "活动分类",
			"active": false,
			"url": "activity.activityClassify"
		}, {
			"name": "已上线活动",
			"active": false,
			"url": "activity.activityOnline"
		}, {
			"name": "待审核活动",
			"active": false,
			"url": "activity.activityAuditing"
		}, {
			"name": "项目回收站",
			"active": false,
			"url": "activity.activityRecycle"
		}, {
			"name": "新增活动",
			"active": true,
			"url": "activity.activityIncrease"
		}];

		//面包屑标题
		vm.smallMenu = [{
			"name": "已上线活动",
			"url": "activity.activityOnline"
		}, {
			"name": "新增活动分类",
			"url": ""
		}];
		vm.searchForm={
			"start_time":"",
			"end_time":""
		};
		/*****************变量 end****************/

		/*****************函数 begin****************/
		vm.setId = setIdFn;
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

	}
})();