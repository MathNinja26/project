namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.up.isPressed()) {
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f f 2 f e f . . 
            . . f f f 2 f e e 2 2 f f f . . 
            . . f e 2 f f e e 2 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 2 2 2 2 2 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e f 2 f f f 2 f 2 e f . . 
            . . f f f 2 2 e e f 2 f f f . . 
            . . f e e f 2 e e f f 2 e f . . 
            . f f e e e f e e e f f e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 2 2 2 2 2 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.fire, 1000)
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
})
function level1 () {
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    for (let index = 0; index < 20; index++) {
        coins = sprites.create(img`
            . . . c c . . . 
            . . c 5 5 c . . 
            . c 5 d 1 5 c . 
            . c 5 4 1 5 c . 
            . f 5 4 1 d f . 
            . f 5 1 d d f . 
            . . f d d f . . 
            . . . f f . . . 
            `, SpriteKind.Coin)
        tiles.placeOnRandomTile(coins, sprites.dungeon.darkGroundCenter)
    }
    info.startCountdown(60)
    while (info.score() != 20) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 4 4 4 2 2 2 2 . . . 
            . . . 2 2 1 1 1 1 1 5 4 2 2 . . 
            . . 2 4 5 5 5 5 5 5 5 2 5 5 2 . 
            . . 2 2 4 4 5 5 4 4 4 4 4 4 2 . 
            . . . 2 2 2 4 5 5 2 2 2 2 2 . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(15, 1))
        mySprite2.setVelocity(-150, 0)
        mySprite2.setBounceOnWall(false)
        pause(5000)
    }
    if (info.score() == 20) {
        if (info.countdown() > 0) {
            info.changeLifeBy(1)
        }
        game.splash("NEXT LEVEL!")
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.left.isPressed()) {
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
    }
})
function level2 () {
	
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.right.isPressed()) {
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . f f e e 4 e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . . e 2 2 2 e d d e b f . . 
            . . . . f 4 4 4 f e e f f . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.setGameOverEffect(false, effects.dissolve)
    sprites.destroy(otherSprite)
    while (info.life() == 0) {
        game.gameOver(true)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.down.isPressed()) {
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
        x = mySprite.x
        y = mySprite.y
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        mySprite.x = x
        mySprite.y = y
        pause(100)
    }
})
sprites.onCreated(SpriteKind.Player, function (sprite) {
    controller.moveSprite(sprite)
    scene.cameraFollowSprite(sprite)
})
let mySprite2: Sprite = null
let coins: Sprite = null
let y = 0
let x = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f f . . 
    . . f e e e 4 d d d d f d d f . 
    . . . f f e e 4 e e e f b b f . 
    . . . . f 2 2 2 4 d d e b b f . 
    . . . . e 2 2 2 e d d e b f . . 
    . . . . f 4 4 4 f e e f f . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . f f f . . . . . . . 
    `, SpriteKind.Player)
level1()
level2()
