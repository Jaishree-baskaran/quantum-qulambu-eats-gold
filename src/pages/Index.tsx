
import React, { useState, useEffect } from "react";
import { Search, ShoppingCart, Filter, Home, Menu, User, Book, Clock, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import FoodCategoryList from "@/components/FoodCategoryList";
import FoodItemCard from "@/components/FoodItemCard";
import TodaysOffers from "@/components/TodaysOffers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Motion } from "@/components/ui/motion";
import { useNavigate } from "react-router-dom";

const Index: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(3);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  useEffect(() => {
    // Animate elements after page loads
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Demo function to handle adding items to cart
  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };
  
  // Function to handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <header className="p-4 pt-8 glass-morphism sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gradient relative"
          >
            Quantum Qulambu
            <span className="absolute -top-2 -right-4">
              <Badge variant="outline" className="bg-accent/10 text-accent text-xs">Premium</Badge>
            </span>
          </Motion>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative hover:rotate-12 transition-transform duration-300"
            onClick={() => console.log("Cart clicked")}
          >
            <ShoppingCart className="h-6 w-6" />
            <div 
              className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center"
              style={{
                animation: "scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
              }}
            >
              {cartCount}
            </div>
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
        {/* Quick Actions */}
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

        {/* Categories Section */}
        <section className={`transition-all duration-500 delay-100 ${isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Categories</h2>
            <Button variant="link" className="text-accent">View All</Button>
          </div>
          <FoodCategoryList onSelectCategory={handleCategorySelect} selectedCategory={selectedCategory} />
        </section>

        {/* Today's Offers */}
        <section className={`transition-all duration-500 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Today's Offers</h2>
            <Button variant="link" className="text-accent">View All</Button>
          </div>
          <TodaysOffers />
        </section>

        {/* Popular Items */}
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
              isVegetarian={true}
              onAddToCart={handleAddToCart}
            />
            <FoodItemCard 
              id="2"
              name="Chicken Biryani"
              image="https://images.unsplash.com/photo-1589302168068-964664d93dc0"
              price={280}
              rating={4.7}
              isVegetarian={false}
              onAddToCart={handleAddToCart}
            />
            <FoodItemCard 
              id="3"
              name="Idli Sambar"
              image="https://images.unsplash.com/photo-1589301760014-d929f3979dbc"
              price={150}
              rating={4.5}
              isVegetarian={true}
              onAddToCart={handleAddToCart}
            />
            <FoodItemCard 
              id="4"
              name="Fish Curry"
              image="https://images.unsplash.com/photo-1626198226928-95cf65427bd8"
              price={320}
              rating={4.6}
              isVegetarian={false}
              onAddToCart={handleAddToCart}
            />
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass-morphism p-2 flex justify-around items-center">
        <Button variant="ghost" size="icon" className="flex flex-col items-center text-accent relative group">
          <div className="absolute -top-2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <Home className="h-6 w-6 mb-1" />
          <span className="text-xs">Home</span>
        </Button>
        <Button variant="ghost" size="icon" className="flex flex-col items-center relative group">
          <div className="absolute -top-2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <Search className="h-6 w-6 mb-1" />
          <span className="text-xs">Search</span>
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="flex flex-col items-center relative group"
          onClick={() => navigate("/recipes")}
        >
          <div className="absolute -top-2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <Book className="h-6 w-6 mb-1" />
          <span className="text-xs">Recipes</span>
        </Button>
        <Button variant="ghost" size="icon" className="flex flex-col items-center relative group">
          <div className="absolute -top-2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <User className="h-6 w-6 mb-1" />
          <span className="text-xs">Profile</span>
        </Button>
      </nav>

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
