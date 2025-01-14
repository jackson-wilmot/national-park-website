<style>
    div {
        color: black;
        display: flex;
        gap: 1rem;

        i {
            color: black;
        }
    }

    @media (max-width: 650px) {
        i {
            font-size: 2rem;
        }

        div {
            justify-content: space-evenly;
            width: 100%;
        }
    }
</style>

<div>
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <a target="_blank" href="https://www.facebook.com">
        <i class="fa-brands fa-facebook"></i>
    </a>

    <!-- svelte-ignore a11y_consider_explicit_label -->
    <a target="_blank" href="https://www.instagram.com">
        <i class="fa-brands fa-instagram"></i>
    </a>

    <!-- svelte-ignore a11y_consider_explicit_label -->
    <a target="_blank" href="https://www.youtube.com">
        <i class="fa-brands fa-youtube"></i>
    </a>

    <!-- svelte-ignore a11y_consider_explicit_label -->
    <a target="_blank" href="https://www.discord.com">
        <i class="fa-brands fa-discord"></i>
    </a>

    <!-- svelte-ignore a11y_consider_explicit_label -->
    <a target="_blank" href="https://www.pintrest.com">
        <i class="fa-brands fa-pinterest"></i>
    </a>
</div>