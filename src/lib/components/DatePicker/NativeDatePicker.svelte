<script lang="ts">
  //
  // © 2023 Hardcore Engineering, Inc. All Rights Reserved.
  // Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
  //

  import type { IconId } from '$lib/icons.js'
  import ErrorSVG from '$lib/icons/error.svg?raw'
  import InfoSVG from '$lib/icons/info.svg?raw'
  import ButtonIcon from '$lib/components/Button/ButtonIcon.svelte'

  export let label: string
  export let value: Date | undefined = undefined
  export let disabled: boolean = false
  export let error: boolean = false
  export let messageText: string | undefined = undefined
  export let messageKind: 'normal' | 'error' | 'none' = 'none'

  let input: HTMLInputElement
  const calendarIcon: IconId = 'calendar' as IconId
  let icon: IconId = calendarIcon

  const clickCalendar = (event: MouseEvent): void => {
    event.stopPropagation()
  }
</script>

<div class="editbox-container" class:error={messageKind === 'error'}>
  <label
    class="font-regular-14 editbox-wrapper"
    class:error
    class:disabled
    class:empty={value === undefined}
  >
    <input
      bind:this={input}
      type="date"
      bind:value
      {disabled}
      on:blur
      on:change
      on:keyup
      on:input
    />
    <div class="label">{label}</div>
    <ButtonIcon kind={'tertiary'} size={'small'} {icon} on:click={clickCalendar} />
  </label>
  <div class="font-regular-12 editbox-footer" class:msg={messageText}>
    {#if messageText && messageKind !== undefined}
      <div class="editbox-message">
        <div class="msg-icon">
          {#if messageKind === 'error'}{@html ErrorSVG}{:else}{@html InfoSVG}{/if}
        </div>
        {messageText}
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .editbox-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--spacing-1_5);
    padding: 0 var(--spacing-1_5) 0 var(--spacing-2);
    height: var(--spacing-6_5);
    min-width: 0;
    background-color: var(--input-BackgroundColor);
    border-radius: var(--medium-BorderRadius);
    box-shadow: inset 0 0 0 1px var(--input-BorderColor);

    input {
      margin: 0;
      padding: var(--spacing-3_5) 0 var(--spacing-1_5);
      width: 100%;
      height: 100%;
      font: inherit;
      text-transform: uppercase;
      color: var(--global-primary-TextColor);
      caret-color: var(--global-focus-BorderColor);
      background-color: transparent;
      border: none;
      outline: none;
      appearance: none;

      &::placeholder {
        text-transform: none;
      }
      &::-webkit-datetime-edit-day-field:focus,
      &::-webkit-datetime-edit-month-field:focus,
      &::-webkit-datetime-edit-year-field:focus {
        color: var(--button-accent-LabelColor);
        background-color: var(--global-focus-SelectionColor);
      }
      &::-webkit-calendar-picker-indicator {
        background-color: #ffffff;
        margin-bottom: 1rem;
        padding: 5px;
        cursor: pointer;
        border-radius: 3px;
      }
      &::-webkit-inner-spin-button,
      &::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
      }
    }
    &.error {
      box-shadow: inset 0 0 0 1px var(--input-error-BorderColor);
    }
    &:not(.disabled) {
      cursor: text;

      &:active,
      &:focus-within {
        background-color: var(--input-BackgroundColor);
        outline: 2px solid var(--global-focus-BorderColor);
        outline-offset: 2px;
      }
    }
    &.disabled {
      &,
      input {
        cursor: not-allowed;
      }
      input {
        color: var(--input-PlaceholderColor);
      }
      & {
        background-color: transparent;
      }
    }
    &.empty input {
      color: transparent;

      &:focus {
        color: var(--input-focus-PlaceholderColor);
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
    &:not(.empty) > .label {
      padding-top: var(--spacing-1_25);
      font-size: 0.75rem;
      color: var(--input-filled-LabelColor);
    }
  }
  .editbox-container {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    min-width: 0;
    min-height: 0;

    &.error .editbox-message {
      color: var(--global-error-TextColor);
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
