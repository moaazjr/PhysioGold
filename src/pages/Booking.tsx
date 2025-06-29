import React, { useState } from 'react';
import { Calendar, Clock, User, CheckCircle, AlertCircle, ArrowLeft, Star, Award } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';

// Types
interface BookingData {
  image: string;
  service: string;
  date: string;
  time?: string;
  name: string;
  email: string;
  phone: string;
}

interface Service {
  id: string;
  image: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
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
  },
  {
    id: 'acupuncture',
    image: '/images/dry.jpg',
    name: 'Acupuncture',
    nameAr: 'إبر صينية',
    description: 'Pain relief for neck, knee, and joints, treat headaches and migraines',
    descriptionAr: 'تخفيف الآلام، علاج الرقبة والركبة والمفاصل، علاج الصداع والشقيقة',
  },
  {
    id: 'spinal',
    image: '/images/backInjury.jpg',
    name: 'Spinal Injury Treatment',
    nameAr: 'إصابة العمود الفقري',
    description: 'Herniated disc, vertebral alignment, lower back pain relief',
    descriptionAr: 'إنزلاق غضروفي، تمثيل فقرات، آلام أسفل الظهر',
  },
  {
    id: 'sports',
    image: '/images/SportInjuries.jpg',
    name: 'Sports Injuries',
    nameAr: 'إصابات ملاعب',
    description: 'ACL injury, ankle injuries, shoulder joint injuries',
    descriptionAr: 'إصابة الرباط الصليبي، إصابات الكواحل، إصابة مفصل الكتف',
  },
  {
    id: 'weight',
    image: '/images/diet.jpg',
    name: 'Weight Management',
    nameAr: 'علاج السمنة والنحافة',
    description: 'Specialized programs for weight management and fitness improvement',
    descriptionAr: 'برامج متخصصة لإدارة الوزن وتحسين اللياقة البدنية',
  },
  {
    id: 'recovery',
    image: '/images/recovery2.jpg',
    name: 'Full Body Recovery',
    nameAr: 'استشفاء عضلي للجسم كامل',
    description: 'Reduce muscle pain, accelerate muscle fiber rebuilding, improve circulation',
    descriptionAr: 'تقليل ألم العضلات بعد التمارين, تسريع إعادة بناء الألياف العضلية, تحسين الدورة الدموية',
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
    <div
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 animate-fadeInUp"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Featured Badge */}
     

      {/* Service Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={serviceName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Price Badge */}
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Rating and Duration */}


        {/* Service Title */}
        <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300 ${language === 'ar' ? 'text-right' : 'text-left'
          }`}>
          {serviceName}
        </h3>

        {/* Description */}
        <p className={`text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 ${language === 'ar' ? 'text-right' : 'text-left'
          }`}>
          {description}
        </p>

        {/* Book Button */}
        <button
          onClick={() => onSelect(serviceName)}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-semibold 
                   hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 
                   shadow-md hover:shadow-lg flex items-center justify-center group-hover:shadow-green-500/25"
        >
          <Calendar className={`h-4 w-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
          {language === 'ar' ? 'احجز الآن' : 'Book Now'}
        </button>
      </div>
    </div>
  );
};

