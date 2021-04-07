// //===========skok
// controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
//     //stojí na trávě
//     if (player.tileKindAt(TileDirection.Bottom,assets.tile`grass`)){
//         player.vy = -200

//     }
//     //stojí na jumppadu
//     else if (player.tileKindAt(TileDirection.Bottom,assets.tile`jumpPad`)) {
//         player.vy = -250
//         music.beamUp.play()
//     }
// })

// //===========zabití skokem na enemy
// sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
//     otherSprite.destroy(effects.fire, 500)
//     if (sprite.bottom < otherSprite.y) {
//         sprite.vy = -100
//         info.changeScoreBy(1)
//         music.baDing.play()
//     }
//     //===========enemy zasáhne hráče
//     else {
//         info.changeLifeBy(-1)
//         music.bigCrash.play()
//     }
// })

// //===========zabití střelbou
// sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
//     sprite.destroy(effects.halo, 500)
//     otherSprite.destroy()
//     info.changeScoreBy(1)
//     music.baDing.play()
// })

// //==========add HP
// function addHP(hp: number) {
//     if (info.life() < 5) {
//         info.changeLifeBy(hp)
//     }
// }

// //==========add ammo
// function addAmmo(add: number) {
//     if (ammo < 30) {
//         ammo += add
//     }
// }
// //==========max ammo, max health
// game.onUpdate(function() {
//     while (ammo > 30) {
//         ammo --
//     }
//     while (info.life() > 5) {
//         info.changeLifeBy(-1)
//     }
// })

// if (currentLevel = 3) {
//     let bossHP = 10
//     game.onUpdateInterval(10000000, function() {
//         //===========poškození skokem
//         sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (player, boss) {
//             if (player.bottom < boss.y) {
//                 player.vy = -150
//                 music.smallCrash.play()
//                 bossHP --
//             }
//             //===========boss zasáhne hráče
//             else {
//                 info.changeLifeBy(-1)
//                 music.bigCrash.play()
//             }
//         })

//         //===========poškození střelbou
//         sprites.onOverlap(SpriteKind.Boss, SpriteKind.Projectile, function (boss, projectile) {
//             projectile.destroy()
//             music.smallCrash.play()
//             bossHP --
//         })
//     })
//     game.onUpdate(function() {
//         //console.log(bossHP)
//         for (let boss of sprites.allOfKind(SpriteKind.Boss)) {
//             if (bossHP <= 0) {
//                 boss.destroy(effects.disintegrate, 2000)
//                 info.changeScoreBy(10)
//                 music.powerUp.play()
//             }
//             boss.say(bossHP)
//         }
//     })
// }
