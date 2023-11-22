import type { Meta, StoryObj } from '@storybook/svelte'

import Editbox from '$lib/components/Editbox/Editbox.svelte'

const meta = {
  title: 'Components/Editbox',
  component: Editbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    value: {
      control: { type: 'text' }
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'large']
    },
    kind: {
      control: { type: 'select' },
      options: ['default', 'ghost']
    },
    disabled: {
      control: { type: 'boolean' }
    },
    error: {
      control: { type: 'boolean' }
    },
    password: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<Editbox>

export default meta
type Story = StoryObj<typeof meta>

export const EditboxLargeDefault: Story = {
  args: {
    label: 'Label',
    size: 'large'
  }
}
export const EditboxLargeErrorDefault: Story = {
  args: {
    label: 'Label',
    size: 'large',
    error: true
  }
}
export const EditboxLargeDisabledDefault: Story = {
  args: {
    label: 'Label',
    size: 'large',
    disabled: true
  }
}
export const EditboxLargeGhost: Story = {
  args: {
    label: 'Label',
    kind: 'ghost',
    size: 'large'
  }
}
export const EditboxLargeErrorGhost: Story = {
  args: {
    label: 'Label',
    kind: 'ghost',
    size: 'large',
    error: true
  }
}
export const EditboxLargeDisabledGhost: Story = {
  args: {
    label: 'Label',
    kind: 'ghost',
    size: 'large',
    disabled: true
  }
}

// S M A L L

export const EditboxSmallDefault: Story = {
  args: {
    label: 'Label'
  }
}
export const EditboxSmallErrorDefault: Story = {
  args: {
    label: 'Label',
    error: true
  }
}
export const EditboxSmallDisabledDefault: Story = {
  args: {
    label: 'Label',
    disabled: true
  }
}
export const EditboxSmallGhost: Story = {
  args: {
    label: 'Label',
    kind: 'ghost'
  }
}
export const EditboxSmallErrorGhost: Story = {
  args: {
    label: 'Label',
    kind: 'ghost',
    error: true
  }
}
export const EditboxSmallDisabledGhost: Story = {
  args: {
    label: 'Label',
    kind: 'ghost',
    disabled: true
  }
}
