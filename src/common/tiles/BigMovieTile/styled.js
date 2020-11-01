import styled from "styled-components";
import { Image } from "./../tileStyles";

export const BigMovieImage = styled(Image)`
  float: left;
  object-fit: cover;
  width: 312px;
  height: 464px;
  margin-right: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    margin-right: 25px;
    float: unset;
    height: 316px;
    width: unset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 169px;
    margin-right: 16px;
  }
`;