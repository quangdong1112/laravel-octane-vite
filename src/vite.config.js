import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path'

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
                'resources/js/app/header.js',
                'resources/js/app/master.js',
                'resources/js/app/home.js',
            ],
            refresh: true,
        }),
        {
            name: 'blade',
            handleHotUpdate({ file, server }) {
                if (file.endsWith('.blade.php')) {
                    server.ws.send({
                        type: 'full-reload',
                        path: '*',
                    });
                }
            },
        },
    ],

    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js'
        },
    },

    server: {
        hmr: {
            host: 'localhost',
        },
        watch: {
            usePolling: true
        },
    },
});
