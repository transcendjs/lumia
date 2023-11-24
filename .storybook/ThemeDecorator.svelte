<script lang="ts">
  import Theme from '$lib/components/Theme/Theme.svelte'

  export let context: any
</script>

<Theme theme={context?.backgrounds?.value === '#f0f2f5' ? 'light' : 'dark'}>
  <slot />
</Theme>
