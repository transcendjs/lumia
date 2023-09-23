<script lang="ts">
  //
  // © 2023 Hardcore Engineering, Inc. All Rights Reserved.
  // Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
  //

  import { type IconId, IconContentLocation, resolveIcon } from '$lib/icons.js'

  export let icon: IconId

  const iconContent = resolveIcon(icon)
</script>

{#if iconContent.location === IconContentLocation.Raw}
  <!-- eslint-disable svelte/no-at-html-tags -->
  {@html iconContent.value}
{/if}
