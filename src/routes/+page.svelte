<script>
    import { onMount } from "svelte";
    import CampingSiteExplorer from "./CampingSiteExplorer.svelte";
    import Navbar from "./Navbar.svelte";
    import ArrowDown from "./ArrowDown.svelte";
    import SectionTitle from "./SectionTitle.svelte";
    import { typewriter } from "./transition.js";
    import { fade } from "svelte/transition";

    let ready = $state(false);
    setTimeout(() => (ready = true), 1);
</script>

<style lang="scss">
    @use "scss/_default-element-styles.scss";
    @use "scss/_typewriter-effect.scss";
    @use "scss/_font-styles.scss";
    @use "scss/_hover-animations.scss";

    @use "scss/_section__1.scss";
    @use "scss/_section__2.scss";
    @use "scss/_section__3.scss";

    :global(:root) {
        --font-size:  calc( 4px +  1vw );
        font-size: calc(var(--font-size));
        font-family: "Quicksand", sans-serif;
        color: white;
        background-color: #0b0e16;
    }

    @media (max-width: 650px) {
        :root {
            --font-size: calc(4px + 1.5vw);
        }
    } 
    
    .dotted-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px dotted white;
        border-spacing: dotted;
        margin-top: 50px;
    }

    .why-we-are-special {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
        width: 100%;

        > * {
            margin: 1rem;
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
        <div class="section__3__content__1">
            <div class="section__3__content__1__header-1">
                <h3>Discover Captivating Wildlife</h3>
                <p>
                    From graceful deer grazing in meadows to the melodious songs of birds
                    echoing through the trees, our park is a haven for both native and exotic
                    species. Our commitment to conservation ensures that you'll encounter
                    creatures thriving in habitats carefully designed to mirror their natural
                    environments. 
                    <br />
                    <br />
                    Observe the intricate behaviors of playful otters as they frolic in their
                    aquatic playground, or witness the majestic flight of eagles soaring high
                    above.
                </p>
                <button class="fill-hover">Show All Animals</button>
            </div>
            <img src="/bear-with-text.svg" alt="A bear"/>
        </div>  
        <div class="section__3__content__2">
            <div class="section__3__content__2__img"></div>
            <div class="section__3__content__2__quote">
                <blockquote class="blockquote--single-quote">
                    Join us on a journey that promises not
                    just a glimpse of the animal realm, but
                    an immersive adventure that leaves you
                    with a newfound reverence for the
                    intricate tapestry of life
                </blockquote>
                <span>
                    Richard Zong
                    <p>Park Guide</p>
                </span>
            </div>
        </div>                 
    </div>

    <SectionTitle title="Discover Captivating Wildlife" orientation="left" />
</div>
<div class="why-we-are-special">
    <h4>Why We're Special</h4>
    <div class="dotted-circle"><ArrowDown /></div>
</div>
