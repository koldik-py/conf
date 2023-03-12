let marks = () => {
	let main = document.querySelectorAll('.makr');

	main.forEach(i => {
		i.addEventListener('mousemove', () => i.classList.add('mark--active'))
	})
	main.forEach(i => {
		i.addEventListener('touchstart', () => i.classList.add('mark--active'))
	})
	main.forEach(i => {
		i.addEventListener('touchend', () => i.classList.remove('mark--active'))
	})
	// 
	main.forEach(i => {
		i.addEventListener('mouseleave', () => i.classList.remove('mark--active'))
	})
}
marks()



$('.five__slider').slick({
			 slidesToShow: 4,
       infinite: false,

			 responsive: [
		    {
		      breakpoint: 1100,
		      settings: {
		        arrows: false,
        		infinite: false,
		        slidesToShow: 3.3,
		      }
		    },
		    {
		      breakpoint: 930,
		      settings: {
		        arrows: false,
		        slidesToShow: 2.5,

		      }
		    },
		    {
		      breakpoint: 700,
		      settings: {
		        arrows: false,
		        slidesToShow: 1.5,
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        arrows: false,
		        slidesToShow: 1.15,
		      }
		    },
		  ]
		});

let links = () => {
	let x = document.querySelector('.seven__link'),
			circs = document.querySelector('.div__circs'),
			close = document.querySelector('.seven__close span');
			
		x.addEventListener('click', () => circs.classList.toggle('div__circs--active'));
		close.addEventListener('click', () => circs.classList.remove('div__circs--active'))

}
links()

// let ticket = () => {
// 	let x = document.querySelector('.ticket'),
// 		y = document.querySelector('.ticket__block--two'),
// 		count = 0.05
// 
// 	 window.addEventListener("scroll", () => {
// 	 	if ((x.offsetTop  ) <= window.scrollY + (window.innerHeight / 2) && 
// 	 		(x.offsetTop + (x.clientHeight / 2) ) >= window.scrollY + (window.innerHeight / 2)){
// 	 		if (count <= 4.3) y.style.transform = `rotate(-${count}deg)`
// 	 		count = count + 0.15
// 	 	}
// 	 })
// }
// 
// ticket()