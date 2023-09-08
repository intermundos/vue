import { BaseService } from '@core/base/base.service'
import { AppClient }   from '@/domain/api/app/app.client'

export const ID = 'app_service'

export default class AppService extends BaseService {
    constructor( id: string ) {
        super( id )
    }

    async test() {

        const response = await AppClient.http.get( 'jobs' ).json()

        console.log( response )

    }
}

export const service = AppService.create( new AppService( ID ) )

