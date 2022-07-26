let word = document.querySelector(".form-name-input__input");
let btn = document.querySelector(".form-name-input__button");
let userName = ''
let form = document.querySelector('.form-name-input');
let userNameString = document.querySelector('.main__userName');
let reseter = document.querySelectorAll('.button-name-reset ')

btn.addEventListener("click", btnClick);

function addUserName() {
  if (localStorage.getItem('userName') != null && localStorage.getItem('userName') != '') {
    document.getElementsByClassName('form-name-input')[0].style = "visibility: hidden; opacity: 0; width: 0px; transition: all 200ms ease-out;";
    document.getElementsByClassName('main__userName')[0].style = "visibility: visible; opacity: 1; max-width: 100%; transition: all 200ms ease-out;";
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
    document.getElementsByClassName('form-name-input')[0].style = "visibility: visible; opacity: 1; max-width: 100%; transition: all 0ms ease-out;";
    document.getElementsByClassName('main__userName')[0].style = "visibility: hidden; opacity: 0; width: 0px; transition: all 0ms ease-out;";
    
  });
});

function autoResize() {
  let size = word.scrollWidth;
  word.style.width = size + 'px';
  form.style.width = size + 'px';
}

word.addEventListener('input', autoResize);


