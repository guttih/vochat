import React, { useEffect, useState } from 'react';

import {
    Message,
    ChatRepository,
    ChatRoomList
} from '../../components';
import type { ChatRoom as ChatRoomType} from '../../components';


export function ChatLobby() {
    const repo = new ChatRepository();

    const [rooms, setRooms] = useState<Array<ChatRoomType>>(null);
    useEffect(() => {
        const getRooms = () => {
            setRooms(repo.getRooms());
        }
        getRooms();
    }, [])

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

