const ICON_BASE = "https://cdn.jsdelivr.net/gh/Reeyuki/YukiPorts@main/icons/";

let currentBlobUrl = null;
let currentVideoUrl = null;

const games = [
  {
    title: "Angry Birds 2",
    file: "https://naotomori1.github.io/AngryBirds2Port",
    icon: ICON_BASE + "angryBirds2.webp",
  },
  {
    title: "Feed & Grow Fish",
    file: "https://reeyukifish.pages.dev/",
    icon: ICON_BASE + "feedandgrowfish.png",
  },
  {
    title: "Slime Rancher",
    file: "slime.html",
    icon: ICON_BASE + "slime.webp",
  },
  {
    title: "TABS",
    file: "tabs.html",
    icon: ICON_BASE + "tabs.webp",
  },
  {
    title: "Cat Goes Fishing",
    file: "catfish.html",
    icon: ICON_BASE + "cat.webp",
  },
  {
    title: "Inscryption",
    file: "inscryption.html",
    icon: ICON_BASE + "inscryption.webp",
  },
  {
    title: "Lobotomy Corporation",
    file: "lobotomy.html",
    icon: ICON_BASE + "lobotomy.webp",
  },
  {
    title: "Night In The Woods",
    file: "nightwoods.html",
    icon: ICON_BASE + "night.webp",
  },
  {
    title: "Plague Inc Evolved",
    file: "plague.html",
    icon: ICON_BASE + "plague.webp",
  },
  {
    title: "Five Nights At Frickbears 3",
    file: "frickbears.html",
    icon: ICON_BASE + "frick.webp",
  },
  {
    title: "Suicide Guy",
    file: "suicideGuy.html",
    icon: ICON_BASE + "suicideguy.webp",
  },
  {
    title: "Youtubers Life Omg",
    file: "ytlifeomg.html",
    icon: ICON_BASE + "yt.webp",
  },
  {
    title: "Whos Your Daddy",
    file: "daddy.html",
    icon: ICON_BASE + "daddy.webp",
  },
  {
    title: "In Stars And Time",
    file: "star.html",
    icon: ICON_BASE + "star.webp",
  },
  {
    title: "Helltaker",
    file: "helltaker.html",
    icon: ICON_BASE + "helltaker.webp",
  },
  {
    title: "Slenderina The Cellar",
    file: "slenderina.html",
    icon: ICON_BASE + "slenderina.webp",
  },
  {
    title: "Five Nights In Anime 3D",
    file: "fnia.html",
    icon: ICON_BASE + "fnia.webp",
  },
  {
    title: "Wizards In Shorts",
    file: "wizards.html",
    icon: ICON_BASE + "wizard.webp",
  },
];

const baldiGames = [
  {
    title: "Minus Three",
    file: "minusThree.html",
    icon: ICON_BASE + "minusThree.webp",
  },
  {
    title: "Baldi Balds The Universe",
    file: "baldiBalds.html",
    icon: ICON_BASE + "baldiBalds.webp",
  },
  {
    title: "Baldi's Basics: Teaching On Twos",
    file: "baldisBasicsTeachingOnTwos.html",
    icon: ICON_BASE + "baldisBasicsTeachingOnTwos.webp",
  },
  {
    title: "Playtime Hell & Bear 5 Van",
    file: "playtimeHellBear5van.html",
    icon: ICON_BASE + "playtimeHellBear5van.webp",
  },
  {
    title: "Pneumonoultramicroscopicsilicovolcanoconiosis",
    file: "pneumo.html",
    icon: ICON_BASE + "pneumo.webp",
  },
  {
    title: "The Math Is Leaking",
    file: "themathisleaking.html",
    icon: ICON_BASE + "theMathIsLeaking.webp",
  },
  { title: "Three", file: "three.html", icon: ICON_BASE + "three.webp" },
  {
    title: "Where's Baldi",
    file: "wheresBaldi.html",
    icon: ICON_BASE + "wheresBaldi.webp",
  },
  {
    title: "Antidisestablishmentarianism",
    file: "Antidisestablishmentarianism.html",
    icon: ICON_BASE + "antidis.webp",
  },
];

