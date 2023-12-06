<script lang="ts">
  //
  // © 2023 Hardcore Engineering, Inc. All Rights Reserved.
  // Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
  //

  import type { DateFields, DateDescription } from '$lib/types.js'
  import type { IconId } from '$lib/icons.js'
  import { getValue, getMinMaxValue, getDaysByMonthYear } from './utils.js'
  import ErrorSVG from '$lib/icons/error.svg?raw'
  import InfoSVG from '$lib/icons/info.svg?raw'
  import DigitInput from './DigitInput.svelte'
  import ButtonIcon from '$lib/components/Button/ButtonIcon.svelte'

  export let label: string
  export let value: Date | number | string | undefined = undefined
  export let type: 'datetime' | 'date' | 'time' = 'datetime'
  export let disabled: boolean = false
  export let messageText: string | undefined = undefined
  export let messageKind: 'normal' | 'error' | 'none' = 'none'

  const calendarIcon: IconId = 'calendar' as IconId
  // const crossIcon: IconId = 'cross' as IconId
  const dateFields: Array<DateDescription> = [
    { id: 'day', placeholder: 'DD', maxlength: 2 },
    { id: 'month', placeholder: 'MM', maxlength: 2 },
    { id: 'year', placeholder: 'YYYY', maxlength: 4 }
  ]
  const timeFields: Array<DateDescription> = [
    { id: 'hour', placeholder: 'HH', maxlength: 2 },
    { id: 'minute', placeholder: 'MM', maxlength: 2 }
  ]

  $: empty = value === '' || value === undefined || value === 0
  $: hasDate = type !== 'time'
  $: hasTime = type !== 'date'
  let selected: string | null = null
  let icon: IconId = calendarIcon

  let fields: DateFields[] = []
  $: updatedType(hasDate, hasTime)
  const updatedType = (d: boolean, t: boolean): void => {
    fields = [...(d ? dateFields : []), ...(t ? timeFields : [])]
  }

  $: currentDate = new Date(value ?? Date.now())
  $: updatedDate(currentDate)
  const updatedDate = (date: Date): void => {
    if (!empty) fields.forEach((f) => (f.value = getValue(currentDate, f.id)))
  }

  const jump = (prev: boolean): void => {
    const index = fields.findIndex((f) => f.id === selected)
    if (index === -1) return
    let newIndex = index + (prev ? -1 : 1)
    if (newIndex === -1) newIndex = fields.length - 1
    else if (newIndex === fields.length) newIndex = 0
    fields[index].selected = false
    fields[newIndex].selected = true
  }

  const checkFields = (): void => {
    const dateFilled = hasDate
      ? fields.filter(
          (f) => (f.id === 'day' || f.id === 'month' || f.id === 'year') && f.value !== null
        ).length === 3
      : false
    const timeFilled = hasTime
      ? fields.filter((f) => (f.id === 'hour' || f.id === 'minute') && f.value !== null).length ===
        2
      : false
    const year =
      hasDate && dateFilled
        ? fields.find((f) => f.id === 'year')?.value ?? getValue(currentDate, 'year')
        : getValue(currentDate, 'year')
    const month =
      hasDate && dateFilled
        ? fields.find((f) => f.id === 'month')?.value ?? getValue(currentDate, 'month')
        : getValue(currentDate, 'month')
    let day =
      hasDate && dateFilled
        ? fields.find((f) => f.id === 'day')?.value ?? getValue(currentDate, 'day')
        : getValue(currentDate, 'day')
    if (day > getDaysByMonthYear(month, year)) day = getDaysByMonthYear(month, year)
    const h =
      hasTime && timeFilled
        ? fields.find((f) => f.id === 'hour')?.value ?? getValue(currentDate, 'hour')
        : hasTime
        ? getValue(currentDate, 'hour')
        : 0
    const m =
      hasTime && timeFilled
        ? fields.find((f) => f.id === 'minute')?.value ?? getValue(currentDate, 'minute')
        : hasTime
        ? getValue(currentDate, 'minute')
        : 0
    if ((hasDate && dateFilled) || (!hasDate && timeFilled))
      value = new Date(year, month - 1, day, h, m, 0, 0)
  }

  const change = (index: number, direction: 1 | 0 | -1): void => {
    const id = fields[index].id
    let newValue =
      (fields[index].value ?? getValue(currentDate, id)) +
      (fields[index].value === undefined ? 0 : direction)
    if (getMinMaxValue(currentDate, id, !empty, true) > newValue)
      newValue = getMinMaxValue(currentDate, id, !empty)
    else if (getMinMaxValue(currentDate, id, !empty) < newValue)
      newValue = getMinMaxValue(currentDate, id, !empty, true)
    if (fields[index].value !== newValue) {
      fields[index].value = newValue
      checkFields()
    }
  }

  const onSelected = (index: number, id: string | null): void => {
    fields[index].selected = fields[index].id === id
    if (id !== null) selected = id
    else checkFields()
  }

  const backClick = (): void => {
    const index = fields.findIndex((f) => f.value === null)
    const selIndex = index === -1 ? 0 : index
    fields[selIndex].selected = true
    selected = fields[selIndex].id
  }
  const clickCalendar = (event: MouseEvent): void => {
    event.stopPropagation()
  }
