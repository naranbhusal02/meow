"use client";

import Image from "next/image";

interface FlipCardProps {
  image: string;
  fact: string;
  isFlipped: boolean;
  onFlip: () => void;
}

export default function FlipCard({
  image,
  fact,
  isFlipped,
  onFlip,
}: FlipCardProps) {
  return (
    <div className="h-80 cursor-pointer perspective" onClick={onFlip}>
      <div
        className="relative w-full h-full transition-transform duration-500 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front side - Image */}
        <div
          className="absolute w-full h-full bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-amber-200 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt="Cat"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Back side - Fact */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-lg border-4 border-amber-200 flex items-center justify-center p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-center text-white font-semibold text-lg leading-relaxed drop-shadow-lg">
            {fact}
          </p>
        </div>
      </div>
    </div>
  );
}
