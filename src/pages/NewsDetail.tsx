import { useParams, useNavigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const newsData = [
  {
    id: 1,
    title: "工作室官网内测圆满成功",
    date: "2025-01-20",
    content: "梦笔笙花工作室官网正式完成内部测试并正式上架",
    fullContent: `梦笔笙花工作室官方网站正式由工作室内部成员编写完成并测试完毕，正式上线于github平台进行托管，正式对外开放`
  },
  {
    id: 2,
    title: "新工具迷你彩码通正式上线",
    date: "2025-01-27",
    content: "工作室新工具迷你彩码通正式完成编写并正式上线",
    fullContent: `为帮助各位迷你世界玩家创作地图、编写彩色字体，我们正式启动了迷你彩码通项目，在3天内正式完工

程序特色：
1. 可以快捷的转换为彩码并复制
2. 设置调色盘，可以直接选择颜色进行提交转换
3. 简单布局，便于上手
`
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