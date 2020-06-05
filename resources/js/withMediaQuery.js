import React from "react";

export default function withMediaQuery(WrappedComponent, mediaQuery) {
    return class extends React.Component {
        render() {
            return <WrappedComponent {...this.props} mediaQuery={mediaQuery}  />;
        }
    };
}
