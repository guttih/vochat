import React, { useEffect, useState } from 'react';

import {
    Message,
    ChatRepository,
    ChatRoomList
} from '../../components';
import type { ChatRoom as ChatRoomType} from '../../components';


export function ChatRoom() {
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
                Title="titill"
                Text="texti"
            />

            <ChatRoomList rooms={rooms} />

        </div>
    );
}

