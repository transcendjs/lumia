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
} satisfies Meta<ButtonIcon>

export default meta
type Story = StoryObj<typeof meta>

const icon = 'default' as IconId

export const LargePrimary: Story = {
  args: {
    icon,
    kind: 'primary'
  }
}

export const LargeSecondary: Story = {
  args: {
    icon
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
