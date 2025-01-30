import PageLayout from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8 animate-fade-up">关于我们</h1>
        <div className="prose max-w-none animate-fade-up">
          <p className="text-lg text-gray-600 mb-6">
            2021年11月29日，梦笔笙花工作室的前前前前身“迷C军”正式创立，那时候，我们还只是一个游戏地图创作的小工作室，我们的成员也大多是刚刚接触游戏的小白，我们的目标是创作出人尽皆知的热门地图
          </p>
          <p className="text-lg text-gray-600 mb-6">
            期间，工作室经历了大大小小的几次更名，内部人员经历了多次变化，有人离开，也有人加入，也有人回归
          </p>
          <p className="text-lg text-gray-600 mb-6">
            2024年1月，工作室更名为“落日余晖工作室”，换了一个新的logo，创立了我们的公众号，，但我们的目标，仍未改变
          </p>
          <p className="text-lg text-gray-600 mb-6">
            2024年12月27日，工作室正式更名为“梦笔笙花工作室”，由雾影江 江边柳（现柳蓉笙，梦笔笙花工作室美术部负责人）设计全新logo，我们逐渐的趋于懒惰，不再试着努力创建火热的地图，逐渐变成了一个没有目标的群体
          </p>
          <p className="text-lg text-gray-600 mb-6">
            2025年1月，我们开始创作一些互联网上的小工具，我们认为，或许这样也可以被大家所熟知，被大家所认可，也许这也是另一种实现我们目标的新路线吧
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;