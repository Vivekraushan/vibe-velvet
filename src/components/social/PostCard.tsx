import { useState } from "react";
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PostCardProps {
  id: string;
  author: {
    name: string;
    username: string;
    avatar?: string;
    isVerified?: boolean;
  };
  content: {
    text?: string;
    image?: string;
    video?: string;
  };
  timestamp: string;
  stats: {
    likes: number;
    comments: number;
    shares: number;
  };
  isLiked?: boolean;
  isBookmarked?: boolean;
}

const PostCard = ({ 
  author, 
  content, 
  timestamp, 
  stats, 
  isLiked = false, 
  isBookmarked = false 
}: PostCardProps) => {
  const [liked, setLiked] = useState(isLiked);
  const [bookmarked, setBookmarked] = useState(isBookmarked);
  const [likeCount, setLikeCount] = useState(stats.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <Card className="vv-card p-6 vv-transition hover:bg-card/80">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={author.avatar} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {author.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center space-x-1">
              <h3 className="font-semibold text-foreground">{author.name}</h3>
              {author.isVerified && (
                <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>
            <p className="text-sm text-muted-foreground">@{author.username} • {timestamp}</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="vv-button-ghost">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {content.text && (
          <p className="text-foreground leading-relaxed">{content.text}</p>
        )}
        
        {content.image && (
          <div className="rounded-lg overflow-hidden">
            <img 
              src={content.image} 
              alt="Post content" 
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        
        {content.video && (
          <div className="relative rounded-lg overflow-hidden bg-muted">
            <div className="aspect-video flex items-center justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="vv-button-primary vv-shadow-red"
              >
                <Play className="w-6 h-6 mr-2" />
                Play Video
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
        <div className="flex items-center space-x-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`vv-button-ghost space-x-2 ${
              liked ? "text-primary hover:text-primary" : ""
            }`}
          >
            <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
            <span className="text-sm">{likeCount}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="vv-button-ghost space-x-2">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">{stats.comments}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="vv-button-ghost space-x-2">
            <Share className="w-4 h-4" />
            <span className="text-sm">{stats.shares}</span>
          </Button>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={handleBookmark}
          className={`vv-button-ghost ${
            bookmarked ? "text-primary hover:text-primary" : ""
          }`}
        >
          <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-current" : ""}`} />
        </Button>
      </div>
    </Card>
  );
};

export default PostCard;