import { create } from 'zustand'
import { UserType } from '../types/user-type'

type AccessTokenStore = {
    token: string
    setToken: (token: string) => void
    removeToken: () => void
}
type UserStore = {
    user: UserType | null
    setUser: (user: UserType) => void
    clearUser: () => void
}
type AuthStore = {
    user: UserType | null
    setUser: (user: UserType) => void
    clearUser: () => void
    initialized: boolean
    setInitialized: (val: boolean) => void
}

export const useAccessToken = create<AccessTokenStore>((set) => ({
    token: '',
    setToken: (token) => set({ token }),
    removeToken: () => set({ token: '' }),
}))
export const useUserStore = create<AuthStore>((set) => ({
    user: null,
    initialized: false,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
    setInitialized: (val) => set({ initialized: val }),
}))
