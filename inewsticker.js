//Plugin name        : inewsticker - jQuery news ticker 
//Version            : 1
//Author             : mahdi khaksar
//Author website     : progpars.com
//Licence	         : ijquery.ir


(function($){
$.fn.inewsticker = function(options){		
//defaults variables
var defaults = {
	speed           : 200,
	effect          : 'fade',
	dir             : 'ltr',
	font_size       : null,
	color           : null,
	font_family     : null,
	delay_after : 3000,
	

};

$.extend(defaults, options);
var obj  = $(this);
var list = obj.children();
list.not(":first").hide();

	obj.css('direction',options.dir);
	obj.css('font-size',options.font_size);
	obj.css('color',options.color);
	obj.css('font-family',options.font_family);


setInterval(function(){

	var list = obj.children();
	list.not(":first").hide();
	
	var first_child  = list.eq(0);
	var second_child = list.eq(1); 	
	//slide effect
	if(options.effect == 'slide'){
		first_child.slideUp();
		second_child.slideDown(function(){
		first_child.remove().appendTo(obj);
		});
	}
	
	//fade effect
	if(options.effect == 'fade'){
		first_child.fadeOut(function(){
		second_child.fadeIn();
		first_child.remove().appendTo(obj);
		});
	}
},options.speed);

//typing 
	if(options.effect == 'typing'){
		var i = 0;
		var j = 0;
		var count_space_after = options.delay_after / options.speed;
		var space_after = new Array(1 + count_space_after).join(" ");
		
		var texts = new Array();
		list.each(function(){
			texts.push($(this).text() + space_after );
		});
		
		count = texts.length;
		setInterval(function(){
			result = texts[j].substring(0, i);
			$(obj).html(result);
			i++;
			
			if(i == texts[j].length){
				
				i = 0;
				obj.appendTo(obj).hide().fadeIn('slow');
				
				
			j++;
			if(count==j){ 
				j=0;
			}
			}
		},options.speed);
		
	
	}
};
})(jQuery);

