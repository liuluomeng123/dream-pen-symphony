import PageLayout from "@/components/PageLayout";
import { Mail, MessageSquare, Users } from "lucide-react";

const Contact = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8 animate-fade-up">联系我们</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 animate-fade-up">
            <div className="flex items-start space-x-4">
              <MessageSquare className="text-secondary mt-1" />
              <div>
                <h3 className="font-bold text-primary mb-2">微信公众号</h3>
                <p className="text-gray-600">梦笔笙花工作室</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="text-secondary mt-1" />
              <div>
                <h3 className="font-bold text-primary mb-2">邮箱</h3>
                <p className="text-gray-600">contact@mengbishenghua.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="text-secondary mt-1" />
              <div>
                <h3 className="font-bold text-primary mb-2">QQ群</h3>
                <p className="text-gray-600">123456789</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center animate-fade-up">
            <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">梦笔笙花</span>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;