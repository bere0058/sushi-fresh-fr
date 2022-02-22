import axios from 'axios';
const Dish = (data) => {
    const addBtn = () => {
        const btn = document.querySelectorAll('.add-btn');
        btn.forEach(item => {
            item.addEventListener('click', ()=> {
                item.classList.toggle('bg-color-1');
                item.classList.toggle('bg-color-2');
                item.classList.toggle('add-btn');
                item.classList.toggle('added-btn');
            })
        })
    };
    return (
        <section>
            {
                    data.sort((a, b) => a.price - a.price).map((dish) => (
                        <section className="dish-card mb-3" role="article">
                            <h3 key={dish.name}>{dish.name}</h3>
                            <img key={dish.img} src={dish.img} className="img-fluid"></img>
                            <p key={dish}>{dish.price}€</p>
                            <h4 key={dish.pieces}>{dish.pieces} Pièces</h4>
                            <div className="p-2 m-auto w-75 bg-color-1 add-btn"
                                onClick={() => (
                                    axios.post('http://localhost:3004/cart', {
                                        name: dish.name,
                                        price: dish.price
                                    })
                                )}
                            >
                            </div>
                            <div className="p-2 m-auto w-75 bg-color-1 add-btn"
                                onClick={() => (
                                    axios.delete('http://localhost:3004/cart', {
                                        name: dish.name,
                                        price: dish.price
                                    })
                                )}
                            >
                            </div>
                        </section>
                    )
                )
            }
            {setTimeout(addBtn, 900)}
        </section>)
};

export default Dish;