import React, { useEffect, useState } from "react";
import "./Falling.css";

const FallingEmojis = () => {
  const [emojis, setEmojis] = useState<string[]>([]);

  useEffect(() => {
    const emojiList = [
      "❤️",
      "💛",
      "💚",
      "💙",
      "💙",
      "💜",
      "🖤",
      "💖",
      "💗",
      "💓",
      "💞",
      "💕",
      "💘",
      "💝",
      "🍑🍓",
    ];
    const interval = setInterval(() => {
      const randomEmoji =
        emojiList[Math.floor(Math.random() * emojiList.length)];
      setEmojis((prev) => [...prev, randomEmoji]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="falling-emojis-container">
      {emojis.map((emoji, index) => (
        <span
          key={index}
          className="falling-emoji"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default FallingEmojis;
