"use client";

import ParticlesBackground from "@/app/components/particlesBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Shield,
  Zap,
  BarChart3,
  Users,
  CheckCircle,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/hero-supply-chain.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle relative">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-subtle"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float animate-delay-500"></div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <Badge
                  variant="secondary"
                  className="w-fit animate-scale-in animate-delay-200"
                >
                  🚀 Trusted by Growing Businesses
                </Badge>
                <h1 className="hero-title animate-fade-in-up animate-delay-300">
                  Smarter <span className="text-gradient">Supply Chains</span>{" "}
                  for Growing Businesses
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up animate-delay-500">
                  Transform your supply chain with AI-powered insights,
                  real-time visibility, and intelligent automation. Reduce costs
                  while improving service levels.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-700">
                  <Button
                    asChild
                    size="lg"
                    variant="default"
                    className="text-lg px-8 py-6 btn-glow animate-pulse-glow"
                  >
                    <Link href="/contact">Schedule a Demo</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 hover-lift"
                  >
                    <Link href="/solutions">View Solutions</Link>
                  </Button>
                </div>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground animate-fade-in animate-delay-1000">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-secondary animate-bounce-gentle" />
                    <span>Free 30-day trial</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-secondary animate-bounce-gentle animate-delay-200" />
                    <span>No Initial Charges</span>
                  </div>
                </div>
              </div>

              <div className="relative animate-slide-in-right animate-delay-300">
                <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-lg rounded-xl animate-pulse-glow"></div>
                <Image
                  src={heroImage}
                  alt="Supply Chain Dashboard"
                  width={600}
                  height={400}
                  className="relative w-full rounded-xl shadow-elegant hover-lift"
                />
                <div className="absolute -bottom-6 -right-6 glass-effect p-6 rounded-lg shadow-lg animate-scale-in animate-delay-1000">
                  <p className="text-sm font-medium text-white">
                    Cost Reduction
                  </p>
                  <p className="text-xs text-white/80">
                    Average customer savings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-background">
          <div className="container-center">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Everything You Need to{" "}
                <span className="text-gradient">Optimize</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From inventory management to predictive analytics, RisaSol
                provides comprehensive tools for modern supply chain management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart3 className="w-8 h-8 text-primary" />,
                  title: "AI-Powered Analytics",
                  description:
                    "Make data-driven decisions with advanced analytics and machine learning insights.",
                },
                {
                  icon: <Zap className="w-8 h-8 text-primary" />,
                  title: "Real-Time Visibility",
                  description:
                    "Monitor your entire supply chain in real-time with instant alerts and notifications.",
                },
                {
                  icon: <Shield className="w-8 h-8 text-primary" />,
                  title: "Risk Management",
                  description:
                    "Identify and mitigate supply chain risks before they impact your business.",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="feature-card text-center group animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <CardHeader>
                    <div className="flex justify-center mb-4 group-hover:animate-bounce-gentle">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section 
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
          <div className="container-center relative z-10">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Trusted by Industry Leaders</h2>
              <div className="flex justify-center items-center space-x-2 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-scale-in" style={{ animationDelay: `${star * 100}ms` }} />
                ))}
                <span className="ml-2 text-muted-foreground animate-fade-in animate-delay-500">4.9/5 from 200+ reviews</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "ChainFlow reduced our inventory costs by 40% in just 6 months. The ROI was immediate.",
                  author: "Sarah Johnson",
                  role: "Supply Chain Director",
                  company: "TechCorp Manufacturing",
                },
                {
                  quote: "Finally, a solution that grows with us. The analytics are game-changing.",
                  author: "Michael Chen",
                  role: "Operations Manager",
                  company: "FreshMart Groceries",
                },
                {
                  quote: "Best investment we've made. Our stockouts dropped to almost zero.",
                  author: "Lisa Rodriguez",
                  role: "Logistics Head",
                  company: "MedSupply Distribution",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="hover-lift glass-effect group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="text-primary text-4xl mb-4 group-hover:animate-bounce-gentle">"</div>
                      <p className="text-foreground text-lg italic leading-relaxed">{testimonial.quote}</p>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      */}
        {/* Stats Section 
        <section className="section-padding bg-background">
          <div className="container-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Companies Served" },
                { number: "35%", label: "Average Cost Reduction" },
                { number: "99.5%", label: "System Uptime" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div key={index} className="group animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="text-4xl md:text-6xl font-bold text-gradient mb-2 group-hover:animate-bounce-gentle font-playfair">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        */}


         

        
        {/* Marketing & Branding Section */}
        {false && ( 
        <section
          id="marketing-branding"
          className="relative overflow-hidden section-padding"
        >
          {/* soft background wash */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[hsl(var(--muted)/0.35)] via-transparent to-transparent" />

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: copy + mini-cards */}
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Marketing & Branding Intelligence
                </h2>
                <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
                  Translate operational strengths into clear market positioning
                  and credible brand signals.
                </p>

                {/* Buckets */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {/* Market Positioning */}
                  <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 shadow-sm hover-lift animate-fade-in-up">
                    <h3 className="text-base font-semibold">
                      Market Positioning
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                        ICP & segments
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                        Messaging map
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                        Competitive snapshot
                      </li>
                    </ul>
                  </div>

                  {/* Brand System */}
                  <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 shadow-sm hover-lift animate-fade-in-up animate-delay-200">
                    <h3 className="text-base font-semibold">Brand System</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                        Visual identity starter kit
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                        Voice & tone
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                        Website messaging
                      </li>
                    </ul>
                  </div>

                  {/* GTM Ops */}
                  <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 shadow-sm hover-lift animate-fade-in-up animate-delay-300">
                    <h3 className="text-base font-semibold">GTM Ops</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                        Landing flow
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                        Content plan (3–5)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                        Launch checklist
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right: visual + mini checklist */}
              <div className="relative animate-fade-in-up lg:animate-delay-200">
                {/* glow */}
                <div className="absolute -inset-6 -z-10 rounded-3xl blur-3xl opacity-40 bg-[radial-gradient(45rem_30rem_at_40%_20%,hsl(var(--primary)/0.35),transparent)]" />

                {/* Illustration container (replace image as needed) */}
                <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-elegant hover-lift">
                  <Image
                    src="/images/M_Section.png"
                    alt="Marketing and Branding Intelligence illustration"
                    width={600}
                    height={450}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Overlapping mini card */}
                <div className="w-full max-w-xs rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--popover))] p-4 shadow-lg -mt-6 ml-auto mr-2 animate-fade-in-up">
                  <div className="text-sm font-semibold">
                    Deliverables (2–3 weeks)
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                      Positioning & messaging brief
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                      Visual identity starter kit
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                      Launch checklist
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Motion safety */}
          <style jsx>{`
            @media (prefers-reduced-motion: reduce) {
              #marketing-branding .animate-fade-in,
              #marketing-branding .animate-fade-in-up {
                animation: none !important;
              }
              #marketing-branding .hover-lift {
                transform: none !important;
              }
            }
          `}</style>
        </section>
      )}

        {/* CTA Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero"></div>
          <div className="absolute inset-0 bg-gradient-hero"></div>
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float animate-delay-500"></div>

          <div className="container mx-auto text-center max-w-4xl relative z-10">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Ready to Transform Your{" "}
                <span className="text-white">Supply Chain?</span>
              </h2>
              <p className="text-xl text-white/90 mb-12 leading-relaxed">
                Join hundreds of companies already using RisaSol to optimize
                their operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-delay-300">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-10 py-6 bg-white text-primary hover:bg-white/90 shadow-elegant hover-lift"
                >
                  <Link href="/contact">
                    Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                {/* 
                <Button asChild variant="outline" size="lg" className="text-lg px-10 py-6 border-white/30 text-white bg-teal-800 hover:bg-white/10 hover-lift">
                  <Link href="/resources">View Case Studies</Link>
                </Button>
                */}
              </div>
              <p className="text-sm text-white/70 mt-8 animate-fade-in animate-delay-700">
                No initial charges • No setup fees • Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
