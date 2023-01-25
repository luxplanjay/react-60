import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import { StickerForm } from './StickerForm/StickerForm';
import { StickerList } from './StickerList/StickerList';
import initialStickers from '../stickers.json';

const getInitialStickerState = () => {
  const savedStickers = localStorage.getItem('stickers');
  if (savedStickers !== null) {
    const parsedStickers = JSON.parse(savedStickers);
    return parsedStickers;
  } else {
    return initialStickers;
  }
};

export const StickersApp = () => {
  const [stickers, setStickers] = useState(getInitialStickerState);

  const addSticker = (img, label) => {
    setStickers(prevStickers => [
      ...prevStickers,
      { id: nanoid(), img, label },
    ]);
  };

  const deleteSticker = stickerId => {
    setStickers(prevStickers =>
      prevStickers.filter(sticker => sticker.id !== stickerId)
    );
  };

  useEffect(() => {
    localStorage.setItem('stickers', JSON.stringify(stickers));
  }, [stickers]);

  return (
    <Layout>
      <StickerForm onSubmit={addSticker} />
      <StickerList items={stickers} onDelete={deleteSticker} />
    </Layout>
  );
};
