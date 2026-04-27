import { useEffect, useState } from 'react';

const diplomaFiles = [
  '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 20.41.22.jpeg',
  '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 20.41.40.jpeg',
  '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 20.47.30.jpeg',
  '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 20.51.11.jpeg',
  '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 20.53.02.jpeg',
  '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 20.55.27.jpeg',
  '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 21.00.18.jpeg',
  '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 21.05.45.jpeg',
  '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 21.07.54.jpeg',
  '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 21.10.14.jpeg',
  '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 21.11.32.jpeg',
  '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 21.13.13.jpeg',
  '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 21.14.36.jpeg',
  '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 21.15.43.jpeg',
  '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 21.17.13.jpeg',
  '/assets/diploma/clean/WhatsApp Image 2026-04-26 at 06.22.06.jpeg',
  '/assets/diploma/clean/WhatsApp Image 2026-04-26 at 06.22.15.jpeg',
  '/assets/diploma/clean/WhatsApp Image 2026-04-26 at 06.22.22.jpeg',
  '/assets/diploma/clean/WhatsApp Image 2026-04-26 at 17.40.47.jpeg',
];

const drawings = [
  {
    id: 'painting-1',
    type: 'painting',
    featured: true,
    image: '/assets/painting/clean/1.jpeg',
    title: { fr: "L'ancienne Cirta", ar: 'سيرتا القديمة' },
    dimensions: { fr: '1,40 m x 1 m', ar: '1.40 م × 1 م' },
    medium: { fr: 'Huile sur toile', ar: 'زيت على قماش' },
    description: {
      fr: 'Vue peinte autour de la memoire historique de Constantine avec une presence architecturale forte.',
      ar: 'رؤية تشكيلية تستحضر الذاكرة التاريخية لمدينة قسنطينة بحضور معماري قوي.',
    },
  },
  {
    id: 'painting-2',
    type: 'painting',
    image: '/assets/painting/clean/2.jpeg',
    title: { fr: "Constantine l'antique", ar: 'قسنطينة العتيقة' },
    dimensions: { fr: '1,20 m x 1 m', ar: '1.20 م × 1 م' },
    medium: { fr: 'Huile sur toile', ar: 'زيت على قماش' },
    description: {
      fr: 'Un regard sur la ville ancienne et son caractere patrimonial.',
      ar: 'نظرة إلى المدينة القديمة بطابعها التراثي وعمقها التاريخي.',
    },
  },
  {
    id: 'painting-3',
    type: 'painting',
    image: '/assets/painting/clean/3.jpeg',
    title: { fr: "L'ancienne Souika", ar: 'السويقة القديمة' },
    dimensions: { fr: '80 x 100 cm', ar: '80 × 100 سم' },
    medium: { fr: 'Huile sur toile', ar: 'زيت على قماش' },
    description: {
      fr: 'Interieur urbain et memoire des anciens quartiers populaires.',
      ar: 'مشهد حضري يستحضر ذاكرة الأحياء القديمة وحركة الحياة داخلها.',
    },
  },
  {
    id: 'painting-4',
    type: 'painting',
    image: '/assets/painting/clean/4.jpeg',
    title: { fr: 'Le vieux rocher', ar: 'الصخرة القديمة' },
    dimensions: { fr: '1 m x 80 cm', ar: '1 م × 80 سم' },
    medium: { fr: 'Huile sur toile', ar: 'زيت على قماش' },
    description: {
      fr: 'Etude picturale des reliefs et de la silhouette minerale de Constantine.',
      ar: 'دراسة تشكيلية لتضاريس قسنطينة وحضورها الصخري المميز.',
    },
  },
  {
    id: 'painting-5',
    type: 'painting',
    image: '/assets/painting/clean/5.jpeg',
    layout: 'portrait',
    title: { fr: "Le pont Sidi M'Cid et le rocher antique", ar: 'جسر سيدي مسيد والصخرة العتيقة' },
    dimensions: { fr: '1,50 m x 1 m', ar: '1.50 م × 1 م' },
    medium: { fr: 'Pointillisme sur toile', ar: 'تنقيط على قماش' },
    description: {
      fr: 'Dialogue entre le pont suspendu et le paysage rocheux de Constantine.',
      ar: 'حوار بصري بين الجسر المعلق والمشهد الصخري في قسنطينة.',
    },
  },
  {
    id: 'painting-6',
    type: 'painting',
    image: '/assets/painting/clean/6.jpeg',
    title: { fr: "Le pont de Sidi M'Cid", ar: 'جسر سيدي مسيد' },
    dimensions: { fr: '200 x 120 cm', ar: '200 × 120 سم' },
    medium: { fr: 'Huile sur toile', ar: 'زيت على قماش' },
    description: {
      fr: 'Representation monumentale du pont comme symbole de la ville.',
      ar: 'تمثيل بصري للجسر باعتباره واحدا من ابرز رموز المدينة.',
    },
  },
  {
    id: 'painting-7',
    type: 'painting',
    image: '/assets/painting/clean/7.jpeg',
    title: { fr: 'Vue generale du Rocher et de Bab El-Kantra', ar: 'منظر عام للصخرة وباب القنطرة' },
    dimensions: { fr: '2 m x 1,70 m', ar: '2 م × 1.70 م' },
    medium: { fr: "Pointillisme a l'huile sur toile", ar: 'تنقيط زيتي على قماش' },
    description: {
      fr: 'Panorama ample de Constantine reliant architecture, memoire et paysage.',
      ar: 'بانوراما واسعة تربط بين العمارة والذاكرة والمشهد الطبيعي في قسنطينة.',
    },
  },
  {
    id: 'painting-8',
    type: 'painting',
    image: '/assets/painting/clean/8.jpeg',
    title: { fr: 'Vieux rocher', ar: 'الصخرة القديمة' },
    dimensions: { fr: '1 m x 80 cm', ar: '1 م × 80 سم' },
    medium: { fr: 'Huile sur toile', ar: 'زيت على قماش' },
    description: {
      fr: 'Variation sur la roche, la matiere et la lumiere urbaine.',
      ar: 'اشتغال على الصخر والمادة والضوء داخل المشهد الحضري.',
    },
  },
  {
    id: 'painting-9',
    type: 'painting',
    image: '/assets/painting/clean/9.jpeg',
    title: { fr: 'Paysage imaginaire I', ar: 'منظر طبيعي خيالي 1' },
    dimensions: { fr: '150 x 100 cm', ar: '150 × 100 سم' },
    medium: { fr: 'Huile sur toile', ar: 'زيت على قماش' },
    description: {
      fr: 'Paysage libre, plus interieur, ou limaginaire prend le relais de la ville reelle.',
      ar: 'مشهد حر يتقدم فيه الخيال على المرجع الواقعي المباشر.',
    },
  },
  {
    id: 'painting-10',
    type: 'painting',
    image: '/assets/painting/clean/10.jpeg',
    title: { fr: 'Paysage imaginaire II', ar: 'منظر طبيعي خيالي 2' },
    dimensions: { fr: '150 x 100 cm', ar: '150 × 100 سم' },
    medium: { fr: 'Huile sur toile', ar: 'زيت على قماش' },
    description: {
      fr: 'Variation imaginaire autour de la couleur, du rythme et de lespace pictural.',
      ar: 'تنويع خيالي يشتغل على اللون والإيقاع والفضاء التشكيلي.',
    },
  },
];

