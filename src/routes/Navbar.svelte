<script>
    const { title = "myCapmingSite" } = $props();

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
    
    * {
        font-family: "Quicksand", sans-serif;
    }

    a {
        text-decoration: none;
    }

    .semi-bold {
        font-weight: 600;
    }

    .children-uppercase > * {
        text-transform: uppercase;
    }

    .flex {
        display: flex;
    }

    .space-between {
        justify-content: space-between;
    }

    .padding2rem {
        padding: 2rem;
    }

    .gap1rem {
        gap: 1rem;
    }

    .white {
        color: white;
    }

    .navbar {
        position: absolute;
        inset: 0;
        height: fit-content;
    }

    .lightblue {
        color: #8eb8e7;
    }

    .gradient {
        background: linear-gradient(rgba(0, 0, 0, 0.304) 40%, transparent);
    }
    @media (any-hover: hover) {
        .children-hover-underline a:hover,
        .children-hover-underline a:hover::after {
            color: #8eb8e7;
        }

        .children-hover-underline a.lightblue:hover,
        .children-hover-underline a.lightblue:hover::after {
            color: white;
        }

        .children-hover-underline a:hover::after {
            transform: translateX(0);
        }
    }

    @media (any-hover: none) {
        .children-hover-underline a:active,
        .children-hover-underline a:active::after {
            color: #8eb8e7;
        }

        .children-hover-underline a.lightblue:active,
        .children-hover-underline a.lightblue:active::after {
            color: white;
        }

        .children-hover-underline a:active::after {
            transform: translateX(0);
        }
    }
    .children-hover-underline a {
        overflow: hidden;
        position: relative;
        transition: transform, color 1000ms;
    }

    .children-hover-underline a::after {
        content: "";
        position: absolute;
        bottom: calc(1rem / 9);
        right: 0;
        width: 100%; 
        height: calc(1rem / 8); 
        background-color: currentColor; 
        transform: translateX(-100%);
        transition: transform 1000ms;
    }

    .children-hover-underline a.lightblue::after {
            color: #8eb8e7;
    }

    .children-hover-underline a:hover,
    .children-hover-underline a:hover::after {
        color: #8eb8e7;
    }

    .children-hover-underline a.lightblue::after {
        color: #8eb8e7;
    }

    .children-hover-underline a.lightblue:hover,
    .children-hover-underline a.lightblue:hover::after {
        color: white;
    }

    .children-hover-underline a:hover::after {
        transform: translateX(0);
    }
</style>

<div class="navbar flex space-between padding2rem gradient children-hover-underline">
    <a class="white semi-bold" href="#top">{title}</a>
    <div class="flex gap1rem white children-uppercase">
        <a class = "white" href="#aboutUs">About Camps</a>
        <a class="white" href="#events">Events</a>
        <a class="lightblue" href="/signin">Sign In</a>
    </div>
</div>