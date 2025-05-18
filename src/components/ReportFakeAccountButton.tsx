
import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const ReportFakeAccountButton = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    navigate('/reports');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleClick}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onFocus={() => setExpanded(true)}
        onBlur={() => setExpanded(false)}
        className="group flex items-center gap-2 bg-india-navyBlue text-white rounded-full shadow-lg hover:bg-india-navyBlue/90 transition-all duration-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-india-navyBlue/50"
        aria-label={t('reportFakeAccount')}
        data-testid="report-fake-account-button"
      >
        <AlertTriangle className="h-5 w-5 flex-shrink-0" />
        <span 
          className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${
            expanded ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0 md:max-w-[200px] md:opacity-100'
          }`}
        >
          {t('reportFakeAccount')}
        </span>
      </button>
    </div>
  );
};

export default ReportFakeAccountButton;
