
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
      "/images/产品展示/随机抽取器/随机抽取器网站.png",
      "/images/产品展示/随机抽取器/随机抽取器网站-抽取中.png",
      "/images/产品展示/随机抽取器/随机抽取器网站-批量添加页面.png",
    ],
    introduction: "一款便捷的随机抽取工具，支持多种抽取模式和批量导入名单。",
    details: "本系统提供简单抽取和批量抽取两种模式，支持Excel导入名单，可以设置不重复抽取等功能。系统界面简洁直观，操作便捷，适用于各类抽奖、随机点名等场景。",
    downloadUrl: "/downloads/random-selector.zip"
  },
  {
    id: 2,
    title: "迷你彩码通",
    version: "v2.0.1",
    uploadDate: "2023-11-15",
    lastUpdate: "2024-01-10",
    publisher: "梦笔笙花工作室",
    previews: [
      "/images/产品展示/迷你彩码通/迷你彩码通首页.png",
      "/images/产品展示/迷你彩码通/迷你彩码通使用.png"
    ],
    introduction: "为迷你世界玩家提供便捷的彩色文字代码转换工具",
    details: "迷你彩码通是一款专为迷你世界玩家设计的工具，可以快速将RGB等色彩代号转换为迷你世界可用的彩色文字代码。支持调色盘直接选色，界面简洁易用。",
    downloadUrl: "/downloads/mini-color-code.zip"
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
