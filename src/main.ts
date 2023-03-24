import '@assets/styles/main.scss'
import App        from '@/App.vue'
import { router } from '@core/router/router'

async function bootstrap( app: App ) {

    app.config.devtools = import.meta.env.DEV // Vue devtools enable

    app.use( router )

    // Object.values( import.meta.globEager( '/src/core/plugins/*.ts' ) ).forEach( plugin => plugin.install?.( { app, router } ) )

    await router.isReady()

    app.mount( '#root' )

}

bootstrap( createApp( App ) ).catch( e => console.error( e ) )
