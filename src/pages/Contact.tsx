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
      icon: Mail,
      title: language === 'ar' ? 'البريد الإلكتروني' : 'Email',
      details: 'info@physiowell.com',
      description: language === 'ar' ? 'أرسل لنا رسالة في أي وقت' : 'Send us a message anytime'
    },
    {
      icon: MapPin,
      title: language === 'ar' ? 'الموقع' : 'Location',
      details: language === 'ar' ? '123 شارع الصحة' : '123 Health Street',
      description: language === 'ar' ? 'مدينة العافية، 12345' : 'Wellness City, WC 12345'
    },
    {
      icon: Clock,
      title: language === 'ar' ? 'ساعات العمل' : 'Hours',
      details: language === 'ar' ? 'الإثنين-الجمعة: 8ص-6م' : 'Mon-Fri: 8AM-6PM',
      description: language === 'ar' ? 'السبت: 9ص-2م، الأحد: مغلق' : 'Sat: 9AM-2PM, Sun: Closed'
    }
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`animate-fadeInLeft ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
              </h2>
              <p className="text-gray-600 mb-8">
                {language === 'ar' 
                  ? 'هل لديك أسئلة حول خدماتنا أو تريد تحديد موعد؟ املأ النموذج أدناه وسنعود إليك في أقرب وقت ممكن.'
                  : 'Have questions about our services or want to schedule an appointment? Fill out the form below and we\'ll get back to you as soon as possible.'
                }
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      {t('fullName')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300 ${language === 'ar' ? 'text-right' : 'text-left'}`}
                      placeholder={language === 'ar' ? 'اسمك الكامل' : 'Your full name'}
                      dir={language === 'ar' ? 'rtl' : 'ltr'}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      {t('email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                      placeholder="your.email@example.com"
                      dir="ltr"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      {t('phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                      placeholder="(555) 123-4567"
                      dir="ltr"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      {language === 'ar' ? 'الموضوع' : 'Subject'}
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300 ${language === 'ar' ? 'text-right' : 'text-left'}`}
                      dir={language === 'ar' ? 'rtl' : 'ltr'}
                    >
                      <option value="">{language === 'ar' ? 'اختر موضوعاً' : 'Select a subject'}</option>
                      <option value="appointment">{language === 'ar' ? 'تحديد موعد' : 'Schedule Appointment'}</option>
                      <option value="services">{language === 'ar' ? 'استفسار عن الخدمات' : 'Services Inquiry'}</option>
                      <option value="insurance">{language === 'ar' ? 'أسئلة التأمين' : 'Insurance Questions'}</option>
                      <option value="other">{language === 'ar' ? 'أخرى' : 'Other'}</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {language === 'ar' ? 'الرسالة' : 'Message'} *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300 resize-none ${language === 'ar' ? 'text-right' : 'text-left'}`}
                    placeholder={language === 'ar' ? 'أخبرنا كيف يمكننا مساعدتك...' : 'Tell us how we can help you...'}
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                  <Send className={`${language === 'ar' ? 'mr-2' : 'ml-2'} h-5 w-5 group-hover:translate-x-1 transition-transform duration-300`} />
                </button>
              </form>
            </div>
            
            {/* Map/Location Info */}
            <div className={`animate-fadeInRight ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === 'ar' ? 'زر عيادتنا' : 'Visit Our Clinic'}
              </h2>
              <p className="text-gray-600 mb-8">
                {language === 'ar' 
                  ? 'منشأتنا الحديثة تقع في قلب مدينة العافية، مع موقف سيارات سهل وميزات إمكانية الوصول.'
                  : 'Our modern facility is conveniently located in the heart of Wellness City, with easy parking and accessibility features.'
                }
              </p>
              
              {/* Map placeholder */}
              <div className="bg-gray-200 rounded-2xl h-64 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">{language === 'ar' ? 'خريطة تفاعلية' : 'Interactive Map'}</p>
                  <p className="text-sm text-gray-400">
                    {language === 'ar' ? '123 شارع الصحة، مدينة العافية' : '123 Health Street, Wellness City'}
                  </p>
                </div>
              </div>
              
              {/* Additional Info */}
              <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === 'ar' ? 'ما تتوقعه' : 'What to Expect'}
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className={`w-2 h-2 bg-green-500 rounded-full mt-2 ${language === 'ar' ? 'ml-3' : 'mr-3'} flex-shrink-0`}></div>
                    {language === 'ar' ? 'موقف سيارات مجاني متاح في الموقع' : 'Free parking available on-site'}
                  </li>
                  <li className="flex items-start">
                    <div className={`w-2 h-2 bg-green-500 rounded-full mt-2 ${language === 'ar' ? 'ml-3' : 'mr-3'} flex-shrink-0`}></div>
                    {language === 'ar' ? 'مدخل ومرافق يمكن الوصول إليها بالكراسي المتحركة' : 'Wheelchair accessible entrance and facilities'}
                  </li>
                  <li className="flex items-start">
                    <div className={`w-2 h-2 bg-green-500 rounded-full mt-2 ${language === 'ar' ? 'ml-3' : 'mr-3'} flex-shrink-0`}></div>
                    {language === 'ar' ? 'منطقة انتظار مريحة مع مشروبات مجانية' : 'Comfortable waiting area with complimentary beverages'}
                  </li>
                  <li className="flex items-start">
                    <div className={`w-2 h-2 bg-green-500 rounded-full mt-2 ${language === 'ar' ? 'ml-3' : 'mr-3'} flex-shrink-0`}></div>
                    {language === 'ar' ? 'غرف علاج ومعدات حديثة' : 'State-of-the-art treatment rooms and equipment'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;