const getters = {
  alias: localStorage.alias,
  shortenerProvider: localStorage.shortenerProvider,
  shortApiKey: localStorage.shortApiKey,
  shortUsername: localStorage.shortUsername,
  shortVanity: localStorage.shortVanity
};

const actions = {
  saveAlias: (data) => { localStorage.alias = data },
  saveShortProvider : (data) => { localStorage.shortenerProvider = data },
  saveShortApiKey : (data) => { localStorage.shortApiKey = data },
  saveShortUsername: (data) => { localStorage.shortUsername = data },
  saveShortVanity: (data) => { localStorage.shortVanity = data }
}

const storage = {
  getters,
  actions
}
export {
  storage as default
};