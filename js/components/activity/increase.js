/**
 * 作者：林创荣
 * 功能：待办事项
 * 时间：2016年01月08日
 */
(function() {
	'use strict';
	
	app.import(yiqi_config.directiveUrl + '/breadcrumb.directive.js', 'breadcrumb.directive'); //面包屑导航条
	app.import(yiqi_config.directiveUrl + '/layDate.directive.js', 'layDate.directive'); //日期插件

	app.addController("increaseCtrl", increaseCtrl);
	increaseCtrl.$inject = ['$rootScope'];

	function increaseCtrl($rootScope) {
		var vm = this;
		$rootScope.title = "新增活动分类";

		/*****************变量 begin****************/

		//tab选项卡标题
		vm.tabMenu = [{
			"name": "活动分类",
			"active": false,
			"url": "activity.classify"
		}, {
			"name": "已上线活动",
			"active": true,
			"url": "activity.online"
		}, {
			"name": "待审核活动",
			"active": false,
			"url": "activity.auditing"
		}, {
			"name": "项目回收站",
			"active": false,
			"url": "activity.recycle"
		}];

		//面包屑标题
		vm.smallMenu = [{
			"name": "活动分类",
			"url": "activity.classify"
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