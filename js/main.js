/**
 * Inicialização e Interatividade Geral
 * Antônio Carlos - Consultoria de Viagens Nacionais
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll da Barra de Navegação
  const header = document.getElementById('siteHeader');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add('is-scrolled');
    } else {
      header?.classList.remove('is-scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Menu Mobile
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('is-open');
    });

    // Fechar ao clicar em qualquer link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
      });
    });
  }

  // 3. Inicialização dos Módulos
  if (typeof initFilters === 'function') {
    initFilters();
  }

  if (typeof initConciergeModal === 'function') {
    initConciergeModal();
  }

  // 4. Floating Widget Interativo
  const floatingConcierge = document.getElementById('floatingConcierge');
  const floatingTrigger = document.getElementById('floatingTrigger');
  if (floatingTrigger && floatingConcierge) {
    floatingTrigger.addEventListener('click', () => {
      floatingConcierge.classList.toggle('is-open');
    });
  }
});
