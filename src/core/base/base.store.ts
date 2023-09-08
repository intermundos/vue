import { UnwrapNestedRefs } from 'vue'
import { Base }             from '@core/base/base.class'

class BaseStore<State extends object> extends Base {

    #state: UnwrapNestedRefs<State>

    constructor( name: string, state: State ) {
        super( name )
        this.#state = reactive( state ) satisfies UnwrapNestedRefs<State>

        if ( this.env.DEV ) {
            window[ name ] = this
        }
    }

    get state(): UnwrapNestedRefs<State> {
        return this.#state
    }

    set_state( state: State ) {
        this.#state = Object.assign( this.#state, state )
    }

}

export { BaseStore }
