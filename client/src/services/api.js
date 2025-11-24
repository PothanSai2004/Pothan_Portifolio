const API_URL = 'https://pothan-portifolio.onrender.com/api';
// const API_URL = 'http://localhost:5000/api';

export const api = {
    async getData() {
        const response = await fetch(`${API_URL}/data`);
        if (!response.ok) throw new Error('Failed to fetch data');
        return response.json();
    },

    async updateData(data) {
        const response = await fetch(`${API_URL}/data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to update data');
        return response.json();
    },

    async sendMessage(contactData) {
        const response = await fetch(`${API_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData),
        });
        if (!response.ok) throw new Error('Failed to send message');
        return response.json();
    },

    async getMessages() {
        const response = await fetch(`${API_URL}/messages`);
        if (!response.ok) throw new Error('Failed to fetch messages');
        return response.json();
    },

    async deleteMessage(id) {
        const response = await fetch(`${API_URL}/messages/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete message');
        return response.json();
    }
};
