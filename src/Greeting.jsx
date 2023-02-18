export function Greeting({title, name = "Noname"}) 
{
return <h1>{title} dice {name}</h1>
}

export function UserCard({name, amount, married, adress, greet})
{
    console.log(name, amount, married, adress, greet)
    return (
        <div>
            <h1>{name}</h1>
            <p>${amount}</p>
            <p>{married ? 'Está casado' : 'No esta casado'}</p>
            <ul>
                <li>Adress: {adress.street}</li>
                <li>City: {adress.city}</li>
            </ul>
        </div>
    )
}