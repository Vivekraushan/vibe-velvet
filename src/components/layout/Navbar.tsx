import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Play, 
  Zap, 
  CreditCard, 
  User, 
  Search, 
  Bell,
  MessageCircle,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Play, label: "Watch", path: "/watch" },
    { icon: Zap, label: "Term", path: "/term" },
    { icon: CreditCard, label: "Subscribe", path: "/subscribe" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 vv-card border-b border-border/50 backdrop-blur-md bg-card/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 vv-transition hover:scale-105">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">VV</span>
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              VelvetVibe
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search VelvetVibe..."
                className="pl-10 bg-muted border-border/50 focus:border-primary/50 vv-transition"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  size="sm"
                  className={`vv-transition ${
                    isActive(item.path) 
                      ? "vv-button-primary vv-shadow-red" 
                      : "vv-button-ghost"
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-2 ml-4">
            <Button variant="ghost" size="sm" className="vv-button-ghost">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="vv-button-ghost">
              <MessageCircle className="w-4 h-4" />
            </Button>
            <Link to="/login">
              <Button variant="default" size="sm" className="vv-button-primary">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden vv-button-ghost"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search VelvetVibe..."
                  className="pl-10 bg-muted border-border/50 focus:border-primary/50"
                />
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className={`w-full justify-start vv-transition ${
                      isActive(item.path) 
                        ? "vv-button-primary" 
                        : "vv-button-ghost"
                    }`}
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.label}
                  </Button>
                </Link>
              ))}
              
              <div className="flex space-x-2 pt-2">
                <Button variant="ghost" className="flex-1 vv-button-ghost">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </Button>
                <Button variant="ghost" className="flex-1 vv-button-ghost">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Messages
                </Button>
              </div>
              
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full vv-button-primary">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;