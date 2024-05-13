import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'
import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { debugSecrets } from '@sanity/preview-url-secret/sanity-plugin-debug-secrets'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',

  projectId: 'r7e6h806',
  dataset: 'playground',

  plugins: [
    structureTool(),
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
