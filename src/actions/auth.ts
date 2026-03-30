'use server'

export async function register(
    initialState: { status: boolean; message: string[] | string },
    formData: FormData
) {
    const { name, email, password, confirmPassword } =
        Object.fromEntries(formData)

    if (password !== confirmPassword) {
        return { status: false, message: 'Паролі мають співпадати' }
    }

    const res = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const json = await res.json()

    if (res.status !== 201) {
        return { status: false, message: json.message }
    }
    return { status: true, message: 'Зареєстровано успішно' }
}

// export async function login(
//     initialState: {
//         status: boolean
//         message: string[] | string
//         accessToken: string
//     },
//     formData: FormData
// ) {
//     const { email, password } = Object.fromEntries(formData)

//     const res = await fetch('http://localhost:3001/auth/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     const json = await res.json()

//     if (res.status !== 200) {
//         return { status: false, message: json.message, accessToken: '' }
//     }
//     return {
//         status: true,
//         message: '',
//         accessToken: json.access_token,
//     }
// }

// export async function refreshAccessToken() {
//     console.log('refresh')
//     const res = await fetch('http://localhost:3001/auth/refresh', {
//         method: 'POST',
//         credentials: 'include',
//     })

//     if (!res.ok) {
//         useAccessToken.getState().removeToken()
//         return null
//     }

//     const data = await res.json()

//     useAccessToken.getState().setToken(data.accessToken)

//     return data.accessToken
// }
