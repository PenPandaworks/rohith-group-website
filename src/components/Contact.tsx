import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useParallax } from '../hooks/useParallax';

function Contact() {
  const { offset, elementRef } = useParallax(0.15);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const recipientEmail = 'contact.rohithgroup@gmail.com';
    const subject = encodeURIComponent(`${formData.subject} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open user's default email client
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Show success message
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="text-center mb-16 transition-transform duration-200 ease-out"
          style={{ transform: `translateY(${-offset * 0.2}px)` }}
        >
          <span className="text-brand tracking-[0.3em] text-sm font-light uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-px bg-brand mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Whether you're interested in our products, seeking distribution opportunities, or have questions about our craft, we'd love to hear from you.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 transition-transform duration-200 ease-out"
          style={{ transform: `translateY(${-offset * 0.15}px)` }}
        >
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-light mb-2 tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:border-brand focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-light mb-2 tracking-wide">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:border-brand focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white text-sm font-light mb-2 tracking-wide">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:border-brand focus:outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="product">Product Inquiry</option>
                  <option value="distribution">Distribution Opportunities</option>
                  <option value="partnership">Partnership</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white text-sm font-light mb-2 tracking-wide">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:border-brand focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="btn-shine w-full md:w-auto px-10 py-4 rounded-full border border-white/40 text-white font-semibold tracking-wide bg-transparent hover:border-brand transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                SEND MESSAGE
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle size={18} />
                  <span>Your email client will open. Please send the email from there.</span>
                </div>
              )}

              <p className="text-gray-500 text-xs">
                * Required fields. By submitting this form, you agree to be contacted regarding your inquiry.
              </p>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-brand" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-light text-lg mb-2">Call Us</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    +91 9032908174<br />
                    Mon - Fri: 9AM - 6PM EST
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-brand" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-light text-lg mb-2">Email Us</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    contact.rohithgroup@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
