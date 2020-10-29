import React from 'react';

export interface MessageProps {
    Title:string
    Text:string
}

export function Message(props:MessageProps) {
    return (
        <div>
            <h1>{props.Title}</h1>
            <p>{props.Text}</p>
        </div>
    );
}
