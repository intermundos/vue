import ky, { Options } from 'ky'


class BaseHTTPClient {

    #http: typeof ky

    constructor( config: Options ) {

        this.#http = ky.create( {
            headers: new Headers( {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
            } ),
            ...config
        } )
    }

    get http(): typeof ky {
        return this.#http
    }

    extend( options: Options ) {
        this.#http = this.#http.extend( options )
    }

}

export { BaseHTTPClient }




