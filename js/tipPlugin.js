(function ($){
	 var tip = function( p, ths ){
		 var _$ths = $(ths);
		 var _$parent = _$ths.parent();
		 _$ths = _$ths.detach(); 
		 /*
			  p合并自定义属性,默认包括以下属性设置:
				  width 提示框内容区域的宽度,number
				  content 提示框中的提示内容
		 */
		 p = $.extend({
			 width: 200,
			 content:'sample'
		 }, p);
		 /*
			 Draw:绘制提示框的函数
			 param: ths --> 提示框this
		 */
		 var Draw = function(){
			 var children = '<div class="tipHead"></div>'
						   +'<div class="tipBody">'+p.content+'</div>'
						   +'<div class="tipTail"></div>';
			 //将children加入到提示框中
			 _$ths.append( children );
			 //动态设置提示框的样式和内容区域的宽度
			 _$ths.addClass('tip').find('.tipBody').width( p.width );
			 _$parent.append(_$ths);
		 };//End_Draw
		 return (function(){
			 Draw();
			 _$parent = null;
			 _$ths = null;
		 })();
	 };
	 /*
		  $.fn.tip:提示框插件，用于提示用户
		  Param: property --> 自定义提示框的相关信息
	 */
	 $.fn.tip = function( property ) {
		 tip( property, this );    	
	 };//End_$.fn.timeProcess  
})(jQuery);