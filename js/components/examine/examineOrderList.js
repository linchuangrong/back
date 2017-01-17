/**
 * Created by Administrator on 2017/1/16.
 */
/**
 * 作者：林创荣
 * 功能：筹款类型
 * 时间：2016年01月12日
 */
(function() {
    'use strict';

    app.import(yiqi_config.directiveUrl + '/pagebar.directive.js', 'pagebar.directive'); //分页插件
    app.import(yiqi_config.directiveUrl + '/layDate.directive.js', 'layDate.directive'); //日期插件

    app.addController("examineOrderListCtrl", examineOrderListCtrl);
    examineOrderListCtrl.$inject = ['$rootScope', '$window'];

    function examineOrderListCtrl($rootScope, $window) {
        var vm = this;
        $rootScope.title = "预约列表";

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
        vm.showDeleteDialog = showDeleteDialogFn;
        /*****************函数 end****************/
    

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
        function showDeleteDialogFn() {
            var params = {
                "title": "删除提示",
                "html": "确定删除吗？",
                "confirm": vm.deleteConfirm,
                "confirmText": "确定",
                "cancel": null,
                "cancelText": "取消",
                "width": "400px"
            }
            window.buttonDialog.show(params);
        }

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