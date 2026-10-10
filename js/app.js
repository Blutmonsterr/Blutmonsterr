document.addEventListener("DOMContentLoaded", function() {
    populateProfileInfo();
    applyBackgroundSettings();
    applyLayoutSettings();
    if (typeof initLegalModal === 'function') {
        initLegalModal();
    }

    const linksContainer = document.querySelector(".links");    

    if (linksContainer && typeof config?.links !== 'undefined') {
        
        // Sortiere die Links basierend auf der 'sortId'
        config.links.sort((a, b) => {
            const sortA = a.sortId;
            const sortB = b.sortId;

            // Wenn beide eine sortId haben, sortiere numerisch
            if (typeof sortA === 'number' && typeof sortB === 'number') {
                return sortA - sortB;
            }
            // Wenn nur A eine sortId hat, kommt A zuerst
            if (typeof sortA === 'number') {
                return -1;
            }
            // Wenn nur B eine sortId hat, kommt B zuerst
            if (typeof sortB === 'number') {
                return 1;
            }
            // Ansonsten behalte die ursprüngliche Reihenfolge bei
            return 0;
        });

        config.links.forEach(link => {
            if (link.visible) {
                const linkElement = document.createElement("a");
                linkElement.href = link.url;
                linkElement.classList.add("link-button");
                linkElement.target = "_blank";
                linkElement.rel = "noopener noreferrer";

                // Icon-Element erstellen
                const iconElement = document.createElement("img");
                // Nutzt das neue 'service'-Feld für eine exakte Zuordnung
                const iconName = link.service;
                iconElement.src = `images/icons/${iconName}.svg`;
                iconElement.alt = `${link.text} Icon`;
                linkElement.dataset.service = iconName;
                iconElement.classList.add("link-icon");
                // Falls ein Icon nicht geladen werden kann, wird es versteckt
                iconElement.onerror = () => iconElement.style.display = 'none';

                // Text-Element erstellen
                const textElement = document.createElement("span");
                textElement.textContent = link.text;

                linkElement.appendChild(iconElement);
                linkElement.appendChild(textElement);
                linksContainer.appendChild(linkElement);
            }
        });
    }

    // Status-Updates abrufen
    fetchStatusUpdates();

    // Layout-Umschaltung initialisieren
    const layoutListBtn = document.getElementById('layout-list-btn');
    const layoutGridBtn = document.getElementById('layout-grid-btn');

    if (layoutListBtn && layoutGridBtn && linksContainer) {
        // Standard-Layout aus der Konfiguration setzen
        const defaultView = config.layout?.defaultView || 'list'; // Fallback auf 'list'

        if (defaultView === 'grid') {
            linksContainer.classList.add('layout-grid');
            layoutGridBtn.classList.add('active');
            layoutListBtn.classList.remove('active');
        } else {
            linksContainer.classList.add('layout-list');
            layoutListBtn.classList.add('active');
            layoutGridBtn.classList.remove('active');
        }

        layoutListBtn.addEventListener('click', () => {
            linksContainer.classList.remove('layout-grid');
            linksContainer.classList.add('layout-list');
            layoutListBtn.classList.add('active');
            layoutGridBtn.classList.remove('active');
        });

        layoutGridBtn.addEventListener('click', () => {
            linksContainer.classList.remove('layout-list');
            linksContainer.classList.add('layout-grid');
            layoutGridBtn.classList.add('active');
            layoutListBtn.classList.remove('active');
        });
    }
});

function applyBackgroundSettings() {
    if (typeof config?.background === 'undefined') return;

    const { type, gradientStart, gradientEnd, color, url } = config.background;
    const body = document.body;
    const backgroundLayer = document.getElementById('background-layer');

    switch (type) {
        case 'gradient':
            body.style.background = `linear-gradient(135deg, ${gradientStart}, ${gradientEnd})`;
            break;
        case 'color':
            body.style.backgroundColor = color;
            break;
        case 'image':
            backgroundLayer.style.backgroundImage = `url('${url}')`;
            backgroundLayer.classList.add('bg-image');
            break;
        case 'video':
            const video = document.createElement('video');
            video.src = url;
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            video.classList.add('bg-video');
            backgroundLayer.appendChild(video);
            break;
        default:
            // Fallback auf den Standard-Gradient
            body.style.background = `linear-gradient(135deg, #0f0c29, #302b63)`;
            break;
    }
}

function applyLayoutSettings() {
    if (typeof config?.layout === 'undefined') return;

    const { showStatusIndicators, showYouTubeBox, youTubeBoxPosition } = config.layout;

    // Status-Leiste ein-/ausblenden
    const statusIndicators = document.querySelector('.status-indicators');
    if (statusIndicators && !showStatusIndicators) {
        statusIndicators.style.display = 'none';
    }

    // YouTube-Box ein-/ausblenden
    const videoSection = document.querySelector('.video-section');
    if (videoSection && !showYouTubeBox) {
        videoSection.style.display = 'none';
    }

    // Position der YouTube-Box ändern
    if (videoSection && showYouTubeBox && youTubeBoxPosition === 'before') {
        const linksContainer = document.querySelector('.links');
        const layoutControls = document.querySelector('.layout-controls');
        if (linksContainer && layoutControls) {
            // Fügt die Video-Sektion vor den Layout-Buttons ein
            linksContainer.parentElement.insertBefore(videoSection, layoutControls);
        }
    }
}

