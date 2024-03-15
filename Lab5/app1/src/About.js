import './About.css';
const someData = {
    name: 'Muhammed',
    imgURL: 'https://m.media-amazon.com/images/M/MV5BODA0NDFjMmEtNDZkOS00MTliLTg1OTQtMDdjYmM1MmJmOWZjXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_QL75_UX500_CR0,0,500,281_.jpg',
    imgSize: 90,
}

const products = [
    {title: 'Banana', id: '1', isSpecial: false},
    {title: 'Muffin', id: '2', isSpecial: true},
    {title: 'Dates', id: '3', isSpecial: false},
]

// function ProductList() {
//     const listItems = products.map(element =>
//         <li>{element.title}</li>
//     )
//     return 

function ProductList() {
    const listItems = products.map(element =>
        <li key={element.id}>{element.title}</li>
    );
    return <ul>{listItems}</ul>;
}


function About() {
    return(
        <>
            <h1 className="mystyle">This is {someData.name}</h1>
            <img src={someData.imgURL} alt='This is an image'></img>
            <ProductList />
        </>
    );
}

// export {About};
export default About;