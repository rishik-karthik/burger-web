export default function FoodCard({ burger }) {
    return (
        <div className="item-card">
            <div className="item">
                <img src={burger.images[0].sm} alt={burger.name} />
                <div className="item-info">
                    <h3>{burger.name}</h3>
                    <p>${burger.price}</p>
                    <details>
                        <summary>Description</summary>
                        <p>{burger.desc}</p>
                    </details>
                </div>
            </div>
        </div>
    )
}