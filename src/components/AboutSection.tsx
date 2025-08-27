import { GraduationCap, Heart, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating meaningful digital experiences that make a difference
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I am a passionate UI/UX Designer and Full-Stack Developer with strong problem-solving 
              skills and proven experience in building impactful digital solutions. I combine 
              creativity with technical expertise to design user-friendly, scalable applications.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              My journey spans across web development, data analytics, and user experience design. 
              I've excelled in multiple hackathons and competitions, demonstrating my ability to 
              deliver innovative solutions under pressure while maintaining high code quality and 
              user-centered design principles.
            </p>
            
            <div className="flex items-center space-x-4 text-primary">
              <GraduationCap className="h-5 w-5" />
              <span className="font-medium">Full-Stack Developer & UI/UX Designer</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <Card className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-2 rounded-lg">
                    <Heart className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">My Passion</h3>
                    <p className="text-muted-foreground">
                      Building scalable applications and intuitive user experiences that solve real-world problems
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-2 rounded-lg">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">My Goal</h3>
                    <p className="text-muted-foreground">
                      To excel as a Full-Stack Developer and UI/UX Designer, creating innovative solutions that drive business growth
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};