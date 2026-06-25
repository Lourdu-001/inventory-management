import React from 'react';

interface Props {
  fontSize: string; // e.g., "16px"
  bgColor: string;  // e.g., "#008f4c"
  textColor: string; // e.g., "#ffffff"
  text: string;      // Added missing text property
}

export const Button = ({ fontSize, bgColor, textColor, text }: Props) => {
  return (
    <button 
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontSize: fontSize
      }}
      className="px-4 py-2 rounded" // Global layout styles can stay here
    >
      {text}
    </button>
  );
};
