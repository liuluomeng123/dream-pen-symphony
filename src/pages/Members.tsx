
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/PageLayout";
import { User } from "lucide-react";

const members = [
  {
    id: 1,
    nickname: "梦笔生花",
    gender: "男",
    employeeId: "MB001",
    position: "工作室负责人",
    status: "在职",
    introduction: "工作室创始人，主要负责工作室整体运营与管理。",
    avatar: "/images/avatar-placeholder.png"
  },
  {
    id: 2,
    nickname: "星辰",
    gender: "女",
    employeeId: "MB002",
    position: "前端开发工程师",
    status: "在职",
    introduction: "负责前端项目开发与维护，专注于用户体验优化。",
    avatar: "/images/avatar-placeholder.png"
  }
];

const Members = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8 animate-fade-up">团队成员</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <Link 
              to={`/members/${member.id}`}
              key={member.id}
              className="block"
            >
              <Card 
                className="hover:shadow-lg transition-all duration-300 animate-fade-up transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {member.avatar ? (
                      <img 
                        src={member.avatar} 
                        alt={member.nickname}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                        <User className="w-8 h-8 text-secondary-foreground" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-primary">{member.nickname}</h3>
                      <p className="text-sm text-gray-600">{member.position}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">工号：</span>
                      <span>{member.employeeId}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">性别：</span>
                      <span>{member.gender}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={member.status === "在职" ? "default" : "secondary"}>
                        {member.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-4 line-clamp-2">
                      {member.introduction}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Members;
