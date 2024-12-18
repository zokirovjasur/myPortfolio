import { useEffect, useState } from "react";

const HelloText = ({ helloTextStatus }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [intervals, setIntervals] = useState(1500);
  const words = [
    {
      text: "Hello!",
      font: "text-4xl font-Kanit",
    },
    {
      text: "Salom",
      font: "text-4xl font-Bengali ",
    },
    {
      text: "привет",
      font: "text-4xl font-Hindi",
    },
    {
      text: "Merhaba",
      font: "text-4xl font-Tamil",
    },
    {
      text: "مرحبا",
      font: "text-5xl font-Urdu",
    },
    {
      text: "Merhaba",
      font: "text-4xl font-Japanese",
    },
    {
      text: "Bonjour!",
      font: "text-3xl font-French",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentWord((i) => (currentWord < words.length ? i + 1 : 0));
      if (currentWord == 0) {
        setIntervals(() => 180);
      }

      currentWord === words.length - 1 && helloTextStatus();
    }, intervals);
    console.log(intervals);
    return () => clearTimeout(timer);
  });

  return (
    <div className="text-center text-white">
      <span
        className={`${
          currentWord < words.length
            ? words[currentWord].font + " duration-300"
            : words[words.length - 1].font + " duration-150"
        } animate-slideDown transition-opacity ease-in-out`}
      >
        {currentWord < words.length
          ? words[currentWord].text
          : words[words.length - 1].text}
      </span>
    </div>
  );
};

export default HelloText;
