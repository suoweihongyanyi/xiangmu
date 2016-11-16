angular.module('Myapp',['ui.router','ngAnimate'])
	.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('index');
		$stateProvider.state('index',{
			url:'/index',
			templateUrl:'html/index.html'
		})
		.state('express',{
			url:'/press',
			templateUrl:'html/express.html'
		})
		.state('my',{
			url:'/my',
			templateUrl:'html/my.html'
		})
	})
	.directive('dir',function(){
		return {
			restrict:'AEMC',
			templateUrl:'html/swiper.html',
			replace:true,
			link:function(scope,element,attrs){
				var swiper = new Swiper('.swiper-container', {
				        pagination: '.swiper-pagination',
				        slidesPerView:1,
				        paginationClickable: true,
				        freeMode: true,
				        nextButton: '.swiper-button-next',
    					prevButton: '.swiper-button-prev',
    					loop:true,
    					autoplay : 1000//轮播时间
				   });	
			   var myScroll= new IScroll('#wrapper',{
					scrollbars: true,
					disableMouse: true,
		    		disablePointer: true,
		    		scrollbars: 'custom'
		}) 
			}
		}
	})
	.controller('excontroller',['$scope',function($scope){
		
		$scope.times = false;
		$scope.lis = true;
		$scope.index = null;
		$scope.click1 = function(item){
			$scope.index = item;
			$scope.times = false;
			$scope.lis = true;
		}
		$scope.click1(1);
		$scope.click2 = function(item){
			$scope.index = item;
			$scope.times = true;
			$scope.lis = false;
		}
	}])