import { defineModule } from '@core/base/base-module'
import { sleep }        from 'radash'

const MODULE_ID = 'APP'

const initialState = () => ( {
    initialized: false,
    nested: {
        permissions: {
            admin: true,
            user: false,
        }
    }
} )

const module = defineModule( MODULE_ID, {
    initialState: initialState(),
    actions: {
        initialize,
    }
} )

export { module as AppModule }

function initialize() {
    sleep( 1000 ).then( _ => {
        module.state.initialized = true
        module.state.nested.permissions.user = 'AAA' as unknown as boolean
    } )
}
