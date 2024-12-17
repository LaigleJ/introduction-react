import { FirstName } from "../firstName/FirstName";
import { LastName } from "../lastName/LastName";

export function FullName() {
   return (
  <>
    <h2>Full Name</h2>
    <FirstName />
    <LastName />
  </>

   )
}