"use client";

import { useState } from "react";
import FlipCard from "./flip-card";

const cats = [
  {
    id: 1,
    image: "/orange-tabby-cat-close-up.jpg",
    fact: "🐱 Cats Have Fewer Taste Buds Than Dogs or People",
  },
  {
    id: 2,
    image: "/white-fluffy-cat.jpg",
    fact: "😴 Only 20% of Orange Cats Are Female",
  },
  {
    id: 3,
    image: "/black-cat-green-eyes.jpg",
    fact: "👀 Cats have excellent night vision and can see in low light",
  },
  {
    id: 4,
    image: "/ginger-kitten-playing.png",
    fact: "🎵 Cats make over 100 different sounds to communicate",
  },
  {
    id: 5,
    image: "/gray-tabby-cat-relaxing.jpg",
    fact: "🧬 Cats share 95% of their DNA with tigers",
  },
  {
    id: 6,
    image: "/calico-cat-portrait.jpg",
    fact: "🏃 Cats can run up to 30 mph (48 km/h)",
  },
  {
    id: 7,
    image: "/siamese-cat.png",
    fact: "👃 Cats have a third eyelid called the nictitating membrane",
  },
  {
    id: 8,
    image: "/brown-and-white-cat.jpg",
    fact: "❤️ A cat's purr vibrates at a frequency that may promote healing",
  },
];

export default function CatGallery() {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  const toggleFlip = (id: number) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cats.map((cat) => (
        <FlipCard
          key={cat.id}
          image={cat.image}
          fact={cat.fact}
          isFlipped={flipped[cat.id] || false}
          onFlip={() => toggleFlip(cat.id)}
        />
      ))}
    </div>
  );
}
