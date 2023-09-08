import { BaseStore } from '@core/base/base.store'
import { service }   from '@/domain/services/app/service'

const state = {
    test: 1
} satisfies TAppState

class AppModule extends BaseStore<TAppState> implements IAppStore {
    constructor( id: string ) {
        super( id, state )
    }

    show_test(): boolean {
        return false
    }

    async test() {
        service.test()
    }

}

export const store = AppModule.create( new AppModule( 'app' ) )

