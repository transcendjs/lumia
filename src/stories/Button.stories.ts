import type { Meta, StoryObj } from '@storybook/svelte'

import Button from '$lib/components/Button/Button.svelte'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
    kind: {
      control: { type: 'select'},
      options: ['primary', 'secondary'],
    },
    icon: {
      control: { type: 'text'},
    }
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>

const icon = 'default' as string & { __tag: 'icon-id' }

export const LargeIconPrimary: Story = {
  args: {
    icon,
    kind: 'primary',
    title: 'Button',
  },
};

export const LargePrimary: Story = {
  args: {
    kind: 'primary',
    title: 'Button',
  },
}

export const LargeIconSecondary: Story = {
  args: {
    icon,
    title: 'Button',
  },
}

export const LargeSecondary: Story = {
  args: {
    title: 'Button',
  },
}

// S M A L L

export const SmallIconPrimary: Story = {
  args: {
    icon,
    kind: 'primary',
    title: 'Button',
    size: 'small'
  },
}

export const SmallPrimary: Story = {
  args: {
    kind: 'primary',
    title: 'Button',
    size: 'small'
  },
}

export const SmallIconSecondary: Story = {
  args: {
    icon,
    title: 'Button',
    size: 'small'
  },
}

export const SmallSecondary: Story = {
  args: {
    title: 'Button',
    size: 'small'
  },
}
