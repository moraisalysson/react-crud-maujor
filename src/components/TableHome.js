

const TableHome = ({ livros }) => {
    return ( 
        <div className="livros">
            <h1>Tabela de livros</h1>
            {livros.length === 0 && <h2>Nenhum livro encontrado!</h2>}
            {livros.length > 0 && (
                <table className="tabela">
                    <thead>
                        <tr>
                            <th width="27%">ISBN</th>
                            <th>Título</th>
                            <th>Autor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <tr key={livro.isbn}>
                                <td>{livro.isbn}</td>
                                <td>{livro.titulo}</td>
                                <td>{livro.autor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default TableHome;