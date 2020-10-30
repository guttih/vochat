import  React, { useEffect, useState }  from "react";
import { ChatRepository, ChatRoom } from '../ChatRepository';

interface ChatSessionProps {
    id:string
}

export const ChatSession = (props: ChatSessionProps) => {

    const [room, setRoom] = useState<ChatRoom>(null)

    useEffect(() => {
      // Handling all of our errors here by alerting them
      function handleError(error) {
        if (error) {
          alert(error.message);
        }
      }
  
      function initializeSession() {
        if (room === null) {
          return
        }
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const OT = require('@opentok/client');
        const session = OT.initSession(room.connection.apiKey, room.connection.sessionId);
  
        // Subscribe to a newly created stream
        session.on('streamCreated', function(event) {
          session.subscribe(event.stream, 'subscriber', {
            insertMode: 'append',
            width: '100%',
            height: '100%'
          }, handleError);
        });
  
        // Create a publisher
        const publisher = OT.initPublisher('publisher', {
          insertMode: 'append',
          width: '100%',
          height: '100%'
        }, handleError);
  
        // Connect to the session
        session.connect(room.connection.token, function (error) {
          // If the connection is successful, publish to the session
          if (error) {
            handleError(error);
          } else {
            session.publish(publisher, handleError);
          }
        });
      }

      initializeSession()
      
    }, [room])

    useEffect(() => {
        // Handling all of our errors here by alerting them
        function handleError(error) {
          if (error) {
            alert(error.message);
          }
        }

        function initializeRoom() {
          const repo = new ChatRepository();
          const room = repo.getRoom(props.id);
          if (room === null) {
              return;
          } else {
            setRoom(room);
          }
        }

        initializeRoom()
        
      }, [])
    
    if (props?.id === undefined) {
        return (<div>Session Id missing</div>)
    }

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



