   function unroll(square) {
      const result = [];
    
      while (square.length > 0) {
        // Traverse top row
        result.push(...square.shift());
    
        // Traverse right column
        for (let i = 0; i < square.length; i++) {
          result.push(square[i].pop());
        }
    
        // Traverse bottom row (in reverse)
        if (square.length > 0) {
          result.push(...square.pop().reverse());
        }
    
        // Traverse left column (in reverse)
        for (let i = square.length - 1; i >= 0; i--) {
          if (square[i].length > 0) {
            result.push(square[i].shift());
          }
        }
      }
    
      return result;
    }
    
    const Unroll = () => {
      // Test Cases
      const square = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ];
      const result1 = unroll(square);
    
      const smallerSquare = [
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"]
      ];
      const result2 = unroll(smallerSquare);
    
      // Additional Tests
      const emptySquare = [];
      const result3 = unroll(emptySquare);
    
      const singleElementSquare = [[1]];
      const result4 = unroll(singleElementSquare);
    
      const rectangularSquare = [
        [1, 2, 3],
        [4, 5, 6]
      ];
      const result5 = unroll(rectangularSquare);
    
      return (
        <div>
          <h2>Result 1: {JSON.stringify(result1)}</h2>
          <h2>Result 2: {JSON.stringify(result2)}</h2>
          <h2>Result 3: {JSON.stringify(result3)}</h2>
          <h2>Result 4: {JSON.stringify(result4)}</h2>
          <h2>Result 5: {JSON.stringify(result5)}</h2>
        </div>
      );
    };
    
    export default Unroll;
module.exports = unroll;
