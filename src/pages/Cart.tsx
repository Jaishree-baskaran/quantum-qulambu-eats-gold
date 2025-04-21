
import React from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, ChevronLeft, Plus, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Motion } from "@/components/ui/motion";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Cart: React.FC = () => {
  const { items, totalItems, totalPrice, removeItem, addItem, clearCart } = useCart();
  const [userEmail, setUserEmail] = React.useState<string | null>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email);
      }
    };
    getUser();
  }, []);

  const incrementQuantity = (id: string, name: string, price: number) => {
    addItem({ id, name, price });
  };

  const decrementQuantity = (id: string) => {
    // Get current item
    const item = items.find(item => item.id === id);
    
    if (item) {
      if (item.quantity > 1) {
        // Reduce quantity by removing and re-adding with one less
        removeItem(id);
        for (let i = 0; i < item.quantity - 1; i++) {
          addItem({ id: item.id, name: item.name, price: item.price });
        }
      } else {
        // Just remove the item if quantity is 1
        removeItem(id);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <header className="glass-morphism p-4 sticky top-0 z-10 flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate("/")}
          className="mr-2"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-bold">Your Cart</h1>
        {userEmail && (
          <div className="ml-auto text-sm text-muted-foreground">
            {userEmail}
          </div>
        )}
      </header>

      <main className="p-4 space-y-6">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Add some delicious items to your cart!</p>
              <Button onClick={() => navigate("/")}>Continue Shopping</Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-accent font-semibold">₹{item.price}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center border rounded-full overflow-hidden">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 rounded-full"
                              onClick={() => decrementQuantity(item.id)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 rounded-full"
                              onClick={() => incrementQuantity(item.id, item.name, item.price)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="text-destructive"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Subtotal ({totalItems} items)</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span>₹40</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t">
                  <span>Total</span>
                  <span>₹{totalPrice + 40}</span>
                </div>
              </div>

              <div className="flex flex-col space-y-3 mt-6">
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          )}
        </Motion>
      </main>
    </div>
  );
};

export default Cart;
