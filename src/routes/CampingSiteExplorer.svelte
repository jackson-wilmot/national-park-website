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

    // move the image when mouse is down
    function onmousedown(originEvent) {
        const originX = originEvent.clientX;
        const originY = originEvent.clientY;

        const attributeX = originEvent.target.getAttribute("data-x");
        const attributeY = originEvent.target.getAttribute("data-y");

        function onmousemove(event) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const deltaX = mouseX - originX;
            const deltaY = mouseY - originY;

            originEvent.target.style.top = `${+attributeY + deltaY}px`;
            originEvent.target.style.left = `${+attributeX + deltaX}px`;

            originEvent.target.setAttribute("data-x", +attributeX + deltaX);
            originEvent.target.setAttribute("data-y", +attributeY + deltaY);
        }

        function onmouseup(event) {
            window.removeEventListener("mousemove", onmousemove);
            window.removeEventListener("mouseup", onmouseup);
        }

        window.addEventListener("mousemove", onmousemove);
        window.addEventListener("mouseup", onmouseup);
    }

    function preventDefaultTouch(event) {
        event.preventDefault();
    }

    function enableTouchScroll() {
        document.body.removeEventListener('touchmove', preventDefaultTouch, { passive: false });
    }

    function disableTouchScroll() {
        document.body.addEventListener('touchmove', preventDefaultTouch, { passive: false });
    }

    // move the image when touch is down
    function ontouchstart(originEvent) {
        disableTouchScroll();
        const originX = originEvent.touches[0].clientX;
        const originY = originEvent.touches[0].clientY;

        const attributeX = originEvent.target.getAttribute("data-x");
        const attributeY = originEvent.target.getAttribute("data-y");

        function ontouchmove(event) {
            const touchX = event.touches[0].clientX;
            const touchY = event.touches[0].clientY;

            const deltaX = touchX - originX;
            const deltaY = touchY - originY;

            originEvent.target.style.top = `${+attributeY + deltaY}px`;
            originEvent.target.style.left = `${+attributeX + deltaX}px`;

            originEvent.target.setAttribute("data-x", +attributeX + deltaX);
            originEvent.target.setAttribute("data-y", +attributeY + deltaY);
        }

        function ontouchend(event) {
            window.removeEventListener("touchmove", ontouchmove);
            window.removeEventListener("touchend", ontouchend);
            enableTouchScroll();
        }

        window.addEventListener("touchmove", ontouchmove);
        window.addEventListener("touchend", ontouchend);
    }


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
            <p style:margin="auto" style:font-size="1rem">{locationId + 1}/{locations.length}</p>
            <button
                id="next"
                disabled={nextDisabled}
                onclick={() => locationId++}><ArrowRight /></button
            >
        </div>
    </div>
    {#each locations as location, i}
        <img class:hidden={i!==locationId} class="js-camping-site-explorer__img" src={location[1]} alt={location[2]} aria-roledescription="Move map with mouse" draggable="false" {onmousedown} {ontouchstart} />
    {/each}
</div>

<style>
    img {
        display: block;
        max-width: 150%;
        max-height: 150%;
        transform: translate(-50%, -50%);
        position: absolute;
        cursor: move;
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
        pointer-events: none;
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

    button:active {
        background-color: rgba(128, 128, 128, 0.064);
    }

    .hidden {
        width: 0;
        height: 0;
        visibility: hidden;
        opacity: 0;
        display: none;
    }

    @media (max-width: 650px) {
        .camping-site-explorer__desc {
            background: linear-gradient(#0b0e16 75%, transparent );

            width: 100%;
            text-align: center;

            button {
                width: 50%;
            }

            .buttons {
                width: 100%;
            }
        }
    }
</style>
