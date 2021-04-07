//===========nastavení mapy
scene.setBackgroundColor(9)


function setLevel (level: number) {
    clear()
    if (level == 0) {
        tiles.setTilemap(tilemap`level_0`)
        tutorial()
        info.player1.setLife(3)
        info.setScore(0)
    }
    else if (level == 1) {
        tiles.setTilemap(tilemap`level_1`)
    }
    else if (level == 2) {
        tiles.setTilemap(tilemap`level_2`)
    }
    else if (level == 3) {
        tiles.setTilemap(tilemap`level_3`)
    }
    initialize(/*level*/)
}

//===========tutorial
function tutorial() {
    game.showLongText(
        "Seržant DuckLock má noční můru. Pomoz mu se z ní dostat! Zneškodni všechny nepřátele "+
        "a dostaň se na konec!",
        DialogLayout.Center
    )
    game.showLongText(
        "Pohybuješ se doleva, nebo doprava. Skáčeš A, střílíš B.",
        DialogLayout.Bottom
    )
    game.showLongText(
        "Zelené bloky přidávají výšku skoku. Hnědé krabice doplňují munici (5) a životy (1). "+
        "Nepřátele lze také zlikvidovat skokem shora"+
        "\nMax HP = 5\nMax ammo = 30",
        DialogLayout.Full
    )
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`checkpoint`, function (sprite, location) {
    addHP(1)
    currentLevel ++
    //console.log(currentLevel)
    game.splash("Další level!")
    setLevel(currentLevel)
    //tiles.setTilemap(tilemap`level1`)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`finish`, function(sprite, location) {
    game.over(true)
})
