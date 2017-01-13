/**
 * bootstrap模态框 显示、隐藏
 * 林创荣
 * 2017年01月09日
 */
(function() {
	'use strict';
	angular.module('bsDialog.directive', [])
		.directive('bsHideDialog', ['$timeout', function($timeout) {
			return {
				restrict: 'A',
				scope: {
					clickFunc: '&'
				},
				link: function(scope, element, attr) {
					element.on("click", function() {
						console.log(scope.clickFunc);
						//如果有需要执行的函数，则先执行
						if (scope.clickFunc && angular.isFunction(scope.clickFunc)) {

							var promise = scope.clickFunc();

							//1.如果返回的，是一个promise
							if (promise && promise.then) {
								promise.then(function(data) {
									if (data == "hide") {
										//隐藏弹框
										angular.element("#" + attr.bsHideDialog).modal('hide');
									}
								});
							}
							//2.如果返回的是false，则结束程序，不隐藏掉弹框
							else if (promise == false) {
								console.log("函数返回false,弹框不隐藏");
								return false;
							}
							//3.如果什么都没返回，则马上隐藏掉弹框
							else {
								//隐藏弹框
								angular.element("#" + attr.bsHideDialog).modal('hide');
							}

						}

					});
				}
			};
		}])
		.directive('bsShowDialog', ['$timeout', function($timeout) {
			return {
				restrict: 'A',
				scope: {
					clickFunc: '&'
				},
				link: function(scope, element, attr) {
					element.on("click", function() {
						//如果有需要执行的函数，则先执行
						if (scope.clickFunc && angular.isFunction(scope.clickFunc)) {
							if (scope.clickFunc() == false) {
								return false;
							}
						}
						//显示弹框
						angular.element("#" + attr.bsShowDialog).modal('show');
					});
				}
			};
		}]);

})();