export default {
  state: {
    sourcePage: "",
    lastType: "",
    userLog: [],
    systemInfo: {}
  },
  getters: {
    sourcePage: state => state.sourcePage,
    userLog: state => state.userLog,
    systemInfo: state => state.systemInfo,
    lastType: state => state.lastType
  },
  mutations: {
    SET_SOURCE_PAGE: (state, page) => {
      state.sourcePage = page;
    },
    SET_USERLOG: (state, log) => {
      state.userLog = log;
    },
    SET_SYSTEM: (state, sys) => {
      state.systemInfo = sys;
    },
    SET_LASTTYPE: (state, type) => {
      state.lastType = type;
    }
  },
  actions: {}
};
