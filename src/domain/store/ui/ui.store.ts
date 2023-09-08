import { BaseStore } from '@core/base/base.store'

const state = {
    theme: 'light'
} satisfies TUIState

class UIStore extends BaseStore<TUIState> implements IUIStore {
    constructor( id: string ) {
        super( id, state )
    }

    set_theme( theme: string ) {
        this.log( 'set_theme', theme )
    }
}

export const store = UIStore.create( new UIStore( 'ui' ) )
