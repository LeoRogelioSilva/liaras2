import React, { useEffect, useState } from "react";
import "./Explosion.css";

interface Explosion {
  emoji: string;
  randomX: string;
  randomY: string;
  duration: string;
}

const EmojiExplosion = () => {
  const [emojis, setEmojis] = useState<Explosion[]>([]);
  const emojiList = [
    "❤️",
    "💛",
    "💚",
    "💙",
    "💙",
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
    "🍑",
    "🍓",
    "🍑",
    "🍓",
    "🍑",
    "🍓",
  ];

  useEffect(() => {
    const newEmojis = Array.from({ length: 30 }, () => ({
      emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
      randomX: `${Math.random() * 100 - 50}vw`,
      randomY: `${Math.random() * 100 - 50}vh`,
      duration: `${1 + Math.random() * 1.5}s`,
    }));

    setEmojis(newEmojis);

    // Remove a explosão após a animação
    const timer = setTimeout(() => setEmojis([]), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {emojis.map((emojiData, index) => (
        <span
          key={index}
          className="exploding-emoji"
          style={
            {
              "--x": emojiData.randomX,
              "--y": emojiData.randomY,
              animationDuration: emojiData.duration,
            } as React.CSSProperties
          }
        >
          {emojiData.emoji}
        </span>
      ))}
    </>
  );
};

export default EmojiExplosion;
