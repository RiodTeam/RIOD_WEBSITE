import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

export const revalidateCollectionAfterChange = (
  paths: (doc: any) => string[],
) => {
  const hook: CollectionAfterChangeHook = ({ doc, req: { context, payload } }) => {
    if (!context.disableRevalidate) {
      queueMicrotask(() => {
        paths(doc).forEach((path) => revalidatePath(path))
        revalidateTag('cms-updates')

        payload.logger.info(
          `Revalidated paths: ${paths(doc).join(', ')}`,
        )
      })
    }

    return doc
  }

  return hook
}

export const revalidateCollectionAfterDelete = (
  paths: (doc: any) => string[],
) => {
  const hook: CollectionAfterDeleteHook = ({ doc, req: { context, payload } }) => {
    if (!context.disableRevalidate) {
      queueMicrotask(() => {
        paths(doc).forEach((path) => revalidatePath(path))
        revalidateTag('cms-updates')

        payload.logger.info(
          `Revalidated paths on delete: ${paths(doc).join(', ')}`,
        )
      })
    }

    return doc
  }

  return hook
}
