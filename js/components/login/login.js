/**
 * 作者：林创荣
 * 功能：登录
 * 时间：2016年01月06日
 */
(function() {
	'use strict';

	app.addController("loginCtrl", loginCtrl);
	loginCtrl.$inject = ['$rootScope', '$timeout', '$state'];

	function loginCtrl($rootScope, $timeout, $state) {
		var vm = this;
		$rootScope.title = "登录";

		/*****************变量 begin****************/

		/*****************变量 end****************/

		/*****************函数 begin****************/

		vm.login = loginFn;

		/*****************函数 begin****************/

		function loginFn() {
			$rootScope.showLoading = true;
			$timeout(function() {
				$rootScope.showLoading = false;
				$state.go("system.work");
			}, 1000);
		}

	}
})();