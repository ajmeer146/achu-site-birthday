// Initialize functions at top level for inline onclick handlers
function openNewTaskForm() {
  const form = document.getElementById('message-form');
  if (form) {
    form.style.display = 'block';
  }
}

function closeNewTaskForm() {
  const form = document.getElementById('message-form');
  if (form) {
    form.style.display = 'none';
  }
}

// DOMContentLoaded to attach event listeners after the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Form submit handler
  const messageForm = document.querySelector('.message-form');
  if (messageForm) {
    messageForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nameInput = document.getElementById('name');
      const messageInput = document.getElementById('message');
      
      if (nameInput && messageInput) {
        const name = nameInput.value.trim();
        const message = messageInput.value.trim();
        
        if (name && message) {
          // Show success feedback
          alert(`Thank you, ${name}! Your birthday message has been submitted.`);
          nameInput.value = '';
          messageInput.value = '';
        } else {
          // Show error feedback
          alert('Please fill in both name and message fields.');
        }
      }
    });
  }
  
  // Mobile menu toggle (if needed for smaller screens)
  const header = document.querySelector('header');
  if (header) {
    // Add reduced motion support
    const style = document.createElement('style');
    style.textContent = '@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }';
    document.head.appendChild(style);
  }
});