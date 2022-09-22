const STORAGE_KEY = "user";

const LOCAL_SERVICE = {
    user: {
        set: (dataLogin) => localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLogin)),
        get: () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || null,
        unset: () => localStorage.removeItem(STORAGE_KEY),
    },
}

export {LOCAL_SERVICE}