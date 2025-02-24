
import { useState } from "react";
import { 
  User, Mail, Link2, Github, Linkedin, Star, 
  BarChart3, DollarSign, Heart, MessageSquare, 
  Video, Info, Edit, Trash, Upload
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Developer {
  name: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  portfolio: string;
  totalSales: number;
  totalRevenue: number;
  activeUsers: number;
}

interface Agent {
  id: number;
  name: string;
  description: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  status: "published" | "pending" | "draft";
  sales: number;
  revenue: number;
}

const DeveloperProfile = () => {
  const { toast } = useToast();
  const [selectedTab, setSelectedTab] = useState("agents");

  const developer: Developer = {
    name: "Alex Davidson",
    bio: "AI Engineer specializing in machine learning and natural language processing. Building intelligent solutions for real-world business challenges.",
    email: "alex@example.com",
    github: "github.com/alexd",
    linkedin: "linkedin.com/in/alexd",
    portfolio: "alexd.dev",
    totalSales: 1234,
    totalRevenue: 45600,
    activeUsers: 789
  };

  const agents: Agent[] = [
    {
      id: 1,
      name: "Marketing Assistant Pro",
      description: "AI-powered marketing automation and analytics",
      category: "Marketing",
      price: "$49/mo",
      rating: 4.8,
      reviews: 156,
      status: "published",
      sales: 450,
      revenue: 22050
    },
    {
      id: 2,
      name: "Smart Logistics Planner",
      description: "Optimize delivery routes and supply chain",
      category: "Logistics",
      price: "$99/mo",
      rating: 4.9,
      reviews: 89,
      status: "published",
      sales: 234,
      revenue: 23166
    },
    {
      id: 3,
      name: "Sales Predictor AI",
      description: "Advanced sales forecasting and analysis",
      category: "Sales",
      price: "$79/mo",
      rating: 4.7,
      reviews: 112,
      status: "pending",
      sales: 0,
      revenue: 0
    }
  ];

  const handleContactDeveloper = () => {
    toast({
      title: "Message Sent",
      description: "The developer will respond to your inquiry soon.",
    });
  };

  const handleDeleteAgent = (agentId: number) => {
    toast({
      title: "Agent Deleted",
      description: "The agent has been successfully removed.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="container mx-auto px-4 py-12">
        {/* Developer Profile Header */}
        <section className="mb-12">
          <div className="glass rounded-lg p-8">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-4" role="heading">{developer.name}</h1>
                <p className="text-lg text-muted-foreground mb-6">{developer.bio}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <a href={`mailto:${developer.email}`} className="flex items-center hover:text-foreground">
                    <Mail className="w-4 h-4 mr-2" />
                    {developer.email}
                  </a>
                  <a href={`https://${developer.github}`} className="flex items-center hover:text-foreground">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                  <a href={`https://${developer.linkedin}`} className="flex items-center hover:text-foreground">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                  <a href={`https://${developer.portfolio}`} className="flex items-center hover:text-foreground">
                    <Link2 className="w-4 h-4 mr-2" />
                    Portfolio
                  </a>
                </div>
              </div>
              
              <Button onClick={handleContactDeveloper}>
                Contact Developer
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="p-6 text-center">
                <h3 className="text-lg font-medium mb-2">Total Sales</h3>
                <p className="text-3xl font-bold">{developer.totalSales}</p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-lg font-medium mb-2">Revenue</h3>
                <p className="text-3xl font-bold">${developer.totalRevenue}</p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-lg font-medium mb-2">Active Users</h3>
                <p className="text-3xl font-bold">{developer.activeUsers}</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Agent Catalog */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">AI Agents</h2>
            <Button className="flex gap-2">
              <Upload className="w-4 h-4" />
              Add New Agent
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <Card key={agent.id} className="p-6 glass card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge>{agent.category}</Badge>
                      <Badge variant={agent.status === "published" ? "default" : "secondary"}>
                        {agent.status}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{agent.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="font-medium">{agent.rating}</span>
                        <span className="text-muted-foreground ml-1">({agent.reviews})</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <DollarSign className="w-4 h-4 mr-1" />
                        <span>{agent.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    <div>Sales: {agent.sales}</div>
                    <div>Revenue: ${agent.revenue}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleDeleteAgent(agent.id)}
                    >
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Support Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Resources & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <MessageSquare className="w-6 h-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">Developer Community</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Connect with other developers, share experiences, and get help.
              </p>
              <Button variant="outline" className="w-full">Join Forum</Button>
            </Card>
            
            <Card className="p-6">
              <Video className="w-6 h-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">Video Tutorials</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn how to build and optimize your AI agents.
              </p>
              <Button variant="outline" className="w-full">Watch Tutorials</Button>
            </Card>
            
            <Card className="p-6">
              <Info className="w-6 h-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">Documentation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive guides and API documentation.
              </p>
              <Button variant="outline" className="w-full">Read Docs</Button>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DeveloperProfile;
