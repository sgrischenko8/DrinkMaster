import {
  RightsAndPolicyWrap,
  PolicyLinksWrap,
  Button,
  PrivacyWrap,
  CloseBtn,
} from './FooterRightsAndPolicy.styled';
import { useState } from 'react';
import { Modal } from 'src/components/Modal/Modal';
import { Privacy } from 'src/components/Footer/FooterRightsAndPolicy/Privacy';
import { TermsOfService } from 'src/components/Footer/FooterRightsAndPolicy/TermsOfService';
import sprite from '../../../images/sprite.svg';

export const FooterRightsAndPolicy = () => {
  const [whatModalIsOpen, setWhatModalIsOpen] = useState(null);

  return (
    <RightsAndPolicyWrap>
      <p>&copy;2023 Drink Master. All rights reserved.</p>
      <PolicyLinksWrap>
        <Button height={40} onClick={() => setWhatModalIsOpen('Privacy')}>
          Privacy Policy
        </Button>
        <Button
          height={40}
          onClick={() => setWhatModalIsOpen('TermsOfService')}
        >
          Terms of Service
        </Button>
        {whatModalIsOpen && (
          <Modal onClose={setWhatModalIsOpen}>
            <PrivacyWrap>
              <CloseBtn onClick={() => setWhatModalIsOpen(null)}>
                <svg width="24px" height="24px" stroke="#F3F3F3">
                  <use href={`${sprite}#close`} />
                </svg>
              </CloseBtn>
              {whatModalIsOpen === 'Privacy' ? (
                <Privacy onClose={setWhatModalIsOpen} />
              ) : (
                <TermsOfService onClose={setWhatModalIsOpen} />
              )}
            </PrivacyWrap>
          </Modal>
        )}
      </PolicyLinksWrap>
    </RightsAndPolicyWrap>
  );
};
