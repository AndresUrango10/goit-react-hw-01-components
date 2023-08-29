//?PROFILE
import { Profile } from './profile/Profile'
import user from '../data/user.json';
//?STATISTICS
import { Statistics } from './statistics/Statistics'
import data from '../data/data.json'
//?FRIENDSLIST
import { FriendList } from './friendList/FriendList'
import friends from '../data/friends.json'
//?TRANSACTIONHISTORY
import { TransactionHistory } from './transactionHistory/TransactionHistory'
import transactions from '../data/transactions.json'


export const App = () => {
  return (
    <div style={{
      width: '1200px',
      margin:'0 auto'
    }}>
      {/* Sección de perfil */}
      <h1 style={{textAlign: 'center'}}>TASK 1 PERFIL</h1>
      <Profile
        userName={user.username}//PROP: USARNAME
        tag={user.tag}//PROP: TAG
        location={user.location}//PROP LOCATION
        avatar={user.avatar}//PROP AVATAR
        stats={user.stats}//PROP STAST
      />
      
      {/* Sección de estadísticas */}
      <h1 style={{textAlign: 'center'}}>TASK 2 ESTADISTICAS</h1>
      <Statistics title="Upload stats" stats={data} />{/* Props: Título y datos de estadísticas {TITLE, STATS}*/}

      {/* Lista de amigos */}
      <h1 style={{textAlign: 'center'}}>TASK 3 AMIGOS</h1>
      <FriendList friends={friends} />{/* Prop: Arreglo de amigos {FRIENDS}*/}

      {/* Historial de transacciones */}
      <h1 style={{textAlign: 'center'}}>TASK 4 TRANSACCIONES</h1>
      <TransactionHistory items={transactions} />; {/* Prop: Arreglo de transacciones {ITEMS} */}
    </div>
  );
};
