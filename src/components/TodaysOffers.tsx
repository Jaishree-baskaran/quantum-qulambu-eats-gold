
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Offer {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  discount?: string;
  expiring?: boolean;
}

const offers: Offer[] = [
  {
    id: 1,
    title: "Buy 1 Get 1 Free",
    description: "On all Dosa varieties this weekend",
    image: "https://images.unsplash.com/photo-1667030489429-c5fb604556d0",
    bgColor: "from-purple-600 to-blue-700",
    expiring: true,
  },
  {
    id: 2,
    title: "40% OFF",
    description: "On family thali platters",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
    bgColor: "from-orange-500 to-red-600",
    discount: "40%",
  },
  {
    id: 3,
    title: "Free Delivery",
    description: "On orders above ₹500",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
    bgColor: "from-green-500 to-emerald-700",
  },
];

const TodaysOffers: React.FC = () => {
  const [hoveredOffer, setHoveredOffer] = useState<number | null>(null);

  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-none py-2">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          className={`min-w-[280px] overflow-hidden border-0 rounded-xl card-hover relative ${
            hoveredOffer === offer.id ? 'ring-1 ring-accent/50' : ''
          }`}
          onMouseEnter={() => setHoveredOffer(offer.id)}
          onMouseLeave={() => setHoveredOffer(null)}
        >
          {offer.expiring && (
            <div className="absolute top-2 left-2 z-10">
              <Badge variant="outline" className="bg-red-500/20 text-red-400 border-red-500/30 flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                <span className="text-xs">Ending soon</span>
              </Badge>
            </div>
          )}
          
          {offer.discount && (
            <div className="absolute top-2 right-2 z-10">
              <Badge className="bg-accent text-accent-foreground">{offer.discount}</Badge>
            </div>
          )}
          
          <div 
            className={`relative h-32 bg-gradient-to-r ${offer.bgColor} overflow-hidden`}
          >
            <div className="absolute inset-0 bg-black/20 transition-transform duration-500">
              <img
                src={`${offer.image}?w=400&h=250&fit=crop`}
                alt={offer.title}
                className={`object-cover w-full h-full mix-blend-overlay transition-transform duration-700 ${
                  hoveredOffer === offer.id ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-bold text-2xl mb-1">{offer.title}</h3>
              <p className="text-sm text-white/80">{offer.description}</p>
            </div>
          </div>
          <CardContent className="flex justify-end p-2">
            <Button 
              variant="ghost" 
              className="text-accent hover:text-accent/80 px-2 btn-active group" 
              size="sm"
            >
              <span className="mr-1 group-hover:underline">Redeem Now</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TodaysOffers;
