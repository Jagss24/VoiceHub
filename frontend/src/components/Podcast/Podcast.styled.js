import styled from "styled-components";

export const AudioConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 25px;
`;

export const AudioElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > p {
    text-align: center;
    margin: 0;
  }
`;

export const AvtarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1d1d1d;
`;
