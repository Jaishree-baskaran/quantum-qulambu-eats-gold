
import React, { useState } from "react";
import { Search, ArrowLeft } from "lucide-react";
import RecipeCard from "@/components/RecipeCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Motion } from "@/components/ui/motion";

// Sample recipe data
const sampleRecipes = [
  {
    id: "1",
    title: "Masala Dosa",
    image: "https://images.unsplash.com/photo-1667030489429-c5fb604556d0",
    prepTime: 30,
    difficulty: "Medium" as const,
    isVegetarian: true,
    ingredients: [
      "2 cups rice",
      "1 cup urad dal",
      "1/2 tsp fenugreek seeds",
      "Potatoes",
      "Onions",
      "Green chilies",
      "Mustard seeds",
      "Turmeric powder",
      "Salt to taste"
    ],
    instructions: [
      "Soak rice and dal separately for 4-6 hours",
      "Grind them into a smooth batter",
      "Ferment the batter overnight",
      "Boil and mash potatoes",
      "Prepare seasoning with mustard seeds, curry leaves",
      "Add onions, green chilies and turmeric powder",
      "Mix with mashed potatoes",
      "Heat a pan and pour a ladleful of batter",
      "Spread in circular motion",
      "Add potato filling and fold",
      "Serve hot with coconut chutney and sambar"
    ]
  },
  {
    id: "2",
    title: "Chicken Biryani",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    prepTime: 60,
    difficulty: "Hard" as const,
    isVegetarian: false,
    ingredients: [
      "2 cups basmati rice",
      "500g chicken",
      "2 onions",
      "2 tomatoes",
      "Ginger-garlic paste",
      "Biryani masala",
      "Green chilies",
      "Coriander leaves",
      "Mint leaves",
      "Ghee",
      "Salt to taste"
    ],
    instructions: [
      "Marinate chicken with yogurt and spices for 2 hours",
      "Soak rice for 30 minutes",
      "In a pot, heat ghee and add whole spices",
      "Add sliced onions and fry till golden brown",
      "Add ginger-garlic paste and sauté",
      "Add marinated chicken and cook for 10 minutes",
      "Cook rice separately till 70% done",
      "Layer chicken and rice in a heavy-bottomed pot",
      "Sprinkle mint, coriander, and fried onions",
      "Cover with lid and seal with dough",
      "Cook on low flame for 20 minutes",
      "Serve hot with raita"
    ]
  },
  {
    id: "3",
    title: "Idli Sambar",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
    prepTime: 45,
    difficulty: "Medium" as const,
    isVegetarian: true,
    ingredients: [
      "2 cups rice",
      "1 cup urad dal",
      "1/2 tsp fenugreek seeds",
      "Toor dal",
      "Mixed vegetables",
      "Sambar powder",
      "Tamarind",
      "Mustard seeds",
      "Curry leaves",
      "Salt to taste"
    ],
    instructions: [
      "Soak rice and dal for 4-6 hours",
      "Grind into a smooth batter",
      "Ferment overnight",
      "Steam in idli molds for 10 minutes",
      "Cook toor dal in pressure cooker",
      "Soak tamarind in water and extract juice",
      "Add vegetables and cook till tender",
      "Mix dal, tamarind juice, and sambar powder",
      "Prepare tempering with mustard seeds and curry leaves",
      "Serve hot idlis with sambar and chutney"
    ]
  },
  {
    id: "4",
    title: "Fish Curry",
    image: "https://images.unsplash.com/photo-1626198226928-95cf65427bd8",
    prepTime: 40,
    difficulty: "Easy" as const,
    isVegetarian: false,
    ingredients: [
      "500g fish pieces",
      "2 onions",
      "2 tomatoes",
      "Coconut milk",
      "Curry leaves",
      "Mustard seeds",
      "Green chilies",
      "Turmeric powder",
      "Red chili powder",
      "Coriander powder",
      "Salt to taste"
    ],
    instructions: [
      "Clean and marinate fish with turmeric and salt",
      "Heat oil in a pan and add mustard seeds",
      "Add curry leaves and chopped onions",
      "Sauté till onions turn translucent",
      "Add tomatoes and green chilies",
      "Add spice powders and sauté",
      "Add water and bring to a boil",
      "Add fish pieces and cook for 10 minutes",
      "Add coconut milk and simmer",
      "Garnish with coriander leaves",
      "Serve hot with rice"
    ]
  }
];

const Recipes: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<string | null>(null);

  const filteredRecipes = sampleRecipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = !filter || 
      (filter === "Veg" && recipe.isVegetarian) || 
      (filter === "Non-Veg" && !recipe.isVegetarian);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <header className="p-4 pt-8 glass-morphism sticky top-0 z-10">
        <div className="flex items-center gap-2 mb-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate("/")}
            className="hover:bg-accent/10"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gradient"
          >
            Recipes
          </Motion>
        </div>
        
        <div className="relative">
          <Input
            type="text"
            placeholder="Search recipes..."
            className="w-full bg-secondary/50 backdrop-blur-sm pl-10 pr-4 py-6 rounded-xl border-accent/20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
        
        <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-none py-2">
          {["All", "Veg", "Non-Veg", "Easy", "Medium", "Hard"].map((option) => (
            <Badge
              key={option}
              variant={filter === option || (option === "All" && !filter) ? "default" : "outline"}
              className={`px-3 py-1 cursor-pointer ${
                filter === option || (option === "All" && !filter)
                  ? "bg-accent text-white"
                  : "bg-transparent hover:bg-accent/10"
              }`}
              onClick={() => setFilter(option === "All" ? null : option)}
            >
              {option}
            </Badge>
          ))}
        </div>
      </header>

      <main className="px-4 py-6 space-y-6">
        <div className="grid grid-cols-1 gap-4">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No recipes found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Recipes;
