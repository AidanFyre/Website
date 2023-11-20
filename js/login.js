import supabase from 'lib/supabaseClient';

export default function LoginPage() {
  const handleLogin = async () => {
    try {
      const { user, session, error } = await supabase.auth.signIn({
        provider: 'discord',
      });

      if (error) throw error;
      console.log('Login successful:', user, session);
      // Redirect or update UI based on successful login
    } catch (error) {
      console.error('Login error:', error.message);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Discord</button>
    </div>
  );
}
