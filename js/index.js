const menuTriggerBtn = document.querySelector('.menu__trigger')

// Listen for click in the hamburger button
menuTriggerBtn.addEventListener('click', () => {
	document.body.classList.toggle('menu__col--open')
})

// Close nav when a nav link is clicked
const links = document.querySelectorAll('.menu__link')
links.forEach(link => link.addEventListener('click', () => {
	document.body.classList.remove('menu__col--open')
}))
