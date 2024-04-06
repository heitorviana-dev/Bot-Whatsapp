const { Client } = require('whatsapp-web.js');
const qrcode = require("qrcode-terminal");

//Classe que cria uma instância do cliente, sendo esse o starting point para a interação com a API Whatsapp Web
const client = new Client({
    webVersionCache: {
        remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
        type: 'remote'
    } 
}); 

// When the client is ready, run this code (only once) O cliente só estará preparado após ler o qrcode
client.on('ready', () => {
    console.log('Client is ready!');
});

// When the client received QR-Code
client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true}); // qrcode.generate(<conteúdo do qrcode>, <options>);
});

// Start your client
client.initialize();
