import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'
import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { debugSecrets } from '@sanity/preview-url-secret/sanity-plugin-debug-secrets'
import { schemaTypes } from './schemas'
import customComponent from './components/customComponent'

export default defineConfig({
  name: 'default',

  projectId: 'r7e6h806',
  dataset: 'playground',

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Movies')
              .schemaType('movie')
              .child(
                S.documentList()
                  .title('Movies test')
                  .filter('_type == "movie"')
              ),
            S.listItem()
              .id('test')
              .title('Ja Test')
              .child(S.component(customComponent).id('example')
                .canHandleIntent((intent, params, context) =>  {
                    console.log(intent, params, context)
                    return true
                  }
                ))
          ])
    }),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: 'http://localhost:3000',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      },
    }),
    debugSecrets(),
  ],

  schema: {
    types: schemaTypes,
  },
})
