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
    { data: { id: 'initial', label: '-' }, classes: 'initial', position: { x: 100, y: 200 } },
    { data: { id: 'top1', label: ' ' }, position: { x: 250, y: 100 } },
    { data: { id: 'top2', label: ' ' }, position: { x: 400, y: 100 } },
    { data: { id: 'trap1', label: 'T' }, position: { x: 550, y: 100 } },
    { data: { id: 'bottom1', label: ' ' }, position: { x: 250, y: 300 } },
    { data: { id: 'middle1', label: ' ' }, position: { x: 550, y: 200 } },
    { data: { id: 'top3', label: ' ' }, position: { x: 700, y: 100 } },
    { data: { id: 'top4', label: ' ' }, position: { x: 850, y: 100 } },
    { data: { id: 'bottom2', label: ' ' }, position: { x: 700, y: 300 } },
    { data: { id: 'bottom3', label: ' ' }, position: { x: 850, y: 300 } },
    { data: { id: 'trap2', label: 'T' }, position: { x: 750, y: 200 } },
    { data: { id: 'middle2', label: ' ' }, position: { x: 1000, y: 200 } },
    { data: { id: 'final1', label: '+' }, classes: 'final', position: { x: 1150, y: 200 } },
    { data: { id: 'final2', label: '+' }, classes: 'final', position: { x: 1300, y: 100 } },
    { data: { id: 'final3', label: '+' }, classes: 'final', position: { x: 1300, y: 300 } },

    // Transition arrows (Edges)
    { data: { source: 'initial', target: 'top1', label: 'a' } },
    { data: { source: 'initial', target: 'bottom1', label: 'b' } },
    { data: { source: 'top1', target: 'top2', label: 'b' } },
    { data: { source: 'top1', target: 'middle1', label: 'a' } },
    { data: { source: 'top2', target: 'middle1', label: 'a' } },
    { data: { source: 'top2', target: 'trap1', label: 'b' } },
    { data: { source: 'trap1', target: 'trap1', label: 'a, b' } },
    { data: { source: 'bottom1', target: 'middle1', label: 'a' } },
    { data: { source: 'bottom1', target: 'middle1', label: 'b' } },
    { data: { source: 'middle1', target: 'top3', label: 'a' } },
    { data: { source: 'middle1', target: 'bottom2', label: 'b' } },
    { data: { source: 'top3', target: 'trap2', label: 'a' } },
    { data: { source: 'top3', target: 'top4', label: 'b' } },
    { data: { source: 'top4', target: 'middle2', label: 'a' } },
    { data: { source: 'top4', target: 'trap2', label: 'b' } },
    { data: { source: 'trap2', target: 'trap2', label: 'a, b' } },
    { data: { source: 'bottom2', target: 'bottom3', label: 'a' } },
    { data: { source: 'bottom2', target: 'bottom3', label: 'b' } },
    { data: { source: 'bottom3', target: 'trap2', label: 'a' } },
    { data: { source: 'bottom3', target: 'middle2', label: 'b' } },
    { data: { source: 'middle2', target: 'final1', label: 'a' } },
    { data: { source: 'middle2', target: 'final1', label: 'b' } },
    { data: { source: 'final1', target: 'final2', label: 'a' } },
    { data: { source: 'final1', target: 'final3', label: 'b' } },
    { data: { source: 'final2', target: 'final1', label: 'a' } },
    { data: { source: 'final2', target: 'final3', label: 'b' } },
    { data: { source: 'final3', target: 'final2', label: 'a' } },
    { data: { source: 'final3', target: 'final1', label: 'b' } }
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
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#000',
        'line-color': '#000',
        'width': 2,
        'label': 'data(label)',
        'font-size': 12,
        'text-background-color': '#ffffff',
        'text-background-opacity': 1,
        'text-background-padding': '3px',
        'transition-property': 'line-color, width',
        'transition-duration': '0.4s'
      }
    },
    {
      selector: 'edge.active',
      style: {
        'curve-style': 'bezier',
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
  'initial': { 'a': 'top1', 'b': 'bottom1' },
  'top1': { 'b': 'top2', 'a': 'middle1' },
  'top2': { 'a': 'middle1', 'b': 'trap1' },
  'trap1': { 'a': 'trap1', 'b': 'trap1' },
  'bottom1': { 'a': 'middle1', 'b': 'middle1' },
  'middle1': { 'a': 'top3', 'b': 'bottom2' },
  'top3': { 'a': 'trap2', 'b': 'top4' },
  'top4': { 'a': 'middle2', 'b': 'trap2' },
  'trap2': { 'a': 'trap2', 'b': 'trap2' },
  'bottom2': { 'a': 'bottom3', 'b': 'bottom3' },
  'bottom3': { 'a': 'trap2', 'b': 'middle2' },
  'middle2': { 'a': 'final1', 'b': 'final1' },
  'final1': { 'a': 'final2', 'b': 'final3' },
  'final2': { 'a': 'final1', 'b': 'final3' },
  'final3': { 'a': 'final2', 'b': 'final1' }
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

  let currentState = 'initial';
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

// Update Cytoscape container 
function adjustCytoscapeLayout() {
  const container = document.getElementById('cy');
  const width = container.offsetWidth;
  const height = container.offsetHeight;

  cy.resize();
  cy.fit();
  cy.zoomingEnabled(true);

  cy.layout({
    name: 'preset', 
    fit: true,
    padding: 10,
  }).run();
}

// Call the function on window resize
window.addEventListener('resize', adjustCytoscapeLayout);
