export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '62473075fa11c85aad83136b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5kqs79y2',
                  apiId: '65cbb240-33e3-4863-8e3a-c920e5282fdc'
                },
                {
                  buildHookId: '62473076f1450353994ae300',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-b6rjns7c',
                  apiId: '6d3fb794-cf9d-4c69-b510-c6645e1d69e6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/VS-star/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-b6rjns7c.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
