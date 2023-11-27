import type { Meta, StoryObj } from '@storybook/svelte'

import SearchInput from '$lib/components/Editbox/SearchInput.svelte'

const meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'text' }
    },
    placeholder: {
      control: { type: 'text' }
    },
    collapsed: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<SearchInput>

export default meta
type Story = StoryObj<typeof meta>

export const SearchInputDefault: Story = {
  args: {
    placeholder: 'Search label'
  }
}
export const SearchInputCollapsed: Story = {
  args: {
    placeholder: 'Search label',
    collapsed: true
  }
}
