/**
 * legal.js - Verwaltung von Impressum und Datenschutzerklärung
 * Konform nach deutschem Recht: § 5 DDG (vormals § 5 TMG) & DSGVO (Art. 13)
 */

function getLegalData() {
    const defaultData = {
        name: "Max Mustermann",
        street: "Musterstraße 1",
        city: "12345 Musterstadt",
        country: "Deutschland",
        email: "kontakt@example.com",
        phone: "+49 (0) 123 456789",
        responsibleName: "Max Mustermann",
        responsibleAddress: "Musterstraße 1, 12345 Musterstadt",
        vatId: ""
    };

    if (typeof config !== 'undefined' && config.legal) {
        return Object.assign({}, defaultData, config.legal);
    }
    return defaultData;
}

function escapeHTML(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function formatField(val, placeholderText) {
    if (!val || val === placeholderText) {
        return `<span class="legal-placeholder" title="Bitte in js/config.js anpassen">${escapeHTML(val || placeholderText)}</span>`;
    }
    return `<span>${escapeHTML(val)}</span>`;
}

/**
 * Erzeugt den vollständigen Impressum-Inhalt nach § 5 DDG (ehem. § 5 TMG) & § 18 MStV
 */
function getImpressumHTML() {
    const data = getLegalData();

    return `
        <div class="legal-content">
            <div class="legal-badge">Digitale-Dienste-Gesetz (§ 5 DDG / ehemals § 5 TMG)</div>

            <h3>Angaben gemäß § 5 DDG</h3>
            <p>
                <strong>${formatField(data.name, "Max Mustermann")}</strong><br>
                ${formatField(data.street, "Musterstraße 1")}<br>
                ${formatField(data.city, "12345 Musterstadt")}<br>
                ${formatField(data.country, "Deutschland")}
            </p>

            <h3>Kontakt</h3>
            <p>
                <strong>Telefon:</strong> ${formatField(data.phone, "+49 (0) 123 456789")}<br>
                <strong>E-Mail:</strong> <a href="mailto:${escapeHTML(data.email)}">${formatField(data.email, "kontakt@example.com")}</a>
            </p>

            ${data.vatId ? `
            <h3>Umsatzsteuer-Identifikationsnummer</h3>
            <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br>
                <strong>${escapeHTML(data.vatId)}</strong>
            </p>` : ''}

            <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
            <p>
                ${formatField(data.responsibleName || data.name, "Max Mustermann")}<br>
                ${formatField(data.responsibleAddress || `${data.street}, ${data.city}`, "Musterstraße 1, 12345 Musterstadt")}
            </p>

            <h3>EU-Streitschlichtung</h3>
            <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br>
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h3>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
            <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h3>Haftung für Inhalte</h3>
            <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
                Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
                oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden 
                von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h3>Haftung für Links</h3>
            <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese 
                fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. 
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h3>Urheberrecht</h3>
            <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
                Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen 
                der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, 
                nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. 
                Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
        </div>
    `;
}

/**
 * Erzeugt die Datenschutzerklärung nach DSGVO (Art. 13 DSGVO)
 */
function getDatenschutzHTML() {
    const data = getLegalData();

    return `
        <div class="legal-content">
            <div class="legal-badge">Datenschutz-Grundverordnung (DSGVO) & TDDDG</div>

            <h3>1. Datenschutz auf einen Blick</h3>
            <h4>Allgemeine Hinweise</h4>
            <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
                wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
                Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer nachfolgenden Datenschutzerklärung.
            </p>

            <h4>Datenerfassung auf dieser Website</h4>
            <p>
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt 
                „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
            </p>
            <p>
                <strong>Wie erfassen wir Ihre Daten?</strong><br>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. durch Kontaktaufnahme per E-Mail). 
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch IT-Systeme erfasst. 
                Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
            <p>
                <strong>Wofür nutzen wir Ihre Daten?</strong><br>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                Andere Daten können zur Analyse des Nutzerverhaltens verwendet werden.
            </p>
            <p>
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. 
                Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung 
                erteilt haben, können Sie diese jederzeit für die Zukunft widerrufen. Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>

            <h3>2. Verantwortliche Stelle</h3>
            <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br><br>
                <strong>${formatField(data.name, "Max Mustermann")}</strong><br>
                ${formatField(data.street, "Musterstraße 1")}<br>
                ${formatField(data.city, "12345 Musterstadt")}<br>
                ${formatField(data.country, "Deutschland")}<br><br>
                <strong>Telefon:</strong> ${formatField(data.phone, "+49 (0) 123 456789")}<br>
                <strong>E-Mail:</strong> <a href="mailto:${escapeHTML(data.email)}">${formatField(data.email, "kontakt@example.com")}</a>
            </p>
            <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel 
                der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h3>3. Datenerfassung auf dieser Website</h3>
            <h4>Server-Log-Dateien</h4>
            <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul>
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL (die zuvor besuchte Seite)</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
            </ul>
            <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt 
                auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien 
                Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
            </p>

            <h4>SSL- bzw. TLS-Verschlüsselung</h4>
            <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. 
                Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt 
                und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>

            <h3>4. Externe Dienste und Drittanbieter-Inhalte</h3>
            <h4>Google Web Fonts</h4>
            <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. 
                Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
            </p>
            <p>
                Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, 
                dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. 
                Der Webseitenbetreiber hat ein berechtigtes Interesse an einer einheitlichen Darstellung des Schriftbildes.
            </p>
            <p>
                Weitere Informationen finden Sie unter <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer">https://developers.google.com/fonts/faq</a> 
                und in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>.
            </p>

            <h4>YouTube Inhalte & Vorschaubilder</h4>
            <p>
                Auf dieser Website werden über Programmierschnittstellen (z. B. rss2json.com / YouTube RSS) Informationen und Vorschaubilder des neuesten 
                YouTube-Videos abgerufen. Beim Laden dieser Vorschaubilder wird eine direkte Verbindung zu den Servern von Google/YouTube 
                (z. B. i.ytimg.com) aufgebaut. Hierbei kann Ihre IP-Adresse übertragen werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO 
                (berechtigtes Interesse an der aktuellen medialen Darstellung).
            </p>

            <h4>Twitch Online-Status</h4>
            <p>
                Zur Anzeige des aktuellen Online- bzw. Stream-Status werden Schnittstellen der Streaming-Plattform Twitch aufgerufen. 
                Hierbei werden technische Daten zur Statusübermittlung verarbeitet.
            </p>

            <h4>Social-Media-Links (Verlinkungen)</h4>
            <p>
                Auf dieser Website sind einfache Links zu Profilen in sozialen Netzwerken (z. B. Twitch, YouTube, Instagram, Discord, Steam, TikTok, GitHub, Patreon, PayPal) 
                eingebunden. Es handelt sich um gewöhnliche Hyperlinks und nicht um aktive Social-Plugins (wie z. B. Like-Buttons). 
                Beim reinen Aufruf dieser Website werden daher keine Daten an diese Plattformen übermittelt. Erst wenn Sie einen Link aktiv anklicken, 
                werden Sie zur jeweiligen Plattform weitergeleitet.
            </p>

            <h3>5. Ihre Rechte als betroffene Person</h3>
            <p>
                Sie haben jederzeit folgende Rechte:
            </p>
            <ul>
                <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Auskunft über Ihre verarbeiteten personenbezogenen Daten.</li>
                <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Berichtigung unrichtiger oder unvollständiger Daten.</li>
                <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Löschung Ihrer bei uns gespeicherten personenbezogenen Daten.</li>
                <li><strong>Recht auf Einschränkung (Art. 18 DSGVO):</strong> Einschränkung der Verarbeitung Ihrer Daten.</li>
                <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Übertragung Ihrer bereitgestellten Daten.</li>
                <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Widerspruch gegen die künftige Verarbeitung Ihrer Daten.</li>
                <li><strong>Beschwerderecht (Art. 77 DSGVO):</strong> Beschwerde bei einer zuständigen Datenschutz-Aufsichtsbehörde.</li>
            </ul>
        </div>
    `;
}

/**
 * Wendet den konfigurierten Hintergrund auch auf eigenständige rechtliche Seiten an
 */
function applyLegalBackground() {
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
            if (backgroundLayer) {
                backgroundLayer.style.backgroundImage = `url('${url}')`;
                backgroundLayer.classList.add('bg-image');
            }
            break;
        case 'video':
            if (backgroundLayer) {
                const video = document.createElement('video');
                video.src = url;
                video.autoplay = true;
                video.loop = true;
                video.muted = true;
                video.playsInline = true;
                video.classList.add('bg-video');
                backgroundLayer.appendChild(video);
            }
            break;
        default:
            body.style.background = `linear-gradient(135deg, #0f0c29, #302b63)`;
            break;
    }
}

