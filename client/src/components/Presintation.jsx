import MyButton from "../UI/MyButton"
import photo from "../photos/mers.png"
import "../styles/presentStyle.css"

const Presentation = () => {
    return(
        <div className="photoDesc">
            <img src={photo} className="presentPhoto" alt="Loading..."/>
            <div className="description">
                <h1 className="white">G CARS</h1>
                <p className="white">Оффициальный диллер mersedes-benz в России</p>
                <MyButton children="Подробнее"/>
            </div>
        </div>
    )
}
export default Presentation