const diplomaItems = [
  {
    id: 'diploma-1',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 20.41.22.jpeg',
    title: { fr: "Carte d'adhésion ONDA", ar: 'بطاقة عضوية ONDA' },
    caption: {
      fr: 'Membre n 7442 du répertoire national des auteurs et droits voisins.',
      ar: 'العضوية رقم 7442 في السجل الوطني للمؤلفين والحقوق المجاورة.',
    },
  },
  {
    id: 'diploma-2',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 20.41.40.jpeg',
    title: { fr: 'Traduction officielle ONDA', ar: 'ترجمة رسمية ONDA' },
    caption: {
      fr: "Traduction certifiée de l'attestation d'adhésion à l'Office National des Droits d'Auteur.",
      ar: 'ترجمة معتمدة لشهادة الانخراط في الديوان الوطني لحقوق المؤلف.',
    },
  },
  {
    id: 'diploma-3',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 20.47.30.jpeg',
    title: { fr: 'Certificat de Reconnaissance (2024)', ar: 'شهادة تقدير (2024)' },
    caption: {
      fr: 'Délivré le 07/08/2024 en hommage à son parcours artistique et créatif.',
      ar: 'سُلمت في 07/08/2024 تكريماً لمساره الفني والإبداعي.',
    },
  },
  {
    id: 'diploma-4',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 20.51.11.jpeg',
    title: { fr: "Diplôme d'Honneur (Constantine 2012)", ar: 'دبلوم شرفي (قسنطينة 2012)' },
    caption: {
      fr: "Délivré à l'occasion du centenaire de l'Hôtel Cirta et de l'exposition des arts plastiques.",
      ar: 'سُلم بمناسبة مئوية فندق سيرتا ومعرض الفنون التشكيلية.',
    },
  },
  {
    id: 'diploma-5',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 20.53.02.jpeg',
    title: { fr: 'Certificat de Reconnaissance (2011)', ar: 'شهادة اعتراف (2011)' },
    caption: {
      fr: 'Reconnaissance de la Direction de la Culture de Constantine pour sa contribution artistique.',
      ar: 'اعتراف من مديرية الثقافة لقسنطينة على مساهمته الفنية.',
    },
  },
  {
    id: 'diploma-6',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 20.55.27.jpeg',
    title: { fr: 'Certificat de Reconnaissance (2013)', ar: 'شهادة تقدير (2013)' },
    caption: {
      fr: 'Distinction honorifique de la part du Ministère de la Culture et de la ville de Constantine.',
      ar: 'تميز شرفي من وزارة الثقافة ومدينة قسنطينة.',
    },
  },
  {
    id: 'diploma-7',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 21.00.18.jpeg',
    title: { fr: 'Médaille de Reconnaissance (2013)', ar: 'ميدالية اعتراف (2013)' },
    caption: {
      fr: "Médaille et certificat de l'Assemblée Populaire de la Wilaya de Constantine.",
      ar: 'ميدالية وشهادة من المجلس الشعبي الولائي لولاية قسنطينة.',
    },
  },
  {
    id: 'diploma-8',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 21.05.45.jpeg',
    title: { fr: 'Certificat de Reconnaissance (2012)', ar: 'شهادة اعتراف (2012)' },
    caption: {
      fr: 'Délivré par la Daïra de Constantine pour sa participation aux journées du savoir.',
      ar: 'سُلم من دائرة قسنطينة لمشاركته في يوم العلم.',
    },
  },
  {
    id: 'diploma-9',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 21.07.54.jpeg',
    title: { fr: 'Premier Prix des Arts (2007)', ar: 'الجائزة الأولى للفنون (2007)' },
    caption: {
      fr: 'Prix Ben Badis - Premier prix dans la catégorie Peinture et Sculpture.',
      ar: 'جائزة بن باديس - الجائزة الأولى في فئة الرسم والنحت.',
    },
  },
  {
    id: 'diploma-10',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 21.10.14.jpeg',
    title: { fr: 'Certificat Honorifique (Prix Ben Badis 2013)', ar: 'شهادة شرفية (جائزة بن باديس 2013)' },
    caption: {
      fr: 'Médaille et certificat décernés lors de la 15ème édition du Prix Ben Badis.',
      ar: 'ميدالية وشهادة منحت خلال الطبعة الخامسة عشرة لجائزة بن باديس.',
    },
  },
  {
    id: 'diploma-11',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 21.11.32.jpeg',
    title: { fr: 'Certificat de Reconnaissance (2013)', ar: 'شهادة اعتراف (2013)' },
    caption: {
      fr: 'Exposition "Constantine, une ville de couleur" au Palais de la Culture Malek Haddad.',
      ar: 'معرض "قسنطينة، مدينة الألوان" بقصر الثقافة مالك حداد.',
    },
  },
  {
    id: 'diploma-12',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 21.13.13.jpeg',
    title: { fr: "Attestation d'Organisation d'Exposition (2011)", ar: 'شهادة تنظيم معرض (2011)' },
    caption: {
      fr: "Reconnaissance pour l'organisation d'expositions artistiques en milieu universitaire.",
      ar: 'شهادة اعتراف بتنظيم معارض فنية في الوسط الجامعي.',
    },
  },
  {
    id: 'diploma-13',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 21.14.36.jpeg',
    title: { fr: "Certificat d'Honneur (El Khroub 2012)", ar: 'شهادة شرفية (الخروب 2012)' },
    caption: {
      fr: "Distinction de l'APC d'El Khroub pour sa contribution au mouvement artistique local.",
      ar: 'تكريم من بلدية الخروب لمساهمته في الحركة الفنية المحلية.',
    },
  },
  {
    id: 'diploma-14',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 21.15.43.jpeg',
    title: { fr: 'Attestation de Reconnaissance (2024)', ar: 'شهادة تقدير (2024)' },
    caption: {
      fr: 'Maison de la Culture Malek Haddad - Reconnaissance du parcours artistique.',
      ar: 'دار الثقافة مالك حداد - اعتراف بالمسار الفني.',
    },
  },
  {
    id: 'diploma-15',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-25 at 21.17.13.jpeg',
    title: { fr: "Certificat d'Honneur (Gouraya TV 2025)", ar: 'شهادة شرف (تلفزيون قوراية 2025)' },
    caption: {
      fr: "Hommage à l'engagement artistique de Mohamed Cherif Bouanaka.",
      ar: 'تكريم لالتزام الفنان محمد الشريف بوعناقة الفني.',
    },
  },
  {
    id: 'diploma-16',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-26 at 06.22.06.jpeg',
    title: { fr: "Attestation d'Artiste (Gouraya TV 2025)", ar: 'شهادة فنان (تلفزيون قوراية 2025)' },
    caption: {
      fr: "Attestation professionnelle d'artiste plasticien.",
      ar: 'شهادة مهنية كفنان تشكيلي.',
    },
  },
  {
    id: 'diploma-17',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-26 at 06.22.15.jpeg',
    title: { fr: "Carte d'Artiste Professionnel (2024)", ar: 'بطاقة فنان محترف (2024)' },
    caption: {
      fr: "Délivrée par la Société d'Édition et de Distribution Gouraya TV.",
      ar: 'مسلمة من طرف مؤسسة قوراية للنشر والتوزيع.',
    },
  },
  {
    id: 'diploma-18',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-26 at 06.22.22.jpeg',
    title: { fr: "Carte d'Artiste Professionnel (2025)", ar: 'بطاقة فنان محترف (2025)' },
    caption: {
      fr: "Renouvellement de l'accréditation professionnelle d'artiste.",
      ar: 'تجديد الاعتماد المهني للفنان.',
    },
  },
  {
    id: 'diploma-19',
    type: 'diploma',
    image: '/assets/diploma/clean/WhatsApp Image 2026-04-26 at 17.40.47.jpeg',
    title: { fr: 'Certificat de Participation (2025)', ar: 'شهادة مشاركة (2025)' },
    caption: {
      fr: "Participation au salon de l'Institut Français d'Annaba.",
      ar: 'مشاركة في صالون المعهد الفرنسي بعنابة.',
    },
  },
];

