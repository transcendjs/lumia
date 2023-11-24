import type { Preview } from '@storybook/svelte'
import ThemeDecorator from './ThemeDecorator.svelte'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f0f2f5',
        },
        {
          name: 'dark',
          value: '#1b2230',
        },
      ],
    }
  },
  decorators: [(_, story) => ({ Component: ThemeDecorator, props: { context: story.globals } })]
}

export default preview
