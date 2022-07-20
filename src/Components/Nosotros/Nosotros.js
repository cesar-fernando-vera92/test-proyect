import { Link } from "react-router-dom";
import { BtnMain } from "../BtnMain/BtnMain";

export const Nosotros = () => {

    return (

        <main className="mainUs">
            <Link to="/productos">
                <BtnMain text="VER PRODUCTOS"/>
            </Link>
        </main>
    )

}