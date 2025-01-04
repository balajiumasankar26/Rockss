import axios from 'axios';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/Gemini2.0FlashExperimental';

export const generateContent = async (prompt) => {
    try {
        const response = await axios.post(`${BASE_URL}/generateContent`, {
            prompt: prompt,
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
