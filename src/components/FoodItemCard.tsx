
import React, { useState } from "react";
import { Heart, Plus, Star, Clock, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FoodItemCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  isVegetarian: boolean;
  onAddToCart?: () => void;
}

const FoodItemCard: React.FC<FoodItemCardProps> = ({
  id,
  name,
  image,
  price,
  rating,
  isVegetarian,
  onAddToCart = () => {},
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart();
  };

  // Generate a random delivery time between 20-40 minutes
  const deliveryTime = Math.floor(Math.random() * 20) + 20;

  return (
    <Card 
      className="overflow-hidden glass-morphism card-hover border-0 cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => console.log(`View details for ${name}`)}
    >
      <div className="relative">
        <img
          src={`${image}?w=400&h=250&fit=crop`}
          alt={name}
          className={`w-full h-40 object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}></div>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 active:bg-black/70 transition-transform duration-300"
          onClick={toggleLike}
        >
          <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'} transition-colors`} />
        </Button>
        
        <Badge
          variant="secondary"
          className={`absolute top-2 left-2 ${
            isVegetarian ? "bg-green-500/90" : "bg-red-500/90"
          } text-white px-2 py-1 text-xs`}
        >
          {isVegetarian ? "Veg" : "Non-Veg"}
        </Badge>
        
        <div className={`absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          <Clock className="h-3 w-3 text-white mr-1" />
          <span className="text-xs text-white">{deliveryTime} mins</span>
        </div>
      </div>
      
      <CardContent className="p-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium text-base mb-1 group-hover:text-accent transition-colors">{name}</h3>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm text-muted-foreground">{rating}</span>
              <span className="text-xs text-muted-foreground ml-1">({Math.floor(Math.random() * 100) + 50})</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-accent font-semibold">₹{price}</span>
            <Button
              size="icon"
              className="h-8 w-8 rounded-full bg-accent text-background hover:bg-accent/80 active:bg-accent/60 mt-1 group"
              onClick={handleAddToCart}
            >
              <Plus className="h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
            </Button>
          </div>
        </div>
        
        <div className={`mt-2 pt-2 border-t border-white/10 flex items-center justify-between ${isHovered ? 'opacity-100' : 'opacity-0'} transition-all duration-300`}>
          <div className="flex items-center text-xs text-muted-foreground">
            <Info className="h-3 w-3 mr-1" />
            <span>{Math.floor(Math.random() * 400) + 100} calories</span>
          </div>
          <Button variant="ghost" size="sm" className="text-xs h-7 px-2 text-accent">View details</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodItemCard;
