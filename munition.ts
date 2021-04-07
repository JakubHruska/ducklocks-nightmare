//===========střelba a munice
let ammo = 10
//info.setScore(10)
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ammo != 0) {
        let projectile = null
        if (player.image.equals(assets.image`duckLockLeft`)) {
            projectile = sprites.createProjectileFromSprite(assets.image`bullet`, player, -200, 0)
        }
        if (player.image.equals(assets.image`duckLockRight`)) {
            projectile = sprites.createProjectileFromSprite(assets.image`bullet`, player, 200, 0)
        }
        projectile.startEffect(effects.trail, 500)
        ammo -= 1
        //info.changeScoreBy(-1)
        player.say(ammo, 400)
        scene.cameraShake(2, 100)
        music.pewPew.play()
    }
    else {
        player.say("Out Of Ammo", 600)
    }
})

//===========resupply ammo
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function(sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 500)
    addAmmo(5)
    addHP(1)
    player.say("Reloading", 500)
})
