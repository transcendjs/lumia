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
    helperText: {
      control: { type: 'text' }
    },
    errorText: {
      control: { type: 'text' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    footer: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<Editbox>

export default meta
type Story = StoryObj<typeof meta>

export const EditboxLargeDefault: Story = {
  args: {
    label: 'Label',
    size: 'large',
    helperText: 'Helper text',
    limit: 20
  }
}
export const EditboxLargeErrorDefault: Story = {
  args: {
    label: 'Label',
    size: 'large',
    errorText: 'Helper text',
    limit: 20
  }
}
export const EditboxLargeDisabledDefault: Story = {
  args: {
    label: 'Label',
    size: 'large',
    helperText: 'Helper text',
    disabled: true,
    limit: 20
  }
}
export const EditboxLargeGhost: Story = {
  args: {
    label: 'Label',
    kind: 'ghost',
    size: 'large',
    helperText: 'Helper text',
    limit: 20
  }
}
export const EditboxLargeErrorGhost: Story = {
  args: {
    label: 'Label',
    kind: 'ghost',
    size: 'large',
    errorText: 'Helper text',
    limit: 20
  }
}
export const EditboxLargeDisabledGhost: Story = {
  args: {
    label: 'Label',
    kind: 'ghost',
    size: 'large',
    helperText: 'Helper text',
    disabled: true,
    limit: 20
  }
}

// S M A L L

export const EditboxSmallDefault: Story = {
  args: {
    label: 'Label',
    helperText: 'Helper text',
    limit: 20
  }
}
export const EditboxSmallErrorDefault: Story = {
  args: {
    label: 'Label',
    errorText: 'Helper text',
    limit: 20
  }
}
export const EditboxSmallDisabledDefault: Story = {
  args: {
    label: 'Label',
    helperText: 'Helper text',
    disabled: true,
    limit: 20
  }
}
export const EditboxSmallGhost: Story = {
  args: {
    label: 'Label',
    kind: 'ghost',
    helperText: 'Helper text',
    limit: 20
  }
}
export const EditboxSmallErrorGhost: Story = {
  args: {
    label: 'Label',
    kind: 'ghost',
    errorText: 'Helper text',
    limit: 20
  }
}
export const EditboxSmallDisabledGhost: Story = {
  args: {
    label: 'Label',
    kind: 'ghost',
    helperText: 'Helper text',
    disabled: true
  }
}
