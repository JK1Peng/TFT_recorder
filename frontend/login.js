document.addEventListener('DOMContentLoaded', function() {

    var loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        var loginData = {
            username: username,
            password: password
        };

        fetch('http://127.0.0.1:5000/login', { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(loginData), 
        })
        .then(response => response.json()) 
        .then(data => {
            console.log('Success:', data);
            if(data.success) {
                window.location.href = '/frontend/index.html'; 
            } else {
                alert('Login failed: ' + data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Login failed, please try again later.');
        });
    });
});
