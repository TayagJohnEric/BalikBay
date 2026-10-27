
import { Link } from '@inertiajs/react'
import LoginForm from '../../Components/Auth/LoginForm.jsx'

export default function Login() {
    return (
        <div>
            <h1>Log In to BalikBay</h1>
            <p>Welcome back!</p>

            <LoginForm />

            <p>
                Don't have an account?{' '}
                <Link href="/register">Register here</Link>
            </p>
        </div>
    )
}
