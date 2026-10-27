
import { Link } from '@inertiajs/react'
import RegisterForm from '../../Components/Auth/RegisterForm.jsx'

export default function Register() {
    return (
        <div>
            <h1>Create a BalikBay Account</h1>
            <p>Register to report lost and found items.</p>

            <RegisterForm />

            <p>
                Already have an account?{' '}
                <Link href="/login">Log in here</Link>
            </p>
        </div>
    )
}
