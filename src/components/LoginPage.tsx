import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
interface User {
    isLoggedIn: boolean;
    email: string;
  }

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState<User>({ isLoggedIn: false, email: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
  
    const handleEmailLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await fetch('/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
          if (data.jwt) {
            // записуємо токен
            localStorage.setItem('jwtToken', data.jwt);
  
            // Оновлюємо стан
            setUser({ isLoggedIn: true, email: email });
  
            // повідомлення про успішний логін
            setSuccessMessage('Login successful!');
  
            // редірект на сторінку профілю з затримкою, щоб показати повідомлення
            setTimeout(() => navigate('/userprofile'), 2000); 
          } else {
            console.error('Login successful but no JWT token received');
            setErrorMessage('Login successful but no token received. Please try again.');
          }
        } else {
          console.error('Login failed');
          setErrorMessage('Login failed. Please check your credentials and try again.');
        }
      } catch (error) {
        console.error('Error during login:', error);
        setErrorMessage('An error occurred during login. Please try again later.');
      }
    };
  const handleSocialLogin = (provider: string) => {
       window.location.href = `/oauth2/authorization/${provider}`; // запит до бекенду для авторизації 
  };

  return (
    <div className="login-page">
      <h1>Login to Cookio</h1>
      <form onSubmit={handleEmailLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <div className="social-login">
        <button onClick={() => handleSocialLogin('google')} className="google-btn">
          Login with Google
        </button>
        <button onClick={() => handleSocialLogin('github')} className="github-btn">
          Login with GitHub
        </button>
      </div>
      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default LoginPage;