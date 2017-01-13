/**
 * 作者：林创荣
 * 功能：筹款类型
 * 时间：2016年01月12日
 */
(function() {
	'use strict';

	app.import(yiqi_config.directiveUrl + '/pagebar.directive.js', 'pagebar.directive'); //分页插件
	app.import(yiqi_config.directiveUrl + '/layDate.directive.js', 'layDate.directive'); //日期插件

	app.addController("crowdfundTypeListCtrl", crowdfundTypeListCtrl);
	crowdfundTypeListCtrl.$inject = ['$rootScope', '$window'];

	function crowdfundTypeListCtrl($rootScope, $window) {
		var vm = this;
		$rootScope.title = "筹款类型";

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
			"active": true,
			"url": "crowdfund.crowdfundTypeList"
		}, {
			"name": "新增筹款",
			"active": false,
			"url": "crowdfund.addCrowdfund"
		}];

		//分页参数
		vm.pageParams = {
			showPage: 5, //显示多少个页码提供用户点击，不会变
			pageSize: 10, //1页显示的数量,不会变
			current: 1, //当前页
			page_count: 40, //总共多少页
			pageChange: pageChangeFn //切换页面函数
		}

		vm.searchForm = {
			"start_time": "",
			"end_time": ""
		}

		/*****************变量 end****************/

		/*****************函数 begin****************/

		/*****************函数 end****************/

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

	}
})();