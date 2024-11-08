"use client";

import { useState } from "react";

export default function Grid() {
  // 9x9 empty sudoku grid
  const createGrid = () => {
    const grid = [];
    for (let i = 0; i < 9; i++) {
      const row = [];
      for (let j = 0; j < 9; j++) {
        row.push("");
      }
      grid.push(row);
    }
    return grid;
  };
  
  const [grid, setGrid] = useState(createGrid);  

  // Handler for cell input change
  const handleChange = (row, col, value) => {
    // check input for numbers 1-9
    if (/^[1-9]?$/.test(value))  {
      
      // Clone the grid to update the specific cell
      const updatedGrid = grid.map((rowArray, rowIndex) =>
        rowArray.map((cell, colIndex) =>
          rowIndex === row && colIndex === col ? value : cell
        )
      );
      setGrid(updatedGrid);
    }
  };

  // Render the grid
  return (
    <div className={gridStyle.sudokuGrid}>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className={gridStyle.row}>
          {row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="text"
              inputMode="numeric"
              maxLength="1" // restricts input to 1 character
              value={cell}
              onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
              className={`w-10 h-10 text-center border text-lg
                ${colIndex % 3 === 0 ? "border-l-2" : ""}
                ${rowIndex % 3 === 0 ? "border-t-2" : ""}
                ${colIndex === 8 ? "border-r-2" : ""}
                ${rowIndex === 8 ? "border-b-2" : ""}
              `}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const gridStyle= { 
  sudokuGrid: 'grid grid-rows-9',
  row: 'grid-cols-9',
}
