const nav = document.querySelector('.navi');
const wrapperMenu = document.querySelector('.wrapper-menu');
const allNavItems = document.querySelectorAll('.navi__item')

wrapperMenu.addEventListener('click', function () {
	wrapperMenu.classList.toggle('open');
	nav.classList.toggle('navi--active');

	allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('navi--active',)
            wrapperMenu.classList.remove('open',)
        })
    })
});
