/**
 * Modal Interativo Concierge & Integração WhatsApp/Instagram
 * Antônio Carlos - Viagens Nacionais
 */

// Configurações de Contato do Agente Antônio Carlos
// (Pode ser facilmente configurado com o número real posteriormente)
const AGENT_CONFIG = {
  name: 'Antônio Carlos',
  whatsappNumber: '5511999999999', // Número padrão com DDI + DDD
  instagramUser: 'antoniocarlos.viagens',
  instagramUrl: 'https://instagram.com/'
};

function openConciergeModal(preselectedDestination = '') {
  const modal = document.getElementById('conciergeModal');
  if (!modal) return;

  const destinationSelect = document.getElementById('modalDestination');
  if (destinationSelect && preselectedDestination) {
    for (let i = 0; i < destinationSelect.options.length; i++) {
      if (destinationSelect.options[i].text.includes(preselectedDestination) || destinationSelect.options[i].value.includes(preselectedDestination)) {
        destinationSelect.selectedIndex = i;
        break;
      }
    }
  }

  modal.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

function closeConciergeModal() {
  const modal = document.getElementById('conciergeModal');
  if (!modal) return;

  modal.classList.remove('is-active');
  document.body.style.overflow = '';
}

function handleConciergeSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('modalName')?.value.trim() || 'Cliente';
  const startDate = document.getElementById('modalStartDate')?.value;
  const endDate = document.getElementById('modalEndDate')?.value;
  const textPeriod = document.getElementById('modalPeriodText')?.value.trim();
  
  let formattedPeriod = '';
  if (startDate && endDate) {
    const [sy, sm, sd] = startDate.split('-');
    const [ey, em, ed] = endDate.split('-');
    formattedPeriod = `${sd}/${sm}/${sy} a ${ed}/${em}/${ey}`;
    if (textPeriod) {
      formattedPeriod += ` (${textPeriod})`;
    }
  } else if (startDate) {
    const [sy, sm, sd] = startDate.split('-');
    formattedPeriod = `A partir de ${sd}/${sm}/${sy}`;
    if (textPeriod) {
      formattedPeriod += ` (${textPeriod})`;
    }
  } else if (textPeriod) {
    formattedPeriod = textPeriod;
  } else {
    formattedPeriod = 'A definir com Antônio Carlos';
  }

  const notes = document.getElementById('modalNotes')?.value.trim();

  // Mensagem elegante e profissional sem emojis
  let message = `Ola, Antonio Carlos! Gostaria de solicitar um roteiro personalizado pelo Brasil.\n\n`;
  message += `*Dados da Solicitacao:*\n`;
  message += `- Nome: ${name}\n`;
  message += `- Destino de interesse: ${destination}\n`;
  message += `- Estilo de viagem: ${travelStyle}\n`;
  message += `- Passageiros: ${travelers}\n`;
  message += `- Periodo previsto / Datas: ${formattedPeriod}\n`;

  if (notes) {
    message += `- Preferencias / Observacoes: ${notes}\n`;
  }

  message += `\nPoderia me apresentar opcoes e disponibilidade de curadoria?`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${AGENT_CONFIG.whatsappNumber}&text=${encodedMessage}`;

  // Abre o WhatsApp diretamente
  window.open(whatsappUrl, '_blank');
  closeConciergeModal();
}

function initConciergeModal() {
  const modal = document.getElementById('conciergeModal');
  if (!modal) return;

  // Fechar ao clicar fora
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeConciergeModal();
    }
  });

  // Fechar com tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeConciergeModal();
    }
  });

  const form = document.getElementById('conciergeForm');
  if (form) {
    form.addEventListener('submit', handleConciergeSubmit);
  }
}
