import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Não sei',
    light: false,
  },
  argTypes: {
    children: { type: 'string' },
    light: { type: 'boolean' },
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Light = (args) => <Heading {...args} light={true} />;
export const Dark = (args) => <Heading {...args} light={false} />;

Light.parameters = {
  backgrounds: { default: 'light' },
};
