<script>
    const { title = "Default Title", orientation = "left" } = $props();
</script>

<style>
    .section-title {
        text-transform: uppercase;
        position: absolute;
        bottom: 25%;
        display: flex;
        word-break: keep-all;
        gap: 1rem;
        align-items: center;
        margin: 0;
    }

    .section-left {
        left: 2rem;
        transform: translate(-50%, 50%) rotate(-90deg);
        flex-direction: row-reverse;
    }

    .section-right {
        right: 2rem;
        transform: translate(50%, -50%) rotate(90deg);
    }

    .section-right p {
        transform: rotate(180deg);
    }

    .line {
        height: calc(var(--font-size) * 0.09375);
        width: calc(var(--font-size) * 9.375);
        background-color: white;
        display: inline-block;
    }
</style>

<div class="section-title {orientation === "left" ? "section-left" : "section-right"}">
    <p style:text-wrap="nowrap" style:display="inline">{title}</p>
    <i class="line"></i>
</div>