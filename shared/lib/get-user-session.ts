import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import { getServerSession } from "next-auth";

export const getUserSession = async () => {
	const session = await getServerSession(authOptions);

	return session?.user ?? null;
};
