<script>
    import { onMount } from "svelte";
    import { lazyLoad } from "./actions.svelte";

    import CampingSiteExplorer from "./CampingSiteExplorer.svelte";
    import Navbar from "./Navbar.svelte";
    import ArrowDown from "./ArrowDown.svelte";
    import SectionTitle from "./SectionTitle.svelte";
    import Rating from "./Rating.svelte";
    import Statistics from "./Statistics.svelte";
    import SocialContacts from "./SocialContacts.svelte";

    import { typewriter } from "./transition.js";
    import { fade } from "svelte/transition";

    let ready = $state(false);
    let largerImageVisible = $state(false);
    let largerImageSrc = $state("");
    let largerImageAlt = $state("");
    let largerImageAspect = $state(1)

    setTimeout(() => (ready = true), 1);

    function showLargerImage(event) {
        largerImageVisible = true;
        largerImageSrc = event.target.getAttribute("data-src");
        largerImageAlt = event.target.getAttribute("alt");
        largerImageAspect = event.target.naturalWidth / event.target.naturalHeight;
    }
</script>

<style lang="scss">
    @use "scss/_default-element-styles.scss";
    @use "scss/_typewriter-effect.scss";
    @use "scss/_font-styles.scss";
    @use "scss/_hover-animations.scss";

    @use "scss/_section__1.scss";
    @use "scss/_section__2.scss";
    @use "scss/_section__3.scss";
    @use "scss/_section__4.scss";
    @use "scss/_section__5.scss";
    @use "scss/_footer.scss";

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
        width: 8.23%;
        aspect-ratio: 1;
        border-radius: 50%;
        border: 2px dotted white;
        border-spacing: dotted;
        margin-top: 50px;
    }

    .why-we-are-special {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        position: relative;
        z-index: 2;

        > * {
            margin: 1rem;
        }
    }

    .cross-button {
        position: relative;
        background: none;
    }

    .cross-button::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1.5rem;
        height: 0.2rem;
        background-color: white;
        border-radius: 0.2rem;
        transform: rotate(45deg);
    }

    .cross-button::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1.5rem;
        height: 0.2rem;
        background-color: white;
        border-radius: 0.2rem;
        transform: rotate(-45deg);
    }

    .larger-image-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 6;

        button {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            width: 5rem;
            height: 5rem;
            cursor: pointer;
        }

        img {
            width: 90%;
        }
    }

    .filter {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 5;
    }
</style>