const MEDIA_BASE = "https://cdn.jsdelivr.net/gh/Reeyuki/YukiPorts@main/media/";

const wipGames = [
  {
    title: "The Forest",
    file: "",
    video: true,
    parts: [
      "theforest.mp4.part_aa",
      "theforest.mp4.part_ab",
      "theforest.mp4.part_ac",
      "theforest.mp4.part_ad",
      "theforest.mp4.part_ae",
    ],
  },
  { title: "PTTR", file: "", icon: ICON_BASE + "pttr.webp" },
  {
    title: "60 Seconds! Reatomized",
    file: "",
    icon: ICON_BASE + "60secondsreatomized.webp",
  },
  {
    title: "Casualties Unknown",
    file: "",
    icon: ICON_BASE + "casualtiesunknown.webp",
  },
  { title: "Gambling With Friends", file: "", wip: true },
  { title: "Beholder", file: "", wip: true },
  { title: "Subnautica", file: "", wip: true },
  { title: "Duck Season", file: "", wip: true },
];

const CDN_BASE = "https://cdn.jsdelivr.net/gh/Reeyuki/YukiPorts@main/html/";
const GITHUB_BASE = "https://github.com/Reeyuki/YukiPorts/tree/main/html/";

document.getElementById("gameCount").textContent =
  games.length + baldiGames.length + wipGames.length;

const gamesGrid = document.getElementById("gamesGrid");
const baldiGrid = document.getElementById("baldiGrid");
const wipGrid = document.getElementById("wipGrid");
const searchInput = document.getElementById("searchInput");
const baldiHeader = document.getElementById("baldiHeader");
const baldiContent = document.getElementById("baldiContent");
const wipHeader = document.getElementById("wipHeader");
const wipContent = document.getElementById("wipContent");

baldiHeader.addEventListener("click", () => {
  baldiHeader.classList.toggle("collapsed");
  baldiContent.classList.toggle("collapsed");
});

wipHeader.addEventListener("click", () => {
  wipHeader.classList.toggle("collapsed");
  wipContent.classList.toggle("collapsed");
});

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();

  const mainCards = gamesGrid.querySelectorAll(".game-card");
  mainCards.forEach((card, index) => {
    const game = games[index];
    const matches = game.title.toLowerCase().includes(searchTerm);
    card.style.display = matches ? "flex" : "none";
  });

  const baldiCards = baldiGrid.querySelectorAll(".game-card");
  baldiCards.forEach((card, index) => {
    const game = baldiGames[index];
    const matches = game.title.toLowerCase().includes(searchTerm);
    card.style.display = matches ? "flex" : "none";
  });

  const wipCards = wipGrid.querySelectorAll(".game-card");
  wipCards.forEach((card, index) => {
    const game = wipGames[index];
    const matches = game.title.toLowerCase().includes(searchTerm);
    card.style.display = matches ? "flex" : "none";
  });

  if (
    searchTerm &&
    baldiGames.some((game) => game.title.toLowerCase().includes(searchTerm))
  ) {
    baldiHeader.classList.remove("collapsed");
    baldiContent.classList.remove("collapsed");
  }

  if (
    searchTerm &&
    wipGames.some((game) => game.title.toLowerCase().includes(searchTerm))
  ) {
    wipHeader.classList.remove("collapsed");
    wipContent.classList.remove("collapsed");
  }
});

