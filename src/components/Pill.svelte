<script>
    import { CardText } from "svelte-materialify";
</script>

<style>
    .pill {
        background-color: lightgray;
        border-radius: 1em;
        padding: 0 6px;
        margin: 1px;
    }
</style>

<div class="text-subtitle-2 pill">
    <slot />
</div>
