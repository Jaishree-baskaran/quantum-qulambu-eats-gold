
import React from "react";
import { Home, Search, Book, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems } = useCart();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-morphism p-2 flex justify-around items-center">
      <Button 
        variant="ghost" 
        size="icon" 
        className={`flex flex-col items-center relative group ${location.pathname === '/' ? 'text-accent' : ''}`}
        onClick={() => navigate("/")}
      >
        <div className={`absolute -top-2 w-1 h-1 bg-accent rounded-full ${location.pathname === '/' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-all duration-300`}></div>
        <Home className="h-6 w-6 mb-1" />
        <span className="text-xs">Home</span>
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        className="flex flex-col items-center relative group"
      >
        <div className="absolute -top-2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <Search className="h-6 w-6 mb-1" />
        <span className="text-xs">Search</span>
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        className={`flex flex-col items-center relative group ${location.pathname === '/recipes' ? 'text-accent' : ''}`}
        onClick={() => navigate("/recipes")}
      >
        <div className={`absolute -top-2 w-1 h-1 bg-accent rounded-full ${location.pathname === '/recipes' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-all duration-300`}></div>
        <Book className="h-6 w-6 mb-1" />
        <span className="text-xs">Recipes</span>
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        className={`flex flex-col items-center relative group ${location.pathname === '/cart' ? 'text-accent' : ''}`}
        onClick={() => navigate("/cart")}
      >
        <div className={`absolute -top-2 w-1 h-1 bg-accent rounded-full ${location.pathname === '/cart' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-all duration-300`}></div>
        {totalItems > 0 && (
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
            {totalItems}
          </Badge>
        )}
        <ShoppingCart className="h-6 w-6 mb-1" />
        <span className="text-xs">Cart</span>
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        className={`flex flex-col items-center relative group ${location.pathname === '/profile' ? 'text-accent' : ''}`}
        onClick={() => navigate("/profile")}
      >
        <div className={`absolute -top-2 w-1 h-1 bg-accent rounded-full ${location.pathname === '/profile' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-all duration-300`}></div>
        <User className="h-6 w-6 mb-1" />
        <span className="text-xs">Profile</span>
      </Button>
    </nav>
  );
};

export default BottomNav;
