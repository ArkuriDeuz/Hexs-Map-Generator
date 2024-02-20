// script.js
const tileSet = [
    { nombre: 'A01', set: [0, 1, 0, 0, 0, 1], clase: 'Cave' },
    { nombre: 'A02', set: [0, 0, 1, 0, 0, 0], clase: 'Cave' },
    { nombre: 'A03', set: [1, 1, 0, 0, 0, 1], clase: 'Cave' },
    { nombre: 'A04', set: [1, 0, 1, 0, 1, 0], clase: 'Cave' },
    { nombre: 'A05', set: [0, 2, 2, 0, 0, 0], clase: 'Cave' },
    { nombre: 'A06', set: [4, 4, 4, 0, 1, 0], clase: 'Cave' },
    { nombre: 'A07', set: [0, 2, 3, 2, 0, 0], clase: 'Cave' },
    { nombre: 'A08', set: [1, 0, 1, 0, 0, 0], clase: 'Cave' },
    { nombre: 'A09', set: [0, 1, 0, 2, 1, 0], clase: 'Cave' },
    { nombre: 'A10', set: [1, 1, 1, 0, 0, 0], clase: 'Cave' },
    { nombre: 'A11', set: [0, 0, 0, 1, 0, 0], clase: 'Cave' },
    { nombre: 'A12', set: [0, 0, 1, 0, 0, 0], clase: 'Cave' },
    { nombre: 'A13', set: [0, 1, 0, 0, 1, 0], clase: 'Cave' },
    { nombre: 'A14', set: [0, 1, 1, 0, 0, 0], clase: 'Cave' },
    { nombre: 'A15', set: [0, 1, 0, 1, 1, 0], clase: 'Cave' },
    { nombre: 'A16', set: [1, 1, 1, 0, 0, 0], clase: 'Cave' },
    { nombre: 'A17', set: [2, 3, 3, 2, 0, 0], clase: 'Cave' },
    { nombre: 'A18', set: [2, 3, 3, 3, 2, 0], clase: 'Cave' },
    { nombre: 'A19', set: [1, 0, 1, 1, 0, 0], clase: 'Cave' },
    { nombre: 'A20', set: [2, 0, 1, 0, 0, 0], clase: 'Cave' },
    { nombre: 'A21', set: [1, 1, 2, 2, 0, 0], clase: 'Cave' },
    { nombre: 'A22', set: [0, 1, 0, 0, 0, 1], clase: 'Cave' },
    { nombre: 'A23', set: [0, 0, 0, 2, 0, 0], clase: 'Cave' },
    { nombre: 'A24', set: [0, 0, 1, 0, 0, 1], clase: 'Cave' },
    { nombre: 'A25', set: [0, 2, 3, 2, 0, 1], clase: 'Cave' },
    { nombre: 'A26', set: [1, 0, 0, 2, 0, 0], clase: 'Cave' },
    { nombre: 'A27', set: [0, 0, 0, 1, 0, 0], clase: 'Cave' },
    { nombre: 'A28', set: [0, 0, 1, 1, 0, 0], clase: 'Fort' },
    { nombre: 'A29', set: [1, 0, 1, 1, 1, 0], clase: 'Fort' },
    { nombre: 'A30', set: [1, 0, 0, 1, 0, 0], clase: 'Fort' },
    { nombre: 'A31', set: [0, 1, 2, 3, 2, 0], clase: 'Fort' },
    { nombre: 'A32', set: [0, 0, 1, 0, 0, 0], clase: 'Fort' },
    { nombre: 'A33', set: [1, 0, 0, 0, 0, 0], clase: 'Fort' },
    { nombre: 'A34', set: [4, 4, 1, 4, 4, 4], clase: 'Fort' },
    { nombre: 'A35', set: [0, 1, 0, 4, 4, 4], clase: 'Fort' },
    { nombre: 'A36', set: [2, 3, 2, 1, 0, 0], clase: 'Fort' },
    { nombre: 'A37', set: [1, 0, 0, 1, 0, 0], clase: 'Fort' },
    { nombre: 'A38', set: [1, 1, 0, 1, 0, 0], clase: 'Fort' },
    { nombre: 'A39', set: [1, 0, 0, 0, 0, 0], clase: 'Fort' },
    { nombre: 'A40', set: [1, 1, 1, 1, 1, 1], clase: 'Fort' },
    { nombre: 'A41', set: [1, 0, 1, 1, 0, 0], clase: 'Fort' },
    { nombre: 'A42', set: [0, 2, 2, 1, 0, 1], clase: 'Fort' },
    { nombre: 'A43', set: [0, 0, 2, 3, 2, 0], clase: 'Fort' },
    { nombre: 'A44', set: [0, 1, 0, 1, 0, 0], clase: 'Fort' },
    { nombre: 'A45', set: [2, 3, 3, 2, 0, 0], clase: 'Fort' },
    { nombre: 'A46', set: [3, 3, 3, 3, 3, 3], clase: 'Cave, Fort' },
    { nombre: 'A47', set: [0, 2, 3, 2, 0, 0], clase: 'Fort' },
    { nombre: 'A48', set: [0, 2, 2, 0, 0, 0], clase: 'Fort' },
    { nombre: 'A49', set: [2, 3, 2, 0, 0, 0], clase: 'Fort' },
    { nombre: 'A50', set: [0, 2, 3, 2, 0, 0], clase: 'Fort' },
    { nombre: 'A51', set: [0, 2, 3, 2, 0, 1], clase: 'Fort' },
    { nombre: 'A52', set: [1, 2, 2, 1, 0, 0], clase: 'Fort' },
    { nombre: 'A53', set: [0, 2, 2, 0, 1, 0], clase: 'Fort' },
    { nombre: 'A54', set: [0, 2, 3, 2, 0, 0], clase: 'Fort' }
];


