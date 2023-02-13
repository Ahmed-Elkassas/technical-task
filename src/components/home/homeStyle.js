import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(251px, 1fr));
  gap: 1.3rem;
  padding: 29.5px 0px 116px;
`;

export const CardContent = styled.div`
  background-color: ${(props) => props.background};
  width: 262px;
  height: 183px;
  margin: auto;
  padding: 10px;
  border-radius: 3px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTitle = styled.h4`
  color: #fff;
  font-size: 17px;
  font-weight: 400;
  margin: 15px 0;
`;
export const CardDescription = styled.p`
  color: #ffffff5c;
  font-size: 15px;
  font-weight: 200;
  margin-top: 5px;
`;
export const CardValue = styled.h3`
  color: #fff;
  font-size: 19px;
  font-weight: 500;
  margin: 0;
`;
export const AddToCardBtn = styled.button`
  border: unset;
  outline: none;
  border-radius: 50%;
  padding: 15px;
  background-color: rgb(0 0 0 / 36%);
  color: #fff;
  cursor: pointer;
`;

export const ActionButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center
`