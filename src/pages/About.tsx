import React from 'react';
import { Star, Award, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function About() {
  const { language } = useLanguage();

  // Helper function to translate text
  const t = (key) => {
    const translations = {
      'about.title': language === 'ar' ? 'عن الدكتور سهيل محمد' : 'About Dr. Sohel Mohamed',
      'about.subtitle': language === 'ar' 
        ? 'مكرس لمساعدة المرضى على تحقيق أعلى مستوى من الوظائف والعودة إلى الأنشطة التي يحبونها'
        : 'Dedicated to helping patients achieve their highest level of function and return to the activities they love',
      'about.bookAppointment': language === 'ar' ? 'احجز موعد' : 'Book Appointment',
    };
    return translations[key] || key;
  };

  const certifications = [
    'بكالريوس في العلاج الطبيعي - جامعة MTI',
    'شهادة الوخز الجاف',
    'إقامة العلاج الطبيعي الرياضي',
    'شهادة العلاج اليدوي',
    'شهادة فحص الحركة الوظيفية',
    'شهادة حجامة علاجية'
  ];

  // Background component for reuse
  const DarkBackground = ({ children, className = "" }) => (
    <div className={`relative ${className}`}>
      {/* Background with dotted pattern */}
      <div
        className="absolute inset-0"
        style={{
          background: `
          radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.01) 1px, transparent 1px),
          linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)
        `,
          backgroundSize: '50px 50px, 40px 40px, 30px 30px, 100% 100%',
          backgroundPosition: '0 0, 25px 25px, 12px 12px, 0 0'
        }}
      />

      {/* Additional subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
          radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
          backgroundSize: '60px 60px, 45px 45px, 35px 35px'
        }}
      />

      {/* Golden glow effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl" style={{animation: 'pulse 6s ease-in-out infinite'}}></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-300 rounded-full opacity-3 blur-2xl" style={{animation: 'pulse 8s ease-in-out infinite'}}></div>

      {/* Animated floating elements */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-yellow-400 rounded-full opacity-40" style={{animation: 'bounce 4s ease-in-out infinite'}}></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-yellow-300 rounded-full opacity-60" style={{animation: 'ping 5s cubic-bezier(0, 0, 0.2, 1) infinite'}}></div>
      <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-30" style={{animation: 'pulse 7s ease-in-out infinite'}}></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );

  return (
    <DarkBackground className="min-h-screen">
      {/* Language Toggle Button */}
      <button
        onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
        className="fixed top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors z-50"
      >
        {language === 'ar' ? 'English' : 'العربية'}
      </button>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="text-center">
            {/* Decorative top element */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-32"></div>
              <div className="flex items-center justify-center mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-32"></div>
                <div className="mx-6 w-3 h-3 border-2 border-yellow-400 rounded-full bg-black"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-32"></div>
              </div>
              <div className="mx-6 w-3 h-3 border-2 border-yellow-400 rounded-full bg-black"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-32"></div>
            </div>

            {/* Title */}
            <h1 className={`text-5xl md:text-7xl font-bold mb-8 ${language === 'ar' ? 'font-arabic' : ''}`}>
              <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent" style={{animation: 'pulse 5s ease-in-out infinite'}}>
                {t('about.title')}
              </span>
            </h1>

            {/* Subtitle with enhanced styling */}
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-yellow-400/10 to-yellow-400/5 rounded-2xl blur-xl"></div>
              <p className={`relative text-xl md:text-2xl text-slate-200 leading-relaxed p-8 border border-yellow-400/20 rounded-2xl backdrop-blur-sm bg-black/30 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'
                }`}>
                {t('about.subtitle')}
              </p>
            </div>

            {/* Call to action */}
            <div className="mt-12 flex justify-center space-x-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/50">
                <span className="relative z-10">
                  {t('about.bookAppointment')}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

            </div>

            {/* Decorative bottom element */}
            <div className="flex items-center justify-center mt-12">
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent w-24"></div>
              <div className="mx-4 flex space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" style={{animation: 'pulse 4s ease-in-out infinite'}}></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full" style={{animation: 'pulse 5s ease-in-out infinite'}}></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full" style={{animation: 'pulse 6s ease-in-out infinite'}}></div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent w-24"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-24"></div>
              <div className="mx-4 w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-24"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'ar' ? 'شريكك في التعافي' : 'Your Partner in Recovery'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 transform transition-transform duration-500 hover:scale-105">
                <div className="w-full h-96 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center text-yellow-400">
                    <img src="/images/sohel.jpg" alt="Doctor" className='w-60 h-60 mx-auto mb-4 rounded-xl'/>
                    <p className="text-lg font-semibold">Dr. Sohel Mohamed</p>
                    <p className="text-sm text-yellow-300">Physical Therapy Specialist</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-yellow-400/10 to-yellow-400/5 rounded-2xl blur-xl"></div>
                <div className="relative bg-black/30 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8">
                  <p className="text-lg text-slate-200 mb-6 leading-relaxed">
                    {language === 'ar'
                      ? 'دكتور سهيل محمد حياته المهنية لمساعدة المرضى على التغلب على الألم واستعادة الوظائف وتحقيق أهدافهم الصحية الشخصية. يتخصص في العلاج الطبيعي العظمي والرياضي، مع تدريب متقدم في العلاج اليدوي وتحليل الحركة.'
                      : 'Dr. Sohel Mohamed has dedicated his career to helping patients overcome pain, restore function, and achieve their personal health goals. He specializes in orthopedic and sports physical therapy, with advanced training in manual therapy and movement analysis.'
                    }
                  </p>
                  <p className="text-lg text-slate-200 leading-relaxed">
                    {language === 'ar'
                      ? 'يؤمن الدكتور سهيل محمد بنهج يركز على المريض، حيث يجمع بين العلاجات القائمة على الأدلة والرعاية الرحيمة. يعمل بشكل وثيق مع كل مريض لوضع خطط علاج شخصية تعالج ليس فقط الأعراض، بل الأسباب الجذرية للخلل الوظيفي.'
                      : 'Dr. Sohel Mohamed believes in a patient-centered approach, combining evidence-based treatments with compassionate care. He works closely with each patient to develop personalized treatment plans that address not just symptoms, but the root causes of dysfunction.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-24"></div>
              <Star className="mx-4 w-6 h-6 text-yellow-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-24"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'ar' ? 'التعليم والشهادات' : 'Education & Certifications'}
            </h2>
            <p className="text-xl text-slate-300">
              {language === 'ar'
                ? 'ملتزم بالتعلم المستمر ومواكبة أحدث تقنيات العلاج'
                : 'Committed to continuous learning and staying current with the latest treatment techniques'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`group relative ${language === 'ar' ? 'text-right' : 'text-left'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className={`relative flex items-center space-x-3 p-6 bg-black/40 backdrop-blur-sm border border-yellow-400/20 rounded-xl hover:border-yellow-400/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-400/20 ${language === 'ar' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <Star className="h-6 w-6 text-yellow-400 flex-shrink-0 group-hover:text-yellow-300 transition-colors duration-300" />
                  <span className="text-slate-200 group-hover:text-white transition-colors duration-300">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-32"></div>
              <Award className="mx-6 w-8 h-8 text-yellow-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-32"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {language === 'ar' ? 'فلسفة العلاج' : 'Treatment Philosophy'}
            </h2>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-yellow-400/10 to-yellow-400/5 rounded-2xl blur-xl"></div>
            <div className="relative bg-black/30 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8">
              <blockquote className={`text-xl md:text-2xl italic leading-relaxed mb-8 text-slate-200 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                {language === 'ar'
                  ? '"كل مريض فريد من نوعه، وعلاجه يجب أن يكون كذلك أيضًا. أؤمن بتمكين مرضاي بالمعرفة والأدوات التي يحتاجونها ليس فقط للتعافي، بل لمنع الإصابات المستقبلية والحفاظ على الصحة المثلى مدى الحياة."'
                  : '"Every patient is unique, and their treatment should be too. I believe in empowering my patients with the knowledge and tools they need to not just recover, but to prevent future injuries and maintain optimal health for life."'
                }
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent w-16"></div>
                <p className="mx-6 text-yellow-300 text-lg font-medium">
                  {language === 'ar'
                    ? 'الدكتور سهيل محمد، بكالريوس في العلاج الطبيعي'
                    : 'Dr. Sohel Mohamed, DPT, OCS'
                  }
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent w-16"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom decorative element */}
      <div className="py-12">
        <div className="flex items-center justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-32"></div>
          <div className="mx-6 flex space-x-3">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-32"></div>
        </div>
      </div>
    </DarkBackground>
  );
}

export default About;