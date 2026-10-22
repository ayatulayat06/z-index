import React from 'react';

export default function NextImage(props: any) {
  const { fill, priority, ...rest } = props;
  const style = fill
    ? { ...rest.style, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }
    : rest.style;
  return <img {...rest} style={style} />;
}
