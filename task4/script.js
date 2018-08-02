window.onload = () => {
	let result; 
	let map;

	result = document.getElementById('result');

	const ourOptions = {
		zoom: 18,
		mapTypeId:  google.maps.MapTypeId.ROADMAP
	}

	map = new google.maps.Map(document.getElementById('mapSurface'), ourOptions)

	const geolocationSuccess = (position) => {
		const location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		
		map.setCenter(location);
	}

	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(geolocationSuccess);
	} 

}

