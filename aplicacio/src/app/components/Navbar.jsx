'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Briefcase, Book, Github, Globe } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState('castellano');
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const [translations, setTranslations] = useState({
        lenguajes: { text: 'Lenguajes', key: 'section-lenguajes' },
        idiomas: { text: 'Idiomas', key: 'section-idiomas' },
        estudios: { text: 'Estudios', key: 'section-estudios' },
        experiencia: { text: 'Experiencia', key: 'section-experiencia' }
    });

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'castellano';
        updateLanguage(savedLanguage);

        const handleLanguageChange = () => {
            const newLanguage = localStorage.getItem('language') || 'castellano';
            updateLanguage(newLanguage);
        };

        window.addEventListener('languageChanged', handleLanguageChange);
        return () => window.removeEventListener('languageChanged', handleLanguageChange);
    }, []);

    const updateLanguage = (lang) => {
        setLanguage(lang);
        updateTranslations(lang);
    };

    const updateTranslations = (lang) => {
        switch (lang) {
            case 'catalan':
                setTranslations({
                    lenguajes: { text: 'Llenguatges', key: 'section-lenguatges' },
                    idiomas: { text: 'Idiomes', key: 'section-idiomes' },
                    estudios: { text: 'Estudis', key: 'section-estudis' },
                    experiencia: { text: 'Experiència', key: 'section-experiencia' }
                });
                break;
            case 'ingles':
                setTranslations({
                    lenguajes: { text: 'Tech Stack', key: 'section-techstack' },
                    idiomas: { text: 'Languages', key: 'section-languages' },
                    estudios: { text: 'Education', key: 'section-education' },
                    experiencia: { text: 'Experience', key: 'section-experience' }
                });
                break;
            default:
                setTranslations({
                    lenguajes: { text: 'Lenguajes', key: 'section-lenguajes' },
                    idiomas: { text: 'Idiomas', key: 'section-idiomas' },
                    estudios: { text: 'Estudios', key: 'section-estudios' },
                    experiencia: { text: 'Experiencia', key: 'section-experiencia' }
                });
        }
    };

    const menuItems = [
        {
            name: translations.lenguajes.text,
            key: translations.lenguajes.key,
            icon: <Globe size={20} />,
            href: '#lenguajes'
        },
        {
            name: translations.idiomas.text,
            key: translations.idiomas.key,
            icon: <Book size={20} />,
            href: '#idiomas'
        },
        {
            name: translations.estudios.text,
            key: translations.estudios.key,
            icon: <GraduationCap size={20} />,
            href: '#estudios'
        },
        {
            name: translations.experiencia.text,
            key: translations.experiencia.key,
            icon: <Briefcase size={20} />,
            href: '#experiencia'
        },
    ];

    const socialLinks = [
        { icon: <Github size={20} />, href: '#' },
    ];

    const languageOptions = [
        { code: 'castellano', name: 'Español' },
        { code: 'catalan', name: 'Català' },
        { code: 'ingles', name: 'English' }
    ];

    const handleLanguageChange = (newLanguage) => {
        localStorage.setItem('language', newLanguage);
        setShowLanguageDropdown(false);
        window.dispatchEvent(new Event('languageChanged'));
    };

    return (
        <nav className="fixed w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <span>
                            Last modification: 03/2025
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-6">
                            {menuItems.map((item) => (
                                <a key={item.key} href={item.href} className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors duration-200" >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center space-x-4 border-l pl-6 border-gray-200">
                            <div className="relative">
                                <button onClick={() => setShowLanguageDropdown(!showLanguageDropdown)} className="text-gray-700 hover:text-black transition-colors duration-200" >
                                    <Globe size={20} />
                                </button>
                                {showLanguageDropdown && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50">
                                        {languageOptions.map((option) => (
                                            <button key={option.code} onClick={() => handleLanguageChange(option.code)} className={`block px-4 py-2 text-sm w-full text-left ${language === option.code ? 'bg-gray-100' : 'hover:bg-gray-50' }`} >
                                                {option.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {socialLinks.map((link, index) => (
                                <a key={`social-${index}`} href={link.href} className="text-gray-700 hover:text-black transition-colors duration-200" >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-black focus:outline-none" >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={` absolute top-16 left-0 right-0 w-full bg-white border-t md:hidden transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'} `}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {menuItems.map((item) => (
                        <a key={item.key} href={item.href} className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-50" onClick={() => setIsOpen(false)} >
                            {item.icon}
                            <span>{item.name}</span>
                        </a>
                    ))}
                    <div className="px-3 py-2">
                        <div className="text-gray-700 px-2 py-1 mb-2">
                            {language === 'castellano' ? 'Idioma' :
                                language === 'catalan' ? 'Idioma' : 'Language'}:
                        </div>
                        {languageOptions.map((option) => (
                            <button key={option.code} onClick={() => {
                                    handleLanguageChange(option.code);
                                    setIsOpen(false);
                                }} className={`flex items-center space-x-2 px-3 py-2 rounded-md w-full text-left ${language === option.code ? 'bg-gray-100' : 'hover:bg-gray-50' }`} >
                                <span>{option.name}</span>
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4 px-3 py-2 border-t border-gray-200">
                        {socialLinks.map((link, index) => (
                            <a key={`mobile-social-${index}`} href={link.href} className="text-gray-700 hover:text-black transition-colors duration-200" onClick={() => setIsOpen(false)} >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;