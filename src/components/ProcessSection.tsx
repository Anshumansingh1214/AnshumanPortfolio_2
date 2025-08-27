import { Search, Target, Lightbulb, Smartphone, TestTube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ProcessSection = () => {
  const processSteps = [
    {
      icon: Search,
      title: "Empathize",
      description: "Understanding user needs through research, interviews, and observation to build empathy and uncover insights.",
      methods: ["User Interviews", "Surveys", "Field Studies", "Persona Development"]
    },
    {
      icon: Target,
      title: "Define", 
      description: "Synthesizing research findings to clearly articulate the core problem and define the design challenge.",
      methods: ["Problem Statements", "Point of View", "Journey Maps", "User Stories"]
    },
    {
      icon: Lightbulb,
      title: "Ideate",
      description: "Generating creative solutions through brainstorming and exploring various design possibilities.",
      methods: ["Brainstorming", "Sketching", "Mind Mapping", "Design Studio"]
    },
    {
      icon: Smartphone,
      title: "Prototype",
      description: "Creating tangible representations of ideas to test and iterate on design concepts quickly.",
      methods: ["Wireframes", "Mockups", "Interactive Prototypes", "Design Systems"]
    },
    {
      icon: TestTube,
      title: "Test",
      description: "Validating designs with real users to gather feedback and continuously improve the solution.",
      methods: ["Usability Testing", "A/B Testing", "Feedback Analysis", "Iteration"]
    }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            My Design Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A human-centered approach to solving complex problems through design thinking methodology
          </p>
        </div>
        
        {/* Process Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-primary opacity-30" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={step.title}
                  className="shadow-card hover:shadow-hover transition-all duration-300 group relative"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-secondary p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    <div className="space-y-1">
                      {step.methods.map((method) => (
                        <div 
                          key={method}
                          className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full inline-block mr-1 mb-1"
                        >
                          {method}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Process Philosophy */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-secondary shadow-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Design Philosophy
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe that great design is born from deep understanding of user needs, 
                combined with creative problem-solving and iterative refinement. Every project 
                is an opportunity to create meaningful impact through thoughtful, user-centered design.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};