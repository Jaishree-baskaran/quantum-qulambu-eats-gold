
import React from "react";
import { Clock, Heart, Book, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const QuickActions: React.FC<{ isLoaded: boolean }> = ({ isLoaded }) => {
  const navigate = useNavigate();

  return (
    <section className={`transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
      <div className="grid grid-cols-4 gap-3">
        <Button variant="outline" className="flex flex-col items-center gap-1 h-auto py-3 glass-morphism border-accent/10">
          <Clock className="text-accent h-5 w-5" />
          <span className="text-xs">Fast Delivery</span>
        </Button>
        <Button variant="outline" className="flex flex-col items-center gap-1 h-auto py-3 glass-morphism border-accent/10">
          <Heart className="text-accent h-5 w-5" />
          <span className="text-xs">Top Rated</span>
        </Button>
        <Button 
          variant="outline" 
          className="flex flex-col items-center gap-1 h-auto py-3 glass-morphism border-accent/10"
          onClick={() => navigate("/recipes")}
        >
          <Book className="text-accent h-5 w-5" />
          <span className="text-xs">Recipes</span>
        </Button>
        <Button variant="outline" className="flex flex-col items-center gap-1 h-auto py-3 glass-morphism border-accent/10">
          <ShoppingCart className="text-accent h-5 w-5" />
          <span className="text-xs">Cart</span>
        </Button>
      </div>
    </section>
  );
};

export default QuickActions;
