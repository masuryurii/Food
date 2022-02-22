function tabs() {
    //Tabs

    //1 функция которая будет скрывать ненужные табы
    //2 показать нужный таб
    //3 назначить обработчики событий на боковое меню справа, которые и будут манипулировать этими функцмями

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    //1  hiden tabs
    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        //1.1 renove active class
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    //2 show tabs
    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();

    //3 используем делегирование и назначаем обработчик события
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

module.exports = tabs;