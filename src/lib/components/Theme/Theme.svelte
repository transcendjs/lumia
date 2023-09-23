<script lang="ts">
  //
  // © 2023 Hardcore Engineering, Inc. All Rights Reserved.
  // Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
  //

  import '$lib/styles/styles.css'

  export let theme: 'light' | 'dark' = 'light'
</script>

<div class:light={theme === 'light'} class:dark={theme === 'dark'}>
  <slot />
</div>

<style>
  div {
    /** Typography **/

    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;

    --button-primary-BackgroundColor: #3364e2;
    --button-primary-hover-BackgroundColor: #224fcb;
    --button-primary-active-BackgroundColor: #1137ab;
    --button-primary-BorderColor: #d1d5de1a;
    --button-primary-LabelColor: #ffffff;

    background-color: var(--background-color-bg-surface-01);
  }

  div.light {
    --background-color-bg-surface-01: #f0f2f5;

    --button-secondary-BackgroundColor: #1725470d;
    --button-secondary-BorderColor: #1725471a;
    --button-secondary-hover-BackgroundColor: #1725471a;
    --button-secondary-active-BackgroundColor: #17254726;

    --button-secondary-LabelColor: #0f121a;

    --global-focus-BorderColor: #224fcb;
  }

  div.dark {
    --background-color-bg-surface-01: #1b2230;

    --button-secondary-BackgroundColor: #d1d5de0d;
    --button-secondary-BorderColor: #d1d5de1a;
    --button-secondary-hover-BackgroundColor: #d1d5de1a;
    --button-secondary-active-BackgroundColor: #d1d5de26;

    --button-secondary-LabelColor: #ffffff;

    --global-focus-BorderColor: #3869e5;
  }
</style>
