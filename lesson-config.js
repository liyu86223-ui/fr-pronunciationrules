export const lessonConfig = {
  id: 'er-pronunciation',
  title: '字母“er”的发音规则',
  targetPhonemes: ['/ɛr/'],
  coreSpellings: { '/ɛr/': ['er'] },
  ui: {
    optionAudio: true,
    submitRequired: true,
    shuffleOptions: true,
    speakingMode: 'fake',
    autoPlayExplanationVideo: false
  },
  sequence: [
    {
      id: 'match-mer-fer',
      type: 'matching',
      prompt: '匹配发音及单词：',
      pairs: [
        { id: 'mer', word: 'mer', audio: 'mer' },
        { id: 'fer', word: 'fer', audio: 'fer' }
      ],
      correctSound: 'correct-speak',
      shuffle: true
    },
    {
      id: 'explain-final-er',
      type: 'phoneme-explanation',
      grapheme: 'er',
      phoneme: '/ɛr/',
      phonemeAudio: 'phoneme-epsilon-r',
      explanation: '在法语中，字母“er”有两种不同的发音。除了你学过的 /e/ 之外，在一些较短的单词词尾，字母“er”的发音为 /ɛr/，比如 mer、fer。',
      video: 'assets/er-course-er-word-final-mouth-guide-v2.mov'
    },
    {
      id: 'choose-amer',
      type: 'binary-pronunciation-choice',
      prompt: '选出下列单词正确的发音：',
      word: { text: 'amer', audio: 'amer' },
      options: [
        { id: 'amer-correct', audio: 'amer', label: '/amɛr/', correct: true },
        { id: 'amer-ame', audio: 'amer-distractor', label: '/ame/', correct: false }
      ],
      shuffleOptions: true,
      submitRequired: true,
      correctSound: 'correct-speak'
    },
    {
      id: 'explain-medial-er',
      type: 'spelling-family',
      phoneme: '/ɛr/',
      explanation: '除了较短的单词词尾之外，字母“er”出现在词中时，通常也读 /ɛr/。',
      items: [
        { grapheme: 'er', example: 'herbe', audio: 'herbe' }
      ]
    },
    {
      id: 'choose-perdu',
      type: 'binary-pronunciation-choice',
      prompt: '选出下列单词正确的发音：',
      word: { text: 'perdu', audio: 'perdu' },
      options: [
        { id: 'perdu-correct', audio: 'perdu', label: '/pɛʁdy/', correct: true },
        { id: 'perdu-pedu', audio: 'perdu-distractor', label: '/pedu/', correct: false }
      ],
      shuffleOptions: true,
      submitRequired: true,
      correctSound: 'correct-speak'
    },
    {
      id: 'confirm-er-rules',
      type: 'phoneme-multiselect',
      targetPhoneme: '/ɛr/',
      targetAudio: 'phoneme-epsilon-r',
      options: [
        { text: 'parler', audio: 'parler', correct: false },
        { text: 'service', audio: 'service', correct: true },
        { text: 'cher', audio: 'cher', correct: true }
      ],
      correctWords: ['service', 'cher'],
      shuffle: true,
      multiSelect: true,
      correctSound: 'correct-speak'
    },
    {
      id: 'speak-ver',
      type: 'speaking-practice',
      word: 'ver',
      ipa: '/vɛr/',
      targetGrapheme: 'er',
      audio: 'ver'
    },
    {
      id: 'speak-merci',
      type: 'speaking-practice',
      word: 'merci',
      ipa: '/mɛʁsi/',
      targetGrapheme: 'er',
      audio: 'merci'
    }
  ]
};