function renderGames() {
  gamesGrid.innerHTML = "";

  games.forEach((game) => {
    const gameUrl = /^https?:\/\//i.test(game.file)
      ? game.file
      : CDN_BASE + game.file;

    const escapedTitle = game.title.replace(/'/g, "\\'");

    const card = document.createElement("div");
    card.className = "game-card";
    card.style.cursor = "pointer";
    card.innerHTML = `
      <img class="game-icon" src="${game.icon}" alt="${game.title}" />
      <div class="game-title">${game.title}</div>
      <div class="game-actions">
        <button class="btn btn-play" onclick="event.stopPropagation(); playGame('${escapedTitle}', '${gameUrl}')"><i class="fas fa-play"></i> Play</button>
        <button class="btn btn-copy" onclick="event.stopPropagation(); copyUrl('${gameUrl}', '${escapedTitle}')"><i class="fas fa-copy"></i> Copy URL</button>
        <button class="btn btn-download" onclick="event.stopPropagation(); downloadHtml('${gameUrl}', '${game.file}', '${escapedTitle}')"><i class="fas fa-download"></i> Download</button>
      </div>
    `;

    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", game.title);

    card.addEventListener("click", () => playGame(escapedTitle, gameUrl));

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        playGame(escapedTitle, gameUrl);
      }
    });

    gamesGrid.appendChild(card);
  });
}
function renderBaldiGames() {
  baldiGrid.innerHTML = "";

  baldiGames.forEach((game) => {
    const gameUrl = /^https?:\/\//i.test(game.file)
      ? game.file
      : CDN_BASE + game.file;

    const escapedTitle = game.title.replace(/'/g, "\\'");

    const card = document.createElement("div");
    card.className = "game-card";
    card.style.cursor = "pointer";
    card.innerHTML = `
      <img class="game-icon" src="${game.icon}" alt="${game.title}" />
      <div class="game-title">${game.title}</div>
      <div class="game-actions">
        <button class="btn btn-play" onclick="event.stopPropagation(); playGame('${escapedTitle}', '${gameUrl}')"><i class="fas fa-play"></i> Play</button>
        <button class="btn btn-copy" onclick="event.stopPropagation(); copyUrl('${gameUrl}', '${escapedTitle}')"><i class="fas fa-copy"></i> Copy URL</button>
        <button class="btn btn-download" onclick="event.stopPropagation(); downloadHtml('${gameUrl}', '${game.file}', '${escapedTitle}')"><i class="fas fa-download"></i> Download</button>
      </div>
    `;

    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", game.title);

    card.addEventListener("click", () => playGame(escapedTitle, gameUrl));

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        playGame(escapedTitle, gameUrl);
      }
    });

    baldiGrid.appendChild(card);
  });
}
function loadVideoParts(parts) {
  const urls = parts.map((p) => MEDIA_BASE + p);
  return Promise.all(
    urls.map((url) => fetch(url).then((r) => r.arrayBuffer())),
  ).then((buffers) => {
    const blob = new Blob(buffers, { type: "video/mp4" });
    return URL.createObjectURL(blob);
  });
}

