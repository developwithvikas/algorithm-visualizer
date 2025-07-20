// DOM Elements
const arrayContainer = document.getElementById('array-container');
const generateBtn = document.getElementById('generate-btn');
const bubbleSortBtn = document.getElementById('bubble-sort-btn');

// Global Variables
let array = [];

// Initialize array
function generateArray() {
  array = [];
  arrayContainer.innerHTML = '';
  
  for (let i = 0; i < 20; i++) {
    const value = Math.floor(Math.random() * 100) + 5;
    array.push(value);
    
    const bar = document.createElement('div');
    bar.classList.add('array-bar');
    bar.style.height = `${value * 3}px`;
    arrayContainer.appendChild(bar); 
  }
}

// Bubble Sort Algorithm
async function bubbleSort() {
  const bars = document.getElementsByClassName('array-bar');
  
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      // Highlight bars being compared
      bars[j].style.backgroundColor = '#FF7D00';
      bars[j + 1].style.backgroundColor = '#FF7D00';
      
      // Add delay to visualize
      await new Promise(resolve => 
        setTimeout(() => resolve(), 100)
      );
      
      if (array[j] > array[j + 1]) {
        // Swap values
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        
        // Update heights
        bars[j].style.height = `${array[j] * 3}px`;
        bars[j + 1].style.height = `${array[j + 1] * 3}px`;
      }
      
      // Reset color
      bars[j].style.backgroundColor = '#00C2D1';
      bars[j + 1].style.backgroundColor = '#00C2D1';
    }
    
    // Mark sorted element
    bars[array.length - 1 - i].style.backgroundColor = '#34D399';
  }
}

// Event Listeners
generateBtn.addEventListener('click', generateArray);
bubbleSortBtn.addEventListener('click', bubbleSort);

// Initialize
generateArray();