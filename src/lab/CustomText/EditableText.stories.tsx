import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { ThemedBackground } from '../../utils/storybook';
import { EditableText } from './EditableText';

storiesOf('text/EditableText', module)
  .add('Litmus Portal', () => {
    const [valueText, setValueText] = useState('Hello World');
    return (
      <ThemedBackground platform="litmus-portal">
        <EditableText
          label="Normal text field"
          variant={'primary'}
          value={valueText}
          onChange={(e) => setValueText(e.target.value)}
        />
        <EditableText
          label="Normal text field"
          variant={'primary'}
          value={valueText}
          multiline
          onChange={(e) => setValueText(e.target.value)}
        />
      </ThemedBackground>
    );
  })
  .add('Kubera Chaos', () => {
    const [valueText, setValueText] = useState('Hello World');
    return (
      <ThemedBackground platform="kubera-chaos">
        <EditableText
          label="Normal text field"
          variant={'primary'}
          value={valueText}
          onChange={(e) => setValueText(e.target.value)}
        />
        <EditableText
          label="Normal text field"
          variant={'primary'}
          value={valueText}
          multiline
          onChange={(e) => setValueText(e.target.value)}
        />
      </ThemedBackground>
    );
  })
  .add('Kubera Propel', () => {
    const [valueText, setValueText] = useState('Hello World');
    return (
      <ThemedBackground platform="kubera-propel">
        <EditableText
          label="Normal text field"
          variant={'primary'}
          value={valueText}
          onChange={(e) => setValueText(e.target.value)}
        />
        <EditableText
          label="Normal text field"
          variant={'primary'}
          value={valueText}
          multiline
          onChange={(e) => setValueText(e.target.value)}
        />
      </ThemedBackground>
    );
  })
  .add('Kubera Core', () => {
    const [valueText, setValueText] = useState('Hello World');
    return (
      <ThemedBackground platform="kubera-core">
        <EditableText
          label="Normal text field"
          variant={'primary'}
          value={valueText}
          onChange={(e) => setValueText(e.target.value)}
        />
        <EditableText
          label="Normal text field"
          variant={'primary'}
          value={valueText}
          multiline
          onChange={(e) => setValueText(e.target.value)}
        />
      </ThemedBackground>
    );
  })
  .add('Kubera Portal', () => {
    const [valueText, setValueText] = useState('Hello World');
    return (
      <ThemedBackground platform="kubera-portal">
        <EditableText
          label="Normal text field"
          variant={'primary'}
          value={valueText}
          onChange={(e) => setValueText(e.target.value)}
        />
        <EditableText
          label="Normal text field"
          variant={'primary'}
          value={valueText}
          multiline
          onChange={(e) => setValueText(e.target.value)}
        />
      </ThemedBackground>
    );
  });
