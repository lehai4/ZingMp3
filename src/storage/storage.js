const TODOS_STORAGE_KEY = "songCurrent";
export default {
  getSongCurrent() {
    return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || [];
  },
  setSongCurrent(songNew) {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(songNew));
  },
};
