import React from "react";

const AccordionItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border border-[#21F6EE33] bg-black rounded-md">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full px-5 py-3 font-medium text-white font-readex gap-3"
          onClick={toggle}
        >
          <span>{question}</span>
          <svg
            className={`w-3 h-3 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="#21F6EE"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {isOpen && (
        <div className="px-5 pb-3 bg-black">
          {answer.map((text, index) => (
            <p key={index} className="mb-2 text-white font-readex">{text}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
