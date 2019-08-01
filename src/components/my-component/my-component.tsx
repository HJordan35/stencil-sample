import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() title: string;

  @State() clickInitiated = false;

  buttonClicked(event) {
    let element = event.srcElement;
    element.classList.add('loading');
    element.children[1].classList.add('loading');
    setTimeout(
      () => {
        element.children[1].classList.remove('loading');
        element.classList.remove('loading');
      },
      4000,
      element
    );
  }

  render() {
    return (
      <button class="btn" onClick={e => this.buttonClicked(e)}>
        <span>{this.title}</span>
        <img id="logo" src="assets/images/credera_logo.png" alt="placeholder" />
      </button>
    );
  }
}
