import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 shadow-sm animate-slideDown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <User className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                {language === 'ar' ? 'فيزيوجولد' : 'PhysioGold'}
              </span>
            </Link>
            
            <div className="hidden md:block">
              <div className={`ml-10 flex items-baseline space-x-8 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
                <Link 
                  to="/" 
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isActive('/') 
                      ? 'text-green-600 border-b-2 border-green-600' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  {t('home')}
                </Link>
                <Link 
                  to="/about" 
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isActive('/about') 
                      ? 'text-green-600 border-b-2 border-green-600' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  {t('about')}
                </Link>
                <Link 
                  to="/services" 
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isActive('/services') 
                      ? 'text-green-600 border-b-2 border-green-600' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  {t('services')}
                </Link>
                <Link 
                  to="/contact" 
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isActive('/contact') 
                      ? 'text-green-600 border-b-2 border-green-600' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  {t('contact')}
                </Link>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-105"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {language === 'ar' ? 'EN' : 'عربي'}
                </button>
                <Link 
                  to="/booking"
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('bookSession')}
                </Link>
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center px-2 py-1 text-sm font-medium text-gray-600 hover:text-green-600 transition-all duration-300"
              >
                <Globe className="h-4 w-4 mr-1" />
                {language === 'ar' ? 'EN' : 'عربي'}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-slideDown">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 font-medium transition-colors duration-300 ${
                  isActive('/') ? 'text-green-600' : 'text-gray-900 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 transition-colors duration-300 ${
                  isActive('/about') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link 
                to="/services" 
                className={`block px-3 py-2 transition-colors duration-300 ${
                  isActive('/services') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('services')}
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 transition-colors duration-300 ${
                  isActive('/contact') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('contact')}
              </Link>
              <Link 
                to="/booking"
                className="block w-full text-left bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-2 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('bookSession')}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <User className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">
                {language === 'ar' ? 'فيزيوجولد' : 'PhysioGold'}
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footerText')}
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 {language === 'ar' ? 'فيزيوجولد' : 'PhysioGold'}. {t('allRightsReserved')}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;