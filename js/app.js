const dehaze = document.querySelector('.header__dehaze');
const headerNav = document.querySelector('.header__navs');
const mainRightInfo = document.querySelector('.main__right__info');

dehaze.addEventListener('click', (e) => {
	if (headerNav.classList.contains("header__navs__mobile")) {
		dehaze.innerHTML = 'dehaze';
		headerNav.classList.remove("header__navs__mobile");
		mainRightInfo.style.zIndex = 1;
	} else {
		dehaze.innerHTML = 'close';
		headerNav.classList.add("header__navs__mobile");
		mainRightInfo.style.zIndex = 0;
    }
})