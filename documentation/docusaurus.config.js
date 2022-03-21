const path = require('path');

module.exports = {
    title: 'Tutorial Title',
    url: '/',
    baseUrl: '/',
    themes: ['@docusaurus/theme-classic'],
    tutorial: {
        title: 'Tutorial Title',
        description: 'Short explanation of your tutorial',
        preview: 'preview_image.png',
        website: 'tutorial-id/path-to-first-page',
        source: '{github_repo}',
        tags: [],
    },
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'tutorial-id',
                path: path.resolve(__dirname, './docs'),
                routeBasePath: 'tutorial-id',
                sidebarPath: path.resolve(__dirname, './sidebars.js'),
                editUrl: '{github_repo}/edit/main/',
            },
        ],
    ],
    staticDirectories: [path.resolve(__dirname, './images')],
};