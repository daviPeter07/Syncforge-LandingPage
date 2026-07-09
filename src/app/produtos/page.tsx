import type { Metadata } from "next";
import ProductsPageContent from "@/features/Products/ProductsPageContent";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Conheça os produtos desenvolvidos pela Syncforge para escalar seus resultados e otimizar sua gestão.",
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
