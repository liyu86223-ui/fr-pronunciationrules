export const audioManifest = {
  'correct-speak': {
    text: '',
    language: null,
    voice: null,
    provider: 'local-ui',
    role: 'correct-feedback',
    path: 'audio/ui-feedback-correct-speak.mp3',
    allowFallback: false
  },
  mer: denise('mer', 'matching-word', 'audio/er-course-mer-denise.mp3'),
  fer: denise('fer', 'matching-word', 'audio/er-course-fer-denise.mp3'),
  'phoneme-epsilon-r': denise('ɛr', 'phoneme-model', 'audio/er-course-phoneme-epsilon-r-denise.mp3'),
  amer: denise('amer', 'binary-correct', 'audio/er-course-amer-correct-denise.mp3'),
  'amer-distractor': denise('amé', 'binary-distractor', 'audio/er-course-amer-distractor-ame-denise-v2.mp3'),
  herbe: denise('herbe', 'spelling-example', 'audio/er-course-herbe-correct-denise.mp3'),
  perdu: denise('perdu', 'binary-correct', 'audio/er-course-perdu-denise.mp3'),
  'perdu-distractor': denise('pedu', 'binary-distractor', 'audio/er-course-pedu-distractor-denise.mp3'),
  parler: denise('parler', 'multiselect-distractor', 'audio/er-course-parler-denise.mp3'),
  service: denise('service', 'multiselect-correct', 'audio/er-course-service-denise.mp3'),
  cher: denise('cher', 'multiselect-correct', 'audio/er-course-cher-denise.mp3'),
  ver: denise('ver', 'speaking-model', 'audio/er-course-ver-denise.mp3'),
  merci: denise('merci', 'speaking-model', 'audio/er-course-merci-denise.mp3')
};

function denise(text, role, path) {
  return {
    text,
    language: 'fr-FR',
    voice: 'fr-FR-DeniseNeural',
    provider: 'Microsoft Azure Speech',
    role,
    path,
    allowFallback: false
  };
}
