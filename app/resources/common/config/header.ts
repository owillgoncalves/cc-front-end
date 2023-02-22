import type { LinkProps } from "../types";

const isCurrentlyActive = (url: string) => {
  return (pathname: string) => pathname.includes(url);
};

export const links: LinkProps[] = [
  {
    label: 'Vídeos',
    url: '/videos',
    isCurrentlyActive: isCurrentlyActive('/videos'),
  },
  {
    label: 'FAQ',
    url: '/faq',
    isCurrentlyActive: isCurrentlyActive('/faq'),
  },
  {
    label: 'Termos',
    url: '/termos',
    isCurrentlyActive: isCurrentlyActive('/termos'),
  }
];