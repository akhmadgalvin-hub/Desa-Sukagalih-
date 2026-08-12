/**
 * Modul Visualisasi Data & Statistik Desa Sukagalih menggunakan Chart.js
 * Color Palette disesuaikan dengan Warna Resmi Logo Desa Sukagalih & KKN BTH:
 * - Deep Navy (#15284F)
 * - Forest Green (#15803D)
 * - Golden Rice (#EAB308)
 * - Sky Blue (#0284C7)
 * - Fresh Green (#22C55E)
 */

const SukagalihCharts = {
  instances: {},

  initAll() {
    if (typeof Chart === 'undefined') return;

    this.renderDusunChart();
    this.renderGenderChart();
    this.renderEducationChart();
    this.renderAgeChart();
    this.renderOccupationChart();
    this.renderLandUseChart();
  },

  destroyAll() {
    Object.keys(this.instances).forEach(key => {
      if (this.instances[key]) {
        this.instances[key].destroy();
        delete this.instances[key];
      }
    });
  },

  // 1. Distribusi Penduduk per Dusun
  renderDusunChart() {
    const ctx = document.getElementById('chartDusun');
    if (!ctx) return;

    const data = SukagalihData.geography.dusun;
    this.instances.dusun = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: data.map(d => d.name),
        datasets: [{
          data: data.map(d => d.population),
          backgroundColor: ['#15284F', '#15803D', '#EAB308', '#0284C7'],
          borderColor: '#FFFFFF',
          borderWidth: 2,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 14, font: { family: 'Plus Jakarta Sans', size: 12 } } },
          tooltip: {
            callbacks: {
              label: (context) => ` ${context.label}: ${context.parsed.toLocaleString('id-ID')} Jiwa`
            }
          }
        },
        cutout: '65%'
      }
    });
  },

  // 2. Perbandingan Jenis Kelamin
  renderGenderChart() {
    const ctx = document.getElementById('chartGender');
    if (!ctx) return;

    const demo = SukagalihData.demographics;
    this.instances.gender = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Laki-laki', 'Perempuan'],
        datasets: [{
          data: [demo.malePopulation, demo.femalePopulation],
          backgroundColor: ['#15284F', '#15803D'],
          borderColor: '#FFFFFF',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 14, font: { family: 'Plus Jakarta Sans', size: 12 } } },
          tooltip: {
            callbacks: {
              label: (context) => ` ${context.label}: ${context.parsed.toLocaleString('id-ID')} Jiwa (${((context.parsed / demo.totalPopulation) * 100).toFixed(1)}%)`
            }
          }
        }
      }
    });
  },

  // 3. Tingkat Pendidikan Penduduk
  renderEducationChart() {
    const ctx = document.getElementById('chartEducation');
    if (!ctx) return;

    const eduData = SukagalihData.demographics.education;
    const colors = ['#15284F', '#15803D', '#EAB308', '#0284C7', '#22C55E', '#D97706', '#38BDF8'];

    this.instances.education = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: eduData.map(e => e.level),
        datasets: [{
          label: 'Jumlah Warga',
          data: eduData.map(e => e.count),
          backgroundColor: colors.slice(0, eduData.length),
          borderRadius: 8
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => ` ${context.parsed.x.toLocaleString('id-ID')} Orang`
            }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { family: 'Plus Jakarta Sans', size: 11 } } },
          y: { grid: { display: false }, ticks: { font: { family: 'Plus Jakarta Sans', size: 11 } } }
        }
      }
    });
  },

  // 4. Distribusi Kelompok Usia Penduduk
  renderAgeChart() {
    const ctx = document.getElementById('chartAge');
    if (!ctx) return;

    const ageData = SukagalihData.demographics.ageGroups;
    this.instances.age = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ageData.map(a => a.range),
        datasets: [
          {
            label: 'Laki-laki',
            data: ageData.map(a => a.male),
            backgroundColor: '#15284F',
            borderRadius: 6
          },
          {
            label: 'Perempuan',
            data: ageData.map(a => a.female),
            backgroundColor: '#15803D',
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { boxWidth: 12, font: { family: 'Plus Jakarta Sans', size: 11 } } }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { family: 'Plus Jakarta Sans', size: 10 }, maxRotation: 45 } },
          y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { family: 'Plus Jakarta Sans', size: 11 } } }
        }
      }
    });
  },

  // 5. Mata Pencaharian Penduduk
  renderOccupationChart() {
    const ctx = document.getElementById('chartOccupation');
    if (!ctx) return;

    const occData = SukagalihData.demographics.occupations.slice(0, 7);
    this.instances.occupation = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: occData.map(o => o.job),
        datasets: [{
          label: 'Jumlah Pekerja',
          data: occData.map(o => o.count),
          backgroundColor: '#15803D',
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => ` ${context.parsed.y} Orang`
            }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { family: 'Plus Jakarta Sans', size: 10 } } },
          y: { grid: { color: 'rgba(0,0,0,0.05)' } }
        }
      }
    });
  },

  // 6. Penggunaan Lahan Desa
  renderLandUseChart() {
    const ctx = document.getElementById('chartLandUse');
    if (!ctx) return;

    const landData = SukagalihData.geography.landUse;
    this.instances.landUse = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: landData.map(l => l.type),
        datasets: [{
          data: landData.map(l => l.areaHa),
          backgroundColor: ['#15803D', '#15284F', '#0284C7', '#EAB308'],
          borderColor: '#FFFFFF',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 12, font: { family: 'Plus Jakarta Sans', size: 11 } } },
          tooltip: {
            callbacks: {
              label: (context) => ` ${context.label}: ${context.parsed} Ha (${((context.parsed / 174) * 100).toFixed(1)}%)`
            }
          }
        },
        cutout: '60%'
      }
    });
  }
};

if (typeof window !== 'undefined') {
  window.SukagalihCharts = SukagalihCharts;
}
