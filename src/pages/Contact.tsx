import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert(language === 'ar' 
      ? 'شكراً لك على رسالتك! سنعود إليك قريباً.'
      : 'Thank you for your message! We will get back to you soon.'
    );
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: language === 'ar' ? 'الهاتف' : 'Phone',
      details: '(555) 123-4567',
      description: language === 'ar' ? 'اتصل بنا خلال ساعات العمل' : 'Call us during business hours'
    },
    
    {
      icon: MapPin,
      title: language === 'ar' ? 'الموقع' : 'Location',
      details: language === 'ar' ? '123 شارع الصحة' : '123 Health Street',
      description: language === 'ar' ? 'مدينة العافية، 12345' : 'Wellness City, WC 12345'
    },
    
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contactTitle')}</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              {t('contactSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-1 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className={`text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp ${language === 'ar' ? 'text-right' : 'text-left'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <info.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{info.title}</h3>
                <p className="text-lg font-medium text-green-600 mb-2 text-center">{info.details}</p>
                <p className="text-gray-600 text-sm text-center">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      
    </div>
  );
}

export default Contact;