<script lang="ts">
  import Theme from '$lib/components/Theme/Theme.svelte'
  import Button from '$lib/components/Button/Button.svelte'
  import ButtonIcon from '$lib/components/Button/ButtonIcon.svelte'
  import ButtonMenu from '$lib/components/Button/ButtonMenu.svelte'
  import Editbox from '$lib/components/Editbox/Editbox.svelte'
  import FormInput from '$lib/components/Editbox/FormInput.svelte'
  import Checkbox from '$lib/components/Checkbox/Checkbox.svelte'
  import RadioButton from '$lib/components/RadioButton/RadioButton.svelte'
  import SwitcherBase from '$lib/components/Switcher/SwitcherBase.svelte'
  import Toggle from '$lib/components/Toggle/Toggle.svelte'
  import { DatePicker, NativeDatePicker } from '$lib/index.js'
  import type { IconId } from '$lib/icons.js'

  interface CheckItems {
    label?: string
    checked?: boolean
    disabled?: boolean
    error?: boolean
    indeterminate?: boolean
    required?: boolean
  }

  const icon = 'default' as IconId
  const title = 'Hi there'
  const themes: Array<'light' | 'dark'> = ['light', 'dark']
  const kinds: Array<'primary' | 'secondary' | 'tertiary' | 'negative'> = [
    'primary',
    'secondary',
    'tertiary',
    'negative'
  ]
  const sizes: Array<'large' | 'medium' | 'small'> = ['large', 'medium', 'small']
  let expanded: boolean[] = new Array(sizes.length * 3)
  let checkboxes: Array<CheckItems> = [
    {
      label:
        'Checkbox with long long long long long long long long long long long long long long Label and is requried',
      checked: true,
      required: true
    },
    { label: 'Checkbox label', checked: true },
    { label: 'Checkbox label', checked: true, error: true },
    { label: 'Checkbox label', checked: true, disabled: true },
    { label: 'Checkbox label', checked: false },
    { label: 'Checkbox label', checked: false, error: true },
    { label: 'Checkbox label', checked: false, disabled: true },
    { label: 'Checkbox label', indeterminate: true },
    { label: 'Checkbox label', error: true, indeterminate: true },
    { label: 'Checkbox label', disabled: true, indeterminate: true }
  ]
</script>

