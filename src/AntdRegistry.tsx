'use client';

import React, { FC, ReactNode, useState } from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';

const AntdRegistry: FC<{ children: ReactNode }> = ({ children }) => {
  const [cache] = useState(() => createCache());

  useServerInsertedHTML(() => {
    const styleText = extractStyle(cache, { plain: true });

    return <style dangerouslySetInnerHTML={{ __html: styleText }} />;
  });

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default AntdRegistry;
