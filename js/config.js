const config = {
    profile: {
        twitchUsername: "blutmonsterr", // z.B. "blutmonsterr"
        youtubeChannelId: "UCDmB-jaw8HMyI2NFIQlSz6Q", // WICHTIG: Muss die ID sein (beginnt mit UC...), nicht der @Handle!
        name: "@Blutmonsterr",
        pageTitle: "Blutmonsterr | Links",
        description: "Willkommen auf meiner Link-Seite! Hier findest du alles Wichtige über mich.",
        profilePictureUrl: "images/avatar.png",
        faviconUrl: "images/icon.ico"
    },
    legal: {
        // ===== RECHTLICHE ANGABEN (DEUTSCHES RECHT: § 5 DDG / ehem. TMG & DSGVO) =====
        name: "Sebastian Mackert",
        co: "c/o Autorenglück #79454",
        street: "Albert-Einstein-Str. 47",
        city: "02977 Hoyerswerda",
        country: "Deutschland",
        email: "info@daddeln.at",
        phone: "", // Keine Telefonnummer angegeben

        // Redaktionell verantwortlich nach § 18 Abs. 2 MStV (Medienstaatsvertrag):
        responsibleName: "Sebastian Mackert",
        responsibleAddress: "c/o Autorenglück #79454, Albert-Einstein-Str. 47, 02977 Hoyerswerda",

        // Umsatzsteuer-Identifikationsnummer (optional, leer lassen falls keine vorhanden):
        vatId: "",

        // Webhosting & Serverstandort:
        hostingProvider: "Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Deutschland",
        serverLocation: "Finnland (Helsinki / EU)"
    },
    layout: {
        showStatusIndicators: true, // true oder false
        showYouTubeBox: true,       // true oder false
        youTubeBoxPosition: 'after', // 'before' oder 'after' den Links
        defaultView: 'list'          // 'list' oder 'grid'
    },
    background: {
        type: 'gradient', // Optionen: 'gradient', 'color', 'image', 'video'
        // Nur für 'gradient'
        gradientStart: '#0f0c29',
        gradientEnd: '#302b63',
        // Nur für 'color'
        color: '#1a1a1a',
        // Nur für 'image', 'video'
        url: 'https://assets.codepen.io/6093409/river.mp4'
    },
    links: [
        {
            url: "https://www.instagram.com/DEIN_PROFIL",
            text: "Folge mir auf Instagram",
            service: "instagram",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.youtube.com/@Blutmonsterr",
            text: "Mein YouTube-Kanal",
            service: "youtube",
            visible: true,
            sortId: 6
        },
        {
            url: "https://www.twitch.tv/blutmonsterr",
            text: "Twitch Stream",
            service: "twitch",
            visible: true,
            sortId: 5
        },
        {
            url: "https://discord.gg/ydJWD3KrXh",
            text: "Mein Discord Server",
            service: "discord",
            visible: true,
            sortId: 8
        },
        {
            url: "https://discordapp.com/users/324166395443150849/",
            text: "Mein Discord Profil",
            service: "discord",
            visible: true,
            sortId: 1
        },
        {
            url: "https://steamcommunity.com/profiles/76561199030453104",
            text: "Mein Steam Profil",
            service: "steam",
            visible: true,
            sortId: 4
        },
        {
            url: "https://daddeln.at/",
            text: "Daddeln.at",
            service: "website",
            visible: true,
            sortId: 7
        },
        {
            url: "https://x.com/DEIN_PROFIL",
            text: "Folge mir auf X",
            service: "x",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.tiktok.com/@DEIN_PROFIL",
            text: "Mein TikTok",
            service: "tiktok",
            visible: false,
            sortId: null
        },
        {
            url: "https://github.com/Blutmonsterr",
            text: "Mein Code auf GitHub",
            service: "github",
            visible: true,
            sortId: 5
        },
        {
            url: "https://www.patreon.com/DEIN_PROFIL",
            text: "Unterstütze mich auf Patreon",
            service: "patreon",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.paypal.me/DEIN_PROFIL",
            text: "Spende via PayPal",
            service: "paypal",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.facebook.com/DEIN_PROFIL",
            text: "Finde mich auf Facebook",
            service: "facebook",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.linkedin.com/in/DEIN_PROFIL",
            text: "Mein LinkedIn Profil",
            service: "linkedin",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.reddit.com/user/DEIN_PROFIL",
            text: "Mein Reddit Profil",
            service: "reddit",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.snapchat.com/add/DEIN_PROFIL",
            text: "Mein Snapchat",
            service: "snapchat",
            visible: false,
            sortId: null
        },
        {
            url: "https://open.spotify.com/user/sebastian.123a",
            text: "Meine Spotify Playlist",
            service: "spotify",
            visible: true,
            sortId: 3
        },
        {
            url: "https://t.me/DEIN_PROFIL",
            text: "Schreib mir auf Telegram",
            service: "telegram",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.threads.net/@DEIN_PROFIL",
            text: "Folge mir auf Threads",
            service: "threads",
            visible: false,
            sortId: null
        },
        {
            url: "https://wa.me/DEINE_NUMMER",
            text: "Schreib mir auf WhatsApp",
            service: "whatsapp",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.amazon.de/hz/wishlist/ls/DEINE_LISTE",
            text: "Meine Amazon Wunschliste",
            service: "amazon",
            visible: false,
            sortId: null
        },
        {
            url: "mailto:deine@email.com",
            text: "Schreib mir eine E-Mail",
            service: "email",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.buymeacoffee.com/DEIN_PROFIL",
            text: "Kauf mir einen Kaffee",
            service: "buy-me-a-coffee",
            visible: false,
            sortId: null
        },
        {
            url: "https://ko-fi.com/DEIN_PROFIL",
            text: "Unterstütze mich auf Ko-fi",
            service: "ko-fi",
            visible: false,
            sortId: null
        },
        {
            url: "https://music.amazon.com/artists/DEIN_PROFIL",
            text: "Amazon Music",
            service: "amazon-music",
            visible: false,
            sortId: null
        },
        {
            url: "https://music.apple.com/us/artist/DEIN_PROFIL",
            text: "Apple Music",
            service: "apple-music",
            visible: false,
            sortId: null
        },
        {
            url: "https://podcasts.apple.com/us/podcast/DEIN_PODCAST",
            text: "Apple Podcasts",
            service: "apple-podcasts",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.apple.com/",
            text: "Apple",
            service: "apple",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.artstation.com/DEIN_PROFIL",
            text: "ArtStation",
            service: "artstation",
            visible: false,
            sortId: null
        },
        {
            url: "https://DEIN_PROFIL.bandcamp.com/",
            text: "Bandcamp",
            service: "bandcamp",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.behance.net/DEIN_PROFIL",
            text: "Behance",
            service: "behance",
            visible: false,
            sortId: null
        },
        {
            url: "https://bsky.app/profile/DEIN_PROFIL.bsky.social",
            text: "Bluesky",
            service: "bluesky",
            visible: false,
            sortId: null
        },
        {
            url: "https://cal.com/DEIN_PROFIL",
            text: "Cal.com",
            service: "cal",
            visible: false,
            sortId: null
        },
        {
            url: "https://calendly.com/DEIN_PROFIL",
            text: "Calendly",
            service: "calendly",
            visible: false,
            sortId: null
        },
        {
            url: "https://dev.to/DEIN_PROFIL",
            text: "Dev.to",
            service: "dev-to",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.discogs.com/user/DEIN_PROFIL",
            text: "Discogs",
            service: "discogs",
            visible: false,
            sortId: null
        },
        {
            url: "https://dribbble.com/DEIN_PROFIL",
            text: "Dribbble",
            service: "dribbble",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.etsy.com/shop/DEIN_SHOP",
            text: "Etsy",
            service: "etsy",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.figma.com/@DEIN_PROFIL",
            text: "Figma",
            service: "figma",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.fiverr.com/DEIN_PROFIL",
            text: "Fiverr",
            service: "fiverr",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.flickr.com/photos/DEIN_PROFIL",
            text: "Flickr",
            service: "flickr",
            visible: false,
            sortId: null
        },
        {
            url: "https://gitlab.com/DEIN_PROFIL",
            text: "GitLab",
            service: "gitlab",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.gofundme.com/f/DEINE_KAMPAGNE",
            text: "GoFundMe",
            service: "gofundme",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.goodreads.com/user/show/DEIN_PROFIL",
            text: "Goodreads",
            service: "goodreads",
            visible: false,
            sortId: null
        },
        {
            url: "https://scholar.google.com/citations?user=DEIN_PROFIL",
            text: "Google Scholar",
            service: "google-scholar",
            visible: false,
            sortId: null
        },
        {
            url: "https://DEIN_PROFIL.hashnode.dev",
            text: "Hashnode",
            service: "hashnode",
            visible: false,
            sortId: null
        },
        {
            url: "https://kick.com/DEIN_PROFIL",
            text: "Kick",
            service: "kick",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.kickstarter.com/profile/DEIN_PROFIL",
            text: "Kickstarter",
            service: "kickstarter",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.last.fm/user/DEIN_PROFIL",
            text: "Last.fm",
            service: "last-fm",
            visible: false,
            sortId: null
        },
        {
            url: "https://letterboxd.com/DEIN_PROFIL/",
            text: "Letterboxd",
            service: "letterboxd",
            visible: false,
            sortId: null
        },
        {
            url: "https://mastodon.social/@DEIN_PROFIL",
            text: "Mastodon",
            service: "mastodon",
            visible: false,
            sortId: null
        },
        {
            url: "https://medium.com/@DEIN_PROFIL",
            text: "Medium",
            service: "medium",
            visible: false,
            sortId: null
        },
        {
            url: "https://m.me/DEIN_PROFIL",
            text: "Messenger",
            service: "messenger",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.pinterest.com/DEIN_PROFIL/",
            text: "Pinterest",
            service: "pinterest",
            visible: false,
            sortId: null
        },
        {
            url: "https://soundcloud.com/DEIN_PROFIL",
            text: "SoundCloud",
            service: "soundcloud",
            visible: false,
            sortId: null
        },
        {
            url: "https://DEIN_PROFIL.substack.com",
            text: "Substack",
            service: "substack",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.tumblr.com/DEIN_PROFIL",
            text: "Tumblr",
            service: "tumblr",
            visible: false,
            sortId: null
        },
        {
            url: "https://vimeo.com/DEIN_PROFIL",
            text: "Vimeo",
            service: "vimeo",
            visible: false,
            sortId: null
        },
        {
            url: "https://DEIN_PROFIL.wordpress.com",
            text: "WordPress",
            service: "wordpress",
            visible: false,
            sortId: null
        },
        {
            url: "https://DEIN_BLOG.com",
            text: "Mein Blog",
            service: "blog",
            visible: false,
            sortId: null
        },
        {
            url: "https://cash.app/$DEIN_PROFIL",
            text: "Cash App",
            service: "cash-app-dollar",
            visible: false,
            sortId: null
        },
        {
            url: "https://drive.google.com/",
            text: "Google Drive",
            service: "google-drive",
            visible: false,
            sortId: null
        },
        {
            url: "https://play.google.com/store/apps/dev?id=DEINE_ID",
            text: "Google Play",
            service: "google-play",
            visible: false,
            sortId: null
        },
        {
            url: "https://podcasts.google.com/feed/DEIN_FEED",
            text: "Google Podcasts",
            service: "google-podcasts",
            visible: false,
            sortId: null
        },
        {
            url: "https://kit.co/DEIN_PROFIL",
            text: "Mein Kit",
            service: "kit",
            visible: false,
            sortId: null
        },
        {
            url: "https://line.me/ti/p/~DEIN_PROFIL",
            text: "LINE",
            service: "line",
            visible: false,
            sortId: null
        },
        {
            url: "https://littlelink.io",
            text: "LittleLink",
            service: "littlelink",
            visible: false,
            sortId: null
        },
        {
            url: "https://mailchimp.com/",
            text: "Mailchimp",
            service: "mailchimp",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.microsoft.com",
            text: "Microsoft",
            service: "microsoft",
            visible: false,
            sortId: null
        },
        {
            url: "https://ngl.link/DEIN_PROFIL",
            text: "NGL",
            service: "ngl",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.notion.so/",
            text: "Notion",
            service: "notion",
            visible: false,
            sortId: null
        },
        {
            url: "https://obsidian.md",
            text: "Obsidian",
            service: "obsidian",
            visible: false,
            sortId: null
        },
        {
            url: "https://onlyfans.com/DEIN_PROFIL",
            text: "OnlyFans",
            service: "onlyfans",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.producthunt.com/@DEIN_PROFIL",
            text: "Product Hunt",
            service: "product-hunt",
            visible: false,
            sortId: null
        },
        {
            url: "https://read.cv/DEIN_PROFIL",
            text: "Read.cv",
            service: "read-cv",
            visible: false,
            sortId: null
        },
        {
            url: "https://signal.org/",
            text: "Signal",
            service: "signal",
            visible: false,
            sortId: null
        },
        {
            url: "https://slack.com/",
            text: "Slack",
            service: "slack",
            visible: false,
            sortId: null
        },
        {
            url: "https://stackoverflow.com/users/DEIN_PROFIL",
            text: "Stack Overflow",
            service: "stack-overflow",
            visible: false,
            sortId: null
        },
        {
            url: "https://www.strava.com/athletes/DEIN_PROFIL",
            text: "Mein Strava Profil",
            service: "strava",
            visible: false,
            sortId: null
        },
        {
            url: "https://threema.id/DEINE_ID",
            text: "Meine Threema ID",
            service: "threema",
            visible: false,
            sortId: null
        },
        {
            url: "https://trello.com/b/DEIN_BOARD",
            text: "Mein Trello Board",
            service: "trello",
            visible: false,
            sortId: null
        },
        {
            url: "https://unsplash.com/@DEIN_PROFIL",
            text: "Meine Unsplash Fotos",
            service: "unsplash",
            visible: false,
            sortId: null
        },
        {
            url: "https://venmo.com/u/DEIN_PROFIL",
            text: "Mein Venmo",
            service: "venmo",
            visible: false,
            sortId: null
        },
        {
            url: "https://vrchat.com/home/user/DEIN_PROFIL",
            text: "Mein VRChat Profil",
            service: "vrchat",
            visible: false,
            sortId: null
        },
        {
            url: "https://vsco.co/DEIN_PROFIL/gallery",
            text: "Mein VSCO",
            service: "vsco",
            visible: false,
            sortId: null
        },
        {
            url: "https://music.youtube.com/channel/DEINE_ID",
            text: "YouTube Music",
            service: "youtube-music",
            visible: false,
            sortId: null
        },
        {
            url: "https://zoom.us/",
            text: "Zoom",
            service: "zoom",
            visible: false,
            sortId: null
        },
        {
            url: "https://example.com",
            text: "Shop",
            service: "shop",
            visible: false,
            sortId: null
        },
        {
            url: "#",
            text: "Dieser Link ist versteckt",
            service: "default",
            visible: false,
            sortId: null
        }
    ]
};