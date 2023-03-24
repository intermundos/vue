const pipe = ( ...fns: Array<Function> ) => ( value: any ) => fns.reduce( ( v, f ) => f( v ), value )
const compose = ( ...fns: Array<Function> ) => ( value: any ) => fns.reduceRight( ( v, f ) => f( v ), value )
const chain = ( ...fns ) => fns.forEach( ( f ) => f() )
const noop = () => {
}

export { pipe, compose, chain, noop }
export { throttle, debounce } from 'radash'
