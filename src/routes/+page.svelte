<script lang="ts">
  import Theme from '$lib/components/Theme/Theme.svelte'
  import Button from '$lib/components/Button/Button.svelte'
  import ButtonIcon from '$lib/components/Button/ButtonIcon.svelte'
  import type { IconId } from '$lib/icons.js'

  const icon = 'default' as IconId
  const title = 'Hi there'
  const themes: Array<'light' | 'dark'> = ['light', 'dark']
  const kinds: Array<'primary' | 'secondary' | 'tertiary' | 'negative'> = [
    'primary',
    'secondary',
    'tertiary',
    'negative'
  ]
  const sizes: Array<'large' | 'medium' | 'small'> = ['large', 'medium', 'small']
  let collapsed: boolean[] = new Array(sizes.length * 2)
</script>

<div class="themes">
  {#each themes as theme}
    <Theme {theme}>
      <div class="column root">
        <div class="row header">Button</div>
        {#each sizes as size, i}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            class="row group"
            class:collapsed={collapsed[i]}
            on:click={() => (collapsed[i] = !collapsed[i])}
          >
            Size: {size}
            <svg class="chevron" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.2,4.9L3,6.1l5,5l5-5l-1.2-1.2L8,8.7L4.2,4.9z" />
            </svg>
          </div>
          <div class="column">
            {#each kinds as kind}
              <div class="row">
                <Button {title} {kind} {size} {icon} />
                <Button {title} {kind} {size} />
                <Button {title} {kind} {size} {icon} loading />
                <Button {title} {kind} {size} loading />
                <Button {title} {kind} {size} {icon} disabled />
                <Button {title} {kind} {size} disabled />
              </div>
            {/each}
          </div>
        {/each}
        <div class="row header">ButtonIcon</div>
        {#each sizes as size, i}
          {@const index = sizes.length + i}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            class="row group"
            class:collapsed={collapsed[index]}
            on:click={() => (collapsed[index] = !collapsed[index])}
          >
            Size: {size}
            <svg class="chevron" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.2,4.9L3,6.1l5,5l5-5l-1.2-1.2L8,8.7L4.2,4.9z" />
            </svg>
          </div>
          <div class="column">
            {#each kinds as kind}
              <div class="row">
                <ButtonIcon {kind} {size} {icon} />
                <ButtonIcon {kind} {size} {icon} loading />
                <ButtonIcon {kind} {size} {icon} disabled />
              </div>
            {/each}
          </div>
        {/each}
      </div>
    </Theme>
  {/each}
</div>

<style lang="scss">
  .themes {
    display: flex;
    width: 100%;
    max-width: max-content;
    gap: 0.5rem;

    .column {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &.root {
        padding: 1.5rem;
      }
    }
    .row {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      &:not(.group, .header) {
        gap: 0.5rem;
      }
      &.header,
      &.group {
        margin: 0 -1rem;
        font-weight: 500;
        border-radius: var(--extra-small-BorderRadius);
      }
      &.header {
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        color: var(--button-subtle-LabelColor);
        background-color: var(--button-secondary-BackgroundColor);
      }
      &.group {
        padding: 1rem;
        justify-content: space-between;
        font-size: 2rem;
        color: var(--button-disabled-IconColor);
        // border: 1px solid var(--button-secondary-BorderColor);
        cursor: pointer;

        .chevron {
          width: 1rem;
          height: 1rem;
          fill: var(--button-disabled-IconColor);
          transform-origin: center;
          transform: rotate(0deg);
          transition: transform 0.1s ease-in-out;
        }
        &:hover {
          background-color: var(--button-secondary-hover-BackgroundColor);
        }
        &:active {
          background-color: var(--button-secondary-active-BackgroundColor);
        }
        &:hover,
        &:active {
          color: var(--button-subtle-LabelColor);
        }
        &.collapsed {
          .chevron {
            transform: rotate(90deg);
          }
          & + .column {
            overflow: hidden;
            max-height: 0;
          }
        }
      }
    }
  }
</style>
