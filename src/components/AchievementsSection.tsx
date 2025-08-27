import { Trophy, Award, Medal, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "Pharmathon Winner",
      description: "1st Rank at Pharmathon, Chandigarh University",
      year: "2023",
      icon: Trophy,
      color: "text-yellow-500",
      category: "Hackathon"
    },
    {
      id: 2,
      title: "E-Suraksha Hackathon",
      description: "Top 10 Finalist in National Level Competition",
      year: "2023",
      icon: Award,
      color: "text-blue-500",
      category: "National"
    },
    {
      id: 3,
      title: "E-Suraksha Finalist",
      description: "Finalist at E-Suraksha Hackathon National Level",
      year: "2024",
      icon: Medal,
      color: "text-purple-500",
      category: "National"
    },
    {
      id: 4,
      title: "Galaxy Gambit",
      description: "2nd Place at CUAC Competition",
      year: "2nd Year",
      icon: Award,
      color: "text-silver-500",
      category: "University"
    },
    {
      id: 5,
      title: "Chase The Code 1.0",
      description: "3rd Place in Coding Competition",
      year: "1st Year",
      icon: Medal,
      color: "text-bronze-500",
      category: "Coding"
    },
    {
      id: 6,
      title: "Quiz Combat Champion",
      description: "1st Place in Quiz Competition",
      year: "2nd Year",
      icon: Trophy,
      color: "text-gold-500",
      category: "Academic"
    },
    {
      id: 7,
      title: "Sports Champion",
      description: "Winner in Relay & Tug of War",
      year: "University",
      icon: Target,
      color: "text-green-500",
      category: "Sports"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A track record of excellence in competitions, hackathons, and academic pursuits
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={achievement.id}
                className="shadow-card hover:shadow-hover transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`h-6 w-6 text-primary-foreground`} />
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {achievement.category}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {achievement.year}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">7+</div>
              <div className="text-sm opacity-90">Major Achievements</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-secondary">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-foreground mb-2">3</div>
              <div className="text-sm text-muted-foreground">National Level</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-secondary">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-foreground mb-2">4</div>
              <div className="text-sm text-muted-foreground">1st Positions</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">2+</div>
              <div className="text-sm opacity-90">Years Active</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};