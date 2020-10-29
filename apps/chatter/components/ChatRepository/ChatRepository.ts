import Repository from './ChatRepository.json'

export type ChatRoomConnection = {
    apiKey: string
    sessionId: string
    token: string
}

export type ChatRoom = {
    id: string
    moderator: string
    name: string
    description: string,
    connection:ChatRoomConnection
}

export type ChatRepositoryDataType = {
    rooms:Array<ChatRoom>
    name:string
    description:string
}

export class ChatRepository {
    
    chatRepository:ChatRepositoryDataType;

    constructor() {
        this.chatRepository = {
            rooms: Repository.rooms,
            name: Repository.name,
            description:Repository.description
        }
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
    public getRooms():Array<ChatRoom> {
        return this.chatRepository.rooms;
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


