<script lang="ts">
  import Theme from '$lib/components/Theme/Theme.svelte'
  import Button from '$lib/components/Button/Button.svelte'
  import type { IconId } from '$lib/icons.js'

  const icon = 'default' as IconId
  const title = 'Hi there'
</script>

<Theme>
  <div class="row">
    <Button {title} kind="primary" {icon} />
    <Button {title} kind="primary" />
    <Button {title} kind="primary" {icon} loading={true} />
    <Button {title} kind="primary" loading={true} />
    <Button {title} kind="primary" {icon} disabled />
    <Button {title} kind="primary" disabled />
  </div>
  <div class="row">
    <Button {title} kind="secondary" {icon} />
    <Button {title} kind="secondary" />
    <Button {title} kind="secondary" {icon} loading={true} />
    <Button {title} kind="secondary" loading={true} />
    <Button {title} kind="secondary" {icon} disabled />
    <Button {title} kind="secondary" disabled />
  </div>
  <div class="row">
    <Button {title} kind="tertiary" {icon} />
    <Button {title} kind="tertiary" />
    <Button {title} kind="tertiary" {icon} loading={true} />
    <Button {title} kind="tertiary" loading={true} />
    <Button {title} kind="tertiary" {icon} disabled />
    <Button {title} kind="tertiary" disabled />
  </div>
  <div class="row">
    <Button {title} kind="negative" {icon} />
    <Button {title} kind="negative" />
    <Button {title} kind="negative" {icon} loading={true} />
    <Button {title} kind="negative" loading={true} />
    <Button {title} kind="negative" {icon} disabled />
    <Button {title} kind="negative" disabled />
  </div>
</Theme>

<Theme theme="dark">
  <div class="row">
    <Button {title} kind="primary" {icon} />
    <Button {title} kind="primary" />
    <Button {title} kind="primary" {icon} loading={true} />
    <Button {title} kind="primary" loading={true} />
    <Button {title} kind="primary" {icon} disabled />
    <Button {title} kind="primary" disabled />
  </div>
  <div class="row">
    <Button {title} kind="secondary" {icon} />
    <Button {title} kind="secondary" />
    <Button {title} kind="secondary" {icon} loading={true} />
    <Button {title} kind="secondary" loading={true} />
    <Button {title} kind="secondary" {icon} disabled />
    <Button {title} kind="secondary" disabled />
  </div>
  <div class="row">
    <Button {title} kind="tertiary" {icon} />
    <Button {title} kind="tertiary" />
    <Button {title} kind="tertiary" {icon} loading={true} />
    <Button {title} kind="tertiary" loading={true} />
    <Button {title} kind="tertiary" {icon} disabled />
    <Button {title} kind="tertiary" disabled />
  </div>
  <div class="row">
    <Button {title} kind="negative" {icon} />
    <Button {title} kind="negative" />
    <Button {title} kind="negative" {icon} loading={true} />
    <Button {title} kind="negative" loading={true} />
    <Button {title} kind="negative" {icon} disabled />
    <Button {title} kind="negative" disabled />
  </div>
</Theme>

<style>
  .row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .row + .row { margin-top: 1rem; }
</style>
