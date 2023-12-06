import { colors } from '../../colors';
import styled from 'styled-components';
export const BackDrop = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  z-index: 50;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background: ${colors.disabled};
  overflow: hidden !important;
`;
export const Modal = styled.div`
  display: none;
  z-index: 100;
  ${({ open }) =>
    open &&
    `
    position: absolute;
    display: block;
width:335px;
border-radius: 8px;
background: #161F37;
padding:50px 25px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: start;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    padding:50px 50px 75px;
    width:500px;
  }
  `}
`;
export const TextDropDown = styled.div`
  color: ${colors.light};
  width: 100%;
  font-weight: 500;
  margin-bottom: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const LogOutBtn = styled.button`
  background-color: ${colors.light};
  color: ${colors.secondaryDark};
`;
export const LogOutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;
export const CancelButton = styled.button`
  background-color: ${colors.disabled};
  color: ${colors.light};
`;
export const Text = styled.span`
  text-align: center;
  color: ${colors.light};
  letter-spacing: -0.28px;
  margin: 0 auto 35px;
`;
export const CloseBtn = styled.button`
  margin-bottom: 12px;
  padding: 0;
  position: absolute;
  right: 14px;
  top: 14px;
`;
export const SaveBtn = styled.button`
  background-color: ${colors.light};
  color: ${colors.secondaryDark};
  width: 100%;
`;
export const NameInput = styled.input`
  border: none;
  border-radius: 42px;
  padding: 12px 45px;
  font-weight: 600;
  font-size: 14px;
  font-family: Manrope;

  background-color: transparent;
  color: ${colors.light};
  border: 1px solid rgba(243, 243, 243, 0.5);
  max-width: 100%;
  margin-bottom: 18px;
`;
export const PhotoWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50%;
  overflow: hidden;
`;
export const AddBtn = styled.label`
  width: 32px;
  height: 32px;
  margin: 0;
  border-radius: 50%;
  position: relative;
  left: 50%;
  display: block;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
export const Photo = styled.div`
  // position: relative;
  // left: 50%;
  // transform: translate(-50%, 0);
  margin-bottom: 50px;
`;
export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const ImgInput = styled.input`
  display: none;
`;
