<script lang="ts">
  //
  // © 2023 Hardcore Engineering, Inc. All Rights Reserved.
  // Licensed under the Eclipse Public License v2.0 (SPDX: EPL-2.0).
  //

  import '$lib/styles/styles.css'

  export let theme: 'light' | 'dark' = 'light'
</script>

<div class="font-regular-14 {theme}">
  <slot />
</div>

<style>
  div {
    /** Colors **/

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

    --selector-active-BackgroundColor: #3364e2;
    --selector-IconColor: #ffffff;
    --selector-disabled-IconColor: #8b97ad;

    --global-focus-BorderColor: #3364e2;
    --border-color-global-error-border-color: #fb6863;

    background-color: var(--background-color-bg-surface-01);
  }

  div.light {
    --background-color-bg-surface-01: #f0f2f5;
    --global-primary-IconColor: #0f121a;
    --global-primary-TextColor: #0f121a;
    --global-disabled-TextColor: #cbd2dd;
    --global-error-TextColor: #a01724;
    --global-accent-BackgroundColor: #d1e3ff;
    --global-on-nuance-TextColor: #2553cf;
    --global-secondary-IconColor: #556178;
    --global-secondary-TextColor: #556178;
    --global-focus-inset-BorderColor: #fff;
    --global-ui-active-BackgroundColor: #15307226;

    /** Buttons **/
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
    --button-menu-active-BorderColor: #0f121a;

    /** Editbox **/
    --input-BackgroundColor: #1530720d;
    --input-hover-BackgroundColor: #1530721a;
    --input-BorderColor: #1530720d;
    --input-TextColor: #0f121a;
    --input-LabelColor: #0f121a;
    --input-filled-LabelColor: #556178;
    --input-PlaceholderColor: #556178;
    --input-hover-PlaceholderColor: #0f121a;
    --input-focus-PlaceholderColor: #8b97ad;
    --input-HelperColor: #556178;
    --input-error-BorderColor: #e34748;
    --input-search-IconColor: #0F121A;

    /** Checkboxes **/
    --selector-BackgroundColor: #1530720d;
    --selector-BorderColor: #0f121a;
    --selector-off-BackgroundColor: #cbd2dd;
    --selector-hover-overlay-BackgroundColor: #1530721a;
    --selector-disabled-BackgroundColor: #1530721a;
    --selector-disabled-BorderColor: #1530720d;
  }

  div.dark {
    --background-color-bg-surface-01: #1b2230;
    --global-primary-IconColor: #ffffff;
    --global-primary-TextColor: #ffffff;
    --global-disabled-TextColor: #252e3f;
    --global-error-TextColor: #fb6863;
    --global-accent-BackgroundColor: #b5d1ff;
    --global-on-nuance-TextColor: #041d7d;
    --global-secondary-IconColor: #9fa9bd;
    --global-secondary-TextColor: #9fa9bd;
    --global-focus-inset-BorderColor: #181f2d;
    --global-ui-active-BackgroundColor: #a5bdff26;

    /** Buttons **/
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
    --button-menu-active-BorderColor: #d9dee6;

    /** Editbox **/
    --input-BackgroundColor: #a5bdff0d;
    --input-hover-BackgroundColor: #a5bdff1a;
    --input-BorderColor: #a5bdff0d;
    --input-TextColor: #ffffff;
    --input-LabelColor: #ffffff;
    --input-filled-LabelColor: #8b97ad;
    --input-PlaceholderColor: #8b97ad;
    --input-hover-PlaceholderColor: #ffffff;
    --input-focus-PlaceholderColor: #556178;
    --input-HelperColor: #8b97ad;
    --input-error-BorderColor: #fb6863;
    --input-search-IconColor: #FFFFFF;

    /** Checkboxes **/
    --selector-BackgroundColor: #a5bdff0d;
    --selector-BorderColor: #d9dee6;
    --selector-off-BackgroundColor: #556178;
    --selector-hover-overlay-BackgroundColor: #a5bdff1a;
    --selector-disabled-BackgroundColor: #a5bdff1a;
    --selector-disabled-BorderColor: #a5bdff0d;
  }
</style>
