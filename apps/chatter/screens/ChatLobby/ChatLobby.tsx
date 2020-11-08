import React, { useEffect, useState } from 'react';

import {
    Message,
    ChatRepository,
    ChatRoomList,
    ChatRoom
} from '../../components';

export function ChatLobby() {
    const repo = new ChatRepository();

    const [rooms, setRooms] = useState<Array<ChatRoom>>(null);
    useEffect(() => {
        const  getRooms =  () => {
            repo.getRooms()
            .then(rooms=>setRooms(rooms));
        }
        getRooms();
    }, [])

    if (rooms === null) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <Message
                Title="Chat lobby"
                Text="Here you see the available chats.  Please click the chat you want to visit"
            />

            <ChatRoomList rooms={rooms} />

        </div>
    );
}

