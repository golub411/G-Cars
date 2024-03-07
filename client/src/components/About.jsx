import logo from "../photos/Logo.png"
import "../styles/AboutStyle.css"

const About = () => {
    return(
        <div className="about">
            <h1 style={{textAlign: "center", color: "white", marginTop: '0px'}}>О нас</h1>
            <div className="imageAndText">
                <img src={logo} alt='Загрузка' className="logo"/>
                <h3>Мы являемся одним из ведущих дилеров Mercedes-Benz в России, предлагая широкий ассортимент новых и б/у автомобилей, а также предоставляя полный спектр услуг по обслуживанию и ремонту автомобилей марки Mercedes-Benz.
Наша команда профессионалов обладает глубокими знаниями и опытом в области автомобилей Mercedes-Benz, и мы стремимся обеспечить нашим клиентам высочайшее качество обслуживания и поддержки.
Мы предлагаем широкий выбор новых и б/у автомобилей Mercedes-Benz, включая модели S-класса, E-класса, C-класса, GLE, GLC и многие другие.</h3>
            </div>
        </div>
        
    )
}
export default About