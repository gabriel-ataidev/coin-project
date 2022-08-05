function ProjectForm() {
    return (
        <form>
            <input type="text" placeholder="insira o nome do projeto"/>
            <input type="number" placeholder="insira o orçamento total"/>
            <select name="category_id">
                <option disabled selected>selecione a categoria</option>
            </select>
            <input type="submit" value="criar proejeto"/>
        </form>
    )
}

export default ProjectForm