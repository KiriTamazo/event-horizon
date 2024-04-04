import { auth } from "@clerk/nextjs";

const useUserId = () => {
    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId || auth()?.userId as string;
    return userId
}
export default useUserId