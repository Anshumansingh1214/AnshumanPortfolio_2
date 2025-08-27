import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import foodAppImage from "@/assets/food-app-mockup.jpg";
import ecommerceImage from "@/assets/ecommerce-mockup.jpg";
import dashboardImage from "@/assets/dashboard-mockup.jpg";
import uiKitImage from "@/assets/ui-kit-mockup.jpg";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Sales Analysis Dashboard",
      description:
        "Interactive Power BI dashboard with comprehensive KPIs and advanced DAX measures for sales performance tracking.",
      image: dashboardImage,
      tags: ["Power BI", "Data Analytics", "DAX", "KPIs"],
      problem:
        "Need for real-time sales insights and performance tracking across multiple business units.",
      solution:
        "Developed interactive dashboard with advanced DAX measures, dynamic filtering, and comprehensive visualizations.",
      results: [
        "Real-time sales insights",
        "Improved decision making",
        "Enhanced data-driven strategies",
      ],
    },
    {
      id: 2,
      title: "Pharma Website",
      description:
        "Full-stack web application with comprehensive user management and order processing system for pharmaceutical industry.",
      image: ecommerceImage,
      tags: ["Full-Stack", "MERN Stack", "User Management", "Order Processing"],
      problem:
        "Need for a comprehensive pharmaceutical platform with user authentication and order management.",
      solution:
        "Built a full-stack application using MERN stack with secure user authentication and efficient order processing.",
      results: [
        "Streamlined order management",
        "Secure user authentication",
        "Improved operational efficiency",
      ],
    },
    {
      id: 3,
      title: "Wanderlust Travel Review Website",
      description:
        "MERN stack travel review platform created during professional training with user reviews and travel recommendations.",
      image: foodAppImage,
      tags: ["MERN Stack", "Travel", "Reviews", "Training Project"],
      problem:
        "Need for a platform where travelers can share experiences and discover new destinations.",
      solution:
        "Developed a comprehensive travel review platform with user authentication, review system, and destination discovery.",
      results: [
        "Enhanced travel discovery",
        "Community-driven reviews",
        "Improved user engagement",
      ],
    },
    {
      id: 4,
      title: "Frontend Projects Collection",
      description:
        "Collection of frontend projects including Portfolio Page, Temperature Converter, and Netflix Clone showcasing diverse skills.",
      image: uiKitImage,
      tags: ["Frontend", "ReactJS", "JavaScript", "Portfolio"],
      problem:
        "Demonstrating versatility in frontend development across different project types and complexities.",
      solution:
        "Created multiple frontend projects showcasing different skills from utility apps to entertainment platforms.",
      results: [
        "Demonstrated versatility",
        "Enhanced frontend skills",
        "Professional portfolio showcase",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of my recent work showcasing different aspects of UI/UX
            design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="shadow-card hover:shadow-hover transition-all duration-500 overflow-hidden group"
            >
              <div
                className={`grid lg:grid-cols-2 gap-0 ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <CardContent className="p-8 flex flex-col justify-center space-y-6">
                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Problem & Solution */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Problem
                      </h4>
                      <p className="text-muted-foreground">{project.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Solution
                      </h4>
                      <p className="text-muted-foreground">{project.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Results
                      </h4>
                      <ul className="space-y-1">
                        {project.results.map((result, idx) => (
                          <li
                            key={idx}
                            className="text-muted-foreground flex items-center"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
