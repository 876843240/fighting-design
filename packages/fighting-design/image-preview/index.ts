import ImagePreview from './src/image-preview.vue'

import { install } from '../_utils'

export const FImagePreview = install(ImagePreview)

export type FImagePreviewInstance = InstanceType<typeof ImagePreview>

declare module 'vue' {
  export interface GlobalComponents {
    FImagePreview: typeof FImagePreview
  }
}
