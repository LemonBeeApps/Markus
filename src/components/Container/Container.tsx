import React from 'react';
import { EditorStore } from '../Editor/Editor.store';
import { Editor } from '../Editor/Editor';
import { Renderer } from 'components/Renderer/Renderer';
import styles from './Container.module.css';
import { ContainerStore } from './Container.store';
import { observer } from 'mobx-react';
import { Controls } from 'components/Controls/Controls';

@observer
export class Container extends React.Component {
  render() {
    const editorStore = new EditorStore();
    const containerStore = new ContainerStore();
    return (
      <div className={styles.wrapper}>
        <Controls store={containerStore} />
        <div className={styles.container}>
          {containerStore.showEditor && <Editor store={editorStore} />}
          {containerStore.showRenderer && <Renderer store={editorStore} />}
        </div>
      </div>
    );
  }
}
