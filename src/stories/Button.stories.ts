import type { Meta, StoryObj } from '@storybook/svelte'

import type { IconId } from '$lib/icons.js'
import Button from '$lib/components/Button/Button.svelte'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large']
    },
    kind: {
      control: { type: 'select' },
      options: ['primary', 'secondary']
    },
    icon: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<Button>

export default meta
type Story = StoryObj<typeof meta>

const icon = 'default' as IconId

export const LargeIconPrimary: Story = {
  args: {
    icon,
    kind: 'primary',
    title: 'Button'
  }
}

export const LargeIconPrimaryLoading: Story = {
  args: {
    icon,
    kind: 'primary',
    title: 'Button',
    loading: true
  }
}

export const LargePrimary: Story = {
  args: {
    kind: 'primary',
    title: 'Button'
  }
}

export const LargeIconSecondary: Story = {
  args: {
    icon,
    title: 'Button'
  }
}

export const LargeSecondary: Story = {
  args: {
    title: 'Button'
  }
}

// S M A L L

export const SmallIconPrimary: Story = {
  args: {
    icon,
    kind: 'primary',
    title: 'Button',
    size: 'small'
  }
}

export const SmallPrimary: Story = {
  args: {
    kind: 'primary',
    title: 'Button',
    size: 'small'
  }
}

export const SmallIconSecondary: Story = {
  args: {
    icon,
    title: 'Button',
    size: 'small'
  }
}

export const SmallSecondary: Story = {
  args: {
    title: 'Button',
    size: 'small'
  }
}
