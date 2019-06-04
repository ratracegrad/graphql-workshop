module.exports = {
    base: '/graphql-workshop/',
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.png' }]
    ],
    title: "Let's Learn GraphQL Workshop",
    description: "GraphQL Workshop for Refactr.Tech Conference 2019",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'GraphiQL', link: 'https://refactr-graphql.herokuapp.com/graphql'},
            { text: 'Instructor', link: '/workshop/instructor' },
            { text: 'Conference', link: 'http://refactr.tech/' },
            { text: 'CodePrep', link: 'https://codeprep.io/' } 
        ],
        sidebar: [
            {
                title: 'Overview',
                children: [
                    '/workshop/overview/ch1'
                ],
            },
            {
                title: 'GraphQL Server',
                children: [
                    '/workshop/server/ch1',
                    '/workshop/server/ch2',
                    '/workshop/server/ch3',
                    '/workshop/server/ch4',
                    '/workshop/server/ch5',
                    '/workshop/server/ch6',
                    '/workshop/server/ch7',
                    '/workshop/server/ch8',
                    '/workshop/server/ch9',
                    '/workshop/server/ch10',
                    '/workshop/server/ch11',
                    '/workshop/server/ch12'
                ],
            },
            {
                title: 'MongoDB Database',
                children: [
                    '/workshop/mlab/ch1',
                    '/workshop/mlab/ch2',
                    '/workshop/mlab/ch3'
                ],
            },
            {
                title: 'Mutations',
                children: [
                    '/workshop/mutations/ch1',
                    '/workshop/mutations/ch2',
                    '/workshop/mutations/ch3',
                    '/workshop/mutations/ch4'
                ],
            },
            {
                title: 'Reference',
                children: [
                    '/workshop/reference/ch1'
                ],
            },
        ]
    }
}