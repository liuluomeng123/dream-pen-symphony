import PageLayout from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8 animate-fade-up">关于我们</h1>
        <div className="prose max-w-none animate-fade-up">
          <p className="text-lg text-gray-600 mb-6">
            梦笔笙花工作室成立于2024年，是一家专注于传统工艺与现代设计融合的创意工作室。
          </p>
          <p className="text-lg text-gray-600 mb-6">
            我们致力于将传统文化元素与现代审美完美结合，创造出既有传统韵味又符合现代人审美需求的艺术作品。
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;