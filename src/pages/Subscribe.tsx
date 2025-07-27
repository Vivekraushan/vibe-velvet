import Layout from "@/components/layout/Layout";
import { Crown, Star, Check, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Subscribe = () => {
  const creators = [
    {
      name: "Emily Rodriguez",
      username: "emily_creates",
      avatar: "/placeholder.svg",
      subscribers: "125K",
      description: "Professional video editing tutorials and behind-the-scenes content",
      plans: [
        { name: "Free", price: 0, features: ["Basic tutorials", "Weekly posts"] },
        { name: "Pro", price: 9.99, features: ["Exclusive tutorials", "Live Q&A", "Custom presets"] },
        { name: "VIP", price: 19.99, features: ["1-on-1 calls", "Early access", "Project reviews"] }
      ]
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Creator Subscriptions
          </h1>
          <p className="text-muted-foreground">Support your favorite creators with exclusive content</p>
        </div>

        <div className="grid gap-8">
          {creators.map((creator, index) => (
            <Card key={index} className="vv-card p-6">
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={creator.avatar} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {creator.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{creator.name}</h3>
                  <p className="text-muted-foreground">@{creator.username} • {creator.subscribers} subscribers</p>
                  <p className="text-sm text-muted-foreground mt-1">{creator.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {creator.plans.map((plan, planIndex) => (
                  <Card key={planIndex} className={`p-4 ${planIndex === 1 ? 'border-primary vv-shadow-red' : 'border-border'}`}>
                    <div className="text-center space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground flex items-center justify-center space-x-2">
                          <span>{plan.name}</span>
                          {planIndex === 1 && <Star className="w-4 h-4 text-primary" />}
                          {planIndex === 2 && <Crown className="w-4 h-4 text-primary" />}
                        </h4>
                        <div className="text-2xl font-bold text-primary">
                          ${plan.price}<span className="text-sm text-muted-foreground">/month</span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-2 text-sm">
                            <Check className="w-4 h-4 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className={planIndex === 0 ? "w-full" : "w-full vv-button-primary"}>
                        {planIndex === 0 ? "Follow" : "Subscribe"}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Subscribe;