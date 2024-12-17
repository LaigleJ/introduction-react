export function Player() {
    const players = [
        {
            id: 0,
            username: "Marie-Charlotte",
            score: 42
        },
        {
            id: 1,
            username: "Jérémy",
            score: 56
        },
        {
            id: 3,
            username: "Blandine",
            score: 56
        }
    ]
    return (
        <>
        <h2>Player</h2>
        <ul>
            {
                players.map((player) => {
                    return (
                        <li key={player.id}>
                            {player.username} - {player.score >= 50 ? `Tu as gagné avec ${player.score}` : `Tu as perdu avec ${player.score}`}
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
}