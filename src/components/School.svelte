<script>
    import {
        Card,
        CardTitle,
        CardSubtitle,
        CardText,
        Container,
        Row,
        Col,
    } from "svelte-materialify";
    export let school;
</script>

<Card shaped>
    <CardTitle>{school.name}</CardTitle>

    <CardText>Class of {school.year}</CardText>
    <Container>
        <Row>
            {#each school.degrees as degree}
                <Col>
                    <CardSubtitle>{degree.type}</CardSubtitle>
                    <CardText>Major: {degree.major}</CardText>
                    {#if degree.minor}
                        <CardText>Minor: {degree.minor}</CardText>
                    {:else}
                        <CardText>Minor: N/A</CardText>
                    {/if}
                </Col>
            {/each}
        </Row>
    </Container>
</Card>
