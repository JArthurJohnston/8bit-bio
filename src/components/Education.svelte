<script>
    import School from "./School.svelte";
    import { education } from "../stores/EducationStore.js";
    import { Row, Container, Col } from "svelte-materialify";
    let eduData = [];
    education.subscribe((e) => (eduData = e));
</script>

<style>

</style>

<Container>
    <Row>
        {#each eduData as school}
            <Col sm="12" md="6">
                <School {school} />
            </Col>
        {/each}
    </Row>
</Container>
