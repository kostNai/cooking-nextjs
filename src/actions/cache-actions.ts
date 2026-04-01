'use server'
import { revalidatePath } from 'next/cache'

export async function revalidateByPath(path: string) {
    return revalidatePath(path)
}
