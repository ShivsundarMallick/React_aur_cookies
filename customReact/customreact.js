function customrender(reactElement , container){
    const domelement = document.createElement(reactElement.type)
    domelement.innerHTML = reactElement.children
    //to set attribuite to the element
    // domelement.setAttribute(href ,reactElement.props.href)
    // domelement.setAttribute(target,reactElement.props.target)
    for (const prop in reactElement.props) {
        if(prop === 'children') continue 
        domelement.setAttribute(prop ,reactElement.props[prop])
    }
    container.appendChild(domelement)   
}


const reactElement = {
    type: 'a',
    props: {
        href:'www.goole.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

const root = document.querySelector("#root")

// to add the reactelement to the root ,the meaning of render is to insert element to the main container
customrender(reactElement , root)