/**
 * Befüllt die eigenständigen HTML-Seiten (impressum.html / datenschutz.html)
 */
function renderLegalPage(type) {
    applyLegalBackground();

    const titleEl = document.getElementById('legal-page-title');
    const contentEl = document.getElementById('legal-page-content');
    const profileName = config?.profile?.name || 'Blutmonsterr';

    if (config?.profile?.faviconUrl) {
        const favicon = document.getElementById('favicon');
        if (favicon) favicon.href = config.profile.faviconUrl;
    }

    if (type === 'impressum') {
        document.title = `Impressum | ${profileName}`;
        if (titleEl) titleEl.textContent = 'Impressum';
        if (contentEl) contentEl.innerHTML = getImpressumHTML();
    } else if (type === 'datenschutz') {
        document.title = `Datenschutzerklärung | ${profileName}`;
        if (titleEl) titleEl.textContent = 'Datenschutzerklärung';
        if (contentEl) contentEl.innerHTML = getDatenschutzHTML();
    }
}

/**
 * Initialisiert das Popup/Modal auf der Startseite
 */
function initLegalModal() {
    const modal = document.getElementById('legal-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalStandaloneLink = document.getElementById('modal-standalone-link');
    const closeBtn = document.getElementById('modal-close-btn');
    const actionCloseBtn = document.getElementById('modal-action-close');
    const legalTriggers = document.querySelectorAll('[data-legal]');

    if (!modal || !modalBody) return;

    function openModal(type) {
        if (type === 'impressum') {
            if (modalTitle) modalTitle.textContent = 'Impressum';
            modalBody.innerHTML = getImpressumHTML();
            if (modalStandaloneLink) {
                modalStandaloneLink.href = 'impressum.html';
                modalStandaloneLink.textContent = 'Auf eigener Seite öffnen ↗';
            }
            window.location.hash = 'impressum';
        } else if (type === 'datenschutz') {
            if (modalTitle) modalTitle.textContent = 'Datenschutzerklärung';
            modalBody.innerHTML = getDatenschutzHTML();
            if (modalStandaloneLink) {
                modalStandaloneLink.href = 'datenschutz.html';
                modalStandaloneLink.textContent = 'Auf eigener Seite öffnen ↗';
            }
            window.location.hash = 'datenschutz';
        }

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        if (window.location.hash === '#impressum' || window.location.hash === '#datenschutz') {
            history.replaceState(null, document.title, window.location.pathname + window.location.search);
        }
    }

    legalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const legalType = trigger.getAttribute('data-legal');
            openModal(legalType);
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (actionCloseBtn) actionCloseBtn.addEventListener('click', closeModal);

    // Klick auf den abgedunkelten Hintergrund schließt das Modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Escape-Taste schließt das Modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Deep-Linking: Falls die URL bereits #impressum oder #datenschutz enthält
    const currentHash = window.location.hash.toLowerCase();
    if (currentHash === '#impressum') {
        openModal('impressum');
    } else if (currentHash === '#datenschutz') {
        openModal('datenschutz');
    }
}
