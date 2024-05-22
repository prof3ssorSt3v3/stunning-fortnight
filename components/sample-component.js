const template = document.createElement('template');
//css for the component
template.innerHTML = `
<style>
:host {
  font-size: 20px;
}
:host > div{
  background-color: var(--primary, #222);
  padding-bottom: 1rem;
}
#title::slotted(*) {
  color: var(--onPrimary, #fff);
  font-size: 2rem;
  font-weight: 100;
  padding: 1rem;
  margin: 0;
}
button {
  font-size: 1.5rem;
  padding: 0.25rem 1rem;
  margin: 1rem;
  border:none;
  border-radius: 0.5rem;
  background-color: cornflowerblue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
button > i {
  background-image: url("data:image/svg+xml,%3Csvg%20id%3D%22eml8Kgrd7Bc1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20150%20150%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M148.53438%2C177.20732c-9.34191%2C0-18.22272-1.97419-26.248-5.52812.687664-10.448517-7.501265-26.062374-13.281988-40.084948L84.74803%2C124.28495c-.72288-3.87797-1.10084-7.87726-1.10084-11.96483c0-35.83621%2C29.05098-64.88719%2C64.88719-64.88719s64.88719%2C29.05098%2C64.88719%2C64.88719c0%2C4.08757-.37796%2C8.08686-1.10084%2C11.96483l-23.117021%2C7.309302c-4.558202%2C6.668397-9.795934%2C22.79906-13.289519%2C39.570628-8.31888%2C3.87727-17.5965%2C6.04243-27.37981%2C6.04243v.00001Z%22%20transform%3D%22matrix%281.079663%200%200%201.079663-85.274786-45.668803%29%22%20fill%3D%22%23fff%22%20stroke%3D%22%23000%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%20%20%3Cellipse%20class%3D%22eyes%22%20rx%3D%2215%22%20ry%3D%2215%22%20cx%3D%22100%22%20cy%3D%2260%22%2F%3E%0A%20%20%20%20%3Cellipse%20class%3D%22eyes%22%20rx%3D%2215%22%20ry%3D%2215%22%20cx%3D%2250%22%20cy%3D%2260%22%2F%3E%0A%20%20%20%20%3Crect%20class%3D%22nose%22%20width%3D%225%22%20height%3D%2220%22%20x%3D%2276%22%20y%3D%2274%22%20%20stroke-width%3D%220%22%2F%3E%0A%20%20%20%20%3Crect%20class%3D%22nose%22%20width%3D%225%22%20height%3D%2220%22%20x%3D%2270%22%20y%3D%2274%22%20%20stroke-width%3D%220%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M181.537773%2C150c-20.890965%2C4.507309-44.21305%2C4.96703-64.622002%2C0c15.543043%2C4.349274%2C47.854041%2C3.940847%2C64.621995%2C0h.000007Z%22%20transform%3D%22matrix%281.111375%200%200%201.079663-90.148342-48.851999%29%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-width%3D%222%22%2F%3E%0A%20%20%20%20%3C%2Fsvg%3E");
  display: inline-block;
  width: 2rem;
  height: 2rem;
}
.btnStop > svg{
  display: inline-block;
  width: 2rem;
  height: 2rem;
}
button:hover > svg * {
  fill: var(--secondary);
}
button:hover svg .eyes,
button:hover svg .nose {
  fill: var(--onSecondary);
}
</style>
<div>
  <slot id="title" name="title">Sample Component</slot>
  <p>
    <button class="btnStart"><i></i> Start Something</button> 
    <button class="btnStop"><svg id="eml8Kgrd7Bc1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 150 150">
    <path d="M148.53438,177.20732c-9.34191,0-18.22272-1.97419-26.248-5.52812.687664-10.448517-7.501265-26.062374-13.281988-40.084948L84.74803,124.28495c-.72288-3.87797-1.10084-7.87726-1.10084-11.96483c0-35.83621,29.05098-64.88719,64.88719-64.88719s64.88719,29.05098,64.88719,64.88719c0,4.08757-.37796,8.08686-1.10084,11.96483l-23.117021,7.309302c-4.558202,6.668397-9.795934,22.79906-13.289519,39.570628-8.31888,3.87727-17.5965,6.04243-27.37981,6.04243v.00001Z" transform="matrix(1.079663 0 0 1.079663-85.274786-45.668803)" fill="#fff" stroke="#000" stroke-width="2"/>
    <ellipse class="eyes" rx="15" ry="15" cx="100" cy="60"/>
    <ellipse class="eyes" rx="15" ry="15" cx="50" cy="60"/>
    <rect class="nose" width="5" height="20" x="76" y="74"  stroke-width="0"/>
    <rect class="nose" width="5" height="20" x="70" y="74"  stroke-width="0"/>
    <path d="M181.537773,150c-20.890965,4.507309-44.21305,4.96703-64.622002,0c15.543043,4.349274,47.854041,3.940847,64.621995,0h.000007Z" transform="matrix(1.111375 0 0 1.079663-90.148342-48.851999)" fill="none" stroke="#000" stroke-width="2"/>
    </svg>
    Stop Something</button>
   </p>
</div>
`;

class SampleComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
    this.div = shadowRoot.querySelector('div');
  }
}

window.customElements.define('sample-component', SampleComponent);
