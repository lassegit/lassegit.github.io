/* eslint-disable react/prop-types */
import React from 'react';
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props: { location } }) => <Layout location={location}>{element}</Layout>;
