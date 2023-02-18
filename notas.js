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