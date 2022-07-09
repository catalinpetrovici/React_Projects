// http://localhost:8888/.netlify/functions/react-store-products

const dataProducts = [
  {
    id: 'recZkNf2kwmdBcqd0',
    name: 'accent chair',
    price: 25999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=aa821f85bc93123d',
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    company: 'marcos',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'office',
    shipping: true,
  },
  {
    id: 'recEHmzvupvT8ZONH',
    name: 'albany sectional',
    price: 109999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=bdc93141e07fe051',
    colors: ['#000', '#ffb900'],
    company: 'liddy',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'living room',
  },
  {
    id: 'rec5NBwZ5zCD9nfF0',
    name: 'albany table',
    price: 309999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=32ebfabc4102abd1',
    colors: ['#ffb900', '#0000ff'],
    company: 'liddy',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'kitchen',
  },
  {
    id: 'recd1jIVIEChmiwhe',
    name: 'armchair',
    price: 12599,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=fb85d8e01962a4af',
    colors: ['#000', '#00ff00', '#0000ff'],
    company: 'marcos',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'bedroom',
    shipping: true,
  },
  {
    id: 'recoM2MyHJGHLVi5l',
    name: 'bar stool',
    price: 4099,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=d94b96c3cc50e4bd',
    colors: ['#000'],
    company: 'liddy',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'dining',
    shipping: true,
  },
  {
    id: 'recotY5Nh00DQFdkm',
    name: 'dining table',
    price: 42999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/7a38cf782907773d9900165530cfa583/d9f41960?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=8ef28ee00c01212b',
    colors: ['#00ff00', '#0000ff', '#ff0000'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'dining',
    shipping: true,
  },
  {
    id: 'rec1Ntk7siEEW9ha1',
    name: 'emperor bed',
    price: 23999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=182824809a765ed1',
    colors: ['#0000ff', '#000'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'bedroom',
    shipping: true,
  },
  {
    id: 'recNZ0koOqEmilmoz',
    name: 'entertainment center',
    price: 59999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=3d0dbe99e41eb65b',
    featured: true,
    colors: ['#000', '#ff0000'],
    company: 'caressa',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'living room',
    shipping: true,
  },
  {
    id: 'recrfxv3EwpvJwvjq',
    name: 'high-back bench',
    price: 39999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/1af97a4d3eb28563962d8e3520727ffc/1b9cc17f?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=c54285af6e9f053a',
    featured: true,
    colors: ['#000', '#00ff00'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'office',
    shipping: true,
  },
  {
    id: 'recoW8ecgjtKx2Sj2',
    name: 'leather chair',
    price: 20099,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/d3174ad774fc628e1d50b77e3bec399f/1de7b97a?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=ee62c77e87174fa3',
    colors: ['#ff0000', '#ffb900', '#00ff00'],
    company: 'caressa',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'bedroom',
  },
  {
    id: 'recEOA6qtDag1hRbU',
    name: 'leather sofa',
    price: 99999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/a2f371071cf292badbb621294758b600/ca963b31?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=852ba9069e9b2fb2',
    colors: ['#00ff00', '#0000ff'],
    company: 'caressa',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'office',
  },
  {
    id: 'recoAJYUCuEKxcPSr',
    name: 'modern bookshelf',
    price: 31999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/1e4a818f5184993e430420a152315b40/873c7094?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=b1a2f824de52be73',
    featured: true,
    colors: ['#ffb900', '#ff0000', '#00ff00'],
    company: 'caressa',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'kids',
  },
  {
    id: 'recQ0fMd8T0Vk211E',
    name: 'modern poster',
    price: 3099,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/89ba7458c24252be77f5a835dd398880/c13ef359?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=4d90285580f9f52c',
    colors: ['#000'],
    company: 'liddy',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'living room',
    shipping: true,
  },
  {
    id: 'rec7CjDWKRgNQtrKe',
    name: 'shelf',
    price: 30999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/2fd8fb02cc6fa5620504de41fbb662f9/3157a507?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=5f36b2351f5ce1b3',
    colors: ['#00ff00'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'living room',
  },
  {
    id: 'recF0KpwlkF7e8kXO',
    name: 'simple chair',
    price: 109999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/c9d46754faf94d2283e15ac3b8accb9a/a6c343c8?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=84ad919d682ebd2e',
    colors: ['#0000ff'],
    company: 'liddy',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'living room',
    shipping: true,
  },
  {
    id: 'recs5BSVU3qQrOj4E',
    name: 'sofa set',
    price: 129999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/fe9d4f25fee307f6ae5b7a462b70b942/031464c4?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=d547381e1235755d',
    colors: ['#00ff00', '#ffb900'],
    company: 'marcos',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'living room',
    shipping: true,
  },
  {
    id: 'recroK1VD8qVdMP5H',
    name: 'suede armchair',
    price: 15999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/1cf03bfcee117bd92273d996a82a1534/47ef57c7?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=e66141eb606bb29d',
    colors: ['#ffb900'],
    company: 'caressa',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'office',
  },
  {
    id: 'rec7JInsuCEHgmaGe',
    name: 'utopia sofa',
    price: 79999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/5ebc46a9e31a09cbc6078190ab035abc/8480b064?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=dcb52542f7307ce6',
    featured: true,
    colors: ['#ff0000', '#00ff00'],
    company: 'liddy',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'living room',
  },
  {
    id: 'rec3jeKnhInKHJuz2',
    name: 'vase table',
    price: 120999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/1e222e36e935db2695c33e3d30c2e482/91b542e0?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=13bcfb130492dc2e',
    featured: true,
    colors: ['#ff0000'],
    company: 'marcos',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'office',
  },
  {
    id: 'recv2ohxljlK2FZO7',
    name: 'wooden bed',
    price: 250099,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/1d692023f254ca11a3d1a3628d198081/e922a771?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=b125908ba325ac48',
    colors: ['#000', '#ffb900'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'bedroom',
  },
  {
    id: 'recJIjREF3dlFi3sR',
    name: 'wooden desk',
    price: 150999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/e3fa7aa6dc112c4998da18bb401bd70f/61e2fb5e?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=f4419738ddbc8843',
    colors: ['#000'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'office',
    shipping: true,
  },
  {
    id: 'recm7wC8TBVdU9oEL',
    name: 'wooden desk',
    price: 40099,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/954dfa5c8ce3df84a3c7254481464366/a3bd8c4a?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=214a29bcd3de6f9a',
    colors: ['#0000ff', '#00ff00'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'office',
  },
  {
    id: 'rectfNsySwAJeWDN2',
    name: 'wooden table',
    price: 234999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/e8c2f821d05b9e4e5aa450a19e62ffa5/271fc3f5?ts=1657379533&userId=usrQMwWEPx18KgLcP&cs=1d4e4bae43df43f0',
    featured: true,
    colors: ['#ffb900', '#ff0000'],
    company: 'caressa',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'kitchen',
    shipping: true,
  },
];

exports.handler = async function (event, context) {
  console.log(event.queryStringParameters);
  return {
    statusCode: 200,
    body: JSON.stringify(dataProducts),
  };
};
