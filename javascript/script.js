'use strict'

const isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	IOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (
			isMobile.Android()||
			isMobile.BlackBerry()||
			isMobile.IOS()||
			isMobile.Opera()||
			isMobile.Windows())
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');
}else{
	document.body.classList.add('_pc');
}
console.log('HELLO');

const menuLinks = document.querySelectorAll('.menu__link');
console.log(menuLinks);

for (var i = menuLinks.length - 1; i >= 0; i--) {
	let menuLink = menuLinks[i];
	if(i == menuLinks.length - 2) continue;
	menuLink.addEventListener("mouseout",function(e) {
		menuLink.parentElement.classList.remove('menu__li_up');
	});
	menuLink.addEventListener("mouseover",function(e) {
		menuLink.parentElement.classList.add('menu__li_up');
	})
};

const liSubList = document.querySelector('.menu__li_sub-list');

liSubList.addEventListener("mouseout",function(e) {liSubList.classList.remove('menu__li_up');});
liSubList.addEventListener("mouseover",function(e) {liSubList.classList.add('menu__li_up');})

// const gotoLinks = document.querySelectorAll('.menu__link[data-goto]')
// if(gotoLinks.length > 0) {
// 	gotoLinks.forEach(gotoLink => {
// 		gotoLink.addEventListener("click", onMenuLinkClick)
// 	});
// 	function onMenuLinkClick (e) {
// 		const gotoLink = e.target;
// 		if(gotoLink.dataset.goto && document.querySelector(gotoLink.dataset.goto)){
			
// 		}
// 	}
// }