export const adaptOffers = (offer) => {
  const adapted = {
    ...offer,
    host: {
      avatarUrl: offer.host.avatar_url,
      isPro: offer.host.is_pro,
    },
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,
  };

  delete adapted.host.avatar_url;
  delete adapted.host.is_pro;
  delete adapted.is_favorite;
  delete adapted.is_premium;
  delete adapted.max_adults;
  delete adapted.preview_image;

  return adapted;
};
