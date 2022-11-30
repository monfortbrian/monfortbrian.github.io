import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        User Experience & <br /> Software Developer
      </SectionTitle>
      <SectionText>
        Thinking through problems in life & business. <br />
        Designing interfaces with attention to details. <br />
        Coding in Javascript.
      </SectionText>
      <Button>
        <a href="mailto:ask@bluetec.bi" style={{ color: 'white' }}>
          {' '}
          Say Hello
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
