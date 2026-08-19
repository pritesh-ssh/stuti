Page recordings live in this folder. Each one plays automatically when the
reader arrives on that page, and fades out when they turn away.

The filename for each page is set by the `audio:` field in the PAGES array
at the top of book.js. Current wiring:

    page 1  ->  audio/1.m4a     (converted from the 1.opus voice note)
    page 2  ->  audio/2.m4a then audio/2a.m4a  (play in that order)
    page 3  ->  audio/3.m4a     (converted from the 3.opus voice note)
    page 4  ->  audio/4.m4a     (converted from the 4.ogg voice note)
    page 5  ->  audio/5.m4a     (converted from the 5.opus voice note)

The book works fine before you add them -- it just stays silent.

FORMAT NOTE: WhatsApp voice notes come as .opus (Ogg), which Safari on
iPhone/Mac will NOT play. Convert each one before wiring it up:

    afconvert -f m4af -d aac audio/2.opus audio/2.m4a

.mp3, .m4a, .wav and .ogg all work in the player; .m4a is the safe bet.

To play more than one recording on a page, give `audio:` an array instead of
a single filename -- they play back-to-back in the order listed, and the
progress bar runs once across the whole set:

    audio: ['audio/2.m4a', 'audio/2a.m4a']
