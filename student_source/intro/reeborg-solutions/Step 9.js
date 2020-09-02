think(0)
for (let i=0; i<13; i++) {
    move();
    if (object_here()) {
        take();
    }
}

turn_left();
turn_left();

for (let i=0; i<12; i++) {
    move();
}

while (carries_object()) {
    put();
}

move();