import React, { useEffect, useState } from 'react';

const AnimatedHeading = ({ text }) => {
  const [visibleLetters, setVisibleLetters] = useState([]);
  const totalLetters = text.length;

  useEffect(() => {
    let mounted = true;

    const animateLetters = () => {
      if (!mounted) return;

      setVisibleLetters((prevVisibleLetters) => {
        const nextIndex =
          prevVisibleLetters.length < totalLetters
            ? prevVisibleLetters.length + 1
            : 1;

        return Array.from(text.slice(0, nextIndex));
      });
    };

    const interval = setInterval(animateLetters, 150);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [text, totalLetters]);

  return (
    <h1 className="text-2xl sm:text-5xl font-bold">
      {visibleLetters.map((letter, index) => (
        <span key={index} className="animate-fade-in">
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedHeading;
