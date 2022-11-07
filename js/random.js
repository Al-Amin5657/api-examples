const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displyUsers(data.results))
}

const displyUsers = users => {
    const userContainer = document.getElementById('user-container');
    for (const user of users) {
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h3>User name: </h3>
        <p>Email:${user.email}</p>
        <p>User LOcation: ${user.location.city}, ${user.location.country}:</p>
        <p>Name: ${user.name.title} ${user.name.first} ${user.name.last}</p>
        `;
        userContainer.appendChild(userDiv);
    }
}

loadUsers();