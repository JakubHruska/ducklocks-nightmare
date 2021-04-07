//enemy movement
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.vx < 0) {
            value.setImage(assets.image`enemy`)
        }
        else if (value.vx > 0) {
            value.setImage(assets.image`enemy0`)
        }
        if (value.isHittingTile(CollisionDirection.Right)) {
            value.vx = -50
        }
        else if (value.isHittingTile(CollisionDirection.Left)) {
            value.vx = 50
        }
        else if (value.isHittingTile(CollisionDirection.Bottom)) {
            if (value.vx < 0 && (value.tileKindAt(TileDirection.Left, assets.tile`grass`))) {
                value.vy = -160
            } else if (value.vx > 0 && value.tileKindAt(TileDirection.Right, assets.tile`grass`)) {
                value.vy = -160
            }
        }
    }
})

if (currentLevel == 3) {
    game.onUpdate(function () {
        for (let value2 of sprites.allOfKind(SpriteKind.Boss)) {
            if (value2.vx < 0) {
                value2.setImage(assets.image`bossGoose`)
            }
            else if (value2.vx > 0) {
                value2.setImage(assets.image`bossGoose0`)
            }
            
            if (value2.isHittingTile(CollisionDirection.Right)) {
                value2.vx = -50
            }
            else if (value2.isHittingTile(CollisionDirection.Left)) {
                value2.vx = 50
            }
        }
    })
}
