let word = document.querySelector(".form-name-input__input");
let btn = document.querySelector(".form-name-input__button");
let userName = ''
let form = document.querySelector('.form-name-input');
let userNameString = document.querySelector('.main__userName');
let reseter = document.querySelectorAll('.button-name-reset ')

btn.addEventListener("click", btnClick);

function addUserName() {
  if (localStorage.getItem('userName') != null && localStorage.getItem('userName') != '') {
    document.getElementsByClassName('form-name-input')[0].style= "display: none";
    document.getElementsByClassName('main__userName')[0].style= "display: flex";
    userNameString.innerHTML = localStorage.getItem('userName')
  }
}

addUserName();

function btnClick() {
  event.preventDefault();
  userName = word.value;
  localStorage.setItem('userName', userName);
  addUserName()
}

reseter.forEach((el) => {
  el.addEventListener('click', (e) => {
    localStorage.removeItem('userName')
    document.getElementsByClassName('form-name-input')[0].style= "display: flex";
    document.getElementsByClassName('main__userName')[0].style= "display: none";
  });
});