const translations = {
  fr: {
    locale: 'fr',
    dir: 'ltr',
    brandKicker: "Portfolio d'artiste",
    brandTitle: 'Mohamed-Cherif Bouanaka',
    nav: {
      about: 'A propos',
      cv: 'CV',
      diplomas: 'Diplomes',
      gallery: 'Galerie',
      contact: 'Contact',
    },
    switcher: { fr: 'FR', ar: 'AR' },
    hero: {
      kicker: 'Portfolio artistique',
      title: 'Mohamed-Cherif Bouanaka, artiste plasticien',
      summary:
        'Un portfolio consacre aux paysages, aux lieux historiques et a la memoire architecturale de Constantine.',
      tags: ['Peinture', 'Patrimoine', 'Paysages'],
      primaryAction: 'Voir les peintures',
      secondaryAction: 'Lire le CV',
      featuredLabel: 'Oeuvre mise en avant',
      sideLabel: 'Demarche artistique',
      sideText:
        'Le travail explore la memoire, la lumiere et lheritage architectural de Constantine a travers la peinture.',
    },
    metrics: [
      { value: '10', label: 'Peintures presentees' },
      { value: '19', label: 'Diplomes et certificats' },
      { value: 'ONDA', label: 'Membre n 7442' },
    ],
    about: {
      kicker: "A propos de l'artiste",
      title: 'Une pratique entre paysage, patrimoine et memoire',
      note:
        "Le site est pense comme une presentation claire du parcours, des references et de l'univers visuel de l'artiste.",
      lead: [
        "Mohamed-Cherif Bouanaka est un artiste plasticien base a Constantine, dont le travail se concentre sur les paysages, les ponts suspendus, la ville ancienne et le patrimoine architectural.",
        'Sa peinture relie la memoire du lieu, la lumiere et la matiere, avec une attention particuliere aux formes historiques de Constantine.',
      ],
      facts: [
        'Ne le 13 octobre 1974 a Constantine, Algerie.',
        "Membre de l'Office National des Droits d'Auteur et des Droits Voisins (ONDA), carte n 7442.",
        'Travail fonde sur la memoire architecturale, les ponts et le paysage urbain.',
        "Pratique de la peinture a l'huile et du pointillisme sur toile.",
      ],
    },
    cv: {
      kicker: 'Curriculum vitae',
      title: 'Parcours, references et synthese du dossier',
      note: "Cette section reprend les informations essentielles extraites du CV et des documents fournis par l'artiste.",
      profileLabel: 'Profil',
      artistName: 'Mohamed-Cherif Bouanaka',
      pill: 'Artiste plasticien',
      lead:
        'Artiste plasticien ne a Constantine en 1974. Son travail explore la memoire, le patrimoine architectural et la lumiere de la ville a travers une peinture attentive au relief, aux ponts et aux lieux historiques.',
      factsTitle: 'Reperes',
      facts: [
        'Ne le 13 octobre 1974 a Constantine, Algerie',
        'Adresse : 26 UV 09-204 LOGTS AADL BL.B1 APT 26, Constantine',
        "Affilie a l'ONDA depuis le 20/12/2020",
      ],
      contactTitle: 'Coordonnees',
      contact: [
        'Telephone : +213 6 57 47 43 97',
        'Email : bouanakamohamedcherif12@gmail.com',
      ],
      statementTitle: 'Demarche artistique',
      statementText:
        "Triple laureat du Prix Ben Badis et distingue par le Ministere de la Culture, Mohamed-Cherif Bouanaka explore dans sa peinture la memoire, la lumiere et le patrimoine architectural de Constantine, avec une attention particuliere pour les ponts suspendus, les reliefs rocheux et les lieux historiques.",
      archiveTitle: 'Synthese du dossier',
      archiveText:
        "Les documents numerises retracent un parcours reconnu entre 2007 et 2025, des distinctions officielles attribuees par des institutions culturelles et locales, ainsi qu'un engagement professionnel confirme par l'affiliation a l'ONDA.",
      distinctionsTitle: 'Distinctions et reconnaissances',
      highlights: [
        {
          year: '2025',
          title: "Certificat d'honneur - Gouraya TV",
          text: 'Reconnaissance recente de son parcours artistique.',
        },
        {
          year: '2025',
          title: "Certificat de participation - Institut Francais d'Annaba",
          text: "Trace d'une participation culturelle recente.",
        },
        {
          year: '2024',
          title: 'Attestation de reconnaissance - Maison de la Culture Malek Haddad',
          text: 'Recompense liee a sa presence dans la scene culturelle.',
        },
        {
          year: '2017 / 2015',
          title: 'Reconnaissances institutionnelles',
          text: 'Certificats de reconnaissance remis par la Direction de la Culture de Constantine et le Ministere de la Culture.',
        },
        {
          year: '2012 / 2011',
          title: "Diplome d'honneur et certificat de reconnaissance",
          text: 'Distinctions attribuees a Constantine et a El Khroub.',
        },
        {
          year: '2007 / 2013',
          title: 'Prix Ben Badis',
          text: 'Premier prix en 2007 puis deuxieme place ex aequo en 2013, avec medaille de reconnaissance dans les editions suivantes.',
        },
      ],
    },
    diplomas: {
      kicker: 'Diplomes et certificats',
      title: 'Archive visuelle des references academiques et distinctions',
      note: "Les certificats sont presentes dans leur format complet pour garder chaque document lisible.",
    },
    gallery: {
      kicker: 'Peintures',
      title: 'Selection des oeuvres',
      note: 'Les visuels ont ete nettoyes et recadres afin de presenter les peintures sans captures d ecran ni elements parasites.',
      featuredLabel: 'Peinture mise en avant',
    },
    contact: {
      kicker: 'Contact',
      title: "Coordonnees de l'artiste",
      details: [
        'Mohamed-Cherif Bouanaka',
        'Telephone : +213 6 57 47 43 97',
        'Email : bouanakamohamedcherif12@gmail.com',
        'Constantine, Algerie',
      ],
    },
    footer: "Portfolio d'artiste - Mohamed-Cherif Bouanaka",
    modalClose: 'Fermer',
    dimensionsLabel: 'Dimensions',
    mediumLabel: 'Technique',
  },
  ar: {
    locale: 'ar',
    dir: 'rtl',
    brandKicker: 'ملف الفنان',
    brandTitle: 'محمد الشريف بوعناقة',
    nav: {
      about: 'حول الفنان',
      cv: 'السيرة الذاتية',
      diplomas: 'الشهادات',
      gallery: 'المعرض',
      contact: 'التواصل',
    },
    switcher: { fr: 'FR', ar: 'AR' },
    hero: {
      kicker: 'ملف فني',
      title: 'محمد الشريف بوعناقة - فنان تشكيلي',
      summary:
        'ملف فني يركز على المناظر الطبيعية والاماكن التاريخية والذاكرة المعمارية لمدينة قسنطينة.',
      tags: ['لوحات', 'تراث', 'مناظر'],
      primaryAction: 'عرض اللوحات',
      secondaryAction: 'قراءة السيرة الذاتية',
      featuredLabel: 'العمل المميز',
      sideLabel: 'الرؤية الفنية',
      sideText:
        'يستكشف العمل الذاكرة والضوء والتراث المعماري لقسنطينة من خلال التشكيل واللون.',
    },
    metrics: [
      { value: '10', label: 'لوحات معروضة' },
      { value: '19', label: 'شهادات ودبلومات' },
      { value: 'ONDA', label: 'العضوية 7442' },
    ],
    about: {
      kicker: 'حول الفنان',
      title: 'ممارسة فنية بين المنظر الطبيعي والتراث والذاكرة',
      note:
        'الموقع مصمم ليقدم مسار الفنان ومرجعياته وعالمه البصري بشكل واضح ومتوازن.',
      lead: [
        'محمد الشريف بوعناقة فنان تشكيلي من قسنطينة، يركز في اعماله على المناظر الطبيعية والجسور المعلقة والمدينة القديمة والتراث المعماري.',
        'تربط لوحاته بين ذاكرة المكان والضوء والمادة، مع اهتمام خاص بالاشكال التاريخية لمدينة قسنطينة.',
      ],
      facts: [
        'مولود في 13 اكتوبر 1974 بقسنطينة، الجزائر.',
        'عضو في الديوان الوطني لحقوق المؤلف والحقوق المجاورة، بطاقة رقم 7442.',
        'يرتكز عمله على الذاكرة المعمارية والجسور والمشهد الحضري.',
        'يشتغل على الزيت على القماش وتقنية التنقيط.',
      ],
    },
    cv: {
      kicker: 'السيرة الذاتية',
      title: 'المسار الفني والمرجعيات وخلاصة الملف',
      note: 'تعرض هذه الفقرة المعلومات الاساسية المستخلصة من السيرة الذاتية والوثائق المرفقة.',
      profileLabel: 'الملف الشخصي',
      artistName: 'محمد الشريف بوعناقة',
      pill: 'فنان تشكيلي',
      lead:
        'فنان تشكيلي من مواليد قسنطينة سنة 1974. يستكشف في اعماله الذاكرة والتراث المعماري وضوء المدينة من خلال لوحات تهتم بالتضاريس والجسور والاماكن التاريخية.',
      factsTitle: 'معطيات',
      facts: [
        'مولود في 13 اكتوبر 1974 بقسنطينة، الجزائر',
        'العنوان: 26 UV 09-204 LOGTS AADL BL.B1 APT 26، قسنطينة',
        'منخرط في ONDA منذ 20/12/2020',
      ],
      contactTitle: 'التواصل',
      contact: [
        'الهاتف: +213 6 57 47 43 97',
        'البريد الالكتروني: bouanakamohamedcherif12@gmail.com',
      ],
      statementTitle: 'الرؤية الفنية',
      statementText:
        'محمد الشريف بوعناقة فنان تشكيلي حاز على جوائز بن باديس وتكريمات رسمية، ويستكشف في اعماله ذاكرة قسنطينة وضوءها وتراثها المعماري، مع تركيز خاص على الجسور المعلقة والتضاريس الصخرية والاماكن التاريخية.',
      archiveTitle: 'خلاصة الملف',
      archiveText:
        'تعكس الوثائق المرفقة مسارا فنيا معترفا به بين 2007 و2025، مع تكريمات صادرة عن جهات ثقافية ومحلية، وحضور مهني مؤكد من خلال الانخراط في ONDA.',
      distinctionsTitle: 'جوائز وتكريمات',
      highlights: [
        {
          year: '2025',
          title: 'شهادة شرف - Gouraya TV',
          text: 'تكريم حديث ضمن المسار الفني للفنان.',
        },
        {
          year: '2025',
          title: 'شهادة مشاركة - المعهد الفرنسي بعنابة',
          text: 'توثيق لمشاركة ثقافية حديثة.',
        },
        {
          year: '2024',
          title: 'شهادة تقدير - دار الثقافة مالك حداد',
          text: 'تقدير مرتبط بحضور الفنان في الساحة الثقافية.',
        },
        {
          year: '2017 / 2015',
          title: 'تكريمات مؤسساتية',
          text: 'شهادات اعتراف من مديرية الثقافة بقسنطينة ووزارة الثقافة.',
        },
        {
          year: '2012 / 2011',
          title: 'دبلوم شرفي وشهادة اعتراف',
          text: 'تكريمات رسمية داخل قسنطينة وبلدية الخروب.',
        },
        {
          year: '2007 / 2013',
          title: 'جوائز بن باديس',
          text: 'الجائزة الاولى سنة 2007 ثم المرتبة الثانية مناصفة سنة 2013 مع ميدالية اعتراف في الدورات اللاحقة.',
        },
      ],
    },
    diplomas: {
      kicker: 'الدبلومات والشهادات',
      title: 'ارشيف بصري للشهادات والدبلومات والتكريمات',
      note: 'تم عرض الوثائق بصيغتها الكاملة حتى تبقى كل شهادة واضحة وقابلة للقراءة.',
    },
    gallery: {
      kicker: 'اللوحات',
      title: 'مختارات من الاعمال',
      note: 'تم تنظيف الصور وقصها لعرض اللوحات نفسها بدون لقطات شاشة او عناصر مشتتة.',
      featuredLabel: 'اللوحة المميزة',
    },
    contact: {
      kicker: 'التواصل',
      title: 'معلومات الفنان',
      details: [
        'محمد الشريف بوعناقة',
        'الهاتف: +213 6 57 47 43 97',
        'البريد الالكتروني: bouanakamohamedcherif12@gmail.com',
        'قسنطينة، الجزائر',
      ],
    },
    footer: 'ملف فني - محمد الشريف بوعناقة',
    modalClose: 'اغلاق',
    dimensionsLabel: 'الابعاد',
    mediumLabel: 'التقنية',
  },
};

