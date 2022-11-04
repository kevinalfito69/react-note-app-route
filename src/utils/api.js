const BASE_URL = "https://notes-api.dicoding.dev/v1";

const getAccessToken = () => {
    return localStorage.getItem("accessToken");
};
const putAccessToken = (accessToken) => {
    return localStorage.setItem("accessToken", accessToken);
};

async function fetchWithToken(url, option = {}) {
    return fetch(url, {
        ...option,
        headers: {
            ...option.headers,
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });
}
async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    const responseJson = await response.json();
    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true, data: null };
    }
    return { error: false, data: responseJson.data };
}
async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}
async function getUserLogged() {
    const response = await fetchWithToken(`${BASE_URL}/users/me`);
    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}
async function createNotes({ title, body }) {
    const response = await fetchWithToken(`${BASE_URL}/notes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}
async function getNotes() {
    const response = await fetchWithToken(`${BASE_URL}/notes`);
    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true, data: [] };
    }

    return { error: false, data: responseJson.data };
}
async function getArchiveNotes() {
    const response = await fetchWithToken(`${BASE_URL}/notes/archived`);
    const responseJson = await response.json();
    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true, data: [] };
    }

    return { error: false, data: responseJson.data };
}
async function getDetailNotes(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}`);
    const responseJson = await response.json();
    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true, data: [] };
    }
    return { error: false, data: responseJson.data };
}
async function deleteNotes(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
        method: "DELETE",
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true };
    }
    return { error: false };
}
async function archiveNotes(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
        method: "POST",
    });
    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true };
    }
    return { error: false };
}
export {
    login,
    register,
    getNotes,
    getDetailNotes,
    getArchiveNotes,
    createNotes,
    archiveNotes,
    deleteNotes,
    getAccessToken,
    getUserLogged,
    putAccessToken,
};
