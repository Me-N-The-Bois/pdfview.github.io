let intro = document.getElementById('todays-subject');
let date = new Date().getDate()
const tt = { '22': 'SPM', '23': 'IOT', '26': 'AWP', '28': 'AI', '29': 'NGT' }

window.addEventListener('load', () => {
    intro.innerHTML = (tt[date]) ? tt[date] : date;
});

