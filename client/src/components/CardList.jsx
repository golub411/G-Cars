import CardItem from "./CardItem"

const CardList = ({cards, ...props}) => {



    if (!cards.length){
        return (
            <h2 style={{color: 'white', marginBottom: '0px'}}>Нет автомобилей данной категории (выберите категорию)</h2>
        )
    }

    return(
        <div>
            {cards.map((card, index) => 
            <CardItem card={card} number={index + 1} key={card.id}/>)}
        </div>
    )
}
export default CardList