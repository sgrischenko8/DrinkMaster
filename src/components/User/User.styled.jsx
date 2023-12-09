import styled from 'styled-components';
import { colors } from '../../colors';
import { ReactComponent as UserIcon } from 'src/images/user.svg';

export const UserLogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 14px;
  }
`;

const imgStyle = `
 width: 32px;
  height: 32px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  `;

export const UserLogo = styled(UserIcon)`
  ${imgStyle}
`;

export const UserImg = styled.img`
  border-radius: 50%;
  ${imgStyle}
`;

export const UserName = styled.span`
  font-weight: 500;
  max-width: 104px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme }) =>
    theme === 'dark'
      ? ` color: ${colors.light};`
      : `color: ${colors.secondaryDark};`}
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const modalframe = `
position: absolute;
 top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
border-radius: 8px;
  background: #161f37;
`;

export const EditModalFrame = styled.div`
  width: 335px;
  padding: 50px 25px;

  @media screen and (min-width: 768px) {
    padding: 50px 50px 75px;
    width: 500px;
  }
  ${modalframe}
`;

export const ModalFrame = styled.div`
  padding: 18px;
  width: 177px;
  ${modalframe}
`;

export const EditBtn = styled.button`
  margin-bottom: 38px;
  padding: 0;
  color: ${colors.light};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
`;
export const LogOutBtn = styled.button`
  padding: 12px 45px;
  width: 100%;
  font-size: 14px;
  line-height: calc(18 / 14);
  background-color: ${colors.light};
  color: ${colors.secondaryDark};
`;

export const LogoutModalFrame = styled.div`
  width: 335px;
  border-radius: 8px;
  padding: 50px 25px;

  @media screen and (min-width: 768px) {
    padding: 50px;
    width: 500px;
  }
  ${modalframe}
`;
export const CancelButton = styled.button`
  width: 100%;
  background-color: ${colors.disabled};
  color: ${colors.light};
`;
export const Text = styled.p`
  text-align: center;
  color: ${colors.light};
  letter-spacing: -0.28px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    margin-bottom: 37px;
    font-size: 18px;
    line-height: calc(24 / 18);
  }
`;
export const BtnDiv = styled.div`
  display: flex;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 12px;
  }
`;
export const CloseBtn = styled.button`
  padding: 0;
  position: absolute;
  right: 14px;
  top: 14px;
`;

export const Form = styled.form`
  position: relative;
`;

export const PhotoWrapper = styled.div`
  margin-bottom: 66px;
  width: 100px;
  height: 100px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50%;
`;
export const Photo = styled.img`
  object-fit: cover;
`;

export const LabelAddBtn = styled.label`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  font-size: 32px;
  border-radius: 50%;
  background-color: #546081;
  color: ${colors.light};
  cursor: pointer;
  &:hover {
    background-color: ${colors.secondaryDark};
    color: ${colors.light};
    border: 1px solid #f3f3f350;
  }
  &:active {
    color: ${colors.secondaryDark};
    border: 2px solid #4070cd50;
    background-color: ${colors.light};
  }
`;
export const HiddenInput = styled.input`
  display: none;
`;

export const NameInput = styled.input`
  margin-bottom: 18px;
  padding: 18px 24px;
  width: 100%;
  border-radius: 42px;
  background-color: transparent;
  color: ${colors.light};
  border: 1px solid rgba(243, 243, 243, 0.5);
  max-width: 100%;

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
    padding: 14px 24px;
    font-size: 17px;
  }
`;
export const EditIcon = styled.svg`
  position: absolute;
  right: 24px;
  transform: translateY(75%);
`;
export const SaveBtn = styled.button`
  background-color: ${colors.light};
  color: ${colors.secondaryDark};
  width: 100%;
`;
