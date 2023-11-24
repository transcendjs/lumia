<script lang="ts">
  import Theme from '$lib/components/Theme/Theme.svelte'

  export let context: any
</script>

<Theme theme={context?.backgrounds?.value === '#1b2230' ? 'dark' : 'light'}>
  <slot />
</Theme>
