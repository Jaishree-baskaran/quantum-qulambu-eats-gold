
import React, { useState, useEffect } from "react";
import HomeHeader from "@/components/HomeHeader";
import QuickActions from "@/components/QuickActions";
import BottomNav from "@/components/BottomNav";
import PopularItems from "@/components/PopularItems";
import TodaysOffers from "@/components/TodaysOffers";
import { Button } from "@/components/ui/button";
import FoodCategoryList from "@/components/FoodCategoryList";
import { useCart } from "@/contexts/CartContext";

const Index: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <HomeHeader 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="px-4 py-6 space-y-8">
        <QuickActions isLoaded={isLoaded} />

        <section className={`transition-all duration-500 delay-100 ${isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Categories</h2>
            <Button variant="link" className="text-accent">View All</Button>
          </div>
          <FoodCategoryList />
        </section>

        <section className={`transition-all duration-500 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Today's Offers</h2>
            <Button variant="link" className="text-accent">View All</Button>
          </div>
          <TodaysOffers />
        </section>

        <PopularItems isLoaded={isLoaded} />
      </main>

      <BottomNav />

      <style>
        {`
          @keyframes scaleIn {
            0% { transform: scale(0); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default Index;
