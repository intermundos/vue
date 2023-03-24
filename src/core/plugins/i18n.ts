// import { createI18n } from 'vue-i18n/dist/vue-i18n.esm-bundler.js'
//
// const messages = Object.fromEntries(
//   Object.entries( import.meta.globEager( '/src/core/i18n/locales/*.js' ) )
//     .map( ( [ key, value ] ) => {
//       const locale = key.split('/')?.pop()?.split('.')[0] || 'en'
//       return [ locale, value.default ]
//     } ),
// )
//
// export const install1 = ({ app }: App) => {
//
//   const i18n = createI18n({
//     legacy: false,
//     locale: 'en',
//     messages,
//   })
//
//   app.use(i18n)
// }