{#if largerImageVisible}
    <div class="filter"></div>
    <div class="larger-image-container">
        <button aria-label="Close" onclick={() => largerImageVisible = false} class="cross-button"></button>
        <img src={largerImageSrc} alt={largerImageAlt} style:aspect-ratio={largerImageAspect} />
    </div>
{/if}

<div class="section__1" style:height="fit-content" style:position="relative" use:lazyLoad data-src="/camping-night.jpg">
    <i class="hidden finished active"></i>
    <Navbar title="ParkScape Adventures" />
    {#if ready}
        <div class="section__1__container">
            <div>
                <h2 style:margin="0" class="typewriter" in:typewriter>
                    {"Your Adventure Begins Here!".split("").reverse().join("")}
                </h2>
                <!--
                 sets the width as the width is fit-content or something im not bothered to check.
                 if this is not here then the parent element will resize as .typewriter is animated.
                 dont remove at all.
                -->
                <h2 class=" s-y_bCXRrkrYfP" style="margin: 0px; visibility: hidden; height: 0;">!ereH snigeB erutnevdA ruoY</h2>
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
                    <img src="/low-quality/preview-image-1.png" data-src="/preview-image-1.webp" alt="View of a swamp" use:lazyLoad onclick={showLargerImage} />
                    <img src="/low-quality/preview-image-2.png" data-src="/preview-image-2.webp" alt="Seaside" use:lazyLoad onclick={showLargerImage} />
                    <img src="/low-quality/preview-image-3.png" data-src="/preview-image-3.webp" alt="A view of a lake" use:lazyLoad onclick={showLargerImage} />
                </div>
            </div>
        </div>

        <SectionTitle title="Explore Special Camping Spots" orientation="right" />
</div>

<div id="#animals" class="section__3">
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
            <div class="section__3__content__2__img" use:lazyLoad data-src="/man-running-in-forest.jpg"></div>
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

<div class="section__4" use:lazyLoad data-src="/man-under-a-ridge-canyon.jpg">
    <div class="section__4__statistics">
        <p>
            With each visit, you contribute to the ongoing story of
            conservation, ensuring that the magic of our national park
            endures for generations to come.
        </p>
        <div class="section__4__statistics__flexbox">
            <div>
                <span>836</span>
                <p>
                Daily
                Guided Guests</p>
            </div>
            <div>
                <span>98<i>%</i></span>
                <p>Vistors
                    Satisfied</p>
            </div>
            <div>
                <span>70<i>+</i></span>
                <p>Biodiversity
                    Species</p>
            </div>
            <div>
                <span>158<i>K</i></span>
                <p>Community
                    Followers</p>
            </div>
        </div>
    </div>
</div>

<div class="section__5">
    <h2>Top Things to do in Park</h2>
    <div class="section__5__flexbox__card-container">
        <div class="section__5__flexbox__card">
            <img src="/low-quality/campervan.png" data-src="/campervan.jpg" alt="Two vans parked side by side on a dirt road in a green forest" use:lazyLoad />
            <div>
                <h3>Special Private Tour</h3>
                <Rating rating=5 />
                <p>Whether you're seeking a romantic getaway, a family adventure, or a
                    solo expedition, our private tours ensure that your journey through our
                    park becomes an unforgettable and truly exceptional escape.
                    Discover the park's secrets at your own pace and immerse yourself in
                    its beauty with the ultimate blend of comfort and exploration.</p>
                <Statistics views=1800 likes=592 />
                <div class="section__5__flexbox__card__details">
                    <button class="fill-hover--black">See Details</button>
                    <p>Starts at $<span class="larger bold">599</span>/day</p>
                </div>
            </div>
        </div>

        <div class="section__5__flexbox__card">
            <img src="/low-quality/a-woman-and-her-child-on-a-hill.png" data-src="/a-woman-and-her-child-on-a-hill.webp" alt="A mother and a child standing on a dirt track on a rocky hill" use:lazyLoad />
            <div>
                <h3>Customised Group Hiking</h3>
                <Rating rating=5 />
                <p>Our expert guides ensure safety and share their local knowledge,
                    enhancing your understanding of the park's ecology and history. Unite
                    with nature, bond with your group, and forge unforgettable memories
                    on a trail designed exclusively for you.</p>
                <Statistics views=1700 likes=478 />
                <div class="section__5__flexbox__card__details">
                    <button class="fill-hover--black">See Details</button>
                    <p>Starts at $<span class="larger bold">399</span>/group</p>
                </div>
            </div>
        </div>

        <div class="section__5__flexbox__card">
            <img src="low-quality/kayak-in-lake.png" data-src="/kayak-in-lake.jpg" alt="A kayak docked near the shore in a lake surrounded with green forest trees" use:lazyLoad />
            <div>
                <h3>Kayak & Drifting Journey</h3>
                <Rating rating=4 />
                <p>Our service offers an unforgettable blend of kayaking and drifting,
                    perfect for both novice and experienced water enthusiasts. Navigate
                    through lush landscapes, witness hidden coves, and soak in
                    breathtaking views that can only be experienced from the water.</p>
                <Statistics views=1660 likes=453 />
                <div class="section__5__flexbox__card__details">
                    <button class="fill-hover--black">See Details</button>
                    <p>Starts at $<span class="larger bold">99</span>/person</p>
                </div>
            </div>
        </div>
    </div>
    <SectionTitle title="Top Things to do in Park" orientation="right" lineColor="black" />
</div>

<div class="footer" data-src="/mountain.jpg" use:lazyLoad>
    <div>
        <h2>Your Exploration Starts Here</h2>
        <p>
            Our mission is to connect you with the wonders of our parks,
            offering tailored experiences for every adventurer.
            Embrace the call of the wild and let the journey unfold.
        </p>
        <hr />
        <div class="footer__contact">
            <a href="tel:+1(514) 1234567">+1(514) - 1234567</a>
            <a href="mailto:info@parkspace-adventures.com">info@parkspace-adventures.com</a>
        </div>
    </div>
</div>
<footer>
    <h2>Parkscape Adventures</h2>
    <div class="footer__links">
        <a href="#about-camp">About Camp</a>
        <a href="#events">Events</a>
        <a  href="#animals">Animals</a>
        <a href="#faq">FAQs</a>
        <a href="#the-team">The Team</a>
    </div>

    <SocialContacts />
</footer>