import ParticlesBackground from "@/app/components/particlesBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle relative">


      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">ChainFlow</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're a team of supply chain experts and technologists building the future of intelligent logistics.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in 2023, ChainFlow emerged from a simple observation: supply chains are the backbone of modern business, yet most companies still rely on outdated tools and manual processes.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our founders, with over 20 years of combined experience at companies like Amazon, FedEx, and SAP, saw an opportunity to democratize enterprise-grade supply chain intelligence for growing businesses.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Stanford Alumni</Badge>
                  <Badge variant="secondary">Y Combinator S23</Badge>
                  <Badge variant="secondary">SOC 2 Certified</Badge>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-elegant p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">Our Vision</h3>
                <p className="text-muted-foreground text-center">
                  "Every business, regardless of size, should have access to world-class supply chain intelligence that scales with their growth."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "CEO & Co-Founder",
                  bio: "Former Amazon Supply Chain Director. Stanford MBA.",
                  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                },
                {
                  name: "Marcus Rodriguez",
                  role: "CTO & Co-Founder",
                  bio: "Ex-FedEx Tech Lead. MIT Computer Science.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                },
                {
                  name: "Dr. Emily Watson",
                  role: "Head of Analytics",
                  bio: "Former SAP Principal Scientist. PhD Operations Research.",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
                }
              ].map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Transparency",
                  description: "We believe in clear, honest communication with our clients and within our team."
                },
                {
                  title: "Innovation",
                  description: "We constantly push the boundaries of what's possible in supply chain technology."
                },
                {
                  title: "Partnership",
                  description: "Your success is our success. We're committed to growing together with our clients."
                }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default About;