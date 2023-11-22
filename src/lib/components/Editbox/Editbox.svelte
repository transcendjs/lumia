<script lang="ts">
  //
  // © 2023 Hardcore Engineering, Inc. All Rights Reserved.
  // Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
  //

  import ErrorSVG from '$lib/icons/error.svg?raw'
  import InfoSVG from '$lib/icons/info.svg?raw'

  export let label: string
  export let value: string | undefined = undefined
  export let kind: 'default' | 'ghost' = 'default'
  export let size: 'small' | 'large' = 'small'
  export let helperText: string | undefined = undefined
  export let errorText: string | undefined = undefined
  export let disabled: boolean = false
  export let password: boolean = false
  export let limit: number = 0
  export let footer: boolean =
    (helperText !== undefined || errorText !== undefined || limit > 0) && kind !== 'ghost'

  let input: HTMLInputElement
  $: labeled = kind === 'default' && size === 'large'
  $: placeholder = labeled ? ' ' : label
  $: maxlength = limit === 0 ? null : limit
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="editbox-container"
  class:disabled
  class:error={errorText}
  on:click={() => {
    if (!disabled) input.focus()
  }}
>
  <div class="editbox-wrapper {kind} {size}">
    {#if password}
      <input
        type="password"
        class="font-regular-14"
        class:labeled
        bind:this={input}
        bind:value
        autocomplete="off"
        {placeholder}
        spellcheck="false"
        {disabled}
        {maxlength}
        on:blur
        on:change
        on:keyup
        on:input
      />
    {:else}
      <input
        type="text"
        class="font-regular-14"
        class:labeled
        bind:this={input}
        bind:value
        autocomplete="off"
        {placeholder}
        spellcheck="false"
        {disabled}
        {maxlength}
        on:blur
        on:change
        on:keyup
        on:input
      />
    {/if}
    {#if labeled}<div class="font-regular-14 label">{label}</div>{/if}
  </div>
  {#if footer}
    <div class="font-regular-12 editbox-footer" class:msg={helperText || errorText} class:limit>
      {#if errorText || helperText}
        <div class="editbox-message">
          <div class="msg-icon">
            {#if errorText}{@html ErrorSVG}{:else}{@html InfoSVG}{/if}
          </div>
          {errorText !== undefined ? errorText : helperText ?? ''}
        </div>
      {/if}
      {#if limit}
        <div class="limit">{value?.length ?? 0}/{limit}</div>
      {/if}
    </div>
  {/if}
</div>

<style lang="scss">
  .editbox-container {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    min-width: 0;
    min-height: 0;

    &.error {
      .editbox-wrapper {
        box-shadow: inset 0 0 0 1px var(--input-error-BorderColor);
      }
      .editbox-message {
        color: var(--global-error-TextColor);
      }
    }
    &:not(.disabled) .editbox-wrapper {
      cursor: text;

      &.default {
        input::placeholder {
          color: var(--input-LabelColor);
        }
        &:active,
        &:focus-within {
          background-color: var(--input-BackgroundColor);
          outline: 2px solid var(--global-focus-BorderColor);
          outline-offset: 2px;
        }
        &:hover {
          background-color: var(--input-hover-BackgroundColor);
        }
      }
      &.ghost input::placeholder {
        color: var(--input-PlaceholderColor);
      }
      &:hover input:not(:focus)::placeholder {
        color: var(--input-hover-PlaceholderColor);
      }
      input:focus::placeholder {
        color: var(--input-focus-PlaceholderColor);
      }
    }
    &.disabled .editbox-wrapper {
      &,
      input {
        cursor: not-allowed;
      }
      input::placeholder {
        color: var(--input-PlaceholderColor);
      }
      &.default {
        background-color: transparent;
      }
      &.ghost {
        box-shadow: inset 0 0 0 1px var(--input-BorderColor);
      }
    }
  }
  .editbox-wrapper {
    display: flex;
    align-items: center;
    min-width: 0;
    border-radius: var(--medium-BorderRadius);

    &.default {
      background-color: var(--input-BackgroundColor);
      box-shadow: inset 0 0 0 1px var(--input-BorderColor);

      &.small {
        padding: var(--spacing-1) var(--spacing-1_5);
        height: var(--spacing-4);
      }
      &.large {
        position: relative;
        padding: 0 var(--spacing-2);
        height: var(--spacing-6_5);
      }
    }
    &.ghost {
      &.small {
        padding: var(--spacing-1_5) var(--spacing-2);
        height: var(--spacing-5);
      }
      &.large {
        padding: var(--spacing-1) var(--spacing-2);
        height: var(--spacing-6);

        input {
          font-weight: 500;
          font-size: 1.5rem;
        }
      }
    }

    input {
      margin: 0;
      padding: 0;
      width: 100%;
      color: var(--input-TextColor);
      caret-color: var(--global-focus-BorderColor);
      background-color: transparent;
      border: none;
      outline: none;
      appearance: none;

      &.labeled {
        height: 100%;
        padding-top: var(--spacing-4);
        padding-bottom: var(--spacing-1_5);
      }
    }

    .label {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      padding: var(--spacing-2_5) var(--spacing-2);
      font-size: 0.875rem;
      color: var(--input-LabelColor);
      transition:
        padding-top 0.2s,
        font-size 0.2s;
      pointer-events: none;
      user-select: none;
    }
    input:focus + .label,
    input:not(:placeholder-shown) + .label {
      padding-top: var(--spacing-1_5);
      font-size: 0.75rem;
      color: var(--input-filled-LabelColor);
    }
  }
  .editbox-footer {
    display: flex;
    align-items: center;
    margin-top: var(--spacing-1);
    padding: 0 var(--spacing-1);
    min-width: 0;
    min-height: var(--spacing-2);
    color: var(--input-HelperColor);

    &.msg.limit {
      justify-content: space-between;
    }
    &.limit:not(.msg) {
      flex-direction: row-reverse;

      .editbox-message {
        display: none;
      }
    }
    &:not(.limit) .limit {
      display: none;
    }

    .editbox-message {
      display: flex;
      align-items: center;
      margin-right: var(--spacing-2);
      min-width: 0;

      .msg-icon {
        flex-shrink: 0;
        margin-right: var(--spacing-0_5);
        width: var(--spacing-2);
        height: var(--spacing-2);
        fill: var(--input-HelperColor);
      }
    }
  }
</style>
