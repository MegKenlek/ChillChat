document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('login-username').value.trim();
    if (username !== '') {
        // Szimulált beléptetés, nem valós beléptetési logika
        login(username);
    } else {
        alert('Kérlek add meg a felhasználónevet!');
    }
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('register-username').value.trim();
    if (username !== '') {
        // Szimulált regisztráció, nem valós regisztrációs logika
        register(username);
    } else {
        alert('Kérlek add meg a felhasználónevet!');
    }
});

function login(username) {
    // Itt lehetne valós beléptetési logika, pl. AJAX kérés vagy adatbázis kezelés
    console.log('Belépve:', username);
    showChatPanel(username);
}

function register(username) {
    // Itt lehetne valós regisztrációs logika, pl. AJAX kérés vagy adatbázis kezelés
    console.log('Regisztrálva:', username);
    showChatPanel(username);
}

function showChatPanel(username) {
    // Chat panel megjelenítése és beállítása
    document.querySelector('.login-panel').style.display = 'none';
    document.querySelector('.register-panel').style.display = 'none';

    let chatPanel = document.querySelector('.chat-panel');
    chatPanel.style.display = 'block';

    // Üdvözlő üzenet megjelenítése
    let chatMessages = document.getElementById('chat-messages');
    let welcomeMessage = document.createElement('div');
    welcomeMessage.classList.add('message');
    welcomeMessage.textContent = `Üdvözlünk a ChillChat-en, ${username}!`;
    chatMessages.appendChild(welcomeMessage);
}

function sendMessage() {
    let messageInput = document.getElementById('message-input');
    let message = messageInput.value.trim();
    if (message !== '') {
        let messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.textContent = `${username}: ${message}`;
        document.getElementById('chat-messages').appendChild(messageDiv);
        messageInput.value = '';
    }
}

document.getElementById('logout-btn').addEventListener('click', function() {
    // Kiléptetési folyamat
    document.querySelector('.chat-panel').style.display = 'none';
    document.querySelector('.login-panel').style.display = 'block';
});
