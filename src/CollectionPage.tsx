import React, { Component } from 'react';
import { SharedCollection, collectionMgr } from './CollectionMgr';
import { CollectionItem } from './CollectionItem';

export class CollectionPage extends Component<{ collection: SharedCollection }>
{
    state = { newItemName: "" };
    render()
    {
        return (
            <div className="collection-page">
                <h1>{ this.props.collection.name }</h1>
                <div>
                    <input type="text" placeholder="item name" value={ this.state.newItemName } onChange={ e => this.setState( { newItemName: e.target.value } ) } />
                    <button type="button" onClick={ () => this.onCreateItem() }>Add Item</button>
                </div>
                <div>
                    { this.props.collection.items.map( ( x, i ) => <CollectionItem key={ x.id } number={ i + 1 } item={ x } /> ) }
                </div>
            </div> );
    }

    async onCreateItem()
    {
        await collectionMgr.addItem( this.props.collection.id, this.state.newItemName );
        this.setState( { newItemName: "" } );
    }
}