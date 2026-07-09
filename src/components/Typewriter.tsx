"use client";

import { useEffect, useState } from "react";

const WORDS = ["convert.", "grow.", "scale.", "get clicked."];

const TYPE_MS = 75;
const DELETE_MS = 40;
const HOLD_MS = 1700;
const REST_MS = 400;

export default function Typewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIndex];
    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (!deleting && text === word) delay = HOLD_MS;
    if (deleting && text === "") delay = REST_MS;

    const id = setTimeout(() => {
      if (!deleting) {
        if (text === word) {
          setDeleting(true);
        } else {
          setText(word.slice(0, text.length + 1));
        }
      } else {
        if (text === "") {
          setDeleting(false);
          setWordIndex((wordIndex + 1) % WORDS.length);
        } else {
          setText(word.slice(0, text.length - 1));
        }
      }
    }, delay);

    return () => clearTimeout(id);
  }, [text, deleting, wordIndex]);

  return (
    <span className="whitespace-nowrap text-primary">
      {text}
      <span
        className="caret ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] rounded-full bg-primary"
        aria-hidden="true"
      />
    </span>
  );
}
