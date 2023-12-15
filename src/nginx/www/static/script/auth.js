const token = localStorage.getItem('token');

// Отправьте запрос к серверу через Nginx с токеном в заголовке Authorization
fetch('/api', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
  .then(response => {
    // Обработайте ответ от сервера
  })
  .catch(error => {
    // Обработайте ошибку
  });