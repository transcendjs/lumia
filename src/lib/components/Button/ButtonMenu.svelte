<script lang="ts">
  //
  // © 2023 Hardcore Engineering, Inc. All Rights Reserved.
  // Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
  //

  import type { IconId } from '$lib/icons.js'
  import type { ButtonSize } from '$lib/types.ts'
  import ButtonBase from './ButtonBase.svelte'

  export let title: string | undefined = undefined
  export let kind: 'primary' | 'secondary' | 'tertiary' | 'negative' = 'secondary'
  export let size: ButtonSize = 'large'
  export let icon: IconId
  export let disabled: boolean = false
  export let loading: boolean = false

  let pressed: boolean = false
</script>

<ButtonBase
  type={title ? 'type-button' : 'type-button-icon'}
  {title}
  {kind}
  {size}
  {icon}
  {disabled}
  {loading}
  {pressed}
  hasMenu
  on:click={() => alert('Popup menu')}
/>
<slot />
