import { useParams, useNavigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const newsData = [
  {
    id: 1,
    title: "工作室开业庆典圆满成功",
    date: "2024-01-15",
    content: "梦笔笙花工作室正式开业，现场展出多件精美作品。开业当天，众多艺术爱好者前来参观，对工作室的作品给予了高度评价。工作室成员进行了精彩的创作展示，让参观者深入了解了创作过程。此次开业庆典不仅展示了工作室的实力，也为未来的发展奠定了良好基础。",
    fullContent: `梦笔笙花工作室正式开业，现场展出多件精美作品。开业当天，众多艺术爱好者前来参观，对工作室的作品给予了高度评价。

工作室成员进行了精彩的创作展示，让参观者深入了解了创作过程。参观者们对工作室的创新理念和专业水平表示赞赏，期待未来能看到更多优秀作品。

此次开业庆典的成功举办，不仅展示了工作室的实力，也为未来的发展奠定了良好基础。工作室将继续秉持专业创新的理念，为用户提供更优质的作品和服务。`
  },
  {
    id: 2,
    title: "新春特别艺术展览即将开启",
    date: "2024-01-20",
    content: "为迎接新春佳节，工作室将举办特别艺术展览。展览将展出多件新作品，融合传统与现代元素，展现别样新春氛围。特别展览将持续一周，欢迎各位前来参观。",
    fullContent: `为迎接新春佳节，工作室将举办特别艺术展览。此次展览将展出多件新作品，融合传统与现代元素，展现别样新春氛围。

展览特色：
1. 融合传统与现代的创新作品展示
2. 互动体验区域，让参观者亲身感受创作乐趣
3. 新春主题特别创作展示
4. 限量版作品首发

特别展览将持续一周，期间将有多场互动活动和创作分享会。欢迎各位艺术爱好者前来参观交流，共同感受新春艺术的魅力。`
  },
];

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const newsItem = newsData.find(item => item.id === Number(id));

  if (!newsItem) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary mb-4">未找到新闻</h1>
            <button
              onClick={() => navigate("/news")}
              className="text-white bg-primary hover:bg-primary/90 px-6 py-2 rounded transition-colors"
            >
              返回新闻列表
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4 animate-fade-up">{newsItem.title}</h1>
          <p className="text-gray-500 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>{newsItem.date}</p>
          <div className="prose prose-lg max-w-none animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {newsItem.fullContent.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-600">{paragraph}</p>
            ))}
          </div>
          <div className="mt-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={() => navigate("/news")}
              className="text-white bg-primary hover:bg-primary/90 px-6 py-2 rounded transition-colors"
            >
              返回新闻列表
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NewsDetail;