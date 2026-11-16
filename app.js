const vocabularyData = [
  {
    letter: "A",
    word: "archaic",
    phonetic: "/ɑːˈkeɪ.ɪk/",
    meaning: "古風的、古體的；充滿古典韻味的",
    quoteEn: "Thy words are archaic, yet thy passion rings eternal.",
    quoteZh: "你的言辭雖帶古風，但你的熱情卻永世迴響。",
    source: "Inspired by Shakespearean Sonnets",
    image: "assets/images/a-archaic.jpg",
    audioWord: "assets/audio/a-archaic-word.mp3",
    audioQuote: "assets/audio/a-archaic-quote.mp3"
  },
  {
    letter: "B",
    word: "brevity",
    phonetic: "/ˈbrev.ə.ti/",
    meaning: "簡潔、精煉（智慧的靈魂）",
    quoteEn: "Brevity is the soul of wit.",
    quoteZh: "簡潔是智慧的靈魂。",
    source: "Hamlet, Act II, Scene 2",
    image: "assets/images/b-brevity.jpg",
    audioWord: "assets/audio/b-brevity-word.mp3",
    audioQuote: "assets/audio/b-brevity-quote.mp3"
  },
  {
    letter: "C",
    word: "cowardice",
    phonetic: "/ˈkaʊ.ə.dɪs/",
    meaning: "懦弱、膽怯",
    quoteEn: "Cowards die many times before their deaths; the valiant never taste of death but once.",
    quoteZh: "懦夫在真正死前已死過無數次；勇者一生只嘗一次死亡的滋味。",
    source: "Julius Caesar, Act II, Scene 2",
    image: "assets/images/c-cowardice.jpg",
    audioWord: "assets/audio/c-cowardice-word.mp3",
    audioQuote: "assets/audio/c-cowardice-quote.mp3"
  },
  {
    letter: "D",
    word: "doth",
    phonetic: "/dʌθ/",
    meaning: "（古英語）做、確實（does 的古體）",
    quoteEn: "The lady doth protest too much, methinks.",
    quoteZh: "依我看，這位女士未免表白得太過頭了。",
    source: "Hamlet, Act III, Scene 2",
    image: "assets/images/d-doth.jpg",
    audioWord: "assets/audio/d-doth-word.mp3",
    audioQuote: "assets/audio/d-doth-quote.mp3"
  },
  {
    letter: "E",
    word: "ere",
    phonetic: "/eər/",
    meaning: "（古英語・詩歌）在……之前",
    quoteEn: "Ere the bat hath flown his cloistered flight.",
    quoteZh: "在蝙蝠尚未飛完牠幽暗修道院迴廊的夜航之前。",
    source: "Macbeth, Act III, Scene 2",
    image: "assets/images/e-ere.jpg",
    audioWord: "assets/audio/e-ere-word.mp3",
    audioQuote: "assets/audio/e-ere-quote.mp3"
  },
  {
    letter: "F",
    word: "frailty",
    phonetic: "/ˈfreɪl.ti/",
    meaning: "脆弱、薄弱、人性弱點",
    quoteEn: "Frailty, thy name is woman!",
    quoteZh: "脆弱啊，你的名字是女人！",
    source: "Hamlet, Act I, Scene 2",
    image: "assets/images/f-frailty.jpg",
    audioWord: "assets/audio/f-frailty-word.mp3",
    audioQuote: "assets/audio/f-frailty-quote.mp3"
  },
  {
    letter: "G",
    word: "gilded",
    phonetic: "/ˈɡɪl.dɪd/",
    meaning: "鍍金的、金碧輝煌的、華而不實的",
    quoteEn: "To gild refined gold, to paint the lily, is wasteful and ridiculous excess.",
    quoteZh: "為純金鍍金、為百合塗彩，皆是荒唐多餘的浪費。",
    source: "King John, Act IV, Scene 2",
    image: "assets/images/g-gilded.jpg",
    audioWord: "assets/audio/g-gilded-word.mp3",
    audioQuote: "assets/audio/g-gilded-quote.mp3"
  },
  {
    letter: "H",
    word: "hark",
    phonetic: "/hɑːk/",
    meaning: "（古英語）傾聽、仔細聽",
    quoteEn: "Hark, hark! the lark at heaven's gate sings.",
    quoteZh: "聽啊，聽啊！雲雀正在天堂之門前歌唱。",
    source: "Cymbeline, Act II, Scene 3",
    image: "assets/images/h-hark.jpg",
    audioWord: "assets/audio/h-hark-word.mp3",
    audioQuote: "assets/audio/h-hark-quote.mp3"
  },
  {
    letter: "I",
    word: "idle",
    phonetic: "/ˈaɪ.dəl/",
    meaning: "閒散的、虛幻的、無所事事的",
    quoteEn: "True is it that we have seen better days, and have with holy bell been knolled to church.",
    quoteZh: "誠然我們曾見過更美好的歲月，也曾伴隨神聖鐘聲步入教堂。",
    source: "As You Like It, Act II, Scene 7",
    image: "assets/images/i-idle.jpg",
    audioWord: "assets/audio/i-idle-word.mp3",
    audioQuote: "assets/audio/i-idle-quote.mp3"
  },
  {
    letter: "J",
    word: "jest",
    phonetic: "/dʒest/",
    meaning: "玩笑、戲謔、嘲弄",
    quoteEn: "He jests at scars that never felt a wound.",
    quoteZh: "從未受過傷的人，才會嘲笑別人的傷疤。",
    source: "Romeo and Juliet, Act II, Scene 2",
    image: "assets/images/j-jest.jpg",
    audioWord: "assets/audio/j-jest-word.mp3",
    audioQuote: "assets/audio/j-jest-quote.mp3"
  },
  {
    letter: "K",
    word: "kinsman",
    phonetic: "/ˈkɪnz.mən/",
    meaning: "親族、同胞、血親",
    quoteEn: "A little more than kin, and less than kind.",
    quoteZh: "比親戚多了一層，卻比親人少了一分情義。",
    source: "Hamlet, Act I, Scene 2",
    image: "assets/images/k-kinsman.jpg",
    audioWord: "assets/audio/k-kinsman-word.mp3",
    audioQuote: "assets/audio/k-kinsman-quote.mp3"
  },
  {
    letter: "L",
    word: "lament",
    phonetic: "/ləˈment/",
    meaning: "哀悼、悲嘆、輓歌",
    quoteEn: "Wise men ne'er sit and wail their woes, but presently prevent the ways to wail.",
    quoteZh: "智者從不坐困愁城哀嘆不幸，而是即刻設法杜絕悲傷之源。",
    source: "Richard II, Act III, Scene 2",
    image: "assets/images/l-lament.jpg",
    audioWord: "assets/audio/l-lament-word.mp3",
    audioQuote: "assets/audio/l-lament-quote.mp3"
  },
  {
    letter: "M",
    word: "methinks",
    phonetic: "/mɪˈθɪŋks/",
    meaning: "（古英語）我認為、依我看來",
    quoteEn: "Methinks I see my father in my mind's eye.",
    quoteZh: "在我的心眼之中，我彷彿看見了我的父親。",
    source: "Hamlet, Act I, Scene 2",
    image: "assets/images/m-methinks.jpg",
    audioWord: "assets/audio/m-methinks-word.mp3",
    audioQuote: "assets/audio/m-methinks-quote.mp3"
  },
  {
    letter: "N",
    word: "naught",
    phonetic: "/nɔːt/",
    meaning: "（古英語）虛無、一無所有",
    quoteEn: "Nothing will come of nothing: speak again.",
    quoteZh: "一無所有只會換來一無所有：再說一次吧。",
    source: "King Lear, Act I, Scene 1",
    image: "assets/images/n-naught.jpg",
    audioWord: "assets/audio/n-naught-word.mp3",
    audioQuote: "assets/audio/n-naught-quote.mp3"
  },
  {
    letter: "O",
    word: "orison",
    phonetic: "/ˈɒr.ɪ.zən/",
    meaning: "（古英語）祈禱、禱告",
    quoteEn: "Nymph, in thy orisons be all my sins remembered.",
    quoteZh: "仙女啊，在妳的禱告中，請為我所有的罪孽祈求寬恕。",
    source: "Hamlet, Act III, Scene 1",
    image: "assets/images/o-orison.jpg",
    audioWord: "assets/audio/o-orison-word.mp3",
    audioQuote: "assets/audio/o-orison-quote.mp3"
  },
  {
    letter: "P",
    word: "parting",
    phonetic: "/ˈpɑː.tɪŋ/",
    meaning: "離別、分手、告別",
    quoteEn: "Good night, good night! Parting is such sweet sorrow.",
    quoteZh: "晚安，晚安！離別是如此甜蜜的憂傷。",
    source: "Romeo and Juliet, Act II, Scene 2",
    image: "assets/images/p-parting.jpg",
    audioWord: "assets/audio/p-parting-word.mp3",
    audioQuote: "assets/audio/p-parting-quote.mp3"
  },
  {
    letter: "Q",
    word: "quench",
    phonetic: "/kwentʃ/",
    meaning: "熄滅、止渴、平息",
    quoteEn: "Fire that's closest kept burns most of all; no water can quench true desire.",
    quoteZh: "被深藏的火焰燃燒得最烈；沒有任何流水能澆熄真正的渴望。",
    source: "The Two Gentlemen of Verona, Act I, Scene 2",
    image: "assets/images/q-quench.jpg",
    audioWord: "assets/audio/q-quench-word.mp3",
    audioQuote: "assets/audio/q-quench-quote.mp3"
  },
  {
    letter: "R",
    word: "revel",
    phonetic: "/ˈrev.əl/",
    meaning: "狂歡、宴樂、盛會",
    quoteEn: "Our revels now are ended. These our actors were all spirits.",
    quoteZh: "我們的狂歡如今已落幕。這些演員們原皆是精靈所化。",
    source: "The Tempest, Act IV, Scene 1",
    image: "assets/images/r-revel.jpg",
    audioWord: "assets/audio/r-revel-word.mp3",
    audioQuote: "assets/audio/r-revel-quote.mp3"
  },
  {
    letter: "S",
    word: "soliloquy",
    phonetic: "/səˈlɪl.ə.kwi/",
    meaning: "獨白、自言自語",
    quoteEn: "To be, or not to be, that is the question.",
    quoteZh: "生存還是毀滅，這是一個值得考慮的問題。",
    source: "Hamlet, Act III, Scene 1",
    image: "assets/images/s-soliloquy.jpg",
    audioWord: "assets/audio/s-soliloquy-word.mp3",
    audioQuote: "assets/audio/s-soliloquy-quote.mp3"
  },
  {
    letter: "T",
    word: "tempest",
    phonetic: "/ˈtem.pɪst/",
    meaning: "暴風雨、劇烈動盪",
    quoteEn: "What cares these roarers for the name of king?",
    quoteZh: "這些咆哮的狂浪哪裡在乎國王的名號？",
    source: "The Tempest, Act I, Scene 1",
    image: "assets/images/t-tempest.jpg",
    audioWord: "assets/audio/t-tempest-word.mp3",
    audioQuote: "assets/audio/t-tempest-quote.mp3"
  },
  {
    letter: "U",
    word: "undiscovered",
    phonetic: "/ˌʌn.dɪˈskʌv.əd/",
    meaning: "未知的、未經探索的",
    quoteEn: "The undiscovered country from whose bourn no traveller returns.",
    quoteZh: "那無人知曉的國度，從它的邊境從無旅人歸返。",
    source: "Hamlet, Act III, Scene 1",
    image: "assets/images/u-undiscovered.jpg",
    audioWord: "assets/audio/u-undiscovered-word.mp3",
    audioQuote: "assets/audio/u-undiscovered-quote.mp3"
  },
  {
    letter: "V",
    word: "valiant",
    phonetic: "/ˈvæl.i.ənt/",
    meaning: "英勇的、無畏的",
    quoteEn: "Virtue is bold, and goodness never fearful.",
    quoteZh: "美德總是無畏，善良從不膽怯。",
    source: "Measure for Measure, Act III, Scene 1",
    image: "assets/images/v-valiant.jpg",
    audioWord: "assets/audio/v-valiant-word.mp3",
    audioQuote: "assets/audio/v-valiant-quote.mp3"
  },
  {
    letter: "W",
    word: "wherefore",
    phonetic: "/ˈweə.fɔːr/",
    meaning: "（古英語）為何、為了什麼",
    quoteEn: "O Romeo, Romeo! wherefore art thou Romeo?",
    quoteZh: "啊，羅密歐，羅密歐！你為什麼偏偏是羅密歐？",
    source: "Romeo and Juliet, Act II, Scene 2",
    image: "assets/images/w-wherefore.jpg",
    audioWord: "assets/audio/w-wherefore-word.mp3",
    audioQuote: "assets/audio/w-wherefore-quote.mp3"
  },
  {
    letter: "X",
    word: "xanthic",
    phonetic: "/ˈzæn.θɪk/",
    meaning: "金黃色的、燦爛如夏日的",
    quoteEn: "Shall I compare thee to a summer's day? Thou art more lovely and more temperate.",
    quoteZh: "我能否將你比作夏日？你比夏日更可愛、更溫婉。",
    source: "Sonnet 18",
    image: "assets/images/x-xanthic.jpg",
    audioWord: "assets/audio/x-xanthic-word.mp3",
    audioQuote: "assets/audio/x-xanthic-quote.mp3"
  },
  {
    letter: "Y",
    word: "yonder",
    phonetic: "/ˈjɒn.dər/",
    meaning: "（古英語）在那邊、遠處的",
    quoteEn: "But, soft! what light through yonder window breaks?",
    quoteZh: "輕聲！那邊窗戶透出來的是什麼光芒？",
    source: "Romeo and Juliet, Act II, Scene 2",
    image: "assets/images/y-yonder.jpg",
    audioWord: "assets/audio/y-yonder-word.mp3",
    audioQuote: "assets/audio/y-yonder-quote.mp3"
  },
  {
    letter: "Z",
    word: "zeal",
    phonetic: "/ziːl/",
    meaning: "熱忱、虔誠、赤誠之心",
    quoteEn: "Had I but served my God with half the zeal I served my king.",
    quoteZh: "但願我侍奉上帝時，能有侍奉君王一半的虔誠。",
    source: "Henry VIII, Act III, Scene 2",
    image: "assets/images/z-zeal.jpg",
    audioWord: "assets/audio/z-zeal-word.mp3",
    audioQuote: "assets/audio/z-zeal-quote.mp3"
  }
];

