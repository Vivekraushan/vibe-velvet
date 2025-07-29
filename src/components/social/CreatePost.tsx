import { useState } from "react";
import { Image, Video, Smile, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CreatePost = () => {
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (content.trim()) {
      // Handle post creation
      console.log("Creating post:", content);
      setContent("");
    }
  };

  return (
    <Card className="vv-card p-6 mb-6">
      <div className="flex space-x-4">
        <Avatar className="w-10 h-10">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback className="bg-primary text-primary-foreground">
            U
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-4">
          <Textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[100px] bg-muted border-border/50 focus:border-primary/50 resize-none text-foreground placeholder:text-muted-foreground"
          />
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2 overflow-x-auto">
              <Button variant="ghost" size="sm" className="vv-button-ghost flex-shrink-0">
                <Image className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Photo</span>
              </Button>
              <Button variant="ghost" size="sm" className="vv-button-ghost flex-shrink-0">
                <Video className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Video</span>
              </Button>
              <Button variant="ghost" size="sm" className="vv-button-ghost flex-shrink-0">
                <Smile className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Feeling</span>
              </Button>
              <Button variant="ghost" size="sm" className="vv-button-ghost flex-shrink-0">
                <MapPin className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Location</span>
              </Button>
            </div>
            
            <Button 
              onClick={handlePost}
              disabled={!content.trim()}
              className="vv-button-primary w-full sm:w-auto"
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreatePost;