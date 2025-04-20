
import React from "react";
import { Home, Search, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ProfileDialog from "./ProfileDialog";

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-morphism p-2 flex justify-around items-center">
      <Button variant="ghost" size="icon" className="flex flex-col items-center text-accent relative group">
        <div className="absolute -top-2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <Home className="h-6 w-6 mb-1" />
        <span className="text-xs">Home</span>
      </Button>
      <Button variant="ghost" size="icon" className="flex flex-col items-center relative group">
        <div className="absolute -top-2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <Search className="h-6 w-6 mb-1" />
        <span className="text-xs">Search</span>
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        className="flex flex-col items-center relative group"
        onClick={() => navigate("/recipes")}
      >
        <div className="absolute -top-2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <Book className="h-6 w-6 mb-1" />
        <span className="text-xs">Recipes</span>
      </Button>
      <ProfileDialog />
    </nav>
  );
};

export default BottomNav;
