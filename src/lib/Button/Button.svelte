<script lang="ts">
	export let title: string
  export let kind: 'primary' | 'default' | undefined = undefined

</script>

<button class:primary={kind === 'primary'}
>
  {title}
</button>

<style lang="scss">

button {
  padding: .375rem .75rem;
  border-radius: .375rem;
  border-width: 0;
  font-size: .8125rem;
  line-height: 1.25rem;

  background-color: #205DC2;
  color: white;

  &:hover {
    background-color: #3575DE;
  }

}

.primary {
  background-color: #205DC2;

  &:hover {
    background-color: #3575DE;
  }
}

</style>
