import {
  RightsAndPolicyWrap,
  AllRightsText,
  PolicyLinksWrap,
  Button,
} from './FooterRightsAndPolicy.styled';
import { useState } from 'react';
import { Modal } from 'src/components/Modal/Modal';
import { Privacy } from 'src/components/Privacy/Privacy';
import { TermsOfService } from 'src/components/TermsOfService/TermsOfService';

export const FooterRightsAndPolicy = () => {
  const [whatModalIsOpen, setWhatModalIsOpen] = useState(null);

  return (
    <RightsAndPolicyWrap>
      <AllRightsText>
        &copy;2023 Drink Master. All rights reserved.
      </AllRightsText>
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
          <Modal
            onClose={setWhatModalIsOpen}
            content={
              whatModalIsOpen === 'Privacy' ? <Privacy /> : <TermsOfService />
            }
          ></Modal>
        )}
      </PolicyLinksWrap>
    </RightsAndPolicyWrap>
  );
};
