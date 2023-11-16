<script lang="ts">
  import Theme from '$lib/components/Theme/Theme.svelte'
  import Button from '$lib/components/Button/Button.svelte'
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
</script>

<div class="themes">
  {#each themes as theme}
    <Theme {theme}>
      <div class="column">
        {#each sizes as size}
          <div class="row bold">Size: {size}</div>
          {#each kinds as kind}
            <div class="row">
              <Button {title} {kind} {size} {icon} />
              <Button {title} {kind} {size} />
              <Button {title} {kind} {size} {icon} loading={true} />
              <Button {title} {kind} {size} loading={true} />
              <Button {title} {kind} {size} {icon} disabled />
              <Button {title} {kind} {size} disabled />
            </div>
          {/each}
        {/each}
      </div>
    </Theme>
  {/each}
</div>

<style lang="scss">
  .themes {
    display: flex;
    width: 100%;
    gap: 1rem;

    .column {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1.5rem;
    }
    .row {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      &:not(.bold) {
        gap: 0.5rem;
      }
      &.bold {
        font-weight: 500;
        font-size: 2rem;
        color: var(--button-subtle-LabelColor);
      }
    }
  }
  .row + .row {
    margin-top: 1rem;
  }
</style>
