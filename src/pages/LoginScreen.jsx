import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import InputField from '../components/ui/InputField';
import './LoginScreen.css';

export default function LoginScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to sport picker on form submit
    navigate('/onboarding/primary');
  };

  return (
    <div className="login-screen">
      <button className="skip-btn" onClick={() => navigate('/home')}>
        Skip
      </button>

      <div className="login-content">
        <h1 className="login-title display-text">CREATE ACCOUNT</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <InputField
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange('fullName')}
            required
          />
          <InputField
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange('email')}
            required
          />
          <InputField
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange('password')}
            required
          />
          <InputField
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange('confirmPassword')}
            required
          />

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.agreedToTerms}
              onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
              required
              className="checkbox-input"
            />
            <span className="checkbox-text">
              I agree to <span className="text-accent">Terms of Service</span> & <span className="text-accent">Privacy Policy</span>
            </span>
          </label>

          <Button type="submit" disabled={!formData.agreedToTerms}>
            CONTINUE
          </Button>
        </form>
      </div>
    </div>
  );
}
