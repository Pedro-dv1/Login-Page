document.getElementById('mostrarSenha').addEventListener('change', function() {
    var password = document.getElementById('password');
    password.type = this.checked ? 'text' : 'password';
  });

 

  function validar() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === '' || password.trim() === '') {
     
  } else if (!emailRegex.test(email)) {
      
  } else {
      window.location.href = '../html/pagina.html';
  }
  }