import supabase from 'lib/supabaseClient';

export default function LoginPage() {
  const handleLogin = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'discord',
    });

    // Handle login response
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Discord</button>
    </div>
  );
}