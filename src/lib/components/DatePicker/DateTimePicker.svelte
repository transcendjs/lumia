<script lang="ts">
  //
  // © 2023 Hardcore Engineering, Inc. All Rights Reserved.
  // Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
  //

  import type { IconId } from '$lib/icons.js'
  import ErrorSVG from '$lib/icons/error.svg?raw'
  import InfoSVG from '$lib/icons/info.svg?raw'
  import ButtonIcon from '$lib/components/Button/ButtonIcon.svelte'
  import { formatDateTime, areDatesEqual } from './utils.js'

  export let label: string
  export let value: Date | null = null
  export let type: 'datetime' | 'date' = 'datetime'
  export let disabled: boolean = false
  export let messageText: string | undefined = undefined
  export let messageKind: 'normal' | 'error' | 'none' = 'none'
  export let messageAllowed: boolean = false

  let input: HTMLInputElement
  const calendarIcon: IconId = 'calendar' as IconId
  let icon: IconId = calendarIcon

  let _value: string = ''
  $: updatedValue(value)
  $: empty = value == null

  const updatedValue = (date: Date | null): void => {
    const newValue = formatDateTime(date, type)
    if (newValue !== _value) _value = newValue
  }
  const changeValue = (): void => {
    const newValue = _value !== '' ? new Date(_value) : null
    if (!areDatesEqual(newValue, value, type)) value = newValue
  }

  const clickInput = (event: MouseEvent): void => {
    event.preventDefault()
  }
  const clickCalendar = (event: MouseEvent): void => {
    event.stopPropagation()
  }
</script>

<div class="datetime-container" class:messageAllowed class:error={messageKind === 'error'}>
  <label class="font-regular-14 datetime-wrapper" class:disabled class:empty>
    {#if type === 'datetime'}
      <input
        type="datetime-local"
        bind:this={input}
        bind:value={_value}
        {disabled}
        on:click={clickInput}
        on:change={changeValue}
      />
    {:else if type === 'date'}
      <input
        type="date"
        bind:this={input}
        bind:value={_value}
        {disabled}
        on:click={clickInput}
        on:change={changeValue}
      />
    {:else if type === 'time'}
      <input
        type="time"
        bind:this={input}
        bind:value={_value}
        {disabled}
        on:click={clickInput}
        on:change={changeValue}
      />
    {/if}
    <div class="label">{label}</div>
    <ButtonIcon kind={'tertiary'} size={'small'} {icon} {disabled} on:click={clickCalendar} />
  </label>
  {#if messageKind !== 'none' || messageAllowed}
    <div class="font-regular-12 datetime-footer" class:msg={messageText}>
      {#if messageText && messageKind !== undefined}
        <div class="datetime-message">
          <div class="msg-icon">
            {#if messageKind === 'error'}{@html ErrorSVG}{:else}{@html InfoSVG}{/if}
          </div>
          {messageText}
        </div>
      {/if}
    </div>
  {/if}
</div>

<style lang="scss">
  .datetime-wrapper {
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
      &::-webkit-datetime-edit-year-field:focus,
      &::-webkit-datetime-edit-minute-field:focus,
      &::-webkit-datetime-edit-hour-field:focus {
        color: var(--button-accent-LabelColor);
        background-color: var(--global-focus-SelectionColor);
      }
      &::-webkit-inner-spin-button,
      &::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
      }
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

    &.disabled {
      &,
      input {
        cursor: not-allowed;
      }
      input {
        color: var(--global-primary-TextColor);
      }
      & {
        background-color: transparent;
      }
      .label {
        color: var(--global-disabled-TextColor);
      }
    }
    &.empty input {
      color: transparent;

      &:focus {
        color: var(--input-focus-PlaceholderColor);
      }
    }
  }
  .datetime-container {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    min-width: 0;
    min-height: 0;

    &.error {
      .datetime-wrapper {
        box-shadow: inset 0 0 0 2px var(--input-error-BorderColor);
      }
      .datetime-message {
        color: var(--global-error-TextColor);
      }
    }
  }
  .datetime-footer {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin-top: var(--spacing-1);
    padding: 0 var(--spacing-1);
    min-width: 0;
    min-height: var(--spacing-2);
    color: var(--input-HelperColor);

    .datetime-message {
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
