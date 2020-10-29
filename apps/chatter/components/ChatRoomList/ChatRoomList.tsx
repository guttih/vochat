import React from 'react';
import { ChatRoom } from '..';

export interface MessageProps {
    rooms:Array<ChatRoom>
}

export function ChatRoomList(props:MessageProps) {

    const showRoom = (room:ChatRoom) => {
        return (
            <li key={room.sessionId}>
                <span className="room-name" data-description={room.description}>{room.name}</span> : 
                <span className="room-id">{room.sessionId}</span>
                
            </li>
        )
    }

    return (
        <div>
            <ul>
            {
                props.rooms.map(room => {
                    return showRoom(room)
                })
            }
            </ul>
        </div>
    );
}
