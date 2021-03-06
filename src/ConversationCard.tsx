import React, { Component } from 'react';
import { proxy } from "./proxy"
import { ConversationDto } from './chat';

export class ConversationCard extends Component<{
    conversation: ConversationDto,
    selected: boolean,
    onSelect: () => void
}>
{
    componentDidMount()
    {
        proxy.addEventListener( "message", ( cid, m ) =>
        {
            if ( cid === this.props.conversation.channelId )
                this.forceUpdate();
        }, this );
    }
    componentWillUnmount()
    {
        proxy.removeAllEventListener( this );
    }
    render()
    {
        let lastMessage = this.props.conversation.lastMessages.length > 0 ?
            this.props.conversation.lastMessages[ this.props.conversation.lastMessages.length - 1 ] : null;
        return (
            <div className={ "conversation-card" + ( this.props.selected ? " selected" : "" ) } onClick={ () => this.props.onSelect() }>
                <div className="row">
                    <span className="channel-name">{ this.props.conversation.name }</span>
                    <span className="time">{ lastMessage && new Date( lastMessage.timeStamp ).toLocaleTimeString() }</span>
                </div>
                <span className="last-message">{ lastMessage?.content }</span>
            </div>
        );
    }
}
