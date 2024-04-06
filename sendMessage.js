// Quando uma nova mensagem é enviada, é emitido o evento message_create, o qual retorna a mensagem(message no parâmetro).
export default async(client) => {
    client.on('message_create', message => {
	    if(message.body === "!warzone"){
            client.sendMessage(message.from, "vendi o ps5"); //client.sendMessage(<Id do chat>, <conteúdo da mensagem>, <options>);
        }
    });
};
