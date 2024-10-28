let game = $state({
    started: false,
    inProgress: false,
    score: 0,
    level: 1,
    clicksAtCurrentLevel: 0,
    scoreCard: {},
});
function log() {}
export function getGame() {
    function increment() {
        game.score = game.score + game.level;
        game.clicksAtCurrentLevel++;
        if (game.scoreCard[game.level]) game.scoreCard[game.level]++;
        else game.scoreCard[game.level] = 1;
    }
    function incrementLevel() {
        if (game.clicksAtCurrentLevel === 0) {
            game.inProgress = false;
            return;
        }
        game.clicksAtCurrentLevel = 0;
        game.level++;
    }
    function start() {
        game.started = true;
        game.inProgress = true;
    }
    function restart() {
        game.started = true;
        game.inProgress = true;
        game.score = 0;
        game.level = 1;
        game.clicksAtCurrentLevel = 0;
        game.scoreCard = {};
    }
    return {
        get game() {
            return game;
        },
        get status() {
            return {
                score: game.score,
                level: game.level,
                clicksAtCurrentLevel: game.clicksAtCurrentLevel,
            };
        },
        get progress() {
            return { inProgress: game.inProgress, started: game.started };
        },
        increment,
        incrementLevel,
        start,
        restart,
    };
}
