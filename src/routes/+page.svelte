<script lang="ts">
  import Theme from '$lib/components/Theme/Theme.svelte'
  import Button from '$lib/components/Button/Button.svelte'
  import type { IconId } from '$lib/icons.js'

  const icon = 'default' as IconId
  const title = 'Hi there'
</script>

<Theme>
  <Button {title} kind="primary" {icon} />
  <Button {title} kind="primary" />
  <Button {title} kind="secondary" {icon} />
  <Button {title} kind="secondary" />
  <br /><br />
  <Button {title} kind="primary" {icon} size="small" />
  <Button {title} kind="primary" size="small" />
  <Button {title} kind="secondary" {icon} size="small" />
  <Button {title} kind="secondary" size="small" />
</Theme>

<br /><br />

<Theme theme="dark">
  <Button {title} kind="primary" {icon} />
  <Button {title} kind="primary" />
  <Button {title} kind="secondary" {icon} />
  <Button {title} kind="secondary" />
  <br /><br />
  <Button {title} kind="primary" {icon} size="small" />
  <Button {title} kind="primary" size="small" />
  <Button {title} kind="secondary" {icon} size="small" />
  <Button {title} kind="secondary" size="small" />
</Theme>
