import type { Meta, StoryObj } from '@storybook/svelte'

import type { IconId } from '$lib/icons.js'
import ButtonMenu from '$lib/components/Button/ButtonMenu.svelte'
import Icon from '$lib/components/Icon/Icon.svelte'

const meta = {
  title: 'Components/ButtonMenu',
  component: ButtonMenu,
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
} satisfies Meta<ButtonMenu>

export default meta
type Story = StoryObj<typeof meta>

const icon = 'default' as IconId

export const LargeIconTitledPrimary: Story = {
  args: {
    icon,
    title: 'Button Menu',
    component: Icon,
    kind: 'primary',
    size: 'large'
  }
}
export const LargeIconTitledPrimaryLoading: Story = {
  args: {
    icon,
    title: 'Button Menu',
    component: Icon,
    kind: 'primary',
    size: 'large',
    loading: true
  }
}
export const LargeIconTitledSecondary: Story = {
  args: {
    icon,
    title: 'Button Menu',
    component: Icon,
    kind: 'secondary',
    size: 'large'
  }
}
export const LargeIconTitledTertiary: Story = {
  args: {
    icon,
    title: 'Button Menu',
    component: Icon,
    kind: 'tertiary',
    size: 'large'
  }
}
export const LargeIconTitledNegative: Story = {
  args: {
    icon,
    title: 'Button Menu',
    component: Icon,
    kind: 'negative',
    size: 'large'
  }
}
export const LargeIconTitledNegativeLoading: Story = {
  args: {
    icon,
    title: 'Button Menu',
    component: Icon,
    kind: 'negative',
    size: 'large',
    loading: true
  }
}

// M E D I U M

export const MediumIconTitledPrimary: Story = {
  args: {
    icon,
    kind: 'primary',
    component: Icon,
    title: 'Button Menu',
    size: 'medium'
  }
}
export const MediumIconPrimary: Story = {
  args: {
    icon,
    component: Icon,
    kind: 'primary',
    size: 'medium'
  }
}
export const MediumIconTitledSecondary: Story = {
  args: {
    icon,
    title: 'Button Menu',
    component: Icon,
    kind: 'secondary',
    size: 'medium'
  }
}
export const MediumIconSecondary: Story = {
  args: {
    icon,
    component: Icon,
    kind: 'secondary',
    size: 'medium'
  }
}

// S M A L L

export const SmallIconTitledPrimary: Story = {
  args: {
    icon,
    title: 'Button Menu',
    component: Icon,
    kind: 'primary',
    size: 'small'
  }
}
export const SmallIconPrimary: Story = {
  args: {
    icon,
    component: Icon,
    kind: 'primary',
    size: 'small'
  }
}
export const SmallIconTitledSecondary: Story = {
  args: {
    icon,
    title: 'Button Menu',
    component: Icon,
    size: 'small'
  }
}
export const SmallIconSecondary: Story = {
  args: {
    icon,
    component: Icon,
    size: 'small'
  }
}
export const SmallIconTertiary: Story = {
  args: {
    icon,
    component: Icon,
    kind: 'tertiary',
    size: 'small'
  }
}
export const SmallIconNegative: Story = {
  args: {
    icon,
    component: Icon,
    kind: 'negative',
    size: 'small'
  }
}
