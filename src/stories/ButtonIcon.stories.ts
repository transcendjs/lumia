import type { Meta, StoryObj } from '@storybook/svelte'

import type { IconId } from '$lib/icons.js'
import ButtonIcon from '$lib/components/Button/ButtonIcon.svelte'

const meta = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
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
} satisfies Meta<ButtonIcon>

export default meta
type Story = StoryObj<typeof meta>

const icon = 'default' as IconId

export const LargePrimary: Story = {
  args: {
    icon,
    kind: 'primary',
    size: 'large'
  }
}
export const LargePrimaryLoading: Story = {
  args: {
    icon,
    kind: 'primary',
    size: 'large',
    loading: true
  }
}
export const LargeSecondary: Story = {
  args: {
    icon,
    kind: 'secondary',
    size: 'large'
  }
}
export const LargeTertiary: Story = {
  args: {
    icon,
    kind: 'tertiary',
    size: 'large'
  }
}
export const LargeNegative: Story = {
  args: {
    icon,
    kind: 'negative',
    size: 'large'
  }
}
export const LargeNegativeLoading: Story = {
  args: {
    icon,
    kind: 'negative',
    size: 'large',
    loading: true
  }
}

// M E D I U M

export const MediumPrimary: Story = {
  args: {
    icon,
    kind: 'primary',
    size: 'medium'
  }
}
export const MediumSecondary: Story = {
  args: {
    icon,
    kind: 'secondary',
    size: 'medium'
  }
}
export const MediumTertiary: Story = {
  args: {
    icon,
    kind: 'tertiary',
    size: 'medium'
  }
}
export const MediumNegative: Story = {
  args: {
    icon,
    kind: 'negative',
    size: 'medium'
  }
}

// S M A L L

export const SmallPrimary: Story = {
  args: {
    icon,
    kind: 'primary',
    size: 'small'
  }
}
export const SmallSecondary: Story = {
  args: {
    icon,
    size: 'small'
  }
}
export const SmallTertiary: Story = {
  args: {
    icon,
    kind: 'tertiary',
    size: 'small'
  }
}
export const SmallNegative: Story = {
  args: {
    icon,
    kind: 'negative',
    size: 'small'
  }
}
