import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="UX Designer Workspace"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 animate-fade-in">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Anshuman Singh
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto">
            UI/UX Designer | Full-Stack Developer crafting scalable digital
            solutions with creativity and technical expertise
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>7001603226</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>anshrajput1214@gmail.com</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            {/* Resume Download */}
            <a
              href="https://drive.google.com/uc?export=download&id=1fhWBK2uI6IwaqXBwZmRLp0oaV_RqoYng"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-card text-foreground hover:bg-card/90 shadow-hover transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>

            {/* LinkedIn */}
            <Button
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black/10"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/anshuman-singh-15b738258/",
                  "_blank"
                )
              }
            >
              LinkedIn Profile
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-primary-foreground/60" />
          </div>
        </div>
      </div>
    </section>
  );
};
