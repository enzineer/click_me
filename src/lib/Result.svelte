<script>
    // @ts-nocheck

    import { getGame } from "./game.svelte";
    const game = getGame();
</script>

<section>
    <div class="inner">
        <h1>Game Over</h1>
        <div>
            Final Score : {game.game.score}
        </div>
        <div>
            Level Reached : {game.game.level}
        </div>
        <button onclick={game.restart}>
            <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1rem"
                width="1rem"
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                ><path
                    d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747"
                ></path><path d="M20 4v5h-5"></path></svg
            >
            Restart Game
        </button>
    </div>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
    }

    .inner {
        position: relative;
        margin-top: 7rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        margin-bottom: 0.5rem;
    }

    button {
        margin-top: 2rem;
    }
    .icon {
        margin-right: 0.5rem;
    }
</style>
