// Quando uma nova mensagem é enviada, é emitido o evento message_create, o qual retorna a mensagem(message no parâmetro).
export default async(client) => {
    client.on('message_create', message => {
	    if(message.body === "!hello"){
            client.sendMessage(message.from, "Olá seja bem vindo!"); //client.sendMessage(<Id do chat>, <conteúdo da mensagem>, <options>);
        }
        console.log(message.body);
    });
};
