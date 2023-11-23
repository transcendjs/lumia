<script lang="ts">
  //
  // © 2023 Hardcore Engineering, Inc. All Rights Reserved.
  // Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
  //

  import Editbox from '$lib/components/Editbox/Editbox.svelte'
  import ErrorSVG from '$lib/icons/error.svg?raw'
  import InfoSVG from '$lib/icons/info.svg?raw'

  export let label: string
  export let value: string | undefined = undefined
  export let size: 'small' | 'large' = 'small'
  export let messageText: string | undefined = undefined
  export let messageKind: 'normal' | 'error' | 'none' = 'none'
  export let disabled: boolean = false
  export let password: boolean = false
  export let limit: number = 0
</script>

<div class="editbox-container" class:error={messageKind === 'error'}>
  <Editbox
    {label}
    bind:value
    kind={'default'}
    {size}
    {disabled}
    {password}
    {limit}
    error={messageKind === 'error'}
    on:blur
    on:change
    on:keyup
    on:input
  />
  <div class="font-regular-12 editbox-footer" class:msg={messageText} class:limit>
    {#if messageText && messageKind !== undefined}
      <div class="editbox-message">
        <div class="msg-icon">
          {#if messageKind === 'error'}{@html ErrorSVG}{:else}{@html InfoSVG}{/if}
        </div>
        {messageText}
      </div>
    {/if}
    {#if limit}
      <div class="limit">{value?.length ?? 0}/{limit}</div>
    {/if}
  </div>
</div>

<style lang="scss">
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
