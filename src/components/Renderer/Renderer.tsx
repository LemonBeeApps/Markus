import React from 'react';
import { observer } from 'mobx-react';
import { EditorStore } from 'components/Editor/Editor.store';
import Markdown from 'markdown-to-jsx';
import styles from './Renderer.module.css';

type RendererProps = {
  store: EditorStore;
}

@observer
export class Renderer extends React.Component<RendererProps> {
  render() {
    const { store } = this.props;
    return (
      <div className={styles.renderer}>
        <Markdown className={styles.markdown}>
          {store.value}
        </Markdown>
      </div>
    )
  }
}
