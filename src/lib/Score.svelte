<script>
    import { getGame } from "./game.svelte";
    const game = getGame();
</script>

<section>
    <div><span>Current Level : </span> {game.status.level}</div>
    <div>
        <span>Clicks in this level : </span>
        {game.status.clicksAtCurrentLevel}
    </div>
    <div><span>Total Score : </span> {game.status.score}</div>
</section>

<style>
    section {
        padding: 1rem 2rem;
    }
    span {
        color: #555;
    }
    div {
        margin-bottom: 0.5rem;
    }
</style>
