"use client";
import { useState } from "react";
import { Button } from '@mui/material';

export default function Valentine() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Non",
      "Es-tu sûr ?",
      "Et si je demandais vraiment gentiment ?",
      "S'il te plaît",
      "Avec un gâteau au chocolat sur le dessus",
      "Que dirais-tu d'un smoothie au matcha ?",
      "S'IL TE PLAÎT, MON PETIT POOKIE",
      "Mais :*(",
      "Je vais vraiment pleurer",
      "Oui, je suis un fantôme maintenant",
      "D'accord, tu parles au fantôme de Nathan",
      "S'il te plaît, ma chérie",
      ":((((",
      "S'IL TE PLAÎT, S'IL TE PLAÎT !",
      "Non :(",
      "Je t'en prie, pense-y sérieusement !",
      "C'est une question de vie ou de mort !",
      "Tu sais que je suis un grand fan de chocolat !",
      "Souviens-toi des bons moments que nous avons partagés !",
      "Je suis sûr que tu ne veux pas me voir triste !",
      "Allez, fais-le par amour !",
      "Je te promets un câlin géant !",
      "Je ferai des cookies pour toi !",
      "Pense à tous les rires que nous avons eus !",
      "Je t'en prie, fais-le pour notre amitié !",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center" style={{ background: 'linear-gradient(120.3deg, #FFD6A5 31.56%, rgba(255, 255, 255, 0) 94.83%)', overflow: 'hidden' }}>
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! Je t&apos;aime Renée !! ❤️</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Renée, Veux-tu être ma Valentine ?</h1>
          <div className="flex items-center">
            <Button
              variant="contained"
              style={{ backgroundColor: 'green', fontSize: yesButtonSize }}
              className="mr-4"
              onClick={() => setYesPressed(true)}
            >
              Oui
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: 'red' }}
              onClick={handleNoClick}
            >
              {noCount === 0 ? "Non" : getNoButtonText()}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
