import React from 'react';
import Route, {Switch} from 'react-router-dom'
import routes from './routes'
import Items from "@/components/admins/Items";
import Users from "@/components/admins/Users";
import Coupons from "@/components/admins/Coupons";
import Roles from "@/components/admins/Roles";

const Dashboard = (props) => {

    // const getRoutes = (routes) => {
    //     return routes.map((prop, key) => {
    //         return (
    //             <Route render={(props) => <prop.component title={prop.name} {...props} />} path={prop.layout + prop.path} key={key}/>
    //         );
    //     });
    // }

    // const getTitle = () => {
    //     for (let i = 0; i < routes.length; i++) {
    //         if (props.location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
    //             return routes[i].name;
    //         }
    //     }
    //     return <div className="d-flex align-items-center" onClick={props.history.goBack}><i className='ni ni-bold-left'/> <span>Назад</span></div>;
    // }

    return (
        <div className='main_container'>
            {/*<Switch>*/}
            {/*    <Route path="/admin-panel/Dashboard/items" component={Items} />*/}
            {/*    <Route path="/admin-panel/Dashboard/coupons" component={Coupons} />*/}
            {/*    <Route path="/admin-panel/Dashboard/users" component={Users} />*/}
            {/*    <Route path="/admin-panel/Dashboard/roles" component={Roles} />*/}
            {/*</Switch>*/}
        </div>
    );
};

export default Dashboard;