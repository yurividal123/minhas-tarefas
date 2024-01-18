const Formulario = () => (
  <form>
    <input type="text" placeholder="Titulo" />
    <textarea placeholder="Descrição da tarefa" />
    <input name="prioridade" type="radio" id="urgente" />
    <label htmlFor="urgente">Urgente</label>
    <input name="prioridade" type="radio" id="importante" />
    <label htmlFor="importante">Importante</label>
    <input name="prioridade" type="radio" id="normal" />
    <label htmlFor="normal">Normal</label>
    <button type="submit">Cadastrar</button>
  </form>
)

export default Formulario
