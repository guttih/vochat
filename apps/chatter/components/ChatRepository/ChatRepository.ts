import { ChatToken } from 'apps/voserver/src/entities/chat-token.entity';
import { ChatSession } from 'apps/voserver/src/entities/chat-session.entity';
import { Query } from '@nestjs/common';

export type ChatRoomConnection = {
    apiKey: string
    sessionId: string
    token: string
}

export type ChatRoom = {
    id: string
    name: string
    description: string,
}

export type ChatRepositoryDataType = {
    rooms:Array<ChatRoom>
    name:string
    description:string
}

export class ChatRepository {
    
    chatRepository:ChatRepositoryDataType;

    public async fetchRooms(){
        const response = await this.fetchQuery("{sessions{id,name,description,mediaMode,archiveMode,active,apiKey}}");
       return await response.json();
    }

    async fetchQuery(queryText: string){

        const strQuery = JSON.stringify({query: queryText});
        const response = await fetch(   "http://localhost:3333/graphql",
                                        { 
                                            method: 'POST',
                                            headers: {'Content-Type': 'application/json'},
                                            body:strQuery
                                        });
        return response;

    }

    async fetchTokens(){
        console.log("fetchTokens: Let's query the data using servers graphql")
        const response = await this.fetchQuery("{tokenList { id sessionId name role expires } }");

        return await response.json();
    
    }



    // returns -1 if nothing is found
    indexOfRoomById = (roomId:string):number => {
        return  this.chatRepository.rooms.map(function(item) { return item.id; }).indexOf(roomId);
    }

    uuidv4() {
        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
    }
    public getName():string {
        return this.chatRepository.name;
    }
    public getDescription():string {
        return this.chatRepository.description;
    }

    //if room not found null is returned
    public getRoom(id: string):ChatRoom {
        const index = this.indexOfRoomById(id);
        return index < 0? null : this.chatRepository.rooms[index];
    }
    public async getRooms():Promise<Array<ChatRoom>> {
        const rooms: ChatRoom[] = [];

        const response = await this.fetchRooms();
        console.log(response.data)
        response?.data?.sessions.forEach(element => {
            rooms.push({
                id:element.id,
                name:element.name,
                description:element.description,
            });
        });
        console.log(rooms)
        return rooms;
    }

    
    //returns the id of the inserted room
    public addRoom(room:ChatRoom):string {
        
        if (room.id !== undefined && room.id !== null && room.id.length > 0) {
            //replace id if it already exists
            const index = this.indexOfRoomById(room.id);
            if (index > -1) {

                room.id = this.uuidv4();
            }
        } else {
            //create id;
            room.id = this.uuidv4();
        }
        
        this.chatRepository.rooms.push(room);
        return room.id;
    }

    public removeRoom(id:string):boolean {
        const removeIndex = this.indexOfRoomById(id);

        if (removeIndex < 0)
            return false;
        
        const ret = this.chatRepository.rooms.splice(removeIndex, 1);
        return ret.length > 0;
    }

}


