export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fda0a7ca18985efc8501644',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tn5hhkt5',
                  apiId: 'd5a82926-5c92-41bc-8adc-ce46405b09e0'
                },
                {
                  buildHookId: '5fda0a7c722bc1e1aaed9eec',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cev1p2on',
                  apiId: '79aa42e2-7feb-44d0-8248-ebd676b21964'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shubhof7/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-cev1p2on.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