function getLocalizedText(field, language) {
  if (typeof field === 'string') {
    return field;
  }

  return field[language];
}



function App() {
  const [language, setLanguage] = useState('fr');
  const [selectedItem, setSelectedItem] = useState(null);

  const copy = translations[language];
  const featuredDrawing = drawings.find((drawing) => drawing.featured) ?? drawings[0];
  const galleryDrawings = drawings.filter((drawing) => drawing.id !== featuredDrawing.id);

  useEffect(() => {
    document.documentElement.lang = copy.locale;
    document.documentElement.dir = copy.dir;
    document.title =
      language === 'fr'
        ? 'Portfolio artiste | Mohamed-Cherif Bouanaka'
        : 'ملف فني | محمد الشريف بوعناقة';
  }, [copy.dir, copy.locale, language]);

  return (
    <div className="site-shell" dir={copy.dir} lang={copy.locale}>
      <header className="site-header">
        <a className="brand" href="#home">
          <span className="brand-kicker">{copy.brandKicker}</span>
          <strong>{copy.brandTitle}</strong>
        </a>

        <div className="header-actions">
          <nav className="site-nav">
            <a href="#about">{copy.nav.about}</a>
            <a href="#cv">{copy.nav.cv}</a>
            <a href="#diplomas">{copy.nav.diplomas}</a>
            <a href="#gallery">{copy.nav.gallery}</a>
            <a href="#contact">{copy.nav.contact}</a>
          </nav>

          <div className="lang-switcher" aria-label="Language switcher">
            <button
              className={`lang-button ${language === 'fr' ? 'is-active' : ''}`}
              onClick={() => setLanguage('fr')}
              type="button"
            >
              {copy.switcher.fr}
            </button>
            <button
              className={`lang-button ${language === 'ar' ? 'is-active' : ''}`}
              onClick={() => setLanguage('ar')}
              type="button"
            >
              {copy.switcher.ar}
            </button>
          </div>
        </div>
      </header>

      <main className="site-main" id="home">
        <section className="hero-panel">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="section-kicker">{copy.hero.kicker}</p>
              <h1>{copy.hero.title}</h1>
              <p className="hero-summary">{copy.hero.summary}</p>

              <div className="tag-row">
                {copy.hero.tags.map((tag) => (
                  <span className="tag-chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="hero-actions">
                <a className="button-primary" href="#gallery">
                  {copy.hero.primaryAction}
                </a>
                <a className="button-secondary" href="#cv">
                  {copy.hero.secondaryAction}
                </a>
              </div>

              <div className="metric-row">
                {copy.metrics.map((metric) => (
                  <article className="metric-card" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero-visual-stage">
              <div className="hero-image-card">
                <img
                  src={featuredDrawing.image}
                  alt={getLocalizedText(featuredDrawing.title, language)}
                />
              </div>

              <article className="floating-card floating-card-primary">
                <span className="tiny-label">{copy.hero.featuredLabel}</span>
                <h2>{getLocalizedText(featuredDrawing.title, language)}</h2>
                <p>{getLocalizedText(featuredDrawing.description, language)}</p>
              </article>

              <article className="floating-card floating-card-secondary">
                <span className="tiny-label">{copy.hero.sideLabel}</span>
                <p>{copy.hero.sideText}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading split">
            <div>
              <p className="section-kicker">{copy.about.kicker}</p>
              <h2>{copy.about.title}</h2>
            </div>
            <p className="section-note">{copy.about.note}</p>
          </div>

          <div className="overview-grid">
            <article className="overview-card overview-lead">
              {copy.about.lead.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>

            <div className="fact-stack">
              {copy.about.facts.map((fact) => (
                <article className="fact-card" key={fact}>
                  <span className="fact-mark" />
                  <p>{fact}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="cv">
          <div className="section-heading split">
            <div>
              <p className="section-kicker">{copy.cv.kicker}</p>
              <h2>{copy.cv.title}</h2>
            </div>
            <p className="section-note">{copy.cv.note}</p>
          </div>

          <div className="cv-layout">
            <article className="cv-paper">
              <div className="cv-topline">
                <div>
                  <span className="tiny-label">{copy.cv.profileLabel}</span>
                  <h3>{copy.cv.artistName}</h3>
                </div>
                <span className="pill">{copy.cv.pill}</span>
              </div>

              <p className="cv-lead">{copy.cv.lead}</p>

              <div className="cv-columns">
                <div className="cv-column-card">
                  <h4>{copy.cv.factsTitle}</h4>
                  <ul>
                    {copy.cv.facts.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="cv-column-card">
                  <h4>{copy.cv.contactTitle}</h4>
                  <ul>
                    {copy.cv.contact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="cv-text-grid">
                <article className="cv-column-card">
                  <h4>{copy.cv.statementTitle}</h4>
                  <p>{copy.cv.statementText}</p>
                </article>

                <article className="cv-column-card">
                  <h4>{copy.cv.archiveTitle}</h4>
                  <p>{copy.cv.archiveText}</p>
                </article>
              </div>
            </article>

            <aside className="highlight-stack">
              {copy.cv.highlights.map((item) => (
                <article className="highlight-card" key={`${language}-${item.year}-${item.title}`}>
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </aside>
          </div>
        </section>

        <section className="section" id="diplomas">
          <div className="section-heading split">
            <div>
              <p className="section-kicker">{copy.diplomas.kicker}</p>
              <h2>{copy.diplomas.title}</h2>
            </div>
            <p className="section-note">{copy.diplomas.note}</p>
          </div>

          <div className="diploma-grid">
            {diplomaItems.map((diploma) => (
              <button
                className="diploma-card"
                key={diploma.id}
                onClick={() => setSelectedItem(diploma)}
                type="button"
              >
                <div className="diploma-image">
                  <img src={diploma.image} alt={getLocalizedText(diploma.title, language)} />
                </div>
                <div className="diploma-copy">
                  <span>{diploma.id.replace('diploma-', '#')}</span>
                  <h3>{getLocalizedText(diploma.title, language)}</h3>
                  <p>{getLocalizedText(diploma.caption, language)}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="section-heading split">
            <div>
              <p className="section-kicker">{copy.gallery.kicker}</p>
              <h2>{copy.gallery.title}</h2>
            </div>
            <p className="section-note">{copy.gallery.note}</p>
          </div>

          <button
            className="featured-artwork"
            onClick={() => setSelectedItem(featuredDrawing)}
            type="button"
          >
            <div className="featured-art-image">
              <img
                src={featuredDrawing.image}
                alt={getLocalizedText(featuredDrawing.title, language)}
              />
            </div>

            <div className="featured-art-copy">
              <span className="tiny-label">{copy.gallery.featuredLabel}</span>
              <h3>{getLocalizedText(featuredDrawing.title, language)}</h3>
              <p>{getLocalizedText(featuredDrawing.description, language)}</p>
              <div className="art-meta">
                <span>
                  {copy.dimensionsLabel}: {getLocalizedText(featuredDrawing.dimensions, language)}
                </span>
                <span>
                  {copy.mediumLabel}: {getLocalizedText(featuredDrawing.medium, language)}
                </span>
              </div>
            </div>
          </button>

          <div className="gallery-grid">
            {galleryDrawings.map((drawing) => (
              <button
                className={`gallery-card ${drawing.layout === 'portrait' ? 'gallery-card-tall' : ''}`}
                key={drawing.id}
                onClick={() => setSelectedItem(drawing)}
                type="button"
              >
                <div className="gallery-card-image">
                  <img
                    src={drawing.image}
                    alt={getLocalizedText(drawing.title, language)}
                  />
                </div>
                <div className="gallery-card-copy">
                  <div className="gallery-card-topline">
                    <span>{getLocalizedText(drawing.dimensions, language)}</span>
                    <strong>{getLocalizedText(drawing.medium, language)}</strong>
                  </div>
                  <h3>{getLocalizedText(drawing.title, language)}</h3>
                  <p>{getLocalizedText(drawing.description, language)}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="contact-band">
            <div className="contact-copy">
              <p className="section-kicker">{copy.contact.kicker}</p>
              <h2>{copy.contact.title}</h2>
            </div>

            <div className="contact-details">
              {copy.contact.details.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{copy.brandKicker}</p>
        <span>{copy.footer}</span>
      </footer>

      {selectedItem ? (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedItem(null)}
          role="presentation"
        >
          <div
            className="modal-card"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="modal-close"
              onClick={() => setSelectedItem(null)}
              type="button"
            >
              {copy.modalClose}
            </button>
            <img
              src={selectedItem.image}
              alt={getLocalizedText(selectedItem.title, language)}
            />
            <div className="modal-copy">
              <div className="modal-topline">
                {'dimensions' in selectedItem ? (
                  <span>
                    {copy.dimensionsLabel}: {getLocalizedText(selectedItem.dimensions, language)}
                  </span>
                ) : null}
                {'medium' in selectedItem ? (
                  <span>
                    {copy.mediumLabel}: {getLocalizedText(selectedItem.medium, language)}
                  </span>
                ) : null}
              </div>
              <h3>{getLocalizedText(selectedItem.title, language)}</h3>
              <p>
                {'description' in selectedItem
                  ? getLocalizedText(selectedItem.description, language)
                  : getLocalizedText(selectedItem.caption, language)}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
