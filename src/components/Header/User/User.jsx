import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'src/redux/auth/selectors';
import { logOut, updateUser } from 'src/redux/auth/operations';
import { selectTheme } from 'src/redux/theme/themeSlice';
import { Modal } from '../../Modal/Modal';
import {
  UserLogoDiv,
  UserImg,
  UserLogo,
  UserName,
  EditModalFrame,
  ModalFrame,
  LogOutBtn,
  Text,
  BtnDiv,
  EditBtn,
  CancelButton,
  CloseBtn,
  NameInput,
  EditIcon,
  SaveBtn,
  PhotoWrapper,
  LabelAddBtn,
  HiddenInput,
  Photo,
  Form,
  LogoutModalFrame,
} from './User.styled';
import userLogoImg from '../../../images/user.svg';
import sprite from '../../../images/sprite.svg';

export const User = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const user = useSelector(selectUser);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isSubmitLogoutModalOpen, setIsSubmitLogoutModalOpen] = useState(false);
  const [inputName, setInputName] = useState(user.name);
  const [photo, setPhoto] = useState(user.avatar);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const avatar = e.target.elements.avatar.files[0];
    dispatch(updateUser({ name, avatar }));
    setIsModalOpen(false);
  };

  const handlePhoto = (e) => {
    const avatar = e.target.files[0];
    const avatarURL = URL.createObjectURL(avatar);
    setPhoto(avatarURL);
  };

  return (
    <UserLogoDiv>
      {user.avatar !== 'undefined' ? (
        <UserLogo onClick={() => setIsModalOpen(true)} />
      ) : (
        <UserImg
          onClick={() => setIsModalOpen(true)}
          width="44"
          height="44"
          src={user.avatar}
          alt="User avatar"
          onError={(event) => {
            event.currentTarget.src = userLogoImg;
          }}
        />
      )}

      <UserName theme={theme}>{user.name}</UserName>
      {isModalOpen && (
        <Modal onClose={setIsModalOpen}>
          {isEditModalOpen ? (
            <EditModalFrame>
              <CloseBtn onClick={() => setIsEditModalOpen(false)}>
                <svg width="32px" height="32px" stroke="#F3F3F3">
                  <use href={`${sprite}#icon-close`} />
                </svg>
              </CloseBtn>
              <Form onSubmit={handleSubmit}>
                <PhotoWrapper>
                  <Photo
                    width="100"
                    height="100"
                    src={photo || userLogoImg}
                    alt="User avatar"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.src = userLogoImg;
                    }}
                  />
                  <LabelAddBtn theme={theme}>
                    +
                    <HiddenInput
                      type="file"
                      id="avatar"
                      name="avatar"
                      accept="image/*"
                      onChange={handlePhoto}
                    />
                  </LabelAddBtn>
                </PhotoWrapper>

                <NameInput
                  type="text"
                  name="name"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                />
                <EditIcon width="20px" height="20px" stroke="#F3F3F3">
                  <use href={`${sprite}#icon-edit`} />
                </EditIcon>
                <SaveBtn type="submit">Save changes</SaveBtn>
              </Form>
            </EditModalFrame>
          ) : (
            <ModalFrame>
              <EditBtn
                type="button"
                title="edit profile"
                onClick={() => setIsEditModalOpen(true)}
              >
                Edit profile
                <svg width="14px" height="14px" stroke="#F3F3F3">
                  <use href={`${sprite}#icon-edit`} />
                </svg>
              </EditBtn>

              <LogOutBtn
                type="button"
                onClick={() => setIsSubmitLogoutModalOpen(true)}
              >
                Log out
              </LogOutBtn>
            </ModalFrame>
          )}
          {isSubmitLogoutModalOpen && (
            <Modal onClose={setIsSubmitLogoutModalOpen}>
              <LogoutModalFrame>
                <CloseBtn onClick={() => setIsSubmitLogoutModalOpen(false)}>
                  <svg width="32px" height="32px" stroke="#F3F3F3">
                    <use href={`${sprite}#close`} />
                  </svg>
                </CloseBtn>
                <Text>Are you sure you want to log out?</Text>
                <BtnDiv>
                  <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
                    Log out
                  </LogOutBtn>
                  <CancelButton
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </CancelButton>
                </BtnDiv>
              </LogoutModalFrame>
            </Modal>
          )}
        </Modal>
      )}
    </UserLogoDiv>
  );
};