function populateProfileInfo() {
    if (typeof config?.profile === 'undefined') return;

    const { name, pageTitle, profilePictureUrl, faviconUrl, description } = config.profile;

    if (pageTitle) {
        document.title = pageTitle;
    }
    if (faviconUrl) {
        document.getElementById('favicon').href = faviconUrl;
    }
    if (profilePictureUrl) {
        const profilePicEl = document.getElementById('profile-picture');
        profilePicEl.src = profilePictureUrl;
        if (name) profilePicEl.alt = `Profilbild von ${name}`;
    }
    if (name) {
        document.getElementById('profile-name').textContent = name;
    }
    if (description) {
        document.getElementById('profile-description').textContent = description;
    }
}

function timeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + (Math.floor(interval) === 1 ? " Jahr" : " Jahren");
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + (Math.floor(interval) === 1 ? " Monat" : " Monaten");
    interval = seconds / 86400;
    if (interval > 1) return "vor " + Math.floor(interval) + " Tagen";
    if (interval > 0.04) return "Gestern"; // Mehr als 1h
    interval = seconds / 3600;
    if (interval > 1) return "vor " + Math.floor(interval) + " Std.";
    interval = seconds / 60;
    if (interval > 1) return "vor " + Math.floor(interval) + " Min.";
    return "gerade eben";
}

async function fetchStatusUpdates() {
    const { twitchUsername, youtubeChannelId } = config.profile;

    // === YouTube-Status abrufen (via RSS-Feed) ===
    const ytStatusEl = document.getElementById("youtube-status");
    const ytLinkEl = document.getElementById("latest-video-link");
    const ytThumbEl = document.getElementById("latest-video-thumbnail");
    const ytTitleEl = document.getElementById("latest-video-title");

    if (ytStatusEl && youtubeChannelId) {
        try {
            // Umstellung auf den zuverlässigeren rss2json-Dienst
            const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${youtubeChannelId}`)}`);
            const data = await response.json();

            // Prüfen, ob die Anfrage erfolgreich war und Videos gefunden wurden
            if (data.status === 'ok' && data.items.length > 0) {
                // Filtere Shorts heraus (über die URL) und nimm das erste "echte" Video
                const latestVideo = data.items.find(item => 
                    !item.link.includes('/shorts/')
                );
                
                // Prüfen, ob ein reguläres Video gefunden wurde
                if (latestVideo) {
                    // Status-Anzeige aktualisieren
                    if (ytStatusEl) {
                        ytStatusEl.textContent = timeAgo(new Date(latestVideo.pubDate));
                    }

                    // Video-Karte aktualisieren
                    if (ytLinkEl && ytThumbEl && ytTitleEl) {
                        ytLinkEl.href = latestVideo.link;
                        ytThumbEl.src = latestVideo.thumbnail;
                        ytTitleEl.textContent = latestVideo.title;
                    }
                } else {
                    // Fallback, falls nur Shorts gefunden wurden: Verstecke die Karte
                    const videoSection = document.querySelector('.video-section');
                    if (videoSection) videoSection.style.display = 'none';
                }
            }
        } catch (error) {
            console.warn("YouTube-Status konnte nicht geladen werden:", error);
            if (ytTitleEl) ytTitleEl.textContent = "Neuestes Video auf YouTube ansehen";
        }
    }

    // === Twitch-Status abrufen ===
    const twitchStatusEl = document.getElementById("twitch-status");
    if (twitchStatusEl && twitchUsername) {
        // Nur abrufen, wenn in config.layout aktiviert (z.B. bei vorhandener Backend-Funktion /api/twitch)
        if (config.layout?.enableTwitchStatusApi) {
            try {
                const response = await fetch(`/api/twitch?user=${twitchUsername}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.isLive) {
                        twitchStatusEl.textContent = "LIVE!";
                        twitchStatusEl.classList.add("live");
                        twitchStatusEl.classList.remove("offline");
                    } else if (data.lastStreamTime) {
                        twitchStatusEl.textContent = new Date(data.lastStreamTime).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + ' Uhr';
                        twitchStatusEl.classList.add("offline");
                        twitchStatusEl.classList.remove("live");
                    } else {
                        twitchStatusEl.textContent = "Offline";
                        twitchStatusEl.classList.add("offline");
                    }
                } else {
                    twitchStatusEl.textContent = "Offline";
                    twitchStatusEl.classList.add("offline");
                }
            } catch (error) {
                twitchStatusEl.textContent = "Offline";
                twitchStatusEl.classList.add("offline");
            }
        } else {
            // Standard-Status ohne fehlschlagende Netzwerk-Anfrage
            twitchStatusEl.textContent = "Offline";
            twitchStatusEl.classList.add("offline");
        }
    }
}