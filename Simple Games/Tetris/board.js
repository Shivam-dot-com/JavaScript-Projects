class Board {
    // Reset the Board, when we start new game
    reset() {
        this.grid = this.getEmptyBoard();
    }

    // Get matrix filled with Zeroes
    getEmptyBoard() {
        return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    }

    valid(p) {}
    draw() {
        this.piece.draw();
        this.drawBoard();
    }
}
