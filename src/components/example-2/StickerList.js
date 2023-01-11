import { Component } from 'react';
import { Sticker } from './Sticker';
import { List } from 'components/StickerList.styled';

export class StickerList extends Component {
  state = {
    selectedIdx: null,
  };

  changeIdx = idx => {
    this.setState({
      selectedIdx: idx,
    });
  };

  render() {
    const { selectedIdx } = this.state;
    const { stickers } = this.props;

    return (
      <List>
        {stickers.map((sticker, idx) => (
          <li key={idx}>
            <Sticker
              sticker={sticker}
              onSelect={() => this.changeIdx(idx)}
              isSelected={selectedIdx === idx}
            />
          </li>
        ))}
      </List>
    );
  }
}
