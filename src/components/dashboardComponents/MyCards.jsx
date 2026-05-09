import React from "react";
import { MyCreditCard } from "./MyCreditCard";
import { useCards } from "../../hooks/useCards";

export function MyCards() {
  const { data: cards, isLoading, error } = useCards();

  if (isLoading) {
    return <div>Loading cards...</div>;
  }
  if (error) {
    return <div>Error loading cards: {error.message}</div>;
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-[22px] font-semibold text-[#343C6A]">My Cards</h2>
        <button className="text-[17px] font-semibold text-[#343C6A] hover:underline">
          + Add Card
        </button>
      </div>

      {/* no-scrollbar sınıfını buraya ekledik */}
      <div className="flex overflow-x-auto gap-5 pb-2 no-scrollbar">
        {/* Kartların genişliğini alanınıza göre ayarlayın (örn: 350px) */}
        {cards.map((card) => (
          <div key={card.id} className="min-w-[320px] md:min-w-87.5 shrink-0">
            <MyCreditCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}
