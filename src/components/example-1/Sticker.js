import { Component } from 'react';
import { CardWrapper, Image, Label } from 'components/Sticker.styled';

export class Sticker extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    const {
      sticker: { img, label },
    } = this.props;

    return (
      <CardWrapper onClick={this.toggle}>
        <Image src={img} alt={label} />
        {isOpen && <Label>{label}</Label>}
      </CardWrapper>
    );
  }
}
