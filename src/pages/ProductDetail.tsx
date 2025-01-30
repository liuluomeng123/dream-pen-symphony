import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    title: "随机抽取器",
    version: "v1.0",
    uploadDate: "2023-01-01",
    lastUpdate: "2023-01-15",
    publisher: "梦笔笙花工作室",
    previews: [
      "https://github.com/liuluomeng123/dream-pen-symphony/blob/main/images/%E4%BA%A7%E5%93%81%E5%B1%95%E7%A4%BA/%E9%9A%8F%E6%9C%BA%E6%8A%BD%E5%8F%96%E5%99%A8/%E9%9A%8F%E6%9C%BA%E6%8A%BD%E5%8F%96%E5%99%A8%E7%BD%91%E7%AB%99.png",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931",
    ],
    introduction: "智能文档处理系统是一款革新性的文档管理解决方案，致力于提升企业文档处理效率。",
    details: "本系统采用先进的AI技术，支持多种文档格式的智能识别和处理，具备自动分类、信息提取、内容分析等功能。系统界面简洁直观，操作便捷，是企业提升文档管理效率的得力助手。",
    downloadUrl: "/downloads/document-processor.zip"
  },
  {
    id: 2,
    title: "数据分析平台",
    version: "v2.0.1",
    uploadDate: "2023-11-15",
    lastUpdate: "2024-01-10",
    publisher: "李工",
    previews: [
      "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931",
    ],
    introduction: "数据分析平台是一个综合性的数据处理和分析工具，为企业提供全方位的数据洞察。",
    details: "平台整合了多种数据分析工具和可视化组件，支持实时数据处理、多维度分析、智能报表生成等功能。通过直观的界面展示，帮助用户快速理解和利用数据价值。",
    downloadUrl: "/downloads/data-analytics.zip"
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleBack = () => {
    navigate("/products");
  };

  const handleUse = () => {
    window.location.href = product.downloadUrl;
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="outline"
            onClick={handleBack}
            className="flex items-center gap-2 mb-8 animate-fade-up"
          >
            <ArrowLeft className="w-4 h-4" />
            返回
          </Button>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-fade-up">
            <h1 className="text-3xl font-bold text-primary mb-4">{product.title}</h1>
            <div className="grid grid-cols-2 gap-4 text-gray-600 mb-6">
              <p>版本：{product.version}</p>
              <p>发布者：{product.publisher}</p>
              <p>上传日期：{product.uploadDate}</p>
              <p>最近更新：{product.lastUpdate}</p>
            </div>
            <div className="prose max-w-none">
              <h2 className="text-xl font-bold text-primary mb-4">产品介绍</h2>
              <p className="text-gray-600 mb-6">{product.introduction}</p>
            </div>
          </div>

          <div className="mb-8 animate-fade-up">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {product.previews.map((preview, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={preview}
                      alt={`${product.title} 预览图 ${index + 1}`}
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-fade-up">
            <h2 className="text-xl font-bold text-primary mb-4">产品详情</h2>
            <p className="text-gray-600">{product.details}</p>
          </div>

          <div className="text-center animate-fade-up">
            <Button onClick={handleUse} variant="secondary" size="lg">
              立即使用
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductDetail;