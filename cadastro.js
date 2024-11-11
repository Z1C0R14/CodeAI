const firebaseConfig = {
  apiKey: "AIzaSyDqWNJi_U14J0gg_nEeu4GMKoEhH9RssXc",
  authDomain: "codeai-6a4ff.firebaseapp.com",
  projectId: "codeai-6a4ff",
  storageBucket: "codeai-6a4ff.appspot.com",
  messagingSenderId: "288742308321",
  appId: "1:288742308321:web:4b6069d16cda2bcad67aa0",
  measurementId: "G-JZE1W3K05K"
};


// Inicializando Firebase
firebase.initializeApp(firebaseConfig);

// Função para registrar o usuário
var signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function(e) {
e.preventDefault();

var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(userCredential) {
    // Cadastro bem-sucedido
    var user = userCredential.user;
    document.getElementById('message').innerHTML = 'Usuário cadastrado com sucesso!';
  })
  .catch(function(error) {
    // Erro ao cadastrar
    var errorMessage = error.message;
    document.getElementById('message').innerHTML = `Erro: ${errorMessage}`;
  });
});

// Login com Google
var googleLoginButton = document.getElementById('google-login-btn');
googleLoginButton.addEventListener('click', function() {
var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    // Login bem-sucedido
    var user = result.user;
    document.getElementById('message').innerHTML = 'Login com Google bem-sucedido!';
  })
  .catch(function(error) {
    // Erro ao fazer login com Google
    var errorMessage = error.message;
    document.getElementById('message').innerHTML = `Erro: ${errorMessage}`;
  });
});