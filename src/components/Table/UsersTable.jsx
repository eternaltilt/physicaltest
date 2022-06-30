import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import {
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
} from 'react-bootstrap';

function UsersTable({ users }) {
  const [allUsers, setAllUsers] = useState(users);
  const [sortingItem, setSortingItem] = useState('Сортировать:');
  const [sortingBy, setSortingBy] = useState('по возрастанию');
  const [searchingItem, setSearchingItem] = useState('Поиск:');
  const [searchingWord, setSearchingWord] = useState('');

  const sortingHandler = () => {
    if (sortingItem === 'id') {
      if (sortingBy === 'по возрастанию') {
        const sortingArray = [...allUsers];
        const sortedArr = sortingArray.sort((a, b) => a.id - b.id);
        setAllUsers(sortedArr);
      } else {
        const sortingArray = [...allUsers];
        const sortedArr = sortingArray.sort((a, b) => b.id - a.id);
        setAllUsers(sortedArr);
      }
    } else {
      if (sortingBy === 'по возрастанию') {
        const sortingArray = [...allUsers];
        const sortedArr = sortingArray.sort();
        setAllUsers(sortedArr);
      } else {
        const sortingArray = [...allUsers];
        const sortedArr = sortingArray.sort().reverse();
        setAllUsers(sortedArr);
      }
    }
  };
  const searchHandler = () => {
    if (searchingItem !== 'pay_status') {
      const regExp = new RegExp(`${searchingWord}`);
      const sortingArray = [...users];
      const resultArr = sortingArray.filter((user) => {
        return regExp.test(user[searchingItem]);
      });
      setAllUsers(resultArr);
    } else {
      const sortingArray = [...users];
      switch (searchingWord) {
        case '+':
          const plusStatusArr = sortingArray.filter(
            (user) => user['pay_status'] === true
          );
          setAllUsers(plusStatusArr);
          break;
        case '-':
          const minusStatusArr = sortingArray.filter(
            (user) => user['pay_status'] === false
          );
          setAllUsers(minusStatusArr);
          break;
        default:
          setAllUsers([]);
      }
    }
  };
  return (
    <div>
      <div className="container">
        <InputGroup className="mt-5 mb-5">
          <DropdownButton variant="warning" title='Выберите критерий'>
            <Dropdown.Item onClick={() => setSearchingItem('id')}>
              id
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSearchingItem('email')}>
              email
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSearchingItem('first_name')}>
              first name
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSearchingItem('pay_status')}>
              pay status
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSearchingItem('last_name')}>
              last name
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSearchingItem('username')}>
              username
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSearchingItem('profile_link')}>
              profile link
            </Dropdown.Item>
          </DropdownButton>
          <FormControl
            aria-label="Text input with dropdown button"
            placeholder="Поиск"
            onChange={(event) => setSearchingWord(event.target.value)}
          />
          <button type="button" className="btn-warning" onClick={searchHandler}>
            Поиск
          </button>
        </InputGroup>
      </div>
      <div className="container">
        <Table striped bordered hover variant="warning">
          <thead>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>first Name</th>
              <th>pay status</th>
              <th>last Name</th>
              <th>username</th>
              <th>profile link</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, index) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.first_name}</td>
                  <td>{user.pay_status ? '+' : '-'}</td>
                  <td>{user.last_name}</td>
                  <td>{user.profile_link}</td>
                  <td>{user.username}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      <div className="container">
        <InputGroup className="mb-2">
          <DropdownButton variant="warning" title={sortingItem}>
            <Dropdown.Item onClick={() => setSortingItem('id')}>
              id
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSortingItem('first_name')}>
              first name
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSortingItem('last_name')}>
              last name
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSortingItem('username')}>
              username
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            variant="warning"
            title='Выберите критерий'
            id="input-group-dropdown-1"
          >
            <Dropdown.Item onClick={() => setSortingBy('по возрастанию')}>
              по возрастанию
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSortingBy('по убыванию')}>
              по убыванию
            </Dropdown.Item>
          </DropdownButton>
        </InputGroup>
        <button
          type="button"
          className="btn btn-warning "
          onClick={sortingHandler}
        >
          Сортировка
        </button>
      </div>
    </div>
  );
}

export default UsersTable;
