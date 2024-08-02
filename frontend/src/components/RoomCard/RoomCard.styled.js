import styled from "styled-components";

const borderColors = [{ 1: "red", 2: "green", 3: "blue", 4: "yellow" }];

export const RoomCardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d1d1d;
  border-radius: 12px;
  margin-top: 30px;
  width: 320px;
  height: 160px;
`;

export const RoomMain = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  width: 95%;
  position: relative;
`;
export const SpeakerContainers = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  position: relative;
`;
export const SpeakersAvatar = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["randomcolors", "speakerLength"].includes(prop),
})`
  display: flex;
  flex-direction: column;
  position: relative;
  img,
  div {
    min-width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
    &:last-child {
      position: ${(props) =>
        props.speakerLength === 1 ? "initial" : "absolute"};
      top: 25px;
      left: 20px;
    }
  }
`;
export const SpeakersName = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: 300;
    margin-left: 30px;
    white-space: nowrap;
  }
`;
export const Topic = styled.span`
  max-width: 300px;
`;

export const JoinRoom = styled.div`
  margin-top: 25px;
  text-align: center;
  width: 100%;
  border-top: 1px solid #353535;
  opacity: 0.8;
  cursor: pointer;
  span {
    width: 100%;
  }
  &:hover {
    opacity: 1;
  }
`;
