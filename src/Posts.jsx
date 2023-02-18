import { VscBug } from "react-icons/vsc";
export const Posts = () => {
  return (
    <button onClick={()=>
      {
        fetch('https://jsonplaceholder.typicode.com/posts') //PROBABLEMENTE AQUI ESTE LA RUTA DEL EXPRESS
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
      }}>
        <VscBug />
        Traer datos del post
    </button>
  );
};
