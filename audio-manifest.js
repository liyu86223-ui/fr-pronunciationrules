const microsoftDenise = { language: 'fr-FR', voice: 'fr-FR-DeniseNeural', provider: 'microsoft', fallbackAllowed: false };

export const audioManifest = {
  mer: { ...microsoftDenise, text: 'mer', role: 'matching-audio', path: 'audio/er-course-mer-denise.mp3' },
  fer: { ...microsoftDenise, text: 'fer', role: 'matching-audio', path: 'audio/er-course-fer-denise.mp3' },
  ter: { ...microsoftDenise, text: 'ter', role: 'word-reference', path: 'audio/er-course-ter-correct-denise.mp3' },
  'ter-distractor': { ...microsoftDenise, text: 'té', role: 'distractor-/te/', path: 'audio/er-course-ter-distractor-te-denise.mp3' },
  ferme: { ...microsoftDenise, text: 'ferme', role: 'matching-and-explanation', path: 'audio/er-course-ferme-denise.mp3' },
  vertu: { ...microsoftDenise, text: 'vertu', role: 'matching-and-explanation', path: 'audio/er-course-vertu-denise.mp3' },
  perdu: { ...microsoftDenise, text: 'perdu', role: 'word-reference', path: 'audio/er-course-perdu-denise.mp3' },
  'perdu-distractor': { ...microsoftDenise, text: 'pedu', role: 'distractor-/pedu/', path: 'audio/er-course-pedu-distractor-denise.mp3' },
  parler: { ...microsoftDenise, text: 'parler', role: 'rule-confirmation', path: 'audio/er-course-parler-denise.mp3' },
  service: { ...microsoftDenise, text: 'service', role: 'rule-confirmation', path: 'audio/er-course-service-denise.mp3' },
  cher: { ...microsoftDenise, text: 'cher', role: 'rule-confirmation', path: 'audio/er-course-cher-denise.mp3' },
  ver: { ...microsoftDenise, text: 'ver', role: 'speaking-reference', path: 'audio/er-course-ver-denise.mp3' },
  merci: { ...microsoftDenise, text: 'merci', role: 'speaking-reference', path: 'audio/er-course-merci-denise.mp3' },
  'phoneme-epsilon-r': { ...microsoftDenise, text: 'er', role: 'phoneme-reference', path: 'audio/er-course-phoneme-epsilon-r-denise.mp3' },
  'correct-speak': { text: 'correct', language: 'und', voice: 'UI', provider: 'local', fallbackAllowed: false, role: 'feedback', path: 'audio/ui-feedback-correct-speak.mp3' },
};