<div class="themes">
  {#each themes as theme}
    <Theme {theme}>
      <div class="column root">
        <div class="row header">DatePicker</div>
        <div class="row col" style:max-width={'15rem'}>
          <!-- <DatePicker label={'DateTime'} value={new Date(2002, 0, 24)} /> -->
          <DatePicker label={'DateTime'} />
          <DatePicker label={'Date'} type={'date'} />
          <DatePicker label={'Time'} type={'time'} />
        </div>
        <div class="row header">NativeDatePicker</div>
        <div class="row" style:max-width={'23rem'}>
          <NativeDatePicker label={'Label'} />
        </div>
        <div class="row header">Toggle</div>
        <div class="row" style:max-width={'23rem'} style:justify-content={'center'}>
          <Toggle label={'Toggle label'} background />
          <Toggle label={'Toggle label'} background disabled />
          <Toggle label={'Toggle label'} background checked />
          <Toggle label={'Toggle label'} background checked disabled />
          <Toggle label={'Toggle label'} size={'small'} background />
          <Toggle label={'Toggle label'} size={'small'} background disabled />
          <Toggle label={'Toggle label'} />
          <Toggle label={'Toggle label'} disabled />
          <Toggle label={'Toggle label'} checked />
          <Toggle label={'Toggle label'} checked disabled />
          <Toggle label={'Toggle label'} size={'small'} checked />
          <Toggle label={'Toggle label'} size={'small'} checked disabled />
        </div>
        <div class="row header">SwitcherBase</div>
        <div class="row" style:max-width={'20rem'}>
          <SwitcherBase name={'sw_' + theme} {icon} title={'Switcher label'} />
          <SwitcherBase name={'sw_' + theme} title={'Switcher label'} />
          <SwitcherBase
            name={'sw_' + theme}
            {icon}
            title={'Switcher label'}
            kind={'subtle'}
            checked
          />
          <SwitcherBase name={'sw_' + theme} title={'Switcher label'} kind={'subtle'} />
        </div>
        <div class="row header">RadioButton</div>
        <div class="row" style:max-width={'10rem'}>
          <RadioButton name={'rg1_' + theme} label={'Radio Label'} />
          <RadioButton name={'rg1_' + theme} label={'Radio Label'} error />
          <RadioButton name={'rg1_' + theme} label={'Radio Label'} checked disabled />
          <RadioButton name={'rg1_' + theme} label={'Radio Label'} />
        </div>
        <div class="row header">Checkbox</div>
        <div class="row" style:max-width={'25rem'}>
          {#each checkboxes as checkbox}
            <Checkbox {...checkbox} />
          {/each}
        </div>
        <div class="row header">ValidatingEditbox</div>
        <div class="row" style:align-items={'start'} style:max-width={'40rem'}>
          <FormInput
            label={'Label'}
            size={'large'}
            messageText={'Helper text (Optional)'}
            messageKind={'normal'}
            limit={30}
          />
          <FormInput label={'Label'} messageText={'Error text'} messageKind={'error'} limit={20} />
          <FormInput label={'Label'} messageText={'Helper text (Optional)'} disabled limit={20} />
        </div>
        <div class="row header">Editbox</div>
        <div class="row" style:align-items={'start'} style:max-width={'40rem'}>
          <Editbox label={'Label'} size={'large'} limit={30} />
          <Editbox label={'Label'} error limit={20} />
          <Editbox label={'Label'} error disabled limit={20} />
          <Editbox label={'Label'} kind={'ghost'} size={'large'} />
          <Editbox label={'Label'} kind={'ghost'} error />
        </div>
        <div class="row header">Button</div>
        {#each sizes as size, i}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            class="row group"
            class:collapsed={!expanded[i]}
            on:click={() => (expanded[i] = !expanded[i])}
          >
            Size: {size}
            <div class="preview" on:click|stopPropagation={() => {}}>
              <Button {title} kind={'primary'} {size} {icon} />
              <svg class="chevron" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.2,4.9L3,6.1l5,5l5-5l-1.2-1.2L8,8.7L4.2,4.9z" />
              </svg>
            </div>
          </div>
          <div class="column">
            {#each kinds as kind}
              <div class="row">
                <Button {title} {kind} {size} {icon} />
                <Button {title} {kind} {size} />
                <Button {title} {kind} {size} {icon} loading />
                <Button {title} {kind} {size} loading />
                <Button {title} {kind} {size} {icon} disabled />
                <Button {title} {kind} {size} disabled />
              </div>
            {/each}
          </div>
        {/each}
        <div class="row header">ButtonIcon</div>
        {#each sizes as size, i}
          {@const index = sizes.length + i}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            class="row group"
            class:collapsed={!expanded[index]}
            on:click={() => (expanded[index] = !expanded[index])}
          >
            Size: {size}
            <div class="preview" on:click|stopPropagation={() => {}}>
              <ButtonIcon kind={'primary'} {size} {icon} />
              <svg class="chevron" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.2,4.9L3,6.1l5,5l5-5l-1.2-1.2L8,8.7L4.2,4.9z" />
              </svg>
            </div>
          </div>
          <div class="column">
            {#each kinds as kind}
              <div class="row">
                <ButtonIcon {kind} {size} {icon} />
                <ButtonIcon {kind} {size} {icon} loading />
                <ButtonIcon {kind} {size} {icon} disabled />
              </div>
            {/each}
          </div>
        {/each}
        <div class="row header">ButtonMenu</div>
        {#each sizes as size, i}
          {@const index = sizes.length * 2 + i}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            class="row group"
            class:collapsed={!expanded[index]}
            on:click={() => (expanded[index] = !expanded[index])}
          >
            Size: {size}
            <div class="preview" on:click|stopPropagation={() => {}}>
              <ButtonMenu {title} kind={'primary'} {size} {icon} />
              <svg class="chevron" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.2,4.9L3,6.1l5,5l5-5l-1.2-1.2L8,8.7L4.2,4.9z" />
              </svg>
            </div>
          </div>
          <div class="column">
            {#each kinds as kind}
              <div class="row">
                <ButtonMenu {title} {kind} {size} {icon} />
                <ButtonMenu {title} {kind} {size} {icon} loading />
                <ButtonMenu {title} {kind} {size} {icon} disabled />
                <ButtonMenu {kind} {size} {icon} />
                <ButtonMenu {kind} {size} {icon} loading />
                <ButtonMenu {kind} {size} {icon} disabled />
              </div>
            {/each}
          </div>
        {/each}
      </div>
    </Theme>
  {/each}
</div>

<style lang="scss">
  .themes {
    display: flex;
    width: 100%;
    max-width: max-content;
    gap: 0.5rem;

    .column {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &.root {
        padding: 1.5rem;
      }
    }
    .row {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      &:not(.group, .header, .col) {
        gap: 0.5rem;
      }
      &.col {
        flex-direction: column;
        align-items: start;
      }
      &.header,
      &.group {
        margin: 0 -1rem;
        font-weight: 500;
        border-radius: var(--extra-small-BorderRadius);

        .preview {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
      }
      &.header {
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        color: var(--button-subtle-LabelColor);
        background-color: var(--button-secondary-BackgroundColor);
      }
      &.group {
        padding: 1rem;
        justify-content: space-between;
        font-size: 2rem;
        color: var(--button-disabled-IconColor);
        cursor: pointer;

        .chevron {
          width: 1rem;
          height: 1rem;
          fill: var(--button-disabled-IconColor);
          transform-origin: center;
          transform: rotate(0deg);
          transition: transform 0.1s ease-in-out;
        }
        &:hover,
        &:active {
          background-color: var(--button-secondary-hover-BackgroundColor);
          color: var(--button-subtle-LabelColor);
        }
        &.collapsed {
          .chevron {
            transform: rotate(90deg);
          }
          & + .column {
            overflow: hidden;
            max-height: 0;
          }
        }
      }
    }
  }
</style>
