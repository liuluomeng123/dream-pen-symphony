import { useParams } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const products = [
  {
    id: 1,
    title: "传统花艺作品",
    description: "融合传统与现代的精美花艺作品",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    details: "这是一件融合传统与现代审美的花艺作品，采用传统工艺制作，展现出独特的艺术魅力。",
  },
  {
    id: 2,
    title: "现代插画设计",
    description: "独特视角的现代艺术插画",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    details: "这是一幅现代风格的艺术插画，融入了传统元素，展现出独特的视觉效果。",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-primary mb-8">产品未找到</h1>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 animate-fade-up">{product.title}</h1>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-up">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-primary mb-4">产品详情</h2>
                <p className="text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductDetail;