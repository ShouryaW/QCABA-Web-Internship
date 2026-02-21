'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [membershipStatus, setMembershipStatus] = useState('Regular'); // Default value
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, membershipStatus }), // Include membership status
      });

      if (res.ok) {
        router.push('/login'); // Redirect to login
      } else {
        const data = await res.json();
        setError(data.error || 'Signup failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>

      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </div>

      <div>
        <label htmlFor="membership">Membership Status: </label>
        <select
          id="membership"
          value={membershipStatus}
          onChange={(e) => setMembershipStatus(e.target.value)}
        >
          <option value="Regular">Regular</option>
          <option value="Student">Student</option>
          <option value="Affiliate">Affiliate</option>
          <option value="Sustaining">Sustaining</option>
        </select>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Signing up...' : 'Sign Up'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Signup;
