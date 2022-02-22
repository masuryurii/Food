function modal() {
    //Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';//отменяем прокрутку сайта при открытом мод окне
        clearInterval(modalTimerId);//если пользователь сам уже открыл мод окно, то повторно не показываем
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    //закрытие мод окна при клике на подложку
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal();
        }
    });

    //закрытие мод окна при клике на Escape
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    //пользователь пробыл на сайте 50 секунд - показываем мод окно
    const modalTimerId = setTimeout(openModal, 50000);

    //пользователь проскролил сайт в низ - показываем мод окно
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}
module.exports = modal;