import { API_BASE_URL } from "./config.js";

async function logout() {
    if(!localStorage.getItem('isAuth')) {
        return
    }
    const res = await fetch(`${API_BASE_URL}/logout.php`, {
       headers: { "Content-Type": "application/json" },
         credentials: 'include'
    });

    const data = await res.json();
    
    if(!data.error) {
        window.localStorage.removeItem('isAuth');
        window.location.href = 'login.html';
    }
}

const logoutEl = document.querySelector('.logout')

if(logoutEl) {
    logoutEl.addEventListener('click', logout)
}