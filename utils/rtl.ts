// RTL Utility Functions
export const isRTL = () => {
  if (typeof window !== 'undefined') {
    return document.documentElement.dir === 'rtl';
  }
  return true; // Default to RTL for SSR
};

export const getRTLDirection = () => {
  return isRTL() ? 'rtl' : 'ltr';
};

export const getRTLMargin = (left: string, right: string) => {
  return isRTL() ? { marginRight: left, marginLeft: right } : { marginLeft: left, marginRight: right };
};

export const getRTLPadding = (left: string, right: string) => {
  return isRTL() ? { paddingRight: left, paddingLeft: right } : { paddingLeft: left, paddingRight: right };
};

export const getRTLBorderRadius = (topLeft: string, topRight: string, bottomRight: string, bottomLeft: string) => {
  if (isRTL()) {
    return `${topRight} ${topLeft} ${bottomLeft} ${bottomRight}`;
  }
  return `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
};
