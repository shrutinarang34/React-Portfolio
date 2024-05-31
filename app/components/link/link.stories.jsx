import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://www.linkedin.com/in/shrutinarang34/">Primary link</Link>
    <Link secondary href="https://www.linkedin.com/in/shrutinarang34/">
      Secondary link
    </Link>
  </StoryContainer>
);
