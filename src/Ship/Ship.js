export default function Ship(length) {
    return { 
        length,
        hits: 0,
        hit() {
            return this.hits++;
        },
        isSunk() {
            return this.hits === this.length ? true : false;
        }
    }
}