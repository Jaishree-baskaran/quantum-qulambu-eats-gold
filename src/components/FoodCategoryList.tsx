
import React from "react";
import { Utensils, Coffee, Pizza, Wine, Drumstick, Soup } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Category {
  id: number;
  name: string;
  icon: React.ReactElement;
}

interface FoodCategoryListProps {
  onSelectCategory?: (category: string) => void;
  selectedCategory?: string | null;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Starters",
    icon: <Utensils className="h-6 w-6" />,
  },
  {
    id: 2,
    name: "Beverages",
    icon: <Coffee className="h-6 w-6" />,
  },
  {
    id: 3,
    name: "Mains",
    icon: <Pizza className="h-6 w-6" />,
  },
  {
    id: 4,
    name: "Desserts",
    icon: <Wine className="h-6 w-6" />,
  },
  {
    id: 5,
    name: "Non-Veg",
    icon: <Drumstick className="h-6 w-6" />,
  },
  {
    id: 6,
    name: "Soups",
    icon: <Soup className="h-6 w-6" />,
  },
];

const FoodCategoryList: React.FC<FoodCategoryListProps> = ({ 
  onSelectCategory = () => {}, 
  selectedCategory = null 
}) => {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-none py-2">
      {categories.map((category) => {
        const isSelected = selectedCategory === category.name;
        
        return (
          <div
            key={category.id}
            className={`flex flex-col items-center justify-center min-w-[80px] ${
              isSelected 
                ? "glass-morphism bg-accent/20" 
                : "glass-morphism"
            } rounded-xl p-3 card-hover transition-colors duration-300 cursor-pointer`}
            onClick={() => onSelectCategory(category.name)}
          >
            <div className={`${
              isSelected 
                ? "bg-accent/30" 
                : "bg-accent/10"
            } p-3 rounded-full mb-2 transition-colors duration-300`}>
              {React.cloneElement(category.icon, { 
                className: `h-6 w-6 ${isSelected ? "text-white" : "text-accent"} transition-colors duration-300` 
              })}
            </div>
            <span className={`text-sm font-medium whitespace-nowrap ${
              isSelected ? "text-accent" : ""
            } transition-colors duration-300`}>
              {category.name}
            </span>
            {isSelected && (
              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FoodCategoryList;
