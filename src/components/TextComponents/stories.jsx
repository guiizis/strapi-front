import { TextComponents } from '.';

export default {
  title: 'TextComponents',
  component: TextComponents,
  args: {
    children: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis magnam explicabo dicta, ullam eius repudiandae labore aliquid soluta ea libero consequuntur autem molestias. Quas dolore molestiae voluptas porro eaque saepe.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponents {...args} />
    </div>
  );
};
