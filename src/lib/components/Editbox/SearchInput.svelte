<script lang="ts">
  //
  // © 2023 Hardcore Engineering, Inc. All Rights Reserved.
  // Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
  //

  import type { IconId } from '$lib/icons.js'
  import SearchSVG from '$lib/icons/search.svg?raw'
  import ButtonIcon from '$lib/components/Button/ButtonIcon.svelte'

  export let value: string | undefined = undefined
  export let placeholder: string
  export let collapsed: boolean = false

  let allowedCollapsing: boolean = collapsed
  let input: HTMLInputElement
  let label: HTMLLabelElement
  let crossIcon: IconId = 'cross' as IconId
  $: cleanable = value !== undefined && value !== ''
</script>

<label bind:this={label} class="searchInput-wrapper" class:collapsed class:cleanable>
  <button
    class="searchInput-button"
    class:disabled={!allowedCollapsing}
    on:click|preventDefault={() => {
      if (allowedCollapsing) collapsed = !collapsed
      if (collapsed) label.focus()
      else input.focus()
    }}
  >
    <div>{@html SearchSVG}</div>
  </button>
  <input
    bind:this={input}
    type="text"
    class="font-regular-14"
    bind:value
    {placeholder}
    autocomplete="off"
    spellcheck="false"
    on:blur
    on:change
    on:keyup
    on:input
  />
  {#if cleanable && !collapsed}
    <ButtonIcon
      icon={crossIcon}
      kind={'tertiary'}
      size={'extra-small'}
      on:click={(event) => {
        event.preventDefault()
        value = ''
        input.focus()
      }}
    />
  {/if}
</label>

<style lang="scss">
  .searchInput-wrapper {
    display: flex;
    align-items: center;
    align-self: stretch;
    height: var(--spacing-4);
    min-width: var(--spacing-4);
    background-color: var(--input-BackgroundColor);
    border-radius: var(--small-BorderRadius);
    box-shadow: inset 0 0 0 1px var(--input-BorderColor);
    transition: max-width 0.2s;
    cursor: text;

    .searchInput-button {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      margin: 0 var(--spacing-0_5) 0 0;
      padding: 0;
      width: var(--spacing-4);
      height: var(--spacing-4);
      fill: var(--input-search-IconColor);
      background-color: transparent;
      border: none;
      border-radius: var(--small-BorderRadius);
      outline: none;

      &.disabled {
        cursor: text;
      }
      &:not(.disabled) {
        cursor: pointer;
      }
      &:active,
      &:focus {
        background-color: transparent;
      }

      div {
        width: var(--spacing-2);
        height: var(--spacing-2);
      }
    }

    input {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      color: var(--input-TextColor);
      caret-color: var(--global-focus-BorderColor);
      background-color: transparent;
      border: none;
      outline: none;
      appearance: none;

      &::placeholder {
        color: var(--input-PlaceholderColor);
      }
    }

    &:hover {
      background-color: var(--input-hover-BackgroundColor);

      input::placeholder {
        color: var(--input-hover-PlaceholderColor);
      }
    }
    &:active,
    &:focus-within {
      background-color: var(--input-BackgroundColor);
      outline: 2px solid var(--global-focus-BorderColor);
      outline-offset: 2px;

      input::placeholder {
        color: var(--input-focus-PlaceholderColor);
      }
    }

    &.collapsed {
      padding: 0;
      max-width: var(--spacing-4);
    }
    &:not(.collapsed) {
      max-width: 100%;

      &.cleanable {
        padding: 0 var(--spacing-0_5) 0 0;

        input {
          margin-right: var(--spacing-1_5);
        }
      }
      &:not(.cleanable) {
        padding: 0 var(--spacing-5) 0 0;
      }
    }
  }
</style>
