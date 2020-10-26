import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  background: ${({theme}) => theme.unchangeableColors.black};
  color: ${({theme}) => theme.unchangeableColors.white};
  height: 50px;
  position: relative;
  bottom: 0;
  width: 100%;
`;

export const SwitchButtonBox = styled.div`
  margin: 0 10px;
  width: 90px;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.5s;
  background: ${({ theme }) => theme.colors.text};
`;

export const SwitchButton = styled.button`
  display: block;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  height: 20px;
  width: 20px;
  padding: 0px;
  transition: all 0.5s;
  transform: ${({ isNormalTheme }) => isNormalTheme ? "unset" : "translateX(300%)"};;
`;