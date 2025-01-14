<script>
    const { views = 100000, likes = 1000 } = $props();

    function numberToShorthand(number) {
        if (number >= 1000000) {
            return `${+((number / 1000000).toFixed(2))}m`;
        } else if (number >= 1000) {
            return `${+((number / 1000).toFixed(2))}k`;
        } else {
            return number;
        }
    }
</script>

<style lang="scss">    
    div {
        display: flex;
        gap: .75rem;
        font-weight: 100;
        color: black;
    }

    .small-circle {
        $diameter: .2rem;
        width: $diameter;
        height: $diameter;
        border-radius: 50%;
        background-color: #000;
        margin-block: auto;
    }

    @media (max-width: 650px) {
        div {
            color: white;
        }

        .small-circle {
            background-color: white;
        }
    }
</style>
<div>
    <span>{numberToShorthand(views)} views</span>
    <i class="small-circle"></i>
    <span>{numberToShorthand(likes)} likes</span>
</div>