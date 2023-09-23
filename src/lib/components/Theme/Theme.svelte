<script lang="ts">
  //
  // © 2023 Hardcore Engineering, Inc. All Rights Reserved.
  // Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
  // 

  import '$lib/styles/styles.css'

  export let theme: 'light' | 'dark' = 'light'
</script>

<div 
  class:light={theme === 'light'}
  class:dark={theme === 'dark'}>
  <slot/>
</div>

<style lang="css">

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');

div {
  
  /** Typography **/

  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;

  --button-primary-BackgroundColor: #3364E2;
  --button-primary-hover-BackgroundColor: #224FCB; 
  --button-primary-active-BackgroundColor: #1137AB;
  --button-primary-BorderColor: #D1D5DE1A;
  --button-primary-LabelColor: #FFFFFF;

  background-color: var(--background-color-bg-surface-01);
}

div.light {
  --background-color-bg-surface-01: #F0F2F5;

  --button-secondary-BackgroundColor: #1725470D;
  --button-secondary-BorderColor: #1725471A;
  --button-secondary-hover-BackgroundColor: #1725471A;
  --button-secondary-active-BackgroundColor: #17254726;

  --button-secondary-LabelColor: #0F121A;

  --global-focus-BorderColor: #224FCB;
}

div.dark {
  --background-color-bg-surface-01: #1B2230;

  --button-secondary-BackgroundColor: #D1D5DE0D;
  --button-secondary-BorderColor: #D1D5DE1A;
  --button-secondary-hover-BackgroundColor: #D1D5DE1A;  
  --button-secondary-active-BackgroundColor: #D1D5DE26;

  --button-secondary-LabelColor: #FFFFFF;

  --global-focus-BorderColor: #3869E5;
}

</style>