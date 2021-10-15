<script>
    import {
        Card,
        CardTitle,
        CardText,
        Container,
        Divider,
        Row,
        Col,
    } from "svelte-materialify";
    import { workHistory } from "../stores/WorkHistoryStore.js";
    import Technologies from "./Technologies.svelte";

    let jobs = [];
    workHistory.subscribe((e) => (jobs = e));
</script>

<Container>
    <Card shaped>
        {#each jobs as job}
            <Row>
                <Col>
                    <CardTitle>{job.name}</CardTitle>
                    <CardText>{job.title}</CardText>
                </Col>
            </Row>
            <Technologies technologies={job.tech} />
            <Divider />
        {/each}
    </Card>
</Container>
