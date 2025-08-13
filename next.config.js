const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    basePath: isProd ? '/portfolio-web' : '',
    publicRuntimeConfig: {
        basePath: isProd ? '/portfolio-web' : '',
    },
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
};