function checkAndShiftTile(tile, pattern, validTiles) {
    const maxShifts = 5;

    for (let shift = 0; shift <= maxShifts; shift++) {
        const shiftedTile = shiftArray(tile.set, shift);

        if (matchesPattern(shiftedTile, pattern)) {
            // El tile cumple con el patrón, almacenar en el array
            validTiles.push({
                tile: tile.nombre,
                shifts: shift,
                shiftedTile: shiftedTile,  // Cambiado aquí para almacenar el conjunto desplazado correctamente
            });
            return;
        }
    }

    // Si no se encontró ninguna coincidencia
}

function shiftArray(arr, positions) {
    // Función para desplazar un array hacia la derecha en la cantidad de posiciones dadas
    const shiftedArray = arr.slice();
    for (let i = 0; i < positions; i++) {
        const lastElement = shiftedArray.pop();
        shiftedArray.unshift(lastElement);
    }
    return shiftedArray;
}

function matchesPattern(tile, pattern) {
    // Verifica si un tile coincide con el patrón
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] !== 'x' && pattern[i] !== tile[i]) {
            return false;
        }
    }
    return true;
}

const patternToMatch = [0, 'x', 'x', 'x', 0, 0];
const validTiles = [];

function findValidTilesAndUpdatePattern() {
    validTiles.length = 0; // Restablecer validTiles a un array vacío al inicio de la función
    tileSet.forEach(tile => {
        checkAndShiftTile(tile, patternToMatch, validTiles);
    });
}

function getOppositeShift(shiftsArray, index) {
    // Ajustar el índice sumando o restando 3
    index = (index + 3) % 6;
    // Retornar el valor del array en el nuevo índice
    console.log(shiftsArray[index]);
    return shiftsArray[index];
}

function getTileAtPosition(row, col) {
    /*console.log(row);
    console.log(col);*/
    return modifiedTilesArray.find(tile => tile.fila === row && tile.columna === col);
}
// Imprimir el array con los resultados válidos en consola
console.log(validTiles);

const mapContainer = document.getElementById('map-container');
const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', loadAllImages);

const maxWidth = 350; // Ancho máximo para las imágenes
const mapSizeColumns = 6; // Cambia según el número de columnas deseado
const mapSizeRows = mapSizeColumns / 2; // La mitad de filas
const modifiedTilesArray = []; // Array para almacenar los objetos modifiedTile

