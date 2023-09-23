<script lang="ts">
  import { type IconId, IconContentLocation, resolveIcon } from "$lib/icons.js"

  export let icon: IconId

  const iconContent = resolveIcon(icon)
</script>

{#if iconContent.location === IconContentLocation.Raw }
  {@html iconContent.value}
{/if}
