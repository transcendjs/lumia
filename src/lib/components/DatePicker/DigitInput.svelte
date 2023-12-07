<script lang="ts">
  //
  // © 2023 Hardcore Engineering, Inc. All Rights Reserved.
  // Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
  //

  import { createEventDispatcher } from 'svelte'
  import { padDigits } from './utils.js'

  export let id: string
  export let placeholder: string
  export let value: number | null = null
  export let maxlength: number = 2
  export let maxvalue: number = 60
  export let disabled: boolean = false
  export let selected: boolean = false
  export let element: HTMLElement | undefined = undefined

  const dispatch = createEventDispatcher()

  let startTyping: boolean = false

  const handleFocus = (): void => {
    startTyping = true
    selected = true
    dispatch('selected', id)
  }
  const handleBlur = (): void => {
    selected = false
    dispatch('selected', null)
  }

  const keyDown = (event: KeyboardEvent): void => {
    event.preventDefault()
    if (event.key >= '0' && event.key <= '9') {
      const num: number = parseInt(event.key, 10)
      if (startTyping) {
        value = num === 0 ? 0 : num
        startTyping = false
      } else if (value !== null) {
        const nextValue = value * 10 + num
        value = nextValue > maxvalue ? maxvalue : nextValue
      }

      if (
        value &&
        !startTyping &&
        ((id === 'day' && value > maxvalue / 10) ||
          (id === 'month' && value > 1) ||
          (id === 'year' && value > 999) ||
          (id === 'hour' && value > 2) ||
          (id === 'minute' && value > 5))
      )
        dispatch('jump', 1)
    }
    if (event.code === 'Backspace') {
      value = null
      startTyping = true
    }
    if (event.code === 'ArrowLeft') dispatch('jump', -1)
    if (event.code === 'ArrowRight' || event.code === 'Tab') dispatch('jump', 1)
    if (event.code === 'ArrowUp') dispatch('change', 1)
    if (event.code === 'ArrowDown') dispatch('change', -1)
    if (event.code === 'Enter' && value !== null) dispatch('change', 0)
  }

  $: if (selected && element) element.focus()
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  bind:this={element}
  class="digit"
  class:placeholder={value === null}
  class:selected
  class:disabled
  tabindex="0"
  on:keydown={keyDown}
  on:focus={handleFocus}
  on:blur={handleBlur}
  on:click|stopPropagation={handleFocus}
>
  {#if value !== null}
    {padDigits(value)}
  {:else}{placeholder}{/if}
</div>

<style lang="scss">
  .digit {
    position: relative;
    padding: 1px;
    color: var(--global-primary-TextColor);
    border-radius: 0.125rem;
    outline: none;

    &.selected,
    &:focus {
      color: var(--button-accent-LabelColor);
      background-color: var(--global-focus-SelectionColor);
    }
    &.placeholder {
      color: var(--input-focus-PlaceholderColor);
    }
    &.disabled {
      color: var(--global-primary-TextColor);
      background-color: transparent;
    }
  }
</style>
