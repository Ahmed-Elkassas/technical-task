import styled from "styled-components";

export const ImgContainer = styled.div`
  height: 40px;
  width: 40px;
  background: gray;
  border-radius: 3px;
`;

export const EmptyCart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
    img {
        width: 50px;
        height: 50px;
        margin: auto
    }
`;
