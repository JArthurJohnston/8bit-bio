<script>
    const src = "images/main-site-logo.png";
</script>

<style>
    div {
        background-color: #212529;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    img {
        width: 20em;
        margin: 1em;
        border-radius: 1em;
    }
    .profile-info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 1em;
        height: 11em;
    }
    .profile-content {
        display: flex;
        flex-direction: row;
    }
    section {
        display: flex;
        justify-content: flex-end;
    }
    i {
        margin: 1em;
    }
</style>

<div>
    <div class="nes-container is-rounded is-dark">
        <div class="profile-content">
            <img {src} alt="Joes profile" />
            <div class="profile-info">
                <span class="nes-text">Joe Johnston</span>
                <span class="nes-text">Software Engineer * Tinkerer *
                    Wizard</span>
            </div>
        </div>
        <section class="icon-list">
            <a href="https://www.facebook.com/joetheduk">
                <i class="nes-icon facebook is-large" />
            </a>
            <a href="https://github.com/JArthurJohnston">
                <i class="nes-icon github is-large" />
            </a>
            <a href="https://www.linkedin.com/in/joseph-johnston-jr-a488b391/">
                <i class="nes-icon linkedin is-large" />
            </a>
        </section>
    </div>
</div>
