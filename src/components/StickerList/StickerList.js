import { useState } from 'react';
import { Sticker } from 'components/Sticker/Sticker';
import { List } from './StickerList.styled';

export const StickerList = ({ items, onDelete }) => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const changeSelected = idx => {
    // ...
  };

  return (
    <List>
      {items.map((item, idx) => (
        <li key={idx}>
          <Sticker sticker={item} onDelete={onDelete} />
        </li>
      ))}
    </List>
  );
};
