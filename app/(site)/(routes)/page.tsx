
import { UserButton } from "@clerk/nextjs";

const AuthenticatedUsers = () => {
    return ( 
        <UserButton afterSignOutUrl="/" />
    );
}
 
export default AuthenticatedUsers;