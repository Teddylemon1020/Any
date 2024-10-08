// Create an array with min/max degrees and values.
const characterValues = [
  { minDegree: 349.41, maxDegree: 10.59, value: 0 },
  { minDegree: 10.60, maxDegree: 31.77, value: 1 },
  { minDegree: 31.78, maxDegree: 52.96, value: 2 },
  { minDegree: 52.97, maxDegree: 74.14, value: 3 },
  { minDegree: 74.15, maxDegree: 95.32, value: 4 },
  { minDegree: 95.33, maxDegree: 116.5, value: 5 },
  { minDegree: 116.51, maxDegree: 137.68, value: 6 },
  { minDegree: 137.69, maxDegree: 158.86, value: 7 },
  { minDegree: 158.87, maxDegree: 180.04, value: 8 },
  { minDegree: 180.05, maxDegree: 201.22, value: 9 },
  { minDegree: 201.23, maxDegree: 222.4, value: 10 },
  { minDegree: 222.41, maxDegree: 243.58, value: 11 },
  { minDegree: 243.59, maxDegree: 264.76, value: 12 },
  { minDegree: 264.77, maxDegree: 285.94, value: 13 },
  { minDegree: 285.95, maxDegree: 307.12, value: 14 },
  { minDegree: 307.13, maxDegree: 328.3, value: 15 },
  { minDegree: 328.31, maxDegree: 349.0, value: 16 },
];

// number of rotations
const rangeRotation = [361, 1050];

// Get a random value from range to make it into rotations
const ranran = Math.floor(Math.random() * (rangeRotation[1] - rangeRotation[0] + 1)) + rangeRotation[0];

// modulo to get remainder meaning it has spun morethan 360
const remainder = ranran % 360;

// Map the remainder to the correct character value by checking if it falls within any min/max degree range.
const winningValue = characterValues.find(({ minDegree, maxDegree }) => {
  if (minDegree > maxDegree) {
    // If the range wraps around (like 349.41 to 10.59), check if remainder falls into either side.
    return remainder >= minDegree || remainder <= maxDegree;
  } else {
    // Otherwise, check normally if remainder falls within the range.
    return remainder >= minDegree && remainder <= maxDegree;
  }
});

// Output the results.
console.log(`Random rotation: ${ranran}`);
console.log(`Remainder: ${remainder}`);
console.log(`Winning character value: ${winningValue.value}`);





