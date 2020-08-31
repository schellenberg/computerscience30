think(0);

function turn_right() {
    turn_left();
    turn_left();
    turn_left();
}

while (!at_goal()) {
    if (front_is_clear()) {
        move();
    }
    else {
        //jump hurdle
        turn_left();
        move();
        turn_right();
        move();
        turn_right();
        move();
        turn_left();
    }
}
