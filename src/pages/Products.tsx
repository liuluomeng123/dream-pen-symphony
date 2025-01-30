import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const products = [
  {
    id: 1,
    title: "传统花艺作品",
    description: "融合传统与现代的精美花艺作品",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
  },
  {
    id: 2,
    title: "现代插画设计",
    description: "独特视角的现代艺术插画",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  },
];

const Products = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8 animate-fade-up">产品展示</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link
                  to={`/products/${product.id}`}
                  className="inline-block bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
                >
                  查看详情
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Products;