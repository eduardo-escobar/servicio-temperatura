import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';

/**
 * Websocket para actualizar la informacion en cliente 
 */
@WebSocketGateway()
export class CiudadGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() server;
    users: number = 0;

    async handleConnection(){

        // A client has connected
        this.users++;

        // Notify connected clients of current users
        this.server.emit('users', this.users);

    }

    async handleDisconnect(){

        // A client has disconnected
        this.users--;

        // Notify connected clients of current users
        this.server.emit('users', this.users);

    }

    /**
     * Emite un mensaje para que el front actualice los datos de las ciudades
     * @param message mensaje que se va a enviar al front
     */
    async onCiudad(message: any){
        this.server.emit('ciudad', message);
    }

}