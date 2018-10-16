(function () {
  const slides = document.querySelectorAll('.header_main_slider_slide')
  const controls = document.querySelectorAll('.slide_controller')
  let current = 0

  // setInterval(function(){
  //   const slides = document.querySelectorAll('.header_main_slider_slide')
  //   slides[current].classList.remove('active')
  //   if (current >= slides.length - 1) {
  //     current = 0
  //   } else current++

  //   slides[current].classList.add('active')
  // }, 500)

  function changeSlide(num: number) {
    slides[current].classList.remove('active')
    controls[current].classList.remove('active')
    current = num
    slides[current].classList.add('active')
    controls[current].classList.add('active')
  }

  // function toggleController(current: number) {
    
    
  // }

  for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener('click', function () {
      changeSlide(i);
    })
  }




})()


