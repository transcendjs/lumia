<script lang="ts">

import Theme from '$lib/components/Theme/Theme.svelte'

export let context: any

</script>

<Theme theme={context?.backgrounds?.value === '#F8F8F8' ? 'light' : 'dark'}>
  <slot/>
</Theme>

