/**
 * Master Application Controller & Router for Desa Sukagalih Digital Platform
 */

const SukagalihApp = {
  currentRoute: '',
  selectedUmkmCategory: 'Semua',
  searchUmkmQuery: '',
  selectedGalleryCategory: 'Semua',
  selectedNewsCategory: 'Semua',

  init() {
    this.setupEventListeners();
    this.handleRouting();
    window.addEventListener('hashchange', () => this.handleRouting());
  },

  setupEventListeners() {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar-wrapper');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    });

    // Mobile Drawer Handlers
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerBackdrop = document.getElementById('drawerBackdrop');
    const drawerClose = document.getElementById('drawerClose');

    const toggleDrawer = (open) => {
      if (open) {
        mobileDrawer?.classList.add('open');
        drawerBackdrop?.classList.add('active');
        document.body.style.overflow = 'hidden';
      } else {
        mobileDrawer?.classList.remove('open');
        drawerBackdrop?.classList.remove('active');
        document.body.style.overflow = '';
      }
    };

    mobileToggle?.addEventListener('click', () => toggleDrawer(true));
    drawerClose?.addEventListener('click', () => toggleDrawer(false));
    drawerBackdrop?.addEventListener('click', () => toggleDrawer(false));

    // Close mobile drawer on link click
    document.querySelectorAll('.mobile-drawer .nav-link').forEach(link => {
      link.addEventListener('click', () => toggleDrawer(false));
    });

    // Lightbox Close Handler
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxClose = document.getElementById('lightboxClose');
    lightboxClose?.addEventListener('click', () => {
      lightboxModal?.classList.remove('active');
    });
    lightboxModal?.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
      }
    });
  },

  // Router Controller
  handleRouting() {
    const rawHash = window.location.hash || '#/';
    const [path, param] = rawHash.replace('#', '').split('/').filter(Boolean);
    const route = path || '';
    this.currentRoute = route;

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href')?.replace('#/', '').replace('#', '') || '';
      if (href === route || (route === '' && href === '')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    const mainContainer = document.getElementById('appContent');
    if (!mainContainer) return;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Route Matcher
    switch (route) {
      case '':
        mainContainer.innerHTML = this.renderHomepage();
        this.initHomepageScripts();
        break;
      case 'profil':
        mainContainer.innerHTML = this.renderProfilePage();
        break;
      case 'pemerintahan':
        mainContainer.innerHTML = this.renderGovernmentPage();
        break;
      case 'data-desa':
        mainContainer.innerHTML = this.renderDataPage();
        setTimeout(() => SukagalihCharts.initAll(), 100);
        break;
      case 'potensi':
        mainContainer.innerHTML = this.renderPotentialsPage();
        break;
      case 'umkm':
        if (param) {
          mainContainer.innerHTML = this.renderUmkmDetail(param);
        } else {
          mainContainer.innerHTML = this.renderUmkmPage();
          this.initUmkmEvents();
        }
        break;
      case 'wisata':
        if (param) {
          mainContainer.innerHTML = this.renderTourismDetail(param);
        } else {
          mainContainer.innerHTML = this.renderTourismPage();
        }
        break;
      case 'berita':
        if (param) {
          mainContainer.innerHTML = this.renderNewsDetail(param);
        } else {
          mainContainer.innerHTML = this.renderNewsPage();
        }
        break;
      case 'galeri':
        mainContainer.innerHTML = this.renderGalleryPage();
        this.initGalleryEvents();
        break;
      case 'kkn':
        mainContainer.innerHTML = this.renderKknPage();
        break;
      case 'kontak':
        mainContainer.innerHTML = this.renderContactPage();
        setTimeout(() => SukagalihMap.init('contactMap'), 150);
        break;
      case 'admin':
        mainContainer.innerHTML = this.renderAdminPage();
        break;
      default:
        mainContainer.innerHTML = this.renderNotFound();
    }
  },

  // =========================================================================
  // VIEW: HOMEPAGE (/)
  // =========================================================================
  renderHomepage() {
    const data = SukagalihData;
    const hero = data.villageInfo;
    const stats = data.demographics;
    const featuredPotentials = data.potentials.slice(0, 3);
    const topUmkm = data.umkm.slice(0, 4);
    const topNews = data.news.slice(0, 2);
    const events = data.events.slice(0, 3);

    return `
      <!-- HERO SECTION -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-badge">
              <span>🌿</span> ${hero.locationBadge}
            </div>
            <h1 class="hero-title">Selamat Datang di<br><span style="color: var(--primary-light);">Desa Sukagalih</span></h1>
            <p class="hero-subtitle">${hero.shortDesc}</p>
            <div class="hero-actions">
              <a href="#/potensi" class="btn btn-primary btn-lg">Jelajahi Potensi Desa →</a>
              <a href="#/profil" class="btn btn-outline-white btn-lg">Kenali Desa Kami</a>
            </div>
          </div>
        </div>
      </section>

      <!-- FLOATING STATISTIC CARDS -->
      <div class="hero-stats-wrapper">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-icon">👥</div>
              <div class="stat-info">
                <span class="stat-value">${stats.totalPopulation.toLocaleString('id-ID')}</span>
                <span class="stat-label">Total Penduduk (Jiwa)</span>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">🏡</div>
              <div class="stat-info">
                <span class="stat-value">4 Dusun</span>
                <span class="stat-label">Cikatubang • Sindanggalih • dll</span>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">🌱</div>
              <div class="stat-info">
                <span class="stat-value">174 Ha</span>
                <span class="stat-label">Luas Wilayah Subur</span>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">🛍️</div>
              <div class="stat-info">
                <span class="stat-value">50+ UMKM</span>
                <span class="stat-label">Produk & Usaha Warga</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ABOUT SECTION -->
      <section class="section" id="about">
        <div class="container">
          <div class="about-grid">
            <div class="about-image-wrapper">
              <div class="about-image-main">
                <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80" alt="Lanskap Desa Sukagalih Tasikmalaya">
              </div>
              <div class="about-floating-badge">
                <span class="badge-number">1979</span>
                <span class="badge-desc">Tahun Kelahiran Resmi<br>Desa Sukagalih</span>
              </div>
            </div>
            <div class="about-text-content">
              <div class="section-badge">Mengenal Sukagalih</div>
              <h2 class="section-title">Harmoni Alam & Masyarakat Produktif di Kaki Galunggung</h2>
              <p class="section-subtitle" style="margin-bottom: 1.25rem;">${hero.longDesc}</p>
              
              <div class="about-meta-list">
                <div class="about-meta-item">
                  <span class="meta-icon">📍</span>
                  <div>
                    <div class="meta-label">Kecamatan</div>
                    <div class="meta-value">Sukaratu</div>
                  </div>
                </div>
                <div class="about-meta-item">
                  <span class="meta-icon">🏛️</span>
                  <div>
                    <div class="meta-label">Kabupaten</div>
                    <div class="meta-value">Tasikmalaya</div>
                  </div>
                </div>
                <div class="about-meta-item">
                  <span class="meta-icon">⛰️</span>
                  <div>
                    <div class="meta-label">Ketinggian</div>
                    <div class="meta-value">400 - 450 mdpl</div>
                  </div>
                </div>
                <div class="about-meta-item">
                  <span class="meta-icon">🛣️</span>
                  <div>
                    <div class="meta-label">Akses Jalan</div>
                    <div class="meta-value">Jalan Aspal Hotmix</div>
                  </div>
                </div>
              </div>

              <a href="#/profil" class="btn btn-primary">Baca Profil Lengkap Desa →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- VISI & MISI SECTION -->
      <section class="section section-bg-light">
        <div class="container">
          <div class="section-header">
            <div class="section-badge">Arah Pembangunan</div>
            <h2 class="section-title">Menuju Sukagalih yang Lebih Berkembang</h2>
            <p class="section-subtitle">Komitmen terpadu mewujudkan desa yang mandiri, agraris, religius, dan sejahtera.</p>
          </div>

          <div class="visi-box">
            <span class="visi-tag">Visi Pemerintah Desa Sukagalih</span>
            <div class="visi-quote">"${data.visionMission.vision}"</div>
            <p class="visi-desc">${data.visionMission.visionNote}</p>
          </div>

          <div class="misi-grid">
            ${data.visionMission.missions.slice(0, 4).map(m => `
              <div class="misi-card">
                <div class="misi-num">${m.no}</div>
                <h4 class="misi-title">${m.title}</h4>
                <p class="misi-desc">${m.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- POTENSI DESA SECTION -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <div class="section-badge">Potensi Sukagalih</div>
            <h2 class="section-title">Kekayaan Alam & Karya Masyarakat Lokal</h2>
            <p class="section-subtitle">Dari tanah yang subur, perikanan air jernih, hingga kreativitas kerajinan bambu.</p>
          </div>

          <div class="potensi-grid">
            ${data.potentials.map(p => `
              <div class="potensi-card">
                <div class="potensi-image">
                  <img src="${p.image}" alt="${p.title}" loading="lazy">
                  <div class="potensi-icon-badge">${p.icon}</div>
                </div>
                <div class="potensi-body">
                  <h3 class="potensi-title">${p.title}</h3>
                  <div class="potensi-tagline">${p.tagline}</div>
                  <p class="potensi-desc">${p.desc}</p>
                  <div class="potensi-footer">
                    <span>${p.metrics}</span>
                    <a href="#/potensi" style="color: var(--primary-main); font-weight: 700;">Detail →</a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- FEATURED STORY (DARK GREEN SPOTLIGHT) -->
      <section class="section section-bg-dark">
        <div class="container">
          <div class="story-wrapper">
            <div class="story-content">
              <div class="section-badge badge-white">Cerita dari Tanah Sukagalih</div>
              <h2 class="story-title">${data.featuredStory.title}</h2>
              <div class="story-subtitle">${data.featuredStory.subtitle}</div>
              <p class="story-body">${data.featuredStory.content}</p>

              <div class="story-stats">
                ${data.featuredStory.highlightStats.map(s => `
                  <div class="story-stat-item">
                    <div class="story-stat-val">${s.value}</div>
                    <div class="story-stat-lbl">${s.label}</div>
                  </div>
                `).join('')}
              </div>

              <div>
                <a href="#/profil" class="btn btn-secondary">Pelajari Sejarah & Potensi →</a>
              </div>
            </div>
            <div class="story-image-card">
              <img src="${data.featuredStory.image}" alt="Cerita Sukagalih">
            </div>
          </div>
        </div>
      </section>

      <!-- PRODUK UMKM LOKAL SECTION -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <div class="section-badge">Marketplace Desa</div>
            <h2 class="section-title">Produk Unggulan & UMKM Sukagalih</h2>
            <p class="section-subtitle">Dukung ekonomi kemasyarakatan dengan membeli langsung dari petani, peternak, dan pengrajin lokal.</p>
          </div>

          <div class="umkm-grid">
            ${topUmkm.map(u => this.renderUmkmCardHtml(u)).join('')}
          </div>

          <div style="text-align: center; margin-top: 3rem;">
            <a href="#/umkm" class="btn btn-outline btn-lg">Lihat Semua Produk UMKM Sukagalih (${data.umkm.length}) →</a>
          </div>
        </div>
      </section>

      <!-- BERITA & AGENDA SECTION -->
      <section class="section section-bg-light">
        <div class="container">
          <div class="news-agenda-grid">
            <div>
              <div class="section-badge">Kabar Sukagalih</div>
              <h2 class="section-title" style="margin-bottom: 1.5rem;">Berita & Kegiatan Terkini</h2>
              
              <div class="news-cards-grid">
                ${topNews.map(n => `
                  <div class="news-card">
                    <div class="news-image">
                      <img src="${n.image}" alt="${n.title}" loading="lazy">
                      <div class="news-category-badge">${n.category}</div>
                    </div>
                    <div class="news-body">
                      <div class="news-date">📅 ${n.date}</div>
                      <h4 class="news-title">${n.title}</h4>
                      <p class="news-excerpt">${n.excerpt}</p>
                      <a href="#/berita/${n.id}" style="color: var(--primary-main); font-weight: 700; font-size: 0.85rem; margin-top: auto;">Baca Selengkapnya →</a>
                    </div>
                  </div>
                `).join('')}
              </div>
              <div style="margin-top: 1.5rem;">
                <a href="#/berita" class="btn btn-outline btn-sm">Lihat Semua Berita →</a>
              </div>
            </div>

            <div>
              <div class="section-badge">Agenda Desa</div>
              <h2 class="section-title" style="margin-bottom: 1.5rem;">Jadwal Kegiatan</h2>

              <div class="agenda-list">
                ${events.map(e => `
                  <div class="agenda-card">
                    <div class="agenda-date-box">
                      <div class="date-day">${e.dateDay}</div>
                      <div class="date-month">${e.dateMonth}</div>
                    </div>
                    <div class="agenda-info">
                      <h4 class="agenda-title">${e.title}</h4>
                      <div class="agenda-loc">📍 ${e.location}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- KKN 2026 SPOTLIGHT SECTION -->
      <section class="section">
        <div class="container">
          <div class="kkn-hero-card">
            <div class="kkn-hero-grid">
              <div>
                <div class="kkn-badge">Inisiatif KKN Mahasiswa 2026</div>
                <h2 class="kkn-univ-title">Jejak Kolaborasi KKN Kelompok 09 Universitas BTH</h2>
                <p class="kkn-univ-sub">${data.kknInfo.description}</p>
                
                <div class="kkn-details-list">
                  <div class="kkn-detail-tag">🏛️ ${data.kknInfo.university}</div>
                  <div class="kkn-detail-tag">👥 ${data.kknInfo.groupName}</div>
                  <div class="kkn-detail-tag">📅 Periode 2026</div>
                </div>

                <div style="margin-top: 2rem;">
                  <a href="#/kkn" class="btn btn-secondary">Lihat Program Kerja & Tim KKN →</a>
                </div>
              </div>
              <div class="kkn-logo-emblem-card">
                <img src="assets/images/logo-kkn.svg" alt="Emblem KKN 09 Universitas BTH" class="kkn-emblem-img">
                <h4 style="font-size: 1.1rem; font-weight: 800; color: #FFF; margin-bottom: 0.25rem;">KELOMPOK 09 DESA SUKAGALIH</h4>
                <p style="font-size: 0.8rem; color: #B9D4B6;">KKN 2026 UNIVERSITAS BTH</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- MAP SECTION -->
      <section class="section section-bg-light" style="padding-bottom: 0;">
        <div class="container">
          <div class="section-header">
            <div class="section-badge">Peta Wilayah</div>
            <h2 class="section-title">Temukan Desa Sukagalih</h2>
            <p class="section-subtitle">Kecamatan Sukaratu, Kabupaten Tasikmalaya, Jawa Barat</p>
          </div>
          <div id="homeMap" class="map-container"></div>
        </div>
      </section>
    `;
  },

  initHomepageScripts() {
    setTimeout(() => {
      SukagalihMap.init('homeMap');
    }, 150);
  },

  // Helper UMKM Card HTML
  renderUmkmCardHtml(u) {
    const waText = encodeURIComponent(`Halo, saya tertarik memesan produk *${u.name}* dari UMKM Desa Sukagalih seharga ${u.price}. Mohon info ketersediaan stoknya. Terima kasih!`);
    const waUrl = `https://wa.me/${u.whatsapp}?text=${waText}`;

    return `
      <div class="product-card">
        <div class="product-image">
          <img src="${u.image}" alt="${u.name}" loading="lazy">
          <div class="product-badge">${u.badge}</div>
          <div class="product-category-tag">${u.category}</div>
        </div>
        <div class="product-body">
          <div class="product-seller">🏪 ${u.umkmName}</div>
          <h4 class="product-name">${u.name}</h4>
          <p class="product-desc">${u.desc}</p>
          
          <div class="product-price-row">
            <div>
              <div class="product-price">${u.price}</div>
              <div class="product-location">📍 ${u.location}</div>
            </div>
          </div>

          <div class="product-actions">
            <a href="${waUrl}" target="_blank" class="btn btn-primary btn-sm" title="Pesan langsung via WhatsApp">
              💬 Pesan via WA
            </a>
            <a href="#/umkm/${u.id}" class="btn btn-outline btn-sm" title="Detail Produk">
              Detail
            </a>
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // VIEW: PROFIL DESA (/profil)
  // =========================================================================
  renderProfilePage() {
    const data = SukagalihData;
    const h = data.history;
    const g = data.geography;

    return `
      <div class="container section">
        <div class="section-header text-left">
          <div class="section-badge">Profil Lengkap</div>
          <h1 class="section-title">Profil Resmi Desa Sukagalih</h1>
          <p class="section-subtitle">Kecamatan Sukaratu, Kabupaten Tasikmalaya, Jawa Barat</p>
        </div>

        <!-- Sejarah & Dasar Hukum -->
        <div class="card" style="padding: 2.5rem; margin-bottom: 3rem;">
          <h2 style="font-size: 1.5rem; color: var(--secondary-deep); margin-bottom: 1rem;">1. Sejarah & Pembentukan Desa</h2>
          <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">${h.narrative}</p>
          
          <div style="background: var(--bg-light-moss); border-radius: var(--radius-md); padding: 1.25rem 1.5rem; margin-bottom: 2rem;">
            <strong style="color: var(--secondary-deep); font-size: 0.95rem; display: block; margin-bottom: 0.5rem;">Dasar Hukum Pemekaran Resmi:</strong>
            <ul style="list-style-position: inside; color: var(--text-muted); font-size: 0.88rem; line-height: 1.6;">
              ${h.legalBasis.map(l => `<li>${l}</li>`).join('')}
            </ul>
          </div>

          <h3 style="font-size: 1.2rem; color: var(--secondary-deep); margin-bottom: 1.25rem;">Kepemimpinan Kepala Desa dari Masa ke Masa</h3>
          <div style="border-left: 3px solid var(--primary-main); padding-left: 1.5rem; display: flex; flex-direction: column; gap: 1.25rem;">
            ${h.timeline.map(t => `
              <div>
                <span style="display: inline-block; background: var(--primary-main); color: #FFF; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; margin-bottom: 0.25rem;">${t.year}</span>
                <h4 style="font-size: 1.05rem; color: var(--secondary-deep);">${t.title}</h4>
                <p style="font-size: 0.85rem; color: var(--text-muted);">${t.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Keadaan Geografis & Batas Wilayah -->
        <div class="card" style="padding: 2.5rem; margin-bottom: 3rem;">
          <h2 style="font-size: 1.5rem; color: var(--secondary-deep); margin-bottom: 1rem;">2. Keadaan Geografis & Batas Wilayah</h2>
          <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
            Desa Sukagalih terletak pada ketinggian <strong>${g.elevation}</strong> di atas permukaan laut dengan topografi tanah darat, persawahan subur, dan kolam air tawar. Jarak ke ibu kota Kecamatan Sukaratu sejauh <strong>${g.distanceToDistrict}</strong> dan ke ibu kota Kabupaten Tasikmalaya sejauh <strong>${g.distanceToRegency}</strong> melalui akses jalan hotmix yang mulus.
          </p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: var(--bg-offwhite); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
              <h4 style="color: var(--secondary-deep); margin-bottom: 0.75rem;">Batas Wilayah Administratif</h4>
              <ul style="list-style: none; font-size: 0.88rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 0.5rem;">
                <li><strong>Utara:</strong> ${g.borders.north}</li>
                <li><strong>Selatan:</strong> ${g.borders.south}</li>
                <li><strong>Timur:</strong> ${g.borders.east}</li>
                <li><strong>Barat:</strong> ${g.borders.west}</li>
              </ul>
            </div>

            <div style="background: var(--bg-offwhite); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
              <h4 style="color: var(--secondary-deep); margin-bottom: 0.75rem;">Penggunaan Lahan Total (174 Ha)</h4>
              <ul style="list-style: none; font-size: 0.88rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 0.5rem;">
                ${g.landUse.map(l => `<li>• <strong>${l.type}:</strong> ${l.areaHa} Ha (${l.percentage}%)</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>

        <!-- 4 Kepunduhan / Dusun -->
        <div class="card" style="padding: 2.5rem;">
          <h2 style="font-size: 1.5rem; color: var(--secondary-deep); margin-bottom: 1.5rem;">3. Wilayah 4 Kepunduhan (Dusun)</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;">
            ${g.dusun.map(d => `
              <div style="background: var(--bg-offwhite); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <h3 style="color: var(--secondary-deep); font-size: 1.15rem; margin-bottom: 0.35rem;">${d.name}</h3>
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--primary-main); margin-bottom: 0.75rem;">Kadus: ${d.kadus}</div>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">${d.desc}</p>
                <div style="font-size: 0.8rem; color: var(--text-muted); border-top: 1px dashed var(--border-subtle); padding-top: 0.5rem;">
                  Luas: <strong>${d.areaHa} Ha</strong> | Penduduk: <strong>${d.population} Jiwa</strong>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // VIEW: PEMERINTAHAN DESA (/pemerintahan)
  // =========================================================================
  renderGovernmentPage() {
    const data = SukagalihData;
    const gov = data.government;

    return `
      <div class="container section">
        <div class="section-header">
          <div class="section-badge">Struktur Organisasi & Tata Kerja (SOTK)</div>
          <h1 class="section-title">Pemerintahan Desa Sukagalih</h1>
          <p class="section-subtitle">Aparatur Pemerintah Desa, Badan Permusyawaratan Desa (BPD), dan Lembaga Kemasyarakatan</p>
        </div>

        <!-- Pimpinan Desa -->
        <div class="gov-hero-leader">
          <div class="gov-leader-photo">👔</div>
          <div class="gov-leader-info">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--primary-main); text-transform: uppercase;">Kepala Desa Sukagalih</span>
            <h3>${gov.headOfVillage.name}</h3>
            <div class="gov-leader-role">${gov.headOfVillage.period}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6;">
              <div>Pendidikan: ${gov.headOfVillage.education}</div>
              <div>Lahir: ${gov.headOfVillage.birthDate}</div>
              <div style="font-size: 0.82rem; color: var(--primary-main); font-weight: 600; margin-top: 0.35rem;">🏛️ Pelayanan Informasi via Balai Desa Sukagalih</div>
            </div>
          </div>
        </div>

        <!-- Perangkat Desa Lengkap -->
        <h2 style="font-size: 1.5rem; color: var(--secondary-deep); margin-bottom: 1.5rem; text-align: center;">Perangkat & Staf Pemerintah Desa</h2>
        <div class="gov-grid" style="margin-bottom: 4rem;">
          <div class="gov-card">
            <div class="gov-card-name">${gov.secretary.name}</div>
            <div class="gov-card-role">${gov.secretary.title}</div>
            <div class="gov-card-meta">
              <div>Pendidikan: ${gov.secretary.edu || 'SLTA'}</div>
              <div>Lahir: ${gov.secretary.birthDate}</div>
            </div>
          </div>
          ${gov.staff.map(s => `
            <div class="gov-card">
              <div class="gov-card-name">${s.name}</div>
              <div class="gov-card-role">${s.role}</div>
              <div class="gov-card-meta">
                <div>Pendidikan: ${s.edu}</div>
                <div>Lahir: ${s.dob}</div>
                ${s.nipd ? `<div>NIPD: ${s.nipd}</div>` : ''}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Badan Permusyawaratan Desa (BPD) -->
        <div class="card" style="padding: 2.5rem; margin-bottom: 3.5rem;">
          <h2 style="font-size: 1.5rem; color: var(--secondary-deep); margin-bottom: 1.5rem; text-align: center;">Badan Permusyawaratan Desa (BPD) Sukagalih</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem;">
            ${gov.bpd.map(b => `
              <div style="background: var(--bg-offwhite); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div style="font-weight: 800; color: var(--secondary-deep); font-size: 1rem;">${b.name}</div>
                <div style="color: var(--primary-main); font-weight: 700; font-size: 0.82rem; margin: 0.2rem 0 0.5rem 0;">${b.role}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">Pendidikan: ${b.edu} | Lahir: ${b.dob}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Kelompok Tani / Gapoktan -->
        <div class="card" style="padding: 2.5rem;">
          <h2 style="font-size: 1.5rem; color: var(--secondary-deep); margin-bottom: 1.5rem; text-align: center;">Lembaga Pertanian & GAPOKTAN Galih Mukti</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">
            ${gov.agricultureGroups.map(a => `
              <div style="background: var(--bg-offwhite); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div style="font-weight: 800; color: var(--secondary-deep); font-size: 1rem;">${a.name}</div>
                <div style="font-size: 0.8rem; color: var(--primary-mid); font-weight: 600; margin-bottom: 0.5rem;">📍 ${a.lokasi}</div>
                <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.5;">
                  <div>Ketua: <strong>${a.ketua}</strong></div>
                  <div>Sekretaris: ${a.sekretaris}</div>
                  <div>Bendahara: ${a.bendahara}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // VIEW: DATA DESA & VISUALISASI (/data-desa)
  // =========================================================================
  renderDataPage() {
    const data = SukagalihData;
    const demo = data.demographics;
    const dusun = data.geography.dusun;

    return `
      <div class="container section">
        <div class="section-header text-left">
          <div class="section-badge">Data & Statistik Resmi</div>
          <h1 class="section-title">Visualisasi Data Desa Sukagalih</h1>
          <p class="section-subtitle">Data demografi kependudukan, kelompok usia, pendidikan, dan mata pencaharian terpusat.</p>
        </div>

        <!-- Metric Summary Cards -->
        <div class="stats-grid" style="margin-bottom: 2.5rem;">
          <div class="stat-card">
            <div class="stat-icon">👥</div>
            <div class="stat-info">
              <span class="stat-value">${demo.totalPopulation.toLocaleString('id-ID')}</span>
              <span class="stat-label">Total Jiwa Penduduk</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">👨‍👩‍👧‍👦</div>
            <div class="stat-info">
              <span class="stat-value">${demo.totalKK.toLocaleString('id-ID')}</span>
              <span class="stat-label">Total Kepala Keluarga (KK)</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">🏠</div>
            <div class="stat-info">
              <span class="stat-value">${demo.totalKRT.toLocaleString('id-ID')}</span>
              <span class="stat-label">Kepala Rumah Tangga (KRT)</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📍</div>
            <div class="stat-info">
              <span class="stat-value">${demo.totalDusun} Dusun / ${demo.totalRT} RT</span>
              <span class="stat-label">8 Rukun Warga (RW)</span>
            </div>
          </div>
        </div>

        <!-- CHARTS SECTION -->
        <div class="charts-grid">
          <div class="chart-card">
            <div class="chart-header">
              <h3 class="chart-title">Distribusi Penduduk per Dusun</h3>
            </div>
            <div class="chart-canvas-wrapper">
              <canvas id="chartDusun"></canvas>
            </div>
          </div>

          <div class="chart-card">
            <div class="chart-header">
              <h3 class="chart-title">Perbandingan Jenis Kelamin</h3>
            </div>
            <div class="chart-canvas-wrapper">
              <canvas id="chartGender"></canvas>
            </div>
          </div>

          <div class="chart-card">
            <div class="chart-header">
              <h3 class="chart-title">Tingkat Pendidikan Penduduk</h3>
            </div>
            <div class="chart-canvas-wrapper">
              <canvas id="chartEducation"></canvas>
            </div>
          </div>

          <div class="chart-card">
            <div class="chart-header">
              <h3 class="chart-title">Kelompok Usia Penduduk</h3>
            </div>
            <div class="chart-canvas-wrapper">
              <canvas id="chartAge"></canvas>
            </div>
          </div>

          <div class="chart-card">
            <div class="chart-header">
              <h3 class="chart-title">Mata Pencaharian Utama Warga</h3>
            </div>
            <div class="chart-canvas-wrapper">
              <canvas id="chartOccupation"></canvas>
            </div>
          </div>

          <div class="chart-card">
            <div class="chart-header">
              <h3 class="chart-title">Tata Guna Lahan Desa (174 Ha)</h3>
            </div>
            <div class="chart-canvas-wrapper">
              <canvas id="chartLandUse"></canvas>
            </div>
          </div>
        </div>

        <!-- TABEL DATA PER DUSUN RESMI -->
        <div class="dusun-table-wrapper">
          <h3 style="font-size: 1.25rem; color: var(--secondary-deep); margin-bottom: 1.25rem;">Tabel Rincian Kependudukan per Kepunduhan (Dusun)</h3>
          <table class="custom-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Kepunduhan / Dusun</th>
                <th>Luas (Ha)</th>
                <th>Laki-laki</th>
                <th>Perempuan</th>
                <th>Total Jiwa</th>
                <th>Jumlah KK</th>
                <th>Jumlah KRT</th>
                <th>Kepala Dusun</th>
              </tr>
            </thead>
            <tbody>
              ${dusun.map((d, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td><strong>${d.name}</strong></td>
                  <td>${d.areaHa} Ha</td>
                  <td>${d.male}</td>
                  <td>${d.female}</td>
                  <td><strong>${d.population}</strong></td>
                  <td>${d.kk}</td>
                  <td>${d.krt}</td>
                  <td>${d.kadus}</td>
                </tr>
              `).join('')}
              <tr style="background: var(--bg-light-moss); font-weight: 800;">
                <td colspan="2">JUMLAH TOTAL</td>
                <td>174 Ha</td>
                <td>2.684</td>
                <td>2.553</td>
                <td>5.237 Jiwa</td>
                <td>1.865 KK</td>
                <td>1.106 KRT</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // VIEW: POTENSI DESA (/potensi)
  // =========================================================================
  renderPotentialsPage() {
    const data = SukagalihData;

    return `
      <div class="container section">
        <div class="section-header">
          <div class="section-badge">Potensi & Komoditas</div>
          <h1 class="section-title">Katalog Potensi Desa Sukagalih</h1>
          <p class="section-subtitle">Mengenal keunggulan sektor agraris, perikanan air tawar, pariwisata alam, dan industri kreatif warga.</p>
        </div>

        <div class="potensi-grid" style="margin-bottom: 3.5rem;">
          ${data.potentials.map(p => `
            <div class="potensi-card">
              <div class="potensi-image">
                <img src="${p.image}" alt="${p.title}" loading="lazy">
                <div class="potensi-icon-badge">${p.icon}</div>
              </div>
              <div class="potensi-body">
                <h3 class="potensi-title">${p.title}</h3>
                <div class="potensi-tagline">${p.tagline}</div>
                <p class="potensi-desc">${p.desc}</p>
                <div class="potensi-footer">
                  <span>${p.metrics}</span>
                  <a href="#/umkm" style="color: var(--primary-main); font-weight: 700;">Produk Terkait →</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Spotlight Keunggulan Lahan Subur -->
        <div class="card" style="padding: 2.5rem; background: var(--bg-light-moss); border-color: rgba(95,175,82,0.3);">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center;">
            <div>
              <div class="section-badge badge-white" style="background: var(--primary-main); color: #FFF;">Keunggulan Geografis</div>
              <h2 style="font-size: 1.75rem; color: var(--secondary-deep); margin-bottom: 0.75rem;">Sentra Pertanian & Sumber Air Kaki Galunggung</h2>
              <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.25rem;">
                Kondisi tanah vulkanik yang kaya hara dan limpahan debit air pegunungan yang tidak pernah surut menjadikan Sukagalih sebagai lokasi ideal bagi pertanian organik dan budidaya ikan kolam air deras.
              </p>
              <a href="#/kontak" class="btn btn-primary">Konsultasi / Kerja Sama Potensi Desa →</a>
            </div>
            <div style="border-radius: var(--radius-lg); overflow: hidden; height: 260px;">
              <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80" alt="Sawah Sukagalih" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // VIEW: UMKM MARKETPLACE (/umkm)
  // =========================================================================
  renderUmkmPage() {
    const categories = ['Semua', 'Makanan', 'Minuman', 'Pertanian', 'Kerajinan'];

    return `
      <div class="container section">
        <div class="section-header">
          <div class="section-badge">Direktori UMKM & Belanja Desa</div>
          <h1 class="section-title">Produk Lokal Desa Sukagalih</h1>
          <p class="section-subtitle">Dukung usaha mikro dan kelompok wanita tani (KWT) dengan memesan produk asli langsung dari warga.</p>
        </div>

        <!-- Filter & Search Bar -->
        <div class="filter-bar">
          <div class="category-pills" id="umkmCategoryPills">
            ${categories.map(cat => `
              <button class="category-pill ${this.selectedUmkmCategory === cat ? 'active' : ''}" data-category="${cat}">
                ${cat}
              </button>
            `).join('')}
          </div>

          <div class="search-input-wrapper">
            <span class="search-icon">🔍</span>
            <input type="text" id="umkmSearchInput" class="search-input" placeholder="Cari produk Sukagalih..." value="${this.searchUmkmQuery}">
          </div>
        </div>

        <!-- Products Grid Container -->
        <div class="umkm-grid" id="umkmProductsContainer">
          ${this.getFilteredUmkm().map(u => this.renderUmkmCardHtml(u)).join('')}
        </div>
      </div>
    `;
  },

  getFilteredUmkm() {
    return SukagalihData.umkm.filter(item => {
      const matchCategory = this.selectedUmkmCategory === 'Semua' || item.category === this.selectedUmkmCategory;
      const query = this.searchUmkmQuery.toLowerCase();
      const matchSearch = item.name.toLowerCase().includes(query) ||
                          item.desc.toLowerCase().includes(query) ||
                          item.umkmName.toLowerCase().includes(query);
      return matchCategory && matchSearch;
    });
  },

  initUmkmEvents() {
    const categoryPills = document.querySelectorAll('#umkmCategoryPills .category-pill');
    categoryPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        this.selectedUmkmCategory = e.currentTarget.getAttribute('data-category');
        categoryPills.forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.refreshUmkmGrid();
      });
    });

    const searchInput = document.getElementById('umkmSearchInput');
    searchInput?.addEventListener('input', (e) => {
      this.searchUmkmQuery = e.target.value;
      this.refreshUmkmGrid();
    });
  },

  refreshUmkmGrid() {
    const container = document.getElementById('umkmProductsContainer');
    if (!container) return;
    const filtered = this.getFilteredUmkm();
    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🌾</div>
          <h3 style="color: var(--secondary-deep);">Produk Tidak Ditemukan</h3>
          <p>Coba gunakan kata kunci pencarian lain atau pilih kategori Semua.</p>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(u => this.renderUmkmCardHtml(u)).join('');
    }
  },

  // UMKM Detail View
  renderUmkmDetail(id) {
    const product = SukagalihData.umkm.find(u => u.id === id);
    if (!product) return this.renderNotFound();

    const waText = encodeURIComponent(`Halo, saya tertarik memesan produk *${product.name}* dari UMKM Desa Sukagalih seharga ${product.price}. Mohon info ketersediaan dan pemesanan. Terima kasih!`);
    const waUrl = `https://wa.me/${product.whatsapp}?text=${waText}`;

    return `
      <div class="container section">
        <a href="#/umkm" style="display: inline-flex; align-items: center; gap: 0.4rem; color: var(--primary-main); font-weight: 700; margin-bottom: 1.5rem;">
          ← Kembali ke Katalog UMKM
        </a>

        <div class="card" style="padding: 2.5rem;">
          <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 3rem;">
            <div style="border-radius: var(--radius-lg); overflow: hidden; height: 380px;">
              <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>

            <div style="display: flex; flex-direction: column;">
              <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem;">
                <span class="product-badge" style="position: static;">${product.badge}</span>
                <span class="product-category-tag" style="position: static;">${product.category}</span>
              </div>

              <h1 style="font-size: 2rem; color: var(--secondary-deep); margin-bottom: 0.5rem;">${product.name}</h1>
              <div style="font-size: 0.9rem; font-weight: 600; color: var(--primary-main); margin-bottom: 1.25rem;">
                Diproduksi oleh: <strong>${product.umkmName}</strong> (📍 ${product.location})
              </div>

              <div style="font-family: var(--font-heading); font-size: 1.85rem; font-weight: 800; color: var(--primary-main); margin-bottom: 1.5rem;">
                ${product.price}
              </div>

              <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 2rem; font-size: 0.95rem;">
                ${product.desc}
              </p>

              <div style="margin-top: auto; display: flex; gap: 1rem; flex-wrap: wrap;">
                <a href="${waUrl}" target="_blank" class="btn btn-primary btn-lg">
                  💬 Hubungi Penjual via WhatsApp
                </a>
                <a href="#/kontak" class="btn btn-outline btn-lg">
                  Bantuan Layanan Desa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // VIEW: WISATA DESA (/wisata)
  // =========================================================================
  renderTourismPage() {
    const data = SukagalihData;

    return `
      <div class="container section">
        <div class="section-header">
          <div class="section-badge">Eksplorasi Alam</div>
          <h1 class="section-title">Jelajahi Wisata Sukagalih</h1>
          <p class="section-subtitle">Rasakan kesegaran mata air alami, sawah terasering, dan panorama perbukitan di bawah langit Galunggung.</p>
        </div>

        <div class="tourism-grid">
          ${data.tourism.map(t => `
            <div class="tourism-card">
              <div class="tourism-image">
                <img src="${t.image}" alt="${t.name}" loading="lazy">
              </div>
              <div class="tourism-content">
                <div class="tourism-cat">${t.category}</div>
                <h3 class="tourism-name">${t.name}</h3>
                <p class="tourism-desc">${t.desc}</p>
                
                <div class="tourism-facilities">
                  ${t.facilities.map(f => `<span class="facility-tag">${f}</span>`).join('')}
                </div>

                <div class="tourism-meta">
                  <span>⏱️ ${t.hours}</span>
                  <span style="color: var(--primary-main); font-weight: 700;">${t.ticket}</span>
                </div>

                <div style="margin-top: 1rem;">
                  <a href="#/wisata/${t.id}" class="btn btn-outline btn-sm">Lihat Detail Destinasi →</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  renderTourismDetail(id) {
    const tour = SukagalihData.tourism.find(t => t.id === id);
    if (!tour) return this.renderNotFound();

    return `
      <div class="container section">
        <a href="#/wisata" style="display: inline-flex; align-items: center; gap: 0.4rem; color: var(--primary-main); font-weight: 700; margin-bottom: 1.5rem;">
          ← Kembali ke Destinasi Wisata
        </a>

        <div class="card" style="padding: 2.5rem;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
            <div style="border-radius: var(--radius-lg); overflow: hidden; height: 360px;">
              <img src="${tour.image}" alt="${tour.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>

            <div>
              <div class="section-badge">${tour.category}</div>
              <h1 style="font-size: 2rem; color: var(--secondary-deep); margin-bottom: 0.5rem;">${tour.name}</h1>
              <div style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.25rem;">📍 ${tour.location}</div>
              
              <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
                ${tour.desc}
              </p>

              <div style="background: var(--bg-offwhite); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
                <h4 style="color: var(--secondary-deep); margin-bottom: 0.5rem; font-size: 0.95rem;">Fasilitas Pengunjung:</h4>
                <div class="tourism-facilities">
                  ${tour.facilities.map(f => `<span class="facility-tag">${f}</span>`).join('')}
                </div>
              </div>

              <a href="https://maps.google.com/?q=${encodeURIComponent(tour.mapsQuery)}" target="_blank" class="btn btn-primary">
                🗺️ Buka Rute di Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // VIEW: BERITA & ARTIKEL (/berita)
  // =========================================================================
  renderNewsPage() {
    const data = SukagalihData;

    return `
      <div class="container section">
        <div class="section-header">
          <div class="section-badge">Kabar & Informasi Publik</div>
          <h1 class="section-title">Berita Desa Sukagalih</h1>
          <p class="section-subtitle">Dapatkan informasi terkini mengenai kegiatan masyarakat, pembangunan desa, dan kolaborasi KKN BTH.</p>
        </div>

        <div class="news-cards-grid" style="grid-template-columns: repeat(3, 1fr);">
          ${data.news.map(n => `
            <div class="news-card">
              <div class="news-image">
                <img src="${n.image}" alt="${n.title}" loading="lazy">
                <div class="news-category-badge">${n.category}</div>
              </div>
              <div class="news-body">
                <div class="news-date">📅 ${n.date} • ✍️ ${n.author}</div>
                <h4 class="news-title">${n.title}</h4>
                <p class="news-excerpt">${n.excerpt}</p>
                <a href="#/berita/${n.id}" style="color: var(--primary-main); font-weight: 700; font-size: 0.85rem; margin-top: auto;">
                  Baca Selengkapnya →
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  renderNewsDetail(id) {
    const n = SukagalihData.news.find(item => item.id === id);
    if (!n) return this.renderNotFound();

    return `
      <div class="container section">
        <a href="#/berita" style="display: inline-flex; align-items: center; gap: 0.4rem; color: var(--primary-main); font-weight: 700; margin-bottom: 1.5rem;">
          ← Kembali ke Berita
        </a>

        <article class="card" style="padding: 2.5rem; max-width: 860px; margin: 0 auto;">
          <div class="section-badge">${n.category}</div>
          <h1 style="font-size: 2.25rem; color: var(--secondary-deep); margin: 0.5rem 0 1rem 0; line-height: 1.25;">${n.title}</h1>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.75rem;">
            Dipublikasikan pada: <strong>${n.date}</strong> | Redaksi: <strong>${n.author}</strong>
          </div>

          <div style="border-radius: var(--radius-lg); overflow: hidden; height: 380px; margin-bottom: 2rem;">
            <img src="${n.image}" alt="${n.title}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>

          <div style="font-size: 1.05rem; line-height: 1.8; color: var(--text-main); white-space: pre-line;">
            ${n.content}
          </div>
        </article>
      </div>
    `;
  },

  // =========================================================================
  // VIEW: GALERI DESA (/galeri)
  // =========================================================================
  renderGalleryPage() {
    const categories = ['Semua', 'Kegiatan Desa', 'Masyarakat', 'UMKM', 'Lingkungan', 'Wisata', 'KKN'];

    return `
      <div class="container section">
        <div class="section-header">
          <div class="section-badge">Dokumentasi Visual</div>
          <h1 class="section-title">Momen dari Sukagalih</h1>
          <p class="section-subtitle">Potret kehangatan masyarakat, bentang alam hijau, dan dinamika kegiatan di Desa Sukagalih.</p>
        </div>

        <!-- Filter Bar -->
        <div class="filter-bar" style="justify-content: center;">
          <div class="category-pills" id="galleryCategoryPills">
            ${categories.map(cat => `
              <button class="category-pill ${this.selectedGalleryCategory === cat ? 'active' : ''}" data-category="${cat}">
                ${cat}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Masonry Gallery -->
        <div class="gallery-grid" id="galleryContainer">
          ${this.getFilteredGallery().map(g => `
            <div class="gallery-item" data-image="${g.image}" data-title="${g.title}" data-desc="${g.dusun} (${g.category})">
              <img src="${g.image}" alt="${g.title}" loading="lazy">
              <div class="gallery-overlay">
                <div class="gallery-tag">${g.category} • ${g.dusun}</div>
                <div class="gallery-title">${g.title}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  getFilteredGallery() {
    if (this.selectedGalleryCategory === 'Semua') {
      return SukagalihData.gallery;
    }
    return SukagalihData.gallery.filter(g => g.category === this.selectedGalleryCategory);
  },

  initGalleryEvents() {
    const pills = document.querySelectorAll('#galleryCategoryPills .category-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        this.selectedGalleryCategory = e.currentTarget.getAttribute('data-category');
        pills.forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.refreshGalleryGrid();
      });
    });

    this.attachLightboxHandlers();
  },

  refreshGalleryGrid() {
    const container = document.getElementById('galleryContainer');
    if (!container) return;
    container.innerHTML = this.getFilteredGallery().map(g => `
      <div class="gallery-item" data-image="${g.image}" data-title="${g.title}" data-desc="${g.dusun} (${g.category})">
        <img src="${g.image}" alt="${g.title}" loading="lazy">
        <div class="gallery-overlay">
          <div class="gallery-tag">${g.category} • ${g.dusun}</div>
          <div class="gallery-title">${g.title}</div>
        </div>
      </div>
    `).join('');
    this.attachLightboxHandlers();
  },

  attachLightboxHandlers() {
    const items = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const modalCaption = document.getElementById('lightboxCaption');

    items.forEach(item => {
      item.addEventListener('click', () => {
        const imgSrc = item.getAttribute('data-image');
        const title = item.getAttribute('data-title');
        const desc = item.getAttribute('data-desc');

        if (modalImg) modalImg.src = imgSrc;
        if (modalCaption) modalCaption.innerHTML = `<strong>${title}</strong><br><span style="font-size:0.85rem; color:#B9D4B6;">${desc}</span>`;
        modal?.classList.add('active');
      });
    });
  },

  // =========================================================================
  // VIEW: KKN JEJAK & 19 TIM MAHASISWA (/kkn)
  // =========================================================================
  renderKknPage() {
    const data = SukagalihData;
    const kkn = data.kknInfo;

    return `
      <div class="container section">
        <!-- Hero KKN Card -->
        <div class="kkn-hero-card">
          <div class="kkn-hero-grid">
            <div>
              <div class="kkn-badge">Portal KKN Mahasiswa 2026</div>
              <h1 class="kkn-univ-title">Jejak KKN di Sukagalih</h1>
              <p class="kkn-univ-sub">${kkn.description}</p>
              
              <div class="kkn-details-list">
                <div class="kkn-detail-tag">🏛️ ${kkn.university}</div>
                <div class="kkn-detail-tag">👥 ${kkn.groupName} (${kkn.totalMembers} Mahasiswa)</div>
                <div class="kkn-detail-tag">📍 ${kkn.location}</div>
                <div class="kkn-detail-tag">🎓 ${kkn.supervisor}</div>
              </div>
            </div>
            <div class="kkn-logo-emblem-card">
              <img src="assets/images/logo-kkn.svg" alt="Emblem KKN 09 Universitas BTH" class="kkn-emblem-img">
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #FFF; margin-bottom: 0.25rem;">KELOMPOK 09 DESA SUKAGALIH</h3>
              <p style="font-size: 0.82rem; color: #B9D4B6;">KKN 2026 UNIVERSITAS BTH</p>
            </div>
          </div>
        </div>

        <!-- 4 Program Kerja KKN -->
        <div class="section-header">
          <div class="section-badge">Program Kerja Terpadu</div>
          <h2 class="section-title">Inisiatif Pemberdayaan Berkelanjutan</h2>
          <p class="section-subtitle">Fokus program pengabdian masyarakat untuk kemandirian digital dan kesehatan desa.</p>
        </div>

        <div class="kkn-programs-grid">
          ${kkn.programs.map(p => `
            <div class="program-card">
              <div class="program-icon">${p.icon}</div>
              <h3 class="program-title">${p.title}</h3>
              <p class="program-desc">${p.desc}</p>
            </div>
          `).join('')}
        </div>

        <!-- 19 Anggota Tim Mahasiswa KKN Kelompok 09 -->
        <div class="section-header">
          <div class="section-badge">Struktur Tim (${kkn.totalMembers} Mahasiswa)</div>
          <h2 class="section-title">Anggota Tim KKN Kelompok 09</h2>
          <p class="section-subtitle">Mahasiswa Universitas Bakti Tunas Husada (BTH) Tasikmalaya yang mengabdi untuk masyarakat Desa Sukagalih.</p>
        </div>

        <div class="team-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1.25rem;">
          ${kkn.members.map(m => `
            <div class="team-card">
              <div style="padding: 1.5rem 1rem 0.5rem 1rem; display: flex; flex-direction: column; align-items: center; text-align: center;">
                <div style="
                  width: 64px;
                  height: 64px;
                  border-radius: 50%;
                  background: linear-gradient(135deg, ${m.badgeColor}, #244A2A);
                  color: #FFF;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 1.8rem;
                  margin-bottom: 0.85rem;
                  box-shadow: 0 4px 12px rgba(36, 74, 42, 0.2);
                ">
                  ${m.avatar}
                </div>
                <span style="
                  display: inline-block;
                  font-size: 0.72rem;
                  font-weight: 700;
                  padding: 0.2rem 0.65rem;
                  border-radius: var(--radius-full);
                  background: var(--bg-light-moss);
                  color: var(--secondary-deep);
                  margin-bottom: 0.5rem;
                  text-transform: uppercase;
                  letter-spacing: 0.04em;
                ">
                  ${m.division}
                </span>
                <h4 class="team-name" style="font-size: 0.95rem; margin-bottom: 0.25rem;">${m.name}</h4>
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--primary-main);">${m.role}</div>
                <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.35rem;">Universitas BTH Tasikmalaya</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // =========================================================================
  // VIEW: KONTAK & ASPIRASI (/kontak)
  // =========================================================================
  renderContactPage() {
    const data = SukagalihData;
    const v = data.villageInfo;

    return `
      <div class="container section">
        <div class="section-header">
          <div class="section-badge">Layanan Warga</div>
          <h1 class="section-title">Mari Terhubung bersama Kami</h1>
          <p class="section-subtitle">Pemerintah Desa Sukagalih siap melayani kebutuhan informasi, surat pengantar, dan aspirasi masyarakat.</p>
        </div>

        <div class="contact-grid">
          <!-- Info Kantor Desa -->
          <div class="contact-info-card">
            <h3 style="font-size: 1.35rem; color: var(--secondary-deep); margin-bottom: 0.5rem;">Kantor Desa Sukagalih</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
              Kecamatan Sukaratu, Kabupaten Tasikmalaya, Jawa Barat
            </p>

            <div class="contact-list">
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div>
                  <div class="contact-text-label">Alamat Kantor</div>
                  <div class="contact-text-value">${v.address}</div>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div>
                  <div class="contact-text-label">Hotline / Telepon Resmi</div>
                  <div class="contact-text-value">${v.hotline}</div>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">✉️</div>
                <div>
                  <div class="contact-text-label">Email Resmi</div>
                  <div class="contact-text-value">${v.email}</div>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">⏱️</div>
                <div>
                  <div class="contact-text-label">Jam Pelayanan</div>
                  <div class="contact-text-value">${v.officeHours}</div>
                </div>
              </div>
            </div>

            <div style="margin-top: 2rem;">
              <a href="https://wa.me/${v.hotline.replace(/\D/g, '')}?text=${encodeURIComponent('Halo Pemerintah Desa Sukagalih, saya ingin berkonsultasi mengenai pelayanan desa.')}" target="_blank" class="btn btn-primary btn-block">
                💬 Hubungi via WhatsApp Desa
              </a>
            </div>
          </div>

          <!-- Form Aspirasi & Permohonan Layanan -->
          <div class="form-card">
            <h3 style="font-size: 1.35rem; color: var(--secondary-deep); margin-bottom: 0.5rem;">Kirim Aspirasi & Pertanyaan</h3>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.5rem;">
              Formulir digital untuk menyampaikan permohonan informasi, aspirasi pembangunan, atau kritik & saran.
            </p>

            <form id="contactForm" onsubmit="SukagalihApp.handleContactSubmit(event)">
              <div class="form-group">
                <label class="form-label">Nama Lengkap *</label>
                <input type="text" class="form-control" required placeholder="Masukkan nama Anda">
              </div>
              <div class="form-group">
                <label class="form-label">Nomor WhatsApp / HP *</label>
                <input type="tel" class="form-control" required placeholder="08xxxxxxxxxx">
              </div>
              <div class="form-group">
                <label class="form-label">Asal Dusun / Wilayah *</label>
                <select class="form-control" required>
                  <option value="">Pilih Dusun...</option>
                  <option value="Dusun Cikatubang">Dusun Cikatubang</option>
                  <option value="Dusun Sindanggalih">Dusun Sindanggalih</option>
                  <option value="Dusun Sindangkerta">Dusun Sindangkerta</option>
                  <option value="Dusun Parakankawung">Dusun Parakankawung</option>
                  <option value="Luar Desa Sukagalih">Luar Desa Sukagalih</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Pesan / Aspirasi *</label>
                <textarea class="form-control" required placeholder="Tuliskan aspirasi atau keperluan Anda secara jelas..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-block">
                🚀 Kirim Pesan Sekarang
              </button>
            </form>
          </div>
        </div>

        <!-- Peta Interaktif Kontak -->
        <div style="margin-top: 3.5rem;">
          <h3 style="font-size: 1.35rem; color: var(--secondary-deep); margin-bottom: 1rem;">Lokasi Balai Desa Sukagalih</h3>
          <div id="contactMap" class="map-container"></div>
        </div>
      </div>
    `;
  },

  handleContactSubmit(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan dan aspirasi Anda telah berhasil dikirimkan ke Tim Layanan Desa Sukagalih.');
    e.target.reset();
  },

  // =========================================================================
  // VIEW: ADMIN CMS DASHBOARD MOCK (/admin)
  // =========================================================================
  renderAdminPage() {
    const data = SukagalihData;

    return `
      <div class="container section">
        <div class="card" style="padding: 2rem; margin-bottom: 2rem; background: var(--secondary-deep); color: #FFF;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
            <div>
              <div style="font-size: 0.8rem; text-transform: uppercase; color: var(--primary-light); font-weight: 700;">Portal Administrasi Konten</div>
              <h1 style="font-size: 1.85rem; color: #FFF;">Dashboard Pengelolaan Desa Sukagalih</h1>
              <p style="font-size: 0.85rem; color: #B9D4B6;">Sistem CMS Terpadu untuk Publikasi Berita, Katalog UMKM & Data Kependudukan</p>
            </div>
            <div>
              <a href="#/" class="btn btn-secondary btn-sm">← Lihat Website Publik</a>
            </div>
          </div>
        </div>

        <!-- Admin Metrics -->
        <div class="stats-grid" style="margin-bottom: 2.5rem;">
          <div class="stat-card">
            <div class="stat-icon">🛍️</div>
            <div class="stat-info">
              <span class="stat-value">${data.umkm.length}</span>
              <span class="stat-label">Total Produk UMKM</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📰</div>
            <div class="stat-info">
              <span class="stat-value">${data.news.length}</span>
              <span class="stat-label">Artikel & Berita Desa</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">🖼️</div>
            <div class="stat-info">
              <span class="stat-value">${data.gallery.length}</span>
              <span class="stat-label">Foto Dokumentasi Galeri</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📅</div>
            <div class="stat-info">
              <span class="stat-value">${data.events.length}</span>
              <span class="stat-label">Agenda Kegiatan Desa</span>
            </div>
          </div>
        </div>

        <!-- Mock Admin CMS Table -->
        <div class="card" style="padding: 2rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.25rem; color: var(--secondary-deep);">Daftar Produk UMKM Desa (Live Edit Mock)</h3>
            <button class="btn btn-primary btn-sm" onclick="alert('Fitur Tambah Produk Mock: Buka formulir input produk baru.')">+ Tambah Produk UMKM</button>
          </div>

          <div style="overflow-x: auto;">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Nama Produk</th>
                  <th>Kategori</th>
                  <th>Produsen UMKM</th>
                  <th>Harga</th>
                  <th>Lokasi</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                ${data.umkm.map(u => `
                  <tr>
                    <td><strong>${u.name}</strong></td>
                    <td><span class="facility-tag">${u.category}</span></td>
                    <td>${u.umkmName}</td>
                    <td style="color: var(--primary-main); font-weight: 700;">${u.price}</td>
                    <td>${u.location}</td>
                    <td><span style="color: #2E7D32; font-weight: 700; font-size: 0.8rem;">● Aktif</span></td>
                    <td>
                      <button class="btn btn-outline btn-sm" style="padding: 0.25rem 0.65rem; font-size: 0.75rem;" onclick="alert('Edit Mock: ${u.name}')">Edit</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // VIEW: 404 NOT FOUND
  // =========================================================================
  renderNotFound() {
    return `
      <div class="container section" style="text-align: center; padding: 6rem 1rem;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">🌿</div>
        <h1 class="section-title">Halaman Tidak Ditemukan</h1>
        <p class="section-subtitle" style="margin-bottom: 2rem;">Halaman yang Anda cari mungkin sedang dalam pembaruan atau alamat URL tidak sesuai.</p>
        <a href="#/" class="btn btn-primary">Kembali ke Beranda Desa Sukagalih</a>
      </div>
    `;
  }
};

// Initialize App immediately if DOM is already ready, or on DOMContentLoaded
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  SukagalihApp.init();
} else {
  document.addEventListener('DOMContentLoaded', () => {
    SukagalihApp.init();
  });
}

if (typeof window !== 'undefined') {
  window.SukagalihApp = SukagalihApp;
}
