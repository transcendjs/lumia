<script lang="ts">
  //
  // © 2023 Hardcore Engineering, Inc. All Rights Reserved.
  // Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
  //

  import SearchSVG from '$lib/icons/search.svg?raw'
  import CrossSVG from '$lib/icons/cross.svg?raw'

  export let value: string | undefined = undefined
  export let placeholder: string
  export let collapsed: boolean = false

  let input: HTMLInputElement
</script>

<label class="searchInput-wrapper" class:collapsed class:filled={value && value !== ''}>
  <div class="searchInput-icon">
    <div>{@html SearchSVG}</div>
  </div>
  <input
    bind:this={input}
    type="text"
    class="font-regular-14"
    bind:value
    {placeholder}
    autocomplete="off"
    spellcheck="false"
    on:change
    on:input
  />
  <button
    class="searchInput-button"
    on:click={() => {
      value = ''
      input.focus()
    }}
  >
    <div>{@html CrossSVG}</div>
  </button>
</label>

<style lang="scss">
  .searchInput-wrapper {
    display: flex;
    justify-content: stretch;
    align-items: center;
    align-self: stretch;
    padding: 0 var(--spacing-0_5) 0 0;
    height: var(--spacing-4);
    min-width: var(--spacing-4);
    background-color: var(--input-BackgroundColor);
    border-radius: var(--small-BorderRadius);
    box-shadow: inset 0 0 0 1px var(--input-BorderColor);
    transition: max-width 0.2s;
    cursor: text;

    .searchInput-icon,
    .searchInput-button {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      padding: 0;
      background-color: transparent;
      border: none;

      div {
        width: var(--spacing-2);
        height: var(--spacing-2);
      }
    }
    .searchInput-icon {
      margin: 0 var(--spacing-0_5) 0 0;
      width: var(--spacing-4);
      height: var(--spacing-4);
      fill: var(--input-search-IconColor);
      border-radius: var(--small-BorderRadius);
      outline: none;
      cursor: text;

      &:active,
      &:focus {
        background-color: transparent;
      }
    }
    .searchInput-button {
      visibility: hidden;
      width: var(--spacing-3);
      height: var(--spacing-3);
      fill: var(--global-primary-TextColor);
      border-radius: var(--extra-small-BorderRadius);
      cursor: pointer;

      &:hover {
        background-color: var(--button-tertiary-hover-BackgroundColor);
      }
      &:active {
        background-color: var(--button-tertiary-active-BackgroundColor);
        border-color: var(--button-menu-active-BorderColor);
      }
      &:focus {
        outline: 2px solid var(--global-focus-BorderColor);
        outline-offset: 2px;
      }
    }

    input {
      margin: 0;
      margin-right: var(--spacing-1_5);
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
      &:not(:placeholder-shown) + .searchInput-button {
        visibility: visible;
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
      padding: 0 var(--spacing-0_5) 0 0;
      max-width: 100%;
      background-color: var(--input-BackgroundColor);
      outline: 2px solid var(--global-focus-BorderColor);
      outline-offset: 2px;

      input::placeholder {
        color: var(--input-focus-PlaceholderColor);
      }
    }

    &.collapsed:not(:focus-within, :active, .filled) {
      padding: 0;
      max-width: var(--spacing-4);

      .searchInput-icon {
        cursor: pointer;
      }
      input:not(:placeholder-shown) + .searchInput-button {
        visibility: hidden;
      }
    }
  }
</style>
