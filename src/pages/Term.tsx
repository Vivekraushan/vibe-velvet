import Layout from "@/components/layout/Layout";
import { Play, Heart, MessageCircle, Share2, Volume2, VolumeX } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

const Term = () => {
  const [mutedVideos, setMutedVideos] = useState<Set<string>>(new Set());

  const shortVideos = [
    {
      id: "1",
      creator: "Sarah Chen",
      username: "sarahcreates",
      avatar: "/placeholder.svg",
      thumbnail: "/placeholder.svg",
      caption: "Quick editing tip that will save you hours! 🎬 #editing #tips",
      likes: 12500,
      comments: 234,
      shares: 89,
      isVerified: true,
      isLiked: false,
    },
    {
      id: "2",
      creator: "Alex Rivera",
      username: "alextech",
      avatar: "/placeholder.svg",
      thumbnail: "/placeholder.svg",
      caption: "POV: You're learning React in 60 seconds 💻 #coding #react",
      likes: 8900,
      comments: 156,
      shares: 67,
      isVerified: true,
      isLiked: true,
    },
    {
      id: "3",
      creator: "Maya Johnson",
      username: "mayaart",
      avatar: "/placeholder.svg",
      thumbnail: "/placeholder.svg",
      caption: "Art process in 30 seconds ✨ What should I draw next? #art #process",
      likes: 15600,
      comments: 478,
      shares: 123,
      isVerified: false,
      isLiked: false,
    },
    {
      id: "4",
      creator: "Jake Fitness",
      username: "jakefit",
      avatar: "/placeholder.svg",
      thumbnail: "/placeholder.svg",
      caption: "5-minute morning routine that changed my life 💪 #fitness #morning",
      likes: 7800,
      comments: 89,
      shares: 234,
      isVerified: true,
      isLiked: false,
    },
    {
      id: "5",
      creator: "Luna Music",
      username: "lunabeats",
      avatar: "/placeholder.svg",
      thumbnail: "/placeholder.svg",
      caption: "Creating beats from everyday sounds 🎵 #music #beats #creative",
      likes: 11200,
      comments: 267,
      shares: 156,
      isVerified: true,
      isLiked: true,
    },
    {
      id: "6",
      creator: "Tech Tom",
      username: "techwithtom",
      avatar: "/placeholder.svg",
      thumbnail: "/placeholder.svg",
      caption: "iPhone hidden feature you didn't know existed! 📱 #tech #iphone",
      likes: 9500,
      comments: 134,
      shares: 78,
      isVerified: false,
      isLiked: false,
    },
  ];

  const toggleMute = (videoId: string) => {
    const newMuted = new Set(mutedVideos);
    if (newMuted.has(videoId)) {
      newMuted.delete(videoId);
    } else {
      newMuted.add(videoId);
    }
    setMutedVideos(newMuted);
  };

  const [likedVideos, setLikedVideos] = useState<Set<string>>(
    new Set(shortVideos.filter(v => v.isLiked).map(v => v.id))
  );

  const toggleLike = (videoId: string) => {
    const newLiked = new Set(likedVideos);
    if (newLiked.has(videoId)) {
      newLiked.delete(videoId);
    } else {
      newLiked.add(videoId);
    }
    setLikedVideos(newLiked);
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Term
          </h1>
          <p className="text-muted-foreground">
            Quick, creative clips from the VelvetVibe community
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {shortVideos.map((video) => (
            <Card key={video.id} className="vv-card overflow-hidden group">
              {/* Video Container */}
              <div className="relative aspect-[9/16] bg-muted">
                <img 
                  src={video.thumbnail} 
                  alt="Short video"
                  className="w-full h-full object-cover"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="lg" className="vv-button-primary vv-shadow-red">
                    <Play className="w-6 h-6" />
                  </Button>
                </div>

                {/* Mute Button */}
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute top-3 right-3 w-8 h-8 p-0 bg-black/50 border-none hover:bg-black/70"
                  onClick={() => toggleMute(video.id)}
                >
                  {mutedVideos.has(video.id) ? (
                    <VolumeX className="w-4 h-4 text-white" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white" />
                  )}
                </Button>

                {/* Creator Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={video.avatar} />
                          <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                            {video.creator.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white">
                              {video.creator}
                            </p>
                            {video.isVerified && (
                              <div className="w-3 h-3 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">✓</span>
                              </div>
                            )}
                          </div>
                          <p className="text-xs text-gray-300">@{video.username}</p>
                        </div>
                      </div>
                      <p className="text-sm text-white line-clamp-2">
                        {video.caption}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col space-y-3 ml-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-10 h-10 p-0 bg-black/30 hover:bg-black/50 border-none"
                        onClick={() => toggleLike(video.id)}
                      >
                        <Heart 
                          className={`w-5 h-5 ${
                            likedVideos.has(video.id) 
                              ? "text-primary fill-current" 
                              : "text-white"
                          }`} 
                        />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-10 h-10 p-0 bg-black/30 hover:bg-black/50 border-none"
                      >
                        <MessageCircle className="w-5 h-5 text-white" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-10 h-10 p-0 bg-black/30 hover:bg-black/50 border-none"
                      >
                        <Share2 className="w-5 h-5 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="p-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <Heart className="w-3 h-3" />
                      <span>{video.likes.toLocaleString()}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{video.comments}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Share2 className="w-3 h-3" />
                      <span>{video.shares}</span>
                    </span>
                  </div>
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

export default Term;