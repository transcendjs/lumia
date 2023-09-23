<script lang="ts">
  import Theme from '$lib/components/Theme/Theme.svelte'

  export let context: any
</script>

<Theme theme={context?.backgrounds?.value === '#333333' ? 'dark' : 'light'}>
  <slot />
</Theme>
