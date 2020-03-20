import React, { Component, Fragment } from 'react';
import { SharedCollectionItem } from './CollectionMgr';

export class CollectionItem extends Component<{ item: SharedCollectionItem, number: number }>
{
    render()
    {
        return (
            <div className="collection-item">
                <p>{ this.props.number }.</p>
                <div>
                    <p>{ this.props.item.name }</p>
                    <p>{ this.props.item.description }</p>
                </div>
            </div> );
    }
}