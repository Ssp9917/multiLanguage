import React, { useState, useTransition } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageDetector = () => {
  // State to track the selected language
  const [selectedLanguage, setSelectedLanguage] = useState('Select Language');

  const languages = [
    { code: 'en', lang: 'English' },
    { code: 'fr', lang: 'French' },
    { code: 'hi', lang: 'Hindi' }
  ];

  const {i18n} = useTranslation()

  // Handle language selection
  const handleLanguageSelect = (event) => {
    const selectedLang = languages.find((lang) => lang.code === event.target.value);
    setSelectedLanguage(selectedLang.lang);
    // Simulating i18n language change
    console.log(`Language changed to: ${selectedLang.lang}`);
    i18n.changeLanguage(selectedLang.code); // Uncomment this when using i18n
  };

  return (
    <div className="flex justify-end items-center">
      <div className="w-64">
        <label htmlFor="language" className="block text-sm font-medium text-gray-700">
          Choose Language
        </label>
        <select
          id="language"
          value={selectedLanguage === 'Select Language' ? '' : languages.find(lang => lang.lang === selectedLanguage)?.code}
          onChange={handleLanguageSelect}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>
            {selectedLanguage}
          </option>
          {languages.map((language) => (
            <option key={language.code} value={language.code}>
              {language.lang}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LanguageDetector;
