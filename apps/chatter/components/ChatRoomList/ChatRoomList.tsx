import React from 'react';
import { ChatRoom } from '..';

export interface MessageProps {
    rooms: Array<ChatRoom>
}

export function ChatRoomList(props: MessageProps) {

    const showRoomItem = (room: ChatRoom) => {
        return (
            <li key={room.id}>
                <span className="room-name">
                    <a href={'/chat/'+room.id}>{room.name}</a>
                    <span className="room-description"> {room.description} </span>
                </span>
            </li>
        )
    }

    return (
        <div>
            <ul>
                {
                    props.rooms?.map(room => {
                        return showRoomItem(room)
                    })
                }
            </ul>
        </div>
    );
}
