const Dish = (data) => {
    return (
        <section>
            {
                data.sort((a, b) => a.price - a.price).map((dish) => (
                    <section className="dish-card mb-3" role="article">
                        <h3 key={dish.name}>{dish.name}</h3>
                        <img key={dish.img} src={dish.img} className="img-fluid"></img>
                        <p key={dish}>{dish.price}€</p>
                        <h4 key={dish.pieces}>{dish.pieces} Pièces</h4>
                        <div className="p-2 m-auto w-75 bg-color-1 rounded"
                            >Ajouter à la carte
                        </div>
                    </section>
                    )
                )
            }
        </section>)
};

export default Dish;