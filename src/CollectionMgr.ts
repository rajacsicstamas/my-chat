
export interface SharedCollectionItem
{
    id: string;
    image: string;
    name: string;
    description: string;
    url: string;
}

export interface SharedCollection
{
    id: string;
    readOnlyId: string;
    name: string;
    description: string;
    format: "noimage" | "compact" | "bigimage";
    numbered: boolean;
    items: SharedCollectionItem[];
}

function delay( ms: number )
{
    return new Promise( ( resolve, reject ) =>
    {
        setTimeout( resolve, ms );
    } );
}


export class CollectionMgr
{
    collections: SharedCollection[];

    constructor()
    {
        let collectionsJson = localStorage[ "collectionCache" ];
        this.collections = collectionsJson ? JSON.parse( collectionsJson ) : [];
    }

    get( id?: string )
    {
        return this.collections.find( x => !id || x.id === id );
    }

    async create( name: string )
    {
        await delay( 250 );
        let id = Math.random().toString();
        //this.collections.push( { id, name, items: [] } );
        return id;
    }

    async addItem( cid:string, name: string )
    {
        let c = this.collections.find( x => x.id === cid );
        if ( !c )
            return null;
        await delay( 250 );
        // let id = c.items.reduce( ( x, y ) => x > y.id ? x : y.id, 0 ) + 1;
        // c.items.push( { id, name, description: "" } );
        // return id;
    }
}

export var collectionMgr = new CollectionMgr();
