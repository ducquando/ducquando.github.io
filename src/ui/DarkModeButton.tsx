import * as React from 'react';
import { SunIcon } from '@radix-ui/react-icons';
import { Button } from './Button';

interface DarkModeButtonProps {
  css?: React.ComponentProps<typeof Button>['css'];
}

export const DarkModeButton: React.VFC<DarkModeButtonProps> = ({
  css,
  ...props
}) => {
  // put a try catch around localStorage so this app will work in codesandbox
  // when the user blocks third party cookies in chrome,
  // which results in a security error when useDarkMode tries to access localStorage
  // see https://github.com/codesandbox/codesandbox-client/issues/5397
  let storageProvider: any = null;
  try {
    storageProvider = localStorage;
  } catch {}

  // add color-scheme style to <html> element
  // so document scroll bars will have native dark mode styling
  React.useEffect(() => {
    // @ts-ignore
    document.documentElement.style.colorScheme = 'light';
  });

  return (
    <Button
      {...props}
      focus="boxShadow"
      css={{
        width: '36px',
        height: '36px',
        padding: '3px',
        margin: '-3px',
        borderRadius: '50%',
        // cast as any b/c of Stitches bug: https://github.com/modulz/stitches/issues/407
        ...(css as any),
      }}
      title="Toggle dark mode"
      aria-label="Toggle dark mode"
    >
      <SunIcon width="30" height="30" />
    </Button>
  );
};
