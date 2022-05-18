import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { PresentGroupListComponent } from 'src/app/components/present-group-list/present-group-list.component';
import { PresentGroupComponent } from 'src/app/components/present-group/present-group.component';
import { InformativeMessageComponent } from '../../app/components/informative-message/informative-message.component';

export default {
  title: 'Components/Present Group List',
  component: PresentGroupListComponent, 
  subcomponents: { PresentGroupComponent, InformativeMessageComponent }, 
  decorators: [
    moduleMetadata({
      declarations: [PresentGroupListComponent, PresentGroupComponent, InformativeMessageComponent],
      imports: [CommonModule],
    }),
  ],
};

const Template: Story<PresentGroupListComponent> = (args) => ({
  component: PresentGroupListComponent,
  props: args,
  argTypes: {
    presentGroupList: {
      control: 'object',
      name: "List of Present Groups",
      description: "Display a list with horizontal scroll in desktop and list on mobile and tablet"      
    },
  },    
  template: `<app-present-group-list [presentGroupList]="presentGroupList"></app-present-group-list>`,
});

export const Base = Template.bind({});
Base.args= {
  presentGroupList: [
    {
      title: "Crew",
      iconTitle: "&#127881;",
      description: "Crew present list",
      tags: ["Extreme Sports", "Books"]
    },
    {
      title: "Family",
      iconTitle: "&#127968;",
      description: "Family present list",
      tags: ["Family", "Sports", "Books",  "Jerseys", "Vacation", "Relax"]
    },
    {
      title: "Other",
      iconTitle: "&#127881;",
      description: "General present list",
      tags: ["Other", "Uncategorized"]
    },
    {
      title: "Basketball Team",
      iconTitle: "&#127936;",
      description: "Basketball Team Presents",
      tags: ["Jerseys", "Sneakers"]
    },
    {
      title: "Teachers",
      iconTitle: "&#128218;",
      description: "Christmas School Presents",
      tags: ["Books", "Pencils", "Relax"]
    }
  ]
};