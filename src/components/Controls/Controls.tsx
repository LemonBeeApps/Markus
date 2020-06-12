import React from 'react';
import { ContainerStore } from 'components/Container/Container.store';
import styles from './Controls.module.css';
import { observer } from 'mobx-react';

type ControlsProps = {
  store: ContainerStore;
}

@observer
export class Controls extends React.Component<ControlsProps> {
  onToggleEditor = () => {
    this.props.store.toggleEditor();
  }
  onToggleRenderer = () => {
    this.props.store.toggleRenderer();
    console.log(this.props.store);
  }

  render() {
    const { store } = this.props;
    return (
      <div className={styles.controls}>
        <p>Show editor</p>
        <input type="checkbox" onChange={this.onToggleEditor} checked={store.showEditor} />
        <p>Show renderer</p>
        <input type="checkbox" onChange={this.onToggleRenderer} checked={store.showRenderer} />
      </div>
    )
  }
}