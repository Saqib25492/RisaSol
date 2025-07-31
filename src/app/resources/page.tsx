"use client";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

const Resources = () => {
  const blogPosts = [
    {
      title: "The Future of Supply Chain Automation in 2024",
      excerpt: "Exploring how AI and machine learning are transforming modern supply chains and what businesses need to know.",
      author: "Sarah Chen",
      date: "December 15, 2024",
      category: "Technology",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=300&fit=crop"
    },
    {
      title: "5 Common Supply Chain Mistakes That Cost Small Businesses",
      excerpt: "Learn from the most frequent pitfalls that can derail your supply chain efficiency and how to avoid them.",
      author: "Marcus Rodriguez",
      date: "December 10, 2024",
      category: "Best Practices",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=300&fit=crop"
    },
    {
      title: "How to Choose the Right 3PL Partner",
      excerpt: "A comprehensive guide to evaluating third-party logistics providers and making the right choice for your business.",
      author: "Dr. Emily Watson",
      date: "December 5, 2024",
      category: "Strategy",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=300&fit=crop"
    },
    {
      title: "Inventory Forecasting Strategies for E-commerce",
      excerpt: "Advanced techniques for predicting demand and optimizing inventory levels in the fast-paced e-commerce environment.",
      author: "Sarah Chen",
      date: "November 28, 2024",
      category: "E-commerce",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop"
    },
    {
      title: "Sustainability in Supply Chain Management",
      excerpt: "How to build environmentally responsible supply chains that reduce costs and improve brand reputation.",
      author: "Marcus Rodriguez",
      date: "November 20, 2024",
      category: "Sustainability",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=300&fit=crop"
    },
    {
      title: "Real-time Visibility: The Key to Supply Chain Resilience",
      excerpt: "Why real-time data and visibility are essential for building resilient supply chains in uncertain times.",
      author: "Dr. Emily Watson",
      date: "November 15, 2024",
      category: "Technology",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop"
    }
  ];

  const caseStudies = [
    {
      title: "TechCorp: 40% Reduction in Inventory Costs",
      company: "Technology Manufacturing",
      challenge: "Excess inventory and frequent stockouts",
      solution: "AI-driven demand forecasting and automated reordering",
      result: "40% cost reduction, 95% service level improvement",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=200&fit=crop"
    },
    {
      title: "FreshMart: Eliminated Food Waste by 50%",
      company: "Regional Grocery Chain",
      challenge: "High perishable inventory waste",
      solution: "Predictive analytics for fresh produce management",
      result: "50% waste reduction, 25% profit increase",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=200&fit=crop"
    },
    {
      title: "MedSupply: 99.9% Critical Inventory Availability",
      company: "Healthcare Distribution",
      challenge: "Critical medical supply stockouts",
      solution: "Emergency inventory management system",
      result: "99.9% availability, improved patient outcomes",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop"
    }
  ];

  const categories = ["All", "Technology", "Best Practices", "Strategy", "E-commerce", "Sustainability"];

  return (
    <div className="min-h-screen bg-gradient-subtle relative">


      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Supply Chain <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay ahead with the latest trends, best practices, and success stories in supply chain management.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {caseStudies.map((study, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader className="p-0">
                    <img src={study.image} alt={study.title} className="w-full h-48 object-cover rounded-t-lg" />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-lg mb-2">{study.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-4">{study.company}</p>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Challenge:</span> {study.challenge}</p>
                      <p><span className="font-medium">Solution:</span> {study.solution}</p>
                      <p className="text-secondary font-medium">{study.result}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button asChild variant="outline">
                <Link href="/contact">Request Detailed Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Latest Articles</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300 cursor-pointer group">
                  <CardHeader className="p-0">
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-4 text-primary group-hover:text-primary-glow transition-colors">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest supply chain insights and RisaSol updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button className="bg-gradient-primary">Subscribe</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </main>


    </div>
  );
};

export default Resources;
