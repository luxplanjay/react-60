import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import { StickerForm } from './StickerForm/StickerForm';
import { StickerList } from './StickerList/StickerList';
import initialStickers from '../stickers.json';

export class App extends Component {
  state = {
    stickers: initialStickers,
  };

  addSticker = (img, label) => {
    this.setState(prevState => ({
      stickers: [...prevState.stickers, { id: nanoid(), img, label }],
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
