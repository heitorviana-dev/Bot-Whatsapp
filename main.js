const { Client } = require('whatsapp-web.js');
const qrcode = require("qrcode-terminal");

// Classe que cria uma instância do cliente, sendo esse o starting point para a interação com a API Whatsapp Web.
// Basicamente ao criarmos essa instância estamos criando uma janela no navegador programada com js, como se estivessemos abrindo o whatsapp web no navegador.
const client = new Client({
    webVersionCache: { // Essa opção foi adicionada para evitar um erro no LocalCache
        remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
        type: 'remote'
    } 
}); 

// Quando o cliente ler o qrcode será emitido o sinal "ready" e o código abaixo será executado.
client.on('ready', () => {
    console.log('Client is ready!');
});

// Ao criarmos a instância o evento qr será emitido, o código abaixo será responsável por capturá-lo.
client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true}); // qrcode.generate(<conteúdo do qrcode>, <options>);
});

// Inicia o cliente e permite a interação com o whatsapp web permitindo enviar e receber mensagens, e outras operações disponíveis na api.
client.initialize();
