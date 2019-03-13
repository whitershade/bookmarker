import React, { Component } from 'react';
import Layout from '../../features/layout'

export default function PageWrapper<TProps>(WrappedComponent:React.ComponentType<TProps>) {
    return class extends Component<TProps>  {
        render() {
            return (
              <Layout>
                <WrappedComponent {...this.props} />
              </Layout>
            );
        }
    };
}
