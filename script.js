// TEXT → EMOJI MAP (Unicode safe)
const textToEmojiMap = {
  a: "\u{1F600}",
  b: "\u{1F603}",
  c: "\u{1F604}",
  d: "\u{1F601}",
  e: "\u{1F606}",
  f: "\u{1F605}",
  g: "\u{1F602}",
  h: "\u{1F923}",
  i: "\u{1F60A}",
  j: "\u{1F607}",
  k: "\u{1F642}",
  l: "\u{1F643}",
  m: "\u{1F609}",
  n: "\u{1F60C}",
  o: "\u{1F60D}",
  p: "\u{1F970}",
  q: "\u{1F618}",
  r: "\u{1F617}",
  s: "\u{1F619}",
  t: "\u{1F61A}",
  u: "\u{1F60B}",
  v: "\u{1F61B}",
  w: "\u{1F61C}",
  x: "\u{1F92A}",
  y: "\u{1F928}",
  z: "\u{1F9D0}",
  " ": " "
};

// AUTO REVERSE MAP (EMOJI → TEXT)
const emojiToTextMap = {};
for (let key in textToEmojiMap) {
  emojiToTextMap[textToEmojiMap[key]] = key;
}

// TEXT → EMOJI
function textToEmoji() {
  const input = document.getElementById("input").value.toLowerCase();
  let result = "";

  for (let ch of input) {
    result += textToEmojiMap[ch] || "?";
  }

  document.getElementById("output").value = result;
}

// EMOJI → TEXT (Unicode FIXED)
function emojiToText() {
  const input = document.getElementById("input").value;
  let result = "";

  const emojis = Array.from(input); // IMPORTANT

  for (let em of emojis) {
    result += emojiToTextMap[em] || "?";
  }

  document.getElementById("output").value = result;
}

// COPY OUTPUT FUNCTION
function copyOutput() {
  const output = document.getElementById("output");

  if (output.value.trim() === "") return;

  navigator.clipboard.writeText(output.value);

  const msg = document.getElementById("copyMsg");
  if (msg) {
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 1500);
  }
}