function renderWipGames() {
  wipGrid.innerHTML = "";

  wipGames.forEach((game) => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.style.cursor = "pointer";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", game.title);

    if (game.video) {
      card.innerHTML = `
      <video class="game-icon" id="video-${game.title.replace(/\s/g, "")}" muted loop playsinline poster="" preload="none"></video>
      <div class="game-title">${game.title}</div>
    `;
      card.addEventListener("click", () => {
        playVideoInFullscreen(game.title, game.parts);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          card.click();
        }
      });
    } else if (game.wip) {
      card.innerHTML = `
      <div class="game-icon wip-placeholder">WIP</div>
      <div class="game-title">${game.title}</div>
    `;
      card.addEventListener("click", () => showImagePreview(game.title, ""));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          showImagePreview(game.title, "");
        }
      });
    } else {
      card.innerHTML = `
      <img class="game-icon" src="${game.icon}" alt="${game.title}" />
      <div class="game-title">${game.title}</div>
    `;
      card.addEventListener("click", () =>
        showImagePreview(game.title, game.icon),
      );
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          showImagePreview(game.title, game.icon);
        }
      });
    }

    wipGrid.appendChild(card);
  });
}
renderGames();
renderBaldiGames();
renderWipGames();
function playGame(title, url) {
  const wrapper = document.getElementById("fullscreenWrapper");
  const frame = document.getElementById("gameFrame");
  const titleEl = document.getElementById("fullscreenTitle");
  const loading = document.getElementById("loading");

  titleEl.textContent = title;
  loading.classList.add("show");
  wrapper.classList.add("active");

  if (currentBlobUrl) {
    URL.revokeObjectURL(currentBlobUrl);
    currentBlobUrl = null;
  }

  frame.onload = () => {
    loading.classList.remove("show");
  };

  frame.onerror = () => {
    loading.classList.remove("show");
    showToast("Failed to load game");
    closeFullscreen();
  };

  if (/^https?:\/\//i.test(url) && !url.startsWith(CDN_BASE)) {
    frame.src = url;
    return;
  }

  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const blob = new Blob([html], { type: "text/html" });
      currentBlobUrl = URL.createObjectURL(blob);
      frame.src = currentBlobUrl;
    })
    .catch((err) => {
      console.error("Failed to load game:", err);
      showToast("Failed to load game");
      loading.classList.remove("show");
      closeFullscreen();
    });
}
function playVideoInFullscreen(title, parts) {
  const wrapper = document.getElementById("fullscreenWrapper");
  const titleEl = document.getElementById("fullscreenTitle");
  const frame = document.getElementById("gameFrame");
  const video = document.getElementById("fullscreenVideo");
  const loading = document.getElementById("loading");
  const controls = document.getElementById("videoControls");

  titleEl.textContent = title;
  frame.style.display = "none";
  video.style.display = "block";
  controls.classList.add("active");
  wrapper.classList.add("active");
  loading.classList.add("show");

  if (currentVideoUrl) {
    URL.revokeObjectURL(currentVideoUrl);
    currentVideoUrl = null;
  }

  loadVideoParts(parts).then((url) => {
    currentVideoUrl = url;
    video.src = url;
    video.load();
    video.play().catch(() => {});
    loading.classList.remove("show");
  });
}

function closeFullscreen() {
  const wrapper = document.getElementById("fullscreenWrapper");
  const frame = document.getElementById("gameFrame");
  const video = document.getElementById("fullscreenVideo");
  const controls = document.getElementById("videoControls");

  wrapper.classList.remove("active");
  controls.classList.remove("active");
  frame.src = "";
  frame.style.display = "block";
  video.style.display = "none";
  video.pause();
  video.removeAttribute("src");
  video.load();

  if (currentBlobUrl) {
    URL.revokeObjectURL(currentBlobUrl);
    currentBlobUrl = null;
  }
  if (currentVideoUrl) {
    URL.revokeObjectURL(currentVideoUrl);
    currentVideoUrl = null;
  }
}

function toggleFullscreen() {
  const frame = document.getElementById("gameFrame");
  const video = document.getElementById("fullscreenVideo");
  const el =
    video.style.display !== "none" && video.style.display !== ""
      ? video
      : frame;
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    el.requestFullscreen();
  }
}

function initVideoControls() {
  const video = document.getElementById("fullscreenVideo");
  const playBtn = document.getElementById("vcPlayBtn");
  const progress = document.getElementById("vcProgress");
  const timeEl = document.getElementById("vcTime");
  const muteBtn = document.getElementById("vcMuteBtn");
  const volume = document.getElementById("vcVolume");
  const fsBtn = document.getElementById("vcFullscreenBtn");
  let seeking = false;

  function fmt(t) {
    if (isNaN(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  function update() {
    if (!seeking) {
      progress.value = video.duration
        ? (video.currentTime / video.duration) * 1000
        : 0;
    }
    timeEl.textContent = fmt(video.currentTime) + " / " + fmt(video.duration);
    const i = playBtn.querySelector("i");
    i.className = video.paused ? "fas fa-play" : "fas fa-pause";
  }

  playBtn.addEventListener("click", () => {
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  });

  progress.addEventListener("input", () => {
    seeking = true;
    video.currentTime = (progress.value / 1000) * video.duration;
  });
  progress.addEventListener("change", () => {
    seeking = false;
  });

  video.addEventListener("timeupdate", update);
  video.addEventListener("loadedmetadata", update);
  video.addEventListener("play", update);
  video.addEventListener("pause", update);

  muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    const i = muteBtn.querySelector("i");
    i.className = video.muted ? "fas fa-volume-mute" : "fas fa-volume-up";
  });

  volume.addEventListener("input", () => {
    video.volume = volume.value / 100;
    video.muted = video.volume === 0;
    const i = muteBtn.querySelector("i");
    if (video.volume === 0) i.className = "fas fa-volume-mute";
    else i.className = "fas fa-volume-up";
  });

  fsBtn.addEventListener("click", () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  });
}
initVideoControls();

