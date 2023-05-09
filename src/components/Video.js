import { useState, useEffect } from "react";

const TypingComponent = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const phrases = ["languages", "locations", "app versions"];

    const typingInterval = setInterval(() => {
      if (isTyping) {
        const currentPhraseLength = currentPhrase.length;
        const targetPhrase = phrases[currentPhraseIndex];
        const targetPhraseLength = targetPhrase.length;
        const isDeleting =
          currentPhraseLength > 0 && currentPhraseLength >= targetPhraseLength;

        const nextPhrase = isDeleting
          ? targetPhrase.substring(0, currentPhraseLength - 1)
          : targetPhrase.substring(0, currentPhraseLength + 1);

        setCurrentPhrase(nextPhrase);

        if (nextPhrase === targetPhrase) {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentPhrase("");
            setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
            setIsTyping(true);
          }, 2000);
        }
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentPhraseIndex, currentPhrase, isTyping]);

  return <span className="text-gradient">{currentPhrase}</span>;
};

const Video = () => {
  return (
    <div className="my-12">
      <div className="mb-12 text-center font-bold">
        <h1 className="text-2xl sm:text-4xl">
          Insights from user reviews across different <TypingComponent />
        </h1>
      </div>
      <div className="grid mt-6">
        <iframe
          className="rounded-lg shadow-lg shadow-blue-500 place-self-center w-5/6 h-96"
          src="https://www.youtube.com/embed/djCCNyUloNw"
          title="Supertype Summary (Programmatic Report Generation service)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
export default Video;
