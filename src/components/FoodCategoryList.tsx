
import React from "react";
import { Utensils, Coffee, Pizza, Wine, Drumstick, Soup } from "lucide-react";

const categories = [
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

const FoodCategoryList: React.FC = () => {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-none py-2">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center justify-center min-w-[80px] glass-morphism rounded-xl p-3 card-hover"
        >
          <div className="bg-accent/10 p-3 rounded-full mb-2">
            {React.cloneElement(category.icon, { className: "h-6 w-6 text-accent" })}
          </div>
          <span className="text-sm font-medium whitespace-nowrap">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FoodCategoryList;
