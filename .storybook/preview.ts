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
    }
  },
  decorators: [(_, story) => ({ Component: ThemeDecorator, props: { context: story.globals } })]
}

export default preview
