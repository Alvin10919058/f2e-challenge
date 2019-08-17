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

        this.load.image('title', './assets/images/ui/txt-title.png')
        this.load.image('playBtn', './assets/images/ui/btn-press-start.png')
        this.load.image('logo', './assets/images/ui/player-end.png')
    },
    create: function() {
        this.bg4 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg4')
        this.bg3 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg3')
        this.bg2 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg2')
        this.bg1 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg1')
        this.ground = this.add.tileSprite(w / 2, h - 45, w, 90, 'ground')

        let title = this.add.image(w / 2, h / 2 - 115, 'title')
        title.setScale(0.6)

        let playBtn = this.add.image(w / 2, h / 2, 'playBtn')
        playBtn.setScale(0.5)
        // 開啟物件的互動模式（才可以綁定事件）
        playBtn.setInteractive()
        playBtn.on('pointerdown', () => this.scene.start('gamePlay'))

        let logo = this.add.image(w / 2, h / 2 + 95, 'logo')
        logo.setScale(0.4)
    },
    update: function() {
        this.bg3.tilePositionX += 2
        this.bg2.tilePositionX += 3
        this.bg1.tilePositionX += 4
        this.ground.tilePositionX += 4
    }
}
const gamePlay = {
    key: 'gamePlay',
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

        this.timeInt = 30
    },
    create: function() {
        this.bg4 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg4')
        this.bg3 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg3')
        this.bg2 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg2')
        this.bg1 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg1')

        this.ground = this.add.tileSprite(w / 2, h - 45, w, 90, 'ground')
        this.physics.add.existing(this.ground)
        // 設定物件不會動靜止不會掉下去
        this.ground.body.immovable = true
        // 物件的位置和旋轉是否受其速度，加速度，阻力和重力的影響
        this.ground.body.moves = false

        this.player = this.physics.add.sprite(150, 150, 'player')
        this.player.setScale(0.7)
        //邊界設定
        this.player.setCollideWorldBounds()
        //將需要碰撞的物件綁在一起
        this.physics.add.collider(this.player, this.ground)
        //設定角色彈跳值
        this.player.setBounce(1)
        //設定角色碰撞邊界
        this.player.setCircle(40, 30, 4)

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 1 }),
            frameRate: 5,
            repeat: -1
        })

        this.anims.create({
            key: 'speed',
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 5 }),
            frameRate: 5,
            repeat: -1
        })

        this.timeText = this.add.text(w - 180, h - 50, `Time: ${this.timeInt}`, {
            color: '#fff',
            fontSize: '30px'
        })

        let timer = setInterval(() => {
            this.timeInt--
            this.timeText.setText(`Time: ${this.timeInt}`)
            if (this.timeInt <= 0) {
                clearInterval(timer)
            }
        }, 1000)
    },
    update: function() {
        this.bg3.tilePositionX += 2
        this.bg2.tilePositionX += 3
        this.bg1.tilePositionX += 4
        this.ground.tilePositionX += 4

        // 引入鍵盤物件
        const keyboard = this.input.keyboard.createCursorKeys()

        if (keyboard.right.isDown) {
            this.player.flipX = false
            this.player.anims.play('speed', true)
            this.player.setVelocityX(200)
            //this.player.setCircle(40, 55, 16)
        } else if (keyboard.left.isDown) {
            this.player.flipX = true
            this.player.anims.play('speed', true)
            this.player.setVelocityX(-260)
        } else {
            this.player.flipX = false
            this.player.anims.play('run', true)
            this.player.setCircle(40, 30, 4)
            this.player.setVelocityX(0)
        }
    }
}
const config = {
    type: Phaser.AUTO,
    width: w,
    height: h,
    parent: 'game-app',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 700
            },
            debug: true
        }
    },
    scene: [gamePlay, gameStart]
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
