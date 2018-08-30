let mix = require('laravel-mix');
let app_mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/dashboard.js', 'public/js')
    .sass('resources/assets/sass/dashboard.scss', 'public/css')
    .webpackConfig({
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': path.resolve(__dirname, 'resources/assets/js'),
            },
        },
        output: {
            publicPath: '/',
            filename: '[name].js',
            chunkFilename: 'js/[name].[chunkhash].chunk.js'
        },
        module: {
            rules: [
                {
                    test: /\.less$/,
                    use: [
                        'style-loader',
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'less-loader'
                    ]
                }
            ]
        }
    });

app_mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .webpackConfig({
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': path.resolve(__dirname, 'resources/assets/js'),
            },
        },
        output: {
            publicPath: '/',
            filename: '[name].js',
            chunkFilename: 'js/[name].[chunkhash].chunk.js'
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                },
                {
                    test: /\.md$/,
                    loader: 'vue-markdown-loader',
                    options: {
                        preset: 'default',
                        breaks: true,
                        preventExtract: true
                    }
                }
            ]
        }
    });