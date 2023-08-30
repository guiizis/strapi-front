import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Não sei',
    colorDark: true,
  },
  argTypes: {
    children: { type: 'string' },
    colorDark: { type: 'boolean' },
    as: { type: 'string' },
    upperCase: { type: 'boolean' },
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: { default: 'light' },
};

Dark.args = {
  colorDark: false,
};
