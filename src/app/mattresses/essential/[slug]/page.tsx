import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMattressBySlug, getMattressesByCollection } from "@/lib/mattress-queries";
import { MattressProductPage } from "@/components/mattress/mattress-product-page";

export function generateStaticParams() {
  return getMattressesByCollection("essential").map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mattress = getMattressBySlug("essential", slug);
  return { title: mattress?.name ?? "Mattress not found" };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mattress = getMattressBySlug("essential", slug);
  if (!mattress) notFound();
  return <MattressProductPage mattress={mattress} />;
}
