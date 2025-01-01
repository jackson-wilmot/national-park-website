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

<style lang="scss">
    @use "_section__1.scss";
    @use "_section__2.scss";
    @use "_section__3.scss";

    @use "_typewriter-effect.scss";

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

        &:hover {
            cursor: pointer;
        }
    }

    .larger {
        font-size: 1.35rem;
    }

    .bold {
        font-weight: 600;
    }

    @media (max-width: 650px) {
        :root {
            --font-size: calc(4px + 1.5vw);
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

            <div class="section__1__content">
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

<div class="section__3">
    <img alt="A treeline" src="/treeline.svg" class="section__3__divider" />
    <div class="section__3__content">
        <div>
            <div>

            </div>
            <img src="/bear-with-text.svg" alt="A bear"/>
        </div>
        <div>
            <img />
            <p>
                <i class="quote-open">"</i>Join us on a journey that promises not
                just a glimpse of the animal realm, but
                an immersive adventure that leaves you
                with a nev.'found reverence for the
                intricate tapestry of life
            </p>
        </div>
        
    </div>
</div>

