const cy = cytoscape({
   container: document.getElementById('cy'),
   minZoom: 0.75,
   maxZoom: 2,
   zoomingEnabled: true,
   userZoomingEnabled: true,
   panningEnabled: false,
   userPanningEnabled: false,
   boxSelectionEnabled: false,
   autoungrabify: true,


   elements: [
   // States (nodes)
   { data: { id: 'a', label: '-' }, classes: 'initial', position: { x: 100, y: 350 } },

   { data: { id: 'b', label: ' ' }, position: { x: 200, y: 200 }, },
   { data: { id: 'c', label: ' ' }, position: { x: 200, y: 500 }, },

   { data: { id: 'd', label: ' ' }, position: { x: 325, y: 200 }, },
   { data: { id: 'e', label: 'T' }, position: { x: 325, y: 350 }, },
   { data: { id: 'f', label: ' ' }, position: { x: 325, y: 500 }, },

   { data: { id: 'g', label: ' ' }, position: { x: 450, y: 350 }, },

   { data: { id: 'h', label: ' ' }, position: { x: 575, y: 350 }, },

   { data: { id: 'i', label: ' ' }, position: { x: 700, y: 200 }, },
   { data: { id: 'j', label: ' ' }, position: { x: 700, y: 500 }, },

   { data: { id: 'k', label: ' ' }, position: { x: 825, y: 200 }, },
   { data: { id: 'l', label: ' ' }, position: { x: 825, y: 500 }, },

   { data: { id: 'm', label: ' ' }, position: { x: 950, y: 200 }, },
   { data: { id: 'n', label: ' ' }, position: { x: 950, y: 500 }, },

   { data: { id: 'o', label: ' ' }, position: { x: 1075, y: 150 }, },
   { data: { id: 'p', label: ' ' }, position: { x: 1075, y: 250 }, },
   { data: { id: 'q', label: ' ' }, position: { x: 1075, y: 450 }, },
   { data: { id: 'r', label: ' ' }, position: { x: 1075, y: 550 }, },

   { data: { id: 's', label: '+' }, classes: 'final', position: { x: 1200, y: 200 }, },
   { data: { id: 't', label: '+' }, classes: 'final', position: { x: 1200, y: 650 }, },

   { data: { id: 'u', label: '+' }, classes: 'final', position: { x: 1325, y: 150 }, },
   { data: { id: 'v', label: '+' }, classes: 'final', position: { x: 1325, y: 250 }, },
   { data: { id: 'w', label: '+' }, classes: 'final', position: { x: 1325, y: 450 }, },
   { data: { id: 'x', label: '+' }, classes: 'final', position: { x: 1325, y: 550 }, },


   // Transition arrows (Edges)

   // initial
   { data: { source: 'a', target: 'b', label: '1' } },
   { data: { source: 'a', target: 'c', label: '0' } },

   // b
   { data: { source: 'b', target: 'd', label: '1', dist: -20 } },
   { data: { source: 'b', target: 'd', label: '0', dist: 20 } },

   // c
   { data: { source: 'c', target: 'f', label: '1' } },
   { data: { source: 'c', target: 'd', label: '0' } },

   // d
   { data: { source: 'd', target: 'g', label: '1' } },
   { data: { source: 'd', target: 'e', label: '0' } },

   // e
   { data: { source: 'e', target: 'e', label: '1, 0' } },

   // f
   { data: { source: 'f', target: 'e', label: '1' } },
   { data: { source: 'f', target: 'g', label: '0' } },

   // g
   { data: { source: 'g', target: 'h', label: '1', dist: -20 } },
   { data: { source: 'g', target: 'h', label: '0', dist: 20 } },

   // h
   { data: { source: 'h', target: 'i', label: '1' } },
   { data: { source: 'h', target: 'j', label: '0' } },

   // i
   { data: { source: 'i', target: 'k', label: '1' } },
   { data: { source: 'i', target: 'j', label: '0', dist: -20 } },

   // j
   { data: { source: 'j', target: 'i', label: '1', dist: -20 } },
   { data: { source: 'j', target: 'l', label: '0' } },

   // k
   { data: { source: 'k', target: 'm', label: '1' } },
   { data: { source: 'k', target: 'j', label: '0' } },

   // l
   { data: { source: 'l', target: 'i', label: '1' } },
   { data: { source: 'l', target: 'n', label: '0' } },

   // m
   { data: { source: 'm', target: 'o', label: '1' } },
   { data: { source: 'm', target: 'p', label: '0' } },

   // n
   { data: { source: 'n', target: 'q', label: '1' } },
   { data: { source: 'n', target: 'r', label: '0' } },

   // o
   { data: { source: 'o', target: 'o', label: '1' } },
   { data: { source: 'o', target: 'u', label: '0' } },

   // p
   { data: { source: 'p', target: 's', label: '1' } },
   { data: { source: 'p', target: 'v', label: '0' } },

   // q
   { data: { source: 'q', target: 'k', label: '1' } },
   { data: { source: 'q', target: 'w', label: '0' } },

   // r
   { data: { source: 'r', target: 'x', label: '1' } },
   { data: { source: 'r', target: 't', label: '0' } },

   // s
   { data: { source: 's', target: 'k', label: '1', dist: 200 } },
   { data: { source: 's', target: 'j', label: '0', dist: -50 } },

   // t
   { data: { source: 't', target: 'x', label: '1' } },
   { data: { source: 't', target: 't', label: '0' } },

   // u
   { data: { source: 'u', target: 's', label: '1' } },
   { data: { source: 'u', target: 'v', label: '0' } },
   
   // v
   { data: { source: 'v', target: 'i', label: '1', dist: 300 } },
   { data: { source: 'v', target: 'n', label: '0' } },

   // w
   { data: { source: 'w', target: 'i', label: '1', dist: 600 } },
   { data: { source: 'w', target: 'l', label: '0', dist: -275 } },

   // x
   { data: { source: 'x', target: 'k', label: '1' } },
   { data: { source: 'x', target: 'w', label: '0' } },
 ],


   style: [
     {
       selector: 'node',
       style: {
         'label': 'data(label)',
         'text-valign': 'center',
         'text-halign': 'center',
         'background-color': '#ffffff',
         'border-color': '#000000',
         'border-width': 2,
         'shape': 'ellipse',
         'width': 50,
         'height': 50,
         'font-size': 16,
         'transition-property': 'background-color, width, height, border-color, shadow',
         'transition-duration': '0.4s'
       }
     },
     {
       selector: 'node.active',
       style: {
         'background-color': '#00f0ee',
         'border-color': '#000000',
         'border-width': 2,
         'width': 50,
         'height': 50,
         'shadow-blur': 50,
         'shadow-color': '#00f0ee',
         'shadow-opacity': 100,
         'shadow-offset-x': 10,
         'shadow-offset-y': 10
       }
     },
{
  selector: 'edge',
  style: {
    'curve-style': 'unbundled-bezier',
    'control-point-distances': function(ele) {
      return ele.data('dist') || 0;  // Use `data(dist)` if present, else default to 30
    },
    'control-point-weights': 0.5,
    'target-arrow-shape': 'triangle',
    'target-arrow-color': '#000',
    'line-color': '#000',
    'width': 2,
    'label': 'data(label)',
    'font-size': 12,
    'text-background-color': '#fff',
    'text-background-opacity': 1,
    'text-background-padding': '3px',
    'edge-distances': 'node-position'
  }
},
     {
       selector: 'edge.active',
       style: {
         'curve-style': 'unbundled-bezier',
         'control-point-distances': function(ele) {
            return ele.data('dist') || 0;  // Use `data(dist)` if present, else default to 30
         },
         'target-arrow-shape': 'triangle',
         'target-arrow-color': '#00e5e3',
         'line-color': '#00e5e3',
         'width': 5,
         'label': 'data(label)',
         'font-size': 12,
         'color': '#00e5e3',
         'font-weight': 'bold',
         'text-background-color': '#ffffff',
         'text-background-opacity': 1,
         'text-background-padding': '3px',
         'transition-property': 'line-color, width',
         'transition-duration': '0.4s',
         'shadow-color': '#00e5e3',
         'shadow-blur': 30,
         'shadow-offset-x': 0,
         'shadow-offset-y': 0
       }
     }
   ],


   layout: {
     name: 'preset',
   }
 });


 const transitions = {
   'a': { '1': 'b', '0': 'c' },
   'b': { '1': 'd', '0': 'd' },
   'c': { '1': 'f', '0': 'd' },
   'd': { '1': 'g', '0': 'e' },
   'e': { '1': 'e', '0': 'e' },
   'f': { '1': 'e', '0': 'g' },
   'g': { '1': 'h', '0': 'h' },
   'h': { '1': 'i', '0': 'j' },
   'i': { '1': 'k', '0': 'j' },
   'j': { '1': 'i', '0': 'l' },
   'k': { '1': 'm', '0': 'j' },
   'l': { '1': 'i', '0': 'n' },
   'm': { '1': 'o', '0': 'p' },
   'n': { '1': 'q', '0': 'r' },
   'o': { '1': 'o', '0': 'u' },
   'p': { '1': 's', '0': 'v' },
   'q': { '1': 'k', '0': 'w' },
   'r': { '1': 'x', '0': 't' },
   's': { '1': 'k', '0': 'j' },
   't': { '1': 'x', '0': 't' },
   'u': { '1': 's', '0': 'v' },
   'v': { '1': 'i', '0': 'n' },
   'w': { '1': 'i', '0': 'l' },
   'x': { '1': 'k', '0': 'w' },
 };


 async function simulateDFA(inputIndex) {
   const inputElement = document.getElementById(`inputString${inputIndex}`);
   const input = inputElement.value.trim().toLowerCase();
   const resultElement = document.getElementById(`result${inputIndex}`);


   if (!input) {
     resultElement.innerText = "Please enter a string!";
     resultElement.classList.add('invalid');
     resultElement.classList.remove('valid');
     return;
   }


   let currentState = 'a';
   let isValid = true;


   cy.nodes().removeClass('active');
   cy.edges().removeClass('active');


   for (let i = 0; i < input.length; i++) {
     const char = input[i];
     const nextState = transitions[currentState]?.[char];


     if (!nextState) {
       isValid = false;
       break;
     }


     const currentNode = cy.getElementById(currentState);
     currentNode.removeClass('active');
     await new Promise(res => setTimeout(res, 100));
     currentNode.addClass('active');


     const edge = cy.edges().filter(edge =>
       edge.source().id() === currentState &&
       edge.target().id() === nextState &&
       edge.data('label').includes(char)
     );
     edge.removeClass('active');
     await new Promise(res => setTimeout(res, 100));
     edge.addClass('active');
     const nextNode = cy.getElementById(nextState);
     await new Promise(res => setTimeout(res, 100));
     nextNode.addClass('active');


     await new Promise(res => setTimeout(res, 500)); // pause before next transition


     currentState = nextState;
   }


   const finalNode = cy.getElementById(currentState);
   if (finalNode.hasClass('final') && isValid) {
     resultElement.innerText = 'VALID STRING!';
     resultElement.classList.add('valid');
     resultElement.classList.remove('invalid');
   } else {
     resultElement.innerText = 'INVALID STRING!';
     resultElement.classList.add('invalid');
     resultElement.classList.remove('valid');
   }
 }

function clearAll() {
  for (let i = 1; i <= 5; i++) {
    const input = document.getElementById(`inputString${i}`);
    const result = document.getElementById(`result${i}`);
    input.value = '';
    result.innerText = 'Result';
    result.classList.remove('valid', 'invalid');
  }

  // Optionally clear node highlights too
  cy.nodes().removeClass('active');
  cy.edges().removeClass('active');
}