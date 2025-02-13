"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
  },
  {
    question: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
  },
  {
    question: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
  },
  {
    question: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
  },
  {
    question: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
  },
  {
    question: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
  },
  {
    question: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
  },
  {
    question: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split the FAQ data into two arrays for two columns
  const middleIndex = Math.ceil(faqData.length / 2);
  const leftColumnFAQs = faqData.slice(0, middleIndex);
  const rightColumnFAQs = faqData.slice(middleIndex);

  const FAQColumn = ({
    items,
    startIndex,
  }: {
    items: FAQItem[];
    startIndex: number;
  }) => (
    <div className="space-y-4 w-full">
      {items.map((faq, index) => {
        const actualIndex = startIndex + index;
        return (
          <div
            key={actualIndex}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <button
              type="button"
              onClick={() => toggleQuestion(actualIndex)}
              className="flex items-center justify-between w-full p-9 text-left hover:bg-gray-50 "
            >
              <span className="text-base text-gray-900">{faq.question}</span>
              <span className="flex items-center justify-center w-6 h-6 bg-yellow-400 rounded ">
                {openIndex === actualIndex ? (
                  <Minus className="w-4 h-4 text-black" />
                ) : (
                  <Plus className="w-4 h-4 text-black" />
                )}
              </span>
            </button>

            <div
              className={`transition-all duration-200 ${
                openIndex === actualIndex ? "block bg-blue-50" : "hidden"
              }`}
            >
              <p className="p-4 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-4xl my-5 font-sans font-normal">FAQs</h1>
        <p className="w-2/5 text-center text-gray-600">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </p>
      </div>
      <section className="py-5 bg-white sm:py-9 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <FAQColumn items={leftColumnFAQs} startIndex={0} />
            <FAQColumn items={rightColumnFAQs} startIndex={middleIndex} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
