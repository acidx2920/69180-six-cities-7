export const adaptOffer = (offer) => {
  const adapted = {
    ...offer,
    host: {
      ...offer.host,
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

export const adaptAuthInfo = (info) => {
  const adapted = {
    ...info,
    avatarUrl: info.avatar_url,
    isPro: info.is_pro,
  };

  delete adapted.avatar_url;
  delete adapted.is_pro;

  return adapted;
};

export const adaptReview = (review) => {
  const adapted = {
    ...review,
    user: {
      ...review.user,
      avatarUrl: review.user.avatar_url,
      isPro: review.user.is_pro,
    },
  };

  delete adapted.user.avatar_url;
  delete adapted.user.is_pro;

  return adapted;
};
