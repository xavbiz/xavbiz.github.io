import path from 'path'

export default pluginOptions => ({
  webpack: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '~components': path.resolve('./src/components'),
        '~routes': path.resolve('./src/routes'),
        '~variables': path.resolve('./src/variables.scss'),
        '~atoms': path.resolve('./src/atoms'),
        '~hooks': path.resolve('./src/hooks'),
        '~containers': path.resolve('./src/containers'),
        '~images': path.resolve('./src/assets'),
        '~hooks': path.resolve('./src/hooks.jsx'),
        '~utils': path.resolve('./src/utils'),
        '~assets': path.resolve('./src/assets'),
      },
    },
  }),
});

