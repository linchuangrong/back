/**
 * 导航条
 * 林创荣
 * 2017年01月10日
 */
(function() {
	'use strict';
	angular.module('tabMenu.directive', [])
		.directive('tabMenu', function() {
			return {
				restrict: 'EA',
				scope: {
					listArray: '='
				},
				link: function(scope, element, attr) {

				},
				template: '' +
					'<div class="tab-box">' +
					'<ul class="tab-ul clearfix">' +
					'<li ng-repeat="item in listArray" class="tab-li" ng-class="{\'active\':item.active}" ui-sref="{{item.url}}">{{item.name}}</li>' +
					'</ul>' +
					'</div>'
			};
		});
})();