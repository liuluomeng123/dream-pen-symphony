
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, User } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const members = [
  {
    id: 1,
    nickname: "梦笔生花",
    gender: "男",
    employeeId: "MB001",
    position: "工作室负责人",
    status: "在职",
    introduction: "工作室创始人，主要负责工作室整体运营与管理。",
    avatar: "/images/avatar-placeholder.png",
    skills: ["项目管理", "团队管理", "战略规划"],
    email: "admin@mengbishenghua.com",
    joinDate: "2023-01-01"
  },
  {
    id: 2,
    nickname: "星辰",
    gender: "女",
    employeeId: "MB002",
    position: "前端开发工程师",
    status: "在职",
    introduction: "负责前端项目开发与维护，专注于用户体验优化。",
    avatar: "/images/avatar-placeholder.png",
    skills: ["React", "Vue", "TypeScript", "UI设计"],
    email: "frontend@mengbishenghua.com",
    joinDate: "2023-03-15"
  }
];

const MemberDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = members.find((m) => m.id === Number(id));

  if (!member) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-primary mb-8">成员未找到</h1>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <Button
          variant="outline"
          onClick={() => navigate("/members")}
          className="mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          返回成员列表
        </Button>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {member.avatar ? (
                <img
                  src={member.avatar}
                  alt={member.nickname}
                  className="w-32 h-32 rounded-full object-cover"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center">
                  <User className="w-16 h-16 text-secondary-foreground" />
                </div>
              )}

              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h1 className="text-3xl font-bold text-primary">{member.nickname}</h1>
                  <Badge variant={member.status === "在职" ? "default" : "secondary"}>
                    {member.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-600">职位</p>
                    <p className="font-medium">{member.position}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">工号</p>
                    <p className="font-medium">{member.employeeId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">性别</p>
                    <p className="font-medium">{member.gender}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">入职日期</p>
                    <p className="font-medium">{member.joinDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">邮箱</p>
                    <p className="font-medium">{member.email}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">技能专长</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">个人简介</p>
                  <p className="text-gray-800">{member.introduction}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default MemberDetail;
