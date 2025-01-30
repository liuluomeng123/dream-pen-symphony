import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    title: "智能文档处理系统",
    version: "v1.2.3",
    uploadDate: "2023-12-01",
    lastUpdate: "2024-01-15",
    publisher: "张工",
    preview: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    description: "智能化文档处理解决方案",
  },
  {
    id: 2,
    title: "数据分析平台",
    version: "v2.0.1",
    uploadDate: "2023-11-15",
    lastUpdate: "2024-01-10",
    publisher: "李工",
    preview: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    description: "企业级数据分析平台",
  },
];

const Products = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8 animate-fade-up">产品展示</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="animate-fade-up hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <img
                  src={product.preview}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{product.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>版本：{product.version}</p>
                    <p>上传日期：{product.uploadDate}</p>
                    <p>最近更新：{product.lastUpdate}</p>
                    <p>发布者：{product.publisher}</p>
                  </div>
                  <Link
                    to={`/products/${product.id}`}
                    className="inline-block bg-secondary text-white px-4 py-2 rounded mt-4 hover:bg-opacity-90 transition-colors"
                  >
                    查看详情
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Products;