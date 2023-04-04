import Users from '../../components/admins/Users'
import Items from '../../components/admins/Items'
import Coupons from '../../components/admins/Coupons'
import Roles from '../../components/admins/Roles'

const routes = [
    {
        path: "/",
        name: "Товары",
        component: Items,
        icon: "",
        layout: "/admin-panel/Dashboard"
    },
    {
        path: "/coupons",
        name: "Купоны",
        component: Coupons,
        icon: "",
        layout: "/admin-panel/Dashboard"
    },
    {
        path: "/users",
        name: "Пользователи",
        component: Users,
        icon: "",
        layout: "/admin-panel/Dashboard"
    },
    {
        path: "/roles",
        name: "Роли",
        component: Roles,
        icon: "",
        layout: "/admin-panel/Dashboard"
    }
]

export default routes;