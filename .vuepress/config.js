module.exports = {
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.png' }]
    ],
    title: "Let's Learn GraphQL Workshop",
    description: "GraphQL Workshop for Refactr.Tech Conference 2019",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'GraphiQL', link: '/graphql'},
            { text: 'Instructor', link: '/instructor' },
            { text: 'Conference', link: 'http://refactr.tech/' },
            { text: 'CodePrep', link: 'https://codeprep.io/' } 
        ],
        sidebar: [
            {
                title: 'Overview',
                children: [
                    '/workshop/overview/ch1',
                    '/workshop/overview/ch2'
                ],
            },
            {
                title: 'GraphQL Server',
                children: [
                    '/workshop/server/ch1',
                    '/workshop/server/ch2'
                ],
            }
        ]
    }
}