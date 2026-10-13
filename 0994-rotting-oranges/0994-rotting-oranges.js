function orangesRotting(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const queue = [];
  let freshCount = 0;

  // Find all initially rotten oranges and count fresh ones.
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 2) {
        queue.push([row, col]);
      } else if (grid[row][col] === 1) {
        freshCount++;
      }
    }
  }

  // No fresh oranges means no time is needed.
  if (freshCount === 0) return 0;

  const directions = [
    [1, 0],   // down
    [-1, 0],  // up
    [0, 1],   // right
    [0, -1]   // left
  ];

  let minutes = 0;
  let front = 0;

  // Process rotten oranges level by level.
  while (front < queue.length) {
    const currentLevelSize = queue.length - front;
    let changed = false;

    // All oranges processed in this loop rot neighbors in one minute.
    for (let i = 0; i < currentLevelSize; i++) {
      const [row, col] = queue[front++];

      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;

        const isInsideGrid =
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols;

        // Rot only valid fresh neighboring oranges.
        if (isInsideGrid && grid[newRow][newCol] === 1) {
          grid[newRow][newCol] = 2;
          freshCount--;
          queue.push([newRow, newCol]);
          changed = true;
        }
      }
    }

    // Count a minute only when at least one orange became rotten.
    if (changed) minutes++;
  }

  // If fresh oranges remain, they were unreachable.
  return freshCount === 0 ? minutes : -1;
}