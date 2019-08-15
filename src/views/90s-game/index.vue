<template>
    <div id="game-app"></div>
</template>

<script>
const w = 800
const h = 450
const gameStart = {
    key: 'gameStart',
    preload: function() {
        this.load.image('bg4', './assets/images/bg/bg4.png')
        this.load.image('bg3', './assets/images/bg/bg3.png')
        this.load.image('bg2', './assets/images/bg/bg2.png')
        this.load.image('bg1', './assets/images/bg/bg1.png')
        this.load.image('ground', './assets/images/bg/footer.png')
        this.load.spritesheet('player', './assets/images/player.png', {
            frameWidth: 144,
            frameHeight: 120
        })
    },
    create: function() {
        this.bg4 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg4')
        this.bg3 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg3')
        this.bg2 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg2')
        this.bg1 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg1')
        this.ground = this.add.tileSprite(w / 2, h - 45, w, 90, 'ground')

        this.player = this.add.sprite(150, 150, 'player')
        this.player.setScale(0.7)

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 1 }),
            frameRate: 5,
            repeat: -1
        })

        this.player.anims.play('run', true)
    },
    update: function() {
        this.bg3.tilePositionX += 2
        this.bg2.tilePositionX += 3
        this.bg1.tilePositionX += 4
        this.ground.tilePositionX += 4
    }
}
const config = {
    type: Phaser.AUTO,
    width: w,
    height: h,
    parent: 'game-app',
    scene: [gameStart]
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
