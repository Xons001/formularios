import { useRef } from "react";

const UncontrolledReactWay = () => {

  const input = useRef()
  const file = useRef()
  const submit = () => {
    console.log(input.current.value);
    // Sirve para ver todos los datos del archivo
    console.log(file.current.files[0]);
    const form = new FormData()
    form.append('archivo', file.current.files[0])
    form.append('campo', input.current.value)
    fetch('/lala', { method: 'POST', body: form })
  }

  return (
    <div>
      <div>
        <span>Lala</span>
        <input type='text' name='campo' ref={input} />
        <input type='file' ref={file} />
      </div>
      <input type='submit' value='Enviar' onClick={submit} />
    </div>
  )
}

export default UncontrolledReactWay;
