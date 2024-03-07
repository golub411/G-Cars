import MapGis from "./MapGis"
import '../styles/SalonsStyle.css'

const Salons = () => {
    return (
        <div className="salons">
            <div className="salon">
                <h2 style={{color: 'white', display:"inline"}}>МБРУС</h2>
                <h3 style={{color: 'white'}}>Ленинградский просп., 39А, Москва</h3>
            </div>
            
            <MapGis/>
        </div>
    )
}

export default Salons