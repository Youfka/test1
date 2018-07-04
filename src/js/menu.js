export default function () {
	let menu = document.querySelector('.side-menu');
	let burger = document.querySelector('.burger-menu');
	let content = document.querySelector('.content');
	if (window.innerWidth <= 550) {
		content.classList.add('mobile');
	} else {
		content.classList.remove('mobile');
	}
	window.addEventListener('resize',function() {
		if(!menu.classList.contains('hidden')) {
			if (window.innerWidth <= 1024) {
				content.classList.add('mobile');
				if (window.innerWidth <= 768){
					content.classList.remove('content-right');
				}
			} else {
				content.classList.add('content-right');
				content.classList.remove('mobile');
			}
		} else {
			content.classList.remove('content-right');
			if (window.innerWidth <= 550) {
				content.classList.add('mobile');
			} else {
				content.classList.remove('mobile');
			}
		}
	});
	burger.addEventListener('click', function (){
		menu.classList.toggle('hidden');
		burger.classList.toggle("burger-menu--opened");
		content.classList.add('content-right');
		if(!menu.classList.contains('hidden')) {
			if (window.innerWidth <= 1024) {
				content.classList.add('mobile');
				if (window.innerWidth <= 768){
					content.classList.remove('content-right');
				}
			} else {
				content.classList.add('content-right');
				content.classList.remove('mobile');
			}
		} else {
			content.classList.remove('content-right');
			if (window.innerWidth <= 550) {
				content.classList.add('mobile');
			} else {
				content.classList.remove('mobile');
			}
		}
	});
	for(let i = 0; i < document.querySelectorAll('.nav li').length; i++) {
		let circle = document.createElement('div');
		circle.classList.add('hover-circle');
		document.querySelectorAll('.nav li')[i].addEventListener('mouseover', function(event){
			event.target.appendChild(circle);
		});
		document.querySelectorAll('.nav li')[i].addEventListener('mouseout', function(event){
			event.target.removeChild(circle);
		});
	}

}