const login = document.getElementById('login');
const password = document.getElementById('password');
function showAuthorizationDialog() {
    document.getElementById("authorizationDialog").style.display = "flex";
}

function hideAuthorizationDialog() {
    login.value = '';
    password.value = '';
    document.getElementById("authorizationDialog").style.display = "none";
}

function performAuthorization() {
    if (!validate()) {
        return;
    }
    var data = {
        login: login.value,
        password: password.value
    };

    fetch('http://localhost:8080/auth/sign-in', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // тип содержимого
            'Origin': 'http://localhost:8080' // разрешенный источник
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.status == 500) {
                alert('Wrong login or password');
                return;
            } else {
                hideAuthorizationDialog();
                return response.json();
            }
        })
        .then(data => {
            const token = data.token
            if (token) {
                localStorage.setItem('token', token);
            }
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });
}

function cancelAuthorization() {
    hideAuthorizationDialog();
}

function validate() {
    if (login.value.trim() === '') {
        alert('Please enter a login');
        return false;
    }

    if (password.value.trim() === '') {
        alert('Please enter a password');
        return false;
    }

    return true;
}

function logout() {
    localStorage.removeItem('token');
}

function isAuthorized() {
    return localStorage.getItem('token') !== null;
}


function setToken() {
    const axios = require('axios');
    const token = localStorage.getItem('token');
    
    axios.get('https://localhost:8080/api/orders', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        // Обработка полученных данных
        console.log(response.data);
      })
      .catch(error => {
        // Обработка ошибок
      });
}
