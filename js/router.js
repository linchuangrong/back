/**
 * 作者：林创荣
 * 功能：定义全局路由
 * 		 定义$rootScope.currentRouter来存储当前页面的路由名,用来设置左侧菜单栏的active状态
 * 时间：2016年9月2日
 */
(function() {
	"use strict";

	app.import(yiqi_config.baseUrl + 'js/libs/angular/angular-ui-router.min.js', 'ui.router'); //引入ui-router
	app.import(yiqi_config.serviceUrl + '/loadFile.service.js', 'load.file'); //引入动态加载js插件

	app.config(webRouter);
	webRouter.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider', '$controllerProvider', 'loadFileProvider', 'httpInterceptorProvider'];

	function webRouter($httpProvider, $stateProvider, $urlRouterProvider, $controllerProvider, loadFileProvider, httpInterceptorProvider) {

		//注入HTTP拦截器,用来检测用户是否未登录
		$httpProvider.interceptors.push(httpInterceptorProvider.$get);

		//设置动态添加controller的方法
		app.addController = $controllerProvider.register;

		//设置路由
		$urlRouterProvider.otherwise("/login");
		$stateProvider
			.state("login", login()) //登录
			.state("system", system()) //首页
			.state("system.work", work()) //待办事项
			.state("system.data", data()) //数据统计
			.state("system.log", log()) //系统日志
			.state("user", user()) //用户管理
			.state("user.manage", manage()) //用户管理
			.state("user.editInfo", editInfo()) //编辑用户信息
			.state("user.address", address()) //收货地址
			.state("user.addAddress", addAddress()) //收货地址
			.state("user.bankcard", bankcard()) //银行卡列表
			.state("user.addBankcard", addBankcard()) //新增银行卡
			.state("user.certification", certification()) //实名认证列表
			.state("user.certificationDetail", certificationDetail()) //实名认证审核
			.state("user.companyCertification", companyCertification()) //企业认证列表
			.state("user.companyCertificationDetail", companyCertificationDetail()) //企业认证审核
			.state("user.examineCertification", examineCertification()) //评审评估机构认证
			.state("user.examineCertificationDetail", examineCertificationDetail()) //评审评估机构认证
			/*宁耀鹏 begin*/
			.state("activity", activity()) //活动管理
			.state("activity.activityClassify", activityClassify()) //活动分类
			.state("activity.activityIncreaseClassify", activityIncreaseClassify()) //新增活动分类
			.state("activity.activityCompileClassify", activityCompileClassify()) //编辑活动分类
			.state("activity.activityOnline", activityOnline()) //已上线活动
			.state("activity.activityIncrease", activityIncrease()) //新增活动
			.state("activity.activityChargeTicket", activityChargeTicket()) //新增活动--收费票--弹窗
			.state("activity.activityAuditing", activityAuditing()) //待审核活动
			.state("activity.activityRecycle", activityRecycle()) //项目回收站
			/*宁耀鹏 end*/
			.state("crowdfund", crowdfund()) //筹款管理
			.state("crowdfund.crowdfundTypeList", crowdfundTypeList()) //筹款类型
			.state("crowdfund.crowdfundReleaseList", crowdfundReleaseList()) //已上线筹款
			.state("crowdfund.crowdfundExamineList", crowdfundExamineList()) //待审核筹款
			.state("crowdfund.crowdfundSuccessList", crowdfundSuccessList()) //已成功筹款
			.state("crowdfund.addCrowdfund", addCrowdfund()) //新增筹款
		;

		//登录
		function login() {
			return {
				url: '/login',
				templateUrl: yiqi_config.baseUrl + "js/components/login/login.tpl.html",
				controller: 'loginCtrl as login',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "login/login.js")
				}
			}
		}

		//首页
		function system() {
			return {
				url: '/system',
				templateUrl: yiqi_config.baseUrl + "js/components/system/system.tpl.html",
				controller: 'systemCtrl as system',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "system/system.js")
				}
			}
		}

		//待办事项
		function work() {
			return {
				url: '/work',
				templateUrl: yiqi_config.baseUrl + "js/components/system/work.tpl.html",
				controller: 'workCtrl as work',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "system/work.js")
				}
			}
		}

		//数据统计
		function data() {
			return {
				url: '/data',
				templateUrl: yiqi_config.baseUrl + "js/components/system/data.tpl.html",
				controller: 'dataCtrl as data',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "system/data.js")
				}
			}
		}

		//系统日志
		function log() {
			return {
				url: '/log',
				templateUrl: yiqi_config.baseUrl + "js/components/system/log.tpl.html",
				controller: 'logCtrl as log',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "system/log.js")
				}
			}
		}

		//用户管理
		function user() {
			return {
				url: '/user',
				templateUrl: yiqi_config.baseUrl + "js/components/user/user.tpl.html",
				controller: 'userCtrl as user',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "user/user.js")
				}
			}
		}

		//用户管理
		function manage() {
			return {
				url: '/manage',
				templateUrl: yiqi_config.baseUrl + "js/components/user/manage.tpl.html",
				controller: 'manageCtrl as manage',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "user/manage.js")
				}
			}
		}

		//编辑个人信息
		function editInfo() {
			return {
				url: '/manage/editInfo',
				templateUrl: yiqi_config.baseUrl + "js/components/user/editInfo.tpl.html",
				controller: 'editInfoCtrl as editInfo',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "user/editInfo.js")
				}
			}
		}

		//收货地址
		function address() {
			return {
				url: '/manage/address',
				templateUrl: yiqi_config.baseUrl + "js/components/user/address.tpl.html",
				controller: 'addressCtrl as address',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "user/address.js")
				}
			}
		}

		//新增收货地址
		function addAddress() {
			return {
				url: '/manage/addAddress',
				templateUrl: yiqi_config.baseUrl + "js/components/user/addAddress.tpl.html",
				controller: 'addAddressCtrl as addAddress',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "user/addAddress.js")
				}
			}
		}

		//银行卡列表
		function bankcard() {
			return {
				url: '/manage/bankcard',
				templateUrl: yiqi_config.baseUrl + "js/components/user/bankcard.tpl.html",
				controller: 'bankcardCtrl as bankcard',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "user/bankcard.js")
				}
			}
		}

		//新增银行卡
		function addBankcard() {
			return {
				url: '/manage/addBankcard',
				templateUrl: yiqi_config.baseUrl + "js/components/user/addBankcard.tpl.html",
				controller: 'addBankcardCtrl as addBankcard',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "user/addBankcard.js")
				}
			}
		}

		//实名认证
		function certification() {
			return {
				url: '/certification',
				templateUrl: yiqi_config.baseUrl + "js/components/user/certification.tpl.html",
				controller: 'certificationCtrl as certification',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "user/certification.js")
				}
			}
		}

		//实名认证审核
		function certificationDetail() {
			return {
				url: '/certificationDetail/:id',
				templateUrl: yiqi_config.baseUrl + "js/components/user/certificationDetail.tpl.html",
				controller: 'certificationDetailCtrl as certificationDetail',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "user/certificationDetail.js")
				}
			}
		}

		//企业认证
		function companyCertification() {
			return {
				url: '/companyCertification',
				templateUrl: yiqi_config.baseUrl + "js/components/user/companyCertification.tpl.html",
				controller: 'companyCertificationCtrl as companyCertification',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "user/companyCertification.js")
				}
			}
		}

		//企业认证审核
		function companyCertificationDetail() {
			return {
				url: '/companyCertificationDetail/:id',
				templateUrl: yiqi_config.baseUrl + "js/components/user/companyCertificationDetail.tpl.html",
				controller: 'companyCertificationDetailCtrl as companyCertificationDetail',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "user/companyCertificationDetail.js")
				}
			}
		}

		//评审评估机构认证
		function examineCertification() {
			return {
				url: '/examineCertification',
				templateUrl: yiqi_config.baseUrl + "js/components/user/examineCertification.tpl.html",
				controller: 'examineCertificationCtrl as examineCertification',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "user/examineCertification.js")
				}
			}
		}

		//评审评估机构认证审核
		function examineCertificationDetail() {
			return {
				url: '/examineCertificationDetail/:id',
				templateUrl: yiqi_config.baseUrl + "js/components/user/examineCertificationDetail.tpl.html",
				controller: 'examineCertificationDetailCtrl as examineCertificationDetail',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "user/examineCertificationDetail.js")
				}
			}
		}

		/*宁耀鹏 begin*/
		//活动管理
		function activity() {
			return {
				url: '/activity',
				templateUrl: yiqi_config.baseUrl + "js/components/activity/activity.tpl.html",
				controller: 'activityCtrl as activity',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "activity/activity.js")
				}
			}
		}
		//活动分类
		function activityClassify() {
			return {
				url: '/classify',
				templateUrl: yiqi_config.baseUrl + "js/components/activity/activityClassify.tpl.html",
				controller: 'activityClassifyCtrl as activityClassify',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "activity/activityClassify.js")
				}
			}
		}
		//新增活动分类
		function activityIncreaseClassify() {
			return {
				url: '/classify/increaseClassify',
				templateUrl: yiqi_config.baseUrl + "js/components/activity/activityIncreaseClassify.tpl.html",
				controller: 'activityIncreaseClassifyCtrl as activityIncreaseClassify',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "activity/activityIncreaseClassify.js")
				}
			}
		}
		//编辑活动分类
		function activityCompileClassify() {
			return {
				url: '/classify/compileClassify/:id',
				templateUrl: yiqi_config.baseUrl + "js/components/activity/activityCompileClassify.tpl.html",
				controller: 'activityCompileClassifyCtrl as activityCompileClassify',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "activity/activityCompileClassify.js")
				}
			}
		}

		//已上线活动
		function activityOnline() {
			return {
				url: '/online',
				templateUrl: yiqi_config.baseUrl + "js/components/activity/activityOnline.tpl.html",
				controller: 'activityOnlineCtrl as activityOnline',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "activity/activityOnline.js")
				}
			}
		}
		//新增活动
		function activityIncrease() {
			return {
				url: '/online/increase',
				templateUrl: yiqi_config.baseUrl + "js/components/activity/activityIncrease.tpl.html",
				controller: 'activityIncreaseCtrl as activityIncrease',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "activity/activityIncrease.js")
				}
			}
		}
		//新增活动--收费票
		function activityChargeTicket() {
			return {
				url: '/online/increase/chargeTicket',
				templateUrl: yiqi_config.baseUrl + "js/components/activity/chargeTicket.tpl.html",
				controller: 'activityChargeTicketCtrl as activityChargeTicket',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "activity/chargeTicket.js")
				}
			}
		}
		//待审核活动
		function activityAuditing() {
			return {
				url: '/auditing',
				templateUrl: yiqi_config.baseUrl + "js/components/activity/activityAuditing.tpl.html",
				controller: 'activityAuditingCtrl as activityAuditing',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "activity/activityAuditing.js")
				}
			}
		}
		//项目回收站
		function activityRecycle() {
			return {
				url: '/recycle',
				templateUrl: yiqi_config.baseUrl + "js/components/activity/activityRecycle.tpl.html",
				controller: 'activityRecycleCtrl as activityRecycle',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "activity/activityRecycle.js")
				}
			}
		}
		/*宁耀鹏 end*/

		//筹款管理
		function crowdfund() {
			return {
				url: '/crowdfund',
				templateUrl: yiqi_config.baseUrl + "js/components/crowdfund/crowdfund.tpl.html",
				controller: 'crowdfundCtrl as crowdfund',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "crowdfund/crowdfund.js")
				}
			}
		}

		//筹款类型
		function crowdfundTypeList() {
			return {
				url: '/crowdfundTypeList',
				templateUrl: yiqi_config.baseUrl + "js/components/crowdfund/crowdfundTypeList.tpl.html",
				controller: 'crowdfundTypeListCtrl as crowdfundTypeList',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "crowdfund/crowdfundTypeList.js")
				}
			}
		}

		//已上线筹款
		function crowdfundReleaseList() {
			return {
				url: '/crowdfundReleaseList',
				templateUrl: yiqi_config.baseUrl + "js/components/crowdfund/crowdfundReleaseList.tpl.html",
				controller: 'crowdfundReleaseListCtrl as crowdfundReleaseList',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "crowdfund/crowdfundReleaseList.js")
				}
			}
		}

		//待审核筹款
		function crowdfundExamineList() {
			return {
				url: '/crowdfundExamineList',
				templateUrl: yiqi_config.baseUrl + "js/components/crowdfund/crowdfundExamineList.tpl.html",
				controller: 'crowdfundExamineListCtrl as crowdfundExamineList',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "crowdfund/crowdfundExamineList.js")
				}
			}
		}

		//已成功筹款
		function crowdfundSuccessList() {
			return {
				url: '/crowdfundSuccessList',
				templateUrl: yiqi_config.baseUrl + "js/components/crowdfund/crowdfundSuccessList.tpl.html",
				controller: 'crowdfundSuccessListCtrl as crowdfundSuccessList',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "crowdfund/crowdfundSuccessList.js")
				}
			}
		}

		//新增筹款
		function addCrowdfund() {
			return {
				url: '/addCrowdfund',
				templateUrl: yiqi_config.baseUrl + "js/components/crowdfund/addCrowdfund.tpl.html",
				controller: 'addCrowdfundCtrl as addCrowdfund',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load(yiqi_config.controllerUrl + "crowdfund/addCrowdfund.js")
				}
			}
		}

	}
})();

