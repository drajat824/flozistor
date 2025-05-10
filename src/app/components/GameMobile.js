import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Menggunakan CSS Object sebagai 'gambar' yang akan digunakan dalam game
const colors = [
  'red', 'blue', 'green', 'yellow', 'red', 'blue', 'green', 'yellow'
];

// Fungsi untuk mengacak urutan warna
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const MatchingGame = () => {
  const [cards, setCards] = useState(shuffleArray(colors));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const flipCard = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    // Cek apakah 2 kartu sudah terbuka
    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards((prev) => [...prev, cards[firstIndex]]);
        setScore((prev) => prev + 1);
      }

      // Tunggu 1 detik sebelum menutup kartu yang tidak cocok
      setTimeout(() => {
        setFlippedCards([]);
        if (matchedCards.length === cards.length / 2 - 1) {
          setGameOver(true);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    if (gameOver) {
      setTimeout(() => {
        alert(`Game Over! Your score is ${score}`);
        setCards(shuffleArray(colors));
        setFlippedCards([]);
        setMatchedCards([]);
        setScore(0);
        setGameOver(false);
      }, 1000);
    }
  }, [gameOver, matchedCards, cards, score]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 100px)', // Ukuran kartu dikurangi agar pas 500px
        gridTemplateRows: 'repeat(2, 100px)', // Jumlah baris 2
        gap: '10px',
        justifyContent: 'center',
        backgroundColor: '#282c34',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        width: '90vw', // Mengatur lebar game
        height: 'auto', // Mengatur tinggi game
      }}
    >
      {cards.map((color, index) => (
        <motion.div
          key={index}
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '8px',
            backgroundColor: flippedCards.includes(index) || matchedCards.includes(color)
              ? color
              : 'grey',  // Warna abu-abu saat kartu tertutup
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onClick={() => flipCard(index)}
          animate={{
            opacity: flippedCards.includes(index) || matchedCards.includes(color) ? 1 : 0.6,
          }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          {(flippedCards.includes(index) || matchedCards.includes(color)) ? null : (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '24px',
                color: '#fff',
              }}
            >
              ?
            </div>
          )}
        </motion.div>
      ))}
      {!gameOver && (
        <div
          style={{
            left: 10,
            color: '#fff',
            fontSize: '18px',
          }}
        >
          Score: {score}
        </div>
      )}
    </div>
  );
};

export default MatchingGame;
