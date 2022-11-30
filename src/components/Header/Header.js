import Link from 'next/link';
import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { DiCssdeck, DiBootstrap, DiCode } from 'react-icons/di';
import { SectionTitle } from '../../styles/GlobalComponents';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', color: 'white' }}>
          <DiCode size="5rem" />
        </a>
      </Link>
    </Div1>
    <Div2 style={{ marginTop: '15px' }}>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://twitter.com/monfortbrian_">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/briannkuru/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/monfortbrian">
        <AiFillGithub size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
