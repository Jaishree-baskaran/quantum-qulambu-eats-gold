
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Clock, Utensils } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  prepTime: number;
  difficulty: "Easy" | "Medium" | "Hard";
  ingredients: string[];
  instructions: string[];
  isVegetarian: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  title,
  image,
  prepTime,
  difficulty,
  ingredients,
  instructions,
  isVegetarian,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden glass-morphism card-hover border-0 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={`${image}?w=400&h=250&fit=crop`}
          alt={title}
          className={`w-full h-48 object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}></div>
        
        <Badge
          variant="secondary"
          className={`absolute top-2 left-2 ${
            isVegetarian ? "bg-green-500/90" : "bg-red-500/90"
          } text-white px-2 py-1 text-xs`}
        >
          {isVegetarian ? "Veg" : "Non-Veg"}
        </Badge>
        
        <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
          <Clock className="h-3 w-3 text-white mr-1" />
          <span className="text-xs text-white">{prepTime} mins</span>
        </div>
        
        <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
          <Utensils className="h-3 w-3 text-white mr-1" />
          <span className="text-xs text-white">{difficulty}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center justify-between w-full text-accent hover:text-accent/80"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Hide Recipe" : "Show Recipe"}
          {expanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
        </Button>
        
        {expanded && (
          <div className="mt-3 space-y-3 animate-accordion-down">
            <div>
              <h4 className="font-medium text-sm mb-2">Ingredients:</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-2">Instructions:</h4>
              <ol className="list-decimal pl-5 text-sm space-y-2">
                {instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
