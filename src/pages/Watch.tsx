import Layout from "@/components/layout/Layout";
import { Play, Clock, Eye, ThumbsUp, Share2, Bookmark } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Watch = () => {
  const videos = [
    {
      id: "1",
      title: "Advanced Video Editing Masterclass - Complete Guide",
      creator: "Emily Rodriguez",
      username: "emily_creates",
      thumbnail: "/placeholder.svg",
      duration: "24:35",
      views: "125K",
      uploadTime: "2 days ago",
      description: "Learn professional video editing techniques used by top creators...",
      isVerified: true,
    },
    {
      id: "2",
      title: "Building a Successful Creator Brand in 2024",
      creator: "Marcus Thompson",
      username: "marcus_tech",
      thumbnail: "/placeholder.svg",
      duration: "18:42",
      views: "89K",
      uploadTime: "1 week ago",
      description: "Everything you need to know about building your personal brand...",
      isVerified: true,
    },
    {
      id: "3",
      title: "Digital Art From Sketch to Masterpiece",
      creator: "Luna Arts",
      username: "luna_artistic",
      thumbnail: "/placeholder.svg",
      duration: "32:17",
      views: "67K",
      uploadTime: "3 days ago",
      description: "Watch my complete creative process from initial sketch to final artwork...",
      isVerified: false,
    },
    {
      id: "4",
      title: "30-Day Fitness Transformation Challenge",
      creator: "David Kim",
      username: "david_fitness",
      thumbnail: "/placeholder.svg",
      duration: "15:23",
      views: "156K",
      uploadTime: "5 days ago",
      description: "Complete workout plan that will transform your fitness in just 30 days...",
      isVerified: true,
    },
  ];

  const categories = [
    "All", "Tutorials", "Lifestyle", "Tech", "Art", "Fitness", "Gaming", "Music"
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Watch
          </h1>
          <p className="text-muted-foreground">
            Discover amazing long-form content from your favorite creators
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "vv-button-primary" : "border-border hover:bg-secondary"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="vv-card overflow-hidden group cursor-pointer vv-transition hover:scale-105">
              {/* Thumbnail */}
              <div className="relative">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="vv-button-primary vv-shadow-red">
                      <Play className="w-6 h-6 mr-2" />
                      Play
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <h3 className="font-semibold text-foreground line-clamp-2 leading-tight">
                  {video.title}
                </h3>
                
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                      {video.creator.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-1">
                      <p className="text-sm font-medium text-foreground truncate">
                        {video.creator}
                      </p>
                      {video.isVerified && (
                        <div className="w-3 h-3 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">@{video.username}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{video.views} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{video.uploadTime}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {video.description}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="sm" className="vv-button-ghost p-1">
                      <ThumbsUp className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="vv-button-ghost p-1">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="vv-button-ghost p-1">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button className="vv-button-primary px-8 py-3">
            Load More Videos
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Watch;