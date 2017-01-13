/**
 * 导航条
 * 林创荣
 * 2017年01月10日
 */
(function() {
	'use strict';
	angular.module('breadcrumb.directive', [])
		.directive('breadcrumb', function() {
			return {
				restrict: 'EA',
				scope: {
					listArray: '='
				},
				link: function(scope, element, attr) {

				},
				template: '' +
					'<ol class="breadcrumb">' +
					'<li ng-repeat="item in listArray" ng-class="{\'active\':!item.url}">' +
					'<a ui-sref="{{item.url}}" ng-if="!!item.url">{{item.name}}</a>' +
					'<span ng-if="!item.url">{{item.name}}</span>' +
					'</li>' +
					'</ol>'
			};
		});

})();