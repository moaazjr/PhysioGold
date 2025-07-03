import React, { useState } from 'react';
import { Calendar, Clock, User, CheckCircle, AlertCircle, ArrowLeft, Star, Award } from 'lucide-react';

// Types
interface BookingData {
  image: string;
  service: string;
  date: string;
  time?: string;
  name: string;
  phone: string;
}

interface Service {
  id: string;
  image: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  duration: string;
  rating: number;
}

// Constants
const SERVICES: Service[] = [
  {
    id: 'cupping',
    image: '/images/hijama2.jpg',
    name: 'Cupping Therapy',
    nameAr: 'حجامة',
    description: 'Improve blood circulation, boost immunity, relieve headaches and body pain',
    descriptionAr: 'تنشيط الدورة الدموية، تقوية المناعة، تخفيف الصداع وآلام الجسم',
    duration: '60 min',
    rating: 4.9
  },
  {
    id: 'acupuncture',
    image: '/images/dry.jpg',
    name: 'Acupuncture',
    nameAr: 'إبر صينية',
    description: 'Pain relief for neck, knee, and joints, treat headaches and migraines',
    descriptionAr: 'تخفيف الآلام، علاج الرقبة والركبة والمفاصل، علاج الصداع والشقيقة',
    duration: '45 min',
    rating: 4.8
  },
  {
    id: 'spinal',
    image: '/images/backInjury.jpg',
    name: 'Spinal Injury Treatment',
    nameAr: 'إصابة العمود الفقري',
    description: 'Herniated disc, vertebral alignment, lower back pain relief',
    descriptionAr: 'إنزلاق غضروفي، تمثيل فقرات، آلام أسفل الظهر',
    duration: '75 min',
    rating: 4.7
  },
  {
    id: 'sports',
    image: '/images/dahry.jpg',
    name: 'Sports Injuries',
    nameAr: 'إصابات ملاعب',
    description: 'ACL injury, ankle injuries, shoulder joint injuries',
    descriptionAr: 'إصابة الرباط الصليبي، إصابات الكواحل، إصابة مفصل الكتف',
    duration: '60 min',
    rating: 4.8
  },
  {
    id: 'weight',
    image: '/images/diet.jpg',
    name: 'Weight Management',
    nameAr: 'علاج السمنة والنحافة',
    description: 'Specialized programs for weight management and fitness improvement',
    descriptionAr: 'برامج متخصصة لإدارة الوزن وتحسين اللياقة البدنية',
    duration: '90 min',
    rating: 4.6
  },
  {
    id: 'recovery',
    image: '/images/recovery2.jpg',
    name: 'Full Body Recovery',
    nameAr: 'استشفاء عضلي للجسم كامل',
    description: 'Reduce muscle pain, accelerate muscle fiber rebuilding, improve circulation',
    descriptionAr: 'تقليل ألم العضلات بعد التمارين, تسريع إعادة بناء الألياف العضلية, تحسين الدورة الدموية',
    duration: '80 min',
    rating: 4.9
  }
];

