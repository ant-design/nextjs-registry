# @ant-design/nextjs-registry

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
