export const fetchPosts = async (slug?: string) => {
  const base = `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/posts`;
  const url = slug ? `${base}?where[slug][equals]=${slug}` : `${base}?sort=-publishedAt&limit=50`;

  console.log('Payload URL:', process.env.NEXT_PUBLIC_PAYLOAD_URL)
console.log('Fetching:', url)

  const fetchedAt = new Date().toISOString();
  const res = await fetch(url, { next: { tags: ['cms-updates'] } });

  console.log('fetched on: ', res)

  // Get Next.js cache info
  const cacheStatus = res.headers.get('x-nextjs-cache') || 'unknown';

  const data = await res.json();

  return {
    posts: slug ? [data.docs[0]] : data.docs,
    fetchedAt,
    cacheStatus,
  };
};
