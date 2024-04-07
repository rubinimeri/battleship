import Ship from "../Ship/Ship";

export default function Gameboard() {
    // Create Grid
    function createGrid() {
        let grid = [];
        const gridSize = 10;
    
        for(let i = 0; i < gridSize; i++) {
            grid[i] = [];
            for(let j = 0; j < gridSize; j++) {
                grid[i][j] = {
                    ship: null,
                    missedAttack: null,
                };
            }
        }
        return grid;
    }
    
    // Check if there is already a ship on some coordinates
    function checkShipOnCoordinates(grid, coordinates, shipLength) {
        const myGrid = grid;
        const [row, column] = coordinates;
        const myShipLength = shipLength;
        const length = column + myShipLength;

        // If shipLength is not given, check ship only on the given coordinates
        // if ship exists then return true, else return false
        if(shipLength === undefined && myGrid[row][column].ship) return true;

        else if(shipLength === undefined && !myGrid[row][column].ship) return false;

        for(let i = column; i < length; i++) {
            if(myGrid[row][i].ship) return true;
        }

        return false;
    }

    return {
        grid: createGrid(),
        ships: [],
        missedAttacks: [],
        successfulAttacks: [],
        placeShip(coordinates, shipLength) {
            const maxSize = 9;
            const [row, column] = coordinates;

            // Check if coordinates are valid
            if(column + shipLength - 1 > maxSize || row > maxSize || column > maxSize) return 'Ship is too long';

            // Check if there is already a ship on these coordinates + shipLength
            if(checkShipOnCoordinates(this.grid, coordinates, shipLength)) return 'Ship already exists on those coordinates';

            // Create new Ship object
            const newShip = Ship(shipLength);

            // Push newShip to ships property
            this.ships.push(newShip);

            // Place ship on coordinates
            for(let i = column; i < column + shipLength; i++) {
                this.grid[row][i].ship = newShip;
            }
            return this.grid;
        },
        receiveAttack(coordinates) {

            const myGrid = this.grid;
            const [row, column] = coordinates;

            if(!checkShipOnCoordinates(myGrid, coordinates)) {
                // Add coordinates of the missed attack to missedAttacks property
                this.missedAttacks.push(coordinates);

                // Change missedAttack property to true
                return myGrid[row][column].missedAttack = true;
            } 
            
            // Change missedAttack property to false
            myGrid[row][column].missedAttack = false;

            // Add coordintates of successful attack to successfulAttacks property
            this.successfulAttacks.push(coordinates);

            return myGrid[row][column].ship.hit();
        },
        allShipsSunk() {
            const myShips = this.ships;

            // If a ship isnt sunk then return false
            for (const ship of myShips) {
                if(!ship.isSunk()) return false
            }

            // Otherwise return true
            return true;
        }
    }
}