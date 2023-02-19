const married = true
    // if (married)
    // {
    //     return (
    //         <h1>Toy casado</h1>
    //     )
    // }
    // else
    // {
    //     return(
    //         <h1>No lo estoy :/</h1>
    //     )
    // }
    // ES LO MISMO QUE UN IF ELSE
  return (
    <div>
        <h1>{married ? 'estoy casado' : 'no lo estoy'}</h1>
    </div>
  );
 ////////////////////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/////////////
 
function Greeting() 
{
  const user = 
  {
    firstName: "Anto",
    lastName: "Rodriguez",
  };

  function add(x , y)
  {
    return x + y
  }
  return (
    // es un contenedor vacío
    <>      
      <h1>{user.firstName}</h1>
      <h2>{user.lastName}</h2>
      <h3>{add(30,40)}</h3>
    </>
  );
}


////////////////////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/////////////

root.render(
  <>
    <Greeting title = "hola Mundo" name="Anthony"/>
    <Greeting title = "hola React" name = "Iré"/>
    <Greeting title = "hola JSX"/>
    <Greeting title = "hola Anto"/>

    {/* <Greeting x = "bue"/>
    <Greeting y = {40}/>
    <Greeting z = {true}/>
    <Greeting a = {[1,2,3]}/> */}
    <UserCard />
    <Product />
    <Navbar />
  </>
);


////////////////////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/////////////

root.render(
  <>
 
    <UserCard
      name="Anthony Wesley"
      amount={3000}
      married={false}
      points={[99, 33.3, 22.2]}
      adress={{ street: "123 Main Streer", city: "New York" }}
      greet ={function (){ alert('Casssssiopia')}}
    />

<UserCard
      name="Iré Regla"
      amount={2000}
      married={true}
      points={[100,200]}
      adress={{ street: "123 Main Street", city: "New York" }}
      greet ={function (){ alert('Casssssiopia')}}
    />


  </>
);

////////////////////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/////////////


root.render(
  <>
    <Button text = 'click me'/>
    <Button text = 'dont click me'/>
    <Button text = 'please mate'/>
    {/* <UserCard
      name="Anthony Wesley"
      amount={3000}
      married={false}
      points={[99, 33.3, 22.2]}
      adress={{ street: "123 Main Streer", city: "New York" }}
      greet ={function (){ alert('Casssssiopia')}}
    />

    <UserCard
      name="Iré Regla"
      amount={2000}
      married={true}
      points={[100,200]}
      adress={{ street: "123 Main Street", city: "New York" }}
      greet ={function (){ alert('Casssssiopia')}}
    /> */}


  </>
);

////////////////////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/////////////


const handleChange = (e) =>
{
    console.log(e.target.value)
}

const handleSubmit = (e) => 
{
    e.preventDefault()
    console.log('enviado')
}
root.render(
  <>
    <TaskCard ready = {false}/>
    <Button text="Hola" name= "Anthony"/>
    <input onChange={handleChange}></input>
    <form onSubmit={handleSubmit}>
        <h1>Registro de usuario</h1>
        <button>Send</button>
    </form>
  </>
);


////////////////////////////////////////////MUY IMPORTANTE, USO DE APIS Y COGER DATOS DESDE EL BACKEND/////////////
export const Posts = () => {
  return (
    <button onClick={()=>
      {
        fetch('https://jsonplaceholder.typicode.com/posts') //PROBABLEMENTE AQUI ESTE LA RUTA DEL EXPRESS
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
      }}>
        Traer datos del post
    </button>
  );
};
////////////////////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/////////////



const root = ReactDOM.createRoot(document.getElementById("root"));

const userarray = [
  {
    name : "joe",
    secondname : "macmillan",
    imagen: 'https://robohash.org/user1'
  },
  
  {
    name : "Anthony",
    secondname : "Rodriguez",
    imagen: 'https://robohash.org/user2'
  },

  {
    name : "Iré",
    secondname : "Regla",
    imagen: 'https://robohash.org/user3'
  }
]

root.render(
  <>
      {userarray.map((user, i)=>{
        return <div  key={i}>
          <h1>{user.name}</h1>
          <img src={user.imagen}/>
        </div>
      })}
  </>
);


////////////////////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/////////////



function Counter()
{
  const [counter, changeCounter] = useState(10)
  return (
    <>
      <h1>Counter: {counter} </h1>
      <button onClick={() => 
      {
        changeCounter(counter + 1)
      }
      }>Sumar</button>

      <button onClick={() => 
      {
        changeCounter(counter - 1)
      }
      }>Restar</button>

      <button onClick={() => 
      {
        changeCounter(0)
      }
      }>Reiniciar</button>
    </>
  )
}

root.render(
  <>
  <Counter />
  </>
);
// otro useState
// const root = ReactDOM.createRoot(document.getElementById("root"));

// function Counter()
// {
//   const [mensaje, setMensaje] = useState()
//   return (
//     <>
//      <div>
//       <input onChange={(e)=>
//         {
//           setMensaje(e.target.value)
//         }}/>
//       <button onClick={()=>
//         {
//           alert('el mensaje es ' + mensaje)
//         }}>Save</button>
//      </div>
//     </>
//   )
// }

// root.render(
//   <>
//   <Counter />
//   </>
// );
