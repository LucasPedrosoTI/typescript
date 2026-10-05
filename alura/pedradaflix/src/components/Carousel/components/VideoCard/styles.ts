import styled from "styled-components";

interface Props {
  url: any;
}

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }: Props) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  @keyframes increase {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.25, 1.25);
    }
    100% {
      transform: scale(1.5, 1.5);
    }
  }

  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
    animation: increase 1s linear;
    transform: scale(1.5, 1.5);
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
