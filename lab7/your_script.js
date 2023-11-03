// Example code for Leaflet map setup
var map = L.map('map').setView([campusLat, campusLng], campusZoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

// Add markers for campus locations
L.marker([locationLat, locationLng])
    .addTo(map)
    .bindPopup('<p>Location Name</p>');