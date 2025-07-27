import { TrendingUp, Users, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TrendingSidebar = () => {
  const trendingTopics = [
    { topic: "#VelvetVibeCreators", posts: "12.5K posts" },
    { topic: "#TechTalk", posts: "8.2K posts" },
    { topic: "#CreatorLife", posts: "5.7K posts" },
    { topic: "#WatchParty", posts: "3.1K posts" },
    { topic: "#MondayMotivation", posts: "2.8K posts" },
  ];

  const suggestedCreators = [
    {
      name: "Sarah Chen",
      username: "sarahcreates",
      followers: "125K",
      avatar: "/placeholder.svg",
      isVerified: true,
    },
    {
      name: "Alex Rivera",
      username: "alextech",
      followers: "89K",
      avatar: "/placeholder.svg",
      isVerified: true,
    },
    {
      name: "Maya Johnson",
      username: "mayaart",
      followers: "67K",
      avatar: "/placeholder.svg",
      isVerified: false,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Trending Topics */}
      <Card className="vv-card p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Trending</h3>
        </div>
        <div className="space-y-3">
          {trendingTopics.map((trend, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 vv-transition cursor-pointer"
            >
              <div>
                <p className="font-medium text-primary">{trend.topic}</p>
                <p className="text-sm text-muted-foreground">{trend.posts}</p>
              </div>
              <span className="text-xs text-muted-foreground">#{index + 1}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Suggested Creators */}
      <Card className="vv-card p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Star className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Suggested Creators</h3>
        </div>
        <div className="space-y-4">
          {suggestedCreators.map((creator, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={creator.avatar} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {creator.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-1">
                    <p className="font-medium text-foreground">{creator.name}</p>
                    {creator.isVerified && (
                      <div className="w-3 h-3 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    @{creator.username} • {creator.followers} followers
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground vv-transition">
                Follow
              </Button>
            </div>
          ))}
        </div>
        <Button variant="ghost" className="w-full mt-4 vv-button-ghost">
          See more
        </Button>
      </Card>

      {/* Quick Stats */}
      <Card className="vv-card p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Users className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Community</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Active Users</span>
            <span className="font-medium text-foreground">2.1M</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Creators</span>
            <span className="font-medium text-foreground">45K</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Videos Today</span>
            <span className="font-medium text-foreground">12.5K</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TrendingSidebar;