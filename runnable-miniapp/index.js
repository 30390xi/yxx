var e = require("./api/ai_manager.js"),
  a = require("./api/ai_translation.js"),
  t = require("./api/ai_tts.js");
module.exports = {
  getRecordRecognitionManager: e.getRecordRecognitionManager,
  translate: a.translate,
  textToSpeech: t.textToSpeech
};
