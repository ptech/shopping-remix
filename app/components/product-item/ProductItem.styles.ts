import styled from "@emotion/styled";

export const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: calc((4 / 3) * 100%);
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  object-fit: contain;
`;
