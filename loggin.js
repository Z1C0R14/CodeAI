// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDqWNJi_U14J0gg_nEeu4GMKoEhH9RssXc",
    authDomain: "codeai-6a4ff.firebaseapp.com",
    projectId: "codeai-6a4ff",
    storageBucket: "codeai-6a4ff.appspot.com",
    messagingSenderId: "288742308321",
    appId: "1:288742308321:web:4b6069d16cda2bcad67aa0",
    measurementId: "G-JZE1W3K05K"
  };

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login com email e senha
document.getElementById('loginBtn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login bem-sucedido
            window.location.href = 'index.html';  // Redireciona para a página inicial
        })
        .catch((error) => {
            // Mostra mensagem de erro em caso de falha no login
            errorMessage.textContent = "Credenciais incorretas. Tente novamente.";
            console.error("Erro de autenticação:", error);
        });
});

// Login com Google
document.getElementById('googleLoginBtn').addEventListener('click', function() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then((result) => {
            // Login bem-sucedido
            window.location.href = 'index.html';  // Redireciona para a página inicial
        })
        .catch((error) => {
            // Exibe uma mensagem de erro em caso de falha no login com Google
            console.error("Erro ao fazer login com Google:", error);
            document.getElementById('error-message').textContent = "Erro ao fazer login com Google. Tente novamente.";
        });
});