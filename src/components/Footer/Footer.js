import React from 'react';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';
import { Section } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call/ WhatsApp</LinkTitle>
          <LinkItem href="tel: 00257 62115300">00257 62115300</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ask@bluetec.bi">ask@bluetec.bi</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            A helpful websites & apps = Happy customers + business growth
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://twitter.com/monfortbrian_">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/briannkuru/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/monfortbrian">
            <AiFillGithub size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
