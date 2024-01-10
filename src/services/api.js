import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.github.com/repos/',

    Authorization: `Bearer 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`,
});
