
import { useState } from "react";
import { Search, Star, MessageSquare, Video, Filter, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

const AgentCard = ({ agent }: { agent: any }) => (
  <Card className="p-6 glass card-hover">
    <div className="flex items-start justify-between mb-4">
      <div>
        <Badge className="mb-2">{agent.category}</Badge>
        <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
        <p className="text-sm text-muted-foreground">{agent.description}</p>
      </div>
      <div className="flex items-center">
        <Star className="w-4 h-4 text-yellow-400 mr-1" />
        <span className="text-sm font-medium">{agent.rating}</span>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <Button variant="outline" className="w-[48%]">Try Demo</Button>
      <Button className="w-[48%]">Get Started</Button>
    </div>
  </Card>
);

const Index = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  
  const mockAgents = [
    {
      id: 1,
      name: "Marketing Assistant",
      description: "AI-powered marketing automation and analytics",
      category: "Marketing",
      rating: 4.8
    },
    {
      id: 2,
      name: "Logistics Optimizer",
      description: "Smart route planning and delivery optimization",
      category: "Logistics",
      rating: 4.9
    },
    {
      id: 3,
      name: "Sales Analyzer",
      description: "Advanced sales data analysis and forecasting",
      category: "Sales",
      rating: 4.7
    }
  ];

  const handleSupport = () => {
    toast({
      title: "Support Chat",
      description: "Our support team will be with you shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-balance">
            AI Marketplace for Developers
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Monetize your AI agents and create solutions for business challenges
          </p>
          
          <div className="flex gap-4 max-w-2xl mx-auto mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search AI agents..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Featured Agents</h2>
            <div className="flex gap-4">
              <Button variant="ghost" className="flex gap-2" onClick={handleSupport}>
                <MessageSquare className="w-4 h-4" />
                Support
              </Button>
              <Button variant="ghost" className="flex gap-2">
                <Video className="w-4 h-4" />
                Tutorials
              </Button>
              <Button variant="ghost" className="flex gap-2">
                <Info className="w-4 h-4" />
                Documentation
              </Button>
            </div>
          </div>

          <ScrollArea className="h-[600px] rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockAgents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          </ScrollArea>
        </section>
      </main>
    </div>
  );
};

export default Index;
