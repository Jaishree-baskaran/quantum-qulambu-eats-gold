
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const offers = [
  {
    id: 1,
    title: "Buy 2 Get 1 Free",
    description: "On selected South Indian dishes",
    image: "https://images.unsplash.com/photo-1689879458023-459d70d2c0a7",
    bgColor: "from-purple-600 to-blue-700",
  },
  {
    id: 2,
    title: "20% OFF",
    description: "On weekend family platters",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
    bgColor: "from-orange-500 to-red-600",
  },
  {
    id: 3,
    title: "Free Delivery",
    description: "On orders above $25",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
    bgColor: "from-green-500 to-emerald-700",
  },
];

const TodaysOffers: React.FC = () => {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-none py-2">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          className="min-w-[280px] overflow-hidden border-0 rounded-xl card-hover"
        >
          <div 
            className={`relative h-32 bg-gradient-to-r ${offer.bgColor} overflow-hidden`}
          >
            <div className="absolute inset-0 bg-black/20">
              <img
                src={`${offer.image}?w=400&h=250&fit=crop`}
                alt={offer.title}
                className="object-cover w-full h-full mix-blend-overlay"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-bold text-2xl mb-1">{offer.title}</h3>
              <p className="text-sm text-white/80">{offer.description}</p>
            </div>
          </div>
          <CardContent className="flex justify-end p-2">
            <Button variant="ghost" className="text-accent hover:text-accent/80 px-2" size="sm">
              <span className="mr-1">Redeem Now</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TodaysOffers;
