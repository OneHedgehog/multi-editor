<script>
	export let editableText;
	const handleKeydown = (event, text) => {
		console.log('target.str = ', event.target.value);
	}
</script>

<main>
	<h1>Hedgehog Multieditor</h1>
	<textarea class='editor' contenteditable="true" on:input={handleKeydown} bind:value={editableText}></textarea>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 100;
	}

	.editor {
		margin: 0 auto;
		padding: 6px;
		border-radius: 6px;
		border: 1px solid #000;
		width: 90%;
		height: 600px;
		text-align: left;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>