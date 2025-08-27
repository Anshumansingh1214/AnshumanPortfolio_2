import { Mail, Linkedin, Github, ExternalLink, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anshrajput1214@gmail.com",
      href: "mailto:anshrajput1214@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "7001603226",
      href: "tel:7001603226",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anshuman-singh-15b738258/",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-gray-800",
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      href: "#",
      color: "hover:text-blue-500",
    },
    {
      icon: ExternalLink,
      label: "Resume",
      href: "#",
      color: "hover:text-green-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities and creative projects. 
            Let's connect and create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-6">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((contact) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={contact.label}
                        href={contact.href}
                        className="flex items-center space-x-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 group"
                      >
                        <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors duration-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-primary-foreground/60">{contact.label}</p>
                          <p className="font-medium">{contact.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary-foreground mb-6">
                  Find Me Online
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 group"
                      >
                        <Icon className="h-5 w-5 text-primary-foreground group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-primary-foreground font-medium">{social.label}</span>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-glow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Ready to Start a Project?
                </h3>
                <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                  I'm open to exciting opportunities in UI/UX Design and Full-Stack Development. 
                  Let's connect and discuss how I can contribute to your team's success with 
                  innovative solutions and technical expertise.
                </p>

                {/* Email Button */}
                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-white text-primary hover:bg-white/90 shadow-hover transition-all duration-300"
                    onClick={() => (window.location.href = "mailto:anshrajput1214@gmail.com")}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send me an Email
                  </Button>
                </div>

                {/* Resume Button */}
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-white/30 text-primary-foreground hover:bg-white/10 mt-4"
                >
                  Download My Resume
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary-foreground mb-2">4+</div>
                  <div className="text-primary-foreground/80 text-sm">Projects Completed</div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary-foreground mb-2">100%</div>
                  <div className="text-primary-foreground/80 text-sm">Client Satisfaction</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Anshuman Singh. Designed with passion and technical expertise.
          </p>
        </div>
      </div>
    </section>
  );
};
