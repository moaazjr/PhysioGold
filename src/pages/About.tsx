import React from 'react';
import { Star, Award, Users, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function About() {
  const { t, language } = useLanguage();

  const stats = [
    { 
      icon: Users, 
      label: language === 'ar' ? 'المرضى المعالجون' : 'Patients Treated', 
      value: '500+' 
    },
    { 
      icon: Clock, 
      label: language === 'ar' ? 'سنوات الخبرة' : 'Years Experience', 
      value: '12+' 
    },
    { 
      icon: Award, 
      label: language === 'ar' ? 'الشهادات' : 'Certifications', 
      value: '8' 
    },
    { 
      icon: Star, 
      label: language === 'ar' ? 'معدل النجاح' : 'Success Rate', 
      value: '95%' 
    }
  ];

  const certifications = language === 'ar' ? [
    'دكتوراه في العلاج الطبيعي - جامعة ستانفورد',
    'أخصائي عظام معتمد (OCS)',
    'شهادة الوخز الجاف - كينيتاكور',
    'إقامة العلاج الطبيعي الرياضي',
    'شهادة العلاج اليدوي - NAIOMT',
    'شهادة فحص الحركة الوظيفية (FMS)',
    'شهادة تقنية جراستون',
    'شهادة تدريب تقييد تدفق الدم'
  ] : [
    'Doctorate in Physical Therapy - Stanford University',
    'Certified Orthopedic Clinical Specialist (OCS)',
    'Dry Needling Certification - Kinetacore',
    'Sports Physical Therapy Residency',
    'Manual Therapy Certification - NAIOMT',
    'Functional Movement Screen (FMS) Certified',
    'Graston Technique Certified',
    'Blood Flow Restriction Training Certified'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'عن الدكتورة سارة جونسون' : 'About Dr. Sarah Johnson'}
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'مكرسة لمساعدة المرضى على تحقيق أعلى مستوى من الوظائف والعودة إلى الأنشطة التي يحبونها'
                : 'Dedicated to helping patients achieve their highest level of function and return to the activities they love'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <img 
                src="https://images.pexels.com/photos/6111562/pexels-photo-6111562.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Dr. Sarah Johnson" 
                className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className={`animate-fadeInRight ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {language === 'ar' ? 'شريكك في التعافي' : 'Your Partner in Recovery'}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {language === 'ar' 
                  ? 'مع أكثر من 12 عامًا من الخبرة في العلاج الطبيعي، كرست الدكتورة سارة جونسون حياتها المهنية لمساعدة المرضى على التغلب على الألم واستعادة الوظائف وتحقيق أهدافهم الصحية الشخصية. تتخصص في العلاج الطبيعي العظمي والرياضي، مع تدريب متقدم في العلاج اليدوي وتحليل الحركة.'
                  : 'With over 12 years of experience in physical therapy, Dr. Sarah Johnson has dedicated her career to helping patients overcome pain, restore function, and achieve their personal health goals. She specializes in orthopedic and sports physical therapy, with advanced training in manual therapy and movement analysis.'
                }
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {language === 'ar' 
                  ? 'تؤمن الدكتورة جونسون بنهج يركز على المريض، حيث تجمع بين العلاجات القائمة على الأدلة والرعاية الرحيمة. تعمل بشكل وثيق مع كل مريض لوضع خطط علاج شخصية تعالج ليس فقط الأعراض، بل الأسباب الجذرية للخلل الوظيفي.'
                  : 'Dr. Johnson believes in a patient-centered approach, combining evidence-based treatments with compassionate care. She works closely with each patient to develop personalized treatment plans that address not just symptoms, but the root causes of dysfunction.'
                }
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-4 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-colors duration-300 animate-fadeInUp"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <stat.icon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'التعليم والشهادات' : 'Education & Certifications'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' 
                ? 'ملتزمة بالتعلم المستمر ومواكبة أحدث تقنيات العلاج'
                : 'Committed to continuous learning and staying current with the latest treatment techniques'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp ${language === 'ar' ? 'text-right space-x-reverse' : 'text-left'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Star className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {language === 'ar' ? 'فلسفة العلاج' : 'Treatment Philosophy'}
            </h2>
            <blockquote className={`text-xl italic leading-relaxed mb-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {language === 'ar' 
                ? '"كل مريض فريد من نوعه، وعلاجه يجب أن يكون كذلك أيضًا. أؤمن بتمكين مرضاي بالمعرفة والأدوات التي يحتاجونها ليس فقط للتعافي، بل لمنع الإصابات المستقبلية والحفاظ على الصحة المثلى مدى الحياة."'
                : '"Every patient is unique, and their treatment should be too. I believe in empowering my patients with the knowledge and tools they need to not just recover, but to prevent future injuries and maintain optimal health for life."'
              }
            </blockquote>
            <p className="text-green-100 text-lg">
              {language === 'ar' 
                ? '- الدكتورة سارة جونسون، دكتوراه في العلاج الطبيعي، أخصائية عظام معتمدة'
                : '- Dr. Sarah Johnson, DPT, OCS'
              }
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;