/**
 * @description Déprécié - Utilisé pour gérer la page active dans le menu de navigation
 * Créé par Adrien Quijo
 *
 * V 1.0.0
 */

import { useState } from 'react';

export function useActivePage() {
    const [activePage, setActivePage] = useState(null);
    return { active: activePage, setActivePage: () => setActivePage() };
}