const StepIndicator: React.FC<{ currentStep: number; totalSteps: number }> = ({
  currentStep,
  totalSteps
}) => (
  <div className="flex items-center justify-center space-x-2">
    {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
      <React.Fragment key={step}>
        <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${currentStep >= step
            ? 'bg-white text-green-600 border-white shadow-lg'
            : 'border-green-300 text-green-300'
          }`}>
          {currentStep > step ? (
            <CheckCircle className="h-6 w-6" />
          ) : (
            <span className="font-semibold">{step}</span>
          )}
        </div>
        {step < totalSteps && (
          <div className={`w-12 h-1 transition-all duration-300 ${currentStep > step ? 'bg-white' : 'bg-green-300'
            }`} />
        )}
      </React.Fragment>
    ))}
  </div>
);

const BackButton: React.FC<{
  onClick: () => void;
  language: string;
  text: string;
}> = ({ onClick, language, text }) => (
  <button
    onClick={onClick}
    className="flex items-center text-green-600 hover:text-green-700 transition-colors duration-300 mb-6 
               hover:bg-green-50 px-3 py-2 rounded-lg"
  >
    <ArrowLeft className={`h-5 w-5 ${language === 'ar' ? 'ml-2 rotate-180' : 'mr-2'}`} />
    {text}
  </button>
);

// Main Component
function Booking() {
  const { addBooking, isSlotBooked, bookings } = useBooking();
  const { t, language } = useLanguage();

  // State
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingData, setBookingData] = useState<BookingData>({
    image: '',
    service: '',
    date: '',
    name: '',
    email: '',
    phone: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingError, setBookingError] = useState('');

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
      resetBooking();
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
      image: '', service: '', date: '', name: '', email: '', phone: ''
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
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center animate-bounceIn border border-green-100">
          <div className="relative">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6 animate-pulse" />
            <div className="absolute inset-0 h-20 w-20 mx-auto rounded-full bg-green-100 animate-ping" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('bookingConfirmed')}</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {t('bookingSuccess')}
          </p>
          <button
            onClick={resetBooking}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-xl font-semibold 
                     hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t('bookAnother')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              {t('bookingTitle')}
            </h1>
            <p className="text-green-100 text-xl max-w-2xl mx-auto leading-relaxed">
              {t('bookingSubtitle')}
            </p>
          </div>

          {/* Step Indicator */}
          <div className="mt-12">
            <StepIndicator currentStep={bookingStep} totalSteps={4} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Error Message */}
          {bookingError && (
            <div className="bg-red-50 border-l-4 border-red-500 p-6 m-6 rounded-xl animate-shake">
              <div className="flex items-center">
                <AlertCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                <p className="text-red-700 font-medium">{bookingError}</p>
              </div>
            </div>
          )}

          <div className="p-8 lg:p-12">
            {/* Step 1: Service Selection */}
            {bookingStep === 1 && (
              <div className="animate-fadeInUp">
                <h2 className={`text-3xl font-bold text-gray-900 mb-8 ${language === 'ar' ? 'text-right' : 'text-left'
                  }`}>
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

                <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('selectDate')}</h2>

                {/* Selected Service Summary */}
                <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                  <p className={`text-green-800 text-lg ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    <strong>{language === 'ar' ? 'الخدمة المختارة:' : 'Selected Service:'}</strong> {selectedService}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  {generateDateOptions().map((date, index) => (
                    <button
                      key={date}
                      onClick={() => handleDateSelect(date)}
                      className="p-4 border-2 border-gray-200 rounded-2xl hover:border-green-500 hover:bg-green-50 
                               transition-all duration-300 text-center transform hover:scale-105 animate-fadeInUp
                               hover:shadow-lg"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <Calendar className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                      <p className="text-sm font-medium text-gray-900">
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

                <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('selectTime')}</h2>

                {/* Booking Summary */}
                <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                  <p className={`text-green-800 text-lg ${language === 'ar' ? 'text-right' : 'text-left'}`}>
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
                            ? 'border-red-200 bg-red-50 text-red-400 cursor-not-allowed'
                            : 'border-gray-200 hover:border-green-500 hover:bg-green-50 hover:scale-105 hover:shadow-lg'
                          }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <Clock className={`h-6 w-6 mx-auto mb-2 ${isBooked ? 'text-red-400' : 'text-gray-600'}`} />
                        <p className={`text-lg font-medium ${isBooked ? 'text-red-400' : 'text-gray-900'}`}>
                          {time}
                        </p>
                        {isBooked && (
                          <p className="text-sm text-red-500 mt-2 font-medium">
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

                <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('yourInfo')}</h2>

                {/* Comprehensive Booking Summary */}
                <div className="mb-8 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl border border-green-200 shadow-inner">
                  <h3 className={`text-xl font-bold text-gray-900 mb-6 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {language === 'ar' ? 'ملخص الحجز' : 'Booking Summary'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      <p className="text-gray-600 text-sm font-medium mb-1">{language === 'ar' ? 'الخدمة' : 'Service'}</p>
                      <p className="font-bold text-gray-900 text-lg">{selectedService}</p>
                    </div>
                    <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      <p className="text-gray-600 text-sm font-medium mb-1">{language === 'ar' ? 'التاريخ' : 'Date'}</p>
                      <p className="font-bold text-gray-900 text-lg">
                        {new Date(selectedDate).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}
                      </p>
                    </div>
                    <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      <p className="text-gray-600 text-sm font-medium mb-1">{language === 'ar' ? 'الوقت' : 'Time'}</p>
                      <p className="font-bold text-gray-900 text-lg">{selectedTime}</p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmitBooking} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-semibold text-gray-700 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'
                        }`}>
                        {t('fullName')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingData.name}
                        onChange={(e) => setBookingData(prev => ({ ...prev, name: e.target.value }))}
                        className={`w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 
                                  focus:border-green-500 transition-all duration-300 text-lg ${language === 'ar' ? 'text-right' : 'text-left'
                          }`}
                        placeholder={language === 'ar' ? 'اسمك الكامل' : 'Your full name'}
                        dir={language === 'ar' ? 'rtl' : 'ltr'}
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold text-gray-700 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'
                        }`}>
                        {t('email')} *
                      </label>
                      <input
                        type="email"
                        required
                        value={bookingData.email}
                        onChange={(e) => setBookingData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 
                                 focus:border-green-500 transition-all duration-300 text-lg"
                        placeholder="your.email@example.com"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-semibold text-gray-700 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'
                      }`}>
                      {t('phone')} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={bookingData.phone}
                      onChange={(e) => setBookingData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 
                               focus:border-green-500 transition-all duration-300 text-lg"
                      placeholder="(555) 123-4567"
                      dir="ltr"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-5 rounded-2xl 
                             font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 
                             transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center 
                             group border-2 border-transparent hover:border-green-300"
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
}

export default Booking;