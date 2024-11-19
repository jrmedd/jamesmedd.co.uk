import styled, { css } from 'styled-components'

const StyledPicture = styled.picture(props => css`
  display: block;
  border-radius: 50%;
  overflow: hidden;
  width: ${(props) => props.$size ?? 'unset' };
  height: ${(props) => props.$size ?? 'unset' };
`)

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CircularImage = props => {
  if (!props.src) {
    console.error('Filename is required for ImageLoader component.');
    return null;
  }

  const fileBase = props.src?.replace(/\.(jpg|jpeg|webp|png)$/i, '');

  return (
    <StyledPicture $size={props.size}>
      <source srcSet={`/public/${fileBase}.webp`} type="image/webp" />
      <StyledImg src={`/public/${fileBase}.jpg`} alt={props.alt} />
    </StyledPicture>
  );
};
