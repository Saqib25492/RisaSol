"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, Utensils, Heart, ShoppingCart, Truck, Wrench } from "lucide-react";
import Link from "next/link";

const Industries = () => {
  const industries = [
    {
      icon: <Factory className="w-12 h-12 text-primary" />,
      title: "Manufacturing",
      description: "Optimize production schedules, manage raw materials, and streamline supplier relationships.",
      challenges: ["Complex Bill of Materials", "Production Planning", "Quality Control", "Supplier Management"],
      solutions: ["Real-time Production Tracking", "Material Requirements Planning", "Quality Management Systems", "Supplier Scorecards"],
      caseStudy: "35% reduction in production downtime for automotive parts manufacturer"
    },
    {
      icon: <Utensils className="w-12 h-12 text-primary" />,
      title: "Food & Beverage",
      description: "Ensure freshness, compliance, and efficient cold chain management.",
      challenges: ["Perishable Inventory", "Compliance Requirements", "Cold Chain Management", "Seasonal Demand"],
      solutions: ["Expiry Date Tracking", "Temperature Monitoring", "Batch Traceability", "Demand Forecasting"],
      caseStudy: "50% reduction in food waste for regional grocery chain"
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Healthcare",
      description: "Maintain critical inventory levels while ensuring regulatory compliance.",
      challenges: ["Critical Stock Levels", "Regulatory Compliance", "Lot Tracking", "Emergency Supplies"],
      solutions: ["Automated Reordering", "Compliance Documentation", "Lot Tracking", "Emergency Inventory"],
      caseStudy: "99.8% availability of critical medical supplies during peak demand"
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-primary" />,
      title: "E-commerce",
      description: "Scale fulfillment operations and optimize inventory across multiple channels.",
      challenges: ["Multi-channel Inventory", "Fast Fulfillment", "Returns Management", "Seasonal Peaks"],
      solutions: ["Unified Inventory View", "Fulfillment Optimization", "Returns Processing", "Demand Planning"],
      caseStudy: "40% improvement in order fulfillment speed for online retailer"
    },
    {
      icon: <Truck className="w-12 h-12 text-primary" />,
      title: "Logistics & Transportation",
      description: "Optimize routes, manage fleet resources, and improve delivery performance.",
      challenges: ["Route Optimization", "Fleet Management", "Delivery Tracking", "Cost Control"],
      solutions: ["Dynamic Routing", "Vehicle Maintenance", "GPS Tracking", "Cost Analytics"],
      caseStudy: "25% reduction in fuel costs through optimized routing"
    },
    {
      icon: <Wrench className="w-12 h-12 text-primary" />,
      title: "Industrial Equipment",
      description: "Manage spare parts inventory and preventive maintenance schedules.",
      challenges: ["Spare Parts Management", "Maintenance Scheduling", "Equipment Downtime", "Service Levels"],
      solutions: ["Predictive Maintenance", "Parts Optimization", "Service Scheduling", "Downtime Tracking"],
      caseStudy: "60% reduction in unplanned equipment downtime"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle relative">

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industry-Specific <span className="bg-gradient-primary bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We understand that every industry has unique supply chain challenges. Our solutions are tailored to meet the specific needs of your sector.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      {industry.icon}
                      <CardTitle className="text-2xl">{industry.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{industry.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Common Challenges</h4>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-2 h-2 bg-destructive rounded-full mr-2"></span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Our Solutions</h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-accent p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-accent-foreground">Success Story</h4>
                      <p className="text-sm text-accent-foreground">{industry.caseStudy}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Proven Results Across Industries</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Companies Served" },
                { number: "35%", label: "Average Cost Reduction" },
                { number: "99.5%", label: "System Uptime" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Industry-Specific Supply Chain?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our solutions can address your unique industry challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary">
                <Link href="/contact">Schedule Industry Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources">Download Industry Reports</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Industries;
