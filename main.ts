 let gravity = 500
namespace SpriteKind {
    export const Boss = SpriteKind.create()
}

//===========hráč
let player = sprites.create(assets.image`duckLockRight`, SpriteKind.Player)
controller.moveSprite(player, 100, 0)
player.z = 1

info.player1.setLife(3)
info.setScore(0)

game.onUpdate(function() {
    if (player.vx < 0) {
        player.setImage(assets.image`duckLockLeft`)
    }
    else if (player.vx > 0) {
        player.setImage(assets.image`duckLockRight`)
    }
})
player.ay = gravity
scene.cameraFollowSprite(player)


function initialize(/*_level : number*/) {
    //===========spawn player
    tiles.placeOnTile(player, tiles.getTilesByType(assets.tile`start`)[0])

    //===========spawn enemy
    if (currentLevel !=3 ) {
        for (let value of tiles.getTilesByType(assets.tile`enemy`)) {
            let enemy = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
            tiles.placeOnTile(enemy, value)
            tiles.setTileAt(value, assets.tile`emptyTile`)
            enemy.ay = gravity
            if (Math.percentChance(50)) {
                enemy.vx = 50
            } else {
                enemy.vx = -50
            }
        }
    }

    //boss
    else if (currentLevel = 3) {
        music.siren.play()
        let boss = sprites.create(assets.image`bossGoose`, SpriteKind.Boss)
        tiles.placeOnTile(boss, tiles.getTilesByType(assets.tile`bossSpawn`)[0])
        tiles.setTileAt(tiles.getTilesByType(assets.tile`bossSpawn`)[0], assets.tile`emptyTile`)
        boss.ay = gravity
        if (Math.percentChance(50)) {
            boss.vx = 50
        } else {
            boss.vx = -50
        }
        game.splash("POZOR NA ZÁKEŘNÉHO BOSSE!")
    }
    
    //===========spawn supplies
    for (let value3 of tiles.getTilesByType(assets.tile`supplyCrate`)) {
        let supply = sprites.create(assets.image`supplies`, SpriteKind.Food)
        tiles.placeOnTile(supply, value3)
        tiles.setTileAt(value3, assets.tile`emptyTile`)
        supply.z = -1
    }
}

function clear() {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
            value.destroy()
    }
}

game.splash("DuckLocks Nightmare", "\nVítej ve hře")
setLevel(currentLevel)
