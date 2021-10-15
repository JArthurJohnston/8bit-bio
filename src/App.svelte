<script>
	import { StackRouter, slide } from "svelte-stack-router";
	import { MaterialApp } from "svelte-materialify";
	import Education from "./components/Education.svelte";
	import Profile from "./components/Profile.svelte";
	import WorkHistory from "./components/WorkHistory.svelte";
	let theme = "light";

	import "nes.css/css/nes.min.css";
	import MainMenu from "./components/MainMenu.svelte";

	const routes = {
		"/": Profile,
		"/career": WorkHistory,
		"/edu": Education,
	};
</script>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

<main>
	<MaterialApp {theme}>
		<div>
		<StackRouter {routes} transitionFn={slide(300)}/>
			<MainMenu />
		</div>
	</MaterialApp>
</main>
