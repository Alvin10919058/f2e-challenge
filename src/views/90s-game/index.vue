<template>
    <div id="game-app"></div>
</template>

<script>
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 450,
    parent: 'game-app',
    scene: []
}

const game = new Phaser.Game(config)
</script>

<style lang="scss">
#game-app {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    canvas {
        width: 800px;
        height: 450px;
    }
}
</style>
