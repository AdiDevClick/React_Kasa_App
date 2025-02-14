import { useState } from "react";

export function useActivePage() {
    const [activePage, setActivePage] = useState(null);
    return { active: activePage, setActivePage: () => setActivePage() };
}
