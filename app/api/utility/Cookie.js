import { cookies } from "next/headers";

export function deleteCookie(name) {
    cookies().delete(name);
};