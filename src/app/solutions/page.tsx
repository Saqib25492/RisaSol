"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Package, Truck, Settings, Target, Zap } from "lucide-react";
import Link from "next/link";

const Solutions = () => {
  const solutions = [
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Inventory Optimization",
      description: "AI-driven demand forecasting and automated reordering to minimize stockouts and reduce carrying costs.",
      features: ["Demand Forecasting", "Safety Stock Optimization", "Automated Reordering", "ABC Analysis"]
    },
    {
      icon: <Package className="w-8 h-8 text-primary" />,
      title: "Supply Chain Analytics",
      description: "Real-time visibility into your entire supply chain with actionable insights and performance metrics.",
      features: ["Real-time Dashboards", "Performance KPIs", "Supplier Scorecards", "Risk Monitoring"]
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Procurement Planning",
      description: "Streamline your procurement process with intelligent sourcing recommendations and vendor management.",
      features: ["Vendor Management", "Purchase Planning", "Cost Analysis", "Contract Management"]
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Warehouse Management",
      description: "Optimize warehouse operations with smart layout planning and workflow automation.",
      features: ["Layout Optimization", "Pick Path Planning", "Inventory Tracking", "Labor Management"]
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Quality Control",
      description: "Implement comprehensive quality management systems to maintain product standards.",
      features: ["Quality Metrics", "Defect Tracking", "Supplier Quality", "Compliance Monitoring"]
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Process Automation",
      description: "Automate routine tasks and workflows to increase efficiency and reduce human error.",
      features: ["Workflow Automation", "Document Processing", "Alert Systems", "Integration APIs"]
    }
  ];

  const customerTypes = [
    {
      title: "For Manufacturers",
      description: "End-to-end visibility from raw materials to finished goods.",
      solutions: ["Production Planning", "Material Requirements", "Quality Control", "Supplier Management"]
    },
    {
      title: "For Distributors",
      description: "Optimize inventory across multiple locations and channels.",
      solutions: ["Multi-location Inventory", "Order Management", "Logistics Optimization", "Customer Analytics"]
    },
    {
      title: "For Retailers",
      description: "Perfect store-level inventory and customer satisfaction.",
      solutions: ["Demand Forecasting", "Store Replenishment", "Seasonal Planning", "Promotions Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle relative">


      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete <span className="bg-gradient-primary bg-clip-text text-transparent">Supply Chain</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From inventory optimization to predictive analytics, we provide the tools you need to build resilient, efficient supply chains.
            </p>
            <Button asChild size="lg" className="bg-gradient-primary">
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      {solution.icon}
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Types */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions by Business Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {customerTypes.map((type, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">{type.title}</CardTitle>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.solutions.map((solution, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Supply Chain?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of companies already using ChainFlow to optimize their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
};

export default Solutions;
