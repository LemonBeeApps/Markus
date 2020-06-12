import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { EditorStore } from './Editor.store';
import styles from './Editor.module.css';

type EditorProps = {
  store: EditorStore;
};

@observer
export class Editor extends Component<EditorProps> {
  onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { store } = this.props;
    store.setValue(e.target.value);
  }

  render() {
    const { store } = this.props;
    return (
      <textarea
        className={styles.editor}
        onChange={this.onChange}
        value={store.value}
      />
    );
  }
}
