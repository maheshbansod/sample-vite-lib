import { add } from './main'
import './style.css'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from './assets/vite.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript demo</h1>
    <p>The lib can be tested here</p>
    <div class="card">
      <input type="number" id="numA" placeholder="a"/> +
      <input type="number" id="numB" placeholder="b"/> =
      <span id="result">?</span>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setup(
  document.querySelector<HTMLInputElement>('#numA')!,
  document.querySelector<HTMLInputElement>('#numB')!,
  document.querySelector<HTMLElement>('#result')!
)

function setup(
  numAInput: HTMLInputElement,
  numBInput: HTMLInputElement,
  resultElem: HTMLElement
) {
  const onInputChange = () => {
    const numA = Number(numAInput.value);
    const numB = Number(numBInput.value);
    const result = add(numA, numB);
    resultElem.innerText = result.toString();
  }
  numAInput.addEventListener('input', onInputChange);
  numBInput.addEventListener('input', onInputChange);
}
