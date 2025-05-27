
import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
  accordionStyle: 'transport' | 'tips';
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, accordionStyle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const baseButtonClass = "w-full text-left p-4 font-semibold outline-none transition-colors duration-300 flex justify-between items-center";
  const transportButtonClass = "bg-[#D8CBA7] text-cafe-rouge hover:bg-cobblestone-beige";
  const tipsButtonClass = "bg-[#B0E0E6] text-royal-velvet hover:bg-[#87CEEB]";
  
  const buttonClass = `${baseButtonClass} ${accordionStyle === 'transport' ? transportButtonClass : tipsButtonClass}`;

  return (
    <div className="border border-parisian-gray rounded-lg overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClass}
      >
        {title}
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out bg-white ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default AccordionItem;