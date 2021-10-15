<script>
    import {
        CardSubtitle,
        Container,
        Row,
        Col,
    } from "svelte-materialify";
    import Pill from "./Pill.svelte";

    export let technologies;
</script>

<style>
    div {
        display: flex;
        flex-direction: column;
    }
</style>

<div>
    <CardSubtitle>Technologies</CardSubtitle>
    <Container>
        <Row>
            <Col class="d-flex flex-wrap">
                {#each technologies as tech}
                    <Pill>{tech}</Pill>
                {/each}
            </Col>
        </Row>
    </Container>
</div>
