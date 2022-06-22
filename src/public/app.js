// Navigation bar
const header = document.querySelector('header');
const btnMenu = document.querySelector('.bars');
const btnCloseMenu = document.querySelector('.close');
const navMobile = document.querySelector('.mobile');
const bgDark = document.querySelector('.bg-dark');

btnMenu.addEventListener('click', () => {
	navMobile.classList.add('active');
	bgDark.classList.add('active');
});

btnCloseMenu.addEventListener('click', () => {
	navMobile.classList.remove('active');
	bgDark.classList.remove('active');
});

bgDark.addEventListener('click', () => {
	navMobile.classList.remove('active');
	bgDark.classList.remove('active');
});

// Cookies
const bannerCookies = document.querySelector('.banner-cookies');
const btnAcceptCookies = document.querySelector('.accept');
const btnDecline = document.querySelector('.decline');
const bgCookieDark = document.querySelector('.cookies-dark');

if (!document.cookie.includes('cookies')) {
	bannerCookies.classList.add('active');
	bgCookieDark.classList.add('active');
	document.body.classList.add('no-scroll');
}

btnAcceptCookies.addEventListener('click', () => {
	bannerCookies.classList.add('magictime', 'slideDown');
	bgCookieDark.classList.add('magictime', 'vanishOut');
	setTimeout(() => {
		bannerCookies.classList.remove('active');
		bgCookieDark.classList.remove('active');
	}, 1000);
	document.cookie = 'cookies=true; max-age=' + 60 * 60 * 24 * 60;
	document.body.classList.remove('no-scroll');
});

btnDecline.addEventListener('click', () => {
	document.body.innerHTML = `<h1 class='no-cookies-text' style='transition: all 0.2 ease'>You must accept cookies to be able to navigate!</h1>`;

	setTimeout(() => {
		location.reload();
	}, 2000);
});

// CTRL + X to back to home
document.addEventListener('keydown', (e) => {
	if (e.ctrlKey && e.keyCode === 88) {
		window.location.href = '/';
	}
});