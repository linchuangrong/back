/**
 * 作者：林创荣
 * 功能：新增收货地址
 * 时间：2016年01月10日
 */
(function() {
	'use strict';
	
	app.import(yiqi_config.directiveUrl + '/breadcrumb.directive.js', 'breadcrumb.directive'); //面包屑导航条

	app.addController("activityIncreaseClassifyCtrl", activityIncreaseClassifyCtrl);
	activityIncreaseClassifyCtrl.$inject = ['$rootScope'];

	function activityIncreaseClassifyCtrl($rootScope) {
		var vm = this;
		$rootScope.title = "新增活动分类";

		/*****************变量 begin****************/

		//tab选项卡标题
		vm.tabMenu = [{
			"name": "活动分类",
			"active": true,
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
			"active": false,
			"url": "activity.activityIncrease"
		}];

		//面包屑标题
		vm.smallMenu = [{
			"name": "活动分类",
			"url": "activity.activityClassify"
		}, {
			"name": "新增活动分类",
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