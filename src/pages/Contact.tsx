import PageLayout from "@/components/PageLayout";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8 animate-fade-up">联系我们</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 animate-fade-up">
            <div className="flex items-start space-x-4">
              <MapPin className="text-secondary mt-1" />
              <div>
                <h3 className="font-bold text-primary mb-2">地址</h3>
                <p className="text-gray-600">北京市朝阳区xxx街xxx号</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="text-secondary mt-1" />
              <div>
                <h3 className="font-bold text-primary mb-2">电话</h3>
                <p className="text-gray-600">010-12345678</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="text-secondary mt-1" />
              <div>
                <h3 className="font-bold text-primary mb-2">邮箱</h3>
                <p className="text-gray-600">contact@mengbishenghua.com</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg animate-fade-up">
            <h2 className="text-2xl font-bold text-primary mb-4">营业时间</h2>
            <p className="text-gray-600 mb-2">周一至周五：9:00 - 18:00</p>
            <p className="text-gray-600">周六至周日：10:00 - 16:00</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;