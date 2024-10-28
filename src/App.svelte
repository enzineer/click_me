<script>
    import { getGame } from "./lib/game.svelte";
    import Game from "./lib/Game.svelte";
    import Result from "./lib/Result.svelte";
    import Rules from "./lib/Rules.svelte";
    const game = getGame();
</script>

<main>
    {#if game.progress.started && game.progress.inProgress}
        <Game />
    {:else if game.progress.started}
        <Result />
    {:else}
        <Rules />
    {/if}
</main>
