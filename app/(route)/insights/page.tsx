import type { Metadata } from "next";
import PageClient from "./page.client";

const getCat = cache(async () => {
  const payload = await getPayload({ config: configPromise })
  const { docs: cat } = await payload.find({
    collection: 'categories',
    depth: 9999,
  })
  return cat
})

export interface Cat {
  title: string
}

export interface Post {
  title: string
  slug: string
  category: string
  date: string
  heroImage: string
}

export const metadata: Metadata = {
  title: "Blogs & Articles | RIOD",
  description:
    "Explore insights, blogs, and articles on EV charging, sustainability, and cutting-edge technology shaping India's electric mobility future.",
};

export default function Page() {
  return <PageClient />;
}
