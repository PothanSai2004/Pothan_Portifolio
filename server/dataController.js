const fs = require('fs').promises;
const path = require('path');

const DATA_PATH = path.join(__dirname, '../data/portfolio.json');
const MESSAGES_PATH = path.join(__dirname, '../data/messages.json');

async function getData() {
    try {
        const data = await fs.readFile(DATA_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data:', error);
        throw error;
    }
}

async function updateData(newData) {
    try {
        await fs.writeFile(DATA_PATH, JSON.stringify(newData, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing data:', error);
        throw error;
    }
}

async function getMessages() {
    try {
        const data = await fs.readFile(MESSAGES_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // If file doesn't exist, return empty array
        return [];
    }
}

async function saveMessage(message) {
    try {
        const messages = await getMessages();
        messages.push({
            id: Date.now(),
            timestamp: new Date().toISOString(),
            ...message
        });
        await fs.writeFile(MESSAGES_PATH, JSON.stringify(messages, null, 2), 'utf8');
    } catch (error) {
        console.error('Error saving message:', error);
        throw error;
    }
}

async function deleteMessage(id) {
    try {
        const messages = await getMessages();
        const filteredMessages = messages.filter(msg => msg.id !== parseInt(id));
        await fs.writeFile(MESSAGES_PATH, JSON.stringify(filteredMessages, null, 2), 'utf8');
    } catch (error) {
        console.error('Error deleting message:', error);
        throw error;
    }
}

module.exports = { getData, updateData, getMessages, saveMessage, deleteMessage };
