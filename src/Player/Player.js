export default function Player(gameboard) {
    return {
        gameboard,
        turn: null,
        // sendAttack method that accepts a coordinate and the enemy gameboard
        // Sends an attack to that enemy gameboard, and changes turn property to false
        sendAttack(coordinates, enemy) {
            // Attack enemy coordinates
            const { gameboard } = enemy;
            gameboard.receiveAttack(coordinates);

            // Change turns
            enemy.turn = true;
            return this.turn = false;
        }
    }
}

export function Computer(gameboard) {
    function getAttackCoordinates() {
        return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]; // Get random coordinates from 0 - 9
    }

    return {
        enemyGameboard: gameboard,
        randomAttack() {

            const coordinates = getAttackCoordinates();

            return this.enemyGameboard.receiveAttack(coordinates);
        }
    }
}