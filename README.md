# @ant-design/nextjs-registry

[![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url] [![bundle size][bundlephobia-image]][bundlephobia-url]

[npm-image]: http://img.shields.io/npm/v/@ant-design/nextjs-registry.svg?style=flat-square
[npm-url]: http://npmjs.org/package/@ant-design/nextjs-registry
[github-actions-image]: https://github.com/ant-design/nextjs-registry/workflows/CI/badge.svg
[github-actions-url]: https://github.com/ant-design/nextjs-registry/actions
[codecov-image]: https://img.shields.io/codecov/c/github/ant-design/nextjs-registry/main.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/ant-design/nextjs-registry/branch/main
[download-image]: https://img.shields.io/npm/dm/@ant-design/nextjs-registry.svg?style=flat-square
[download-url]: https://npmjs.org/package/@ant-design/nextjs-registry
[bundlephobia-url]: https://bundlephobia.com/result?p=@ant-design/nextjs-registry
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/@ant-design/nextjs-registry

This package is used for registry styles of Ant Design components for Next.js.

## Install

```bash
npm install @ant-design/nextjs-registry --save
```

## Usage

Should be use in `RootLayout` of Nextjs app router.

```tsx
// app/layout.tsx

import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
```
