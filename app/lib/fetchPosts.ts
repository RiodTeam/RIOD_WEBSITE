import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const fetchPosts = async (slug?: string) => {
  const payload = await getPayload({ config: configPromise })

  if (slug) {
    const result = await payload.find({
      collection: 'posts',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    return {
      posts: result.docs,
      fetchedAt: new Date().toISOString(),
      cacheStatus: 'local',
    }
  }

  const result = await payload.find({
    collection: 'posts',
    sort: '-publishedAt',
    limit: 50,
  })
  return {
    posts: result.docs,
    fetchedAt: new Date().toISOString(),
    cacheStatus: 'local',
  }
}

export const fetchCategories = async () => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'categories',
    limit: 100,
  })
  return result.docs
}

export const fetchCaseStudies = async (slug?: string) => {
  const payload = await getPayload({ config: configPromise })

  if (slug) {
    const result = await payload.find({
      collection: 'case-studies',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    return result.docs
  }

  const result = await payload.find({
    collection: 'case-studies',
    limit: 50,
  })
  return result.docs
}
