import classes from '../styles/CardItemStyle.module.css'
const { default: MyButton } = require("../UI/MyButton")

const CardItem = (props) => {
    const title = props.card.mark + ' ' + props.card.model + ' ' + props.card.year + ' ' + props.card.color
    return(
        <div className={classes.card}>
            <figure className={classes.image}>
                <img className={classes.photo} src={props.card.photo} alt="Loading..." />
            </figure>
            <div className={classes.titleAndBody}>
                <h1 className={classes.doWhite}>{title}</h1>
                <h1 className={classes.doWhite}>{props.card.price}</h1>
                <div className={classes.doWhite}>{props.card.description}</div>
                <MyButton children="Забронировать"/>
            
            </div>
        </div>
    )
   
}
export default CardItem
