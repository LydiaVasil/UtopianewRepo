
// ============================================================
// Utopian Studies — Bilingual Language System (EN / AM)
// ============================================================

var LANG_KEY = 'utopia_lang';

var translations = {
  en: {
    // NAV
    nav_brand:    'Utopian Studies',
    nav_home:     'Home',
    nav_course:   'Course',
    nav_research: 'Research',
    nav_books:    'Books',
    nav_enroll:   'Enroll →',
    lang_toggle:  'አማርኛ',

    // HERO
    hero_eyebrow: 'Utopian Studies · Dr. Mmeskerem Lechisa',
    hero_amharic: 'የዩቶፕያ እሳቤዎች በመጽሐፍ ቅዱስ',
    hero_title:   '<em>Utopian Thoughts</em><br>in the Bible',
    hero_desc:    'An interdisciplinary course exploring utopian thought in Scripture and its connections to theology, history, education, and civilization — with special attention to the Ethiopian context.',
    hero_author:  'Taught by Dr. Mmeskerem Lechisa',
    hero_btn1:    'View the Course',
    hero_btn2:    'Register / Enroll',

    // LEARN SECTION
    learn_label:  'What you will learn',
    learn_title:  'Explore <em>utopian imagination</em><br>across history &amp; scripture',
    learn_1_h:    'Origins of Utopian Writing',
    learn_1_p:    'Trace the history of "blueprint societies" and ideal-world thinking from ancient texts through the Renaissance.',
    learn_2_h:    'Landmark Works',
    learn_2_p:    'Study Thomas More\'s <em>Utopia</em> (1516) and Campanella\'s <em>City of the Sun</em> (1603) alongside biblical visions.',
    learn_3_h:    'Identity &amp; Civilization',
    learn_3_p:    'Examine utopianism through the lens of Ethiopian history, culture, and the Habesha intellectual tradition.',
    learn_4_h:    'Modern Challenges',
    learn_4_p:    'Connect ancient ideals to contemporary cultural, political, and educational questions of our time.',

    // FORMAT
    format_label: 'Course format',
    format_title: 'How the course works',
    format_1_h:   'Video Lessons',
    format_1_p:   'Each lesson is taught by video, presented consecutively in a clear sequence from introduction through advanced topics.',
    format_2_h:   'Notes &amp; Resources',
    format_2_p:   'Companion notes accompany every video, giving you reference material to study alongside each lesson.',
    format_3_h:   'Quizzes',
    format_3_p:   'Optional quizzes at the end of each lesson help reinforce your understanding — coming soon.',

    // TELEGRAM
    tg_label:     'Community',
    tg_title:     'Join the <em>conversation</em>',
    tg_intro:     'አጫጭር ማስታወሻዎችንና ዋቢዎችን ለማግኘት የቴሌግራም ምኅላፉን ይቀላቀሉ —<br><em>Join our Telegram for short notes, references, and discussion.</em>',
    tg_1_label:   'Notes &amp; References',
    tg_1_name:    '@Utopiaprintingpress',
    tg_1_desc:    'Short notes and references from each lesson',
    tg_2_label:   'Discussion Group',
    tg_2_name:    'የመወያያ ግሩፕ',
    tg_2_desc:    'Ask questions and discuss with fellow students',
    tg_embed_label: 'Latest from the channel',

    // REGISTER CTA
    reg_title:    'Begin your study',
    reg_desc:     'Register to receive updates, access information, and join a growing community of students exploring utopian thought.',
    reg_btn:      'Register / Enroll Now',

    // FOOTER
    footer_sub:   'Video lessons and resources from Dr. Mmeskerem Lechisa<br>An interdisciplinary course on utopian thought in the Bible',

    // COURSE PAGE
    course_label: 'Utopian Studies · Course Curriculum',
    course_title: 'Course Lessons',
    course_desc:  'Watch each lesson in order. Click any video to play it directly on this page.',
    course_learn_title: 'What you\'ll learn',
    course_bullet1: 'The origins and history of utopian writing and "blueprint" societies',
    course_bullet2: 'Major works such as <em>Utopia</em> (1516) and <em>City of the Sun</em> (1603)',
    course_bullet3: 'Utopianism, identity, and civilization — especially in the Ethiopian historical context',
    course_bullet4: 'How utopian ideas relate to modern cultural, political, and educational challenges',
    course_vid_label: '12 lessons · watch in order',
    course_vid_title: 'All <em>Lessons</em>',
    course_yt_btn: 'View channel on YouTube →',
    course_enroll_btn: 'Register / Enroll to receive updates →',

    // VIDEO TITLES
    vid_00: 'Introduction',
    vid_q:  'Questions &amp; Answers',
    vid_1a: 'Lesson 1A',
    vid_1b: 'Lesson 1B',
    vid_1c: 'Lesson 1C',
    vid_02: 'Lesson 2',
    vid_03: 'Lesson 3',
    vid_04: 'Lesson 4',
    vid_05: 'Lesson 5',
    vid_06: 'Lesson 6',
    vid_07: 'Lesson 7',
    vid_08: 'Lesson 8',

    // ABOUT PAGE
    about_label:  'Scholar &amp; Educator',
    about_title:  'Research &amp; <em>Publications</em>',
    about_h3_1:   'About the Scholar',
    about_p1:     'Dr. Mmeskerem Lechisa is an interdisciplinary scholar whose work spans theology, history, and education — with a particular focus on utopian thought and its manifestations in the Bible and Ethiopian intellectual history.',
    about_p2:     'Her courses bring together classical utopian literature, biblical scholarship, and the rich cultural traditions of Ethiopia into a unified framework for understanding ideals of justice, community, and the good society.',
    about_h3_2:   'Selected Publications',
    pub_1_title:  'Utopian Thought in the Ethiopian Biblical Tradition',
    pub_1_meta:   'Research publication — available via course materials',
    pub_2_title:  'Blueprint Societies: From Thomas More to the Habesha Imagination',
    pub_2_meta:   'Interdisciplinary study in theology &amp; civilization',
    pub_3_title:  'Education, Identity, and the Utopian Vision',
    pub_3_meta:   'Essay on pedagogy and cultural utopianism',
    portrait_cap: 'Dr. Mmeskerem Lechisa',

    // BOOKS PAGE
    books_label:  'Recommended Reading',
    books_title:  'Books &amp; <em>Texts</em>',
    book_3_title: 'Course Reader',
    book_3_meta:  'Dr. Mmeskerem Lechisa · available on enrollment',

    // ENROLL PAGE
    enroll_eyebrow: 'Registration',
    enroll_title: 'Register &amp; <em>Enroll</em>',
    enroll_desc:  'Join a growing community of students exploring utopian thought in the Bible with Dr. Mmeskerem Lechisa.',
    req_note:     '* Required fields',
    lbl_first:    'First Name',
    lbl_middle:   'Middle Name',
    lbl_last:     'Last Name',
    lbl_gender:   'Gender',
    lbl_male:     '♂ Male',
    lbl_female:   '♀ Female',
    lbl_country:  'Country',
    lbl_phone:    'Phone Number',
    lbl_email:    'Email Address',
    ph_first:     'Abebe',
    ph_middle:    'Girma',
    ph_last:      'Kebede',
    ph_country:   'Ethiopia',
    ph_phone:     '+251 91 234 5678',
    ph_email:     'abebe@email.com',
    err_first:    'Please enter your first name',
    err_last:     'Please enter your last name',
    submit_btn:   'Complete Registration →',
    submitting:   'Submitting...',
    form_note:    'Your information is private and will only be used to manage course enrollment. No spam — ever.',
    success_icon: '✓',
    success_h2:   'You are enrolled!',
    success_p:    'Thank you for registering. You are now part of the Utopian Studies community.<br>Check your email for confirmation and course access details.',
  },

  am: {
    // NAV
    nav_brand:    'የዩቶፕያ ጥናት',
    nav_home:     'መነሻ',
    nav_course:   'ትምህርቶች',
    nav_research: 'ምርምር',
    nav_books:    'መጻሕፍት',
    nav_enroll:   'ይመዝገቡ →',
    lang_toggle:  'English',

    // HERO
    hero_eyebrow: 'የዩቶፕያ ጥናት · ዶ/ር ምስከረም ለቺሳ',
    hero_amharic: 'የዩቶፕያ እሳቤዎች በመጽሐፍ ቅዱስ',
    hero_title:   '<em>የዩቶፕያ እሳቤዎች</em><br>በመጽሐፍ ቅዱስ',
    hero_desc:    'የዩቶፕያ አስተሳሰብን በቅዱሳን ጽሑፎች ውስጥ የሚዳስስ ትምህርት — ከሥነ-መለኮት፣ ከታሪክ፣ ከትምህርት እና ከሥልጣኔ ጋር ያለውን ግንኙነት ይዳስሳል። ለኢትዮጵያ ታሪካዊ አውድ ልዩ ትኩረት ይሰጣል።',
    hero_author:  'በዶ/ር ምስከረም ለቺሳ የሚቀርብ',
    hero_btn1:    'ትምህርቶቹን ይዩ',
    hero_btn2:    'ይመዝገቡ',

    // LEARN SECTION
    learn_label:  'የሚማሩት',
    learn_title:  '<em>የዩቶፕያ ምናብን</em> ያስሱ<br>በታሪክና በቅዱሳን ጽሑፎች',
    learn_1_h:    'የዩቶፕያ ጽሑፍ መነሻ',
    learn_1_p:    'ከጥንታዊ ጽሑፎች እስከ ህዳሴ ዘመን ድረስ ያለውን "ሃሳባዊ ማህበረሰብ" አስተሳሰብ ታሪክ ይፈልጉ።',
    learn_2_h:    'ወሳኝ ሥራዎች',
    learn_2_p:    'የቶማስ ሞርን <em>ዩቶፒያ</em> (1516) እና የካምፓኔላን <em>የፀሐይ ከተማ</em> (1603) ከቅዱሳን ጽሑፍ ራዕዮች ጋር ያጠኑ።',
    learn_3_h:    'ማንነት እና ሥልጣኔ',
    learn_3_p:    'የዩቶፕያ አስተሳሰብን በኢትዮጵያ ታሪክ፣ ባህልና የሐበሻ የምሁር ወግ ዐውደ-ቃል ውስጥ ይፈትሹ።',
    learn_4_h:    'ዘመናዊ ተግዳሮቶች',
    learn_4_p:    'ጥንታዊ ሃሳቦችን ከዘመናዊ ባህላዊ፣ ፖለቲካዊ እና ትምህርታዊ ጥያቄዎች ጋር ያዛምዱ።',

    // FORMAT
    format_label: 'የትምህርት አወቃቀር',
    format_title: 'ትምህርቱ እንዴት ይሰጣል',
    format_1_h:   'የቪዲዮ ትምህርቶች',
    format_1_p:   'እያንዳንዱ ትምህርት በቪዲዮ የሚቀርብ ሲሆን ከመግቢያ እስከ የላቀ ርዕሰ-ጉዳዮች ድረስ በተከታታይ ቅደም ተከተል ቀርቧል።',
    format_2_h:   'ማስታወሻዎች እና ዋቢዎች',
    format_2_p:   'ከእያንዳንዱ ቪዲዮ ጋር የሚዛመዱ ማስታወሻዎች ይቀርባሉ — ለጥናት ረዳት ይሆናሉ።',
    format_3_h:   'ጥያቄዎች',
    format_3_p:   'ከእያንዳንዱ ትምህርት መጨረሻ ላይ ዐማራጭ ጥያቄዎች ይቀርባሉ — በቅርቡ ይመጣሉ።',

    // TELEGRAM
    tg_label:     'ማህበረሰብ',
    tg_title:     'ውይይቱን <em>ይቀላቀሉ</em>',
    tg_intro:     'አጫጭር ማስታወሻዎችንና ዋቢዎችን ለማግኘት የቴሌግራም ምኅላፉን ይቀላቀሉ።',
    tg_1_label:   'ማስታወሻዎች እና ዋቢዎች',
    tg_1_name:    '@Utopiaprintingpress',
    tg_1_desc:    'ከእያንዳንዱ ትምህርት አጫጭር ማስታወሻዎች',
    tg_2_label:   'የውይይት ቡድን',
    tg_2_name:    'የመወያያ ግሩፕ',
    tg_2_desc:    'ጥያቄዎችን ይጠይቁ እና ከሌሎች ተማሪዎች ጋር ይወያዩ',
    tg_embed_label: 'ከቻናሉ የቅርብ ጊዜ ልጥፎች',

    // REGISTER CTA
    reg_title:    'ጥናቱን ይጀምሩ',
    reg_desc:     'ይመዝገቡ — ዝማኔዎችን ለማግኘት፣ ለቁሳቁስ ለመድረስ እና የዩቶፕያ ጥናት ማህበረሰብን ለመቀላቀል።',
    reg_btn:      'አሁን ይመዝገቡ',

    // FOOTER
    footer_sub:   'የቪዲዮ ትምህርቶች እና ምንጮች በዶ/ር ምስከረም ለቺሳ<br>በመጽሐፍ ቅዱስ ውስጥ ስላለ የዩቶፕያ አስተሳሰብ ትምህርት',

    // COURSE PAGE
    course_label: 'የዩቶፕያ ጥናት · የትምህርት ፕሮግራም',
    course_title: 'የትምህርት ክፍሎች',
    course_desc:  'ትምህርቶቹን በቅደም ተከተል ይመልከቱ። ቪዲዮ ለማጫወት ማንኛውንም ይጫኑ።',
    course_learn_title: 'የሚማሩት',
    course_bullet1: 'የዩቶፕያ ጽሑፍ ታሪክ እና "ሃሳባዊ ማህበረሰቦች" አመጣጥ',
    course_bullet2: '<em>ዩቶፒያ</em> (1516) እና <em>የፀሐይ ከተማ</em> (1603) የመሳሰሉ ዋና ሥራዎች',
    course_bullet3: 'የዩቶፕያ አስተሳሰብ፣ ማንነት እና ሥልጣኔ — በተለይ በኢትዮጵያ ታሪካዊ አውድ',
    course_bullet4: 'የዩቶፕያ ሃሳቦች ከዘመናዊ ባህላዊ፣ ፖለቲካዊ እና ትምህርታዊ ጥያቄዎች ጋር ያላቸው ግንኙነት',
    course_vid_label: '12 ትምህርቶች · በቅደም ተከተል ይመልከቱ',
    course_vid_title: 'ሁሉም <em>ትምህርቶች</em>',
    course_yt_btn: 'በዩቲዩብ ሁሉንም ይዩ →',
    course_enroll_btn: 'ዝማኔዎችን ለማግኘት ይመዝገቡ →',

    // VIDEO TITLES
    vid_00: 'መግቢያ',
    vid_q:  'ጥያቄዎች እና መልሶች',
    vid_1a: 'ትምህርት 1ሀ',
    vid_1b: 'ትምህርት 1ለ',
    vid_1c: 'ትምህርት 1ሐ',
    vid_02: 'ትምህርት 2',
    vid_03: 'ትምህርት 3',
    vid_04: 'ትምህርት 4',
    vid_05: 'ትምህርት 5',
    vid_06: 'ትምህርት 6',
    vid_07: 'ትምህርት 7',
    vid_08: 'ትምህርት 8',

    // ABOUT PAGE
    about_label:  'ምሁር እና አስተማሪ',
    about_title:  'ምርምር እና <em>ጽሑፎች</em>',
    about_h3_1:   'ስለ ምሁሯ',
    about_p1:     'ዶ/ር ምስከረም ለቺሳ ሥነ-መለኮትን፣ ታሪክን እና ትምህርትን የሚዳስስ ሁለ-ዘርፍ ምሁር ናቸው — ዋና ትኩረታቸው በቅዱሳን ጽሑፎች እና በኢትዮጵያ የምሁር ታሪክ ውስጥ ያለ የዩቶፕያ አስተሳሰብ ነው።',
    about_p2:     'ትምህርቶቻቸው ክላሲካዊ የዩቶፕያ ሥነ-ጽሑፍ፣ የቅዱሳን ጽሑፍ ምርምር እና የኢትዮጵያን ባህላዊ ወጎች አዋህደው ስለ ፍትሕ፣ ማህበረሰብ እና መልካም ኅብረተሰብ ሃሳቦችን ያቀርባሉ።',
    about_h3_2:   'ጥቂት ጽሑፎች',
    pub_1_title:  'በኢትዮጵያ መጽሐፍ ቅዱሳዊ ወግ ውስጥ ያለ የዩቶፕያ አስተሳሰብ',
    pub_1_meta:   'የምርምር ጽሑፍ — በትምህርት ቁሳቁስ ይገኛል',
    pub_2_title:  'ሃሳባዊ ማህበረሰቦች፡ ከቶማስ ሞር እስከ ሐበሻ ምናብ',
    pub_2_meta:   'በሥነ-መለኮት እና ሥልጣኔ ውስጥ ሁለ-ዘርፍ ጥናት',
    pub_3_title:  'ትምህርት፣ ማንነት እና የዩቶፕያ ራዕይ',
    pub_3_meta:   'ስለ ትምህርት ዘዴ እና ባህላዊ ዩቶፒያኒዝም ድርሰት',
    portrait_cap: 'ዶ/ር ምስከረም ለቺሳ',

    // BOOKS PAGE
    books_label:  'የሚመከሩ ንባቦች',
    books_title:  'መጻሕፍት እና <em>ጽሑፎች</em>',
    book_3_title: 'የትምህርት ንባብ',
    book_3_meta:  'ዶ/ር ምስከረም ለቺሳ · በምዝገባ ይገኛል',

    // ENROLL PAGE
    enroll_eyebrow: 'ምዝገባ',
    enroll_title: 'ይመዝገቡ እና <em>ይካፈሉ</em>',
    enroll_desc:  'ዶ/ር ምስከረም ለቺሳ ከሚያስተምሩት የዩቶፕያ ጥናት ትምህርት ጋር እያደገ ያለ ማህበረሰብን ይቀላቀሉ።',
    req_note:     '* አስፈላጊ መስኮች',
    lbl_first:    'የመጀመሪያ ስም',
    lbl_middle:   'የአባት ስም',
    lbl_last:     'የአያት ስም',
    lbl_gender:   'ፆታ',
    lbl_male:     '♂ ወንድ',
    lbl_female:   '♀ ሴት',
    lbl_country:  'አገር',
    lbl_phone:    'ስልክ ቁጥር',
    lbl_email:    'ኢሜይል አድራሻ',
    ph_first:     'አበበ',
    ph_middle:    'ግርማ',
    ph_last:      'ከበደ',
    ph_country:   'ኢትዮጵያ',
    ph_phone:     '+251 91 234 5678',
    ph_email:     'abebe@email.com',
    err_first:    'እባክዎ የመጀመሪያ ስምዎን ያስገቡ',
    err_last:     'እባክዎ የአያት ስምዎን ያስገቡ',
    submit_btn:   'ምዝገባን ጨርስ →',
    submitting:   'በማስገባት ላይ...',
    form_note:    'መረጃዎ ሚስጢራዊ ነው — ለትምህርት ምዝገባ ብቻ ይጠቅማል። ስፓም አይኖርም።',
    success_icon: '✓',
    success_h2:   'ተመዝግበዋል!',
    success_p:    'ስለተመዘገቡ እናመሰግናለን። አሁን የዩቶፕያ ጥናት ማህበረሰብ አባል ሆነዋል።<br>ለማረጋገጫ ኢሜይልዎን ይፈትሹ።',
  }
};

// ---- Core functions ----

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'en';
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyLang(lang);
}

function t(key) {
  var lang = getLang();
  return (translations[lang] && translations[lang][key]) || (translations['en'][key]) || '';
}

function applyLang(lang) {
  var els = document.querySelectorAll('[data-t]');
  els.forEach(function(el) {
    var key = el.getAttribute('data-t');
    var val = (translations[lang] && translations[lang][key]) || (translations['en'][key]) || '';
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });

  // Toggle button text
  var btn = document.getElementById('lang-toggle-btn');
  if (btn) btn.textContent = translations[lang]['lang_toggle'];

  // Update html lang attribute
  document.documentElement.lang = lang === 'am' ? 'am' : 'en';

  // Store
  localStorage.setItem(LANG_KEY, lang);
}

function toggleLang() {
  var current = getLang();
  setLang(current === 'en' ? 'am' : 'en');
}

// Apply on page load
document.addEventListener('DOMContentLoaded', function() {
  applyLang(getLang());
});
