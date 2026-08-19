/* ==========================================================================
   book.js — the 5-page 3D letter book
   Opened by the "Click here cutiee" button on final.html.
   ========================================================================== */
(function () {
    'use strict';

    /* ======================================================================
       ✏️  EDIT HERE — this is the only block you need to change.
       One entry per page. `image` and `audio` are optional (use null to skip).
       Audio: one filename, or an array of them to play back-to-back in order.
       Images: any file in images/. Filenames with spaces need %20,
               e.g. "images/WhatsApp%20Image%202026-08-16%20at%2022.19.20.jpeg"
       ====================================================================== */

    var PAGES = [
        {
            title: 'Falguni Aunty',
            body: 'Janamm din ni khoob khoob vadhai Stuti. Thakorji maa sadaiv tane preeti rahe, ane tu khoob khoob tarakki kare, tara badha sapna poora kare Thakorji.',
            image: null,
            audio: 'audio/1.m4a'
        },
        {
            title: 'Parth & Taylor',
            body: 'Taylor:\nHi Stuti, Happy Birthday! I hope you have a great day, I love you so much.\n\nParth:\nHey Stuti, Happy Birthday. Wish you have a great day tomorrow and I hope I\'m there next year.',
            image: null,
            audio: ['audio/2.m4a', 'audio/2a.m4a']
        },
        {
            title: 'Avani',
            body: 'Happy Birthday Scooty. Stay happy and pretty always. You are the precious one in my life, and I love you the most. Love you, Huzoor.',
            image: null,
            audio: 'audio/3.m4a'
        },
        {
            title: 'Khushi',
            body: 'Happy Birthday Stuart Little. Keep shining the way you do Stuti, because the world is a little brighter with you in it. And remember, you\'ll always be my A1 since Day 1. Have the best birthday ever. Bye-bye.',
            image: null,
            audio: 'audio/4.m4a'
        },
        {
            title: 'Pritesh / Boyfriend / Dobaa',
            body: 'Hi baby, Happy Birthday. I really hope you liked the whole scrapbook I made for you. And I hope you have a really, really, really good day tomorrow. I hope you enjoy, I hope you have dumplings, I hope you get to eat everything and have a lot of fun tomorrow. And also you\'re going to get another surprise tomorrow, so be ready for that. Bye-bye, love you.',
            image: null,
            audio: 'audio/5.m4a'
        }
    ];

    /* ----------------------------------------------------------------------
       The scrapbook collages, one facing each of pages 1-3. They are indexed
       by leaf, not by page: index 0 is the inside of the front cover (which
       lands opposite page 1), index 1 is the back of page 1 (opposite page 2),
       and so on. Each collage is on the left of its spread.

       Coordinates are plain pixels inside the 450 x 580 verso. The whole book
       is scaled as one unit by fit(), so this composition holds its shape on
       every screen. dw/dh are each photo's TRUE on-screen dimensions (several
       of these files carry EXIF rotation, so they are not the stored pixel
       dimensions) — the frame takes its aspect from them, so nothing crops.
       ---------------------------------------------------------------------- */

    var IMG = 'images/WhatsApp Image ';
    var US = 'images/';

    var COLLAGES = [
        {   /* inside front cover, facing page 1 — an overlapping pile */
            label: [
                { text: 'For you ♥', x: 34, y: 48, tilt: -3 },
                { text: '🎧 turn your sound on', x: 30, y: 532, tilt: -1.5, cls: 'is-hint' }
            ],
            doodle: { x: 36, y: 82, w: 58, tilt: -2 },
            ribbon: { x: 300, y: 470, len: 124, tilt: -16 },
            bow: { x: 292, y: 448, w: 58, tilt: -8 },
            stickers: [
                { src: 'images/love.png', x: 320, y: 28, w: 76, tilt: 7 }
            ],
            items: [
                { src: IMG + '2026-08-16 at 22.19.22.jpeg', dw: 1080, dh: 1440,
                  x: 38, y: 118, w: 140, tilt: -5,
                  frame: 'polaroid', caption: '♥', tape: ['tl'] },

                { src: IMG + '2026-08-16 at 22.19.20 (2).jpeg', dw: 1280, dh: 960,
                  x: 196, y: 86, w: 160, tilt: 4,
                  frame: 'print', tape: ['tr', 'bl'], tone: 1 },

                { src: IMG + '2026-08-16 at 22.19.19.jpeg', dw: 720, dh: 1280,
                  x: 248, y: 200, w: 104, tilt: -3,
                  frame: 'polaroid', tape: ['tl'], tone: 2 },

                { src: IMG + '2026-08-16 at 22.19.21 (2).jpeg', dw: 780, dh: 1040,
                  x: 64, y: 326, w: 118, tilt: 6,
                  frame: 'polaroid', caption: 'us ♥' },

                { src: IMG + '2026-08-17 at 08.08.37.jpeg', dw: 240, dh: 320,
                  x: 214, y: 428, w: 72, tilt: -8,
                  frame: 'print', tape: ['tr'], tone: 3 }
            ]
        },

        {   /* facing page 2 — a calmer album page: corner mounts and a clip */
            note: { text: 'best days ♥', x: 214, y: 400, w: 132, tilt: -3 },
            stickers: [
                { src: 'images/heart_letter.png', x: 340, y: 36, w: 70, tilt: -8 }
            ],
            items: [
                { src: IMG + '2026-08-16 at 22.19.44.jpeg', dw: 1200, dh: 1444,
                  x: 38, y: 62, w: 136, tilt: -2,
                  frame: 'print', corners: ['tl', 'br'] },

                { src: 'images/11.jpg', dw: 1080, dh: 1080,
                  x: 214, y: 84, w: 132, tilt: 3.5,
                  frame: 'print', clip: true },

                { src: IMG + '2026-07-29 at 22.19.26.jpeg', dw: 4000, dh: 2252,
                  x: 48, y: 258, w: 176, tilt: 2.5,
                  frame: 'print', tape: ['tl', 'br'], tone: 2 },

                { src: IMG + '2026-07-29 at 22.18.21.jpeg', dw: 1280, dh: 960,
                  x: 232, y: 250, w: 140, tilt: -4,
                  frame: 'print', corners: ['tr', 'bl'] },

                { src: IMG + '2026-07-02 at 10.39.23.jpeg', dw: 1200, dh: 1600,
                  x: 64, y: 388, w: 92, tilt: 5,
                  frame: 'polaroid', caption: '♥' }
            ]
        },

        {   /* facing page 3 — prints pegged to a sagging length of twine */
            label: [{ text: 'best of us ♥', x: 140, y: 42, tilt: -2 }],
            twine: 'M14,92 C120,150 320,150 436,84',
            pegs: [
                { x: 82, y: 112, tilt: -4 },
                { x: 216, y: 127, tilt: 3 },
                { x: 345, y: 108, tilt: -2 }
            ],
            doodle: { x: 196, y: 62, w: 54, tilt: 2 },
            items: [
                { src: IMG + '2026-02-13 at 22.07.39.jpeg', dw: 2252, dh: 4000,
                  x: 32, y: 126, w: 98, tilt: -3, frame: 'print' },

                { src: IMG + '2026-08-17 at 08.08.59.jpeg', dw: 899, dh: 1600,
                  x: 168, y: 141, w: 94, tilt: 2.5, frame: 'print' },

                { src: IMG + '2026-08-09 at 20.56.17.jpeg', dw: 1200, dh: 1600,
                  x: 292, y: 122, w: 104, tilt: -4, frame: 'print' },

                { src: IMG + '2026-05-08 at 17.40.57.jpeg', dw: 3024, dh: 4032,
                  x: 40, y: 336, w: 130, tilt: 4,
                  frame: 'polaroid', caption: '♥' },

                { src: IMG + '2026-08-16 at 22.19.21 (1).jpeg', dw: 720, dh: 1280,
                  x: 198, y: 344, w: 92, tilt: -5,
                  frame: 'polaroid', tape: ['tl'], tone: 2 },

                { src: IMG + '2026-08-16 at 22.19.21 (3).jpeg', dw: 585, dh: 1040,
                  x: 306, y: 366, w: 88, tilt: 6,
                  frame: 'print', tape: ['tl', 'br'], tone: 1 }
            ]
        },

        {   /* facing page 4 — a satin sash across the corner */
            label: [{ text: 'more of us ♥', x: 40, y: 46, tilt: -2 }],
            doodle: { x: 44, y: 76, w: 52, tilt: -1 },
            ribbon: { x: 286, y: 46, len: 118, tilt: 16 },
            bow: { x: 272, y: 28, w: 54, tilt: 10 },
            stickers: [
                { src: 'images/love.png', x: 330, y: 430, w: 64, tilt: -8 }
            ],
            items: [
                { src: IMG + '2026-08-16 at 22.19.20.jpeg', dw: 719, dh: 1280,
                  x: 40, y: 110, w: 100, tilt: -4,
                  frame: 'polaroid', caption: 'us ♥' },

                { src: IMG + '2026-08-16 at 22.19.21.jpeg', dw: 1280, dh: 960,
                  x: 170, y: 96, w: 158, tilt: 3,
                  frame: 'print', tape: ['tr'], tone: 1 },

                { src: IMG + '2026-08-16 at 22.19.18.jpeg', dw: 1149, dh: 1280,
                  x: 246, y: 238, w: 132, tilt: -3,
                  frame: 'print', corners: ['tl', 'br'] },

                { src: IMG + '2026-08-16 at 22.19.22 (1).jpeg', dw: 780, dh: 1040,
                  x: 54, y: 352, w: 118, tilt: 5,
                  frame: 'polaroid' },

                { src: IMG + '2026-08-17 at 08.08.36.jpeg', dw: 551, dh: 980,
                  x: 204, y: 396, w: 76, tilt: -6,
                  frame: 'print', tape: ['tl', 'br'], tone: 3 }
            ]
        },

        {   /* facing page 5 — the fullest page: six of us, a clip and a torn note */
            label: [{ text: 'always, us ♥', x: 30, y: 42, tilt: -3 }],
            doodle: { x: 34, y: 74, w: 56, tilt: -2 },
            note: { text: 'my person ♥', x: 34, y: 470, w: 124, tilt: -3 },
            stickers: [
                { src: 'images/heart.png', x: 330, y: 40, w: 44, tilt: 9 }
            ],
            items: [
                { src: US + '3AD80FCF-3FFE-4012-AC31-E0F2A652623E_1_105_c.jpeg',
                  dw: 768, dh: 1024,
                  x: 28, y: 100, w: 122, tilt: -4,
                  frame: 'polaroid', caption: 'my favourite ♥', tape: ['tl'] },

                { src: US + '8EF909A6-682D-4DC6-8A79-82AD538F195F_1_105_c.jpeg',
                  dw: 1024, dh: 768,
                  x: 182, y: 92, w: 148, tilt: 3.5,
                  frame: 'print', tape: ['tr', 'bl'], tone: 1 },

                { src: US + '67599943-F7BD-47AE-9845-17BCEEB7B357_1_105_c.jpeg',
                  dw: 1024, dh: 768,
                  x: 234, y: 196, w: 136, tilt: -3,
                  frame: 'print', clip: true },

                { src: US + '6BCA1487-E7C5-474B-8223-78CD53F831E5_1_105_c.jpeg',
                  dw: 768, dh: 1024,
                  x: 36, y: 310, w: 104, tilt: 5,
                  frame: 'print', corners: ['tl', 'br'] },

                { src: US + 'EC6DBF27-CF2D-40F3-A8C3-57FCD7452726_1_105_c.jpeg',
                  dw: 1024, dh: 768,
                  x: 160, y: 312, w: 128, tilt: -2.5,
                  frame: 'print', tape: ['tl', 'br'], tone: 2 },

                { src: US + 'BC06C7AD-D053-42BA-8AF5-A6F0852C40EB_1_105_c.jpeg',
                  dw: 1024, dh: 768,
                  x: 236, y: 396, w: 116, tilt: 4,
                  frame: 'polaroid', caption: '♥' }
            ]
        }
    ];

    var COVER = {
        to: 'To: Dr. Cutiepiee❤️',
        title: 'Happy Birthday',
        image: 'images/1.jpg',
        from: 'From your Babooo',
        hint: 'TAP TO OPEN'
    };

    var INSIDE_COVER = 'For you 💕\n\n🎧 turn your sound on';
    var THE_END = 'The End 💕';

    /* ==================== end of editable block ========================== */

    var BOOK_W = 900;
    var BOOK_H = 580;
    var SINGLE_BREAKPOINT = 720;

    var reduceMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var TURN_MS = reduceMotion ? 20 : 900;

    var TOTAL_LEAVES = PAGES.length + 1;   // cover + one leaf per page

    var overlay, stage, book, leavesEl, turnShadow, indicator;
    var prevBtn, nextBtn, muteBtn, closeBtn;
    var leaves = [];

    var current = 0;        // 0 = closed. n = n leaves turned; leaf n's front is live.
    var isTurning = false;
    var isOpen = false;
    var muted = false;

    /* ---------------------------------------------------------------- utils */

    function el(tag, cls, html) {
        var n = document.createElement(tag);
        if (cls) n.className = cls;
        if (html != null) n.innerHTML = html;
        return n;
    }

    function esc(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    /* ------------------------------------------------------------ page HTML */

    function coverFace() {
        var p = el('div', 'page page--cover');
        if (COVER.image) {
            var f = el('div', 'cover__frame');
            var img = el('img');
            img.src = COVER.image;
            img.alt = '';
            f.appendChild(img);
            p.appendChild(f);
        }
        p.appendChild(el('div', 'cover__to', esc(COVER.to)));
        p.appendChild(el('h2', 'page__title', esc(COVER.title)));
        if (COVER.from) { p.appendChild(el('div', 'cover__from', esc(COVER.from))); }
        p.appendChild(el('div', 'cover__hint', esc(COVER.hint)));
        return p;
    }

    function simpleFace(cls, text) {
        var p = el('div', 'page ' + cls);
        p.appendChild(el('div', 'page__body', esc(text)));
        return p;
    }

    /* ------------------------------------------------------------ scrapbook */

    var SVG_NS = 'http://www.w3.org/2000/svg';

    function svgEl(tag, attrs) {
        var n = document.createElementNS(SVG_NS, tag);
        for (var k in attrs) {
            if (Object.prototype.hasOwnProperty.call(attrs, k)) {
                n.setAttribute(k, attrs[k]);
            }
        }
        return n;
    }

    // Every loose thing on the page is placed the same way: x/y in verso
    // pixels plus a tilt, so the CSS only ever needs one transform rule.
    function place(node, o) {
        node.style.setProperty('--x', (o.x || 0) + 'px');
        node.style.setProperty('--y', (o.y || 0) + 'px');
        node.style.setProperty('--tilt', (o.tilt || 0) + 'deg');
        if (o.w) { node.style.setProperty('--w', o.w + 'px'); }
        return node;
    }

    // A paperclip drawn twice: once behind the print, once in front with the
    // left half clipped away. Two arms, one either side of the paper — that
    // split is the whole trick.
    function paperclip(front) {
        var s = svgEl('svg', {
            'class': 'scrap__clip' + (front ? ' is-over' : ' is-under'),
            viewBox: '0 0 26 64'
        });
        s.appendChild(svgEl('path', {
            'class': 'clip__wire',
            d: 'M7,56 L7,15 A6.5,6.5 0 0 1 20,15 L20,47 A5,5 0 0 1 10,47 L10,23'
        }));
        return s;
    }

    function twine(d) {
        var s = svgEl('svg', { 'class': 'scrap__twine', viewBox: '0 0 450 580' });
        s.appendChild(svgEl('path', { 'class': 'twine__shade', d: d }));
        s.appendChild(svgEl('path', { 'class': 'twine__core', d: d }));
        s.appendChild(svgEl('path', { 'class': 'twine__fibre', d: d }));
        return s;
    }

    function bow(o) {
        var s = place(svgEl('svg', { 'class': 'scrap__bow', viewBox: '0 0 64 42' }), o);
        s.appendChild(svgEl('path', { 'class': 'bow__tail', d: 'M30,20 C24,31 20,36 13,41 L22,41 C27,34 31,27 33,22 Z' }));
        s.appendChild(svgEl('path', { 'class': 'bow__tail', d: 'M34,20 C40,31 44,36 51,41 L42,41 C37,34 33,27 31,22 Z' }));
        s.appendChild(svgEl('path', { 'class': 'bow__loop', d: 'M32,18 C18,2 2,8 6,20 C9,29 24,26 32,18 Z' }));
        s.appendChild(svgEl('path', { 'class': 'bow__loop', d: 'M32,18 C46,2 62,8 58,20 C55,29 40,26 32,18 Z' }));
        s.appendChild(svgEl('ellipse', { 'class': 'bow__knot', cx: 32, cy: 19, rx: 5.2, ry: 4.6 }));
        return s;
    }

    function doodle(o) {
        var s = place(svgEl('svg', { 'class': 'scrap__doodle', viewBox: '0 0 60 18' }), o);
        s.appendChild(svgEl('path', {
            d: 'M2,13 C10,4 18,16 26,8 C33,1 40,13 48,7 M44,4 L49,7 L45,11'
        }));
        return s;
    }

    function scrapItem(o) {
        var item = place(el('div', 'scrap__item is-' + (o.frame || 'print')), o);

        if (o.clip) { item.appendChild(paperclip(false)); }

        var photo = el('div', 'scrap__photo');
        if (o.dw && o.dh) { photo.style.setProperty('--ar', o.dw + ' / ' + o.dh); }
        var img = el('img');
        // Without dw/dh, take the shape from the file itself. naturalWidth is
        // already EXIF-corrected, so a sideways-stored photo still frames right.
        img.onload = function () {
            if (!o.dw && img.naturalWidth) {
                photo.style.setProperty('--ar', img.naturalWidth + ' / ' + img.naturalHeight);
            }
        };
        img.src = encodeURI(o.src);
        img.alt = '';
        img.decoding = 'async';
        // A photo that will not load should take its frame with it rather than
        // leave an empty white card sitting on the page.
        img.onerror = function () { item.remove(); };
        photo.appendChild(img);
        item.appendChild(photo);

        if (o.caption) { item.appendChild(el('div', 'scrap__caption', esc(o.caption))); }

        (o.corners || []).forEach(function (spot) {
            item.appendChild(el('span', 'scrap__corner is-' + spot));
        });

        (o.tape || []).forEach(function (spot, i) {
            item.appendChild(el('span',
                'scrap__tape is-' + spot + ' is-tone' + (((o.tone || 0) + i) % 4)));
        });

        if (o.clip) { item.appendChild(paperclip(true)); }
        return item;
    }

    function buildCollage(c) {
        var wrap = el('div', 'scrap');
        var t = 0.06;

        // Everything lands in the order it was stuck down, one beat apart.
        function add(node) {
            node.style.setProperty('--t', t.toFixed(2) + 's');
            t += 0.07;
            wrap.appendChild(node);
            return node;
        }

        if (c.twine) { add(twine(c.twine)); }

        (c.items || []).forEach(function (o) { add(scrapItem(o)); });

        // Pegs go on after the prints so they clamp over the top edge.
        (c.pegs || []).forEach(function (o) {
            var peg = place(el('div', 'scrap__peg'), o);
            peg.appendChild(el('span', 'peg__spring'));
            add(peg);
        });

        if (c.ribbon) {
            var r = place(el('div', 'scrap__ribbon'), c.ribbon);
            r.style.setProperty('--len', c.ribbon.len + 'px');
            add(r);
        }
        if (c.bow) { add(bow(c.bow)); }
        if (c.doodle) { add(doodle(c.doodle)); }

        (c.label || []).forEach(function (o) {
            add(place(el('div', 'scrap__label ' + (o.cls || ''), esc(o.text)), o));
        });
        if (c.note) {
            var note = place(el('div', 'scrap__note', esc(c.note.text)), c.note);
            note.style.setProperty('--w', c.note.w + 'px');
            add(note);
        }

        (c.stickers || []).forEach(function (o) {
            var s = place(el('img', 'scrap__sticker'), o);
            s.src = encodeURI(o.src);
            s.alt = '';
            s.onerror = function () { s.remove(); };
            add(s);
        });

        // One grain wash over the whole thing, photos included — it is what
        // makes them read as stuck to the paper rather than floating above it.
        wrap.appendChild(el('div', 'scrap__grain'));
        return wrap;
    }

    // The back of leaf i. Leaf 0's back is the inside of the front cover; every
    // other leaf backs a letter page and carries that page's number.
    function backFace(i) {
        var c = COLLAGES[i];
        if (!c) {
            if (i === 0) { return simpleFace('page--inside', INSIDE_COVER); }
            var plain = el('div', 'page page--verso');
            plain.appendChild(el('div', 'verso__mark', '❦'));
            plain.appendChild(el('div', 'page__num', esc(i)));
            return plain;
        }
        var p = el('div', 'page page--verso page--scrap');
        p.appendChild(buildCollage(c));
        if (i > 0) { p.appendChild(el('div', 'page__num', esc(i))); }
        return p;
    }

    function contentFace(data, n) {
        var p = el('div', 'page');
        var t = 0;

        function stagger(node) {
            node.style.setProperty('--t', t.toFixed(2) + 's');
            t += 0.08;
            p.appendChild(node);
        }

        if (data.title) {
            stagger(el('h2', 'page__title', esc(data.title)));
            stagger(el('div', 'page__rule'));
        }
        if (data.image) {
            var img = el('img', 'page__img');
            img.src = data.image;
            img.alt = '';
            img.onerror = function () { img.remove(); };
            stagger(img);
        }
        stagger(el('div', 'page__body', esc(data.body || '')));

        var bar = el('div', 'page__audio');
        bar.appendChild(el('span'));
        p.appendChild(bar);
        p.appendChild(el('div', 'page__num', 'PAGE ' + n + ' OF ' + PAGES.length));
        return p;
    }

    function makeLeaf(frontEl, backEl) {
        var leaf = el('div', 'leaf');
        var front = el('div', 'leaf__face leaf__face--front');
        var back = el('div', 'leaf__face leaf__face--back');
        front.appendChild(frontEl);
        back.appendChild(backEl);
        leaf.appendChild(front);
        leaf.appendChild(back);
        return leaf;
    }

    /* ----------------------------------------------------------------- build */

    function build() {
        overlay = el('div', 'book-overlay');
        overlay.id = 'bookOverlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', 'Birthday letter book');

        var chrome = el('div', 'book-chrome');
        muteBtn = el('button', 'book-icon-btn', '<i class="fa-solid fa-volume-high"></i>');
        muteBtn.type = 'button';
        muteBtn.setAttribute('aria-label', 'Mute audio');
        closeBtn = el('button', 'book-icon-btn', '<i class="fa-solid fa-xmark"></i>');
        closeBtn.type = 'button';
        closeBtn.setAttribute('aria-label', 'Close the book');
        chrome.appendChild(muteBtn);
        chrome.appendChild(closeBtn);
        overlay.appendChild(chrome);

        prevBtn = el('button', 'book-nav book-nav--prev', '<i class="fa-solid fa-chevron-left"></i>');
        prevBtn.type = 'button';
        prevBtn.setAttribute('aria-label', 'Previous page');
        nextBtn = el('button', 'book-nav book-nav--next', '<i class="fa-solid fa-chevron-right"></i>');
        nextBtn.type = 'button';
        nextBtn.setAttribute('aria-label', 'Next page');
        overlay.appendChild(prevBtn);
        overlay.appendChild(nextBtn);

        stage = el('div', 'book-stage');
        book = el('div', 'book');

        book.appendChild(el('div', 'book__board book__board--left'));
        book.appendChild(el('div', 'book__board book__board--right'));
        book.appendChild(el('div', 'book__block book__block--left'));
        book.appendChild(el('div', 'book__block book__block--right'));
        book.appendChild(el('div', 'book__edge book__edge--left'));
        book.appendChild(el('div', 'book__edge book__edge--right'));

        leavesEl = el('div', 'book__leaves');

        // Back cover, permanently at the bottom of the right-hand stack.
        var end = simpleFace('page--end', THE_END);
        var endWrap = el('div', 'leaf__face leaf__face--front');
        endWrap.appendChild(end);
        var endLeaf = el('div', 'leaf');
        endLeaf.style.zIndex = '0';
        endLeaf.appendChild(endWrap);
        leavesEl.appendChild(endLeaf);

        // Leaf 0 — the cover. Front: cover art. Back: inside cover, or the
        // first collage, which is the page facing page 1.
        leaves.push(makeLeaf(coverFace(), backFace(0)));

        // Leaves 1..N — front is a content page, back faces the next one.
        PAGES.forEach(function (p, i) {
            leaves.push(makeLeaf(contentFace(p, i + 1), backFace(i + 1)));
        });

        leaves.forEach(function (l) { leavesEl.appendChild(l); });

        turnShadow = el('div', 'book__turnshadow');
        turnShadow.style.zIndex = String(TOTAL_LEAVES + 5);
        leavesEl.appendChild(turnShadow);

        book.appendChild(leavesEl);
        book.appendChild(el('div', 'book__spine'));
        stage.appendChild(book);
        overlay.appendChild(stage);

        indicator = el('div', 'book-indicator');
        for (var i = 0; i <= PAGES.length; i++) {
            indicator.appendChild(el('span', 'book-dot'));
        }
        overlay.appendChild(indicator);

        document.body.appendChild(overlay);
    }

    /* ----------------------------------------------------------------- audio */

    var audioCache = {};
    var playing = null;      // { el, src }
    var progressRaf = null;
    var playToken = 0;       // bumped on every stop, so a stale sequence can tell

    // A page's `audio` may be one filename or an array to play back-to-back.
    function srcList(page) {
        if (!page || !page.audio) return [];
        var a = page.audio;
        return (Object.prototype.toString.call(a) === '[object Array]' ? a : [a])
            .filter(Boolean);
    }

    function getAudio(src) {
        if (!src) return null;
        if (!audioCache[src]) {
            var a = new Audio();
            a.preload = 'auto';
            a.src = src;
            a.addEventListener('error', function () { a._broken = true; });
            audioCache[src] = a;
        }
        return audioCache[src];
    }

    function fadeOut(a) {
        if (!a) return;
        if (reduceMotion) { a.pause(); a.currentTime = 0; a.volume = 1; return; }
        var start = a.volume;
        var t0 = null;
        function step(ts) {
            if (t0 === null) t0 = ts;
            var k = Math.min(1, (ts - t0) / 150);
            a.volume = Math.max(0, start * (1 - k));
            if (k < 1) { requestAnimationFrame(step); }
            else { a.pause(); a.currentTime = 0; a.volume = 1; }
        }
        requestAnimationFrame(step);
    }

    function stopAudio() {
        playToken++;
        if (progressRaf) { cancelAnimationFrame(progressRaf); progressRaf = null; }
        clearBars();
        if (playing) { fadeOut(playing.el); playing = null; }
    }

    function clearBars() {
        var bars = overlay.querySelectorAll('.page__audio');
        for (var i = 0; i < bars.length; i++) {
            bars[i].classList.remove('is-playing');
            bars[i].firstChild.style.width = '0%';
        }
    }

    function playFor(pageIndex) {
        stopAudio();
        if (pageIndex < 0 || pageIndex >= PAGES.length) return;

        var list = srcList(PAGES[pageIndex]);
        var clips = [];
        for (var i = 0; i < list.length; i++) {
            var c = getAudio(list[i]);
            if (c && !c._broken) clips.push(c);
        }
        if (!clips.length) return;

        var token = playToken;
        var bar = leaves[pageIndex + 1].querySelector('.leaf__face--front .page__audio');
        var done = 0;   // seconds of clips already finished on this page

        // Only meaningful once every clip has reported its length; until then the
        // bar falls back to the current clip on its own.
        function totalDuration() {
            var t = 0;
            for (var i = 0; i < clips.length; i++) {
                var d = clips[i].duration;
                if (!d || !isFinite(d)) return 0;
                t += d;
            }
            return t;
        }

        function playAt(i) {
            if (token !== playToken || i >= clips.length) return;
            var a = clips[i];
            a.currentTime = 0;
            a.volume = 1;
            a.muted = muted;
            playing = { el: a, src: list[i] };

            var p = a.play();
            // No audio file yet (or the browser refused) — the book just stays silent.
            if (p && p.catch) {
                p.catch(function () { if (bar) bar.classList.remove('is-playing'); });
            }

            if (bar) {
                // Only show the progress bar once sound is genuinely coming out,
                // so a missing file leaves no stray widget on the page.
                a.addEventListener('playing', function () {
                    if (token === playToken && playing && playing.el === a) {
                        bar.classList.add('is-playing');
                    }
                }, { once: true });
            }

            function advance() {
                if (token !== playToken) return;
                if (a.duration && isFinite(a.duration)) done += a.duration;
                if (i + 1 < clips.length) { playAt(i + 1); }
                else if (bar) { bar.classList.remove('is-playing'); }
            }

            a.addEventListener('ended', advance, { once: true });
            // A clip that fails to load must not strand the rest of the page.
            a.addEventListener('error', advance, { once: true });
        }

        playAt(0);

        if (bar) {
            var fill = bar.firstChild;
            (function tick() {
                if (token !== playToken) return;
                var a = playing && playing.el;
                if (a) {
                    var total = totalDuration();
                    if (total) {
                        fill.style.width =
                            (((done + a.currentTime) / total) * 100).toFixed(1) + '%';
                    } else if (a.duration && isFinite(a.duration)) {
                        fill.style.width =
                            ((a.currentTime / a.duration) * 100).toFixed(1) + '%';
                    }
                }
                progressRaf = requestAnimationFrame(tick);
            })();
        }

        // Warm up the next page's audio while this one plays.
        var next = srcList(PAGES[pageIndex + 1]);
        for (var k = 0; k < next.length; k++) { getAudio(next[k]); }
    }

    function setMuted(v) {
        muted = v;
        if (playing) { playing.el.muted = muted; }
        muteBtn.innerHTML = muted
            ? '<i class="fa-solid fa-volume-xmark"></i>'
            : '<i class="fa-solid fa-volume-high"></i>';
        muteBtn.setAttribute('aria-label', muted ? 'Unmute audio' : 'Mute audio');
        try { sessionStorage.setItem('bookMuted', muted ? '1' : '0'); } catch (e) {}
    }

    /* ------------------------------------------------------------ rendering */

    function applyStack() {
        leaves.forEach(function (leaf, i) {
            if (i < current) {
                leaf.classList.add('is-turned');
                leaf.style.zIndex = String(i + 1);
                // A turned leaf faces the other way, so its local +Z points away
                // from the reader: later leaves need a negative lift to land on
                // top of the ones that turned before them.
                leaf.style.setProperty('--lift', (-0.25 * (i + 1)).toFixed(2) + 'px');
                // Single-page mode shows only the live page, so leaves that
                // have landed on the left half must not stay visible.
                leaf.classList.toggle('is-parked', book.classList.contains('book--single'));
            } else {
                leaf.classList.remove('is-turned', 'is-parked');
                leaf.style.zIndex = String(TOTAL_LEAVES - i);
                leaf.style.setProperty('--lift',
                    (0.25 * (TOTAL_LEAVES - i)).toFixed(2) + 'px');
            }
        });

        book.style.setProperty('--left-count', current);
        book.style.setProperty('--right-count', TOTAL_LEAVES - current);
        book.classList.toggle('is-open', current > 0);

        prevBtn.disabled = current === 0;
        nextBtn.disabled = current === TOTAL_LEAVES;

        var dots = indicator.children;
        for (var i = 0; i < dots.length; i++) {
            dots[i].classList.toggle('is-current', i === Math.min(current, PAGES.length));
        }

        // mark the live front face so its contents animate in
        var faces = overlay.querySelectorAll('.leaf__face--front.is-current');
        for (var j = 0; j < faces.length; j++) { faces[j].classList.remove('is-current'); }
        if (current < leaves.length) {
            var live = leaves[current].querySelector('.leaf__face--front');
            if (live) {
                // restart the reveal animation
                void live.offsetWidth;
                live.classList.add('is-current');
            }
        }

        // ...and the back face now lying on the left of the spread, which is
        // where the scrapbook collages live.
        var backs = overlay.querySelectorAll('.leaf__face--back.is-current');
        for (var k = 0; k < backs.length; k++) { backs[k].classList.remove('is-current'); }
        if (current > 0 && current <= leaves.length) {
            var flipped = leaves[current - 1].querySelector('.leaf__face--back');
            if (flipped) {
                void flipped.offsetWidth;
                flipped.classList.add('is-current');
            }
        }
    }

    function turn(dir) {
        if (isTurning) return;
        var target = current + dir;
        if (target < 0 || target > TOTAL_LEAVES) return;

        var moving = dir > 0 ? leaves[current] : leaves[target];
        if (!moving) return;

        isTurning = true;
        stopAudio();

        var fwd = dir > 0;
        moving.classList.remove('is-parked');
        moving.style.zIndex = String(TOTAL_LEAVES + 10);
        moving.classList.add(fwd ? 'is-turning-fwd' : 'is-turning-back');
        turnShadow.classList.add(fwd ? 'is-fwd' : 'is-back');

        current = target;
        // set the resting transform immediately; the keyframes play over the top
        if (fwd) { moving.classList.add('is-turned'); }
        else { moving.classList.remove('is-turned'); }

        book.style.setProperty('--left-count', current);
        book.style.setProperty('--right-count', TOTAL_LEAVES - current);
        book.classList.toggle('is-open', current > 0);
        prevBtn.disabled = true;
        nextBtn.disabled = true;

        setTimeout(function () {
            moving.classList.remove('is-turning-fwd', 'is-turning-back');
            turnShadow.classList.remove('is-fwd', 'is-back');
            isTurning = false;
            applyStack();
            if (current >= 1 && current <= PAGES.length) { playFor(current - 1); }
        }, TURN_MS);
    }

    /* --------------------------------------------------------------- sizing */

    function fit() {
        var vw = window.innerWidth;
        var vh = window.innerHeight;
        var single = vw < SINGLE_BREAKPOINT;
        book.classList.toggle('book--single', single);

        // In single-page mode only half the spread is ever visible.
        var needW = single ? BOOK_W / 2 : BOOK_W;
        var margin = single ? 26 : 96;
        var scale = Math.min(1, (vw - margin) / needW, (vh - 130) / BOOK_H);
        stage.style.setProperty('--book-scale', Math.max(0.28, scale).toFixed(3));
        if (!isTurning) { applyStack(); }
    }

    /* --------------------------------------------------------- open / close */

    function open() {
        if (isOpen) return;
        isOpen = true;
        current = 0;
        isTurning = false;
        applyStack();
        fit();
        overlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    }

    function close() {
        if (!isOpen) return;
        isOpen = false;
        stopAudio();
        overlay.classList.remove('is-open');
        document.body.style.overflow = '';
        var trigger = document.getElementById('btn__letter');
        if (trigger) trigger.focus();
    }

    /* --------------------------------------------------------------- events */

    function wire() {
        closeBtn.addEventListener('click', function (e) { e.stopPropagation(); close(); });
        muteBtn.addEventListener('click', function (e) { e.stopPropagation(); setMuted(!muted); });
        prevBtn.addEventListener('click', function (e) { e.stopPropagation(); turn(-1); });
        nextBtn.addEventListener('click', function (e) { e.stopPropagation(); turn(1); });

        // Click the right half of the book to go forward, left half to go back.
        stage.addEventListener('click', function (e) {
            if (isTurning) return;
            var r = book.getBoundingClientRect();
            turn(e.clientX < r.left + r.width / 2 ? -1 : 1);
        });

        // Backdrop click closes.
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) close();
        });

        // Swipe.
        var sx = 0, sy = 0, tracking = false;
        stage.addEventListener('pointerdown', function (e) {
            sx = e.clientX; sy = e.clientY; tracking = true;
        });
        stage.addEventListener('pointerup', function (e) {
            if (!tracking) return;
            tracking = false;
            var dx = e.clientX - sx;
            var dy = e.clientY - sy;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
                e.stopPropagation();
                turn(dx < 0 ? 1 : -1);
            }
        });

        document.addEventListener('keydown', function (e) {
            if (!isOpen) return;
            if (e.key === 'Escape') { close(); }
            else if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault(); turn(1);
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault(); turn(-1);
            }
        });

        window.addEventListener('resize', fit);
        window.addEventListener('orientationchange', fit);
    }

    /* ----------------------------------------------------------------- init */

    function init() {
        build();
        wire();
        applyStack();
        fit();

        try { setMuted(sessionStorage.getItem('bookMuted') === '1'); }
        catch (e) { setMuted(false); }

        var trigger = document.querySelector('#btn__letter');
        if (trigger) { trigger.addEventListener('click', open); }

        // dev shortcut: final.html?fast=1 skips the 16s intro timeline
        if (/[?&]fast=1/.test(window.location.search)) {
            document.documentElement.classList.add('intro-skip');
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