</script>

<div class="datepicker-container" class:error={messageKind === 'error'}>
  <button
    class="font-regular-14 datepicker-wrapper"
    class:error={messageKind === 'error'}
    class:disabled
    class:empty
    on:click={backClick}
  >
    <div class="datepicker-fields">
      {#each fields as field, i}
        <DigitInput
          bind:value={field.value}
          bind:element={field.element}
          selected={field.selected}
          maxvalue={getMinMaxValue(currentDate, field.id, !empty)}
          {...field}
          on:selected={(event) => onSelected(i, event.detail)}
          on:jump={(event) => {
            if (event.detail) jump(event.detail === -1)
          }}
          on:change={(event) => change(i, event.detail)}
        />
        {#if field.id === 'day' || field.id === 'month'}
          <span class="separator">.</span>
        {:else if field.id === 'hour'}
          <span class="separator">:</span>
        {:else if field.id === 'year' && hasTime}
          <span class="separator"> - </span>
        {/if}
      {/each}
    </div>
    <div class="label">{label}</div>
    <ButtonIcon kind={'tertiary'} size={'small'} {icon} on:click={clickCalendar} />
  </button>
  <div class="font-regular-12 datepicker-footer" class:msg={messageText}>
    {#if messageText && messageKind !== undefined}
      <div class="datepicker-message">
        <div class="msg-icon">
          {#if messageKind === 'error'}{@html ErrorSVG}{:else}{@html InfoSVG}{/if}
        </div>
        {messageText}
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .separator {
    margin: 0 0.1rem;
  }
  .datepicker-fields {
    display: flex;
    align-items: center;
    align-self: start;
    margin-top: var(--spacing-3_5);
    margin-left: -1px;
    min-width: 0;
    user-select: none;
  }
  .datepicker-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--spacing-1_5);
    padding: 0 var(--spacing-1_5) 0 var(--spacing-2);
    height: var(--spacing-6_5);
    min-width: 0;
    background-color: var(--input-BackgroundColor);
    border: none;
    border-radius: var(--medium-BorderRadius);
    box-shadow: inset 0 0 0 1px var(--input-BorderColor);
    appearance: none;

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
      &:hover {
        background-color: var(--input-hover-BackgroundColor);
      }
    }
    &.disabled {
      background-color: transparent;
      cursor: not-allowed;
    }
    &.empty {
      color: var(--input-focus-PlaceholderColor);

      .datepicker-fields {
        opacity: 0;
        transition: opacity 0.15s;
      }
      &:not(.disabled):focus-within .datepicker-fields {
        opacity: 1;
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
    &:focus-within > .label,
    &:not(.empty) > .label {
      padding-top: var(--spacing-1_25);
      font-size: 0.75rem;
      color: var(--input-filled-LabelColor);
    }
  }
  .datepicker-container {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    min-width: 0;
    min-height: 0;

    &.error .datepicker-message {
      color: var(--global-error-TextColor);
    }
  }
  .datepicker-footer {
    display: flex;
    align-items: center;
    margin-top: var(--spacing-1);
    padding: 0 var(--spacing-1);
    min-width: 0;
    min-height: var(--spacing-2);
    color: var(--input-HelperColor);

    .datepicker-message {
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
