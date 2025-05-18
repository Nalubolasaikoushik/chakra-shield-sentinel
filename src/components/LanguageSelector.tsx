
import React, { useState, useRef, useEffect } from 'react';
import { CheckIcon, ChevronDown, Globe } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

interface LanguageOption {
  value: Language;
  label: string;
  nativeLabel: string;
  flagEmoji?: string;
}

const languageOptions: LanguageOption[] = [
  { value: 'English', label: 'English', nativeLabel: 'English', flagEmoji: '🇬🇧' },
  { value: 'हिंदी', label: 'Hindi', nativeLabel: 'हिंदी', flagEmoji: '🇮🇳' },
  { value: 'தமிழ்', label: 'Tamil', nativeLabel: 'தமிழ்', flagEmoji: '🇮🇳' },
  { value: 'తెలుగు', label: 'Telugu', nativeLabel: 'తెలుగు', flagEmoji: '🇮🇳' },
  { value: 'বাংলা', label: 'Bengali', nativeLabel: 'বাংলা', flagEmoji: '🇮🇳' },
  { value: 'ಕನ್ನಡ', label: 'Kannada', nativeLabel: 'ಕನ್ನಡ', flagEmoji: '🇮🇳' },
  { value: 'മലയാളം', label: 'Malayalam', nativeLabel: 'മലയാളം', flagEmoji: '🇮🇳' },
  { value: 'اردو', label: 'Urdu', nativeLabel: 'اردو', flagEmoji: '🇮🇳' },
  { value: 'ગુજરાતી', label: 'Gujarati', nativeLabel: 'ગુજરાતી', flagEmoji: '🇮🇳' },
];

interface LanguageSelectorProps {
  variant?: 'header' | 'compact' | 'full';
}

const LanguageSelector = ({ variant = 'header' }: LanguageSelectorProps) => {
  const { currentLanguage, setLanguage, t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  // Get the current language option
  const currentOption = languageOptions.find(option => option.value === currentLanguage) || languageOptions[0];

  // Change language handler
  const handleLanguageChange = (language: Language) => {
    setLanguage(language);
    setIsOpen(false);
    
    const selectedOption = languageOptions.find(option => option.value === language);
    
    toast({
      title: `${selectedOption?.label} ${t('languageSelector')}`,
      description: t('languageChanged'),
      duration: 2000,
    });
  };

  if (variant === 'compact') {
    return (
      <div className="relative" ref={dropdownRef}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label={t('languageSelector')}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <Globe className="h-4 w-4" />
        </button>
        
        {isOpen && (
          <div className={`absolute z-50 top-full mt-1 ${isRTL ? 'right-0' : 'left-0'} min-w-[180px] bg-white dark:bg-gray-900 rounded-lg shadow-lg py-1 border border-gray-200 dark:border-gray-700`}>
            {languageOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleLanguageChange(option.value)}
                className={`w-full text-left px-3 py-2 text-sm flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  currentLanguage === option.value ? 'bg-gray-100 dark:bg-gray-800' : ''
                }`}
              >
                <span className="w-6">{option.flagEmoji}</span>
                <span className="flex-grow">{option.nativeLabel}</span>
                {currentLanguage === option.value && <CheckIcon className="h-4 w-4" />}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Default header variant
  return (
    <div className="relative min-w-[120px]" ref={dropdownRef}>
      <button
        className={`flex items-center justify-between px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors w-full ${
          isOpen ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('languageSelector')}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="flex items-center space-x-2">
          {currentOption.flagEmoji && <span className="text-base">{currentOption.flagEmoji}</span>}
          <span className={`${isMobile ? 'hidden' : 'block'}`}>
            {variant === 'full' ? currentOption.label : currentOption.nativeLabel}
          </span>
          <span className={`${isMobile ? 'block' : 'hidden'}`}>
            {currentOption.nativeLabel}
          </span>
        </div>
        <ChevronDown className="h-4 w-4 opacity-70" />
      </button>

      {isOpen && (
        <div className={`absolute z-50 top-full mt-1 ${isRTL ? 'right-0' : 'left-0'} w-full min-w-[180px] bg-white dark:bg-gray-900 rounded-lg shadow-lg py-1 border border-gray-200 dark:border-gray-700 max-h-[60vh] overflow-y-auto`}>
          {languageOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleLanguageChange(option.value)}
              className={`w-full text-left px-3 py-2 text-sm flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 ${
                currentLanguage === option.value ? 'bg-gray-100 dark:bg-gray-800' : ''
              }`}
            >
              <div className="flex items-center space-x-2 flex-1">
                {option.flagEmoji && <span className="text-base">{option.flagEmoji}</span>}
                <div>
                  <span>{option.nativeLabel}</span>
                  {variant === 'full' && option.label !== option.nativeLabel && (
                    <span className="text-gray-500 text-xs block"> {option.label}</span>
                  )}
                </div>
              </div>
              {currentLanguage === option.value && <CheckIcon className="h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
