function geoFindMe() {
    var output = document.getElementById("inputCoordenates");

    if (!navigator.geolocation) {
        output.innerHTML = "<p>No has activado la Geolocalización</p>";
        return;
    }
    document.getElementById('mapContainer').innerHTML = "";


    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        output.value = latitude + ',' + longitude;


        newMap = document.createElement('div');
        newMap.setAttribute('id', 'myMap');
        newMap.classList.add('myMap');
        document.getElementById('mapContainer').appendChild(newMap);

        let map = L.map('myMap').setView([latitude, longitude], 16);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(map);

        L.marker([latitude, longitude]).addTo(map)
            .openPopup();

    };

    function error() {
        output.value = "No se obtuvo la localización";
    };

    const options = {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 2000
    };

    output.value = "Localizando...";

    navigator.geolocation.getCurrentPosition(success, error, options);
}

let generateCoo = document.getElementById('generate-coo');
generateCoo.addEventListener('click', geoFindMe);


//contraseña {FqcaG7^d/|D(Cs!