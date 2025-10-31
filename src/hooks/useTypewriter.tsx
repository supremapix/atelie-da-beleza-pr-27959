import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypewriter = ({ text, speed = 100, delay = 0 }: UseTypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsComplete(true);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, delay]);

  return { displayedText, isComplete };
};
