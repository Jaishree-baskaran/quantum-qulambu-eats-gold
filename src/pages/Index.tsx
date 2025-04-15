
import React, { useState } from "react";
import { Search, ShoppingCart, Filter, Home, Menu, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import FoodCategoryList from "@/components/FoodCategoryList";
import FoodItemCard from "@/components/FoodItemCard";
import TodaysOffers from "@/components/TodaysOffers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(3);

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <header className="p-4 pt-8 glass-morphism sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-gradient">Quantum Qulambu</div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative hover:rotate-12 transition-transform"
            onClick={() => console.log("Cart clicked")}
          >
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center animate-in fade-in duration-300">
              {cartCount}
            </span>
          </Button>
        </div>
        <div className="relative">
          <Input
            type="text"
            placeholder="Search your favorite dishes..."
            className="w-full bg-secondary/50 backdrop-blur-sm pl-10 pr-10 py-6 rounded-xl border-accent/20 focus:border-accent/40 transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:rotate-180 transition-transform duration-300"
            onClick={() => console.log("Filter clicked")}
          >
            <Filter className="text-accent h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="px-4 py-6 space-y-8">
        {/* Categories Section */}
        <section className="animate-in fade-in slide-in-from-left duration-500">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Categories</h2>
            <Button variant="link" className="text-accent">View All</Button>
          </div>
          <FoodCategoryList />
        </section>

        {/* Today's Offers */}
        <section className="animate-in fade-in slide-in-from-right duration-500 delay-150">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Today's Offers</h2>
            <Button variant="link" className="text-accent">View All</Button>
          </div>
          <TodaysOffers />
        </section>

        {/* Popular Items */}
        <section className="animate-in fade-in slide-in-from-bottom duration-500 delay-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Popular Items</h2>
            <Button variant="link" className="text-accent">View All</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FoodItemCard 
              id="1"
              name="Masala Dosa"
              image="https://images.unsplash.com/photo-1667030489429-c5fb604556d0"
              price={8.99}
              rating={4.8}
              isVegetarian={true}
            />
            <FoodItemCard 
              id="2"
              name="Chicken Biryani"
              image="https://images.unsplash.com/photo-1589302168068-964664d93dc0"
              price={12.99}
              rating={4.7}
              isVegetarian={false}
            />
            <FoodItemCard 
              id="3"
              name="Idli Sambar"
              image="https://images.unsplash.com/photo-1589301760014-d929f3979dbc"
              price={6.99}
              rating={4.5}
              isVegetarian={true}
            />
            <FoodItemCard 
              id="4"
              name="Fish Curry"
              image="https://images.unsplash.com/photo-1626198226928-95cf65427bd8"
              price={14.99}
              rating={4.6}
              isVegetarian={false}
            />
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass-morphism p-2 flex justify-around items-center">
        <Button variant="ghost" size="icon" className="flex flex-col items-center text-accent">
          <Home className="h-6 w-6 mb-1" />
          <span className="text-xs">Home</span>
        </Button>
        <Button variant="ghost" size="icon" className="flex flex-col items-center">
          <Search className="h-6 w-6 mb-1" />
          <span className="text-xs">Search</span>
        </Button>
        <Button variant="ghost" size="icon" className="flex flex-col items-center">
          <Menu className="h-6 w-6 mb-1" />
          <span className="text-xs">Menu</span>
        </Button>
        <Button variant="ghost" size="icon" className="flex flex-col items-center">
          <User className="h-6 w-6 mb-1" />
          <span className="text-xs">Profile</span>
        </Button>
      </nav>
    </div>
  );
};

export default Index;
