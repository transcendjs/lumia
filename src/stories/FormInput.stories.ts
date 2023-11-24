import type { Meta, StoryObj } from '@storybook/svelte'

import FormInput from '$lib/components/Editbox/FormInput.svelte'

const meta = {
  title: 'Components/FormInput',
  component: FormInput,
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
} satisfies Meta<FormInput>

export default meta
type Story = StoryObj<typeof meta>

export const FormInputLargeDefault: Story = {
  args: {
    label: 'Label',
    size: 'large',
    messageText: 'Helper text',
    limit: 20
  }
}
export const FormInputLargeErrorDefault: Story = {
  args: {
    label: 'Label',
    size: 'large',
    messageText: 'Error text',
    messageKind: 'error',
    limit: 20
  }
}
export const FormInputLargeDisabledDefault: Story = {
  args: {
    label: 'Label',
    size: 'large',
    messageText: 'Helper text',
    disabled: true,
    limit: 20
  }
}

// S M A L L

export const FormInputSmallDefault: Story = {
  args: {
    label: 'Label',
    messageText: 'Helper text',
    limit: 20
  }
}
export const FormInputSmallErrorDefault: Story = {
  args: {
    label: 'Label',
    messageText: 'Error text',
    messageKind: 'error',
    limit: 20
  }
}
export const FormInputSmallDisabledDefault: Story = {
  args: {
    label: 'Label',
    messageText: 'Helper text',
    disabled: true,
    limit: 20
  }
}
