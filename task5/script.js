

const contentEl = document.querySelector('.content');

const links = {
	main: 'main page',
	about: 'about page',
	downloads: 'downloads page'
}

const updatestate = () => {
	let content = links[location.hash.slice(1)];

	
		contentEl.innerHTML = content || "page not found";
	
}

window.addEventListener('hashchange', updatestate);
window.addEventListener('load',updatestate);
