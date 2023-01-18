import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import { StickerForm } from './StickerForm/StickerForm';
import { StickerList } from './StickerList/StickerList';
import initialStickers from '../stickers.json';

export class App extends Component {
  state = {
    stickers: [],
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

  componentDidMount() {
    const savedStickers = localStorage.getItem('stickers');
    if (savedStickers !== null) {
      const parsedStickers = JSON.parse(savedStickers);
      this.setState({ stickers: parsedStickers });
    } else {
      this.setState({ stickers: initialStickers });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.stickers !== this.state.stickers) {
      localStorage.setItem('stickers', JSON.stringify(this.state.stickers));
    }
  }

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
