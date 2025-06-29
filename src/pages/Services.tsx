import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, DollarSign, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function Services() {
  const { t, language } = useLanguage();

  const services = [
    {
      name: t('cupping'),
      nameEn: 'Cupping Therapy',
      duration: '45 min',
      price: '$80',
      description: t('cuppingDesc'),
      features: [
        language === 'ar' ? 'تنشيط الدورة الدموية' : 'Improve blood circulation',
        language === 'ar' ? 'تقوية المناعة' : 'Boost immunity',
        language === 'ar' ? 'تخفيف الصداع وآلام الجسم' : 'Relieve headaches and body pain',
        language === 'ar' ? 'تحسين مستوى السكر والضغط' : 'Improve blood sugar and pressure'
      ],
      image: 'https://images.pexels.com/photos/6111563/pexels-photo-6111563.jpeg?auto=compress&cs=tinysrgb&w=600',
      emoji: '🔥'
    },
    {
      name: t('acupuncture'),
      nameEn: 'Acupuncture',
      duration: '60 min',
      price: '$100',
      description: t('acupunctureDesc'),
      features: [
        language === 'ar' ? 'تخفيف الآلام' : 'Pain relief',
        language === 'ar' ? 'علاج الرقبة والركبة والمفاصل' : 'Neck, knee, and joint treatment',
        language === 'ar' ? 'علاج الصداع والشقيقة' : 'Headache and migraine treatment',
        language === 'ar' ? 'تقليل التوتر والقلق' : 'Reduce stress and anxiety'
      ],
      image: 'https://images.pexels.com/photos/6111564/pexels-photo-6111564.jpeg?auto=compress&cs=tinysrgb&w=600',
      emoji: '🎯'
    },
    {
      name: t('spinalInjury'),
      nameEn: 'Spinal Injury Treatment',
      duration: '75 min',
      price: '$120',
      description: t('spinalInjuryDesc'),
      features: [
        language === 'ar' ? 'إنزلاق غضروفي' : 'Herniated disc treatment',
        language === 'ar' ? 'تمثيل فقرات' : 'Vertebral alignment',
        language === 'ar' ? 'آلام أسفل الظهر' : 'Lower back pain relief',
        language === 'ar' ? 'تقوية عضلات الظهر' : 'Back muscle strengthening'
      ],
      image: 'https://images.pexels.com/photos/6111565/pexels-photo-6111565.jpeg?auto=compress&cs=tinysrgb&w=600',
      emoji: '🦴'
    },
    {
      name: t('sportsInjury'),
      nameEn: 'Sports Injuries',
      duration: '60 min',
      price: '$110',
      description: t('sportsInjuryDesc'),
      features: [
        language === 'ar' ? 'إصابة الرباط الصليبي' : 'ACL injury treatment',
        language === 'ar' ? 'إصابات الكواحل' : 'Ankle injuries',
        language === 'ar' ? 'إصابة مفصل الكتف' : 'Shoulder joint injuries',
        language === 'ar' ? 'تأهيل رياضي' : 'Sports rehabilitation'
      ],
      image: 'https://images.pexels.com/photos/6111566/pexels-photo-6111566.jpeg?auto=compress&cs=tinysrgb&w=600',
      emoji: '⚽'
    },
    {
      name: t('obesityTreatment'),
      nameEn: 'Obesity & Weight Management',
      duration: '90 min',
      price: '$150',
      description: t('obesityTreatmentDesc'),
      features: [
        language === 'ar' ? 'برامج إنقاص الوزن' : 'Weight loss programs',
        language === 'ar' ? 'تحسين اللياقة البدنية' : 'Fitness improvement',
        language === 'ar' ? 'تنظيم التغذية' : 'Nutrition guidance',
        language === 'ar' ? 'متابعة دورية' : 'Regular monitoring'
      ],
      image: 'https://images.pexels.com/photos/6111567/pexels-photo-6111567.jpeg?auto=compress&cs=tinysrgb&w=600',
      emoji: '💪'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center animate-fadeInUp ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{t('servicesTitle')}</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto text-center">
              {t('servicesSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 text-3xl bg-white/90 rounded-full w-12 h-12 flex items-center justify-center">
                    {service.emoji}
                  </div>
                </div>
                
                <div className={`p-6 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 bg-green-500 rounded-full ${language === 'ar' ? 'ml-3' : 'mr-3'}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-green-600 font-bold text-lg">
                      <DollarSign className="h-5 w-5" />
                      <span>{service.price.replace('$', '')}</span>
                    </div>
                    <Link 
                      to="/booking"
                      className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center group"
                    >
                      {language === 'ar' ? 'احجز الآن' : 'Book Now'}
                      <ArrowRight className={`${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'} h-4 w-4 group-hover:translate-x-1 transition-transform duration-300`} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'ar' 
                ? 'غير متأكد من الخدمة المناسبة لك؟'
                : 'Not Sure Which Service Is Right for You?'
              }
            </h2>
            <p className="text-xl text-green-100 mb-8">
              {language === 'ar' 
                ? 'احجز استشارة وسنساعدك في تحديد أفضل نهج علاجي لاحتياجاتك المحددة.'
                : 'Schedule a consultation and we\'ll help determine the best treatment approach for your specific needs.'
              }
            </p>
            <Link 
              to="/booking"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              {language === 'ar' ? 'احجز استشارة' : 'Schedule Consultation'}
              <ArrowRight className={`${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'} h-5 w-5 group-hover:translate-x-1 transition-transform duration-300`} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;