/**
 * Modul Peta Interaktif Desa Sukagalih menggunakan Leaflet.js
 */

const SukagalihMap = {
  mapInstance: null,

  init(containerId = 'villageMap') {
    const mapElement = document.getElementById(containerId);
    if (!mapElement || typeof L === 'undefined') return;

    // Bersihkan instance lama jika ada
    if (this.mapInstance) {
      this.mapInstance.remove();
      this.mapInstance = null;
    }

    const { lat, lng, zoom } = SukagalihData.villageInfo.coordinates;

    // Inisialisasi Peta
    this.mapInstance = L.map(containerId, {
      center: [lat, lng],
      zoom: zoom,
      scrollWheelZoom: false
    });

    // Layer OpenStreetMap dengan Tile yang bersih
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors | Desa Sukagalih'
    }).addTo(this.mapInstance);

    // Custom Icon Generator
    const createGreenIcon = (title, iconEmoji = '📍') => {
      return L.divIcon({
        className: 'custom-map-pin',
        html: `<div style="
          background: #244A2A;
          color: #FFF;
          width: 38px;
          height: 38px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #8BCF7A;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        ">
          <span style="transform: rotate(45deg); font-size: 16px;">${iconEmoji}</span>
        </div>`,
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38]
      });
    };

    // 1. Marker Kantor Desa
    const officeMarker = L.marker([lat, lng], {
      icon: createGreenIcon('Kantor Desa Sukagalih', '🏛️')
    }).addTo(this.mapInstance);

    officeMarker.bindPopup(`
      <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 4px;">
        <h4 style="margin: 0 0 4px 0; color: #244A2A; font-weight: 800; font-size: 14px;">Kantor Desa Sukagalih</h4>
        <p style="margin: 0 0 6px 0; font-size: 12px; color: #555;">Pusat Pelayanan & Pemerintahan Desa Sukagalih</p>
        <span style="display: inline-block; background: #EBF5E9; color: #3F7D3A; font-size: 11px; padding: 2px 8px; border-radius: 12px; font-weight: 600;">Telp: ${SukagalihData.villageInfo.hotline}</span>
      </div>
    `).openPopup();

    // 2. Titik 4 Dusun
    const dusunPoints = [
      { name: "Dusun Cikatubang", lat: -7.2610, lng: 108.1610, icon: "🏡", desc: "Sentra Perikanan & Mata Air Alami" },
      { name: "Dusun Sindanggalih", lat: -7.2645, lng: 108.1650, icon: "🌾", desc: "Sentra Kerajinan Bambu & Pertanian" },
      { name: "Dusun Sindangkerta", lat: -7.2600, lng: 108.1680, icon: "☕", desc: "Perkebunan Kopi & Palawija" },
      { name: "Dusun Parakankawung", lat: -7.2670, lng: 108.1620, icon: "⛰️", desc: "Agrowisata Terasering & Gula Aren" }
    ];

    dusunPoints.forEach(d => {
      const marker = L.marker([d.lat, d.lng], {
        icon: createGreenIcon(d.name, d.icon)
      }).addTo(this.mapInstance);

      marker.bindPopup(`
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 4px;">
          <h4 style="margin: 0 0 4px 0; color: #244A2A; font-weight: 800; font-size: 13px;">${d.name}</h4>
          <p style="margin: 0; font-size: 12px; color: #666;">${d.desc}</p>
        </div>
      `);
    });

    // 3. Titik Wisata
    const tourismPoints = [
      { name: "Mata Air Cikatubang", lat: -7.2595, lng: 108.1600, icon: "💧", cat: "Wisata Mata Air" },
      { name: "Terasering Parakankawung", lat: -7.2685, lng: 108.1615, icon: "🏞️", cat: "Agrowisata" }
    ];

    tourismPoints.forEach(t => {
      const marker = L.marker([t.lat, t.lng], {
        icon: createGreenIcon(t.name, t.icon)
      }).addTo(this.mapInstance);

      marker.bindPopup(`
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 4px;">
          <span style="font-size: 10px; font-weight: 700; color: #3F7D3A; text-transform: uppercase;">${t.cat}</span>
          <h4 style="margin: 2px 0; color: #244A2A; font-weight: 800; font-size: 13px;">${t.name}</h4>
        </div>
      `);
    });
  }
};

if (typeof window !== 'undefined') {
  window.SukagalihMap = SukagalihMap;
}
