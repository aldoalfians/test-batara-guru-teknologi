const numberInput = document.querySelector('.number-input')
const btnSubmit = document.querySelector('.btn-submit')

btnSubmit.addEventListener('click', () => {
  let valueInput = numberInput.value

  if (valueInput % 2 === 0) {
    console.log(`${valueInput} -`)
  }
})
