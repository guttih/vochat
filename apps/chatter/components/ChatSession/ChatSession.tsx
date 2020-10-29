import  React  from "react";
import { ChatRepository } from '../ChatRepository';

interface ChatSessionProps {
    id:string
}

export const ChatSession = (props: ChatSessionProps) => {
    if (props?.id === undefined) {
        return (<div>Session Id missing</div>)
    }
    const repo = new ChatRepository();
    const room = repo.getRoom(props.id);
    if (room === null) {
        return (<div>Room not found</div>)
    }
    return (
        <div>
            <h2>{room.name}</h2>
            <h4>{room.description}</h4>
            <dl>
                <dt>id</dt><dd>{room.id}</dd>
                <dt>moderator</dt><dd>{room.moderator}</dd>
                <dt>connection</dt><dd>{JSON.stringify(room.connection)}</dd>
            </dl>
        </div>
    );
}



