import sendRequest from './send-request';

const BASE_URL = `/api/notes`;

export default function getAll() {
    return sendRequest(BASE_URL);
}
