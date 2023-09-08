import { BaseHTTPClient } from '@core/base/base.client'

const AppClient = new BaseHTTPClient( {
    prefixUrl: 'http://localhost:20000',
} )


export { AppClient }
