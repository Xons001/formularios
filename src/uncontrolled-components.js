function UncontrolledComoponents() {

  const submit = (e) => {
    e.preventDefault()
    const data = Array.from(new FormData(e.target));
    // Crea y construye un objeto
    console.log(Object.fromEntries(data));
  }

  return (
    <form onSubmit={submit}>
      <div>
        <span>
          lala
        </span>
        <input name='campo' />        
      </div>
      <input name='campo-2' />
      <input type='submit' value='Enviar' />
    </form>
  );
}

export default UncontrolledComoponents;
