window.onload = function() {
	// var but = document.getElementsByClassName("but");
	// for (var i = 0; i < but.length; i++) {
	// 	but[i].onmouseover = function() {
	// 		this.style.border = '#777777 solid 2px'
	// 	}
	// 	but[i].onmouseout = function() {
	// 		this.style.border = '#777777 solid 1px'
	// 	}
	// }
	// var caption = document.getElementsByClassName("caption");
	// var IS = document.getElementsByClassName("IS");
	// for (var i = 0; i < caption.length; i++) {
	// 	caption[i].onmouseover = function() {
	// 		this.parentNode.parentNode.childNodes[1].children[0].style.opacity = 0.4;
	// 	}
	// }
	// for (var i = 0; i < IS.length; i++) {
	// 	IS[i].onmouseover = function() {
	// 		this.style.opacity = 0.4;
	// 	}
	// 	IS[i].onmouseout = function() {
	// 		this.style.opacity = 1;
	// 	}
	// }
}
window.onscroll = function() {
	//变量t是滚动条滚动时，距离顶部的距离
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	var scrollup = document.getElementById('footer');
	if (t >= 1750) {
		scrollup.style.zIndex = 0;
	} else { //恢复正常
		scrollup.style.zIndex = -1;
	}
}
$(function() {
	$(".but").mouseenter(function (){
		console.log(this);
		$(this).css("border","#777777 solid 2px");
	});
	$(".but").mouseleave(function (){
		$(this).css("border","#777777 solid 1px");
	});
	$(".caption").mouseenter(function (){
		console.log(this.parentNode.parentNode.childNodes[1].children[0]);
		$(this.parentNode.parentNode.childNodes[1].children[0]).css("opacity","0.4");
	});
	$(".caption").mouseleave(function (){
		console.log(this.parentNode.parentNode.childNodes[1].children[0]);
		$(this.parentNode.parentNode.childNodes[1].children[0]).css("opacity","1");
	});
	$(".IS").mouseenter(function (){
		$(this).css("opacity","0.4");
	});
	$(".IS").mouseleave(function (){
		$(this).css("opacity","1");
	});
});
