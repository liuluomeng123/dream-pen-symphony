import PageLayout from "@/components/PageLayout";

const Index = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <section className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            梦笔笙花工作室
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我们的口号
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-100 p-8 rounded-lg animate-fade-up">
            <h2 className="text-2xl font-bold text-primary mb-4">我们的特色</h2>
            <p className="text-gray-600">
              游戏与网络，我们不仅创作工具，还在互联网上帮助他人。
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-bold text-primary mb-4">努力尝试</h2>
            <p className="text-gray-600">
              每一件作品都凝聚着我们的努力与创意，期待能够帮助到您。
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Index;