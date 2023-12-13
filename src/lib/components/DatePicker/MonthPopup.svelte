<script lang="ts">
  //
  // © 2023 Hardcore Engineering, Inc. All Rights Reserved.
  // Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
  //

  import type { IconId } from '$lib/icons.js'
  import ButtonIcon from '$lib/components/Button/ButtonIcon.svelte'
  import { MILLISECONDS_IN_DAY, MILLISECONDS_IN_WEEK, getWeekDayName, getWeeksInMonth, getMonthName, areDatesEqual } from './utils.js'

  export let value: Date | null = null
  export let mondayStart: boolean = true
  export let showQuickSelection: boolean = false

  const chevronLeft: IconId = 'chevron-left' as IconId
  const chevronRight: IconId = 'chevron-right' as IconId
  const qsIcon: IconId = 'quickSelection' as IconId

  let startDate: Date
  let lastDate: Date
  let firstDay: number

  $: currentDate = value ?? new Date()
  $: viewDate = currentDate
  $: updatedDate(viewDate)
  $: weeksInMonth = getWeeksInMonth(viewDate.getFullYear(), viewDate.getMonth(), mondayStart)

  function updatedDate(date: Date): void {
    if (!date) return
    viewDate = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0)
    lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0, 0, 0, 0, 0)
    firstDay = viewDate.getDay()
    startDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1 - firstDay + (mondayStart ? 1 : 0))
    if (startDate.getTime() > viewDate.getTime()) startDate = new Date(startDate.getTime() - MILLISECONDS_IN_WEEK)
  }

  const jump = (direction: -1 | 1): void => {
    viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + direction, 1, 0, 0, 0, 0)
  }
</script>

{#if viewDate}
  <div class="monthPopup-container">
    <div class="monthPopup-header">
      <div class="heading-medium-20 monthPopup-header__date">
        {getMonthName(viewDate)}<span>{viewDate.getFullYear()}</span>
      </div>
      <div class="monthPopup-header__buttons">
        <ButtonIcon kind={'tertiary'} size={'small'} icon={chevronLeft} on:click={() => jump(-1)} />
        <ButtonIcon kind={'tertiary'} size={'small'} icon={chevronRight} on:click={() => jump(1)} />
      </div>
    </div>
    {#if showQuickSelection}
      <div class="monthPopup-quickSelection">
        <ButtonIcon kind={'tertiary'} size={'medium'} icon={qsIcon} />
        <ButtonIcon kind={'tertiary'} size={'medium'} icon={qsIcon} />
        <ButtonIcon kind={'tertiary'} size={'medium'} icon={qsIcon} />
        <ButtonIcon kind={'tertiary'} size={'medium'} icon={qsIcon} />
      </div>
    {/if}
    <div class="monthPopup-weeklyHeadline font-regular-12">
      {#each [...Array(7).keys()] as dayOfWeek}
        <div class="weekday"><span>{getWeekDayName(new Date(startDate.getTime() + dayOfWeek * MILLISECONDS_IN_DAY), 'short')}</span></div>
      {/each}
    </div>
    <div class="monthPopup-days">
      {#each [...Array(weeksInMonth).keys()] as week}
        {#each [...Array(7).keys()] as dayOfWeek}
          {@const day = new Date(startDate.getTime() + (week * 7 + dayOfWeek) * MILLISECONDS_IN_DAY)}
          <div
            class="font-regular-14 monthPopup-days__day"
            class:wrong={day.getTime() < viewDate.getTime() || day.getTime() > lastDate.getTime()}
            class:weekend={day.getDay() === 0 || day.getDay() === 6}
            class:selected={areDatesEqual(day, currentDate, 'date')}
          >
            {day.getDate()}
          </div>
        {/each}
      {/each}
    </div>
  </div>
{/if}

<style lang="scss">
  .monthPopup-container {
    display: flex;
    flex-direction: column;
    width: 17.5rem;
    min-width: 17.5rem;
    min-height: 0;
    background-color: var(--global-popover-BackgroundColor);
    border: 1px solid var(--border-color-surfaces-surface-03-border-color);
    border-radius: var(--medium-BorderRadius);
    user-select: none;

    .monthPopup-header,
    .monthPopup-quickSelection,
    .monthPopup-weeklyHeadline,
    .monthPopup-weeklyHeadline .weekday,
    .monthPopup-days__day {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-width: 0;
      min-height: 0;
    }
    .monthPopup-header {
      padding: var(--spacing-2);

      .monthPopup-header__date {
        color: var(--button-subtle-LabelColor);

        &::first-letter {
          text-transform: uppercase;
        }
        span {
          margin-left: var(--spacing-1);
          color: var(--global-secondary-TextColor);
        }
      }
      .monthPopup-header__buttons {
        display: flex;
        align-items: center;
        gap: var(--spacing-1);
        min-width: 0;
      }
    }
    .monthPopup-quickSelection {
      padding: var(--spacing-1) var(--spacing-2) var(--spacing-2);
    }
    .monthPopup-weeklyHeadline {
      padding: 0 var(--spacing-1_5);
      border-top: 1px solid var(--button-secondary-BorderColor);
      border-bottom: 1px solid var(--button-secondary-BorderColor);

      .weekday {
        justify-content: center;
        padding: var(--spacing-1) var(--spacing-0_5);
        width: var(--spacing-4);
        height: var(--spacing-4);
        color: var(--global-tertiary-TextColor);

        span::first-letter {
          text-transform: uppercase;
        }
      }
    }
    .monthPopup-days {
      position: relative;
      display: grid;
      grid-template-columns: repeat(7, var(--spacing-4));
      padding: var(--spacing-1) var(--spacing-1_5) var(--spacing-2);
      row-gap: var(--spacing-0_5);
      justify-content: space-between;

      &__day {
        justify-content: center;
        padding: var(--spacing-1) var(--spacing-0_5);
        width: var(--spacing-4);
        height: var(--spacing-4);
        border-radius: var(--small-BorderRadius);

        &.wrong {
          color: var(--global-secondary-TextColor);
        }
        &.weekend {
          color: var(--global-tertiary-TextColor);
        }
        &.selected {
          font-weight: 700;
          color: var(--button-accent-LabelColor);
          background-color: var(--button-primary-BackgroundColor);
          border: 1px solid var(--button-primary-BorderColor);
        }
      }
    }
  }
</style>
