import React from 'react'
import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/layout/GlobalStyle'

addDecorator(s => <><GlobalStyle />{s()}</>);