'use client';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', company: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setStatus(null);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: '4e229758-c557-431f-ac22-a64ab0eec251',
        ...formData
      })
    });

    const result = await res.json();
    setLoading(false);
    if (result.success) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '', company: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
        <input type="text" name="company" style={{ display: 'none' }} value={formData.company} onChange={handleChange} />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {status === 'success' && <div className="glass-banner success">Message sent successfully!</div>}
      {status === 'error' && <div className="glass-banner error">Something went wrong. Please try again.</div>}
    </div>
  );
}
