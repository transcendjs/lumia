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
      options: ['small', 'medium', 'large']
    },
    kind: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'negative']
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
    title: 'Button',
    size: 'large'
  }
}
export const LargeIconPrimaryLoading: Story = {
  args: {
    icon,
    kind: 'primary',
    title: 'Button',
    size: 'large',
    loading: true
  }
}
export const LargeIconSecondary: Story = {
  args: {
    icon,
    kind: 'secondary',
    title: 'Button',
    size: 'large'
  }
}
export const LargeIconTertiary: Story = {
  args: {
    icon,
    kind: 'tertiary',
    title: 'Button',
    size: 'large'
  }
}
export const LargeIconNegative: Story = {
  args: {
    icon,
    kind: 'negative',
    title: 'Button',
    size: 'large'
  }
}
export const LargeIconNegativeLoading: Story = {
  args: {
    icon,
    kind: 'negative',
    title: 'Button',
    size: 'large',
    loading: true
  }
}

// M E D I U M

export const MediumIconPrimary: Story = {
  args: {
    icon,
    kind: 'primary',
    title: 'Button',
    size: 'medium'
  }
}
export const MediumPrimary: Story = {
  args: {
    kind: 'primary',
    title: 'Button',
    size: 'medium'
  }
}
export const MediumIconSecondary: Story = {
  args: {
    icon,
    kind: 'secondary',
    title: 'Button',
    size: 'medium'
  }
}
export const MediumSecondary: Story = {
  args: {
    kind: 'secondary',
    title: 'Button',
    size: 'medium'
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
