import  React, { useState }  from "react";
import { ChatSession } from '../../components';


interface ChatSessionStartProps {
    query:any
}

const ChatSessionStart = (props:ChatSessionStartProps)=> {

    if (props === undefined || props === null || 
        props.query === undefined || props.query === null ) {
            return (<div>Missing props in ChatSessionStart</div>)
        }

    const valueList = Object.keys(props.query);
    if (valueList.length < 0) {
        return (<div>Missing query path</div>)
    }
    const chatId = props.query[valueList[0]];
    
    console.log(chatId);
    
    return (
        <ChatSession id={chatId}/>
    );
}

ChatSessionStart.getInitialProps = (ctx):ChatSessionStartProps => {
    return {query:ctx.query};
}

export default ChatSessionStart
