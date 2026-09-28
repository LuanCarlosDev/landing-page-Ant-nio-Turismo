/**
 * Módulo de Filtragem e Renderização dos Destinos
 */

function renderDestinations(filter = 'todos') {
  const gridContainer = document.getElementById('destinationsGrid');
  if (!gridContainer) return;

  const filtered = filter === 'todos' 
    ? DESTINATIONS_DATA 
    : DESTINATIONS_DATA.filter(d => d.region === filter);

  gridContainer.innerHTML = filtered.map(dest => `
    <article class="destination-card" data-region="${dest.region}">
      <div class="destination-card__media">
        <img src="${dest.image}" alt="${dest.title}" loading="lazy">
        <div class="destination-card__overlay"></div>
      </div>
      <div class="destination-card__content">
        <h3 class="destination-card__title">${dest.title}</h3>
        <div class="destination-card__location">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>${dest.categoryText}</span>
        </div>
        <p class="destination-card__desc">${dest.description}</p>
        <div class="destination-card__meta">
          <span>Melhor época: <strong>${dest.bestSeason}</strong></span>
        </div>
        <button class="btn btn-outline destination-card__cta" onclick="openConciergeModal('${dest.title}')">
          <span>Solicitar Roteiro</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </article>
  `).join('');
}

function initFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      const filterValue = tab.getAttribute('data-filter');
      renderDestinations(filterValue);
    });
  });

  // Render inicial
  renderDestinations('todos');
}
