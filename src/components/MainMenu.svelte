<script>
    import { push } from "svelte-stack-router";

    const goToCareer = () => {
        push("/career");
    };
</script>

<style>
    li {
        margin: 1em;
    }
    li:hover {
        color: chartreuse;
    }
</style>

<div class="nes-container is-rounded is-dark">
    <ul class="nes-list is-circle">
        <li on:click={goToCareer} class="nes-text nes-pointer">&#62; Career</li>
        <li on:click={() => push('/edu')} class="nes-text nes-pointer">
            &#62; Education
        </li>
        <li on:click={() => push('/')} class="nex-text nes-pointer">&#62; Technologies</li>
    </ul>
</div>
