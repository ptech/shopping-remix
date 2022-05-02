import styled from "@emotion/styled";
import {mediumGrey} from "~/theme/colors";

export const Main = styled.main`
  display: flex;
  padding: 5rem 6rem 0;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 3rem;
  
    & img {
      width: 100%;
      max-width: 100%;
    }
`;

export const ProductInformation = styled.div`
    padding-left: 3rem;
`;

export const Category = styled.p`
  margin-bottom: 1rem;
  color: ${mediumGrey};
  text-transform: capitalize;
`;

