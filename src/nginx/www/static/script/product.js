fetch('http://localhost:8080/products')
  .then(response => response.json())
  .then(data => {
    // Создание HTML страницы
    const container = document.getElementById('data-container');
    data.forEach(item => {
      const element = document.createElement('div');
      element.innerHTML = `
        <h2>${item.name}</h2>
        <p>${item.description}</p>
      `;
      container.appendChild(element);
    });
  })
  .catch(error => console.log(error));