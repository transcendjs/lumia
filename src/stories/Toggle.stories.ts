import type { Meta, StoryObj } from '@storybook/svelte'

import Toggle from '$lib/components/Toggle/Toggle.svelte'

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'large']
    },
    checked: {
      control: { type: 'boolean' }
    },
    background: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const UncheckedLargeToggle: Story = {
  args: {
    label: 'Toggle label'
  }
}
export const CheckedLargeToggle: Story = {
  args: {
    label: 'Toggle label',
    checked: true
  }
}
export const CheckedDisabledLargeToggle: Story = {
  args: {
    label: 'Toggle label',
    checked: true,
    disabled: true
  }
}
export const CheckedToggleOnBackground: Story = {
  args: {
    label: 'Toggle label',
    checked: true,
    background: true
  }
}
