class Base {
    readonly id: string

    constructor( id: string ) {
        this.id = id
    }

    get env() {
        return import.meta.env
    }

    public log = ( ...args: unknown[] ) => {
        console.log( `[ ${ this?.id } ] :: `, ...args )
    }

    static create<Module>( Module: Module ) {
        return Module as { [K in keyof Module]: Module[K] }
    }
}

export { Base }

