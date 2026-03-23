import HomePage from "../components/home/HomePage";
import { getInsights } from "@/app/lib/contentProviders";

export const metadata = {
  title: "RIOD | Powering India's EV Revolution",
  description:
    "Smart and reliable EV charging infrastructure built for homes, businesses, and commercial spaces.",
};

export default async function Page() {
  const insights = await getInsights();
  return <HomePage insights={insights} />;
}