const TIME_SLOTS = [
  '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

// Components
const ServiceCard: React.FC<{
  service: Service;
  language: string;
  onSelect: (serviceName: string) => void;
  index: number;
}> = ({ service, language, onSelect, index }) => {
  const serviceName = language === 'ar' ? service.nameAr : service.name;
  const description = language === 'ar' ? service.descriptionAr : service.description;

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl dark:hover:shadow-gray-900">
      {/* Gold accent bar */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-yellow-600 to-yellow-400" />

      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={serviceName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className={`text-xl font-bold text-gray-900 dark:text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {serviceName}
          </h3>
          <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-full">
            <Star className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
            <span className="ml-1 text-xs font-medium text-yellow-800 dark:text-yellow-200">{service.rating}</span>
          </div>
        </div>

        <p className={`text-gray-600 dark:text-gray-300 text-sm mb-6 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          {description}
        </p>

        <button
          onClick={() => onSelect(service.name)}
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-4 rounded-lg font-semibold 
                   hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center
                   group-hover:shadow-yellow-200 dark:group-hover:shadow-yellow-900/50 group-hover:shadow-md"
        >
          <Calendar className={language === 'ar' ? 'ml-2' : 'mr-2'} size={18} />
          {language === 'ar' ? 'احجز الآن' : 'Book Now'}
        </button>
      </div>
    </div>
  );
};

const StepIndicator: React.FC<{ currentStep: number; totalSteps: number }> = ({
  currentStep,
  totalSteps
}) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <React.Fragment key={step}>
          <div className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${currentStep >= step
            ? 'bg-yellow-600 text-white shadow-lg'
            : 'bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-300'
            }`}>
            {currentStep > step ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <span className="font-semibold">{step}</span>
            )}
            {currentStep === step && (
              <div className="absolute -inset-1 rounded-full border-2 border-yellow-300 animate-pulse" />
            )}
          </div>
          {step < totalSteps && (
            <div className={`h-1 w-12 transition-all duration-300 ${currentStep > step ? 'bg-yellow-500' : 'bg-gray-200 dark:bg-gray-600'
              }`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const BackButton: React.FC<{
  onClick: () => void;
  language: string;
  text: string;
}> = ({ onClick, language, text }) => (
  <button
    onClick={onClick}
    className="flex items-center text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors duration-300 mb-6 
               hover:bg-yellow-50 dark:hover:bg-gray-700 px-3 py-2 rounded-lg"
  >
    <ArrowLeft className={`h-5 w-5 ${language === 'ar' ? 'ml-2 rotate-180' : 'mr-2'}`} />
    {text}
  </button>
);

// Main Component
const BookingSystem: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [bookings, setBookings] = useState<any[]>([]);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingData, setBookingData] = useState<BookingData>({
    image: '',
    service: '',
    date: '',
    name: '',
    phone: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingError, setBookingError] = useState('');

  // Helper functions
  const isSlotBooked = (date: string, time: string) => {
    return bookings.some(booking => booking.date === date && booking.time === time);
  };

  const addBooking = (data: BookingData) => {
    const isAvailable = !isSlotBooked(data.date, data.time || '');

    if (isAvailable) {
      setBookings([...bookings, data]);
      return true;
    }
    return false;
  };

  const t = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      bookingTitle: {
        en: 'Book Your Appointment',
        ar: 'احجز موعدك'
      },
      bookingSubtitle: {
        en: 'Experience premium physiotherapy services with our gold-standard care',
        ar: 'جرب خدمات العلاج الطبيعي المتميزة مع رعايتنا ذات المعايير الذهبية'
      },
      selectService: {
        en: 'Select a Service',
        ar: 'اختر الخدمة'
      },
      selectDate: {
        en: 'Choose a Date',
        ar: 'اختر تاريخ'
      },
      selectTime: {
        en: 'Select Time Slot',
        ar: 'اختر الوقت'
      },
      yourInfo: {
        en: 'Your Information',
        ar: 'معلوماتك'
      },
      fullName: {
        en: 'Full Name',
        ar: 'الاسم الكامل'
      },
      email: {
        en: 'Email Address',
        ar: 'البريد الإلكتروني'
      },
      phone: {
        en: 'Phone Number',
        ar: 'رقم الهاتف'
      },
      confirmBooking: {
        en: 'Confirm Booking',
        ar: 'تأكيد الحجز'
      },
      bookingConfirmed: {
        en: 'Booking Confirmed!',
        ar: 'تم تأكيد الحجز!'
      },
      bookingSuccess: {
        en: 'Your appointment has been successfully booked. We look forward to seeing you!',
        ar: 'تم حجز موعدك بنجاح. نتطلع إلى رؤيتك!'
      },
      bookAnother: {
        en: 'Book Another Appointment',
        ar: 'احجز موعد آخر'
      },
      back: {
        en: 'Back',
        ar: 'رجوع'
      }
    };

    return translations[key]?.[language] || key;
  };

  // Handlers
  const handleServiceSelect = (service: string) => {
    const selectedServiceObj = SERVICES.find(s =>
      (language === 'ar' ? s.nameAr : s.name) === service
    );

    setSelectedService(service);
    setBookingData(prev => ({
      ...prev,
      service,
      image: selectedServiceObj?.image || ''
    }));
    setBookingStep(2);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setBookingData(prev => ({ ...prev, date }));
    setBookingStep(3);
  };

  const handleTimeSelect = (time: string) => {
    if (isSlotBooked(selectedDate, time)) {
      setBookingError(language === 'ar'
        ? 'هذا الموعد محجوز بالفعل. يرجى اختيار وقت آخر.'
        : 'This time slot is already booked. Please select another time.'
      );
      return;
    }

    setBookingError('');
    setSelectedTime(time);
    setBookingData(prev => ({ ...prev, time }));
    setBookingStep(4);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const success = addBooking(bookingData);

    if (success) {
      setShowSuccess(true);
    } else {
      setBookingError(language === 'ar'
        ? 'تم حجز هذا الموعد للتو من قبل مريض آخر. يرجى اختيار وقت مختلف.'
        : 'This time slot has just been booked by another patient. Please select a different time.'
      );
      setBookingStep(3);
    }
  };

  const resetBooking = () => {
    setBookingStep(1);
    setSelectedService('');
    setSelectedDate('');
    setSelectedTime('');
    setBookingData({
      image: '', service: '', date: '', name: '', phone: ''
    });
    setBookingError('');
    setShowSuccess(false);
  };

  const generateDateOptions = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  // Success Screen
  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50 animate-fadeIn">
        <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl animate-scaleIn">
          {/* Gold header */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-8 px-6 text-center">
            <div className="relative inline-block">
              <CheckCircle className="h-16 w-16 text-white mx-auto" />
              <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
            </div>
          </div>

          {/* Content */}
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('bookingConfirmed')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('bookingSuccess')}
            </p>

            {/* Booking summary */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-8 text-left">
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                {language === 'ar' ? 'تفاصيل الحجز' : 'Booking Details'}
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700 dark:text-gray-300"><span className="text-gray-500 dark:text-gray-400">{language === 'ar' ? 'الخدمة:' : 'Service:'}</span> {selectedService}</p>
                <p className="text-gray-700 dark:text-gray-300"><span className="text-gray-500 dark:text-gray-400">{language === 'ar' ? 'التاريخ:' : 'Date:'}</span> {new Date(selectedDate).toLocaleDateString()}</p>
                <p className="text-gray-700 dark:text-gray-300"><span className="text-gray-500 dark:text-gray-400">{language === 'ar' ? 'الوقت:' : 'Time:'}</span> {selectedTime}</p>
              </div>
            </div>

            <button
              onClick={resetBooking}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-4 rounded-xl font-semibold 
                       hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {t('bookAnother')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 dark:from-gray-900 via-gray-100 dark:via-gray-800 to-gray-200 dark:to-gray-700">
      {/* Language switcher */}
      {/* <div className="flex justify-end p-4">
        <button
          onClick={() => setLanguage(lang => lang === 'en' ? 'ar' : 'en')}
          className="text-sm font-medium text-yellow-700 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300 
                     bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full"
        >
          {language === 'en' ? 'العربية' : 'English'}
        </button>
      </div> */}

      {/* Header */}
      <div>
        {/* Logo and title */}
        <div className="relative mx-auto text-center">
          <img
            src="images/bookingBG2.jpg"
            alt="Physio Gold Logo"
            className="block w-full mx-auto"
          />

          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="mt-[75%]">
              <StepIndicator currentStep={bookingStep} totalSteps={4} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-12">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl dark:shadow-gray-900/50 overflow-hidden border border-gray-100 dark:border-gray-700">
          {/* Error Message */}
          {bookingError && (
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 m-6 rounded-xl animate-shake">
              <div className="flex items-center">
                <AlertCircle className="h-6 w-6 text-red-500 dark:text-red-400 mr-3 flex-shrink-0" />
                <p className="text-red-700 dark:text-red-300 font-medium">{bookingError}</p>
              </div>
            </div>
          )}

          <div className="p-8 lg:p-12">
            {/* Step 1: Service Selection */}
            {bookingStep === 1 && (
              <div className="animate-fadeInUp">
                <h2 className={`text-3xl font-bold text-gray-900 dark:text-white mb-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('selectService')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SERVICES.map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      language={language}
                      onSelect={handleServiceSelect}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date Selection */}
            {bookingStep === 2 && (
              <div className="animate-fadeInUp">
                <BackButton
                  onClick={() => setBookingStep(1)}
                  language={language}
                  text={t('back')}
                />

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t('selectDate')}</h2>

                {/* Selected Service Summary */}
                <div className="mb-8 p-6 bg-gradient-to-r from-yellow-50 dark:from-yellow-900/20 to-yellow-100 dark:to-yellow-900/30 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                  <p className={`text-yellow-800 dark:text-yellow-200 text-lg ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    <strong>{language === 'ar' ? 'الخدمة المختارة:' : 'Selected Service:'}</strong> {selectedService}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  {generateDateOptions().map((date, index) => (
                    <button
                      key={date}
                      onClick={() => handleDateSelect(date)}
                      className="p-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl hover:border-yellow-500 hover:bg-yellow-50 dark:hover:bg-gray-700 
                               transition-all duration-300 text-center transform hover:scale-105 animate-fadeInUp
                               hover:shadow-lg dark:hover:shadow-gray-900"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <Calendar className="h-6 w-6 mx-auto mb-2 text-gray-600 dark:text-gray-300" />
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {new Date(date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Time Selection */}
            {bookingStep === 3 && (
              <div className="animate-fadeInUp">
                <BackButton
                  onClick={() => setBookingStep(2)}
                  language={language}
                  text={t('back')}
                />

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t('selectTime')}</h2>

                {/* Booking Summary */}
                <div className="mb-8 p-6 bg-gradient-to-r from-yellow-50 dark:from-yellow-900/20 to-yellow-100 dark:to-yellow-900/30 rounded-2xl border border-yellow-200 dark:border-yellow-800">
                  <p className={`text-yellow-800 dark:text-yellow-200 text-lg ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    <strong>{language === 'ar' ? 'المختار:' : 'Selected:'}</strong> {selectedService} {language === 'ar' ? 'في' : 'on'} {new Date(selectedDate).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {TIME_SLOTS.map((time, index) => {
                    const isBooked = isSlotBooked(selectedDate, time);
                    return (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        disabled={isBooked}
                        className={`p-6 border-2 rounded-2xl transition-all duration-300 text-center transform animate-fadeInUp ${isBooked
                          ? 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 text-red-400 dark:text-red-500 cursor-not-allowed'
                          : 'border-gray-200 dark:border-gray-600 hover:border-yellow-500 hover:bg-yellow-50 dark:hover:bg-gray-700 hover:scale-105 hover:shadow-lg dark:hover:shadow-gray-900'
                          }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <Clock className={`h-6 w-6 mx-auto mb-2 ${isBooked ? 'text-red-400 dark:text-red-500' : 'text-gray-600 dark:text-gray-300'}`} />
                        <p className={`text-lg font-medium ${isBooked ? 'text-red-400 dark:text-red-500' : 'text-gray-900 dark:text-white'}`}>
                          {time}
                        </p>
                        {isBooked && (
                          <p className="text-sm text-red-500 dark:text-red-400 mt-2 font-medium">
                            {language === 'ar' ? 'محجوز' : 'Booked'}
                          </p>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {bookingStep === 4 && (
              <div className="animate-fadeInUp">
                <BackButton
                  onClick={() => setBookingStep(3)}
                  language={language}
                  text={t('back')}
                />

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t('yourInfo')}</h2>

                {/* Comprehensive Booking Summary */}
                <div className="mb-8 p-8 bg-gradient-to-r from-yellow-50 dark:from-yellow-900/20 to-yellow-100 dark:to-yellow-900/30 rounded-3xl border border-yellow-200 dark:border-yellow-800 shadow-inner">
                  <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-6 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {language === 'ar' ? 'ملخص الحجز' : 'Booking Summary'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">{language === 'ar' ? 'الخدمة' : 'Service'}</p>
                      <p className="font-bold text-gray-900 dark:text-white text-lg">{selectedService}</p>
                    </div>
                    <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">{language === 'ar' ? 'التاريخ' : 'Date'}</p>
                      <p className="font-bold text-gray-900 dark:text-white text-lg">
                        {new Date(selectedDate).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}
                      </p>
                    </div>
                    <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">{language === 'ar' ? 'الوقت' : 'Time'}</p>
                      <p className="font-bold text-gray-900 dark:text-white text-lg">{selectedTime}</p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmitBooking} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                        {t('fullName')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingData.name}
                        onChange={(e) => setBookingData(prev => ({ ...prev, name: e.target.value }))}
                        className={`w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 
                                  focus:border-yellow-500 transition-all duration-300 text-lg dark:bg-gray-700 dark:text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}
                        placeholder={language === 'ar' ? 'اسمك الكامل' : 'Your full name'}
                        dir={language === 'ar' ? 'rtl' : 'ltr'}
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                        {t('phone')} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={bookingData.phone}
                        onChange={(e) => setBookingData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 
                               focus:border-yellow-500 transition-all duration-300 text-lg dark:bg-gray-700 dark:text-white"
                        placeholder="(555) 123-4567"
                        dir="ltr"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-5 rounded-2xl 
                             font-bold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 
                             transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center 
                             group border-2 border-transparent hover:border-yellow-300"
                  >
                    <User className={`${language === 'ar' ? 'ml-3' : 'mr-3'} h-6 w-6`} />
                    {t('confirmBooking')}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSystem;