import React from 'react'
import { Navigate } from 'react-router-dom'
import { firebase } from '../firebase'

// Working Class component without props
// class AuthGuard extends React.Component {

//     constructor(Component) {
//         super();
//         this.MyComponent = Component;
//         // console.log('Component');
//         // console.log(Component);
//     }

//     authCheck() {
//         const user = firebase.auth().currentUser;
//         if (user) {
//             return <>{<this.MyComponent.Dashboard {...this.props}/>}</>;
//         } else {
//             return <Navigate to='/' />
//         }
//     }

//     render() {
//         return this.authCheck();
//     }
// }

// export default AuthGuard;

    // console.log('AuthHoc');
    // console.log(AuthHoc);

    // console.log('AuthHoc Component');
    // console.log(Component);

    // return <Component />;

const AuthGuard = (props) => {
    const user = firebase.auth().currentUser;
    if (user) {
        return <props.Dashboard />
    } else {
        return <Navigate to='/'/>
    }
    // console.log('AuthGuardprops');
    // console.log(props.Dashboard);
}

    

    // const AuthGuard = (Component) => {

    // class AuthHoc extends React.Component {

    //     authCheck = (cp) => {
    //         console.log('AuthHoc');
    //         const user = firebase.auth().currentUser;
    //         if (user) {
    //             alert('authCheck if');
    //             return <cp />;
    //         } else {
    //             alert('authCheck else');
    //             return <Navigate to='/'/>
    //         }
    //     }

    //     render(cp) {
    //         console.log('Inside render');
    //         return this.authCheck(cp);
    //     }
    // }
    // return AuthHoc;
    // return <Component />;
// }

export default AuthGuard;

