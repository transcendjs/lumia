import type { Meta, StoryObj } from '@storybook/svelte'

import ValidatingEditbox from '$lib/components/Editbox/ValidatingEditbox.svelte'

const meta = {
  title: 'Components/ValidatingEditbox',
  component: ValidatingEditbox,
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
    messageText: {
      control: { type: 'text' }
    },
    messageKind: {
      control: { type: 'select' },
      options: ['normal', 'error', 'none']
    },
    disabled: {
      control: { type: 'boolean' }
    },
    password: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<ValidatingEditbox>

export default meta
type Story = StoryObj<typeof meta>

export const ValidatingEditboxLargeDefault: Story = {
  args: {
    label: 'Label',
    size: 'large',
    messageText: 'Helper text',
    limit: 20
  }
}
export const ValidatingEditboxLargeErrorDefault: Story = {
  args: {
    label: 'Label',
    size: 'large',
    messageText: 'Error text',
    messageKind: 'error',
    limit: 20
  }
}
export const ValidatingEditboxLargeDisabledDefault: Story = {
  args: {
    label: 'Label',
    size: 'large',
    messageText: 'Helper text',
    disabled: true,
    limit: 20
  }
}

// S M A L L

export const ValidatingEditboxSmallDefault: Story = {
  args: {
    label: 'Label',
    messageText: 'Helper text',
    limit: 20
  }
}
export const ValidatingEditboxSmallErrorDefault: Story = {
  args: {
    label: 'Label',
    messageText: 'Error text',
    messageKind: 'error',
    limit: 20
  }
}
export const ValidatingEditboxSmallDisabledDefault: Story = {
  args: {
    label: 'Label',
    messageText: 'Helper text',
    disabled: true,
    limit: 20
  }
}
