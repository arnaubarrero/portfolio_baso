import React, { useState, useEffect } from 'react';

const Lenguajes = () => {
    const [language, setLanguage] = useState('castellano');
    const [texts, setTexts] = useState({
        title: "Lenguajes",
        estetica: "Estética",
        database: "Base de Datos"
    });

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'castellano';
        setLanguage(savedLanguage);
        updateTexts(savedLanguage);

        const handleLanguageChange = () => {
            const newLanguage = localStorage.getItem('language') || 'castellano';
            setLanguage(newLanguage);
            updateTexts(newLanguage);
        };

        window.addEventListener('languageChanged', handleLanguageChange);
        return () => window.removeEventListener('languageChanged', handleLanguageChange);
    }, []);

    const updateTexts = (lang) => {
        switch (lang) {
            case 'catalan':
                setTexts({
                    title: "Llenguatges",
                    estetica: "Estètica",
                    database: "Base de Dades"
                });
                break;
            case 'ingles':
                setTexts({
                    title: "Languages",
                    estetica: "Styling",
                    database: "Database"
                });
                break;
            default:
                setTexts({
                    title: "Lenguajes",
                    estetica: "Estética",
                    database: "Base de Datos"
                });
        }
    };

    const frontendItems = [
        { name: 'NEXTjs', icon: <img width="30" height="30" src="https://img.icons8.com/fluency/30/nextjs.png" alt="nextjs" /> },
        { name: 'VUEjs', icon: <img width="30" height="30" src="https://img.icons8.com/fluency/30/vuejs.png" alt="vuejs" /> },
        { name: 'NUXTjs', icon: <img width="30" height="30" src="https://img.icons8.com/color/30/nuxt-jc.png" alt="nuxt-jc" /> },
        { name: 'HTML', icon: <img width="30" height="30" src="https://img.icons8.com/ios/50/html.png" alt="html" /> },
        { name: 'Javascript', icon: <img width="30" height="30" src="https://img.icons8.com/color/30/javascript--v1.png" alt="javascript--v1" /> }
    ];

    const backendItems = [
        { name: 'Laravel', icon: <img width="30" height="30" src="https://img.icons8.com/arcade/30/laravel.png" alt="laravel" /> },
        { name: 'Solidity', icon: <img width="30" height="30" src="https://img.icons8.com/color-glass/30/solidity.png" alt="solidity" /> },
        { name: 'PHP', icon: <img width="30" height="30" src="https://img.icons8.com/ios/30/php.png" alt="php" /> },
        { name: 'Java', icon: <img width="30" height="30" src="https://img.icons8.com/fluency/30/java-coffee-cup-logo.png" alt="java-coffee-cup-logo" /> },
        { name: 'Node.js', icon: <img width="30" height="30" src="https://img.icons8.com/fluency/30/node-js.png" alt="node-js" /> }
    ];

    const esteticaItems = [
        { name: 'Tailwind', icon: <img width="30" height="30" src="https://img.icons8.com/color/30/tailwind_css.png" alt="tailwind_css" /> },
        { name: 'CSS', icon: <img width="30" height="30" src="https://img.icons8.com/ios/30/css.png" alt="css" /> },
        { name: 'Bootstrap', icon: <img width="30" height="30" src="https://img.icons8.com/ios/30/bootstrap.png" alt="bootstrap" /> }
    ];

    const databaseItems = [
        { name: 'MySQL', icon: <img width="30" height="30" src="https://img.icons8.com/color/30/my-sql.png" alt="my-sql" /> }
    ];

    return (
        <div >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 border-b-2 border-black pb-2">
                    {texts.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Frontend Section */}
                    <div className="backdrop-blur-sm p-6 shadow-xl hover:cursor-pointer hover:border-gray-500 border-1 border-white transition-[2s]">
                        <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                Frontend
                            </span>
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {frontendItems.map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 rounded-full px-3 py-1 border border-blue-500 hover:bg-blue-200 text-black transition-all duration-300 cursor-pointer">
                                    <div className="flex-shrink-0">{item.icon}</div>
                                    <span className="text-black font-medium">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend Section */}
                    <div className="backdrop-blur-sm p-6 shadow-xl hover:cursor-pointer hover:border-gray-500 border-1 border-white transition-[2s]">
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Backend
                            </span>
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {backendItems.map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 rounded-full px-3 py-1 border border-blue-500 hover:bg-blue-200 text-black transition-all duration-300 cursor-pointer">
                                    <div className="flex-shrink-0">{item.icon}</div>
                                    <span className="text-black font-medium">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Estética Section */}
                    <div className="backdrop-blur-sm p-6 shadow-xl hover:cursor-pointer hover:border-gray-500 border-1 border-white transition-[2s]">
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                                {texts.estetica}
                            </span>
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {esteticaItems.map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 rounded-full px-3 py-1 border border-blue-500 hover:bg-blue-200 text-black transition-all duration-300 cursor-pointer">
                                    <div className="flex-shrink-0">{item.icon}</div>
                                    <span className="text-black font-medium">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Database Section */}
                    <div className="backdrop-blur-sm p-6 shadow-xl hover:cursor-pointer hover:border-gray-500 border-1 border-white transition-[2s]">
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                                {texts.database}
                            </span>
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {databaseItems.map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 rounded-full px-3 py-1 border border-blue-500 hover:bg-blue-200 text-black transition-all duration-300 cursor-pointer">
                                    <div className="flex-shrink-0">{item.icon}</div>
                                    <span className="text-black font-medium">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lenguajes;