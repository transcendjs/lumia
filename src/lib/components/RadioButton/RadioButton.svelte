<script lang="ts">
  //
  // © 2023 Hardcore Engineering, Inc. All Rights Reserved.
  // Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
  //

  export let label: string | undefined = undefined
  export let name: string
  export let checked: boolean = false
  export let disabled: boolean = false
  export let error: boolean = false
</script>

<label class="radioButton-container" class:disabled>
  <input type="radio" class="radioButton" {name} {checked} {disabled} on:change />
  <div class="radioButton-element" class:disabled class:error />
  {#if label}
    <div class="radioButton-label">{label}</div>
  {/if}
</label>

<style lang="scss">
  .radioButton-element {
    position: relative;
    flex-shrink: 0;
    width: var(--spacing-2);
    height: var(--spacing-2);
    background-color: var(--selector-BackgroundColor);
    border: 1px solid var(--selector-BorderColor);
    border-radius: var(--large-BorderRadius);
  }
  .radioButton-label {
    color: var(--global-primary-TextColor);
    user-select: none;
  }
  .radioButton {
    overflow: hidden;
    position: absolute;
    margin: -1px;
    padding: 0;
    width: 1px;
    height: 1px;
    border: 0;
    clip: rect(0 0 0 0);

    &:checked + .radioButton-element {
      background-color: var(--selector-active-BackgroundColor);
      border-color: var(--selector-active-BackgroundColor);

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: var(--spacing-0_75);
        height: var(--spacing-0_75);
        background-color: var(--selector-IconColor);
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &:disabled + .radioButton-element {
      box-shadow: none;
      background-color: var(--selector-disabled-BackgroundColor);
      border-color: var(--selector-disabled-BorderColor);

      &::after {
        background-color: var(--selector-disabled-IconColor);
      }
      & + .radioButton-label {
        color: var(--global-disabled-TextColor);
      }
    }
    & + .radioButton-element.error {
      border-color: var(--border-color-global-error-border-color);
    }
    &:focus + .radioButton-element {
      outline: 2px solid var(--global-focus-BorderColor);
      outline-offset: 2px;
    }
  }
  .radioButton-container {
    display: inline-flex;
    gap: var(--spacing-2);
    min-width: var(--spacing-2);
    min-height: var(--spacing-2);

    &:not(.disabled) {
      cursor: pointer;

      &:active .radioButton-element {
        outline: 2px solid var(--global-focus-BorderColor);
        outline-offset: 2px;
      }
      &:hover .radioButton-element {
        box-shadow: 0 0 0 4px var(--selector-hover-overlay-BackgroundColor);
      }
    }
  }
</style>
