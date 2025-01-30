import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const news = [
  {
    id: 1,
    title: "工作室开业庆典圆满成功",
    date: "2024-01-15",
    content: "梦笔笙花工作室正式开业，现场展出多件精美作品...",
  },
  {
    id: 2,
    title: "新春特别艺术展览即将开启",
    date: "2024-01-20",
    content: "为迎接新春佳节，工作室将举办特别艺术展览...",
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