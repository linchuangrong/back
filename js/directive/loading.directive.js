/**
 * tooltip插件
 * 林创荣
 * 2016年10月25日
 */
(function() {
	'use strict';

	angular.module("loading.directive", [])
		.directive('loading', function() {
			return {
				restrict: 'E',
				scope: {
					showLoading: '='
				},
				link:function(scope,element,attr){
					
				},
				template:''+
				'<div id="loading" ng-class="{\'active\':showLoading}">'+
					'<div id="loading-center">'+
						'<div id="loading-center-absolute">'+
							'<div class="object" id="object_one"></div>'+
							'<div class="object" id="object_two" style="left:20px;"></div>'+
							'<div class="object" id="object_three" style="left:40px;"></div>'+
							'<div class="object" id="object_four" style="left:60px;"></div>'+
							'<div class="object" id="object_five" style="left:80px;"></div>'+
						'</div>'+
					'</div>'+
				'</div>'
			}
		})
})();