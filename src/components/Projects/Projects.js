import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id="projects" nopadding>
    <SectionTitle main>Some projects</SectionTitle>
    <SectionDivider />
    <br />
    <SectionText>
      I’ve worked on quite exciting projects, but i won’t blab about them all.
      Here are a few best bits.
    </SectionText>
    <GridContainer>
      {projects.map(
        ({ id, image, title, tags, description, visit, source }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
