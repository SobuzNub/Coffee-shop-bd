import { FaUserCog } from 'react-icons/fa'
import MenuItems from '../../../MenuItem/MenuItems'
import useRole from '../../../hooks/useRole'


const AdminMenu = () => {
  const [role] = useRole();
  return (
    <>
      {role === 'admin' && <MenuItems icon={FaUserCog} label='Manage Users' address='manage-users' />}
    </>
  )
}

export default AdminMenu