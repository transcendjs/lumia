<script lang="ts">
  //
  // © 2023 Hardcore Engineering, Inc. All Rights Reserved.
  // Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
  //

  import type { IconId } from '$lib/icons.js'

  import ButtonBase from './ButtonBase.svelte'

  export let title: string
  export let kind: 'primary' | 'secondary' | 'tertiary' | 'negative' = 'secondary'
  export let size: 'large' | 'medium' | 'small' = 'large'
  export let icon: IconId | undefined = undefined
  export let disabled: boolean = false
  export let loading: boolean = false
</script>

<ButtonBase type={'type-button'} {title} {kind} {size} {icon} {loading} {disabled} />
