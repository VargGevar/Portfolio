(function () {
  const slides = document.querySelectorAll('.header_main_slider_slide')
  const controls = document.querySelectorAll('.slide_controller')
  let current = 0

  function changeSlide(num: number) {
    slides[current].classList.remove('active')
    controls[current].classList.remove('active')
    current = num
    slides[current].classList.add('active')
    controls[current].classList.add('active')
  }

  for (let i = 0; i < controls.length; i++) controls[i].addEventListener('click', () => changeSlide(i))


  const portfolio = document.querySelectorAll('.portfolio_item_content > img')
  // const modal = document.createElement('div')
  // modal.classList.add('modal', 'hidden')
  // document.body.appendChild(modal)

  // function modalWindow(el: number) {
  //   modal.classList.add('hidden')
  //   portfolio[current].classList.remove('modal')
  //   current = el
  //   modal.classList.remove('hidden')
  //   portfolio[current].classList.add('modal')
  // }

  // for (let j = 0; j < portfolio.length; j++) portfolio[j].addEventListener('click', () => modalWindow(j))

  const modal = document.querySelector('.modal')
  const background = document.querySelector('.background')
  if (!modal || !background) { return }
  background.addEventListener('click', () => modal.classList.add('hidden'))
  for (let j = 0; j < portfolio.length; j++)
    portfolio[j].addEventListener('click', () => modal.classList.remove('hidden'))

})()


