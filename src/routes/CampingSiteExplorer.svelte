<script>
    import { onMount } from "svelte";
    import ArrowLeft from "./ArrowLeft.svelte";
    import ArrowRight from "./ArrowRight.svelte";
    import { fade } from "svelte/transition";
    
    let locations = [
        ["Emerald Coast", "/location__emerald-coast.png", "Private Land"],
        ["Layton Lake Outpost", "/location__layton-lake-outpost.png", "Reserve"],
    ];


    let locationId = $state(0);

    let prevDisabled = $derived(locationId <= 0);
    let nextDisabled = $derived(locationId >= locations.length - 1);

    let locationName = $derived(locations[locationId][0]);
    let locationType = $derived(locations[locationId][2]);
</script>

<div class="camping-site-explorer">
    <div class="camping-site-explorer__desc">
        <h3>{locationName}</h3>
        <p>{locationType}</p>
        <div class="buttons">
            <button
                id="prev"
                disabled={prevDisabled}
                onclick={() => locationId--}><ArrowLeft /></button
            >
            <button
                id="next"
                disabled={nextDisabled}
                onclick={() => locationId++}><ArrowRight /></button
            >
        </div>
    </div>
    {#each locations as location, i}
        <img class:hidden={i!==locationId} class="js-camping-site-explorer__img" src={location[1]} alt={location[2]} />
    {/each}
</div>

<style>
    img {
        display: block;
        max-width: 150%;
        max-height: 150%;
        transform: translate(-50%, -50%);
    }

    .camping-site-explorer {
        width: 100%;
        aspect-ratio: 1;
        overflow: hidden;
        color: white;
        position: relative;
    }

    .camping-site-explorer::after {
        content: "";
        inset: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background: radial-gradient(transparent, #0b0e16 70%);
    }

    button {
        background-color: transparent;
        color: white;
        outline: none;
        border: none;
        font-size: 1rem;
        padding: 1rem;
        cursor: pointer;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        width: fit-content;
        gap: 0.25rem;
    }

    .camping-site-explorer__desc {
        width: fit-content;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }

    p {
        font-size: 0.75rem;
    }

    h3 {
        font-weight: 500;
    }

    button:disabled {
        color: #414248;
        cursor: default;
    }

    .hidden {
        width: 0;
        height: 0;
        visibility: hidden;
        opacity: 0;
        display: none;
    }
</style>
