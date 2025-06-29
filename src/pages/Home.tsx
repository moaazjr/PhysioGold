import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Heart, Shield, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function Home() {
  const { t, language } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-green-600 via-green-700 to-emerald-600 flex items-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`text-white animate-fadeInLeft ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                {t('heroTitle')}
                <span className="block text-green-200 animate-slideInRight delay-500">
                  {t('heroSubtitle')}
                </span>
              </h1>
              <p className="text-xl mb-8 text-green-100 leading-relaxed animate-fadeInUp delay-700">
                {t('heroDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-1000">
                <Link 
                  to="/booking"
                  className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  {t('bookYourSession')}
                  <ArrowRight className={`${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'} h-5 w-5 group-hover:translate-x-1 transition-transform duration-300`} />
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 text-center transform hover:scale-105"
                >
                  {t('viewServices')}
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 animate-fadeInUp ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              {language === 'ar' ? 'لماذا تختار فيزيوجولد؟' : 'Why Choose PhysioWell?'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              {language === 'ar' 
                ? 'نجمع بين الخبرة والتكنولوجيا والرعاية الشخصية لتقديم نتائج استثنائية'
                : 'We combine expertise, technology, and personalized care to deliver exceptional results'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp delay-200">
              <Heart className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {language === 'ar' ? 'رعاية شخصية' : 'Personalized Care'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar' 
                  ? 'كل خطة علاج مصممة خصيصاً لاحتياجاتك وأهدافك المحددة للحصول على أفضل تعافي.'
                  : 'Every treatment plan is tailored to your specific needs and goals for optimal recovery.'
                }
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp delay-400">
              <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {language === 'ar' ? 'علاج متخصص' : 'Expert Treatment'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar' 
                  ? 'متخصصون مرخصون مع سنوات من الخبرة في تقنيات العلاج الطبيعي المتقدمة.'
                  : 'Licensed professionals with years of experience in advanced physical therapy techniques.'
                }
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp delay-600">
              <Award className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {language === 'ar' ? 'نتائج مثبتة' : 'Proven Results'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar' 
                  ? 'سجل حافل من العلاجات الناجحة والمرضى الراضين الذين حققوا أهدافهم الصحية.'
                  : 'Track record of successful treatments and satisfied patients achieving their health goals.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {language === 'ar' 
                ? 'مستعد لبدء رحلة التعافي؟'
                : 'Ready to Start Your Recovery Journey?'
              }
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'لا تدع الألم يعيقك. احجز استشارتك اليوم واتخذ الخطوة الأولى نحو حياة أكثر صحة وخالية من الألم.'
                : 'Don\'t let pain hold you back. Book your consultation today and take the first step towards a healthier, pain-free life.'
              }
            </p>
            <Link 
              to="/booking"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              {language === 'ar' ? 'احجز جلستك' : 'Schedule Your Session'}
              <ArrowRight className={`${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'} h-5 w-5 group-hover:translate-x-1 transition-transform duration-300`} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;