function loadAllImages() {
    let index;
    let isFirstIteration = true;

    for (let row = 0; row < mapSizeRows; row++) {
        for (let col = 0; col < mapSizeColumns; col++) {
            const hexTile = document.createElement('div');
            hexTile.className = 'hex-tile';

            console.log(patternToMatch);
            if (!isFirstIteration) {
                updatePattern(modifiedTilesArray.length - 1); // Actualizar el patrón antes de la segunda iteración
            }

            findValidTilesAndUpdatePattern();
            console.log(patternToMatch);
            const randomValidTile = validTiles[Math.floor(Math.random() * validTiles.length)];

            const modifiedTile = {
                nombre: `${randomValidTile.tile}.png`,
                shifts: randomValidTile.shifts,
                set: shiftArray(tileSet.find(tile => tile.nombre === randomValidTile.tile).set, randomValidTile.shifts),
                fila: row + 1,
                columna: col + 1,
            };
            modifiedTilesArray.push(modifiedTile); // Agrega el objeto modifiedTile al array

            const img = document.createElement('img');
            img.src = `Hexs/${randomValidTile.tile}.png`; // Cambia aquí al nombre de tu imagen
            img.alt = `Hex Tile ${row}-${col}`;
            img.style.maxWidth = `${maxWidth}px`;// Limita el ancho de la imagen
            img.style.height = 'auto'; // Mantiene la proporción de aspecto
            const rotationAngle = 60 * modifiedTile.shifts; // Cada desplazamiento implica una rotación de 60 grados
            img.style.transform = `rotate(${rotationAngle}deg)`;// Aplicar rotación a la imagen

            hexTile.appendChild(img);

            // Calcula la posición para que los hexágonos encajen
            const hexSize = maxWidth; // Calcula el alto basado en la proporción
            let offsetX = col * (hexSize * 0.99);
            let offsetY = row * (hexSize * 0.85) + (hexSize / 2);

            // Añade desplazamiento a las columnas solo para las filas pares
            if (row % 2 === 0) {
                offsetX += 0.5 * maxWidth;
                offsetY += (hexSize * 0);
            }

            hexTile.style.position = 'absolute';
            hexTile.style.width = `${hexSize}px`;
            hexTile.style.height = `${hexSize}px`;
            hexTile.style.left = `${offsetX}px`;
            hexTile.style.top = `${offsetY}px`;

            mapContainer.appendChild(hexTile);

            console.log(validTiles);
            console.log(patternToMatch);
            console.log(modifiedTilesArray);
            
            if (isFirstIteration) {
                isFirstIteration = false;
            }
            index++;
        }
    }
}

function updatePattern(index) { 
    const modifiedTile = modifiedTilesArray[index]; 
    //console.log(`Fila original: ${modifiedTile.fila}, Columna original: ${modifiedTile.columna}`);


    // Determinar si la fila es par o impar
    const isEvenRow = modifiedTile.fila % 2 === 0;
    // Definir las direcciones según si la fila es par o impar
    const directions = isEvenRow ? [
        { name: 'norEste', row: modifiedTile.fila - 1, col: modifiedTile.columna },
        { name: 'este', row: modifiedTile.fila, col: modifiedTile.columna + 1 },
        { name: 'surEste', row: modifiedTile.fila + 1, col: modifiedTile.columna },
        { name: 'surOeste', row: modifiedTile.fila + 1, col: modifiedTile.columna - 1 },
        { name: 'oeste', row: modifiedTile.fila, col: modifiedTile.columna - 1 },
        { name: 'norOeste', row: modifiedTile.fila - 1, col: modifiedTile.columna - 1 }
    ] : [
        { name: 'norEste', row: modifiedTile.fila - 1, col: modifiedTile.columna + 1 },
        { name: 'este', row: modifiedTile.fila, col: modifiedTile.columna + 1 },
        { name: 'surEste', row: modifiedTile.fila + 1, col: modifiedTile.columna + 1 },
        { name: 'surOeste', row: modifiedTile.fila + 1, col: modifiedTile.columna },
        { name: 'oeste', row: modifiedTile.fila, col: modifiedTile.columna - 1 },
        { name: 'norOeste', row: modifiedTile.fila - 1, col: modifiedTile.columna }
    ];

    let indexPattern = 0; 
    directions.forEach(direction => {
        const { row, col } = direction;
        //console.log(`Fila modificada: ${row}, Columna modificada: ${col}`);
        if (row <= 0 || row >= mapSizeRows || col <= 0 || col >= mapSizeColumns) {
            patternToMatch[indexPattern] = 0; 
        } else {
            const tile = getTileAtPosition(row, col); 
            //console.log(tile);
            if (!tile) {
                patternToMatch[indexPattern] = 'x'; 
            } else {
                const tileValue = tile.set[getOppositeShift(tile.set, indexPattern)];
                patternToMatch[indexPattern] = tileValue !== 'x' ? tileValue : 'x';
            }
        }
        //console.log(indexPattern);
        indexPattern++; 
    });
}
