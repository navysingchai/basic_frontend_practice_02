import * as api from '../../lib/api.js';

const loadQuotes = async () => {
    try {
        const res = await api.GET(`${import.meta.env.VITE_API_BASE_URL}/quotes`);
        return res;
    }catch(e) {
        alert(e.message ?? e);
    }
};

export { loadQuotes };