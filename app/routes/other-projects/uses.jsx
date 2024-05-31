import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />

        {/* New section for other projects */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Other Projects</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://github.com/shrutinarang34/NewsFetchAPI">
                      {' '}
                      NewsFetch API
                    </Link>{' '}
                    is a versatile tool for retrieving data from servers, facilitating
                    seamless access to a wide range of news content with ease and
                    efficiency."
                  </ListItem>
                  <ListItem>
                    <Link href="https://shrutinarang34.github.io/MyPortfolio/">
                      Portfolio Website
                    </Link>{' '}
                    - Experience my previous portfolio website, crafted with HTML, CSS,
                    and advanced JavaScript techniques, showcasing my skills and projects
                    effectively.
                  </ListItem>
                  <ListItem>
                    <Link href="http://shruti.kishorenarang.com/">
                      {' '}
                      Narang Tuition Centre
                    </Link>{' '}
                    - Tuition Center is a cutting-edge website built using advanced
                    Bootstrap concepts, offering a comprehensive learning experience in
                    Bootstrap and related libraries and functions.
                  </ListItem>
                  <ListItem>
                    <Link href="https://shrutinarang34.github.io/RWD_project/">
                      {' '}
                      RWD Project
                    </Link>{' '}
                    - Responsive Web Design, Explore an innovative blog post application
                    with advanced CSS positioning concepts, crafted for responsive web
                    design excellence.
                  </ListItem>
                  <ListItem>
                    <Link href="https://1on1events.in/"> WordPress Website</Link> -
                    Crafted a bespoke WordPress website, 1on1events, tailored for seamless
                    management of weddings and various other celebratory events, enhancing
                    user experience and event planning efficiency.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.upwork.com/freelancers/shrutinarang34">
                      {' '}
                      Graphic Designing
                    </Link>{' '}
                    - Proficient in Adobe Photoshop and Illustrator, I specialize in
                    freelance graphic and logo design projects, creating captivating
                    banners and logos. Visit my{' '}
                    <Link href="https://www.upwork.com/freelancers/shrutinarang34">
                      Upwork
                    </Link>{' '}
                    profile for quality design solutions tailored to your needs.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        {/* Other Projects section ends here */}
      </ProjectContainer>
      <Footer />
    </>
  );
};
