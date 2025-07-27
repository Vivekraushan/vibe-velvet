import Layout from "@/components/layout/Layout";
import CreatePost from "@/components/social/CreatePost";
import PostCard from "@/components/social/PostCard";
import TrendingSidebar from "@/components/social/TrendingSidebar";

const Home = () => {
  // Sample posts data
  const posts = [
    {
      id: "1",
      author: {
        name: "Emily Rodriguez",
        username: "emily_creates",
        avatar: "/placeholder.svg",
        isVerified: true,
      },
      content: {
        text: "Just dropped my latest tutorial on advanced video editing techniques! 🎬 Can't wait to see what amazing content you all create with these tips. Remember, creativity has no limits! ✨",
        image: "/placeholder.svg",
      },
      timestamp: "2h",
      stats: { likes: 1247, comments: 89, shares: 156 },
      isLiked: false,
    },
    {
      id: "2",
      author: {
        name: "Marcus Thompson",
        username: "marcus_tech",
        avatar: "/placeholder.svg",
        isVerified: true,
      },
      content: {
        text: "Behind the scenes of my latest VelvetVibe exclusive! The production quality on this platform is absolutely insane 🔥 Shoutout to all my subscribers for making this possible!",
        video: "/placeholder.svg",
      },
      timestamp: "4h",
      stats: { likes: 2156, comments: 234, shares: 89 },
      isLiked: true,
    },
    {
      id: "3",
      author: {
        name: "Luna Arts",
        username: "luna_artistic",
        avatar: "/placeholder.svg",
        isVerified: false,
      },
      content: {
        text: "New digital art piece completed! This one took me 3 weeks to finish but I'm so proud of the result. The attention to detail in every brush stroke was worth it. What do you think? 🎨",
        image: "/placeholder.svg",
      },
      timestamp: "6h",
      stats: { likes: 892, comments: 127, shares: 45 },
      isLiked: false,
    },
    {
      id: "4",
      author: {
        name: "David Kim",
        username: "david_fitness",
        avatar: "/placeholder.svg",
        isVerified: true,
      },
      content: {
        text: "Morning workout motivation! 💪 Remember, consistency beats perfection every single time. Small steps lead to big changes. What's your fitness goal for this week?",
      },
      timestamp: "8h",
      stats: { likes: 567, comments: 78, shares: 123 },
      isLiked: false,
    },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Feed */}
        <div className="lg:col-span-2">
          <CreatePost />
          <div className="space-y-6">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-gradient-primary text-white rounded-lg font-medium vv-transition hover:scale-105 vv-shadow-red">
              Load More Posts
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <TrendingSidebar />
        </div>
      </div>
    </Layout>
  );
};

export default Home;