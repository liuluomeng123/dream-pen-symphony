
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import ImageViewer from "@/components/ImageViewer";

const products = [
  {
    id: 1,
    title: "随机抽取器",
    version: "v1.0",
    uploadDate: "2023-01-01",
    lastUpdate: "2023-01-15",
    publisher: "梦笔笙花工作室",
    preview: "/images/产品展示/随机抽取器/随机抽取器网站.png",
    description: "智能文档处理系统是一款革新性的文档管理解决方案，致力于提升企业文档处理效率。",
  },
  {
    id: 2,
    title: "迷你彩码通",
    version: "v2.0.1",
    uploadDate: "2023-11-15", 
    lastUpdate: "2024-01-10",
    publisher: "梦笔笙花工作室",
    preview: "/images/产品展示/迷你彩码通/迷你彩码通首页.png",
    description: "为迷你世界玩家提供便捷的彩色文字代码转换工具",
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
                <ImageViewer
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
