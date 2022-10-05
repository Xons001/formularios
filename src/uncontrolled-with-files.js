function UncontrolledWithFiles() {

  const submit = (e) => {
    e.preventDefault()
    // El new FormData(e.target) solo coge inputs que tengan name
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
      <input type='file' name='archivo' />
      <input type='submit' value='Enviar' />
    </form>
  );
}

export default UncontrolledWithFiles;
