export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dea278a4dd421164ce864a4',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-uujddno2',
                  apiId: 'd441e30e-cee1-464f-a811-e9571b93af24'
                },
                {
                  buildHookId: '5dea278a309de03b6d2b8e38',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-b6js71un',
                  apiId: 'efa2621f-c2aa-4e7d-9a43-cad0f9555cfe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rlavooij/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-b6js71un.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
