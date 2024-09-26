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

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Função de login com Google
document.getElementById('googleLoginBtn').addEventListener('click', function() {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            console.log('Usuário logado:', user);
            alert(`Bem-vindo ${user.displayName}!`);
            // Redirecionar para dashboard
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            console.error('Erro ao fazer login:', error);
        });
});
