
import { useForm } from '@inertiajs/react'

export default function LoginForm() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/login')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    autoComplete="email"
                    required
                />
                {errors.email && <p>{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    autoComplete="current-password"
                    required
                />
                {errors.password && <p>{errors.password}</p>}
            </div>

            <button type="submit" disabled={processing}>
                {processing ? 'Logging in...' : 'Log In'}
            </button>
        </form>
    )
}
