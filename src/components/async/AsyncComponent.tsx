import * as React from 'react';
import { Component, ReactType } from 'react';

enum LoadState {
  Pending = 'PENDING',
  Complete = 'COMPLETE',
  Error = 'ERROR',
}

type Module = {
  default: any;
  [key: string]: any;
}

type AsyncComponentProps = {
  /**
   * Called if fetchData and resolve complete successfully
   */
  onComplete?: Function;
  /**
   * Called if an error is thrown from props.resolve or props.fetchData
   */
  onError?: Function;
  /**
   * The resolver function which should return a ES6 module in the format { default }
   */
  resolve: Function;
  /**
   * A promise containing any data the resolved component needs on mount
   */
  fetchData?: Function;
  /**
   * The component to display if the resolver promise has not completed.
   */
  Loading: ReactType;
  /**
   * The component to display if the resolver promise has errored.
   */
  Errored: ReactType;

  /**
   * All extra props are passed to loading, errored, or rendered component
   */
  [x: string]: any;
}

type AsyncComponentState = {
  /**
   * Most recent error object
   */
  error: Error;

  /**
   * The current state of the loaded component.
   */
  status: LoadState;
  /**
   * Component The resolved component.
   */
  Component: ReactType;
  /**
   * The data fetched from the fetchData prop.
   */
  data: object;
}

/**
 * This component is used to render components loaded asyncronously. Its most useful for resolving
 * components with ESM `import()` statements, which are transpiled to Nodes `require`, or XHR by Babel.
 *
 * Typical usage would look like:
 *
 * <AsyncComponent resolve={() => import('./SomeOtherComponent')} />
 *
 * where the default export of ./SomeOtherComponent.js is a React component.
 */
class AsyncComponent extends Component<AsyncComponentProps, AsyncComponentState> {
  unmounted = false;
  mounted = false;
  
  static defaultProps: AsyncComponentProps = {
    onComplete: console.log,
    onError: console.error,
    resolve: null,
    fetchData: () => new Promise(resolve => resolve()),
    Loading: () => null,
    Errored: () => null,
  }

  state: AsyncComponentState = {
    error: null,
    status: LoadState.Pending,
    Component: null,
    data: {},
  }

  componentDidMount() {
    this.loadModule();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  handleError = (error: Error) => {
    typeof this.props.onError === 'function' && this.props.onError(error);
    return !this.unmounted && this.setState({
      error,
      status: LoadState.Error,
    });
  }

  handleLoad = ([module, data]: [Module, object]) => {
    typeof this.props.onComplete === 'function' && this.props.onComplete(data);
    return !this.unmounted && this.setState({
      Component: module.default,
      data,
      status: LoadState.Complete,
    });
  }

  loadModule() {
    if (typeof this.props.resolve !== 'function') {
      return this.handleError(
        new Error(`Expected resolve to be typeof function, got ${typeof this.props.resolve}`)
      );
    }

    const promises: [Promise<Module>, Promise<object>] = [
      this.props.resolve(),
      this.props.fetchData(this.props),
    ];
    Promise.all(promises)
      .then(this.handleLoad)
      .catch(this.handleError);
  }

  render() {
    const {
      Errored,    // eslint-disable-line @typescript-eslint/no-unused-vars
      Loading,    // eslint-disable-line @typescript-eslint/no-unused-vars
      onComplete, // eslint-disable-line @typescript-eslint/no-unused-vars
      onError,    // eslint-disable-line @typescript-eslint/no-unused-vars
      resolve,    // eslint-disable-line @typescript-eslint/no-unused-vars
      fetchData,  // eslint-disable-line @typescript-eslint/no-unused-vars
      ...extra
    } = this.props;

    const {
      Component,
      data,
      error,
      status,
    } = this.state;

    if (status === LoadState.Pending) {
      return <Loading />;
    }

    if (status === LoadState.Error) {
      return <Errored error={error} />;
    }

    return <Component {...extra} data={data} />;
  }
}

export default AsyncComponent;
