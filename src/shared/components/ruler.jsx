import React from 'react';

const Ruler = ({ rows, cols, cellSize }) => {
  const containerStyle = {
    position: 'fixed', // or 'absolute' depending on your needs
    top: '2cm', // Adjust to account for ruler height
    left: '2cm', // Adjust to account for ruler width
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, ${cellSize})`,
    gridTemplateRows: `repeat(${rows}, ${cellSize})`,
    gap: '1px', // Adjust as needed, this represents the space between cells
    zIndex: 9999, // Adjust to a higher value if necessary
  };

  const rulerStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    display: 'grid',
    gridTemplateColumns: '2cm repeat(auto-fill, 1cm)', // Starting with 2cm for the first ruler column
    gridTemplateRows: '2cm repeat(auto-fill, 1cm)', // Starting with 2cm for the first ruler row
    gap: '1px', // Adjust as needed, this represents the space between ruler cells
    zIndex: 10000, // Ensure the rulers are above the grid
  };

  const cellStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    boxSizing: 'content-box', // Use 'content-box' to avoid border collapse issues
    margin: '-1px', // Compensate for border width
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black', // Border for visualization
  };

  const measurementStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'black',
  };

  const cells = Array.from({ length: rows * cols }).map((_, index) => (
    <div style={cellStyle} key={index}>
      {index + 1} {/* Display the cell index as 1-based numbering */}
      <div style={measurementStyle}>{index + 1}cm</div>
    </div>
  ));

  return (
    <div>
      <div style={rulerStyle}>
        {Array.from({ length: cols + 1 }).map((_, index) => (
          <div style={cellStyle} key={index + 'col'}>
            {index}cm
          </div>
        ))}
      </div>
      <div style={rulerStyle}>
        {Array.from({ length: rows + 1 }).map((_, index) => (
          <div style={cellStyle} key={index + 'row'}>
            {index}cm
          </div>
        ))}
      </div>
      <div style={containerStyle}>{cells}</div>
    </div>
  );
};

export default Ruler;
