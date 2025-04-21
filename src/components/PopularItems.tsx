
import React from "react";
import { Button } from "@/components/ui/button";
import FoodItemCard from "./FoodItemCard";
import { useCart } from "@/contexts/CartContext";

interface PopularItemsProps {
  isLoaded: boolean;
}

const PopularItems: React.FC<PopularItemsProps> = ({ isLoaded }) => {
  const { addItem } = useCart();

  return (
    <section className={`transition-all duration-500 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Popular Items</h2>
        <Button variant="link" className="text-accent">View All</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FoodItemCard 
          id="1"
          name="Masala Dosa"
          image="https://images.unsplash.com/photo-1667030489429-c5fb604556d0"
          price={200}
          rating={4.8}
          is_vegetarian={true}
          category="South Indian"
          onAddToCart={() => addItem({ id: "1", name: "Masala Dosa", price: 200 })}
        />
        <FoodItemCard 
          id="2"
          name="Chicken Biryani"
          image="https://images.unsplash.com/photo-1589302168068-964664d93dc0"
          price={280}
          rating={4.7}
          is_vegetarian={false}
          category="Main Course"
          onAddToCart={() => addItem({ id: "2", name: "Chicken Biryani", price: 280 })}
        />
        <FoodItemCard 
          id="3"
          name="Idli Sambar"
          image="https://images.unsplash.com/photo-1589301760014-d929f3979dbc"
          price={150}
          rating={4.5}
          is_vegetarian={true}
          category="Breakfast"
          onAddToCart={() => addItem({ id: "3", name: "Idli Sambar", price: 150 })}
        />
        <FoodItemCard 
          id="4"
          name="Fish Curry"
          image="https://images.unsplash.com/photo-1626198226928-95cf65427bd8"
          price={320}
          rating={4.6}
          is_vegetarian={false}
          category="Main Course"
          onAddToCart={() => addItem({ id: "4", name: "Fish Curry", price: 320 })}
        />
      </div>
    </section>
  );
};

export default PopularItems;
