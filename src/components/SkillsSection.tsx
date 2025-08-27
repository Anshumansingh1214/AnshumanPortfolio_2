import { Figma, Palette, Smartphone, Monitor, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const SkillsSection = () => {
  const skills = [
    {
      category: "Programming & Development",
      icon: Monitor,
      items: ["Python", "SQL", "R Programming", "C++", "Java"]
    },
    {
      category: "Web Development",
      icon: Smartphone,
      items: ["HTML", "CSS", "JavaScript", "ReactJS", "MERN Stack"]
    },
    {
      category: "Data & Analytics",
      icon: Figma,
      items: ["DSA", "MS Excel", "NumPy", "Pandas", "Power BI", "DAX"]
    },
    {
      category: "Databases & Cloud",
      icon: Users,
      items: ["MongoDB (Atlas)", "AWS RDS", "Database Design", "Cloud Computing"]
    },
    {
      category: "Professional Skills",
      icon: Lightbulb,
      items: ["Data Analysis & Visualization", "Full-Stack Development", "Problem Solving", "Critical Thinking"]
    },
    {
      category: "Soft Skills",
      icon: Palette,
      items: ["Leadership", "Teamwork", "Communication", "Project Management", "UI/UX Design"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for creating exceptional user experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={skill.category}
                className="shadow-card hover:shadow-hover transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="ml-4 text-lg font-semibold text-foreground">
                      {skill.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <div 
                        key={item}
                        className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary/20 mr-3 group-hover:bg-primary transition-colors duration-300" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Skills Progress */}
        <div className="mt-16 bg-gradient-secondary p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Proficiency Levels
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: "Python", level: 90 },
              { skill: "ReactJS", level: 85 },
              { skill: "Power BI", level: 88 },
              { skill: "MongoDB", level: 82 },
              { skill: "JavaScript", level: 87 },
              { skill: "Data Analysis", level: 85 }
            ].map((item) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};