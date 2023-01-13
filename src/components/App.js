import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import { StickerForm } from './StickerForm';
import { StickerList } from './StickerList';
import initialStickers from '../stickers.json';

/**
 * 1. Можно добавлять новые стикеры через форму.
 * 2. Может быть открыт только один стикер, остальные закрыты.
 *    То есть при открытии нового, закрывается тот, что был открыт.
 */

export class App extends Component {
  state = {
    stickers: initialStickers,
  };

  addSticker = (img, label) => {
    this.setState(prevState => ({
      stickers: [
        ...prevState.stickers,
        {
          id: nanoid(),
          img,
          label,
        },
      ],
    }));
  };

  deleteSticker = stickerId => {
    this.setState(prevState => ({
      stickers: prevState.stickers.filter(sticker => sticker.id !== stickerId),
    }));
  };

  render() {
    return (
      <Layout>
        <StickerForm onSubmit={this.addSticker} />
        <StickerList
          items={this.state.stickers}
          onDelete={this.deleteSticker}
        />
      </Layout>
    );
  }
}
