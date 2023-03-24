type State = Record<string, any>
type Subscriber = ( state: State ) => void

type ReturnTypeAlias<T, P extends keyof T> = T[P] extends ( ...args: infer A ) => infer R ? R : never;

type ActionsObject<T> = {
    [P in FunctionPropertyName<T>]: T[P] extends ( ...args: infer A ) => infer A
        ? ( ...args: A extends [ object ] ? A : A ) => ReturnTypeAlias<T, P>
        : never;
};

type FunctionPropertyName<T> = {
    [K in keyof T]: T[K] extends ( ...args: infer A ) => infer A ? K : never;
}[keyof T];

// A helper function to update a property by path
function updateObject( obj: any, path: string, value: any ): any {
    const [ head, ...tail ] = path.split( '.' )
    if ( tail.length === 0 ) {
        obj[ head as keyof typeof path ] = value
    } else {
        obj[ head as keyof typeof path ] = updateObject( obj[ head as keyof typeof path ] || {}, tail.join( '.' ), value )
    }
    return obj
}

interface Module<Id, State, Actions> {
    id: Id;
    state: State;
    actions: Actions;

    subscribe( callback: Subscriber ): () => void;

    update( path: string, value: any ): void;
}

export function defineModule<
    Id extends string,
    State extends object,
    Actions extends ActionsObject<Actions>,
>(
    id: Id,
    definition: {
        initialState: State,
        actions: Actions,
    }
): Module<Id, State, Actions> {

    const state = reactive( definition.initialState )

    const subscribers = new Set<Subscriber>()

    function subscribe( callback: Subscriber ): () => void {
        subscribers.add( callback )
        return () => subscribers.delete( callback )
    }

    function update( path: string, value: any ): void {
        updateObject( state, path, value )
        for ( const callback of subscribers ) {
            callback( state )
        }
    }

    return {
        id,
        state,
        actions: definition.actions,
        subscribe,
        update,
    } as unknown as Module<
        Id,
        State,
        Actions
    >
}


