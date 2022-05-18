import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { PresentGroupComponent } from 'src/app/components/present-group/present-group.component';
import { InformativeMessageComponent } from '../../app/components/informative-message/informative-message.component';

export default {
 
  title: 'Components/Informative Message',

  component: InformativeMessageComponent,
  decorators: [
    moduleMetadata({
      declarations: [InformativeMessageComponent],
      imports: [CommonModule],
    }),
  ],
};

const Template: Story<InformativeMessageComponent> = (args) => ({
  component: PresentGroupComponent,
  props:args,
  argTypes: {
    title: { control: 'text'},
    description: { control: 'text'},
  },
  template: `<app-informative-message [title]="title" [description]="description"></app-informative-message>`,  
});

export const Base = Template.bind({});
Base.args= {
    title: "Empty List",
    description: "You have no present groups created"
};