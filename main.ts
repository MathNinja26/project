namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Ghost = SpriteKind.create()
}
function name (who: string) {
    game.splash("You won " + who + "!")
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.fire, 1000)
    music.play(music.stringPlayable("G - - B - - - - ", 900), music.PlaybackMode.UntilDone)
})
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
function Level1 () {
    tiles.setCurrentTilemap(tilemap`level12`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    list = [14, 4, 8]
    listx = [3, 1, 6]
    coins = sprites.create(img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `, SpriteKind.Coin)
    tiles.placeOnTile(coins, tiles.getTileLocation(list._pickRandom(), listx._pickRandom()))
    for (let index = 0; index < 19; index++) {
        coins = sprites.create(img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
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
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . 2 2 4 4 4 4 4 4 2 2 . . . . 
            . . 2 4 4 5 5 5 5 4 4 2 . . . . 
            . 2 2 4 4 5 6 6 5 4 4 2 2 . . . 
            . . 2 4 4 5 5 5 5 4 4 2 . . . . 
            . . 2 2 4 4 4 4 4 4 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(10, 12))
        mySprite2.setVelocity(0, -150)
        pause(200)
        mySprite2.setBounceOnWall(false)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . 2 2 4 4 4 4 4 4 2 2 . . . . 
            . . 2 4 4 5 5 5 5 4 4 2 . . . . 
            . 2 2 4 4 5 6 6 5 4 4 2 2 . . . 
            . . 2 4 4 5 5 5 5 4 4 2 . . . . 
            . . 2 2 4 4 4 4 4 4 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        tiles.placeOnTile(mySprite3, tiles.getTileLocation(4, 10))
        mySprite3.setVelocity(0, -150)
        pause(100)
        mySprite3.setBounceOnWall(false)
        mysprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . 2 2 4 4 4 4 4 4 2 2 . . . . 
            . . 2 4 4 5 5 5 5 4 4 2 . . . . 
            . 2 2 4 4 5 6 6 5 4 4 2 2 . . . 
            . . 2 4 4 5 5 5 5 4 4 2 . . . . 
            . . 2 2 4 4 4 4 4 4 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        tiles.placeOnTile(mysprite4, tiles.getTileLocation(10, 12))
        mysprite4.setVelocity(0, 150)
        pause(3000)
        mysprite4.setBounceOnWall(false)
        mysprite5 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . 2 2 4 4 4 4 4 4 2 2 . . . . 
            . . 2 4 4 5 5 5 5 4 4 2 . . . . 
            . 2 2 4 4 5 6 6 5 4 4 2 2 . . . 
            . . 2 4 4 5 5 5 5 4 4 2 . . . . 
            . . 2 2 4 4 4 4 4 4 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        tiles.placeOnTile(mysprite5, tiles.getTileLocation(15, 1))
        mysprite5.setVelocity(-150, 0)
        pause(100)
        mysprite5.setBounceOnWall(false)
        mysprite6 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . 2 2 4 4 4 4 4 4 2 2 . . . . 
            . . 2 4 4 5 5 5 5 4 4 2 . . . . 
            . 2 2 4 4 5 6 6 5 4 4 2 2 . . . 
            . . 2 4 4 5 5 5 5 4 4 2 . . . . 
            . . 2 2 4 4 4 4 4 4 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        tiles.placeOnTile(mysprite6, tiles.getTileLocation(9, 8))
        mysprite6.setVelocity(-150, 0)
        pause(100)
        mysprite6.setBounceOnWall(false)
    }
    mySprite.setFlag(SpriteFlag.Invisible, true)
    sprites.destroy(mySprite)
    if (info.score() == 20) {
        if (info.countdown() >= 10) {
            info.changeLifeBy(2)
        } else if (info.countdown() >= 5) {
            info.changeLifeBy(1)
        }
        info.stopCountdown()
        game.splash("NEXT LEVEL!")
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
}
function level2 () {
    tiles.setCurrentTilemap(tilemap`level6`)
    scene.cameraFollowSprite(mySprite)
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
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 3))
    for (let index = 0; index < 20; index++) {
        coins = sprites.create(img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `, SpriteKind.Coin)
        tiles.placeOnRandomTile(coins, sprites.builtin.coral1)
    }
    info.startCountdown(25)
    while (info.score() != 40) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . 2 2 4 4 4 4 4 4 2 2 . . . . 
            . . 2 4 4 5 5 5 5 4 4 2 . . . . 
            . 2 2 4 4 5 6 6 5 4 4 2 2 . . . 
            . . 2 4 4 5 5 5 5 4 4 2 . . . . 
            . . 2 2 4 4 4 4 4 4 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        tiles.placeOnRandomTile(mySprite2, sprites.dungeon.collectibleInsignia)
        mySprite2.setVelocity(-150, 0)
        pause(500)
        mySprite2.setBounceOnWall(false)
    }
    mySprite.setFlag(SpriteFlag.Invisible, true)
    sprites.destroy(mySprite)
    if (info.score() == 40) {
        if (info.countdown() >= 10) {
            info.changeLifeBy(2)
        } else if (info.countdown() >= 5) {
            info.changeLifeBy(1)
        }
        info.stopCountdown()
        game.splash("NEXT LEVEL!")
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
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
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
    while (info.life() == 0) {
        game.gameOver(false)
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
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("RULES")
    game.splash("1. Collect all the coins in the level")
    game.splash("2. Don't get hit by projectiles")
    game.splash("3. Finish the level before the time runs out.")
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprites.destroy(sprite)
})
function Level4 () {
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
    tiles.setCurrentTilemap(tilemap`level8`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 7))
    for (let index = 0; index < 25; index++) {
        coins = sprites.create(img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `, SpriteKind.Coin)
        tiles.placeOnRandomTile(coins, sprites.dungeon.darkGroundCenter)
    }
    info.startCountdown(60)
    while (info.score() != 74) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . 2 2 4 4 4 4 4 4 2 2 . . . . 
            . . 2 4 4 5 5 5 5 4 4 2 . . . . 
            . 2 2 4 4 5 6 6 5 4 4 2 2 . . . 
            . . 2 4 4 5 5 5 5 4 4 2 . . . . 
            . . 2 2 4 4 4 4 4 4 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
        mySprite2.setVelocity(-150, 0)
        pause(200)
        mySprite2.setBounceOnWall(false)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . 2 2 4 4 4 4 4 4 2 2 . . . . 
            . . 2 4 4 5 5 5 5 4 4 2 . . . . 
            . 2 2 4 4 5 8 8 5 4 4 2 2 . . . 
            . . 2 4 4 5 5 5 5 4 4 2 . . . . 
            . . 2 2 4 4 4 4 4 4 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.hazardWater)
        mySprite3.setVelocity(150, 0)
        pause(200)
        mySprite3.setBounceOnWall(false)
    }
    if (info.score() == 74) {
        info.stopCountdown()
        game.splash("GAME!")
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
}
sprites.onCreated(SpriteKind.Player, function (sprite) {
    controller.moveSprite(sprite)
    scene.cameraFollowSprite(sprite)
})
let mysprite6: Sprite = null
let mysprite5: Sprite = null
let mysprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let coins: Sprite = null
let listx: number[] = []
let list: number[] = []
let y = 0
let x = 0
let mySprite: Sprite = null
let person = game.askForString("What is your name?")
game.splash("RULES")
game.splash("1. Collect all the coins in the level")
game.splash("2. Don't get hit by projectiles")
game.splash("3. Finish the level before the time runs out.")
game.splash("Press menu to reveiw rules")
info.setScore(0)
info.setLife(3)
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
Level1()
level2()
Level4()
name(person)
game.setGameOverEffect(true, effects.confetti)
game.gameOver(true)
