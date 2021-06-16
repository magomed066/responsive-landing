window.addEventListener('DOMContentLoaded', () => {
	'use strict'

	//! Select
	const inputs = document.querySelectorAll('.select')

	inputs.forEach((item) => {
		item.addEventListener('click', toggleSelect)
	})

	function toggleSelect(e) {
		const target = e.target

		if (target.classList.contains('select')) {
			const parent = target.closest('.form-control')
			const options = parent.querySelector('.options')
			const selectArrow = parent.querySelector('.select-arrow')

			options.classList.toggle('active')
			selectArrow.classList.toggle('active')
		}
	}
})
