import React from 'react';
import { DiFirebase, DiReact, DiMootoolsBadge } from 'react-icons/di';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionDivider />
    <br />
    <SectionText>
      Few tools and technology I’ve worked with so far. I’m always open to
      adding more if they will help me to deliver a top notch product
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            NodeJS/ Express <br />
            Typescript <br />
            SQL <br />
            NoSQL <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            ReactJS <br />
            NextJS <br />
            Webflow <br />
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiMootoolsBadge size="3rem" />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Figma/ Adobe XD <br />
            Photoshop <br />
            Postman <br />
            Git/GitHub <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
