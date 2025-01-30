import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const news = [
  {
    id: 1,
    title: "工作室官网内测圆满成功",
    date: "2025-01-20",
    content: "梦笔笙花工作室官网内部测试圆满完成，正式提交上线",
  },
  {
    id: 2,
    title: "新工具迷你彩码通上线",
    date: "2025-01-27",
    content: "新产品迷你彩码通正式上线，其用于将RGB等色彩代号转为迷你世界的彩色文字代码",
  },
];

const News = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8 animate-fade-up">新闻动态</h1>
        <div className="space-y-6">
          {news.map((item, index) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="block"
            >
              <div
                className="bg-white rounded-lg shadow-lg p-6 animate-fade-up hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h2 className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4">{item.date}</p>
                <p className="text-gray-600">{item.content}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default News;