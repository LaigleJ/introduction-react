import { FullName } from "../fullName/FullName";
import { Hobbies } from "../hobbies/Hobbies";
import { Player } from "../player/Player";

export function User() {
    return (
            <>
            <FullName />
            <Hobbies />
            <Player />
            </>
    )
}