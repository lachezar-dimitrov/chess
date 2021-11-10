// import React, { Component, ComponentType } from 'react';
// import { observer } from 'mobx-react';
// import { StoreContext } from '../../components/StoreProvider/StoreProvider';
// import { IAppStore } from '../../interfaces/store/IAppStore';

// type SelectorFunctionType<S, P> = (store: S, props?: P) => P;

// export const storeInjector = <PropTypes, >(
//   selectorFunction: SelectorFunctionType<IAppStore, PropTypes>,
//   ComposedComponent: ComponentType<PropTypes>,
// ): ComponentType<PropTypes> => {
//   @observer
//   class StoreInjector extends Component<PropTypes> {
//     render(): ReactNode {
//       const storeProps = selectorFunction(this.context, this.props);

//       const props = {
//         ...this.props,
//         ...storeProps,
//       };

//       return (
//         <ComposedComponent
//           // eslint-disable-next-line react/jsx-props-no-spreading
//           {...props as PropTypes}
//         />
//       );
//     }
//   }

//   StoreInjector.contextType = StoreContext;

//   return StoreInjector;
// };

export {};
