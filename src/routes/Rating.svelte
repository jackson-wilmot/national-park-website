<script>
    const { rating = 3 } = $props();
</script>

<style>
    div {
        display: flex;
        gap: 0.25rem;
        font-weight: 100;
        color: black;
    }

    @media (max-width: 650px) {
        div {
            color: white;
        }
    }
</style>

<div>
    {#each {length: 5} as _, i} 
        {#if rating > i}
            <i class="fa-solid fa-star"></i>
        {:else}
            <i class="fa-regular fa-star"></i>
        {/if}
    {/each}
</div>