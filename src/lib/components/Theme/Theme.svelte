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

    --button-accent-LabelColor: #fff;
    --button-disabled-LabelColor: #8b97ad;
    --button-accent-IconColor: #fff;
    --button-disabled-IconColor: #8b97ad;

    --button-primary-BackgroundColor: #3364e2;
    --button-primary-BorderColor: #d1d5de1a;
    --button-primary-hover-BackgroundColor: #6191fe;
    --button-primary-active-BackgroundColor: #2553cf;
    --button-primary-loading-LabelColor: #6191fe;

    --button-negative-loading-LabelColor: #ff9187;
    --button-negative-BorderColor: #d1d5de26;
    --button-negative-hover-BackgroundColor: #e34748;
    --button-negative-active-BackgroundColor: #c42a32;

    --global-focus-BorderColor: #3364e2;

    background-color: var(--background-color-bg-surface-01);
  }

  div.light {
    --background-color-bg-surface-01: #f0f2f5;

    --button-subtle-LabelColor: #000;
    --button-subtle-IconColor: #000;
    --button-disabled-BackgroundColor: #1725470d;
    --button-primary-loading-LabelColor: #95baff;

    --button-secondary-BackgroundColor: #1725470d;
    --button-secondary-BorderColor: #1725471a;
    --button-secondary-hover-BackgroundColor: #1725471a;
    --button-secondary-active-BackgroundColor: #17254726;

    --button-negative-BackgroundColor: #ea4c4c;
    --button-tertiary-hover-BackgroundColor: #1725471a;
    --button-tertiary-active-BackgroundColor: #17254726;
  }

  div.dark {
    --background-color-bg-surface-01: #1b2230;

    --button-subtle-LabelColor: #fff;
    --button-subtle-IconColor: #fff;
    --button-disabled-BackgroundColor: #d1d5de0d;
    --button-primary-loading-LabelColor: #6191fe;

    --button-secondary-BackgroundColor: #d1d5de0d;
    --button-secondary-BorderColor: #d1d5de1a;
    --button-secondary-hover-BackgroundColor: #d1d5de1a;
    --button-secondary-active-BackgroundColor: #d1d5de26;

    --button-negative-BackgroundColor: #e34748;
    --button-tertiary-hover-BackgroundColor: #d1d5de1a;
    --button-tertiary-active-BackgroundColor: #d1d5de26;
  }
</style>