let currentAudio = null;
let currentBtn = null;

function stopCurrentAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  if (currentBtn) {
    currentBtn.classList.remove("playing");
    currentBtn = null;
  }
}

function playTrack(src, btnElement) {
  if (currentBtn === btnElement && currentAudio && !currentAudio.paused) {
    stopCurrentAudio();
    return;
  }
  stopCurrentAudio();
  const audio = new Audio(src);
  currentAudio = audio;
  currentBtn = btnElement;
  btnElement.classList.add("playing");

  audio.play().catch(() => {
    btnElement.classList.remove("playing");
    alert("找不到音檔：" + src + "\n請確認檔案已放入 assets/audio/ 資料夾。");
  });

  audio.onended = () => {
    btnElement.classList.remove("playing");
    currentAudio = null;
    currentBtn = null;
  };
}

function renderCard(index) {
  stopCurrentAudio();
  const item = vocabularyData[index];
  const card = document.getElementById("wordCard");

  // 觸發重新進場動畫
  card.style.animation = "none";
  card.offsetHeight;
  card.style.animation = null;

  card.innerHTML = `
    <div class="painting-frame">
      <img src="${item.image}" alt="${item.word}" />
    </div>
    <div class="folio-content">
      <div class="word-letter-badge">FOLIO ${item.letter} · SHAKESPEAREAN ARCHIVE</div>
      <h2 class="word-title">${item.word}</h2>
      <p class="phonetic">${item.phonetic}</p>
      <p class="meaning-zh">${item.meaning}</p>
      <blockquote class="quote-block">
        <p class="quote-en">${item.quoteEn}</p>
        <p class="quote-zh">${item.quoteZh}</p>
        <footer class="quote-source">— ${item.source}</footer>
      </blockquote>
      <div class="audio-controls">
        <button type="button" class="audio-btn btn-word" id="btnWord">♪ 單字朗讀</button>
        <button type="button" class="audio-btn btn-quote" id="btnQuote">▶ 金句朗讀</button>
      </div>
    </div>
  `;

  document.getElementById("btnWord").addEventListener("click", function () {
    playTrack(item.audioWord, this);
  });
  document.getElementById("btnQuote").addEventListener("click", function () {
    playTrack(item.audioQuote, this);
  });

  document.querySelectorAll("#alphabetNav button").forEach((btn, idx) => {
    btn.classList.toggle("active", idx === index);
  });
}

function initSalon() {
  const nav = document.getElementById("alphabetNav");
  vocabularyData.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = item.letter;
    btn.addEventListener("click", () => renderCard(index));
    nav.appendChild(btn);
  });
  renderCard(0);
}

document.addEventListener("DOMContentLoaded", initSalon);