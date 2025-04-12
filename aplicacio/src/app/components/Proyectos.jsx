'use client';
import React, { useState, useEffect } from 'react';
import { Github, X } from 'lucide-react';

const Proyectos = () => {
    const [language, setLanguage] = useState('castellano');
    const [data, setData] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'castellano';
        setLanguage(savedLanguage);

        const handleLanguageChange = () => {
            const newLanguage = localStorage.getItem('language') || 'castellano';
            setLanguage(newLanguage);
        };

        window.addEventListener('languageChanged', handleLanguageChange);
        return () => window.removeEventListener('languageChanged', handleLanguageChange);
    }, []);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await import(`../json/proyectos/${language}.json`);
                setData(response.default);
            } catch (e) {
                const fallback = await import('../json/proyectos/castellano.json');
                setData(fallback.default);
            }
        };

        loadData();
    }, [language]);

    const handleProjectClick = (proyecto) => {
        setSelectedProject(proyecto);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    if (!data) {
        return <div className="m-auto py-12 text-black">Cargando...</div>;
    }

    return (
        <div className="m-auto py-12 text-black">
            <h2 className="text-3xl font-bold border-b-2 border-black pb-2">{data.titulo}</h2>
            <div className="mt-6 w-[95%] m-auto space-y-4">
                {data.proyectos.map((proyecto, index) => (
                    <div key={index} className="border border-blue-500 w-[95%] flex">
                        <div className='p-5 flex-1'>
                            <h3 className="text-xl font-semibold">{proyecto.titulo}</h3>
                            <p className="text-gray-600 prose text-justify whitespace-pre-line">
                                {proyecto.descripcion}
                            </p>
                            <div className='flex items-center gap-4'>
                                <button
                                    onClick={() => handleProjectClick(proyecto)}
                                    className="px-4 py-1 cursor-pointer mt-2 text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-200"
                                >
                                    {proyecto.boton}
                                </button>
                                <a
                                    href={proyecto.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-black transition-colors duration-200"
                                >
                                    <Github className='w-6 h-6 hover:text-gray-400 cursor-pointer transition duration-200' />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Pop-up */}
            {showModal && selectedProject && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
                    <div className="bg-white max-w-4xl  max-h-[90vh] overflow-auto flex flex-col">
                        <div className="">
                            {selectedProject.video ? (
                                <div className="w-full max-w-2xl mx-auto">
                                    <div
                                        className="relative pb-[56.25%] h-0"
                                        dangerouslySetInnerHTML={{ __html: selectedProject.video }}
                                    />
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <p>Not available</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Proyectos;