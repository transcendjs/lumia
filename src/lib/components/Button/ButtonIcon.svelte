<script lang="ts">
  //
  // © 2023 Hardcore Engineering, Inc. All Rights Reserved.
  // Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
  //

  import type { IconId } from '$lib/icons.js'

  import ButtonBase from './ButtonBase.svelte'

  export let kind: 'primary' | 'secondary' = 'secondary'
  export let size: 'large' | 'small' = 'large'
  export let icon: IconId
  export let loading: boolean = false
</script>

<ButtonBase {kind} {size} {icon} {loading} />
