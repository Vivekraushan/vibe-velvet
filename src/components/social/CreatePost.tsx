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
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="vv-button-ghost">
                <Image className="w-4 h-4 mr-2" />
                Photo
              </Button>
              <Button variant="ghost" size="sm" className="vv-button-ghost">
                <Video className="w-4 h-4 mr-2" />
                Video
              </Button>
              <Button variant="ghost" size="sm" className="vv-button-ghost">
                <Smile className="w-4 h-4 mr-2" />
                Feeling
              </Button>
              <Button variant="ghost" size="sm" className="vv-button-ghost">
                <MapPin className="w-4 h-4 mr-2" />
                Location
              </Button>
            </div>
            
            <Button 
              onClick={handlePost}
              disabled={!content.trim()}
              className="vv-button-primary"
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