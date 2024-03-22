function createElementNow(element, placeToPlce) {
    const domElement = document.createElement(element.type);
    domElement.innerHTML = reactElement.children;
    for (const key in reactElement.props) {
        const value = reactElement.props[key]
        domElement.setAttribute(key, value);
    }
    placeToPlce.appendChild(domElement);
}

const reactElement = {
    type: "div",
    props: {
        class: 'App',
        id: 'NewApp'
    },
    children: ""
}
reactElement.children = `Hello This is ${reactElement.type}`


const mainContainer = document.querySelector('#root');


createElementNow(reactElement, mainContainer);
