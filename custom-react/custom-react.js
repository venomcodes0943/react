function createElementNow(element, placeToPlce) {
    const elementList = element.multitype
    elementList.forEach(ele => {
        const domElement = document.createElement(ele);
        domElement.innerHTML = element.children;
        for (const key in element.props) {
            const value = element.props[key]
            domElement.setAttribute(key, value);
        }
        placeToPlce.appendChild(domElement);
    });
}

const reactElement = {
    multitype: ["div", "h1"],
    props: {
        class: 'App',
    },
    children: ""
}
reactElement.children = `Hello This is The Elements`


const mainContainer = document.querySelector('#root');


createElementNow(reactElement, mainContainer);
