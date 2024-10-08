import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';


class LeafletMap extends HTMLElement {
    latlng: [number, number];

    constructor() {
      super();

      this.latlng = [
        Number(this.dataset.latitude),
        Number(this.dataset.longitude),
      ];
    } 

    connectedCallback() {
        // Cette méthode est appelée quand l'élément est inséré dans le DOM
        this.initLeafletMap();
      }

      initLeafletMap() {
        // Initialisation de la carte Leaflet
        if (typeof window !== 'undefined') {
            const container = this.dataset.container;
            if (!container) {
                console.error('Container ID is missing or undefined');
                return;
              }

              console.log("Container ID:", container); 
          const map = L.map(container).setView([48.814826, -0.365081], 13);
          console.log("map", map); 
        
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
          }).addTo(map);
        
          const HomeIcon = L.icon({
            iconUrl: "_house.png",
            iconSize: [30, 30],
            iconAnchor: [10, 10],
            popupAnchor: [-3, -76],
          });
        
          const marker = new L.Marker([48.814826, -0.365081], { icon: HomeIcon });
          marker.addTo(map);
        }
      }
}

// Définir l'élément personnalisé
window.customElements.define("leaflet-map", LeafletMap);