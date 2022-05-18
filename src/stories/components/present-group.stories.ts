import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { PresentGroupComponent } from 'src/app/components/present-group/present-group.component';

export default {
 
  title: 'Components/Present Group',

  component: PresentGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [PresentGroupComponent],
      imports: [CommonModule],
    }),
  ],
};

const Template: Story<PresentGroupComponent> = (args) => ({
  component: PresentGroupComponent,
  props:args,
  argTypes: {
    presentGroup: {
      control: 'object',
      name: "Text and tags of Present Group",
      description: "Display the text, description and tags"      
    },
  },
  template: `<app-present-group [presentGroup]="presentGroup"></app-present-group>`,  
});

export const Base = Template.bind({});
Base.args= {
  presentGroup: {
    title: "Crew",
    iconTitle: "&#127881;",
    description: "Crew present list",
    tags: ["Extreme Sports", "Books"]
  }
};