import { createCipher } from 'crypto';
import Repository from './ChatRepository.json'

export type ChatRoom = {
    sessionId: string
    moderator: string
    name: string
    description: string
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

    public getName():string {
        return this.chatRepository.name;
    }
    public getDescription():string {
        return this.chatRepository.description;
    }
    public getRooms():Array<ChatRoom> {
        return this.chatRepository.rooms;
    }
    public addRoom(room:ChatRoom){
        this.chatRepository.rooms.push(room);
    }

    public removeRoom(sessionId:string):boolean{
        const removeIndex = this.chatRepository.rooms.map(function(item) { return item.sessionId; }).indexOf(sessionId);

        if (removeIndex < 0)
            return false;
        
        const ret = this.chatRepository.rooms.splice(removeIndex, 1);
        return ret.length > 0;
    }

}


