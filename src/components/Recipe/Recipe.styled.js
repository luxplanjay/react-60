import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding: 8px;
  width: 320px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const RecipeInfo = styled.div`
  display: flex;
  gap: 8px;
`;

export const InfoBlock = styled.p`
  margin: 0;
  padding: 8px 0;
  display: flex;
  align-items: center;

  svg {
    color: orangered;
  }
`;

export const BadgeList = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0;
`;

export const Badge = styled.span`
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px;

  background-color: ${({ variant, isActive }) => {
    const defaultColor = 'lightgray';
    switch (variant) {
      case 'easy':
        return isActive ? 'green' : defaultColor;
      case 'medium':
        return isActive ? 'blue' : defaultColor;
      case 'hard':
        return isActive ? 'red' : defaultColor;
      default:
        throw new Error('Unsupported variant prop');
    }
  }};

  color: ${props => {
    return props.isActive ? 'white' : 'black';
  }};
`;
