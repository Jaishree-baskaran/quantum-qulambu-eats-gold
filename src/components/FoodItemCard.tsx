
import React from "react";
import { Heart, Plus, Star } from "lucide-react";
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
}

const FoodItemCard: React.FC<FoodItemCardProps> = ({
  id,
  name,
  image,
  price,
  rating,
  isVegetarian,
}) => {
  return (
    <Card className="overflow-hidden glass-morphism card-hover border-0">
      <div className="relative">
        <img
          src={`${image}?w=400&h=250&fit=crop`}
          alt={name}
          className="w-full h-40 object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 active:bg-black/70"
        >
          <Heart className="h-5 w-5 text-white" />
        </Button>
        <Badge
          variant="secondary"
          className={`absolute top-2 left-2 ${
            isVegetarian ? "bg-green-500/90" : "bg-red-500/90"
          } text-white px-2 py-1 text-xs`}
        >
          {isVegetarian ? "Veg" : "Non-Veg"}
        </Badge>
      </div>
      <CardContent className="p-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium text-base mb-1">{name}</h3>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm text-muted-foreground">{rating}</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-accent font-semibold">₹{Math.round(price * 80)}</span>
            <Button
              size="icon"
              className="h-8 w-8 rounded-full bg-accent text-background hover:bg-accent/80 active:bg-accent/60 mt-1"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodItemCard;
