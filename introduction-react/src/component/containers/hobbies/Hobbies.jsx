export function Hobbies() {
    const hobbiesDb = [
        {
            id: 0,
            name: 'HTML'
        },
        {
            id: 1,
            name: 'CSS'
        },
        {
            id: 2,
            name: 'React'
        },
        {
            id: 3,
            name: 'Javascript'
        }
    ];
    return (
       <>
        <h2 className="title">Hobbies</h2>
        <ul>
           {hobbiesDb.map((hobby)=> {
            return (
                <li
                    key={hobby.id}
                    style={{
                        padding: "10px",
                        border: "1px solid white",
                        margin: "0.5em"
                }}>
                    {hobby.name}
                </li>
            )
           })}
        </ul>
        </>
    )
      
}