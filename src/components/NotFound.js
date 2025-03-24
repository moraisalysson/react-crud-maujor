import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <h1>404</h1>
            <p>Lamento. Essa página não existe ou foi removido <br />
            <Link to="/">Voltar para a Tabela de livros</Link>
            </p>
        </>
    )
}
export default NotFound;