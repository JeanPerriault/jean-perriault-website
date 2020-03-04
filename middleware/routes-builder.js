const buildRoutes = () => {
  const frenchRoutes = [
    '/',
    '/profil',
    '/projets',
    '/blog',
    '/liens',
    '/references'
  ];
  const englishRoutes = [];
  const spanishRoutes = [];

  for (let i = 0; i < frenchRoutes.length; i++) {
    englishRoutes.push('/en' + frenchRoutes[i]);
    spanishRoutes.push('/es' + frenchRoutes[i]);
  }
  const allRoutes = [...frenchRoutes, ...englishRoutes, ...spanishRoutes];
  return allRoutes;
};

export default {
  buildRoutes
};
