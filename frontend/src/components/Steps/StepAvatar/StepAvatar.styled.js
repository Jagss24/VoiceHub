import styled from "styled-components";

export const ImgInput = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: none;
  outline: none;
  overflow: hidden;
`;
export const UploadText = styled.label`
  font-size: 1rem;
  color: #20bd5f;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #20bd5f;
`;

export const ErrorStyled = styled.p`
  font-size: 0.7rem;
  color: red;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
`;

export const SkipStyled = styled.span`
  position: absolute;
  top: 3%;
  right: 3%;
  cursor: pointer;
  color: #20bd5f;
  font-size: 0.85rem;
`;

export const GoBackStyled = styled.span`
  position: absolute;
  top: 3%;
  left: 3%;
  cursor: pointer;
  color: #20bd5f;
  font-size: 0.85rem;
`;
