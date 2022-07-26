const btns = document.querySelectorAll('.btns')
const modalOverlay = document.querySelector('.modal-overlay')
const modals = document.querySelectorAll('.modal')
const closeThis = document.querySelectorAll('.closeThis')

btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');
        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');
    });
});

closeThis.forEach((el) => {
    el.addEventListener('click', (e) => {
        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });
        modalOverlay.classList.remove('modal-overlay--visible');
    });
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });
        modalOverlay.classList.remove('modal-overlay--visible');
    }
});

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });
        modalOverlay.classList.remove('modal-overlay--visible');
    }
});
