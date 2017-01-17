/**
 * 作者：林创荣
 * 功能：筹款类型
 * 时间：2016年01月12日
 */
(function() {
	'use strict';

	app.import(yiqi_config.directiveUrl + '/breadcrumb.directive.js', 'breadcrumb.directive'); //面包屑导航条

	app.addController("addExamineCtrl", addExamineCtrl);
	addExamineCtrl.$inject = ['$rootScope', '$window', '$timeout', '$stateParams'];

	function addExamineCtrl($rootScope, $window, $timeout, $stateParams) {
		var vm = this;
		$rootScope.title = "筹款类型";

		/*****************变量 begin****************/

		if ($stateParams.type.toString() == '0') {
			vm.examineTitle = "评审";
		} else if ($stateParams.type.toString() == '1') {
			vm.examineTitle = "评估";
		}

		//tab选项卡标题
		vm.tabMenu = [{
			"name": "评审评估",
			"active": false,
			"url": "examine.examineList"
		}, {
			"name": "预约列表",
			"active": false,
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
			"active": true,
			"url": "examine.selectExamine"
		}];

		vm.smallMenu = [{
			"name": "新增评审评估",
			"url": "examine.selectExamine"
		}, {
			"name": "新增" + vm.examineTitle,
			"url": ""
		}];

		vm.projectNameArray = [""]; //项目名称数组，默认为""

		//区分模板1，2，3
		if ($rootScope.currentRouter.indexOf('addExamine1') >= 0) {
			vm.first_title = "";
			vm.second_title = "";
		} else if ($rootScope.currentRouter.indexOf('addExamine2') >= 0) {
			vm.first_title = "";
			vm.second_title = "请点击右侧“笔”按钮编辑一级指标名称";
		} else if ($rootScope.currentRouter.indexOf('addExamine3') >= 0) {
			vm.first_title = "请点击右侧“笔”按钮编辑大标题";
			vm.second_title = "请点击右侧“笔”按钮编辑评审科目标题";
		}

		//动态表单json格式初始化
		vm.designJson = [{
			"first_title": vm.first_title, //H1大标题
			"data": [{
				"second_title": vm.second_title, //H2标题
				"data": [{
					"third_title": "", //题目
					"score": "", //分值
					"remark": "" //备注、说明
				}]
			}]
		}];

		/*****************变量 end****************/

		/*****************函数 begin****************/

		vm.deleteProjectName = deleteProjectNameFn; //删除一个项目名称
		vm.addProjectName = addProjectNameFn; //添加一个项目名称

		vm.addFirstObj = addFirstObjFn; //添加大标题
		vm.deleteFirstObj = deleteFirstObjFn; //删除大标题
		vm.editFirstObj = editFirstObjFn; //编辑大标题title
		vm.addLastFirstObj = addLastFirstObjFn; //添加一个大标题在最底部
		vm.moveTopFirst = moveTopFirstFn; //上移
		vm.moveBottomFirst = moveBottomFirstFn; //下移

		vm.addSecondObj = addSecondObjFn; //添加二级标题--评审科目
		vm.deleteSecondObj = deleteSecondObjFn; //删除二级标题
		vm.editSecondObj = editSecondObjFn; //编辑二级标题title
		vm.addLastSecondObj = addLastSecondObjFn; //添加一个二级标题在最底部
		vm.moveTopSecond = moveTopSecondFn; //上移
		vm.moveBottomSecond = moveBottomSecondFn; //下移

		vm.addThirdObj = addThirdObjFn; //添加三级标题--评审题
		vm.deleteThirdObj = deleteThirdObjFn; //删除三级标题
		vm.addLastThirdObj = addLastThirdObjFn; //添加一个三级标题在最底部
		vm.moveTopThird = moveTopThirdFn; //上移
		vm.moveBottomThird = moveBottomThirdFn; //下移

		vm.keycode13 = keycode13Fn; //回车键

		/*****************函数 end****************/

		//
		//
		//
		//
		//
		//----------------------------删除一个项目名称------------------------------------------
		//
		//
		//
		//
		//
		function deleteProjectNameFn($index) {
			vm.projectNameArray.splice($index, 1);
			if (vm.projectNameArray.length == 0) {
				vm.projectNameArray = [""];
			}
		}
		//
		//
		//
		//
		//
		//----------------------------添加一个项目名称------------------------------------------
		//
		//
		//
		//
		//
		function addProjectNameFn($index) {
			vm.projectNameArray.splice($index + 1, 0, "");

			if (vm.projectNameArray.length == 0) {
				vm.projectNameArray = [""];
			}
		}
		//
		//
		//
		//
		//
		//----------------------------动态表单，添加，删除，编辑操作------------------------------------------
		//
		//
		//
		//
		//
		//添加一级标题
		function addFirstObjFn($event, firstObjIndex) {
			var obj = {
				"first_title": vm.first_title,
				"data": [{
					"second_title": vm.second_title,
					"data": [{
						"third_title": "",
						"score": "",
						"remark": ""
					}]
				}]
			}

			//点击左侧按钮进行的添加
			vm.designJson.splice(firstObjIndex + 1, 0, obj);
			//滚动
			setPanelScroll($event);

		}

		//删除一级标题
		function deleteFirstObjFn(firstObjIndex) {
			vm.designJson.splice(firstObjIndex, 1);
			window.alertTip.show("删除成功");
		}

		//编辑一级标题
		function editFirstObjFn($event, firstObjIndex) {
			vm.designJson[firstObjIndex].editStatus = !vm.designJson[firstObjIndex].editStatus;
			//input获取焦点
			$timeout(function() {
				angular.element($event.target).siblings("input").focus();
			}, 10);
		}

		//右侧模块，点击事件--在底部添加一级标题
		function addLastFirstObjFn() {
			var firstLength = vm.designJson.length;
			$timeout(function() {
				angular.element("#add_" + firstLength).click();
			}, 0);
		}

		//添加二级标题
		function addSecondObjFn($event, firstObjIndex, secondObjIndex) {
			var obj = {
				"second_title": vm.second_title,
				"data": [{
					"third_title": "",
					"score": "",
					"remark": ""
				}]
			}

			//点击左侧按钮进行的添加
			vm.designJson[firstObjIndex].data.splice(secondObjIndex + 1, 0, obj);
			//滚动
			setPanelScroll($event);
		}

		//删除二级标题
		function deleteSecondObjFn(firstObjIndex, secondObjIndex) {
			vm.designJson[firstObjIndex].data.splice(secondObjIndex, 1);
			window.alertTip.show("删除成功");
		}

		//右侧模块，点击事件--在底部添加二级标题
		function addLastSecondObjFn() {
			var firstLength = vm.designJson.length;
			var secondLength = vm.designJson[firstLength - 1].data.length;
			$timeout(function() {
				angular.element("#add_" + firstLength + "_" + secondLength).click();
			}, 0);
		}

		//编辑二级标题
		function editSecondObjFn($event, firstObjIndex, secondObjIndex) {
			vm.designJson[firstObjIndex].data[secondObjIndex].editStatus = !vm.designJson[firstObjIndex].data[secondObjIndex].editStatus;
			//input获取焦点
			$timeout(function() {
				angular.element($event.target).siblings("input").focus();
			}, 10);
		}

		//添加三级标题
		function addThirdObjFn($event, firstObjIndex, secondObjIndex, thirdObjIndex) {
			var obj = {
				"third_title": "",
				"score": "",
				"remark": ""
			}

			//点击左侧按钮进行的添加
			vm.designJson[firstObjIndex].data[secondObjIndex].data.splice(thirdObjIndex + 1, 0, obj);
			//滚动
			setPanelScroll($event);

		}

		//删除三级标题
		function deleteThirdObjFn(firstObjIndex, secondObjIndex, thirdObjIndex) {
			vm.designJson[firstObjIndex].data[secondObjIndex].data.splice(thirdObjIndex, 1);
			window.alertTip.show("删除成功");
		}

		//右侧模块，点击事件--在底部添加三级标题
		function addLastThirdObjFn() {
			var firstLength = vm.designJson.length;
			var secondLength = vm.designJson[firstLength - 1].data.length;
			var thirdLength = vm.designJson[firstLength - 1].data[secondLength - 1].data.length;
			$timeout(function() {
				angular.element("#add_" + firstLength + "_" + secondLength + "_" + thirdLength).click();
			}, 0);
		}

		//
		//
		//
		//
		//
		//----------------------------动态表单：上移、下移操作------------------------------------------
		//
		//
		//
		//
		//

		//一级标题：上移
		function moveTopFirstFn(firstObjIndex) {
			if (firstObjIndex == 0) {
				return false;
			} else {
				var pervObjIndex = firstObjIndex - 1; //上一个兄弟元素
				vm.designJson[firstObjIndex] = vm.designJson.splice(pervObjIndex, 1, vm.designJson[firstObjIndex])[0];
				window.alertTip.show("上移完成");
			}
		}

		//一级标题：下移
		function moveBottomFirstFn(firstObjIndex) {
			if (firstObjIndex == vm.designJson.length - 1) {
				return false;
			} else {
				var nextObjIndex = firstObjIndex + 1; //上一个兄弟元素
				vm.designJson[firstObjIndex] = vm.designJson.splice(nextObjIndex, 1, vm.designJson[firstObjIndex])[0];
				window.alertTip.show("下移完成");
			}
		}

		//二级标题：上移
		function moveTopSecondFn(firstObjIndex, secondObjIndex) {
			if (secondObjIndex == 0) {
				return false;
			} else {
				var pervObjIndex = secondObjIndex - 1; //上一个兄弟元素
				vm.designJson[firstObjIndex].data[secondObjIndex] = vm.designJson[firstObjIndex].data.splice(pervObjIndex, 1, vm.designJson[firstObjIndex].data[secondObjIndex])[0];
				window.alertTip.show("上移完成");
			}
		}

		//二级标题：下移
		function moveBottomSecondFn(firstObjIndex, secondObjIndex) {
			if (secondObjIndex == vm.designJson[firstObjIndex].data.length - 1) {
				return false;
			} else {
				var nextObjIndex = secondObjIndex + 1; //上一个兄弟元素
				vm.designJson[firstObjIndex].data[secondObjIndex] = vm.designJson[firstObjIndex].data.splice(nextObjIndex, 1, vm.designJson[firstObjIndex].data[secondObjIndex])[0];
				window.alertTip.show("下移完成");
			}
		}

		//三级标题：上移
		function moveTopThirdFn(firstObjIndex, secondObjIndex, thirdObjIndex) {
			if (thirdObjIndex == 0) {
				return false;
			} else {
				var pervObjIndex = thirdObjIndex - 1; //上一个兄弟元素
				vm.designJson[firstObjIndex].data[secondObjIndex].data[thirdObjIndex] = vm.designJson[firstObjIndex].data[secondObjIndex].data.splice(pervObjIndex, 1, vm.designJson[firstObjIndex].data[secondObjIndex].data[thirdObjIndex])[0];
				window.alertTip.show("上移完成");
			}
		}

		//三级标题：下移
		function moveBottomThirdFn(firstObjIndex, secondObjIndex, thirdObjIndex) {
			if (thirdObjIndex == vm.designJson[firstObjIndex].data[secondObjIndex].data.length - 1) {
				return false;
			} else {
				var nextObjIndex = thirdObjIndex + 1; //上一个兄弟元素
				vm.designJson[firstObjIndex].data[secondObjIndex].data[thirdObjIndex] = vm.designJson[firstObjIndex].data[secondObjIndex].data.splice(nextObjIndex, 1, vm.designJson[firstObjIndex].data[secondObjIndex].data[thirdObjIndex])[0];
				window.alertTip.show("下移完成");
			}
		}
		//
		//
		//
		//
		//
		//----------------------------回车事件、滚动动画------------------------------------------
		//
		//
		//
		//
		//
		function keycode13Fn(e) {
			var keycode = window.event ? e.keyCode : e.which;
			if (keycode == 13) {
				if (e && e.stopPropagation) {
					//因此它支持W3C的stopPropagation()方法
					e.stopPropagation();
					e.preventDefault();
				} else {
					//IE中阻止函数器默认动作的方式   
					window.event.returnValue = false;
					//否则，我们需要使用IE的方式来取消事件冒泡
					window.event.cancelBubble = true;
				}
				angular.element(e.target).blur();
			}
		}
		//
		//
		//
		//
		//
		//----------------------------添加某一项后，页面滚动------------------------------------------
		//
		//
		//
		//
		//
		function setPanelScroll($event) {
			if ($event) {
				var parentDom = angular.element($event.target).closest(".panel");
				var scrollHeight = parentDom.offset().top + parentDom.outerHeight();
				console.log(parentDom.offset().top);
				console.log(parentDom.outerHeight());
				$timeout(function() {
					angular.element("html,body").animate({
						"scrollTop": scrollHeight - 60 //这里的60是因为menu导航条浮动在上面，有60px的高度
					}, 500);
				}, 100);
			} else {
				$timeout(function() {
					angular.element("html,body").scrollTop("99999");
				}, 100);
			}
		}

	}
})();