/**
 * Created by Administrator on 2017/1/16.
 */
/**
 * 作者：林创荣
 * 功能：待办事项
 * 时间：2016年01月08日
 */
(function() {
    'use strict';

    app.import(yiqi_config.directiveUrl + '/breadcrumb.directive.js', 'breadcrumb.directive'); //面包屑导航条
    app.import(yiqi_config.directiveUrl + '/layDate.directive.js', 'layDate.directive'); //日期插件

    app.addController("examineNewOrderListCtrl", examineNewOrderListCtrl);
    examineNewOrderListCtrl.$inject = ['$rootScope', '$window'];

    function examineNewOrderListCtrl($rootScope, $window) {
        var vm = this;
        $rootScope.title = "新增预约";

        /*****************变量 begin****************/

        //tab选项卡标题
        vm.tabMenu = [{
            "name": "评审评估",
            "active": false,
            "url": "examine.examineList"
        }, {
            "name": "预约列表",
            "active": true,
            "url": "examine.examineOrderList"
        }, {
            "name": "进行中",
            "active": false,
            "url": "examine.examineReleaseList"
        }, {
            "name": "已结束",
            "active": false,
            "url": "examine.examineStopList"
        }, {
            "name": "新增评审评估",
            "active": false,
            "url": "examine.selectExamine"
        }];
        //面包屑标题
        vm.smallMenu = [{
            "name": "预约列表",
            "url": "examine.examineOrderList"
        }, {
            "name": "新增预约",
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