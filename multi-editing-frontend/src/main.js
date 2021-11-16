import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		editableText: '',
	}
});

export default app;