<script lang="ts">
    import Header from './lib/Header.svelte'
    import Footer from './lib/Footer.svelte'

	import { onMount } from "svelte"


	onMount(async function () {
		// global first call
	})
</script>

<main class="main">
	<Header />
	<Footer />
</main>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;800&display=swap')
@import "src/assets/styles/_vars"
@import "normalize.css"

.main
	// add fonts and global styles
</style>
