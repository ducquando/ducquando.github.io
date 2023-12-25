import * as React from 'react';
import { useState } from 'react';
import '../../stylesheets/footer.css';

interface FooterProps {
  contactEmail: { [key: string]: any };
  contactConnect: { [key: string]: any }[];
}

export const Footer: React.FC<FooterProps> = ({
  contactEmail,
  contactConnect,
}) => {
  return (
    <>
      <div></div>
      <div></div>
    </>
  );
};
