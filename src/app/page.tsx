"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, BarChart3, Zap, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/hero-supply-chain.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle relative">
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-subtle" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float animate-delay-500" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <Badge variant="secondary" className="w-fit">
                  Supply Chain Consultancy • Visibility • Execution
                </Badge>

                <h1 className="hero-title animate-fade-in-up">
                  Smarter <span className="text-gradient">Supply Chains</span>{" "}
                  for Startups & Growing Businesses
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up">
                  We help teams increase supply chain visibility, reduce
                  operational chaos, and build scalable systems that support
                  growth. Practical strategy + hands-on execution.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
                  <Button
                    asChild
                    size="lg"
                    className="text-lg px-8 py-6 btn-glow"
                  >
                    <Link href="#contact">
                      Book a Free Discovery Call{" "}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 hover-lift"
                  >
                    <Link href="#services">View Services</Link>
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-muted-foreground animate-fade-in">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span>Clear scope & deliverables</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span>Execution support included</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span>Simple engagement options</span>
                  </div>
                </div>
              </div>

              <div className="relative animate-slide-in-right">
                <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-lg rounded-xl animate-pulse-glow" />
                <Image
                  src={heroImage}
                  alt="Supply Chain visibility and analytics"
                  width={600}
                  height={400}
                  className="relative w-full rounded-xl shadow-elegant hover-lift"
                  priority
                />

                <div className="absolute -bottom-6 -right-6 glass-effect p-6 rounded-lg shadow-lg animate-scale-in">
                  <p className="text-sm font-medium text-white">
                    Visibility → Better Decisions
                  </p>
                  <p className="text-xs text-white/80">
                    Faster, more predictable operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section-padding bg-background">
          <div className="container-center">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Services built for{" "}
                <span className="text-gradient">real outcomes</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose a focused engagement or combine services. Everything is
                designed to improve visibility, reduce cost, and strengthen
                execution within weeks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart3 className="w-8 h-8 text-primary" />,
                  title: "Supply Chain Visibility & Diagnostics",
                  description:
                    "Audit your current operations and create a visibility framework to eliminate blind spots.",
                  bullets: [
                    "Process mapping",
                    "Bottleneck & risk assessment",
                    "KPI framework + priority roadmap",
                  ],
                },
                {
                  icon: <Zap className="w-8 h-8 text-primary" />,
                  title: "Inventory & Demand Optimization",
                  description:
                    "Reduce excess inventory and prevent stockouts through smarter planning and controls.",
                  bullets: [
                    "Safety stock strategy",
                    "Reorder points & SKU rationalization",
                    "Forecasting improvements",
                  ],
                },
                {
                  icon: <Shield className="w-8 h-8 text-primary" />,
                  title: "Process Design & Execution Support",
                  description:
                    "Build scalable operating systems with SOPs, ownership, and reporting that your team can run.",
                  bullets: [
                    "SOPs + operating cadence",
                    "Vendor & fulfillment workflows",
                    "Dashboards + reporting automation",
                  ],
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="feature-card group animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-5">
                      {service.description}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Button asChild variant="outline" size="lg" className="hover-lift">
                <Link href="#contact">Talk to Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section-padding">
          <div className="container-center">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                A simple process that{" "}
                <span className="text-gradient">works</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Clear steps, clear deliverables, and measurable progress.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Diagnose",
                  description:
                    "We assess your current state and identify the biggest constraints to visibility and performance.",
                },
                {
                  step: "02",
                  title: "Design",
                  description:
                    "We build an actionable roadmap with KPIs, owners, and a realistic timeline your team can execute.",
                },
                {
                  step: "03",
                  title: "Deliver",
                  description:
                    "We implement alongside your team, track results, and hand over a system that keeps running.",
                },
              ].map((p, idx) => (
                <Card
                  key={idx}
                  className="hover-lift glass-effect animate-fade-in-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="text-sm font-semibold text-muted-foreground">
                      {p.step}
                    </div>
                    <div className="mt-2 text-xl font-bold">{p.title}</div>
                    <p className="mt-3 text-muted-foreground">{p.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF (optional - keep it simple and honest) */}
        <section id="proof" className="section-padding bg-background">
          <div className="container-center">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                What you can expect
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                If you don’t have metrics yet, use realistic expectations. Swap
                this section with testimonials once you have them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Better visibility",
                  description:
                    "You’ll know what’s happening across suppliers, inventory, and fulfillment—without chasing updates.",
                },
                {
                  title: "Lower operational cost",
                  description:
                    "Reduce waste from stockouts, expediting, and over-ordering by tightening controls and planning.",
                },
                {
                  title: "Scalable systems",
                  description:
                    "Repeatable processes, KPIs, and ownership so the operation runs smoothly as you grow.",
                },
              ].map((x, i) => (
                <Card
                  key={i}
                  className="hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="text-xl font-bold">{x.title}</div>
                    <p className="mt-3 text-muted-foreground">{x.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-padding">
          <div className="container-center">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">RisaSol</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                RisaSol is a hands-on supply chain consultancy focused on
                clarity, visibility, and execution. We work with startups and
                growing businesses that need practical improvements—not
                theoretical reports.
              </p>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { k: "Fast", v: "Weeks, not months" },
                  { k: "Practical", v: "Deliverables you can use" },
                  { k: "Accountable", v: "Clear owners and timelines" },
                ].map((x, i) => (
                  <Card key={i} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="text-lg font-semibold">{x.k}</div>
                      <div className="text-muted-foreground mt-1">{x.v}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="section-padding relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float animate-delay-500" />

          <div className="container mx-auto text-center max-w-4xl relative z-10">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Book a Free{" "}
                <span className="text-white">Discovery Call</span>
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Tell us what’s breaking in your supply chain. We’ll suggest next
                steps and a practical engagement path.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-10 py-6 bg-white text-primary hover:bg-white/90 shadow-elegant hover-lift"
                >
                  {/* Replace with your real email */}
                  <Link href="mailto:hello@yourdomain.com">
                    Email Us <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-6 border-white/30 text-white bg-transparent hover:bg-white/10 hover-lift"
                >
                  {/* Replace with your Calendly link if you have one */}
                  <Link href="https://calendly.com/your-link">
                    Book via Calendly
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-white/70 mt-8">
                Replace the email + Calendly link with your real contact details
                • Add WhatsApp if preferred
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
