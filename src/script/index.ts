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
  const modal = document.querySelector('.modal')
  const background = document.querySelector('.background')
  const content = document.querySelector('.content')
  
  

  if (!modal || !background) { return }
  background.addEventListener('click', () => modal.classList.add('hidden'))
  for (let j = 0; j < portfolio.length; j++)
    portfolio[j].addEventListener('click', () => modal.classList.remove('hidden'))


  const button = document.querySelector('.contacts_item_inputs > button')
  const inputs = document.querySelectorAll('.contacts_item_inputs > input')
  const input1 = inputs[0]
  const input2 = inputs[1]
  const textareas = document.querySelectorAll('.contacts_item_inputs > textarea')
  const textarea = textareas[0]
  
  if (!button || !modal || !background || !content) { return }
  background.addEventListener('click', () => modal.classList.add('hidden'))
  button.addEventListener('click', function () {
    modal.classList.remove('hidden')
    let text1 = input1.value
    let text2 = input2.value
    let text3 = textarea.value
    content.innerHTML = `<div><p>Добрый день, ${text1}!<br>Спасибо что обратили внимание на мой сайт.<br>Резюме будет отправлено вам на email: ${text2}</p><p>${text3}</p></div>`
  })  
  

})()


