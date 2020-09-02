think(0);

function harvestColumn() {
    turn_left();
    for (let i=0; i<8; i++) {
        move();
        if (object_here()) {
            take();
        }
    }
    turn_left();
    turn_left();
    for (let i=0; i<8; i++) {
        move();
    }
    turn_left();
}

move();
move();
for (let row=0; row<6; row++) {
    harvestColumn();
    move();
}

while (carries_object()) {
    put();
}