const { Router } = require('express');
const router = Router();

const title = 'Jays · HTML, SCSS and JS library to create incredible websites';
const icon = "'img/favicon.png'";

router.get('/', (req, res) => {
	res.render('index', {
		title: title,
		icon: icon,
	});
});

router.get('/premium', (req, res) => {
	res.render('premium', {
		title: title,
		icon: icon,
	});
});

// Page not found
router.use((req, res, next) => {
	res.status(404).render('not-found', {
		title: 'Error 404 · Page ' + req.url + ' not found',
		route: req.url,
		icon: 'img/favicon-error.png',
	});
});

module.exports = router;