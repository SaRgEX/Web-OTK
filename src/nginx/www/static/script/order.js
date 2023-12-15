setAuthorizationHeader()
  .then(headers => {
    // Выполнение запроса на сервер с установленным заголовком
    return fetch('/api/order', { headers });
  })
  .then(response => response.json())
  .then(data => {
    // Обработка ответа от сервера
    window.location.href = 'http://localhost:8080/api/order';
  })
  .catch(error => {
    // Обработка ошибок
  });