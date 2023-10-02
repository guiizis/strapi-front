import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          corporis dolorem. Voluptate obcaecati amet similique laborum,
          aspernatur sint eveniet nobis exercitationem quasi harum laboriosam
          ad, earum error dolore aut.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
    background: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
