import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Users,
  Calendar,
  Award,
  TrendingUp,
  Building2,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Star,
  Clock,
  Trophy,
} from "lucide-react";

// Import generated images
import heroStudents from "@/assets/hero-students.jpg";
import programIntro from "@/assets/program-intro.jpg";
import benefitsIllustration from "@/assets/benefits-illustration.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Index = () => {
  // Program objectives data
  const objectives = [
    "Giúp sinh viên tiếp cận môi trường làm việc thực tế",
    "Phát triển ASK (Attitude – Skill – Knowledge)",
    "Kết nối sinh viên với các doanh nghiệp hàng đầu",
    "Nâng cao khả năng thích ứng với công việc thực tế",
    "Xây dựng network chuyên nghiệp và cơ hội nghề nghiệp",
  ];

  // Target audience data
  const targetAudience = [
    "Sinh viên đại học/cao đẳng năm 2-4",
    "Có mong muốn phát triển sự nghiệp trong lĩnh vực kinh doanh",
    "Quan tâm đến Sales, Marketing, AI ứng dụng",
    "Có khả năng tham gia học tập và thực hành thực tế",
    "Cam kết hoàn thành đầy đủ chương trình",
  ];

  // Completed projects data
  const projects = [
    {
      id: 1,
      title: "Chuẩn hoá quy trình làm việc",
      description:
        "Tối ưu hóa quy trình vận hành và nâng cao hiệu quả công việc",
      image: project1,
      category: "Process Optimization",
    },
    {
      id: 2,
      title: "Công ty TNHH F Deli",
      description: "Phát triển chiến lược kinh doanh và mở rộng thị trường",
      image: project2,
      category: "Business Strategy",
    },
    {
      id: 3,
      title: "Mentoring & Coaching: Văn hóa doanh nghiệp tại VNPT",
      description: "Xây dựng văn hóa doanh nghiệp mạnh mẽ và bền vững",
      image: project3,
      category: "Corporate Culture",
    },
    {
      id: 4,
      title: "Đào tạo đội ngũ Sales & Marketing tại Einstein School HCM - ESH",
      description:
        "Nâng cao năng lực bán hàng và marketing cho đội ngũ giáo dục",
      image: project1,
      category: "Training & Development",
    },
  ];

  // Program phases data
  const phases = [
    {
      weeks: "Tuần 1-2",
      title: "Định hướng & Khởi động",
      description:
        "Làm quen với môi trường, định hướng mục tiêu và xây dựng kế hoạch học tập",
      activities: ["Orientation", "Goal Setting", "Team Building"],
    },
    {
      weeks: "Tuần 3-4",
      title: "Học tập & Thực hành",
      description:
        "Tham gia các khóa đào tạo chuyên sâu và bắt đầu thực hành với dự án thực tế",
      activities: [
        "Training Sessions",
        "Hands-on Practice",
        "Project Assignment",
      ],
    },
    {
      weeks: "Tuần 5-6",
      title: "Thực hiện dự án",
      description:
        "Triển khai dự án dưới sự hướng dẫn của mentor và nhận phản hồi thường xuyên",
      activities: ["Project Implementation", "Mentoring", "Progress Review"],
    },
    {
      weeks: "Tuần 7-8",
      title: "Hoàn thiện & Đánh giá",
      description:
        "Hoàn thiện dự án, thuyết trình kết quả và nhận đánh giá từ doanh nghiệp",
      activities: ["Project Completion", "Presentation", "Final Assessment"],
    },
  ];

  // Benefits data
  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Trải nghiệm thực tế",
      description:
        "Làm việc với dự án thật, thách thức thật trong môi trường doanh nghiệp",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Mentoring chuyên gia",
      description:
        "Được hướng dẫn trực tiếp bởi các chuyên gia hàng đầu trong ngành",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Phát triển kỹ năng",
      description:
        "Nâng cao kỹ năng mềm, kỹ năng chuyên môn và khả năng thích ứng",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Networking",
      description:
        "Kết nối với các doanh nghiệp đối tác và mở rộng mạng lưới chuyên nghiệp",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Chứng nhận",
      description:
        "Nhận chứng chỉ hoàn thành từ doanh nghiệp và trường đại học",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Cơ hội việc làm",
      description: "Ưu tiên xét tuyển làm việc tại các doanh nghiệp đối tác",
    },
  ];

  // Career progression levels
  const careerLevels = [
    {
      level: "S1",
      title: "Sinh viên HKDN",
      duration: "2 tháng",
      objective: "Tiếp cận và làm quen với môi trường doanh nghiệp",
      features: [
        "Học tập cơ bản",
        "Thực hành dưới hướng dẫn",
        "Xây dựng mindset",
      ],
      result: "Hoàn thành chương trình đào tạo cơ bản",
    },
    {
      level: "S2",
      title: "Thực tập sinh",
      duration: "3-6 tháng",
      objective: "Thực hành chuyên sâu và phát triển kỹ năng chuyên môn",
      features: ["Dự án thực tế", "Mentoring 1:1", "Đánh giá định kỳ"],
      result: "Đạt năng lực thực tập sinh chuyên nghiệp",
    },
    {
      level: "S3",
      title: "Nhân viên Part-time",
      duration: "6-12 tháng",
      objective: "Đảm nhận trách nhiệm công việc và tạo ra giá trị thực tế",
      features: ["Công việc độc lập", "Quản lý dự án nhỏ", "Hỗ trợ team"],
      result: "Sẵn sàng cho vị trí nhân viên chính thức",
    },
    {
      level: "S4",
      title: "Nhân viên Full-time",
      duration: "Dài hạn",
      objective: "Phát triển sự nghiệp và thăng tiến trong tổ chức",
      features: [
        "Toàn quyền quyết định",
        "Phát triển team",
        "Strategic thinking",
      ],
      result: "Thành công trong sự nghiệp và lãnh đạo",
    },
  ];

  // Partner organizations (placeholder data)
  const partners = [
    "VNPT Group",
    "F Deli Company",
    "Einstein School",
    "Tech Corp",
    "Business Solutions",
    "Digital Innovation",
    "Smart Systems",
    "Growth Partners",
    "Excellence Training",
    "Future Leaders",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroStudents})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-45"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            Chương trình đặc biệt 2025
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Học Kỳ
            <br />
            <span className="text-gradient bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Doanh Nghiệp 2025
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Chương trình tạo cơ hội để sinh viên hòa mình vào môi trường doanh
            nghiệp thực tế, trải nghiệm công việc thật, dự án thật và thử thách
            thật.
          </p>

          <Button variant="hero" size="xl" className="mb-4">
            ĐĂNG KÝ NGAY
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <p className="text-sm opacity-75">
            Số lượng có hạn • Đăng ký sớm để đảm bảo suất
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <ArrowRight className="h-6 w-6 rotate-90" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 text-base px-4 py-2">
                Giới thiệu chương trình
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Cầu nối hiệu quả giữa sinh viên và doanh nghiệp
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Học Kỳ Doanh Nghiệp (HKDN) là chương trình đào tạo thực hành
                thực tế tại doanh nghiệp, tạo cầu nối hiệu quả giữa sinh viên –
                nhà trường – doanh nghiệp.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Chương trình mang đến cơ hội trải nghiệm môi trường làm việc
                chuyên nghiệp, phát triển kỹ năng thực tế và xây dựng mạng lưới
                quan hệ vững chắc.
              </p>
              <Button variant="cta" size="lg">
                Tìm hiểu thêm
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <img
                src={programIntro}
                alt="Sinh viên làm việc trong môi trường doanh nghiệp"
                className="rounded-2xl shadow-strong w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-accent">
                <Trophy className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2">
              Mục tiêu chương trình
            </Badge>
            <h2 className="text-4xl font-bold mb-6">5 Mục tiêu chính</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chương trình được thiết kế để đạt được những mục tiêu quan trọng
              nhất cho sự phát triển của sinh viên
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-[75rem] mx-auto">
            {objectives.map((objective, index) => (
              <Card
                key={index}
                className="flex-1 min-w-[300px] max-w-[400px] shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold leading-relaxed">
                        {objective}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2">
              Đối tượng tham gia
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Ai phù hợp với chương trình?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {targetAudience.map((audience, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 p-4 bg-card rounded-lg shadow-soft ${
                    index === targetAudience.length - 1
                      ? "md:col-span-2 mx-auto max-w-md"
                      : ""
                  }`}
                >
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0" />
                  <p className="text-lg">{audience}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Format Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 text-base px-4 py-2">
              Hình thức tổ chức
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Phương pháp đào tạo hiện đại
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">30% Lý thuyết</h3>
                  <p className="text-muted-foreground">
                    Định hướng, training và mentoring hàng tuần
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">70% Thực hành</h3>
                  <p className="text-muted-foreground">
                    Làm việc trực tiếp với dự án thực tế
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Hybrid</h3>
                  <p className="text-muted-foreground">
                    Kết hợp online và offline tại doanh nghiệp đối tác
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2">
              Dự án đã thực hiện
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Thành công qua từng dự án
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Khám phá những dự án thực tế mà sinh viên đã tham gia và hoàn
              thành xuất sắc
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group shadow-soft hover:shadow-strong transition-smooth overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/95 text-primary">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2">
              Thời lượng chương trình
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Lộ trình 8 tuần</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chương trình được chia thành 4 giai đoạn rõ ràng, từ định hướng
              đến hoàn thiện
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {phases.map((phase, index) => (
                <Card
                  key={index}
                  className="shadow-soft hover:shadow-medium transition-smooth relative"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <Badge
                          variant="outline"
                          className="mb-1 text-lg px-6 py-3"
                        >
                          {phase.weeks}
                        </Badge>
                        <h3 className="text-xl font-bold">{phase.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {phase.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {phase.activities.map((activity, actIndex) => (
                        <Badge
                          key={actIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {activity}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12 items-center">
            <div>
              <Badge className="mb-4 text-base px-4 py-2">
                Quyền lợi sinh viên
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Những giá trị bạn nhận được
              </h2>
              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-soft"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Progression Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2">
              Lộ trình thăng tiến
            </Badge>
            <h2 className="text-4xl font-bold mb-6">4 Cấp bậc phát triển</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Lộ trình rõ ràng giúp sinh viên phát triển từ người mới bắt đầu
              đến nhân viên chuyên nghiệp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerLevels.map((level, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-medium transition-smooth relative group"
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-2">
                      {level.level}
                    </div>
                    <h3 className="text-xl font-bold">{level.title}</h3>
                    <Badge variant="outline" className="mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {level.duration}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-muted-foreground uppercase tracking-wide">
                        Mục tiêu
                      </h4>
                      <p className="text-sm leading-relaxed">
                        {level.objective}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-muted-foreground uppercase tracking-wide">
                        Đặc điểm
                      </h4>
                      <ul className="space-y-1">
                        {level.features.map((feature, fIndex) => (
                          <li
                            key={fIndex}
                            className="text-sm flex items-center"
                          >
                            <CheckCircle2 className="h-3 w-3 text-success mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-muted-foreground uppercase tracking-wide">
                        Kết quả
                      </h4>
                      <p className="text-sm leading-relaxed font-medium">
                        {level.result}
                      </p>
                    </div>
                  </div>
                </CardContent>

                {index < careerLevels.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2">Đơn vị tổ chức</Badge>
            <h2 className="text-4xl font-bold mb-6">Đối tác và nhà tài trợ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chương trình được thực hiện với sự hợp tác của các doanh nghiệp và
              tổ chức hàng đầu
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-medium transition-smooth group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-smooth">
                    <Building2 className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </div>
                  <p className="text-sm font-medium">{partner}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Sẵn sàng bắt đầu hành trình của bạn?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Đừng bỏ lỡ cơ hội tham gia chương trình Học Kỳ Doanh Nghiệp 2025.
              <p>Đăng ký ngay hôm nay để đảm bảo suất học!</p>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl">
                ĐĂNG KÝ NGAY
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Tải thông tin chi tiết
              </Button>
            </div>

            <div className="mt-8 flex justify-center items-center space-x-8 text-sm opacity-75">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1" />
                Chất lượng cao
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                Số lượng có hạn
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Đăng ký sớm
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Học Kỳ Doanh Nghiệp 2025
            </h3>
            <p className="text-background/70 mb-6 max-w-2xl mx-auto">
              Cầu nối hiệu quả giữa sinh viên – nhà trường – doanh nghiệp. Trải
              nghiệm thực tế, phát triển bền vững.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-background/60">
              <span>© 2025 HKDN Program</span>
              <span>•</span>
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
