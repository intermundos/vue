// @ts-ignore
import { defineConfig } from 'vite'
import tsPaths          from 'vite-tsconfig-paths'
import vue              from '@vitejs/plugin-vue'
import AutoImport       from 'unplugin-auto-import/vite'
import Components       from 'unplugin-vue-components/vite'
import Icons            from 'unplugin-icons/vite'
import IconsResolver    from 'unplugin-icons/resolver'
// import VueI18n                 from '@intlify/vite-plugin-vue-i18n'

const esbuild = {} as Record<string, any>

// @ts-ignore
if ( process.env.NODE_ENV === 'production' ) {
    esbuild.drop = [ 'console' ]
}

export default defineConfig( {
        // css         : {
        //   preprocessorOptions: {
        //     // scss: {
        //     //   charset       : false,
        //     //   additionalData: `@use "@assets/styles/element/index.scss" as *;`, // use theme/index ?
        //     // },
        //   },
        // },
        server: {
            port: Number( process.env.PORT ) || 8888, // use dev port 8888 -> 5555 with netlify dev
            open: false,
            // proxy: {
            //     '/api': {
            //         target: 'http://localhost:5555/.netlify/functions',
            //         changeOrigin: true,
            //         rewrite: path => path.replace( /^\/api/, '' ),
            //     },
            // },
        },
        preview: {
            port: 8080
        },
        plugins: [

            tsPaths(),

            vue(),

            // VueI18n( {
            //   fullInstall    : true,
            //   runtimeOnly    : false,
            //   compositionOnly: true,
            //   // include:         `${ paths.ROOT }/src/core/i18n/locales/**`,
            // } ),

            AutoImport( {
                include: [
                    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                    /\.vue$/, /\.vue\?vue/, // .vue
                ],
                imports: [
                    'vue',
                    'vue-router',
                    '@vueuse/core',
                    // 'vue-i18n',
                ],
                dts: 'types/auto-imports.d.ts',
            } ),

            Components( {
                dirs: [ 'src/ui/components', 'src/ui/atoms' ],
                extensions: [ 'vue' ],
                deep: true,
                include: [ /\.vue$/, /\.vue\?vue/ ],
                exclude: [ /[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/, /[\\/]\.view.vue[\\/]/ ],
                resolvers: [
                    IconsResolver( { prefix: 'icon' } ),
                ],
                dts: 'types/components.d.ts',
                types: [ {
                    from: 'vue-router',
                    names: [ 'RouterLink', 'RouterView' ],
                } ],
            } ),

            Icons( { compiler: 'vue3' } ),

        ],
        esbuild: esbuild,
        build: {
            sourcemap: false,
            rollupOptions: {
                output: {
                    assetFileNames: ( chunk ) => {
                        return 'assets/[hash][extname]'
                    },
                    chunkFileNames: ( chunk ) => {
                        if ( chunk.name.includes( '.view' ) ) {
                            return '[name].[hash].js'
                        }
                        return '[hash].js'
                    },
                },
            },
        },
        optimizeDeps: {
            include: [ 'radash' ]
        }
    },
)
