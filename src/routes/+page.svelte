<script>
    import { onMount } from "svelte";
    import CampingSiteExplorer from "./CampingSiteExplorer.svelte";
import Navbar from "./Navbar.svelte";
    import SectionTitle from "./SectionTitle.svelte";
    import { typewriter } from "./transition.js";
    import { fade } from "svelte/transition";
    let ready = $state(false);
    setTimeout(() => (ready = true), 1);
</script>

<style>
    :global(:root) {
        --font-size:  calc( 4px +  1vw );
        font-size: calc(var(--font-size));
        font-family: "Quicksand", sans-serif;
        color: white;
        background-color: #0b0e16;
    }

    h3 {
        font-weight: 500;
    }

    .typewriter {
        unicode-bidi: bidi-override;
        direction: rtl;
    }

    .typewriter::first-letter {
        text-decoration: underline;
    }

    .finished {
        position: relative;
        overflow: hidden;
    }

    .finished::after {
        content: "";
        position: absolute;
        bottom: calc(1rem / 6.4);
        right: 0;
        width: 100%; 
        height: calc(1rem / 8); 
        background-color: currentColor; 
        transform: translateX(-100%);
        transition: all 1000ms;
    }

    .hidden {
        display: none;
        width: 0;
        height: 0;
        opacity: 0;
        visibility: hidden;
    }

    .finished.active::after {
        animation: 1000ms underline;
    }

    @media (any-hover: hover) {
        .finished.active:hover::after {
            transform: translateX(0);
        }
    }

    @media (any-hover: none) {
        .finished.active:active::after {
            transform: translateX(0);
        }
    }

    .finished.active::first-letter {
        text-decoration: none;
    }

    @keyframes underline {
        0% {
            transform: translateX(100%);
        }
        50% {
            transform: translateX(0);
        }
        75% {
            transform: translateX(0); /* Hold at 0 (center) for a bit */
        }
        100% {
            transform: translateX(-100%);
        }
    }

    .bg-white {
        background-color: white;
        color: black;
    }

    .rounded {
        border-radius: 100px;
    }

    button {
        border: none;
        outline: none;
        padding: 1rem;
        height: auto;
        aspect-ratio: 4.5;
        font-size: 1rem;
    }

    button:hover {
        cursor: pointer;
    }

    .section-1-content {
        width: 35%;
        text-align: center;
        text-wrap: wrap;
        width: 100%;
    }

    .larger {
        font-size: 1.35rem;
    }

    .bold {
        font-weight: 600;
    }

    .section__1__container {
        display: flex;
        height: 75%;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        min-width: 35%;
        margin-inline: auto;
        box-sizing: border-box;
        top: 50%;
        left: 50%;
        padding-top: 15%;
        width: min-content;
        max-width: 75%;
    }
    
    .section__1 {
        min-height: 50%;
        width: 100%;
        height: fit-content;
        background-image: url("/camping-night.jpg");
        background-size: cover;
        aspect-ratio: 1.59;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
    }

    .section__1::after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: "";
        height: 25%;
        width: 100%;
        background: linear-gradient(transparent, #0b0e16);
        pointer-events: none;
    }

    .section__1__container > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .section__1__container h2 {
        text-wrap: nowrap;
        width: fit-content;
    }

    /* section 2*/

    .section__2 {
        background-color: #0b0e16;
        display: flex;
        position: relative;
        width: 100%;
    }

    .section__2__flexbox {
        display: flex;
        min-width: 75%;
        margin: 1rem;
    }

    .section__2__flexbox > * {
        width: fit-content;
        max-width: 50%;
        margin: 3rem;
    }

    .section__2__content__image-container {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .section__2__content__image-container > img {
        width: 30%;
    }

    @media (max-width: 650px) {
        :root {
            --font-size: calc(4px + 1.5vw);
        }

        .section__1 {
            min-height: 75%;
        }

        .section__2__flexbox {
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .section__2__flexbox > * {
            height: auto;
            max-width: 100%;
        }

    }
</style>


<div class="section__1" style:height="fit-content" style:position="relative">
    <i class="hidden finished active"></i>
    <Navbar title="ParkScape Adventures" />
    {#if ready}
        <div class="section__1__container">
            <div>
                <h2 style:margin="0" class="typewriter" in:typewriter>
                    {"Your Adventure Begins Here!".split("").reverse().join("")}
                </h2>
                <h3 in:fade={{delay: 400, duration: 1000}}>Discover The Great Outdoors</h3>      
            </div>

            <div class="section-1-content">
                <p>
                    Discover the magic of untouched landscapes, connect with nature in
                    its purest form, and awaken your sense of wonder as you navigate
                    through rugged trails, lush forests, and tranquil lakes.
                </p>
                <button class="bg-white rounded">Reserve A Spot</button>
                <p>Starts at $<span class="larger bold">229</span>/night</p>
            </div> 
        </div>
    {/if}

    <SectionTitle title="Lescale Camping Point" orientation="left" />  
</div>
<div class="section__2">
        <div class="section__2__flexbox">
            <CampingSiteExplorer />
            <div class="section__2__content__camping-description">
                <h3 style:margin="0">Explore Special Camping Spots</h3>
                <p style:color="rgb(175 179 192)">
                    Embark on an unforgettable journey of exploration as you venture into
                    the heart of the wilderness with our camp experiences.
                    <br />
                    <br />
                    Whether you're a seasoned outdoor enthusiast or new to the world of
                    camping, our expert guides will lead you on a path of discovery, sharing
                    their knowledge of flora, fauna, and survival skills. Get ready to forge
                    new connections, kindle your spirit of adventure, and create lasting
                    memories in the great outdoors.
                </p>

                <div class="section__2__content__image-container">
                    <img src="/preview-image-1.webp" alt="View of a swamp" />
                    <img src="/preview-image-2.webp" alt="Seaside" />
                    <img src="/preview-image-3.webp" alt="A view of a lake"/>
                </div>
            </div>
        </div>

        <SectionTitle title="Explore Special Camping Spots" orientation="right" />
</div>

