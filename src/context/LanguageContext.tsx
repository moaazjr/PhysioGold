import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'ar' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'الخدمات',
    contact: 'اتصل بنا',
    bookSession: 'احجز جلسة',
    
    // Hero Section
    heroTitle: 'استعد صحتك',
    heroSubtitle: 'استعد حياتك',
    heroDescription: 'خدمات العلاج الطبيعي المتخصصة المصممة لمساعدتك على الحركة بشكل أفضل، والشعور بقوة أكبر، والعيش بدون ألم. رحلتك نحو الصحة المثلى تبدأ هنا.',
    bookYourSession: 'احجز جلستك',
    viewServices: 'عرض الخدمات',
    
    // Services
    servicesTitle: 'خدماتنا',
    servicesSubtitle: 'خدمات العلاج الطبيعي الشاملة المصممة خصيصاً لاحتياجاتك وأهداف التعافي الخاصة بك',
    
    // Service Names
    cupping: 'حجامة',
    cuppingDesc: 'تنشيط الدورة الدموية، تقوية المناعة، تخفيف الصداع وآلام الجسم، تحسين مستوى السكر والضغط',
    
    acupuncture: 'إبر صينية',
    acupunctureDesc: 'تخفيف الآلام، الرقبة، الركبة، والمفاصل، علاج الصداع والشقيقة، فعالة في تقليل تكرار وحدة نوبات الصداع، تقليل التوتر والقلق',
    
    spinalInjury: 'إصابة العمود الفقري',
    spinalInjuryDesc: 'إنزلاق غضروفي، تمثيل فقرات، آلام أسفل الظهر',
    
    sportsInjury: 'إصابات ملاعب',
    sportsInjuryDesc: 'إصابة في الرباط الصليبي، الكواحل، إصابة في مفصل الكتف',
    
    obesityTreatment: 'علاج السمنة والنحافة',
    obesityTreatmentDesc: 'برامج متخصصة لإدارة الوزن وتحسين اللياقة البدنية',
    
    // About
    aboutTitle: 'عن الدكتورة سارة جونسون',
    aboutSubtitle: 'مكرسة لمساعدة المرضى على تحقيق أعلى مستوى من الوظائف والعودة إلى الأنشطة التي يحبونها',
    
    // Contact
    contactTitle: 'تواصل معنا',
    contactSubtitle: 'مستعد لبدء رحلتك نحو صحة أفضل؟ نحن هنا للمساعدة والإجابة على أي أسئلة قد تكون لديك.',
    
    // Booking
    bookingTitle: 'احجز جلستك',
    bookingSubtitle: 'حدد موعدك في خطوات بسيطة',
    selectService: 'اختر الخدمة',
    selectDate: 'اختر التاريخ',
    selectTime: 'اختر الوقت',
    yourInfo: 'معلوماتك',
    
    // Form
    fullName: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    confirmBooking: 'تأكيد الحجز',
    
    // Success
    bookingConfirmed: 'تم تأكيد الحجز!',
    bookingSuccess: 'شكراً لك على الحجز مع فيزيوويل. لقد أرسلنا بريداً إلكترونياً للتأكيد مع جميع التفاصيل. نتطلع لرؤيتك قريباً!',
    bookAnother: 'احجز جلسة أخرى',
    
    // Footer
    footerText: 'نساعدك على الحركة بشكل أفضل، والشعور بقوة أكبر، والعيش بدون ألم.',
    allRightsReserved: 'جميع الحقوق محفوظة',
    
    // Common
    back: 'رجوع',
    next: 'التالي',
    submit: 'إرسال',
    cancel: 'إلغاء',
    close: 'إغلاق',
    loading: 'جاري التحميل...',
    error: 'خطأ',
    success: 'نجح',
    
    // Time slots
    morning: 'صباحاً',
    afternoon: 'بعد الظهر',
    evening: 'مساءً',
    
    // Days
    sunday: 'الأحد',
    monday: 'الاثنين',
    tuesday: 'الثلاثاء',
    wednesday: 'الأربعاء',
    thursday: 'الخميس',
    friday: 'الجمعة',
    saturday: 'السبت',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    bookSession: 'Book Session',
    
    // Hero Section
    heroTitle: 'Restore Your Body',
    heroSubtitle: 'Reclaim Your Life',
    heroDescription: 'Expert physical therapy services designed to help you move better, feel stronger, and live without pain. Your journey to optimal health starts here.',
    bookYourSession: 'Book Your Session',
    viewServices: 'View Services',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive physical therapy services tailored to your unique needs and recovery goals',
    
    // Service Names
    cupping: 'Cupping Therapy',
    cuppingDesc: 'Improve blood circulation, boost immunity, relieve headaches and body pain, improve blood sugar and pressure levels',
    
    acupuncture: 'Acupuncture',
    acupunctureDesc: 'Pain relief for neck, knee, and joints, treat headaches and migraines, effective in reducing frequency and intensity of headache episodes, reduce stress and anxiety',
    
    spinalInjury: 'Spinal Injury Treatment',
    spinalInjuryDesc: 'Herniated disc, vertebral representation, lower back pain',
    
    sportsInjury: 'Sports Injuries',
    sportsInjuryDesc: 'ACL injury, ankle injuries, shoulder joint injuries',
    
    obesityTreatment: 'Obesity & Weight Management',
    obesityTreatmentDesc: 'Specialized programs for weight management and fitness improvement',
    
    // About
    aboutTitle: 'About Dr. Sarah Johnson',
    aboutSubtitle: 'Dedicated to helping patients achieve their highest level of function and return to the activities they love',
    
    // Contact
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Ready to start your journey to better health? We\'re here to help and answer any questions you may have.',
    
    // Booking
    bookingTitle: 'Book Your Session',
    bookingSubtitle: 'Schedule your appointment in just a few simple steps',
    selectService: 'Select a Service',
    selectDate: 'Select a Date',
    selectTime: 'Select a Time',
    yourInfo: 'Your Information',
    
    // Form
    fullName: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    confirmBooking: 'Confirm Booking',
    
    // Success
    bookingConfirmed: 'Booking Confirmed!',
    bookingSuccess: 'Thank you for booking with PhysioWell. We\'ve sent a confirmation email with all the details. We look forward to seeing you soon!',
    bookAnother: 'Book Another Session',
    
    // Footer
    footerText: 'Helping you move better, feel stronger, and live without pain.',
    allRightsReserved: 'All rights reserved',
    
    // Common
    back: 'Back',
    next: 'Next',
    submit: 'Submit',
    cancel: 'Cancel',
    close: 'Close',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    
    // Time slots
    morning: 'AM',
    afternoon: 'PM',
    evening: 'PM',
    
    // Days
    sunday: 'Sunday',
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}