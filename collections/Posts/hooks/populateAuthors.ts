import type { CollectionAfterReadHook } from 'payload'

export const populateAuthors: CollectionAfterReadHook = async ({ doc, req: { payload } }) => {
  if (doc?.authors) {
    const authors = Array.isArray(doc.authors) ? doc.authors : [doc.authors]

    if (authors.length > 0) {
      const authorDocs: { id: string; name: string }[] = []

      for (const author of authors) {
        try {
          const authorDoc = await payload.findByID({
            id: typeof author === 'object' ? author?.id : author,
            collection: 'users',
            depth: 0,
          })

          if (authorDoc) {
            authorDocs.push({
              id: String(authorDoc.id),
              name: authorDoc.name || '',
            })
          }
        } catch {
          // swallow error
        }
      }

      if (authorDocs.length > 0) {
        doc.populatedAuthors = authorDocs
      }
    }
  }

  return doc
}
