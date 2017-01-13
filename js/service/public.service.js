/**
 * 林创荣
 * 功能：公共接口
 * 		退出
 * 		短信验证码
 * 		省市二级关联
 * 2016年10月21日
 */
(function() {
	'use strict';

	angular.module("public.service", [])
		.service("publicService", publicService);

	publicService.$inject = ["appApiDao"];

	function publicService(appApiDao) {

		var dateNow = new Date(); //今天的时间
		this.dateNowStamp = Date.parse(dateNow.getFullYear() + "-" + (dateNow.getMonth() + 1) + "-" + dateNow.getDate()) / 1000; //今天08:00:00的时间戳,这里时间默认有8个小时
		this.dataOneMonthStamp = Date.parse(dateNow.getFullYear() + "-" + (dateNow.getMonth() + 1) + "-" + dateNow.getDate()) / 1000 + 30 * 24 * 60 * 60;//一个月后的时间戳
		
	}
})();