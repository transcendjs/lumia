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
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    padding: 1rem;

    /** Typography **/

    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;

    --button-accent-LabelColor: #fff;
    --button-disabled-LabelColor: #8B97AD;
    --button-accent-IconColor: #fff;
    --button-disabled-IconColor: #8B97AD;

    --button-primary-BackgroundColor: #3364E2;
    --button-primary-BorderColor: #D1D5DE1A;
    --button-primary-hover-BackgroundColor: #6191FE;
    --button-primary-active-BackgroundColor: #2553CF;
    --button-primary-loading-LabelColor: #6191FE;

    --button-negative-loading-LabelColor: #FF9187;
    --button-negative-BorderColor: #D1D5DE26;
    --button-negative-hover-BackgroundColor: #E34748;
    --button-negative-active-BackgroundColor: #C42A32;

    --global-focus-BorderColor: #3364E2;

    background-color: var(--background-color-bg-surface-01);
  }

  div.light {
    --background-color-bg-surface-01: #f0f2f5;

    --button-subtle-LabelColor: #000;
    --button-subtle-IconColor: #000;
    --button-disabled-BackgroundColor: #1725470D;
    --button-primary-loading-LabelColor: #95BAFF;

    --button-secondary-BackgroundColor: #1725470D;
    --button-secondary-BorderColor: #1725471A;
    --button-secondary-hover-BackgroundColor: #1725471A;
    --button-secondary-active-BackgroundColor: #17254726;

    --button-negative-BackgroundColor: #EA4C4C;
    --button-tertiary-hover-BackgroundColor: #1725471A;
    --button-tertiary-active-BackgroundColor: #17254726;
  }

  div.dark {
    --background-color-bg-surface-01: #1b2230;

    --button-subtle-LabelColor: #fff;
    --button-subtle-IconColor: #fff;
    --button-disabled-BackgroundColor: #D1D5DE0D;
    --button-primary-loading-LabelColor: #6191FE;

    --button-secondary-BackgroundColor: #D1D5DE0D;
    --button-secondary-BorderColor: #D1D5DE1A;
    --button-secondary-hover-BackgroundColor: #D1D5DE1A;
    --button-secondary-active-BackgroundColor: #D1D5DE26;

    --button-negative-BackgroundColor: #E34748;
    --button-tertiary-hover-BackgroundColor: #D1D5DE1A;
    --button-tertiary-active-BackgroundColor: #D1D5DE26;
  }
</style>