function copyUrl(url, title) {
  const urlToCopy =
    title === "Wizards In Shorts"
      ? "https://wizards-in-shorts.vercel.app/"
      : url;
  navigator.clipboard
    .writeText(urlToCopy)
    .then(() => {
      showToast("URL copied to clipboard!");
    })
    .catch((err) => {
      showToast("Failed to copy URL");
      console.error("Failed to copy:", err);
    });
}

function downloadHtml(url, filename, title) {
  if (title === "Wizards In Shorts") {
    showToast("This game cannot be downloaded");
    return;
  }
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const blob = new Blob([html], { type: "text/html" });
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);
      showToast("Download started!");
    })
    .catch((err) => {
      showToast("Failed to download HTML");
      console.error("Failed to download:", err);
    });
}

function showImagePreview(title, src) {
  const preview = document.getElementById("imagePreview");
  const img = document.getElementById("imagePreviewImg");
  const titleEl = document.getElementById("imagePreviewTitle");
  titleEl.textContent = title;
  img.src = src;
  img.alt = title;
  preview.classList.add("active");
}

function closeImagePreview() {
  const preview = document.getElementById("imagePreview");
  const img = document.getElementById("imagePreviewImg");
  preview.classList.remove("active");
  img.src = "";
  img.alt = "";
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

let keyboardSelectedIndex = -1;
let keyboardSelectedGrid = null;

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeFullscreen();
    closeImagePreview();
    return;
  }

  if (
    e.key === "ArrowDown" ||
    e.key === "ArrowUp" ||
    e.key === "ArrowLeft" ||
    e.key === "ArrowRight"
  ) {
    const visibleMainCards = Array.from(
      gamesGrid.querySelectorAll(".game-card"),
    ).filter((card) => card.style.display !== "none");
    const visibleBaldiCards = Array.from(
      baldiGrid.querySelectorAll(".game-card"),
    ).filter((card) => card.style.display !== "none");
    const visibleWipCards = Array.from(
      wipGrid.querySelectorAll(".game-card"),
    ).filter((card) => card.style.display !== "none");

    const allVisibleCards = [
      ...visibleMainCards,
      ...visibleBaldiCards,
      ...visibleWipCards,
    ];

    if (allVisibleCards.length === 0) return;

    if (keyboardSelectedIndex === -1) {
      keyboardSelectedIndex = 0;
      keyboardSelectedGrid = visibleMainCards.length > 0 ? "main" : "baldi";
    } else {
      const isVertical = e.key === "ArrowDown" || e.key === "ArrowUp";
      const isForward = e.key === "ArrowDown" || e.key === "ArrowRight";
      const isBackward = e.key === "ArrowUp" || e.key === "ArrowLeft";

      if (isForward) {
        keyboardSelectedIndex++;
        if (keyboardSelectedIndex >= allVisibleCards.length) {
          keyboardSelectedIndex = 0;
        }
      } else if (isBackward) {
        keyboardSelectedIndex--;
        if (keyboardSelectedIndex < 0) {
          keyboardSelectedIndex = allVisibleCards.length - 1;
        }
      }
    }

    allVisibleCards.forEach((card) =>
      card.classList.remove("keyboard-selected"),
    );
    allVisibleCards[keyboardSelectedIndex].classList.add("keyboard-selected");
    allVisibleCards[keyboardSelectedIndex].focus();
    e.preventDefault();
  }
});

window.playGame = playGame;
window.copyUrl = copyUrl;
window.downloadHtml = downloadHtml;
window.closeFullscreen = closeFullscreen;
window.toggleFullscreen = toggleFullscreen;
window.closeImagePreview = closeImagePreview;
