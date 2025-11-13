document.write('<h2>Завдання 1</h2>');
let today = new Date(),
    newYearDate = new Date(today.getFullYear() + 1, 0, 1);

document.write('<p>today: ' + today.toLocaleString() + '</p>');
document.write('<p>newYearDate: ' + newYearDate.toLocaleString() + '</p>');
document.write('<p>newYearDate - today: ' + (newYearDate - today) + '</p>');
document.write('<p>newYearDate.getTime() - today.getTime(): ' + (newYearDate.getTime() - today.getTime()) + '</p>');

document.write('<h2>Завдання 2</h2>');
let msDiff = newYearDate - today,
    days = Math.floor(msDiff / (24 * 60 * 60 * 1000)),
    hours = Math.floor((msDiff / (1000 * 60 * 60)) % 24),
    mins = Math.floor((msDiff / 1000 / 60) % 60),
    secs = Math.floor((msDiff / 1000) % 60);

document.write('<p>До Нового року: ' + days + ':' + hours + ':' + mins + ':' + secs + '</p>');

document.write('<h2>Завдання 3</h2>');
let options = {
  era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timeZone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

document.write(`<p>${today.toLocaleString('ar-EG')}</p>`);
document.write(`<p>${today.toLocaleString('ar-EG', options)}</p>`);
document.write(`<p>${today.toLocaleString('en-EN')}</p>`);
document.write(`<p>${today.toLocaleString('en-GB')}</p>`);
document.write(`<p>${today.toLocaleString('en-GB', options)}</p>`);
document.write(`<p>${today.toLocaleString('uk-UA', options)}</p>`);

document.write('<h2>Завдання 4</h2>');
let optionss = {
  year: '2-digit',
  month: 'short',
  day: '2-digit',
  weekday: 'short',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
};

document.write(`<p>${today.toLocaleString('ar-EG', optionss)}</p>`);
document.write(`<p>${today.toLocaleString('en-GB', optionss)}</p>`);
document.write(`<p>${today.toLocaleString('ru-RU', optionss)}</p>`);
document.write(`<p>${today.toLocaleString('uk-UA', optionss)}</p>`);


document.write('<h2>Завдання 5</h2>');

document.write(`
<div class="test">
<select id="year">
  <option value="2018">2018</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
  <option value="2025">2025</option>
</select>
<div id="output13"></div>
</div>
`);

const yearSelect = document.getElementById('year');
const output13 = document.getElementById('output13');

yearSelect.addEventListener('change', friday13);

function friday13() {
  const year = parseInt(this.value);
  let str = '';
  for (let i = 0; i < 12; i++) {
    let d = new Date(year, i, 13);
    if (d.getDay() === 5) {
      str += `<p>П’ятниця, ${d.toLocaleDateString()}</p>`;
    }
  }
  output13.innerHTML = str;
}

yearSelect.value = new Date().getFullYear();
friday13.call(yearSelect);