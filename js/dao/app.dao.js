/*接口文件*/
(function() {
	'use strict';

	angular.module('app.dao', [])
		.service('appApiDao', appApiDao);

	appApiDao.$inject = ['$http'];

	function appApiDao($http) {
		var url = {

		};

		function getData(url, params) {

			if (typeof params == "object") {
				return $http({
					method: "GET",
					url: url,
					params: params,
					//cache: true
				});
			} else if (params != undefined) {
				return $http({
					method: 'GET',
					url: url + "/" + params,
					//cache: true
				});
			} else {
				return $http({
					method: 'GET',
					url: url,
					//cache: true
				})
			}
		}

		function postData(url, params) {
			if (typeof params == "object") {
				return $http({
					'headers': {
						'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
					},
					'method': 'POST',
					'url': url,
					//'params': params,
					'data': params,
					'transformRequest': function(obj) {
						var str = [];
						for (var p in obj) {
							str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
						}
						return str.join("&");
					}
				});
			} else if (params != undefined) {
				return $http({
					'headers': {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					'method': 'POST',
					'url': url + "/" + params
				});
			} else {
				return $http({
					'headers': {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					'method': 'POST',
					'url': url
				});
			}
		}

		return {
			url: url,
			getData: function(url, params) {
				return getData(url, params);
			},
			postData: function(url, params) {
				return postData(url, params);
			}
		}
	}

})();