
import { useForm } from '@inertiajs/react'

export default function RegisterForm() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/register')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Full Name</label>
                <input
                    id="name"
                    type="text"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    autoComplete="name"
                    required
                />
                {errors.name && <p>{errors.name}</p>}
            </div>

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
                    autoComplete="new-password"
                    required
                />
                {errors.password && <p>{errors.password}</p>}
            </div>

            <div>
                <label htmlFor="password_confirmation">
                    Confirm Password
                </label>
                <input
                    id="password_confirmation"
                    type="password"
                    value={data.password_confirmation}
                    onChange={(e) =>
                        setData('password_confirmation', e.target.value)
                    }
                    autoComplete="new-password"
                    required
                />
                {errors.password_confirmation && (
                    <p>{errors.password_confirmation}</p>
                )}
            </div>

            <button type="submit" disabled={processing}>
                {processing ? 'Registering...' : 'Register'}
            </button>
        </form>
    )
}
