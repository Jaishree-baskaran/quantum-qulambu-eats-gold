import React from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Motion } from "@/components/ui/motion";
import { createClient } from "@supabase/supabase-js";
import { CartSheet } from "@/components/CartSheet";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface HomeHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ searchQuery, setSearchQuery }) => {
  const [userEmail, setUserEmail] = React.useState<string | null>(null);

  React.useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email);
      }
    };
    getUser();
  }, []);

  return (
    <header className="p-4 pt-8 glass-morphism sticky top-0 z-10">
      <div className="flex items-center justify-between mb-4">
        <Motion
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gradient relative"
        >
          Quantum Qulambu
          {userEmail && (
            <span className="absolute -top-2 -right-4">
              <Badge variant="outline" className="bg-accent/10 text-accent text-xs">
                {userEmail}
              </Badge>
            </span>
          )}
        </Motion>
        <CartSheet />
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
  );
};

export default HomeHeader;