(function() {
	//配置router全局调用参数
	app.run(routerGlobal);
	routerGlobal.$inject = ['$rootScope'];

	function routerGlobal($rootScope) {

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

			//监听路由变化，设置menu和footer的显示；以下数组里的路由名，都是不显示menu,footer的
			var filterRouterArray = ["login"];
			if (filterRouterArray.indexOf(toState.name) >= 0) {
				$rootScope.showMenu = false;
			} else {
				$rootScope.showMenu = true;
			}

			//清除window.onresize  
			window.onresize = function() {

			}

			//清除window.onscroll事件
			window.onscroll = function() {

			}
		});

		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			//当前页面加载完成后的  路由名
			$rootScope.currentRouter = toState.name; //当前路由名
			$rootScope.fromState = fromState; //上一个路由名
			$rootScope.fromParams = fromParams; //上一个路由参数

			if ($rootScope.currentRouter.indexOf("system") == 0) {
				$rootScope.leftMenu = "system";
			} else if ($rootScope.currentRouter.indexOf("user") == 0) {
				$rootScope.leftMenu = "user";
			} else if ($rootScope.currentRouter.indexOf("activity") == 0) {
				$rootScope.leftMenu = "activity";
			} else if ($rootScope.currentRouter.indexOf("crowdfund") == 0) {
				$rootScope.leftMenu = "crowdfund";
			} else if ($rootScope.currentRouter.indexOf("examine") == 0) {
				$rootScope.leftMenu = "examine";
			}

		});
	}

})();