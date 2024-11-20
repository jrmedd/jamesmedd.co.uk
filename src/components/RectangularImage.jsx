import styled, { css } from 'styled-components'

const StyledPicture = styled.picture(props => css`
  display: block;
  border-radius: .25rem;
  overflow: hidden;
  width: 16rem;
  height: auto;
  max-width: 100%;
`)

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RectangularImage = props => {
  if (!props.src) {
    console.error('Filename is required for ImageLoader component.');
    return null;
  }

  const fileBase = props.src?.replace(/\.(jpg|jpeg|webp|png)$/i, '');

  return (
    <StyledPicture $size={props.size}>
      <source srcSet={`/${fileBase}.webp`} type="image/webp" />
      <StyledImg src={`/${fileBase}.jpg`} alt={props.alt} />
    </StyledPicture>
  );
};
